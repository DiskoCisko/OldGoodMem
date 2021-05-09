import React from 'react';
import Span from './Span';
import Ssiklo from './Ssiklo'
import './Post.scss';

export default class Bot extends React.Component {
    
   render() {
       const hesh = this.props.heshteg.map(text => {
           return <Span text={text}/>
       });
       let ssiklo;
       if (this.props.isSsiklo) {
           ssiklo = <Ssiklo />
       }
    return <div className="post">
        <img src={this.props.img}/>
        <div className="wrp">
            <h2>{this.props.title}</h2>
            <p>{this.props.desc} 
                {hesh}
            </p> 
            {this.props.renderButton}
            
            {ssiklo}
        </div> 
    </div>
   }
}