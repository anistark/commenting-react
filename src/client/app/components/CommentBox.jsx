import React from 'react';
import Form from 'muicss/lib/react/form';
import Input from 'muicss/lib/react/input';
import Textarea from 'muicss/lib/react/textarea';
import Button from 'muicss/lib/react/button';
import Panel from 'muicss/lib/react/panel';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';

import { SocketProvider, socketConnect } from 'socket.io-react';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:8080');
socket.on('message', msg => console.log(msg));

class CommentBox extends React.Component {

    constructor(props) {
        super(props);
    }

    sendMessage() {
        socket.emit('message', 'Hello world!');
    }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Form inline={true}>
                        <Col md="11">
                            <Input label="Your comment here" floatingLabel={true} />
                        </Col>
                        <Col md="1">
                            <Button variant="fab" color="primary" onClick={this.sendMessage()}> > </Button>
                        </Col>
                    </Form>
                </Row>
            </Container>
        );
    }
}

export default CommentBox;
