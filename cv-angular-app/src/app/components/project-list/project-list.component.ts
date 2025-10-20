import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/core/models/project.model';
import { CvService } from 'src/app/core/services/cv.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects: Project[] = [];

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projects = this.cvService.getProjects();
  }
}