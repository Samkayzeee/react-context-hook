import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to={'/'}>LOGO</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
<Link className="nav-link active" aria-current="page" style={{textDecoration:"none",padding:"8px"}} to={"/"}>Home</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link" to={"#"}>Link</Link>
        </li> */}
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to={"#"} id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to={"/sign"}>Sign Up</Link></li>
            <li><Link className="dropdown-item" to={"/login"}>Log In</Link></li>
            <li><Link className="dropdown-item" to={"/last"}>Last Page</Link></li>
          </ul>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link disabled" to={"#"} tabIndex="-1" aria-disabled="true">Disabled</Link>
        </li> */}
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
        </>
    )
}

export default Navbar;