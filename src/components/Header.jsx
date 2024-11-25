import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar className="bg-transparent">
        <Container>
          <Navbar.Brand >
            <Link to={'/'} style={{ textDecoration: 'none' }}>
              <h4 className='text-warning'><FontAwesomeIcon icon={faVideo} beat className='me-3' style={{ color: "#f59f0a", }} />Media Player</h4></Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
