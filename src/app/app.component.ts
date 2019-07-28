import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFireModule } from '@angular/fire';
// 'angularFire2';
import { AngularFireDatabase }  from '@angular/fire/database';
// Module as AngularFireDatabaseModule
// 'angularFire2/database';
import { AngularFireObject, AngularFireList } from '@angular/fire/database';
// 'angularFire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'grokonez.com';
  description = 'Angular 8 Firestore Demo';
  csvoutput = 'Download List in CSV';

 itemValue = '';
 items: Observable<any[]>;


 constructor(public db: AngularFireDatabase) {
   this.items = db.list('items').valueChanges();
 }

 onSubmit() {
   this.db.list('items').push({ content: this.itemValue});
   this.itemValue = '';
 }
}
