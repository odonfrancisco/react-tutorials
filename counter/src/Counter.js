import React, {Component} from 'react';

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: props.initialCount
        }
    }
    
    render() {
        console.log("Counter Rendered");
        return(
            <div>
                <button onClick={() => this.changeCount(-1)}>-</button>
                <span>{this.state.count}</span>
                <button onClick={() => this.changeCount(1)}>+</button>
            </div>
        )
    }

    changeCount(amount) {
        /* Anytime you use previous state to set new state,
        need to use function version */
        this.setState(prevState => {
            return {count: prevState.count + amount}
        })
        /* Anytime you don't use the previous state to set state,
        can use normal, non-function version */
        // this.setState({count: 6})
    }
    
}