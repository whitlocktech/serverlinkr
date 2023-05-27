import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import "./home.styles.scss"

import Naviagation from "../../components/navigation/navigation.component"
import Footer from "../../components/footer/footer.component"
import LinksContainer from "../../components/linksContainer/linksContainer.component"

const Home = () => { 
  return (
    <Fragment>
      <div className="home">
        <div className="naviagation-container">
          <Naviagation />
        </div>
        <LinksContainer />
        <Footer />
      </div>  
    </Fragment>
  )
}

export default Home