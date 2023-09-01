import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle, Button } from 'reactstrap'
import {Link} from 'react-router-dom'

import './style.css'
import Footer from '../Components/Footer'
import './Home.css'
import Testhome from '../Components/testhome'



function Home() {
  return (
    <>
    <Testhome/>

<section class="info">
  <img src=""/>
  <h1>DivyaJ-CRM &mdash; BOOST YOUR BUSINESS</h1>
</section>
<section class="cards-wrapper">
  <div class="card-grid-space">
    <div class="num">Open Source Technology</div>
    
    <div class="card">
    <div>
        <h1>Send awesome email marketing campaigns

</h1>
        <p>Create and send customizable email campaigns with pro templates, built to get more clicks.…</p>
        <div class="date">1-9-2023</div>
       
        <Link to='/support'><Button>Click</Button></Link>
      </div>
    </div>
     
   
  </div>
  <div class="card-grid-space">
    <div class="num">Deployment Option</div>
    
      <div class='card'>
        <h1>Manage all your documents in one place</h1>
        <p>Manage all your documents in one place

Centralize the entire documentation process by sending trackable quotes, proposals and contracts from within Pipedrive.</p>
        <div class="date">1-9-2023</div>
        
        <Link to='/support'><Button>Click</Button></Link>
      </div>
   
  </div>
  
  <div class="card-grid-space">
    <div class="num">24/7 Global Support</div>
    {/* <Link to='/support' class="card" /> */}

      <div class='card'>
        <h1 className='text-center'>Support Center</h1>
        <p>Efficiently outline intricate tasks using Projects’ intuitive, familiar kanban board view. Tailor tasks with labels and oversee projects using custom fields and filters. Track progress and collaborate seamlessly with your team.</p>
        <div class="date">1-09-2023</div>
        <Link to='/support'><Button>Click</Button></Link>
      </div>
    
  </div>
  
  
</section>
<Footer/>
    </>
  )
}

export default Home
