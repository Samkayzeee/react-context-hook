import Navbar2 from "../components/Navbar2";

const Sidenav = ( {children} ) => {
    return(
        <>
        <Navbar2 />

        <div>
            {children}
        </div>
        </>
    );
}
export default Sidenav;