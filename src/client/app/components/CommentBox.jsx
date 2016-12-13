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
const socket = io.connect('http://localhost:3000');

class CommentBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        socket.emit('chat_channel', this.state.value);
        event.preventDefault();
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Form inline={true} onSubmit={this.handleSubmit}>
                        <Col md="11">
                            <Input type="text" label="Your comment here" floatingLabel={true} value={this.state.value} onChange={this.handleChange} />
                        </Col>
                        <Col md="1">
                            <input type="submit" value="Submit" />
                        </Col>
                    </Form>
                </Row>
            </Container>
        );
    }
}

export default CommentBox;
