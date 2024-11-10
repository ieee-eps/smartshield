export default function Layout({ vertical, gap,  children }) {
    return <div style={{
        display: "flex",
        width: "fit-content",
        height: "auto",
        maxWidth: "100%",
        justifyContent: "center",
        flexWrap: "wrap",
        ...(vertical ? {"flex-direction": "column"} : {"flex-direction": "row"}),
        ...(gap ? {gap} : {})
    }}>
        { children }
    </div>
}