import './navigation.styles.scss'
import { Link } from 'react-router-dom'

import logo from '../../assets/logo_transparent.png'

const Naviagation = () => {
  return (
    <div className="navigation">
        <Link to='/' className='nav-link'>
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
    </div>
  )
}

export default Naviagation