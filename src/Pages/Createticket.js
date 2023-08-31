import React from 'react'

import { Link , useNavigate} from 'react-router-dom'
import { useState, useContext} from 'react'
import { userContext } from '../App'
import axios from 'axios'
import './style.css'
import { Button } from 'reactstrap'

function Createticket() {

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [file, setFile] = useState()
    const [status, setStatus] = useState()
    
    const user = useContext(userContext)
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('file', file)
        formData.append('status', status)
        formData.append('email', user.email)
         axios.post('http://localhost:3001/createticket', formData)
            .then(res => {
                console.log(res.data)
                if (res.data === 'Success') {
                    window.location.href = '/employee'
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-60'>
           
                <h2 className='text-center'>New Service Request</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='title'>
                            <strong>Subject</strong>
                        </label>
                        <textarea
                            type='text'
                            placeholder='Enter Subject'
                            rows='2'
                            cols='30'
                            className='form-control rounded-0'
                             onChange={(e) => setTitle(e.target.value)}

                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='desc'>
                            <strong>Enter Description</strong>
                        </label>
                        <textarea
                        
                            placeholder='Enter Description'
                            id='desc'
                            name='password'
                            rows='10'
                            cols='30'
                            className='form-control rounded-0'
                             onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='desc'>
                            <strong>Status</strong>
                        </label>
                        <input
                         placeholder='Enter Status'
                            id='status'
                            name='status'
                           className='form-control rounded-0'
                             onChange={(e) => setStatus(e.target.value)}
                        />
                    </div>

                <input type='file' className='w-100 rounded-0' placeholder='Select file' onChange={(e) => setFile(e.target.value)}/>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Submit</button>
                </form>
                <Link to='/employee'>Back</Link>

            </div>





        </div>
    )
}

export default Createticket