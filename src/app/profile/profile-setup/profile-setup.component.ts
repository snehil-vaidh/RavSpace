declare function require(path: string):any;


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-setup',
  templateUrl: './profile-setup.component.html',
  styleUrls: ['./profile-setup.component.css']
})
export class ProfileSetupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  background_1 = require("./background-1.png")
  background_2 = require("./background-2.png")
  background_4 = require("./background-4.png")
  process_list = require("./process-list.png")
  profile_img = require("./profile1.png")

}
