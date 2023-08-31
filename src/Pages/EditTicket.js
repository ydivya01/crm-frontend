import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Button } from 'reactstrap'

function EditTicket() {

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()

    const navigate = useNavigate()


    const { id } = useParams()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3001/editticket/'+id, { title, description })
            .then(res => {
                console.log(res.data)
                if (res.data === 'Success') {
                    navigate('/employee')
                }
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios.get('http://localhost:3001/getticketbyid/'+ id)
            .then(result => {
                setTitle(result.data.title)
                setDescription(result.data.description)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100'>
            <div className='bg-white p-3 rounded w-60'>
            <Button onClick={() => navigate(-1)}> Back</Button>
                <h2 className='text-center'>Update Service Request</h2>
                <form onSubmit={handleSubmit}>
               
                    <div className='mb-3'>
                        <label htmlFor='title'>
                            <strong>Subject</strong>
                        </label>
                        <textarea
                            type='text'
                            placeholder='Enter Subject'
                            rows='2'
                            cols='30'
                            className='form-control rounded-0'
                            onChange={(e) => setTitle(e.target.value)}
                            value={title}

                        />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='desc'>
                            <strong>Enter Description</strong>
                        </label>
                        <textarea

                            placeholder='Enter Description'
                            id='desc'
                            name='password'
                            rows='10'
                            cols='30'
                            className='form-control rounded-0'
                            onChange={(e) => setDescription(e.target.value)}
                            value={description}
                        />
                    </div>


                    <button type='submit' className='btn btn-success w-100 rounded-0'>Update</button>
                </form>

            </div>
        </div>
    )

}

export default EditTicket