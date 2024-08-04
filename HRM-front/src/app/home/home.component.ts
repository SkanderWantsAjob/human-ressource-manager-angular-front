import { Component } from '@angular/core';
import { HomeServiceService } from '../services/home-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(
    private HomeService : HomeServiceService
  ) {}
  ngOnInit() {
    this.HomeService.getEmployees('http://localhost:8080/api/employees').subscribe(( employees)=> {
      console.log(employees);
    })
  }

}
