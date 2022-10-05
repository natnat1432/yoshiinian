import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
databaseObj: SQLiteObject;
tables = {
  customers:"customers",
};
  constructor(private sqlite:SQLite) { }

  async createDatabase(){
    await this.sqlite.create({
      name:"yoshiinian",
      location:"default",
    }).then((db: SQLiteObject) => {
        this.databaseObj = db;
    }).catch((e) => {
      alert("Error on creating database" + JSON.stringify(e));
    });
  }
  async createTables(){
    await this.databaseObj.executeSql(
      ``
    )
  }
}
