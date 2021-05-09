import React from 'react';
import './Ssiklo.scss';

export default class Ssiklo extends React.Component {
   render() {
    return <div className="ssiklo">
    <div className="price">
        <span>{Math.floor(Math.random() * 300)}</span>  рубасиков
    </div>
    <div>
        <div className="number">
            8(9{Math.floor(Math.random() * 9)}{Math.floor(Math.random() * 9)}) 
            {Math.floor(Math.random() * 9)}
            {Math.floor(Math.random() * 9)}
            {Math.floor(Math.random() * 9)}
            -
            {Math.floor(Math.random() * 9)}
            {Math.floor(Math.random() * 9)}
            -
            {Math.floor(Math.random() * 9)}
            {Math.floor(Math.random() * 9)}
        </div>
    </div>
</div>
   }
}