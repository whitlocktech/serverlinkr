import { useState } from 'react';
import { useApi } from '../../contexts/api.context';

import FormInput from '../formInput/formInput.component';
import Button from '../button/button.component';

import './addLinkForm.styles.scss';

const defaultLinkFields = {
  title: '',
  url: '',
  image: '',
  description: '',
  keywords: '',
  updatedAt: new Date(),
};

const AddLinkForm = () => {
  const [linkFields, setLinkFields] = useState(defaultLinkFields);
  const { title, url, image, description, keywords } = linkFields;
  const { addLink } = useApi();

  const resetFormFields = () => {
    setLinkFields(defaultLinkFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const updatedLinkFields = {
        ...linkFields,
        updatedAt: new Date(),
      }
      await addLink(updatedLinkFields);
      resetFormFields();
    } catch {
      alert('Error adding link from form');
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'keywords') {
      const keywordsArray = value.split(',');
      setLinkFields((prevFields) => ({
        ...prevFields,
        keywords: keywordsArray,
      }));
    } else {
      setLinkFields((prevFields) => ({
        ...prevFields,
        [name]: value,
      }));
    }
  };

  return (
    <div className='add-link-form'>
      <span className='title'>Enter link details</span>
      <FormInput
        label='Title'
        type='text'
        required
        onChange={handleChange}
        name='title'
        value={title}
      />
      <FormInput
        label='URL'
        type='text'
        required
        onChange={handleChange}
        name='url'
        value={url}
      />
      <span>For Image insert the URL to the image</span>
      <FormInput
        label='Image'
        type='text'
        required
        onChange={handleChange}
        name='image'
        value={image}
      />
      <FormInput
        label='Description'
        type='text'
        required
        onChange={handleChange}
        name='description'
        value={description}
      />
      <span>Keywords should be comma-separated</span>
      <FormInput
        label='Keywords'
        type='text'
        required
        onChange={handleChange}
        name='keywords'
        value={keywords}
      />
      <Button type='submit' onClick={handleSubmit}>
        Add Link
      </Button>
    </div>
  );
};

export default AddLinkForm;
