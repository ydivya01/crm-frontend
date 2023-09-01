import React from 'react'

import {Row, Col, Card} from 'reactstrap'
import Footer from './Footer'





export default () => {
    return (
        <Card style={{background:'#6FA8DC' ,width:'99%'}} className='text-center'>
            
            
        <header className="py-5 bg-image-full" />
       
        <Row>
    <Col
      className="bg-light border"
      sm={{
        offset: 1,
        order: 2,
        size: 6
      }}
    >
        <Card style={{display:'inline-block'}}>
        <section className="py-4">
        <div class="container">
          <h1>The CRM platform</h1>
          <p class="lead">To build and grow your business</p>
          <p><ul>
            <li>Build, automate and scale business</li>
               </ul></p>
        </div>
      </section>
        </Card>
       
      
    </Col>
  </Row>
 <hr style={{border:'6px solid white',
  height: '10px'}}/>
  <Row>
   
    <Col
      className="bg-light border"
      md={{
        offset: 3,
        size: 6
      }}
      sm="12"
    >
        <Card>
        <section class="py-4">
        <div class="container">
          <h1>Get more done
in less time</h1>
          <p class="lead">Great Tools = Happy People</p>
          <p>Schedule activities based on your sales scripts: calls, meetings, mailing, and quotations. Get all the information you need, directly on the opportunity: website pages viewed, mail received, etc.</p>
        </div>
      </section>
        </Card>
      
    </Col>
    </Row>

     <Footer/>
      </Card>

    )
}