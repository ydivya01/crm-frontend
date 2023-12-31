import React from 'react'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
import {useState,useContext} from 'react'
import { userContext } from '../App'

function Login({setUser}) {

    const [password, setPassord] = useState('')
    const [email, setEmail] = useState('')
    const user = useContext(userContext)
    const navigate = useNavigate()

    axios.defaults.withCredentials = true;

    const handleSubmit = async (e) => {
        console.log(e)
        e.preventDefault()
        console.log(e)
    await axios.post('http://localhost:3001/login', { email, password})
            .then(res => {
                console.log(res.data)
                if(res.data.Status === 'Success'){
                    setUser({email: res.data.email, name:res.data.name})
                    if(res.data.role === 'admin'){
                       
                        navigate('/dashboard')
                    }else{
                        navigate('/employee')
                    }
                     }else{
            alert('NO Record Found')
                }})
            .catch(err => console.log(err))
    }

    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-25'>
                <h2>LOGIN</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-3'>
                        <label htmlFor='email'>
                            <strong>Email</strong>
                        </label>
                        <input
                            type='email'
                            placeholder='Enter Email'
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

                    <button type='submit' className='btn btn-success w-100 rounded-0'>Login</button>
                </form>
                <p>Forgot Password?</p>
                    <Link  to='/forgotpassword' className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Reset password</Link>

                    <Link to='/'>Back</Link>
            </div>





        </div>
    )
}

export default Login