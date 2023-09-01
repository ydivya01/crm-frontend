import axios from 'axios'
import React, { useEffect , useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'

import {Card, CardBody, CardTitle, CardText, CardSubtitle, Button, Container} from 'reactstrap'



function Singleuser() {
    const {id} = useParams()
const [vuser, setVuser] = useState({})

const navigate = useNavigate()



useEffect(()=>{
axios.get('http://localhost:3001/getuserbyid/'+id)
.then(result => setVuser(result.data))
.catch(err => console.log(err))
    },[])

const handleDelete = async ()=>{
await axios.delete('http://localhost:3001/deleteuser/'+id)
.then(result => {
navigate('/dashboard')
})
.catch(err => console.log(err))
    }
  return (
    <Container className="bg-light border" sm="12" style={{margin:'80px'}}>
    <Link to='/dashboard'><Button> Back</Button></Link>
  <Card>
 
  <CardBody>
    <CardTitle tag="h5" className='text-center'>
    {vuser.leadname}
    </CardTitle>
    <hr/>
    <CardSubtitle
      className="mb-2 text-muted"
      tag="h6"
    >
      {vuser.status}
    </CardSubtitle>
    <CardText>
   {vuser.description}
   
    <div>
    Department : {vuser.department}
    </div>
   
    
    </CardText>
    <div className='text-center'>
   
    <Link><Button onClick={e => handleDelete(vuser._id)}>Delete</Button></Link>
    </div>
    
  </CardBody>
</Card>
</Container>

  )
}

export default Singleuser