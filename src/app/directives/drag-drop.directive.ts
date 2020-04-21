import { Directive, HostListener } from "@angular/core";

@Directive({
  selector: "[appDragDrop]"
})
export class DragDropDirective {

  constructor() { }

  @HostListener("dragover", ["$event"]) onDragOver(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(event);
  }

  @HostListener("drop", ["$event"]) onDrop(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log(event);
  }

}
