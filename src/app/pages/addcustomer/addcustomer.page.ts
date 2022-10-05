import { Component, OnInit } from '@angular/core';
import { Platform } from "@ionic/angular";
import { DatabaseService } from 'src/app/database.service';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage implements OnInit {
  customers:any=[];
  firstname: string = "";
  lastname: string= "";
  birthdate: Date= null;
  unique_code: string= "";

  // constructor(public database: DatabaseService, public platform: Platform) {
  //   this.database.createDatabase().then(() => {
  //     // will call get categories
  //     this.getCustomers();
  //   });
  // }

  ngOnInit() {
  }
  
//   addCustomers(){
//     if(!this.firstname.length){
//       alert("Enter firstname: ");
//       return;
//     }
//     if(!this.lastname.length){
//       alert("Enter lastname: ");
//       return;
//     }
//     if(!this.birthdate){
//       alert("Enter birthdate: ");
//       return;
//     }
//     else{
//     this.database.addCustomers(this.firstname, this.lastname, this.birthdate, this.unique_code).then((data) => {
//       this.firstname ="";
//       this.lastname ="";
//       this.birthdate = null;
//       this.unique_code ="";
//       alert(data);
//       this.getCustomers();
//     });
//   }
// }
//   getCustomers(){
//     this.database.getCustomers().then((data)=>{
//       this.customers =[];
//       if (data.rows.length >0){
//         for (var i=0; i < data.rows.length; i++){
//           this.customers.push(data.rows.item(i));
//         }
//       }
//     });
//   }
    }
