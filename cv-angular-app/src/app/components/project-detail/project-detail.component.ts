import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CvService } from '../../core/services/cv.service';
import { Project } from '../../core/models/project.model';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project: Project | undefined;

  constructor(private route: ActivatedRoute, private cvService: CvService) {}

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.project = this.cvService.getProjectById(projectId);
    }
  }
}