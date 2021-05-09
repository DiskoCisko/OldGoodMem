import React from 'react';
import Post from './Post'
import MEM from './store'
import './App.scss';

class App extends React.Component {
    state = {
        mems: MEM,
        currentId: 0,
        sum: "",
        number: "",
        isSsiklo: false
    }
    componentDidMount() {
        this.setState({
            mems: this.shuffleArray(this.state.mems)
        })
    }
    shuffleArray = (array) => {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 0) + 1);
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array
    }
    handlClick = () => {
        if (this.state.currentId<this.state.mems.length-1) {
            this.setState({currentId: this.state.currentId + 1}) 
            if (this.state.isSsiklo) {
                this.handlClickSsiklo()
            }
        }
        
    }
    handlClickSsiklo = () => {
        this.setState({isSsiklo: !this.state.isSsiklo})
    }
    renderButton = () => {
        return <>
            <button className="btn next" onClick={this.handlClick}>Поехали</button>
            <button className="btn pas" onClick={this.handlClickSsiklo}>Ссыкло</button>
            
        </>
    }
    render() {
        console.dir(this.state.currentId)
        return <div className="container">
            <h1>Мемас года</h1>
            <Post 
                idNum = {this.state.mems[this.state.currentId].id}
                title = {this.state.mems[this.state.currentId].title}
                desc = {this.state.mems[this.state.currentId].desc}
                heshteg = {this.state.mems[this.state.currentId].heshteg}
                img = {this.state.mems[this.state.currentId].img}
                isSsiklo = {this.state.isSsiklo}
                renderButton = {this.renderButton()}
            />
        </div>
    }
}

export default App;