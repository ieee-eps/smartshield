import "./Effects.css";

export default function Effect({ children, effects }) {

    if(typeof effects === "string") {
        effects = [effects]
    }

    let classNames = []

    for(let e of effects) {
        classNames.push("effect-" + e)
    }

    return <span className={classNames.join(" ")}> { children } </span>
}