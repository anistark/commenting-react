import React from 'react';
import Panel from 'muicss/lib/react/panel';
import Container from 'muicss/lib/react/container';
import Row from 'muicss/lib/react/row';
import Col from 'muicss/lib/react/col';
import Divider from 'muicss/lib/react/divider';
var cx = require('classnames');
var Tree = require('../lib/react-ui-tree.js');
var tree = require('../assets/tree');
var comments = require('../assets/comments');
import Moment from 'moment';

require('../lib/react-ui-tree.less');
require('../assets/theme.less');
require('../assets/app.less');

class CommentTree extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            tree: comments
        };
    }

    renderNode(node) {
        if(node.room) {
            return (
                <Panel>
                    <Row>
                        <Col md="8">
                            <div id={node.room} className="mui--text-subhead">
                                {node.description}
                            </div>
                        </Col>
                    </Row>
                </Panel>
            );
        }
        else {
            return (
                <Panel className="mui--z2">
                    <div className="mui--text-title mui--text-dark-secondary mui--text-left">{node.username}</div>
                    <Row>
                        <Col md="8">
                            <div id={node.path} className="mui--text-subhead">
                                 {node.module}
                            </div>
                        </Col>
                        <Col md="2">
                            <div className="mui--text-center">
                                {Moment(node.date).format('LLLL')}
                            </div>
                        </Col>
                        <Col md="2">
                            <div className="mui--text-danger mui--text-right">
                                Reply | Delete
                            </div>
                        </Col>
                    </Row>
                </Panel>
            );
        }
    }

    render() {
        return (
            <Container fluid={true}>
                <Row>
                    <Col md="12">
                        <Tree
                            paddingLeft={20}
                            tree={this.state.tree}
                            onChange={this.handleChange}
                            isNodeCollapsed={this.isNodeCollapsed}
                            renderNode={this.renderNode}
                        />
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
