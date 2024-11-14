import React, {useState} from 'react'

function UserForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        form.submit()
    }

    return (
        <form 
          onSubmit={handleSubmit}
          method="post"
        >
          <input 
            type="text" 
            name="name" 
            value={formData.name}
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
          <input 
            type="email" 
            name="email" 
            value={formData.email}
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
          <button type="submit">Enviar</button>
        </form>
      )
}

window.UserForm = UserForm
export default UserForm