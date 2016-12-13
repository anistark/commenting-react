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

class CommentTree extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    getData() {
        return (
            <Panel>
                Something
            </Panel>
        );
    }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col md="12">
                        {this.getData()}
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
