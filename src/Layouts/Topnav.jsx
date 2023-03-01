import Navbar from "../components/Navbar";

const Topnav = ({children}) => {
    return(
        <>
        <Navbar />

        <div>
            {children}
        </div>
        </>
    );
}

export default Topnav;