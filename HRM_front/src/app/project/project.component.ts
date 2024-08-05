import { Component } from '@angular/core';
import { HomeServiceService } from '../services/home-service.service';
import { Employee, Project } from '../../types';
import { ApiService } from '../services/api.service';
import { ProjectService } from '../services/project.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})


export class ProjectComponent {
  public projects: Project[] = []
  constructor(
    private projectService : ProjectService
  ) {}
  ngOnInit() {
    this.projectService.findAll().subscribe(data => {
      this.projects = data;
      console.log(this.projects);
    });

}
}
