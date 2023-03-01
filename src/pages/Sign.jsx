import Sidenav from "../Layouts/Sidenav";

const Login = () => {

    const signUp = () =>{
        let email = document.getElementById("exampleInputEmail1");
        let password = document.getElementById("exampleInputPassword1");
        let dataBase;
        dataBase={
        Email:email.value,
        Password:password.value
        }
        console.log(dataBase);
        localStorage.setItem('data', JSON.stringify(dataBase));
        // localStorage.setItem('email', email.value);
        // localStorage.setItem('password', password.value);
    }
    return (
        <>
        <Sidenav>
<form style={{border:"solid 1px",padding:"8px", marginLeft:"20%",width:"fit-content"}}>
            <h2>Sign up</h2>
    <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" />
    </div>
    <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
            <button onClick={signUp} className="btn btn-primary">Submit</button>
</form>
        </Sidenav>
        </>
    );
}

export default Login; 