import { Component, OnInit } from "@angular/core";
import { ThumbnailParam } from "../../home.data.models";

@Component({
  selector: "store-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  thumbnailParams: ThumbnailParam[] = [
    new ThumbnailParam('APIs','/apis','apis'),
    new ThumbnailParam('Applications','/applications','apps'),
    new ThumbnailParam('Forum','/forum','forum'),
    new ThumbnailParam('Statistics','/statistics','stat')
  ];

  constructor() {}

  ngOnInit() {}
}
