import "./Card.css"

export default function Card({ title, children, color, textColor }) {
    return <div className="card" style={{
        ...(color ? { backgroundColor: color } : {}),
        ...(textColor ? { color: textColor } : {})
    }}>
        <div className="title">
            {title}
        </div>
        <div className="content">
            {children}
        </div>
    </div>
}