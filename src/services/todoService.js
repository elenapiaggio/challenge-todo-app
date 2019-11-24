import axios from 'axios';

class TodoService {
    constructor() {
        this.todo = axios.create({
            // baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
            baseURL: 'http://localhost:4000/api/v1',
            withCredentials:true,
        });
    }

    getAllTodos() {
        return this.todo.get('/todos')
            .then(({ data: todos }) => todos);
    }

    addNewTodo(body){
        return this.todo.post('/todos', body)
            .then(({ data: todo }) => todo);
    }
}

const todoService = new TodoService()

export default todoService;