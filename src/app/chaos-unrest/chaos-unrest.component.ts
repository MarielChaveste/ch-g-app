import { Component, Input, AfterViewInit, OnChanges, SimpleChanges, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-chaos-unrest',
  standalone: true,
  imports: [],
  templateUrl: './chaos-unrest.component.html',
  styleUrls: ['./chaos-unrest.component.css']
})
export class ChaosUnrestComponent implements AfterViewInit, OnChanges {
  private canvasA: any; // Holds the p5 instance
  isBrowser: boolean; // Check if the platform is a browser
  @Input() inputNumber!: number; // Input property to receive the number of sides

  // Initialize properties
  sw = 4;
  drawingColor = '#1c5b87';
  scale = 1;
  steps = 10000;
  infoClickedLearn = false;
  infoClickedControls = false;
  x0 = 0;
  y0 = 0;
  numPoints = 5000;
  frameCount = 0;
  points: any[] = [];
  factor = 0.5;
  vertices: any[] = [];
  current: any = null;
  speed = 60;
  radius = 300;
  centerX = 0;
  centerY = 0;
  sides = 3;
  isDrawing = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  async ngAfterViewInit() {
    if (this.isBrowser) {
      // Import p5 only in the browser
      const p5 = (await import('p5')).default;
      this.initP5(p5);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['inputNumber'] && !changes['inputNumber'].isFirstChange()) {
      this.sides = this.inputNumber;
      this.resetAndStartDrawing();
    }
  }

  resetAndStartDrawing() {
    // Reset properties to restart the drawing
    this.points = [];
    this.vertices = [];
    this.current = null;
    this.isDrawing = false;
    this.frameCount = 0;

    if (this.canvasA) {
      this.canvasA.remove(); // Remove existing p5 instance if it exists
    }
    if (this.isBrowser) {
      import('p5').then((p5Module) => {
        this.initP5(p5Module.default);
      });
    }
  }

  initP5(p5: any) {
    const sketch = (s: any) => {
      s.setup = () => {
        const canvasWidth = s.windowHeight;
        const canvasHeight = s.windowHeight;
        this.radius = s.windowHeight * 0.48;
        const canvas2 = s.createCanvas(canvasWidth, canvasHeight);
        canvas2.parent('canvas-container');

        s.background(0);
        s.strokeWeight(this.sw);

        this.centerX = canvasWidth / 2;
        this.centerY = canvasHeight / 2;
        const TWO_PI = Math.PI * 2;

        for (let i = 0; i < this.sides; i++) {
          let angle = TWO_PI * i / this.sides;
          let x = this.centerX + this.radius * Math.cos(angle);
          let y = this.centerY + this.radius * Math.sin(angle);
          this.vertices.push(s.createVector(x, y));
        }

        s.stroke(255);
        s.strokeWeight(2);
        s.background(0);

        for (let pt of this.vertices) {
          s.fill(199, 115, 239, 225);
          s.ellipse(pt.x, pt.y, 20 * s.windowWidth / 2500, 20 * s.windowWidth / 2500);
        }
      };

      s.draw = () => {
        if (this.isDrawing && this.frameCount < 400) {
          for (let i = 0; i < 100; i++) {
            let next = s.random(this.vertices);

            // Initialize `current` if it's null
            if (!this.current) {
              this.current = s.createVector(this.centerX, this.centerY);
            }

            this.current.x = s.lerp(this.current.x, next.x, this.factor);
            this.current.y = s.lerp(this.current.y, next.y, this.factor);

            if (this.points.length >= 1) {
              let p0 = this.points[0];
              s.fill(199, 115, 239);
              s.ellipse(p0.x, p0.y, 20 * s.windowWidth / 2500, 20 * s.windowWidth / 2500);
            }

            s.strokeWeight(0.00001);
            s.fill(225, 225, 225, 250);
            s.ellipse(this.current.x, this.current.y, s.windowWidth / 2000, s.windowWidth / 2000);
            this.points.push(s.createVector(this.current.x, this.current.y));
          }
          this.frameCount++;
        }

        s.mousePressed = () => {
          if (s.mouseButton === s.LEFT && !(s.mouseX > s.width || s.mouseY > s.height || s.mouseX < 0 || s.mouseY < 0)) {
            this.isDrawing = true;
            this.frameCount = 0;
            this.points = [];
            this.current = s.createVector(s.mouseX, s.mouseY);
            s.background(0);
            s.ellipse(s.mouseX, s.mouseY, 20 * s.windowWidth / 2500);

            for (let pt of this.vertices) {
              s.fill(199, 115, 239, 225);
              s.ellipse(pt.x, pt.y, 20 * s.windowWidth / 2500, 20 * s.windowWidth / 2500);
            }
          }
        };
      };
    };

    // Create p5 instance
    this.canvasA = new p5(sketch);
  }
}
