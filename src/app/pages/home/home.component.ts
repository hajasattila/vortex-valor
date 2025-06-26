import {
  AfterViewInit,
  Component,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit {

  @ViewChild('brand', {static: true}) brandRef!: ElementRef;
  @ViewChild('logo', {static: true}) logoRef!: ElementRef;

  private ex = 15;

  ngAfterViewInit(): void {
    const brandElement = this.brandRef.nativeElement as HTMLElement;
    const startButton = brandElement.querySelector('a') as HTMLElement;
    const logoElement = this.logoRef.nativeElement as HTMLElement;

    if (!startButton) return;
    this.swing(logoElement);

    document.addEventListener('keydown', (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
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
    console.log('Kattintva');
  }

  openSettings(): void {
    console.log('Settings modal megnyitása (később implementálva)');
  }
}
