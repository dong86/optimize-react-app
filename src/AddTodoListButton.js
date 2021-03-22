import React from 'react';

const AddTodoListButton = ({ onClick }) => {
    return (
        <button onClick={onClick}>Add Todo</button>
    )
}

export default React.memo(AddTodoListButton);

// export default class AddTodoListButton extends React.PureComponent {
//     render() {
//         const { onClick } = this.props;
//         return (
//             <button onClick={onClick}>Add Todo</button>
//         )
//     }
// }