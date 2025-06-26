import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild,
  ChangeDetectorRef, OnInit
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {

  @ViewChild('brand', { static: true }) brandRef!: ElementRef;
  @ViewChild('logo', { static: true }) logoRef!: ElementRef;

  private ex = 15;

  showSpiral = false;
  showMenu = false;

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const cachedTimestamp = localStorage.getItem('vv_startClicked');
    const now = Date.now();

    if (cachedTimestamp && now - Number(cachedTimestamp) < 24 * 60 * 60 * 1000) {
      setTimeout(() => {
        this.showMenu = true;
        this.cdr.detectChanges();
      });
      return;
    }

    if (this.logoRef?.nativeElement) {
      this.swing(this.logoRef.nativeElement as HTMLElement);
    }

    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter' && !this.showMenu) {
        this.onStartClick();
      }
    });
  }

  private swing(element: HTMLElement): void {
    let t = 0;

    const update = () => {
      t += 0.005;
      const rotateX = Math.sin(t) * this.ex;
      const rotateY = Math.cos(t) * this.ex;

      element.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
      requestAnimationFrame(update);
    };

    update();
  }

  onStartClick(): void {
    localStorage.setItem('vv_startClicked', Date.now().toString());
    this.showSpiral = true;

    setTimeout(() => {
      this.showMenu = true;
      this.showSpiral = false;
    }, 1000);
  }

  openSettings(): void {
    console.log('Settings modal megnyitása (később implementálva)');
  }

  protected readonly Math = Math;
}
