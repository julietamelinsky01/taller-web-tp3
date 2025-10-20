import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cv } from '../models/cv.model';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private cvData: Cv = {
    personalInfo: {
      name: '',
      email: '',
      phone: '',
      address: ''
    },
    skills: [],
    experiences: [],
    projects: []
  };

  private cvSubject = new BehaviorSubject<Cv>(this.cvData);
  cv$ = this.cvSubject.asObservable();

  constructor() {}

  getCvData(): Cv {
    return this.cvData;
  }

  updateCvData(cv: Cv): void {
    this.cvData = cv;
    this.cvSubject.next(this.cvData);
  }

  addProject(project: Project): void {
    this.cvData.projects.push(project);
    this.cvSubject.next(this.cvData);
  }

  removeProject(projectId: number): void {
    this.cvData.projects = this.cvData.projects.filter((_, index) => index !== projectId);
    this.cvSubject.next(this.cvData);
  }
}