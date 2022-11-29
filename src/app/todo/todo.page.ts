import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddNewTaskPage } from '../add-new-task/add-new-task.page';
import { TodooService } from '../todoo.service';
import { UpdatePage } from '../update/update.page';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss'],
})
export class TodoPage implements OnInit {

  

  todoList = []

today : number = Date.now();



constructor(public modalCtrl:ModalController,public todooService:TodooService) { 
  this.getAllTask();
}

async addTask(){
const modal=await this.modalCtrl.create({
  component: AddNewTaskPage
})

 modal.onDidDismiss().then(newTaskObj => {
  this.getAllTask();


})
return await modal.present()
}

getAllTask(){
  this.todoList=this.todooService.getAllTasks()
  console.log(this.todooService.getAllTasks())
}

delete(key){
  //this.todoList.splice(index,1);
  this.todooService.deleteTask(key);
  this.getAllTask();
}

async update(selectedTask){
  const modal=await this.modalCtrl.create({
    component: UpdatePage,
    componentProps: {task:selectedTask} 

  })
  modal.onDidDismiss().then(newTaskObj => {
    this.getAllTask();
  })
  return await modal.present()
}

  ngOnInit() {
  }


}
