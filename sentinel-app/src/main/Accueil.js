import White from "./components/White";
import Layout from "./components/ui/Layout";
import Card from "./components/Card";
import Effect from "./components/Effect";
import Ignore from "./components/Ignore";


export default function Accueil() {
    return <>
        <Ignore><h1 className={"spaced-letters"}>
            HOME
        </h1></Ignore>
        <div className="logo">
            <img src="/img/logo-fit-notext.png" width={"200px"}/>
        </div>
        <White height={50}/>
        <Layout gap={"10px"}>
            <Card title={"Status"} color={"#3da83b"}>
                <Effect effects={"slowBlink"}>
                    OK
                </Effect>
            </Card>
            <Card title={"NETWORK"} color={"#3da83b"}>
                <Effect effects={"slowBlink"}>
                    UP
                </Effect>
            </Card>
            <Card title={"Request / Min"}>
                ~17 k
            </Card>
            <Card title={"Without incident"}>
                13 days
            </Card>
        </Layout>
    </>
}