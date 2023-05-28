import { React, useEffect } from 'react'
import { useApi } from '../../contexts/api.context'
import './linksContainer.styles.scss'

import LinksCard from "../../components/links/linksCard.component"

const LinksContainer = () => {
  const { links, fetchAllLinks } = useApi()

  useEffect(() => { 
    fetchAllLinks()
  }, [])
  return (
    <div className="links-container">
      {links.map((link) => (
        <LinksCard key={link._id} link={link} />
      ))}
    </div>
  )
}

export default LinksContainer