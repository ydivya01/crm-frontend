import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { userContext } from '../App'
import axios from 'axios'
import './style.css'

function AddUSer() {

    const [leadname, setLeadname] = useState()
    const [email, setEmail] = useState()
    const [status, setStatus] = useState()
    const [department, setDepartment] = useState()

    const user = useContext(userContext)
    const navigate = useNavigate()



    const handleSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/adduser' , {leadname, email, department, status})
        .then(res => {
            console.log(res.data)
            alert('User Added')
            navigate('/dashboard')
        })
        .catch(err=> console.log(err))
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()

    //     const formData = new FormData()
    //     formData.append('title', title)
    //     formData.append('description', description)
    //     formData.append('file', file)
    //     formData.append('status', status)
    //     formData.append('email', user.email)
    //      axios.post('http://localhost:3001/createticket', formData)
    //         .then(res => {
    //             console.log(res.data)
    //             if (res.data === 'Success') {
    //                 window.location.href = '/employee'
    //             }
    //         })
    //         .catch(err => console.log(err))
    // }
    
    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-60'>
                <h2 className='text-center'>New User</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='title'>
                            <strong>Leadname</strong>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter lead name'
                            className='form-control rounded-0'
                            onChange={(e) => setLeadname(e.target.value)}

                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='desc'>
                            <strong>Enter Email</strong>
                        </label>
                        <input
                            placeholder='Enter user email'
                            id='email'
                            name='email'
                            className='form-control rounded-0'
                            onChange={(e) => setEmail(e.target.value)}
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

                    <div className='mb-3'>
                        <label htmlFor='desc'>
                            <strong>Department</strong>
                        </label>
                        <input
                            placeholder='Enter user department'
                            id='department'
                            name='departmet'
                            className='form-control rounded-0'
                            onChange={(e) => setDepartment(e.target.value)}
                        />
                    </div>


                    <button type='submit' className='btn btn-success w-100 rounded-0'>Submit</button>
                </form>
                <Link to='/employee'>Back</Link>

            </div>





        </div>
    )
}

export default AddUSer