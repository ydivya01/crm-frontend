import { useContext, useState, useEffect } from "react";
import axios from "axios";
import { Button, Col, Form, Row, Card, Modal } from "react-bootstrap";
import { Link , useNavigate, useParams} from "react-router-dom";
import { Container } from "reactstrap";
import { userContext } from "../App";

export default function Employee() {



const navigate = useNavigate()
//const user = useContext(userContext)


    const [tickets, setTickets] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3001/gettickets')
            .then(tickets => setTickets(tickets.data))
            .catch(err => console.log(err))
    }, [])



    return (
        <>
        <h2 style={{ display: "block" ,color:'grey'}}>Employee</h2>
        <Container>

            <div className="">
                <div className="table-wrapper">
                    <div className="table-title">
                        <div className="row title-row">
                            <div className="">
                                <h2>
                                    <b className="text-center" style={{ display: "block" }}>All Service Request</b>
                                </h2>
                            </div>

                            <div className="">
                                <Link to="/createticket">
                                    <Button
                                        className="addButton"
                                        variant="success">
                                        <i
                                            className="fa-solid fa-circle-plus"
                                            style={{ color: "#ffffff" }}
                                        ></i>{" "}
                                        <span>New Request</span>
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* <UserData /> */}


                    <div className="table-responsive">
                        <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Owner</th>
                                    <th>Description</th>
                                    <th>Status</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    tickets.map((ticket, index) => {
                                        return (
                                            <tr key={index}>
                                                <td data-label="No:">{index + 1}</td>
                                                <td data-label="Name:">{ticket.title}</td>
                                                <td data-label="Owner:">{ticket.email}</td>
                                                <td data-label="Description:">{ticket.description}</td>
                                                <td data-label="Status:">{ticket.status}</td>

                                                {/* <Link to={`/ticket/${ticket._id}`}>< Button
                                            style={{ color: "#ffffff" }}>View</Button></Link> */}

                <Link to={`/ticket/${ticket._id}`}>
                                    <Button
                                        className="addButton"
                                        variant="success">
                                        <i
                                            className="fa-solid fa-circle-plus"
                                            style={{ color: "#ffffff" }}
                                        ></i>{" "}
                                        <span>View</span>
                                    </Button>
                                </Link>
                                                
                                            </tr>);
                                    })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            </Container>
        </>
    );
}