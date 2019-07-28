import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as saveAs from 'file-saver';
import { take } from 'rxjs/operators';
@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  customers: any;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.reloadData();
  }

  getCustomersList() {
    this.customerService.getCustomersList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(customers => {
      this.customers = customers;
    });
  }

  deleteCustomers() {
    this.customerService.deleteAll();
  }

  reloadData() {
    this.customers = this.getCustomersList();
  }

  convertToCSV(data: any, columns: string, header: string, delimiter: string |
  undefined) {

   let row = '';
   const del = delimiter ? delimiter : ';';
   const col = columns.split(del);
   const head = header.split(del);


   // creating the header
   for (const headerTxt of head) {
     row += headerTxt + del;
   }
   row += '\r\n';
   //  start with the rows
   for (const dataset of data) {
     let line = '';
     for (let i = 0; i < col.length; i++) {
       let dataToAdd = dataset[col[i]];
       if (dataset[col[i]] == null || dataset[col[i]] === undefined) {
         dataToAdd = '';
       }
       line += '"' + dataToAdd + '"' + del;
     }
     row += line + '\r\n';
   }
   return row;
  }

  download(data: any, filename: string, columns: string, header: string, delimiter: string | undefined) {
    const csvData = this.convertToCSV(data, columns, header, delimiter);
    const link: any = document.createElement('a');
    link.setAttribute('style', 'display:none;');
    document.body.appendChild(link);
    const blob = new Blob([csvData], {type: 'text/csv'});
    link.href = window.URL.createObjectURL(blob);

    const isIE = !!(<any> document).documentMode;

    if (isIE) {
      navigator.msSaveBlob(blob, filename + '.csv');
    } else {
      link.download = filename + '.csv';
    }
    link.click();
    link.remove();
  }

  getcsvFile() {

      this.getCustomersList()



       .pipe(take(1)) // <-- HERE
       .subscribe(customers=>{ // <-- AND HERE
        if (customers) {
          this.download(customers, 'customer','key,name,age,active','Key,Name,Age,Active', ',');
        }
     });
   }
}
