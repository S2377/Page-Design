import React from 'react';
import '../custom_css/SelectedProject.css'; 
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import { Card } from 'react-bootstrap';

const SelectedProject = () => {
  return (
    <div className='project-component'>
    <div className='project-header'>
        <p>SELECTED</p>
        <p>PROJECT</p>
    </div>
    <div className='project-body'>
        <div className='project-card-first'>
            <Card style={{ width: '35rem', border: 'none', borderRadius: '0' }} className="mb-10">
                <Card.Img variant="top" src= {img2} />
                <Card.Body style={{ backgroundColor: 'black', color: 'white', textAlign: 'right' }}>
                    <Card.Title>Creative Studio Website</Card.Title>
                    <Card.Text>
                        Website Design
                    </Card.Text>

                </Card.Body>
            </Card>

            <Card style={{ width: '35rem', border: 'none', borderRadius: '0' }} className="mb-5">
                <Card.Img variant="top" src= {img1} />
                <Card.Body style={{ backgroundColor: 'black', color: 'white', textAlign: 'right' }}>
                    <Card.Title>Creative Studio Website</Card.Title>
                    <Card.Text>
                        Website Design
                    </Card.Text>
                </Card.Body>
            </Card>


        </div>
        <div className='project-card-second'>


            <Card style={{ width: '35rem', border: 'none', borderRadius: '0' }} className="mb-10">
                <Card.Img variant="top" src= {img1} />
                <Card.Body style={{ backgroundColor: 'black', color: 'white', textAlign: 'right' }}>
                    <Card.Title>Creative Studio Website</Card.Title>
                    <Card.Text>
                        Website Design
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card style={{ width: '35rem', border: 'none', borderRadius: '0' }} className="mb-5">
                <Card.Img variant="top" src= {img2} />
                <Card.Body style={{ backgroundColor: 'black', color: 'white', textAlign: 'right' }}>
                    <Card.Title>Creative Studio Website</Card.Title>
                    <Card.Text>
                        Website Design
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>

    </div>
</div>
  );
};

export default SelectedProject;
