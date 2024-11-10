import {createRoot} from "react-dom/client";
import {Route, Routes} from "react-router-dom";
import {StrictMode} from "react";
import App from "./main/App";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";

const root = createRoot(document.getElementById("root"));
root.render(<StrictMode>
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>
</StrictMode>);