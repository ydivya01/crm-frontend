import React from 'react'
// import TicketCard from '../Components/TicketCard'
import {Link} from 'react-router-dom'
import {Button, Container} from 'reactstrap'
import { useContext, useState, useEffect } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import { userContext } from "../App";
import Employee from './Employee';

function Dashboard() {

   
   
const navigate = useNavigate()



const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/getusers')
            .then(users => setUsers(users.data))
            .catch(err => console.log(err))
    }, [])


  
    return (

        <>
        <h2 style={{ display: "block" ,color:'grey'}}>Admin</h2>
        <Container>
      <div className="">
        <div className="table-wrapper">
          <div className="table-title">
            <div className="row title-row">
              <div className="">
                <h2 className='text-center'>
                  <b style={{ display: "block" ,color:'black'}}>All Leads</b>
                </h2>
              </div>

              <div className="">
                <Link to="/adduser">
                  <Button
                    className="addButton"
                    variant="success"
                  >
                    <i
                      className="fa-solid fa-circle-plus"
                      style={{ color: "#ffffff" }}
                    ></i>{" "}
                    <span>Add User</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className="clearfix">
            <div className="hint-text">
              
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                <th>No</th>
                  <th>Name</th>
                  
                  <th>Email</th>
                  
                  <th>Department</th>
                
                  <th>Status</th>
                  
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => {
                    return (
                      <tr key={index}>
                        <td data-label="No:">{index + 1}</td>
                        <td data-label="Name:">{user.leadname}</td>
                        <td data-label="Email:">{user.email}</td>
                       
                        <td data-label="Department:">{user.department}</td>
                        
                        <td data-label="Status:">
                          {user.status}
                        </td>
                        <Link to={`/user/${user._id}`}><Button>View</Button></Link>
                       
                      
                           
                       
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        
        </div>
      </div>
      </Container>
      <hr/>
      <Container>
        <Employee/>
      </Container>
      </>

            
    )
}

export default Dashboard

