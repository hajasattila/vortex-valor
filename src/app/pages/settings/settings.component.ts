import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const arrowRight = document.querySelector<HTMLElement>('.arrow-right');
    const arrowLeft = document.querySelector<HTMLElement>('.arrow-left');
    const hexWrapperEl = document.querySelector<HTMLElement>('.hex-row-wrapper')!;
    const centerLabel = document.querySelector<HTMLElement>('h1');

    if (!arrowRight || !arrowLeft || !hexWrapperEl || !centerLabel) {
      return;
    }

    const typesOrder = ['search', 'music', 'controls', 'desktop', 'games', 'profile'];
    const hexList = typesOrder.map(type =>
      document.querySelector<HTMLElement>(`.hexagon[data-type="${type}"]`)!
    );

    hexList.forEach(hex => {
      hex.style.transformOrigin = 'center center';
    });

    let menuAngle = 0;
    let selectedIndex = 0;
    let debounce: any;
    const delay = 50;

    const updateSelection = (): void => {
      hexList.forEach((hex, idx) => {
        hex.style.filter = idx === selectedIndex
          ? 'drop-shadow(0 0 0 rgba(0,0,0,0)) drop-shadow(0 0 4px #06b6d4)'
          : 'none';
      });
      centerLabel.textContent = typesOrder[selectedIndex].toUpperCase();
    };
    updateSelection();

    function rotateMenu(direction: number): void {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        menuAngle += direction * 60;
        hexWrapperEl.style.transform = `rotate(${menuAngle}deg)`;
        hexList.forEach(hex => {
          hex.style.transform = `rotate(${-menuAngle}deg)`;
        });
        selectedIndex = (selectedIndex + direction + hexList.length) % hexList.length;
        updateSelection();
      }, delay);
    }

    function rotateToIndex(targetIndex: number): void {
      clearTimeout(debounce);
      debounce = setTimeout(() => {
        let diff = targetIndex - selectedIndex;
        if (diff > 3) diff -= hexList.length;
        if (diff < -3) diff += hexList.length;
        menuAngle += diff * 60;
        hexWrapperEl.style.transform = `rotate(${menuAngle}deg)`;
        hexList.forEach(hex => {
          hex.style.transform = `rotate(${-menuAngle}deg)`;
        });
        selectedIndex = targetIndex;
        updateSelection();
      }, delay);
    }

    arrowLeft.style.cursor = 'pointer';
    arrowRight.style.cursor = 'pointer';
    arrowLeft.addEventListener('click', () => rotateMenu(-1));
    arrowRight.addEventListener('click', () => rotateMenu(1));

    document.body.addEventListener('keydown', e => {
      if (e.key === 'ArrowLeft') rotateMenu(-1);
      if (e.key === 'ArrowRight') rotateMenu(1);
    });

    // Add click listeners on each hexagon icon for direct selection
    hexList.forEach((hex, idx) => {
      hex.style.cursor = 'pointer';
      hex.addEventListener('click', () => {
        if (idx !== selectedIndex) {
          rotateToIndex(idx);
        }
      });
    });

    // Swipe gesture handling
    let touchStartX = 0;
    let touchEndX = 0;

    function handleGesture() {
      const swipeThreshold = 50;

      if (touchEndX + swipeThreshold < touchStartX) {
        rotateMenu(1);
      } else if (touchEndX - swipeThreshold > touchStartX) {
        rotateMenu(-1);
      }
    }

    document.body.addEventListener('touchstart', (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    });

    document.body.addEventListener('touchend', (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleGesture();
    });
  }
}
