import React from 'react'
import {Row, Col, Card ,CardTitle, CardText, Button} from 'reactstrap'
import {Link} from 'react-router-dom'
function InnerHome() {
  return (
    <>
    <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
<Row style={{margin:'80px'}} >
  <Col className="bg-light border" md={{size: 4 ,offset: 2 }} sm="6">
  <vl style={{border:'6px solid white',
  height: '500px'}}/>
    <Card body>
      <CardTitle tag="h5" className='text-center'>
        Admin/Manager
      </CardTitle>
      <CardText>
        If you are Admin/ Manager, You have Administrator-level access. You can add users and view all tickets.
      </CardText>
    <Link to='/login' className='text-center'> <Button>
       Admin
      </Button></Link>  
    </Card>
  </Col>

  <Col  className="bg-light border" md={{size: 4}} sm="6">
  <vl style={{border:'6px solid white',
  height: '500px'}}/>
    <Card body>
      <CardTitle tag="h5" className='text-center'>
     Employee
      </CardTitle>
      <CardText>
        As an employee , you have right to view all service request.You can update and delete on you tickets.
      </CardText>
      <Link to='/login' className='text-center'> <Button>
       Employee
      </Button></Link>  
    </Card>
  </Col>
</Row>
</div>
</>
  )
}

export default InnerHome