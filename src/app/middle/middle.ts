import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit, signal, Renderer2, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-middle',
  standalone: true,          // if using standalone components
  imports: [CommonModule],    // ngClass/ngIf/ngFor...
  templateUrl: './middle.html',
  styleUrls: ['./middle.css'],// note plural
})
export class Middle {
  showMore = true;

  toggleShowMore(): void {
    this.showMore = !this.showMore;
  }
}
