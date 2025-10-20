import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CvService } from '../../core/services/cv.service';

@Component({
  selector: 'app-cv-form',
  templateUrl: './cv-form.component.html',
  styleUrls: ['./cv-form.component.scss']
})
export class CvFormComponent implements OnInit {
  cvForm: FormGroup;

  constructor(private fb: FormBuilder, private cvService: CvService) {
    this.cvForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      skills: ['', Validators.required],
      experience: this.fb.array([])
    });
  }

  ngOnInit(): void {}

  addExperience() {
    const experienceGroup = this.fb.group({
      position: ['', Validators.required],
      company: ['', Validators.required],
      duration: ['', Validators.required],
      description: ['']
    });
    this.experience.push(experienceGroup);
  }

  get experience() {
    return this.cvForm.get('experience') as FormArray;
  }

  onSubmit() {
    if (this.cvForm.valid) {
      this.cvService.saveCv(this.cvForm.value).subscribe(response => {
        console.log('CV submitted successfully', response);
      });
    }
  }
}