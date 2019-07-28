// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { AppRoutingModule } from './app-routing.module';
// import { FormsModule } from '@angular/forms';
//
// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
// import { environment } from '../environments/environment';
//
// import { AppComponent } from './app.component';
// import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
// import { CustomersListComponent } from './customers/customers-list/customers-list.component';
// import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
//
// @NgModule({
//   declarations: [
//     AppComponent,
//     CustomerDetailsComponent,
//     CustomersListComponent,
//     CreateCustomerComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     AppRoutingModule,
//     AngularFireModule.initializeApp(environment.firebase),
//     AngularFirestoreModule
//   ],
//   providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, FirestoreSettingsToken } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
// import { firebaseConfig } from '../environments/environment';
import { AppComponent } from './app.component';
import { CustomerDetailsComponent } from './customers/customer-details/customer-details.component';
import { CustomersListComponent } from './customers/customers-list/customers-list.component';
import { CreateCustomerComponent } from './customers/create-customer/create-customer.component';
import { AngularFireDatabaseModule }  from '@angular/fire/database';
@NgModule({
  declarations: [
    AppComponent,
    CustomerDetailsComponent,
    CustomersListComponent,
    CreateCustomerComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [{ provide: FirestoreSettingsToken, useValue: {} }],
  // providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
