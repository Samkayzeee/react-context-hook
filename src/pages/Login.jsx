import { useContext } from "react";
import { AppContext } from "../contexts/AppProvidre";
import Sidenav from "../Layouts/Sidenav";
const Login = ()=> {
        const appName = useContext(AppContext)
    return(
        <>
        <Sidenav>

<form style={{border:"solid 1px",padding:"8px", width:"fit-content",marginLeft:"20%"}}>
            <h4>{appName}</h4>
    <div className="mb-3">
            <label  className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
     </div>
     <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
    </div>
    <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label">Check me out</label>
    </div>
            <button type="submit" className="btn btn-primary">Submit</button>
</form>
        </Sidenav>
        </>
    );
}
export default Login;