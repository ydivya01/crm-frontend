import React from 'react'
import './style.css'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { userContext } from '../App'
import axios from 'axios'
import {Button} from 'reactstrap'

function Navbar() {

    const user = useContext(userContext)
    const navigate = useNavigate()

    const handleLogout = () => {
axios.get('http://localhost:3001/logout')
            .then(res => {
                //navigate(0)
                if(res.data === "Success")
               
                window.location.href='/'
            }).catch(err => console.log(err))
    }

    return (

        <div className='navbar-header'>
            <div className='link'>
                
                <h3><Link to='/' className='link'>CRM</Link></h3>
                
            </div>
           
            <div>
                {user.email? <Link to='/innerhome' className='link'>Home</Link> : <></>}
                
           
                <Link to='' className='link'>Features</Link>
                <Link to='' className='link'>Industry</Link>
                <Link to='' className='link'>Resource</Link>
                <Link to='/support' className='link'>Support</Link>
                {user.name? <></> :<Link to='/register' className='link'>Register</Link> }
                
                {user.name ? <Link to='/createticket' className='link'>New Ticket</Link> : <></>}

            </div>
            {user.email ?
            <Button onClick={handleLogout}
            color="info"
            size="sm"
          >
            Logout
          </Button>
                //<div><Button onClick={handleLogout}>lOGOUT</Button></div> 
                :
                <div className='link'><h5><Link to='/innerhome' className='link'>Login</Link></h5>
                
                </div>
            }
            
<div>{user.email? <Link to='/employee' className='link'>{user.name}</Link> : <></>}</div>

        </div>
    )
}

export default Navbar
