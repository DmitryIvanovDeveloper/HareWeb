import React from 'react';
import './App.css';
import GameWebGL from './Components/Game/GameWebGL.tsx';
import { initBot } from './Components/telegramBot/TelegramBot.ts';

function App() {
    return (
        <>
            <GameWebGL />
        </>
    );
}

export default App;
