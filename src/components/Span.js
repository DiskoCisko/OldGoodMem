import React from 'react';
import './Post.scss';
export default class Span extends React.Component {
   render() {
    return <span className="heshteg">{this.props.text}</span>
   }
}