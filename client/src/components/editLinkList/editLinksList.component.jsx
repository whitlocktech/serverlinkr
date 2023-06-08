import { useApi } from '../../contexts/api.context'
import './editLinksList.styles.scss'

const EditLinksList = ({ link }) => { 
  const { title, url, image, description, keywords, _id } = link
  const { deleteLink } = useApi()

  const handleDelete = () => { 
    deleteLink(_id)
  }

  return (
    <div className="edit-link-list">
      <p className='link-edit'>{title} {url} {image} {description} {keywords.join(' ')}</p>
      <button className='link-edit-button'>Edit</button>
      <button className='link-delete' onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default EditLinksList