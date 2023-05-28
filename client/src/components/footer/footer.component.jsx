import './footer.styles.scss'

const year = new Date().getFullYear()

const Footer = () => { 
  return (
    <div className="footer-container">
      <p className='footer-text'>© {year} - whitlocktech</p>
    </div>
  )
}

export default Footer