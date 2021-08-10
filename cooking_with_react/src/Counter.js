import React, {Component} from 'react';
// Imports theme context from app.js
import { ThemeContext } from './App';

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
            // Need to wrap everything inside of theme element again
            <ThemeContext.Consumer>
                {/* Parenthesis instead of curly brace means return
                everything inside of parenthesis */}
                {style => (
                    <div>
                        <button style={style} onClick={() => this.changeCount(-1)}>-</button>
                        <span>{this.state.count}</span>
                        <button style={style} onClick={() => this.changeCount(1)}>+</button>
                    </div>
                )}
            </ThemeContext.Consumer>
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