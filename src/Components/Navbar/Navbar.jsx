import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div className="Navbar">
      <div className="title">
        <Link to="/"><img src="https://thumbs.dreamstime.com/b/lets-shopping-logo-design-template-shop-icon-135610500.jpg" alt="" /></Link>
      </div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/electronics">Electronics</Link>
        <Link to="/jewelry">Jewelery</Link>
        <Link to="/mens">Mens</Link>
        <Link to="/womens">Womens</Link>
      </div>

      <div className="nextlinks">
        <Link to="/profile">
          <i className="bi bi-person-circle text-light mx-3"></i>
        </Link>
        <Link>
          <i className="bi bi-cart text-light mx-3"></i>
        </Link>
        <Link>
          <i className="bi bi-bag-heart text-light mx-3"></i>
        </Link>

        <button className='btn btn-sm btn-outline-light mx-4'>Logout</button>
      </div>
    </div>

  )
}
export default Navbar;