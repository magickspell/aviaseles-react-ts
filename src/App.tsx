import React from 'react';
import {AppRouter} from "./app/router";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
