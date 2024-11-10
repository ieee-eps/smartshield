import White from "./components/White";
import Layout from "./components/ui/Layout";
import Card from "./components/Card";
import Effect from "./components/Effect";
import Ignore from "./components/Ignore";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography} from "@mui/material";


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
        <White height={50}/>
        <Typography variant={"h4"}>
            LAST INCIDENTS
        </Typography>
        <White height={50}/>
        <TableContainer component={Paper} sx={{
            maxWidth: "800px"
        }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Severity</TableCell>
                        <TableCell>Reported at</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        <TableCell align={"center"} colspan={4}><i>No incidents reported</i></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    </>
}