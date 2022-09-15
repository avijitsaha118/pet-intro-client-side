import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

const HomeInfo = ({ information }) => {
    const { _id, name, breed, age, address, description, img } = information;
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Pet Name: {name}</Card.Title>
                    <Card.Text>
                        Article: {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Breed Name: {breed}</ListGroup.Item>
                    <ListGroup.Item>Age: {age}</ListGroup.Item>
                    <ListGroup.Item>Location: {address}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default HomeInfo;