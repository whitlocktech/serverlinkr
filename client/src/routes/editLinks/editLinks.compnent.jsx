import { React, useEffect } from 'react'
import { useApi } from '../../contexts/api.context'
import './editLinks.styles.scss'

import EditLinksList from '../../components/editLinkList/editLinksList.component'

const EditLinks = () => { 
  const { links, fetchAllLinks } = useApi()

  useEffect(() => {
    fetchAllLinks()
  }, [])
  return (
    <div className="edit-links">
      {links.map((link) => (
        <EditLinksList key={link._id} link={link} />
      ))}
    </div>
  )
}

export default EditLinks