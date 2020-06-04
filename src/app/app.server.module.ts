import { NgModule } from "@angular/core";
import { ServerModule } from "@angular/platform-server";

import { AppModule } from "./app.module";
import { AppComponent } from "./app.component";
import { WindowService } from "./window";
import { ServerWindowService } from "./server-window";

@NgModule({
  imports: [AppModule, ServerModule],
  providers: [
    {
      provide: WindowService,
      useClass: ServerWindowService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppServerModule {}
