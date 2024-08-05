import { Component } from '@angular/core';
import { HomeServiceService } from '../services/home-service.service';
import { Employee } from '../../types';
import { ApiService } from '../services/api.service';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ProjectComponent } from '../project/project.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, ProjectComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public employees: Employee[] = []
  constructor(
    private homeService : ApiService
  ) {}
  ngOnInit() {
    this.homeService.findAll().subscribe(data => {
      this.employees = data;
      console.log(this.employees);
    });

}
}
