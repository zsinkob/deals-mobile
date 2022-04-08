import React from 'react';
import './App.css';
import DealList from "./pages/DealList";
import Notification from "./components/Nofitication";

function App() {

    return (
        <div className="App">
            <Notification />
            <header className="App-header">
                <DealList/>
            </header>
        </div>
    );
}

export default App;
