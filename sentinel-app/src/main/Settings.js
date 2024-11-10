import White from "./components/White";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import Layout from "./components/ui/Layout.js";
import {useEffect, useState} from "react";
import axios from "axios";
import CortexCom from "../CortexCom";


export default function Settings() {

    let [connected, setConnected] = useState(false);
    let [username, setUsername] = useState(localStorage.getItem("cortex-username") || "");
    let [password, setPassword] = useState(localStorage.getItem("cortex-password") || "");
    let [organization, setOrganization] = useState(null);

    useEffect(() => {
        axios
    }, []);

    return <>
        <Typography variant={"h2"}>
            SETTINGS
        </Typography>
        <White height={50}/>
        <Typography variant={"subtitle1"}>
            SERVER CONFIGURATION
        </Typography>
        <White height={20}/>
        <Layout vertical gap={"10px"}>
            <TextField label={"Host"}></TextField>
            <Button variant="contained">Connect</Button>
        </Layout>
        <White height={20}/>
        <Typography variant={"subtitle1"}>
            USER CONFIGURATION
        </Typography>
        <White height={20}/>
        <Layout vertical gap={"10px"}>
            <TextField
                label={"Username"}
                value={username}
                onInput={e => {
                    setUsername(e.target.value);
                }}></TextField>
            <TextField
                type={"password"}
                label={"Password"}
                value={password}
                onInput={e => {
                    setPassword(e.target.value);
                }}></TextField>
            <Button variant="contained" onClick={async () => {
                let data = CortexCom.authenticate(username, password)
                if(data?.session) {
                    localStorage.setItem("cortex-username", username);
                    localStorage.setItem("cortex-password", password);
                    localStorage.setItem("cortex-session", data.session);
                    location.href = location.href
                }
            }}>Login</Button>
        </Layout>
    </>
}