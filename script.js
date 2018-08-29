var todoList = {
  todos: [],
  displayTodos: function() {
    if (this.todos.length === 0) {
      console.log("Your list is empty.");
    } else {
      console.log("My Todos:");
      for (var i = 0; i < this.todos.length; i++) {
        if (this.todos[i].completed === true) {
          console.log("(x)", this.todos[i].todoText);
        } else {
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed: false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position){
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;
    // get number of completed Todos
    for (var i = 0; i < totalTodos; i++) {
      if (this.todos[i].completed === true) {
        completedTodos++;
      }
    }
  // Case 1: if everything is true then make everything false
    if (completedTodos === totalTodos) {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
  // Case 2: otherwise make everything true
    } else {
      for (var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

// we want to get access to the display todos button
var displayTodosButton = document.getElementById('displayTodosButton');
// we want to run the displayTodos method when someone clicks the display todos button
displayTodosButton.addEventListener('click', function() {
  todoList.displayTodos();
});

// we want to get access to the toggle all button
var toggleAllButton = document.getElementById('toggleAllButton');
// we want to run the toggleAll method when someone clicks the toggle all button
toggleAllButton.addEventListener('click', function() {
  todoList.toggleAll();
});
