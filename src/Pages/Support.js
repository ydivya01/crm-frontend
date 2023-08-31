import React from 'react'
import { InputGroup, Input, Button, Row, Col, Card , CardBody, CardImg, CardText, CardTitle, CardGroup, CardSubtitle } from 'reactstrap'
import {Link} from 'react-router-dom'
function Support() {
  return (
    <>
    
    <Row style={{margin:'80px'}}>
    <Link to='/innerhome'><Button> Back</Button></Link>
    <Col className="bg-light border" md={{ offset: 3, size: 6 }} sm="12">
    <div>
        <h1 className='text-center'>How can we help?</h1>
        <InputGroup>
    <Input placeholder='Search for a topic'/>
    <Button>
     Search
    </Button>
  </InputGroup>
    </div>

    </Col>
  </Row>

  <CardGroup>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Setup & Configuration
      </CardTitle>
   
      <CardText>
      Capsule isn’t limited to contact management though, instead it brings all of your daily activities into one place, from helping you to organize your calendar.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
  <vl style={{border:'6px solid white',
  height: '500px'}}/>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="100%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Account & Security
      </CardTitle>
    
      <CardText>
      The Super Administrator role on your account is responsible for all account related functions. Administrators can help with the setup of the account but are unable to assist with payments or account-related decisions.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
  <vl style={{border:'6px solid white',
  height: '500px'}}/>
  <Card>
    <CardImg
      alt="Card image cap"
      src="https://picsum.photos/318/180"
      top
      width="80%"
    />
    <CardBody>
      <CardTitle tag="h5">
      Contact Management
      </CardTitle>
     <CardText>
      Capsule is a Customer Relationship Management Tool (CRM) that allows you to work independently or collaboratively in order to form meaningful relationships with your contacts.
      </CardText>
      <Button>
        Button
      </Button>
    </CardBody>
  </Card>
</CardGroup>
 
  </>
  )
}

export default Support