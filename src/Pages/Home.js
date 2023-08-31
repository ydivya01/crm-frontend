import React from 'react'
import { Card, CardBody, CardImg, CardText, CardTitle, CardImgOverlay } from 'reactstrap'
import HomeComp from '../Components/HomeComp'
import './style.css'
import Footer from '../Components/Footer'
//import {Link} from 'react-router-dom'


function Home() {
  return (
    <>

      <div>
        <Card inverse style={{width:'100'}}>
          <HomeComp className='text-center' />
          <CardImgOverlay>
            <CardTitle tag="h5">
              Card Title
            </CardTitle>

      
          </CardImgOverlay>
        </Card>
      </div>





      <CardBody>
        <CardTitle tag="h1" className='text-center'>
          Customer relationship management
        </CardTitle>
        <CardText className='text-center'>
          <h3 className='text-center'> Great Tools = Happy People</h3>
          <ul className='list_item'>
            <li>Agents collaborate and provide quicker resolutions with
              one inbox for all customer queries.</li>
            <li>Automate repetitive tasks and route tickets to the right teams
              to increase agent productivity.</li>
            <li>You understand your customers better with game-changing
              insights and deliver customer delight.</li>
          </ul>
        </CardText>
        <CardText>
          <small className="text-muted">
            Last updated 3 mins ago
          </small>
        </CardText>
      </CardBody>
<Footer/>


    </>
  )
}

export default Home