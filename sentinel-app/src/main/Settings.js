import White from "./components/White";
import {Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography} from "@mui/material";
import Layout from "./components/ui/Layout.js";
import {useEffect, useState} from "react";
import axios from "axios";


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
                    localStorage.setItem("cortex-username", e.target.value)
                }}></TextField>
            <TextField
                type={"password"}
                label={"Password"}
                value={password}
                onInput={e => {
                    setPassword(e.target.value);
                    localStorage.setItem("cortex-password", e.target.value)
                }}></TextField>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Organization</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={organization || "No organization selected"}
                    label="Organization"
                    onChange={(e) => setOrganization(e.target.value)}
                >
                    <MenuItem value={""}>A</MenuItem>
                </Select>
            </FormControl>
            <Button variant="contained">Login</Button>
        </Layout>
    </>
}