import React from 'react';

export const Summary = React.memo(function Summary(props) {
    const { todos } = props;
    return (
        <div>
            <ul>
                {todos.map(todo => <li key={todo}>{todo}</li>)}
            </ul>
            <p>Total: {todos.length} items</p>
        </div>
    );
}, (oldProps, nextProps) => {
    return JSON.stringify(oldProps.todos) === JSON.stringify(nextProps.todos);
});
// export class Summary extends React.Component {
//     shouldComponentUpdate(nextProps) {
//         const oldTodos = this.props.todos;
//         const newTodos = nextProps.todos;
//         return JSON.stringify(oldTodos) !== JSON.stringify(newTodos);
//     }

//     render() {
//         const { todos } = this.props;
//         return (
//             <div>
//                 <ul>
//                     {todos.map(todo => <li key={todo}>{todo}</li>)}
//                 </ul>
//                 <p>Total: {todos.length} items</p>
//             </div>
//         );
//     }
// }