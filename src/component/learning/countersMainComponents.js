import React, { Component } from 'react';
import CounterNumber from '../component/counterNumber';
class CountersMain extends Component {
    state = {
        counters:[
            {id: 1, value:4 },
            {id: 2, value:0 },
            {id: 3, value:0 },
            {id: 4, value:0 }
        ]
      }
      handleDelete = counterId =>{
          console.log("handleDelete",counterId);
          const counters = this.state.counters.filter( c => c.id !== counterId);
          this.setState({ counters});
      }

    render() { 
        return ( 
            <React.Fragment>
                    {this.state.counters.map(counter => 
                    <CounterNumber 
                    key={counter.id} 
                    onDelete={this.handleDelete} 
                    //value={counter.value} 
                    //id={counter.id}
                    counter={counter}
                    selected={true}>
                        <h4> Passing children #{counter.id}</h4>
                    </CounterNumber>
                    )}
            </React.Fragment>
         );
    }
}
 
export default CountersMain;   