import React from 'react'
import { Button , Row, Col, CardTitle, CardSubtitle, CardText,Card, Input, InputGroup} from 'reactstrap'

function ForgotPassword() {
  return (
    <div style={{margin:'80px'}}>


<Row>

    <Col className="bg-light border" md={{ offset: 3, size: 6 }} sm="12">
    <p style={{color:'gray'}}>Enter Regsiterd Email</p>
      <InputGroup>
   
   <Input placeholder="Eg:john@abc.com" />
 </InputGroup>
 <hr/>

     
      <Button className='text-center'>Submit</Button>
    </Col>
  </Row>
      
 
  
  </div>
  )
}

export default ForgotPassword