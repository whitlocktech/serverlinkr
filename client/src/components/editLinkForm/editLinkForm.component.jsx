import { useState } from 'react'
import { useApi } from '../../contexts/api.context'

import FormInput from '../formInput/formInput.component'
import Button from '../button/button.component'

import './editLinkForm.styles.scss'

const EditLinkForm = ({ link }) => { 
  const [linkFields, setLinkFields] = useState(link)
  const { id, title, url, image, description, keywords } = linkFields
  const { updateLink } = useApi()
  const { deleteLink } = useApi()

  const handleChange = (event) => { 
    const { name, value } = event.target
    if (name === 'keywords') { 
      const keywordsArray = value.split(',')
      setLinkFields((prevFields) => ({
        ...prevFields,
        keywords: keywordsArray,
      }))
    } else { 
      setLinkFields((prevFields) => ({
        ...prevFields,
        [name]: value,
      }))
    }
  }

  const handleSubmitUpdate = async (event) => { 
    try {
      const updatedLinkFields = {
        ...linkFields,
        updatedAt: new Date(),
      }
      await updateLink(updatedLinkFields)
    } catch (error) { 
      alert('Error updating link from form')
    }
  }
  const handleSubmitDelete = async (event) => { 
    try {
      await deleteLink(id)
    } catch (error) { 
      alert('Error deleting link from form')
    }
  }

  const renderFormInputs = () => { 
    return Object.keys(linkFields).map((fieldName) => (
      <FormInput
        key={fieldName}
        className='edit-form-input'
        label={fieldName}
        type='text'
        required
        onChange={handleChange}
        name={fieldName}
        value={linkFields[fieldName]}
      />
    ))
  }

  return (
    <div className='edit-link-form'>
      <span className='title'>Edit link details</span>
      <button onclick={handleSubmitDelete}>Delete</button>
      {renderFormInputs()}
      <Button className='edit-form-button' onClick={handleSubmitUpdate}>Update</Button>
    </div>
  )
}

export default EditLinkForm