import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./components/app/app.component";
import { MenuComponent } from "./components/menu/menu.component";
import { DropzoneComponent } from "./components/dropzone/dropzone.component";
import { CanvasComponent } from "./components/canvas/canvas.component";
import { DragDropDirective } from "./directives/drag-drop.directive";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DropzoneComponent,
    CanvasComponent,
    DragDropDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
