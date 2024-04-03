import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit{
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  isLinear = true;
  
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      // Define los controles y las validaciones necesarias
      control1: ['', Validators.required],
      control2: ['', Validators.required]
    });

    this.secondFormGroup = this._formBuilder.group({
      // Define los controles y las validaciones necesarias para el segundo formulario
      control3: ['', Validators.required],
      control4: ['', Validators.required]
    });
  }
}