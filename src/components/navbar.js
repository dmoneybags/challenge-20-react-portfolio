import resume from "../assets/resume.docx"

export function Navbar({tab, setTab}){
    return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item">
          Daniel DeMoney
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <a className={`navbar-item ${tab==='aboutMe' ? "is-selected": ""}}`} onClick={() =>{setTab("aboutMe")}}>
            About me
          </a>
          <a className={`navbar-item ${tab==='portfolio' ? "is-selected": ""}`} onClick={() =>{setTab("portfolio")}}>
            Portfolio
          </a>
          <a className={`navbar-item ${tab==='contact' ? "is-selected": ""}`} onClick={() =>{setTab("contact")}}>
            Contact
          </a>
          <a className="navbar-item" download={resume}>
            Resume
          </a>
        </div>
      </div>
    </nav>
    )
}