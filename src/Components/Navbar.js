const Navbar = ({ setCategory }) => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-body-tertiary"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span
            className="badge bg-light text-dark fs-4"
            onClick={() => setCategory("general")}
          >
            News Digest
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav user-select-none">
            <li className="nav-item">
              <div
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => setCategory("technology")}
              >
                Technology
              </div>
            </li>

            <li className="nav-item">
              <div
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => setCategory("health")}
              >
                Health
              </div>
            </li>

            <li className="nav-item">
              <div
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => setCategory("business")}
              >
                Business
              </div>
            </li>

            <li className="nav-item">
              <div
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => setCategory("entertainment")}
              >
                Entertainment
              </div>
            </li>

            <li className="nav-item">
              <div
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => setCategory("science")}
              >
                Science
              </div>
            </li>

            <li className="nav-item">
              <div
                className="nav-link"
                style={{ cursor: "pointer" }}
                onClick={() => setCategory("sports")}
              >
                Sports
              </div>
            </li>
          </ul>
        </div>
        
        {/* <form className="d-none d-lg-flex align-items-center">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form> */}
      </div>
    </nav>
  );
};
export default Navbar;
