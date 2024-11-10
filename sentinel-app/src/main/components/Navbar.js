import "./Navbar.css";

export default function Navbar({ children, ...other }) {
    return <div id="nav-bar" {...other}>
        { children }
    </div>
}

export function NavbarItem({ children, icon, active, ...other }) {
    return <div className={"item" + (active ? " active" : "")} {...other}>
        {
            (icon ? <div className={"icon"}>{ icon }</div> : "")
        }
        <span className={"content"}>
            { children }
        </span>
    </div>
}