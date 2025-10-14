import React from 'react';
import MainComponent from './MainComponent';
import { IconButton, Typography } from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';

export default function SmallChat() {
    const [handelstate, sethandelstate] = React.useState(false);

    return (
        <>
            <IconButton
                onClick={() => sethandelstate(!handelstate)}
                sx={{
                    position: 'sticky',
    bottom: '88%', 
                    right: 20,
                    backgroundColor: '#1976d2',
                    color: 'white',
                    borderRadius: '50%',
                    width: 60,
                    height: 60,
                    zIndex: 9999,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    '&:hover': { backgroundColor: '#1565c0' },
                }}
            >
                <SmartToyIcon />
                <Typography sx={{ fontSize: '10px', mt: 0.5 }}>Chat</Typography>
            </IconButton>

            {/* Chat Box */}
            {handelstate && (
                <div
                    style={{
                        position: 'sticky',
                        bottom: '88%', 
                        right: 20,
                        width: 350,
                        height: 500,
                        backgroundColor: 'white',
                        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
                        borderRadius: 10,
                        zIndex: 9999,
                        display: 'flex',
                        flexDirection: 'column',
                    }}
                >
                    <MainComponent prop={handelstate} setprop={sethandelstate} />
                </div>
            )}
        </>
    );
}
