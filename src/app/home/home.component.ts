import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hostName = '';
  userName = '';
  password = '';
  constructor() { }

  ngOnInit() {
    console.log('startedddd')
  }

  saveController() {
    alert("dsugfuydsgfyud")
  }

}
