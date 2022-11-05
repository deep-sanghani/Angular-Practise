import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})

export class StagesComponent {
  firstFormGroup = this._formBuilder.group({
    Name: [null, Validators.compose([Validators.required])],
    Email: [null, Validators.compose([Validators.required])]
  });
  secondFormGroup = this._formBuilder.group({
    Mobile: [null, Validators.compose([Validators.required])],
    Address: [null, Validators.compose([Validators.required])]
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });
  fourthFormGroup = this._formBuilder.group({
    fourthCtrl: ['', Validators.required],
  });
  fifthFormGroup = this._formBuilder.group({
    fifthCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) {}
}

// export class StagesComponent implements OnInit {

//   constructor(private _formBuilder: FormBuilder) { }

//   ngOnInit(): void {
    
//   }
//   firstFormGroup = this._formBuilder.group({
//     firstCtrl: ['', Validators.required],
//   });
//   secondFormGroup = this._formBuilder.group({
//     secondCtrl: ['', Validators.required],
//   });
//   isLinear = false;
//   model = {};
//   steps: any =1;
//   onprev(){
//     console.log(this.steps);
//     this.steps = this.steps - 1;
//   }

//   onnext(){
//     console.log(this.steps);
//     this.steps = this.steps + 1;
//   }

//   onSubmit() {
//     console.log("Submitted!!!");
//     this.steps = 1;
//   }

//   submitForm() 
//  {
//       if(this.steps<4){
//        this.onnext();
//       }
//       else{
//        this.onSubmit();
//      }
//  }
// }
