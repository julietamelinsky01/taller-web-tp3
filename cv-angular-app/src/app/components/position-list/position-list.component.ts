import { Component, OnInit } from '@angular/core';
import { CvService } from '../../core/services/cv.service';
import { Position } from '../../core/models/cv.model';

@Component({
  selector: 'app-position-list',
  templateUrl: './position-list.component.html',
  styleUrls: ['./position-list.component.scss']
})
export class PositionListComponent implements OnInit {
  positions: Position[] = [];

  constructor(private cvService: CvService) {}

  ngOnInit(): void {
    this.loadPositions();
  }

  loadPositions(): void {
    this.cvService.getPositions().subscribe((data: Position[]) => {
      this.positions = data;
    });
  }
}