import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { InventoryService } from 'src/app/inventory.service';
import { Task } from '../task';

@Component({
  selector: 'app-shakedrizzle',
  templateUrl: './shakedrizzle.component.html',
  styleUrls: ['./shakedrizzle.component.css']
})
export class ShakedrizzleComponent extends Task implements OnInit {
  @ViewChild('crop', {static: false})
  canvas!: ElementRef;

  @ViewChild('baseImage', {static: false})
  baseImage!: ElementRef;

  startX: number = 0;
  startY: number = 0;

  endX: number = 0;
  endY: number = 0;

  shouldDrawCrop = false;

  public context?: CanvasRenderingContext2D;

  constructor(protected readonly inventoryService: InventoryService) {
    super(inventoryService);
   }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.canvas.nativeElement.width = this.canvas.nativeElement.offsetWidth;
    this.canvas.nativeElement.height = this.canvas.nativeElement.offsetHeight;
    this.context = this.canvas.nativeElement.getContext('2d')!;
    requestAnimationFrame(this.drawCropRect);
  }

  mousedown(e: MouseEvent) {
    console.log('mousedown');
    const rect = this.canvas?.nativeElement.getBoundingClientRect();
    this.startX = e.clientX - rect.left;
    this.startY = e.clientY - rect.top;
    this.endX = this.startX;
    this.endY = this.startY;
    this.shouldDrawCrop = true;
    requestAnimationFrame(() => this.drawCropRect())
  }

  mouseup(e: MouseEvent) {
    console.log('mouseup');
    this.shouldDrawCrop = false;
  }

  mousemove(e: MouseEvent) {
    if (this.shouldDrawCrop) {
      const rect = this.canvas.nativeElement.getBoundingClientRect();

      this.endX = e.clientX - rect.left;
      this.endY = e.clientY - rect.top;
      requestAnimationFrame(() => this.drawCropRect())
    }
    console.log(e);
  }

  drawCropRect() {
    if (this.context) {
      this.context.clearRect(0, 0, this.canvas!.nativeElement.width, this.canvas!.nativeElement.height);
      this.context.beginPath();
      this.context.drawImage(this.baseImage.nativeElement, 0, 0);
      this.context.rect(this.startX, this.startY, this.endX - this.startX, this.endY - this.startY);
      this.context.strokeStyle = 'black';
      this.context.stroke();
    }
  }

}
