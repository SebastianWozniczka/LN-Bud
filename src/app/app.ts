import { Component, OnInit, signal, Renderer2, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgClass } from "../../node_modules/@angular/common/types/_common_module-chunk";
import { CommonModule } from '@angular/common';

@Component({

  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [CommonModule]
})

export class App implements OnInit {
[x: string]: any;
  renderer: Renderer2;
  myButton: ElementRef;
  showMore = true;

  constructor(renderer: Renderer2, myButton: ElementRef) {
    this.renderer = renderer;
    this.myButton = myButton;
  }

 clickHandler() {
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('tynkowaniu, posadzkarstwu, tapetowaniu, i oblicowaniu scian.');

    div.style.color = 'black';

    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.myButton.nativeElement, div);
  }

  ngOnInit(): void {

  }
openDetails() {
throw new Error('Method not implemented.');
}
  protected readonly title = signal('L-Bud');

  document: any;
str: String = ""
opacity: any = 0;

isSelect = true;

public show: boolean = false;

control=new FormControl()
 myFunction() {
   if(this.isSelect){
    var image  = document.getElementsByClassName("names")[0];

    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "Proszę wpisać tutaj");
    var s = x.getAttribute("value");
    console.log(s);
    x.style.width = "200px";
    x.className = "images";
    image.appendChild(x);
    this.isSelect = false;
   }
}
  mouseEnter(div : string){

      this.str = 'Szkolenia\nReferencje\n';
      console.log("mouse enter : " + div);

      var a = document.createElement('a');
      var linkText = document.createTextNode("Szkolenia");
      a.appendChild(linkText);
      a.title = "my title text";
      a.href = "http://example.com";

      a.style.display != "none" ? "none" : "block";

      this.opacity = 100;
   }

   mouseLeave(div : string){

     var a = document.createElement('a');
     this.str = "";
     console.log('mouse leave :' + div);
     this.opacity = 0;
   }
}
