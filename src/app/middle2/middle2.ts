import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-middle2',
  imports: [],
  templateUrl: './middle2.html',
  styleUrl: './middle2.css',
})
export class Middle2 {

active = true;


opacity: any = 0;

  showMore = true;



  toggleShowMore(): void {
    this.showMore = !this.showMore;
  }


myAnim1() {


     console.log("Animacja 1");


      var a = document.createElement('a');
      var linkText = document.createTextNode("Szkolenia");
      a.appendChild(linkText);
      a.title = "my title text";
      a.href = "http://example.com";

      a.style.display != "none" ? "none" : "block";

      this.opacity = 100;

}




}
