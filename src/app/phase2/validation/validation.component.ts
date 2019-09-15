declare function require(path: string):any;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  headerlogo= require("./logo.png")
  headerprofile = require("./profile.png")
  processlist = require("./process-list.png")
  card1_profile_img = require("./card1-profile-img.png")
  card2_profile_img = require("./card2-profile-img.png")
  card3_profile_img = require("./card3-profile-img.png")
  location_icon = require("./location-icon.png")
  work_icon = require("./work-icon.png")
  exp_icon = require("./exp-icon.png")
  free_icon = require("./free-icon.png")
}
