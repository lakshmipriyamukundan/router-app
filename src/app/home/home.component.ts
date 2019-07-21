import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hostName = '';
  userName = '';
  password = '';

  constructor(private controllerService: ControllerService) { }

  ngOnInit() {
    console.log('startedddd')
  }

  saveController() {
    alert("dsugfuydsgfyud")
    console.log(this);
    this.controllerService.addResume(
      {
        hostName: this.hostName, 
        userName: this.userName, 
        password: this.password
      })
      .subscribe(
      (data: any) => {
        console.log(data);
      },
      error => {
        console.log(error);
      },
    );
  }

}
