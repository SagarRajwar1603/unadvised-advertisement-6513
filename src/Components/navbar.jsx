import { Link } from 'react-router-dom'
import "../CSS/Navbar.css"
export default function Navbar(){

    return<>
    <div className='navLinkDiv'>
      <Link to="/" className='Link'> <h4>Behance</h4> </Link>
      <Link to="" className='Link'> <h5>For You</h5> </Link>
      <Link to="" className='Link'> <h5>Discover</h5> </Link>
      <Link to="" className='Link'> <h5>Live</h5> </Link>
      <Link to="" className='Link'> <h5>Hire</h5> </Link>
      <Link to="" className='Link'> <h5>Jobs</h5> </Link>
      </div>
    </>
}