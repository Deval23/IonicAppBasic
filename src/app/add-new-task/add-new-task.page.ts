import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodooService } from '../todoo.service';

@Component({
  selector: 'app-add-new-task',
  templateUrl: './add-new-task.page.html',
  styleUrls: ['./add-new-task.page.scss'],
})
export class AddNewTaskPage implements OnInit {
 categories = ['work','personal','home']

 taskName
 taskDate
 taskPriority
 taskCategory

 taskObject
  constructor(public modalCtrl:ModalController,public todooService:TodooService) { }

  ngOnInit() {

  }

  async dismis(){
  await this.modalCtrl.dismiss(this.taskObject)
  }

  selectedCategory(index){
  this.taskCategory=this.categories[index]
  }

  async AddTask(){
this.taskObject=({itemName:this.taskName,
                  itemDueDate:this.taskDate,
                  itemPriority:this.taskPriority,
                  itemCategory:this.taskCategory
                });
            let uid= this.taskName + this.taskDate;
            
            if(uid){
           await this.todooService.addTask(uid,this.taskObject)
            }     
            else{
              console.log("can't save empty task");
            }
           this.dismis();
    
  }

}
