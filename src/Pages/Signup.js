import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'


function Signup() {

const [name ,setName] = useState('')
const [password,setPassord] = useState('')
const [email, setEmail] = useState('')

const navigate = useNavigate()

const handleSubmit = async (e) =>{
    e.preventDefault()
   await axios.post('http://localhost:3001/register' , {name, email, password})
    .then(res => {
        alert('User Registered')
        navigate('/')
    })
    .catch(err=> console.log(err))
}



    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2 className='text-center'>Register</h2>
                <form onSubmit={handleSubmit}>

                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Name</strong>
                        </label>
                        <input
                            type='text'
                            placeholder='Enter Name'
                            autoComplete='off'
                            name='email'
                            className='form-control rounded-0'
                            onChange={(e) => setName(e.target.value)}

                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Email</strong>
                        </label>
                        <input
                            type='email'
                            placeholder='Enter email'
                            autoComplete='off'
                            name='email'
                            className='form-control rounded-0'
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Password</strong>
                        </label>
                        <input
                            type='password'
                            placeholder='Enter Password'
                            name='password'
                            className='form-control rounded-0'
                            onChange={(e) => setPassord(e.target.value)}
                        />
                    </div>
                    <button type='submit' className='btn btn-success w-100 rounded-0'>Register</button>
                    </form>
                    <p>Already have an account?</p>
                    <Link  to='/login' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Login</Link>
                    <Link to='/'>Back</Link>
            </div>
        </div>
    )
}

export default Signup