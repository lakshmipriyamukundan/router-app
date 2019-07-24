import { Component, OnInit } from '@angular/core';
import { ControllerService } from '../app.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  hostName: string;
  userName: string;
  password: string;
  tab1 = true;
  tab2 = false;
  homeShow = true;
  sites = [
    { id: '1', name: 'order 1' },
    { id: '2', name: 'order 2' },
    { id: '3', name: 'order 3' },
    { id: '4', name: 'order 4' },
  ];

  constructor(private controllerService: ControllerService) {}

  ngOnInit() {
    console.log('startedddd');
  }

  saveController() {
    // alert('dsugfuydsgfyud');
    console.log(this);
    this.controllerService
      .addResume({
        hostName: this.hostName,
        userName: this.userName,
        password: this.password,
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
  clickTab1() {
    this.tab1 = true;
    this.tab2 = false;
    this.homeShow = true;
  }
  clickTab2() {
    this.tab2 = true;
    this.tab1 = false;
    this.homeShow = false;
  }
}
