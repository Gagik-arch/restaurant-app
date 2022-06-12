import React from 'react';
import {Current, Main} from "./pages";
import {Routes, Route, Navigate} from 'react-router-dom'

function App() {

    return (
        <Routes>
            <Route  path="/main" element={<Main/>}/>
            <Route path="/current" element={<Current/>}/>
            {/*<Route path={"*"} element={<Navigate to="/main" replace/>}/>*/}
        </Routes>
    );
}

export default App;
