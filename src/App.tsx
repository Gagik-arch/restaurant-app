import React, {useEffect} from 'react';
import {Current, Main} from "./pages";
import {Routes, Route} from 'react-router-dom'

function App() {
    useEffect(() => {
        sessionStorage.setItem('userId', (Date.now() + Math.floor(performance.now())).toString())
    })

    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/current" element={<Current/>}/>
        </Routes>
    );
}

export default App;
