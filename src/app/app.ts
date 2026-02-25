import { Component, OnInit, signal, Renderer2, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({

  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})





export class App implements OnInit {
  renderer: Renderer2;
  myButton: ElementRef;

  constructor(renderer: Renderer2, myButton: ElementRef) {
    this.renderer = renderer;
    this.myButton = myButton;
  }

 clickHandler() {
    const div = this.renderer.createElement('div');
    const text = this.renderer.createText('tynkowaniu, posadzkarstwu, tapetowaniu, i oblicowaniu scian.');
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



//str: String = "First ordered list item\n2. Another item\n * Unordered sub-list.\n"
str: String = ""
opacity: any = 0;

isSelect = true;


control=new FormControl()





 myFunction() {


   if(this.isSelect){


    var image  = document.getElementsByClassName("names")[0];

    var x = document.createElement("INPUT");
    x.setAttribute("type", "text");
    x.setAttribute("value", "Proszę wpisać tutaj");
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


      //document.getElementsByClassName('firm')[0].innerHTML += "Szkolenia\nReferencje";

      //document.getElementsByClassName('firm')[0].appendChild(a);
     // document.body.appendChild(a);

   }



   mouseLeave(div : string){

      var a = document.createElement('a');
     // document.getElementsByClassName("firm")[0].removeAttribute("class");
    // document.getElementsByClassName('firm')[0].removeChild(a)
    //this.str.replace("\n", "<br>");
    this.str = "";
     console.log('mouse leave :' + div);

      this.opacity = 0;

   }

}
