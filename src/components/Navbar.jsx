import { Link } from 'react-router-dom'
import '../CSS/Navbar.css'
const Navbar = (props) => {
  // if the user is logged in
  const loggedIn = (
    <>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <span onClick={props.handleLogout}>log out</span>
      </Link>

      <Link to="/profile" style={{ textDecoration: 'none' }}>
        profile
      </Link>
    </>
  )

  // if the user is logged out
  const loggedOut = (
    <>
      <Link to="/signup" style={{ textDecoration: 'none' }}>
        <li>sign up</li>
      </Link>

      <Link to="/login" style={{ textDecoration: 'none' }}>
       <li>login</li>
      </Link>
    </>
  )

  return (
    <nav className="navigation">
        <input type="checkbox" id="nav"/>
        <label for="nav">
        <span></span>
        <span></span>
        <span></span>
      </label>
      <ul  className="menu">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <li>user app</li>
      </Link>

      {props.currentUser ? loggedIn : loggedOut}
      </ul>
    </nav>
  )
}

export default Navbar