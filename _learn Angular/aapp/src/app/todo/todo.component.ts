import { Component, OnInit ,Inject} from '@angular/core';
//import { AuthService } from '../core/auth.service';
import  {Todo} from './todo.model';
import {TodoService} from './todo.service';
@Component({
  selector: 'todo',
   templateUrl: 'todo.component.html',
   styleUrls:['todo.component.css'],
   providers:[TodoService]
})
export class TodoComponent implements OnInit {
  todos:Todo[] =[];
  desc :string ='';  
 // constructor(private service: AuthService) { }
  constructor(private service:TodoService) {
  }
  ngOnInit() {
    this.getTodos();
  }
  // addTodo(){
  //   this.todos =this.service.addTodo(this.desc);
  //   this.desc ='';
  // }
  //用了内存服务器之后
  addTodo(){
     this.service
     .addTodo(this.desc)
     .then(todo=>{
       //...用于返回一个新的数组
       //console.log("1111"+todo)
       this.todos=[...this.todos,todo];
       this.desc ='';
     })
  }
   toggleTodo(todo: Todo) {
    const i = this.todos.indexOf(todo);
    this.service
      .toggleTodo(todo)
      .then(t => {
        this.todos = [
          ...this.todos.slice(0,i),
          t,
          ...this.todos.slice(i+1)
          ];
      });
  }
  removeTodo(todo: Todo) {
    const i = this.todos.indexOf(todo);
    this.service
      .deleteTodoById(todo.str_id)
      .then(()=> {
        this.todos = [
          ...this.todos.slice(0,i),
          ...this.todos.slice(i+1)
        ];
      });
  }
  getTodos(): void {
    this.service
      .getTodos()
      .then(todos => this.todos = [...todos]);
  }

}
