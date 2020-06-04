import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { ModalService } from "../services/modal.service";
import { WindowService } from "../window";

@Component({
  selector: "main-menu",
  templateUrl: "./main-menu.component.html",
  styleUrls: ["./main-menu.component.less"],
})
export class MainMenuComponent implements OnInit {
  constructor(
    public router: Router,
    public ms: ModalService,
    private window: WindowService
  ) {}

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      this.window.scrollTo(0, 0);
    });
  }

  /**
   * Переход на другую страницу
   */
  go(target: string) {
    this.router.navigate([target]);
  }
}
