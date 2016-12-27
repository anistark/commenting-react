import React from 'react';
import Panel from 'muicss/lib/react/panel';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Divider from 'muicss/lib/react/divider';
var cx = require('classnames');
import Moment from 'moment';

require('../assets/theme.less');
require('../assets/app.less');

import { SocketProvider, socketConnect } from 'socket.io-react';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000');

class CommentTree extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            data: {}
        };
    }

    componentDidMount() {
        socket.on('chat_channel', data => {
            this.setState({ data })
        })
    }

    getData() {
        socket.on('chat_channel', msg => {
            console.log(msg);
            return "something";
        });
    }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col md="12">
                        <Panel>
                            <input type="text" value={ socket } />
                        </Panel>
                    </Col>
                </Row>
            </Container>
        );
    }

    handleChange(tree) {
        /* Do Something with tree generated */
    }

}

export default CommentTree;
