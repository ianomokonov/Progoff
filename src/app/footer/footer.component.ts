import { Component, OnInit, HostListener } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.less"],
})
export class FooterComponent implements OnInit {
  CurrentYear = new Date().getFullYear();
  showMap = false;
  @HostListener("document:scroll", [])
  onScroll(): void {
    let y = document.getElementsByClassName("map")[0].getBoundingClientRect()
      .top;
    if (window) {
      if (y < window.innerHeight - 200) {
        this.showMap = true;
      }
    } else {
      this.showMap = true;
    }
  }
  constructor(public router: Router) {}

  ngOnInit() {}

  closeMap() {
    this.showMap = !this.showMap;
  }

  go(target: string) {
    this.router.navigate([target]);
    if (window) {
      window.scrollTo(0, 0);
    }
  }
}
