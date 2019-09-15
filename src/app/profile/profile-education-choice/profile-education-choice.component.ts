declare function require(path: string):any;


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-education-choice',
  templateUrl: './profile-education-choice.component.html',
  styleUrls: ['./profile-education-choice.component.css']
})
export class ProfileEducationChoiceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  background_1 = require("./background-1.png")
  background_2 = require("./background-2.png")
  background_5 = require("./background-5.png")
  process_list = require("./process-list.png")

}
