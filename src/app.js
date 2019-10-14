import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      toDos:
      [{name: 'Restock fridge', isDone: false},
      {name: 'Walk the dog', isDone: true},
      {name: 'Iron Red Shirt', isDone: false}],
      newTask: ""
    },
    methods: {
      completedTask: function(task) {
        task.isDone = true;
      },
      saveNewTask: function() {
      this.toDos.push({name: this.newTask, isDone: false});
      this.newTask = "";
    }
   }
 });
});
