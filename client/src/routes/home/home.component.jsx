import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import "./home.styles.scss"

import Navigation from "../../components/navigation/navigation.component"
import Footer from "../../components/footer/footer.component"

const Home = () => { 
  return (
    <Fragment>
      <div className="home">
        <div className="Navigation-container">
          <Navigation />
        </div>
        <Outlet />
        <Footer />
      </div>  
    </Fragment>
  )
}

export default Home