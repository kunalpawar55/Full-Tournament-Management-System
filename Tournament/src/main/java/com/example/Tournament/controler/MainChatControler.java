package com.example.Tournament.controler;


import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/chat")
@CrossOrigin(origins = "http://localhost:8081") 
public class MainChatControler {

    @PostMapping
    public Map<String, String> chat(@RequestBody Map<String, String> request) {
        String userMessage = request.get("message");
        String botReply = generateReply(userMessage);

        Map<String, String> response = new HashMap<>();
        response.put("reply", botReply);
        return response;
    }
    private String generateReply(String message) {
        message = message.toLowerCase();
        if(message.contains("hi bhai"))
        {
        	return "Bol Bhai ";
        }
        if (message.contains("hello") || message.contains("hi")) {
            return "Hello! How can I help you today?";
        } else if (message.contains("time")) {
            return "The current system time is: " + java.time.LocalTime.now();
        } else if (message.contains("date")) {
            return "Today's date is: " + java.time.LocalDate.now();
        } else if (message.contains("bye")) {
            return "Goodbye! Have a great day 😊";
        } else if(message.contains("kunal")) {
            return "Hello Sir Kunal is My boss. He will develop me.";
        } else if(message.contains("who is your boss")) {
            return "Kunal is my Boss";
        } 
        else if(message.contains("what is chat gpt") || message.contains("chatgpt"))
        {
            return "Chat GPT is my competitor, but I know in future I will be more popular than Chat GPT.";
        }
        
        
        else {
            return "I'm not sure about that, but I'm learning every day!";
        }
   
    }
}
