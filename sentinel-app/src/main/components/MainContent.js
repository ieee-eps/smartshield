import "./MainContent.css";

export default function MainContent({ children, showIf, centered }) {
    if(showIf) {
        return <div id="main" className={centered ? "centered" : ""}>
            {children}
        </div>
    } else {
        return <></>
    }
}