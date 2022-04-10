import React, {useEffect, useState} from 'react';
import './App.css';
import DealList from "./pages/DealList";
import Notification from "./components/Nofitication";
import axios from "axios";
import Profile from "./pages/Profile";

function App(props) {

    let [profile, setProfile] = useState();

    useEffect(() => {
        if (!profile) {
            axios.get(`https://randomuser.me/api/`)
                .then(res => {
                    console.dir(res);
                    const profile = res.data.results[0];
                    setProfile(profile);
                })
        }
    })

    return (
        <div className="App">
            <Notification/>
            {profile ? <Profile profile={profile}/> : null}
            <header className="App-header">
                <DealList/>
            </header>
        </div>
    );
}

export default App;
