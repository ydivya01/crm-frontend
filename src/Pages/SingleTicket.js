import axios from 'axios'
import React, { useEffect , useState, useContext} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import { userContext } from '../App'
import {Row, Col, Card, CardBody, CardImg, CardTitle, CardText, CardSubtitle, Button, Container} from 'reactstrap'


function SingleTicket() {

const {id} = useParams()
const [ticket, setTicket] = useState({})

const navigate = useNavigate()

const user = useContext(userContext)

useEffect(()=>{
axios.get('http://localhost:3001/getticketbyid/'+id)
.then(result => setTicket(result.data))
.catch(err => console.log(err))
    },[])

const handleDelete = ()=>{
axios.delete('http://localhost:3001/deleteticket/'+id)
.then(result => {
navigate('/employee')
})
.catch(err => console.log(err))
    }


  return (

    
    
    <Container className="bg-light border" sm="12" style={{margin:'80px'}}>
      <Link to='/employee'><Button> Back</Button></Link>
    <Card>
   
    <CardBody>
      <CardTitle tag="h5" className='text-center'>
      {ticket.title}
      </CardTitle>
      <hr/>
      <CardSubtitle
        className="mb-2 text-muted"
        tag="h6"
      >
        {ticket.status}
      </CardSubtitle>
      <CardText>
      {ticket.description}
      </CardText>
      <div className='text-center'>
      <Link to={`/editticket/${ticket._id}`}><Button> Edit</Button></Link> 
      <vl style={{border:'6px solid white',
  height: '500px'}}/>
      <Link><Button onClick={e => handleDelete(ticket._id)}>Delete</Button></Link>
      </div>
      
    </CardBody>
  </Card>
  </Container>

  )
}

export default SingleTicket