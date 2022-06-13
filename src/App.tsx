import React, {useEffect} from 'react';
import {Current, Main} from "./pages";
import {Routes, Route,Navigate} from 'react-router-dom'

function App() {
    useEffect(() => {
        sessionStorage.setItem('userId', (Date.now() + Math.floor(performance.now())).toString())
    })

    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/current" element={<Current/>}/>
            <Route path="*" element={<Navigate to="/" replace/>}/>
        </Routes>
    );
}

export default App;
