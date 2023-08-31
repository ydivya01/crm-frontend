import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'



function Ticket() {

  const [formData, setFormData] = useState({
    status: 'not started',
    progress: 0,
    timestamp: new Date().toISOString()
  })

  const navigate = useNavigate()
  const editMode = false

  const handleSubmit = async (e) => {
    e.preventDefault()
if(!editMode){
  // const response = await axios.post('http://localhost:8000/ticket',{
  //   formData
  // })
  // const success = response.status=== 200
  // if(success){
  //   navigate('/')
  // }
  const response =  await axios('http://localhost:8000/ticket',{
  method:'POST',
  body: JSON.stringify(formData),
  headers:{'Content-Type':'application/json'}

})
const success = response.status=== 200
if(success){
    navigate('/')
  }

}
  }


//   async function register (e){
//     e.preventDefault()
  
//  const response =  await fetch('http://localhost:8000/register',{
//   method:'POST',
//   body: JSON.stringify({username,password}),
//   headers:{'Content-Type':'application/json'}

// })

// if(response.status === 200){
//   alert('Registeration Success')
// }else{
//   alert('Registration Failed')
// }
// }

  const handleChange = (e) => {
    const value = e.target.value
    const name = e.target.name
    // setFormData((prevState)=> ({
    //   ...prevState                                                , 
    //   [name]:value
    // })
    // )

    setFormData({ ...formData, [name]: value })
  }

  const categories = ['test1', 'test2', 'test3']

  // console.log(formData)
  return (
    <div className='ticket'>
      <h1>{editMode ? 'Update your Ticket' : 'Create a Ticket'}</h1>
      <div className='ticket-container'>
        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor='title'>Title</label>
            <input id='title' name='title' type='text' onChange={handleChange} required={true} value={formData.title} />

            <label htmlFor='description'>description</label>
            <input id='discription' name='discription' type='text' onChange={handleChange} required={true} value={formData.discription} />

            <label>Category</label>
            <select
              name='category'
              value={formData.category}
              onChange={handleChange}
            >{categories?.map((category, _index) => (
              <option key={_index} value={category}>{category}</option>
            ))}</select>

            <label htmlFor='new-category'>New-Category</label>
            <input id='new-category' name='discription' type='text' onChange={handleChange} required={true} value={formData.category} />

            <label>Priority</label>
            <div className='multiple-input-container'>
              <input
                id='priority-1'
                name='priority'
                type='radio'
                onChange={handleChange}
                value={1}
                checked={formData.priority == 1}
              ></input>
              <label htmlFor='priority-1'>1</label>

              <input
                id='priority-2'
                name='priority'
                type='radio'
                onChange={handleChange}
                value={2}
                checked={formData.priority == 2}
              ></input>
              <label htmlFor='priority-2'>2</label>

              <input
                id='priority-3'
                name='priority'
                type='radio'
                onChange={handleChange}
                value={3}
                checked={formData.priority == 3}
              ></input>
              <label htmlFor='priority-1'>3</label>

              <input
                id='priority-4'
                name='priority'
                type='radio'
                onChange={handleChange}
                value={4}
                checked={formData.priority == 4}
              ></input>
              <label htmlFor='priority-1'>4</label>

              <input
                id='priority-5'
                name='priority'
                type='radio'
                onChange={handleChange}
                value={5}
                checked={formData.priority == 5}
              ></input>
              <label htmlFor='priority-1'>5</label>

            </div>
            {editMode &&
              <> <input
                type='range'
                id='progress'
                name='progress'
                value={formData.progress}
                min='0'
                max='100'
                onChange={handleChange}
              />
                <label htmlFor='progress'>Progress</label>


                <label htmlFor='status'>Status</label>
                <select
                  name='status'
                  value={formData.status}
                  onChange={handleChange}
                >
                  <option selected={formData.status === 'completed'} value={'completed'}>Completed</option>
                  <option selected={formData.status === 'pending'} value={'pending'}>Pending</option>
                  <option selected={formData.status === 'assigned'} value={'assigned'}>Assigned</option>
                  <option selected={formData.status === 'on-hold'} value={'on-hold'}>On-hold</option>
                </select>
              </>
            }
            <input type='submit' />
          </section>

          <section>
            <label htmlFor='owner'>Owner</label>
            <input 
            id='owner' 
            name='owner' 
            type='text' 
            onChange={handleChange} 
            required={true} 
            value={formData.owner} />
          </section>
        </form>
      </div>

    </div>
  )
}

export default Ticket