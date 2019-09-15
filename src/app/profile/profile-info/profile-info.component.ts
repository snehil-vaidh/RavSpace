declare function require(path: string):any;

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  background_1 = require("./background-1.png")
  background_2 = require("./background-2.png")
  background_4 = require("./background-4.png")
  process_list = require("./process-list.png")
  upload_img = require("./upload-img.png")

}
