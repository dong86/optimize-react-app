import React from 'react';

export default class AddTodoListButton extends React.Component {
    render() {
        const { onClick } = this.props;
        return (
            <button onClick={onClick}>Add Todo</button>
        )
    }
}