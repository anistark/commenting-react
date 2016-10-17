//import AwesomeComponent from './components/AwesomeComponent.jsx';
import React from 'react';
import {render} from 'react-dom';
import CommentBox from './components/CommentBox.jsx';
import CommentTree from './components/CommentTree.jsx';

render(<CommentTree />, document.getElementById('comment_tree'));
render(<CommentBox />, document.getElementById('comment_box'));
