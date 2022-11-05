import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  columnDefs = [
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price'}
];

rowData = [
    {make: 'Toyota', model: 'Celica', price: 35000},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porsche', model: 'Boxter', price: 72000}
];

  public userDetails: any;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
  }

  ngOnInit(): void {
    const storage = localStorage.getItem('google_auth');

    if (storage) {
      this.userDetails = JSON.parse(storage);
    } else {
      this.signOut();
    }
    
  }

  signOut(): void {
    localStorage.removeItem('google_auth');
    this.router.navigateByUrl('/login').then();
  }
  activedStep = 0;

  model = {};
  steps: any =1;
  onprev(){
    console.log(this.steps);
    this.steps = this.steps - 1;
  }

  onnext(){
    console.log(this.steps);
    this.steps = this.steps + 1;
  }

  onSubmit() {
    console.log("Submitted!!!");
    this.steps = 1;
  }

  submitForm() 
 {
      if(this.steps<4){
       this.onnext();
      }
      else{
       this.onSubmit();
     }
 }
}
