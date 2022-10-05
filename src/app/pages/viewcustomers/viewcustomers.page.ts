import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-viewcustomers',
  templateUrl: './viewcustomers.page.html',
  styleUrls: ['./viewcustomers.page.scss'],
})
export class ViewcustomersPage implements OnInit {

  customers:any =[];
  constructor(public database: DatabaseService) {
    this.database.createDatabase().then(() => {
      //will call get categories
    })
   }

  ngOnInit() {
  }
  getCustomers(){
    this.database.getCustomers().then((data)=>{
      this.customers =[];
      if (data.rows.length >0){
        for (var i=0; i < data.rows.length; i++){
          this.customers.push(data.rows.item(i));
        }
      }
    });
  }
}
