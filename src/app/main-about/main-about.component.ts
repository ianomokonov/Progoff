import { Component, OnInit, HostListener } from "@angular/core";
import { WindowService } from "../window";

@Component({
  selector: "main-about",
  templateUrl: "./main-about.component.html",
  styleUrls: ["./main-about.component.less"],
})
export class MainAboutComponent implements OnInit {
  show = true;
  // @HostListener("document:scroll", [])
  // onScroll(): void {
  //   let y = document.getElementsByClassName("about")[0].getBoundingClientRect()
  //     .top;
  //   if (Math.abs(y) < this.window.innerHeight - 200) {
  //     this.show = true;
  //   } else {
  //     this.show = false;
  //   }
  // }

  constructor(private window: WindowService) {}

  ngOnInit() {}
}
