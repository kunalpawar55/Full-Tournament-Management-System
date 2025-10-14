import React, { useState } from "react";
import axios from "axios";
import {
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  TextField,
  Avatar,
  Stack,
  Paper,
} from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import SendIcon from "@mui/icons-material/Send";

export default function MainComponent({ prop, setprop }) {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);
  const userData = JSON.parse(localStorage.getItem('user'));
const username = userData?.name || '';

let secondChar = '';
for (let i = 0; i < username.length; i++) {
  if (username[i] === ' ' && username[i + 1]) {
    secondChar = username[i + 1].toUpperCase(); 
    break;
  }
}

const finalUsername = username
  ? username.charAt(0).toUpperCase() + secondChar: 'U';
  const sendMessage = async () => {
    if (!message.trim()) return;

    setChat((prev) => [...prev, { sender: "user", text: message }]);

    try {
      const res = await axios.post("http://localhost:8080/api/chat", {
        message,
      });
      setChat((prev) => [...prev, { sender: "bot", text: res.data.reply }]);
    } catch (err) {
      console.error(err);
      setChat((prev) => [
        ...prev,
        { sender: "bot", text: " Error connecting to server." },
      ]);
    }

    setMessage("");
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <AppBar
        position="static"
        sx={{ background: "linear-gradient(135deg, #0e3657, #1e5a89)" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Chatbot
          </Typography>
          <IconButton color="inherit" onClick={() => setprop(!prop)}>
            <CancelIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          flex: 1,
          p: 2,
          bgcolor: "#f5f6fa",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
        }}
      >
        {chat.length === 0 && (
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              color: "gray",
              fontStyle: "italic",
              mt: 2,
            }}
          >
            👋 Hello! How can I assist you today?
          </Typography>
        )}

        {chat.map((msg, index) => (
          <Stack
            key={index}
            direction={msg.sender === "user" ? "row-reverse" : "row"}
            alignItems="flex-start"
            spacing={1}
          >
            <Avatar
              sx={{
                bgcolor: msg.sender === "user" ? "#1976d2" : "gray",
                width: 32,
                height: 32,
                fontSize: "0.9rem",
              }}
            >
              {msg.sender === "user" ? `${finalUsername}` : "B"}
            </Avatar>
            <Paper
              elevation={1}
              sx={{
                p: 1.2,
                borderRadius: 2,
                maxWidth: "70%",
                bgcolor: msg.sender === "user" ? "#1976d2" : "#e0e0e0",
                color: msg.sender === "user" ? "#fff" : "#000",
              }}
            >
              <Typography variant="body2">{msg.text}</Typography>
            </Paper>
          </Stack>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          p: 1.5,
          borderTop: "1px solid #ddd",
          bgcolor: "#f9f9f9",
        }}
      >
        <TextField
          fullWidth
          size="small"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "25px",
              backgroundColor: "white",
            },
          }}
        />
        <IconButton
          color="primary"
          onClick={sendMessage}
          sx={{
            ml: 1,
            bgcolor: "#0e3657",
            color: "white",
            "&:hover": { bgcolor: "#1e5a89" },
          }}
        >
          <SendIcon />
        </IconButton>
      </Box>
    </Box>
  );
}
