import React, { Component } from 'react';


class CounterNumber extends Component {
        state = {
            //count :this.props.value,
            count :this.props.counter.value,
        };


    handleIncrement = product =>{
        console.log(product);
        this.setState({
            count: this.state.count + 1
        })
    };

    // doHandleIncrement = ()=>{
    //     this.handleIncrement({id: + 1})
    // }

    styles ={
        fontSize:'14px',
        padding:'10px 10px',
    }
    render() { 

        let classes = "badge m-2 p-2 badge-";
        classes += (this.state.count === 0) ? 'warning':'primary';

        return (
            <React.Fragment>
                <div className="container">
                    <br/>
                    {this.props.children}
                     
                    <img src={this.state.imgUrl}/>
                    {/* <span>{this.state.count}</span> 
                        <p style="{{fontSize:30}}">style inline css</p>
                        */}
                     <span style={this.styles} className={classes}>{this.formatCount()} </span> 
                    <button onClick={this.handleIncrement} className={this.incrementMethod()}>click increment</button>
                    {/* <button onClick={() => this.handleIncrement(product)} className={this.incrementMethod()}>click increment</button> */}
                    <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger sm m-2">Delete</button>
                    <hr/>

                </div>
            </React.Fragment>
            );
    }

    incrementMethod() {
        let incrementbtn = "btn btn-sm btn-";
        incrementbtn += (this.state.count === 0) ? 'success' : 'info';
        return incrementbtn;
    }

    formatCount(){
        const {count} = this.state;
        return count === 0 ? "zero" : count;
    }
}
 
export default CounterNumber;