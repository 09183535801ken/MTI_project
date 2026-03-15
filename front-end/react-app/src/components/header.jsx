function Header() {
  return (
    <header className="site-header">
      <div className="container header-content">
        <div className="logo">TMI</div>
        <nav className="nav-links">
          <a href="#top">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#principals">Principals</a>
          <a href="#seafarers">Seafarers</a>
          <a href="#training">Training</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="btn btn-outline">Seafarer Jobs</button>
      </div>
    </header>
  )
}

export default Header