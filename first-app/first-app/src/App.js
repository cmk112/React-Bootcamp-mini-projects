import React from 'react'
import TodoItem from './components/TodoItem'

let TodosData = [
    {id: 1, text: "Wash Car", completed:true},
    {id: 2, text: "Clean Room", completed:false},
    {id: 3, text: "Walk Dogs", completed:false},
    {id: 4, text: "File Taxes", completed:true},
    {id: 5, text: "Finish my NodeJS project", completed:false}
]

class App extends React.Component {

    constructor(){
        super();
        this.state = {
            todos: TodosData
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {

        this.setState(prevState =>{
            const updatedTodos = prevState.todos.map(todo =>{
                if (todo.id ===  id)
                {
                    todo.completed = !todo.completed;
                }
                return todo;
            });
            return ({
                todos: updatedTodos
            })
        })

    }

    render(){

        const TodoComponents = this.state.todos.map(data =>{
            
            return(<TodoItem style={style} item={data} handleChange={this.handleChange}/>);
        });
        

        return(
            <div className="container">
                {TodoComponents}
            </div>
        );
    }

    
    
}

export default App