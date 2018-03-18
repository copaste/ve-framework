function TodoController(todoStore) {
    var todoCtrl = this;
    this.todoName = '';
    this.todos = [{id:0, name:'todo #1', completed:true}];
    this.todoId = this.todos.length;
    todoCtrl.tasksLeft = 0;
    todoCtrl.todoStore = todoStore;
    todoCtrl.todoStore.setState(this.todos);

    this.genLongTodoList = function() {
        for(var i =1; i<=500; i++) {
            todoCtrl.todos.push({id:i, name:'todo #'+i, completed:false});
        }
    };

    this.onInit = function() {

        $.get('https://jsonplaceholder.typicode.com/todos', function(response) {
            var todos = [];
            response.forEach(function(todo) {
                todoCtrl.todos.push({
                    type: 'ADD_TODOS',
                    id: todo.id,
                    name: todo.title,
                    completed: todo.completed
                });
            });

            todoCtrl.todoStore.dispatch({
                type: 'ADD_TODOS',
                todos: todoCtrl.todos
            });

            todoCtrl.todoId = todoCtrl.todos.length;
        });

        // adding custom validator to todoForm
        this.todoForm.addValidator({
            // here we set the input field name, the validators should be applied to.
            name: 'todo_name',
            // we can have multiple validators for a field
            // in this case we have only one
            validators: [{
                validator: function(element) {
                    return element.value.length>=3;
                },
                message: 'The min length of the value must be at least 3 chars!'
            }]
        });
    };

    todoCtrl.todoStore.subscribe(function() {
        todoCtrl.todos = todoCtrl.todoStore.getState();
        todoCtrl.tasksLeft = todoCtrl.todos.filter(function(todo) {
            return todo.completed===false;
        }).length;
        todoCtrl.refreshView();
    });

    this.addTodo = function(event) {
        if( todoCtrl.todoForm.invalid ) {
            return todoCtrl.todoForm.errors.map(function(err) {
                alert(err.message);
            });
        }

        todoCtrl.todoStore.dispatch({
            type: 'ADD_TODO',
            id: todoCtrl.todoId++,
            name: todoCtrl.todoForm.data.todo_name,
            completed: todoCtrl.todoForm.data.todo_completed==="true"
        });

        todoCtrl.todoForm.clear();
    };

    this.addTodos = function(todos) {
        todoCtrl.todoStore.dispatch({
            type: 'ADD_TODOS',
            todos: todos
        });
    };

    this.editTodo = function(todo) {
        var name = prompt("Please enter todo name", todo.name) || todo.name;
        todoCtrl.todoStore.dispatch({
            type: 'CHANGE_TODO',
            id: todo.id,
            name: name,
            completed: todo.completed
        });
    };

    this.removeTodo = function(id) {
        todoCtrl.todoStore.dispatch({
            type: 'REMOVE_TODO',
            id: id
        });
    };

    this.sortTodo = function(order) {
        todoCtrl.todoStore.dispatch({
            type: 'SORT_TODO_' + order
        });
    };

    this.toggleStatus = function (todo) {
        todoCtrl.todoStore.dispatch({
            type: 'TOGGLE_TODO',
            id: todo.id,
            completed: todo.completed
        });
    };

    this.todoVisibilityFilter = function (filter) {
        todoStore.savedState = todoStore.savedState || todoStore.getState();
        todoCtrl.todoStore.dispatch({
            type: 'FILTER_TODO',
            filter: filter
        });
        todoStore.setState(todoStore.savedState);
        todoStore.savedState = false;
    };

}

// Injecting the controller with "TodoStoreService"
TodoController.$inject = ['TodoStoreService'];
// Registering the controller
vejs.controller('TodoController', TodoController);

// Registering the "TodoStoreService" service
vejs.service('TodoStoreService', function() {

    return new vejs.store(function (state, action) {
        state = state || [];

        switch(action && action.type) {
            case 'ADD_TODO':
                return state.concat({
                    id: action.id,
                    name: action.name,
                    completed: action.completed
                });
            case 'ADD_TODOS':
                return action.todos.slice(0);
            case 'REMOVE_TODO':
                return state.filter(function(r) {
                    return r.id!==action.id;
                });
            case 'CHANGE_TODO':
                return state.map(function(r) {
                    if( r.id===action.id ) {
                        return {
                            id: action.id,
                            name: action.name,
                            completed: action.completed
                        }
                    }
                    return r;
                });
            case 'TOGGLE_TODO':
                return state.map(function(r) {
                    if( r.id===action.id ) {
                        return {
                            id: r.id,
                            name: r.name,
                            completed: !action.completed
                        };
                    }
                    return r;
                });
            case 'FILTER_TODO':
                return state.filter(function(r) {
                    if( action.filter==='all' ) {
                        return true;
                    }
                    if( action.filter==='active' ) {
                        return !r.completed;
                    }
                    else {
                        return r.completed;
                    }
                });
            case 'SORT_TODO_ASC':
                return state.concat().sort(action.sortFn || function(a,b) {
                    if (a.id<b.id) {
                        return -1;
                    }
                    if (a.id>b.id) {
                        return 1;
                    }
                    return 0;
                });
            case 'SORT_TODO_DESC':
                return state.concat().sort(action.sortFn || function(a,b) {
                    if (a.id>b.id) {
                        return -1;
                    }
                    if (a.id<b.id) {
                        return 1;
                    }
                    return 0;
                });
            default:
                return state;
        }
    });
});

// Bootstrap the application
vejs.bootstrap();
