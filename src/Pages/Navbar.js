import React from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { userContext } from '../App'
import axios from 'axios'

function Navbar() {

    const user = useContext(userContext)
    const navigate = useNavigate()

    const handleLogout = () => {

        axios.get('http://localhost:3001/logout')
            .then(res => {
                //navigate(0)
                if(res.data === "Success")
               
                navigate('/')
            }).catch(err => console.log(err))
    }

    return (

        <div className='navbar-header'>
            <div className='link'>
                
                <h2><Link to='/' className='link'>CRM{user.email ? <></> : ' DIVYA'}</Link></h2>
                
            </div>
            <div>
                {user.email? <Link to='/innerhome' className='link'>Home</Link> : <></>}
                
           
                <Link to='features' className='link'>Features</Link>
                <Link to='' className='link'>Industry</Link>
                <Link to='' className='link'>Resource</Link>
                <Link to='/support' className='link'>Support</Link>
                {user.name? <></> :<Link to='/register' className='link'>Register</Link> }
                
                {user.name ? <Link to='/createticket' className='link'>New Ticket</Link> : <></>}

            </div>
            {user.email ?
                <div><input type='button' onClick={handleLogout} value="Logout"/></div> :
                <div className='link'><h5><Link to='/innerhome' className='link'>Login</Link></h5>
                
                </div>
            }
            
<div>{user.email? <Link to='/employee' className='link'>{user.name}</Link> : <></>}</div>

        </div>
    )
}

export default Navbar
