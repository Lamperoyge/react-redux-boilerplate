import React, { Component } from 'react'

export default class Counter extends Component {


    handleClick = (e) => {
        e.preventDefault();
        this.props.testCounter('bla bla')
    };

    render() {
        console.log('blabla')
        return (
            <div>
                <button onClick={this.handleClick}>increment</button>
                <span>
                    {this.props.counter}
                </span>
            </div>
        )
    }
}
