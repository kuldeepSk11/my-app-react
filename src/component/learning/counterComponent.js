import React, { Component } from 'react';
import logo from '../logo.svg';

class CounterComp extends Component {
    state = {
        imgUrl :'https://picsum.photos/200',
        tags:['tag1','tag2','tag3','tag4','tag5','tag6'],
        hashtag:['hashtag1','hashtag2','hashtag3','hashtag4','hashtag5','hashtag6']
    };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    // doHandleIncrement = ()=>{
    //     this.handleIncrement({id: + 1})
    // }

    styles ={
        fontSize:'14px',
        padding:'10px 10px',
    }

    renderHashtag(){
        if(this.state.hashtag.length === 0) return <p>There are no tags</p>;
        return  <ul>{this.state.hashtag.map(hashtag => <li key={hashtag}>{hashtag}</li>)}</ul>;
    }

    render() { 


        return (
            <React.Fragment>
                <div className="container">
                     <img src={logo} className="App-logo" alt="logo" /> 
                    <img src={this.state.imgUrl}/>
                    <hr/>
                    <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
                    <hr/>
                    {this.state.hashtag.length ===0 && "please create arrry "}
                    {this.renderHashtag()}

                </div>
            </React.Fragment>
            );
    }

}
 
export default CounterComp;