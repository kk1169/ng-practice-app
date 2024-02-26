import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-form-array',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-array.component.html',
  styleUrl: './form-array.component.scss',
})
export class FormArrayComponent {
  developerForm: FormGroup;
  skillList = ['Angular', 'HTML', 'CSS', 'Javascript', 'NodeJS', 'MySQL'];

  constructor(private fb: FormBuilder) {
    this.developerForm = this.fb.group({
      developer: new FormControl(''),
      skills: this.fb.array([]),
    });
  }

  skills(): FormArray {
    return this.developerForm.get('skills') as FormArray;
  }

  addSkill() {
    const skill = this.fb.group({
      skill: new FormControl(''),
      experience: new FormControl(''),
    });
    this.skills().push(skill);
  }

  removeSkill(index: number) {
    this.skills().removeAt(index);
  }

  onSubmit() {
    console.log(this.developerForm.value);
  }
}
