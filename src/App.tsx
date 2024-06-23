import React, { useEffect } from 'react';
import './App.css';
import GameWebGL from './Components/Game/GameWebGL.tsx';
import { initBot } from './Components/telegramBot/TelegramBot.ts';

function App() {

    useEffect(() => {
        initBot();
    }, []);
 
    return (
        <>
            <GameWebGL />
        </>
    );
}

export default App;
