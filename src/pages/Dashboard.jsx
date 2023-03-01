import Topnav from "../Layouts/Topnav";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return(
        <>
            <Topnav>
                <div>
                    <h1>
                    This is The Dashboard page
                    </h1>
        <div>
            <h1 style={{marginTop:"3%"}}>Contacts</h1>
            <ul>
                <li><h1>Presido</h1></li>
                <li><h1>Samkayzee</h1></li>
                <li><h1>Abdulsamad</h1></li>
                <li><h1>Director</h1></li>
            </ul>
            <h1>To view the last page click on the Link Below</h1>
            <h1>  <Link style={{textDecoration:"none",padding:"8px"}} to={"/last"}>Lastpage</Link> </h1>
        </div> 
                </div>
            </Topnav>
        </>
    )
}
export default Dashboard;