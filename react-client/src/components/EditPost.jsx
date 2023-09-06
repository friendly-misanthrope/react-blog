import { useState } from 'react'

const EditPost = () => {
  const [postToEdit, setPostToEdit] = useState({
    title: '',
    body: '',
    updatedAt: new Date().toLocaleString()
  })
  return (
    <div>
      
    </div>
  );
}

export default EditPost;