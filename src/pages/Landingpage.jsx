import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Landingpage() {
  return (
    <div>
      <Container className='mt-5'>
        <Row className='d-flex justify-content-center align-items-center mt-5'>
          <Col sm={12} md={6}>
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p className='mt-4' style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur tenetur impedit ullam repellendus fugiat iste molestias est, quae deserunt quam consequatur necessitatibus doloribus quasi quod quo beatae suscipit. Explicabo, nisi.</p>
            <Link to={'/home'}><button className='btn btn-warning mt-4'>Get Started</button></Link>
          </Col>
          <Col sm={12} md={6}>
            <img src='https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif' alt='no image' className='w-50' />
          </Col>
        </Row>
      </Container>

      <Container className='mt-5 ' >
        <Row >
          <h4 style={{ textAlign: 'center' }}>Features</h4>
          <Col sm={12} md={4}>
            <Card style={{ width: '100%' }} className='p-3'>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/43/b7/e9/43b7e94dac162ec1543b0a861d012564.gif" className='w-100' height={'300px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card style={{ width: '100%' }} className='p-3 mt-4 mt-md-0'>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/f7/ec/c2/f7ecc2ede51521e1b41a9fb3d06d45b1.gif" className='w-100' height={'300px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={4}>
            <Card style={{ width: '100%' }} className='p-3 mt-4 mt-md-0'>
              <Card.Img variant="top" src="https://steamuserimages-a.akamaihd.net/ugc/789753588663340202/3A577E4B5AED98E18C8193DB6AE2A9BDB8F0794B/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" className='w-100' height={'300px'} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className='mt-5 p-5' style={{ border: '1px solid' }}>
        <Row>
          <Col sm={12} md={6}>
            <h3 className='text-warning'>Simple Fast and Powerful</h3>
            <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '35px' }}>Play everything</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum alias numquam atque distinctio voluptates illo exercitationem quibusdam dolor. Nostrum voluptates veritatis minima commodi expedita hic quo beatae saepe, magnam dolorem.</p>
            <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '35px' }}>Play everything</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum alias numquam atque distinctio voluptates illo exercitationem quibusdam dolor. Nostrum voluptates veritatis minima commodi expedita hic quo beatae saepe, magnam dolorem.</p>
            <p style={{ textAlign: 'justify' }}><span style={{ fontSize: '35px' }}>Play everything</span>: Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum alias numquam atque distinctio voluptates illo exercitationem quibusdam dolor. Nostrum voluptates veritatis minima commodi expedita hic quo beatae saepe, magnam dolorem.</p>
          </Col>
          <Col sm={12} md={6}>
            <iframe width="560" height="460" src="https://www.youtube.com/embed/roz9sXFkTuE?si=f-ugTR-rvvAjvq9c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Landingpage
