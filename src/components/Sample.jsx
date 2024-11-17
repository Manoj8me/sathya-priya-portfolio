import { Link } from "react-router-dom";

<nav className='navbar navbar-expand-sm navbar-light bg-light'>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">IES</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className='collapse navbar-collapse'>
      <ul className='navbar-nav ms-auto'>
        <li className='nav-item'>
          <Link to='/' className='nav-link' style={{ transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.classList.add('text-primary')} onMouseLeave={e => e.currentTarget.classList.remove('text-primary')}>
            Home
          </Link>
        </li>
        <li className='nav-item dropdown'>
          <a className='nav-link dropdown-toggle' href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown">
            Services
          </a>
          <ul className='dropdown-menu' aria-labelledby="servicesDropdown">
            <li><Link to='/estimation' className='dropdown-item'>Estimation</Link></li>
            <li><Link to='/rendering' className='dropdown-item'>Rendering</Link></li>
            <li><Link to='/3dmodel' className='dropdown-item'>3D Model</Link></li>
            <li><Link to='/design' className='dropdown-item'>Design</Link></li>
            <li><Link to='/quote' className='dropdown-item'>Quote</Link></li>
          </ul>
        </li>
        <li className='nav-item'>
          <Link to='/login' className='nav-link' onMouseEnter={e => e.currentTarget.classList.add('text-primary')} onMouseLeave={e => e.currentTarget.classList.remove('text-primary')}>
            My Account
          </Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
