import {
  React,
  useState,
} from 'react'
import './navigation.styles.scss'
import { Link } from 'react-router-dom'
import LoginIcon from '../../assets/login.png'
import LogoutIcon from '../../assets/logout.png'
import MenuIcon from '../../assets/menu.png'
import AddLinkForm from '../addLinkForm/addLinkForm.component'
import Button from '../button/button.component'
// import EditLinkForm from '../editLinkForm/editLinkForm.component'

import logo from '../../assets/logo_transparent.png'

const Navigation = () => {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const [showMenu, setShowMenu] = useState(false)
  const [showAddLinkPopup, setShowAddLinkPopup] = useState(false)
  const [showEditLinkPopup, setShowEditLinkPopup] = useState(false)

  const handleMouseEnter = () => { 
    setShowMenu(true)
  }
  const handleMouseLeave = () => { 
    setShowMenu(false)
  }

  const toggleMenu = () => { 
    setShowMenu(!showMenu)
  }

  const toggleAddLinkPopup = () => { 
    setShowAddLinkPopup(!showAddLinkPopup)
  }
  const handleCancel = () => { 
    setShowAddLinkPopup(false)
  }

  const toggleEditLinkPopup = () => { 
    setShowEditLinkPopup(!showEditLinkPopup)
  }
  return (
    <div className="navigation">
      <div className='nav-link-left'
        onClick={toggleMenu}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={MenuIcon} alt='menu' />
        {showMenu && (
          <div className='menu-popup'>
            <p
              className="menu-link"
            onClick={toggleAddLinkPopup}>
                Add Link
            </p>
            <p className="menu-link"
              onClick={toggleEditLinkPopup}
            >Edit Links</p>
          </div>
        )}
      </div>
      <Link to='/' className='nav-link'>
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      {isLoggedIn ? (
        <Link to='/logout' className='nav-link-right'>
          <img src={LogoutIcon} alt='logout' />
        </Link>
      ) : (
          <Link to='/login' className='nav-link-right'>
            <img src={LoginIcon} alt='login' />
          </Link>
      )}
      {showAddLinkPopup && (
        <div className='add-link-popup'>
              <Button className='close-button' onClick = {handleCancel}>&times;</Button>
          <AddLinkForm />
        </div>
      )}
      {/* showEditLinkPopup && (
        <div className='edit-link-popup'>
          <EditLinkForm link={{ ...link, id: link._id }} />
        </div>
      )*/}
    </div>
  )
}

export default Navigation