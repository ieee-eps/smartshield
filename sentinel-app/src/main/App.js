import '@material/web/all.js';
import Navbar, {Item, NavbarItem} from "./components/Navbar";
import MainContent from "./components/MainContent";
import {GearSix, HouseSimple, Network} from "@phosphor-icons/react";
import {useState} from "react";
import Accueil from "./Accueil";
import Settings from "./Settings";
import {SliderRail} from "@mui/material";
import {MdNavigationBar} from "@material/web/labs/navigationbar/navigation-bar";


function App() {
    let [page, setPage] = useState("accueil");

    return <>
        <MainContent showIf={page === "accueil"} centered>
            <Accueil/>
        </MainContent>
        <MainContent showIf={page === "reseau"}>
            <Accueil/>
        </MainContent>
        <MainContent showIf={page === "parametres"} centered>
            <Settings/>
        </MainContent>
        <Navbar>
            <NavbarItem
                active={page === "accueil"}
                icon={<HouseSimple weight={"duotone"}/>}
                onClick={() => setPage("accueil")}
            >
                Home
            </NavbarItem>
            <NavbarItem
                active={page === "reseau"}
                icon={<Network weight={"duotone"}/>}
                onClick={() => setPage("reseau")}
            >
                Network
            </NavbarItem>
            <NavbarItem
                active={page === "parametres"}
                icon={<GearSix weight={"duotone"}/>}
                onClick={() => setPage("parametres")}
            >
                Settings
            </NavbarItem>
        </Navbar>
    </>
}

export default App;