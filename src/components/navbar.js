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
          <button className={`navbar-item ${tab==='aboutMe' ? "is-selected": ""}}`} onClick={() =>{setTab("aboutMe")}}>
            About me
          </button>
          <button className={`navbar-item ${tab==='portfolio' ? "is-selected": ""}`} onClick={() =>{setTab("portfolio")}}>
            Portfolio
          </button>
          <button className={`navbar-item ${tab==='contact' ? "is-selected": ""}`} onClick={() =>{setTab("contact")}}>
            Contact
          </button>
          <button className="navbar-item" download={resume}>
            Resume
          </button>
        </div>
      </div>
    </nav>
    )
}