import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http'

import {UUID} from 'angular2-uuid';
import 'rxjs/add/operator/toPromise';
import {Todo} from './todo.model';
@Injectable()
export class TodoService{

  
    private api_url = 'api/todos';
    private headers = new Headers({'Content-Type': 'application/json'});
    todos:Todo[] =[];
    constructor(private http:Http){};
    // addTodo(todoItem:string):Todo[]{
    //     let todo ={
    //         id:UUID.UUID(),
    //         desc:todoItem,
    //         completed:false
    //     };
    //     this.todos.push(todo);
    //     return this.todos;
    // }
    
     addTodo(todoItem:string): Promise<Todo> {
        let todo = {
        id: 0, //UUID.UUID(),
        str_id:UUID.UUID(),
        desc: todoItem,
        completed: false
        };
        // this.todos.push(todo);
        // return this.todos;
        console.log(todoItem)
        return this.http
            .post(this.api_url, JSON.stringify(todo), {headers: this.headers})
            .toPromise()
            .then(res =>{ 
                res.json().data as Todo
                console.log("res"+res);
            })
            .catch(this.handleError);
   }
   // PUT /todos/:id
   toggleTodo(todo: Todo): Promise<Todo> {
    const url = `${this.api_url}/${todo.id}`;
    console.log(url);
    let updatedTodo = Object.assign({}, todo, {completed: !todo.completed});
    return this.http
            .put(url, JSON.stringify(updatedTodo), {headers: this.headers})
            .toPromise()
            .then(() => updatedTodo)
            .catch(this.handleError);
  }
    // DELETE /todos/:id
  deleteTodoById(id: string): Promise<void> {
    const url = `${this.api_url}/${id}`;
    return this.http
            .delete(url, {headers: this.headers})
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
  }
  // GET /todos
  getTodos(): Promise<Todo[]>{
    return this.http.get(this.api_url)
              .toPromise()
              .then(res => res.json().data as Todo[])
              .catch(this.handleError);
  }
   private handleError(error: any): Promise<any> {
    console.error('出现错误', error); 
    return Promise.reject(error.message || error);
  }
}