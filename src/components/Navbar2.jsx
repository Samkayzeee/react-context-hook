import { useContext } from 'react';
import {Link} from 'react-router-dom';
import { ThemeContext } from '../contexts/ThemeProvider';

const Navbar2 = () => {
    const context = useContext(ThemeContext)
    return(
        <>
<div className={`sidenav bg-${context.theme}`}>
            <Link style={{textDecoration:"none",padding:"8px"}} to={"/"}>Home</Link>
            <Link style={{textDecoration:"none",padding:"8px"}} to={"/sign"}>Sign up</Link>
            <Link style={{textDecoration:"none",padding:"8px"}} to={"/login"}>Login</Link> 
            <button className={"m-2"} onClick={() => context.setTheme(context.theme === "light" ? "dark" : "light")}>Change bg-color</button>    
</div>
        </>
    );
}

export default Navbar2;