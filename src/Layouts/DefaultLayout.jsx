import Navbar from "../components/Navbar";
const  DefaultLayout = ({children}) => {
    return(
        <main>
                <Navbar />
            <div>
                {children}
            </div>
        </main>
    )
}

export default DefaultLayout;