import { Component, Input, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { switchMap, takeUntil, pairwise } from 'rxjs/operators';
import { Sheet } from '../../../models/Sheet';
import { SheetService } from './../sheet.service'
import { PlayerService } from 'app/player.service';
import { Game } from '../../../models/game';


@Component({
  selector: 'app-sheet',
  templateUrl: './sheet.component.html',
  styleUrls: ['./sheet.component.css'],
  providers: [SheetService, PlayerService]
})

export class SheetComponent implements AfterViewInit {
    title = "Draw/describe this thing!"
  
  @ViewChild('canvas') public canvas: ElementRef;
  @Input() public width = 400;
  @Input() public height = 400;
  
  private context: CanvasRenderingContext2D;
  public turn: number /* = currentPlayer.currentGame.turn; */
  public currentSheet: Sheet /* = currentPlayer.sheets[turn]; */
  public currentColor;
  
  private changeColor(hexcode: string) {
    this.currentColor = hexcode;
    console.log(this.currentColor)
  }

  constructor() { }
  
  public ngAfterViewInit() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    this.context = canvasEl.getContext('2d');
    canvasEl.width = this.width;
    canvasEl.height = this.height;
    this.context.strokeStyle = '000';
    // set some default properties about the line
    this.context.lineWidth = 3;
    this.context.lineCap = 'round';
    this.captureEvents(canvasEl);
  }
  //!!!! THIS NEEDS TO BE UPDATED TO PUSH THE IMG TO THE PLAYER AND PROB ROUTE TO NEXT PAGE OR SOMETHING
  private saveDrawing() {
    const canvasEl: HTMLCanvasElement = this.canvas.nativeElement;
    let drawingUrl = canvasEl.toDataURL();
    this.currentSheet.drawSomething(drawingUrl);
    console.log(drawingUrl);
  }
  
  private captureEvents(canvasEl: HTMLCanvasElement) {
    // this will capture all mousedown events from the canvas element
    fromEvent(canvasEl, 'mousedown')
    .pipe(
      switchMap((e) => {
        this.context.strokeStyle = this.currentColor;
        if (this.currentColor === '#FFFFFF') {
          this.context.lineWidth = 15;
          console.log('bigger');
        } else {
          this.context.lineWidth = 3;
          console.log('smaller');
        }
        // after a mouse down, we'll record all mouse moves
          return fromEvent(canvasEl, 'mousemove')
            .pipe(
              // we'll stop (and unsubscribe) once the user releases the mouse
              // this will trigger a 'mouseup' event    
              takeUntil(fromEvent(canvasEl, 'mouseup')),
              // we'll also stop (and unsubscribe) once the mouse leaves the canvas (mouseleave event)
              takeUntil(fromEvent(canvasEl, 'mouseleave')),
              // pairwise lets us get the previous value to draw a line from
              // the previous point to the current point    
              pairwise()
            )
        })
      )
      .subscribe((res: [MouseEvent, MouseEvent]) => {
        const rect = canvasEl.getBoundingClientRect();
        // previous and current position with the offset
        const prevPos = {
          x: res[0].clientX - rect.left,
          y: res[0].clientY - rect.top
        };
  
        const currentPos = {
          x: res[1].clientX - rect.left,
          y: res[1].clientY - rect.top
        };
        // this method we'll implement soon to do the actual drawing
        this.drawOnCanvas(prevPos, currentPos);
      });
  }

  private drawOnCanvas(
    prevPos: { x: number, y: number }, 
    currentPos: { x: number, y: number }
  ) {
    // incase the context is not set
    if (!this.context) { return; }
    // start our drawing path
    this.context.beginPath();
    // we're drawing lines so we need a previous position
    if (prevPos) {
      // sets the start point
      this.context.moveTo(prevPos.x, prevPos.y); // from
      // draws a line from the start pos until the current position
      this.context.lineTo(currentPos.x, currentPos.y);
      // strokes the current path with the styles we set earlier
      this.context.stroke();
    }
  }
}

