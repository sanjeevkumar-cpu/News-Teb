import '../App.css';

export const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"><span className="brand">NewsTeb</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory("technology")}>Technology</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory("business")}>Business</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory("health")}>Health</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory("sports")}>Sports</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setCategory("entertainment")}>Entertainment</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
