declare function require(path: string):any;


import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  headerlogo= require("./logo.png")
  headerprofile = require("./profile.png")
  processlist = require("./process-list.png")
  card_profile_img = require("./profile1.png")
  card_facebook = require("./facebook.png")
  card_linkedin = require("./linkedin.png")
  card2_about_img = require("./card2-about-img.png")
  card2_edit_img = require("./edit.png")
  card2_education_img = require("./education.png")
  card2_interests_img = require("./card2-interests-img.png")


}
