import { Component, OnInit } from '@angular/core';
import {NgIf} from '@angular/common';
import {CommonModule} from '@angular/common';



@Component({
  selector: 'app-search-invalid',
  imports: [NgIf,CommonModule],
  templateUrl: './search-invalid.html',
  styleUrls: ['./search-invalid.css'],
})
export class SearchInvalid implements OnInit {


 value: number = 0;
userLoggedIn = true;
 newItem: string = "";

 image  = document.getElementsByClassName("names")[0] as HTMLElement;

 foodName = (document.getElementById("input1") as HTMLInputElement).value

valueOfForm = this.foodName;



private tempPrefixList = ['Mr', 'Mrs', 'FM.', 'Sir','Pan','Pani','Dr','Prof','Mgr','Inż','Kpt','Por','Ppor','St. Sierż.','Sierż.','St. Chor. Sztab.','Chor. Sztab.','Chor.','Plut.','St. Plut.','Plut. Sztab.','St. Plut. Sztab.','St. Sierżant Sztabowy', 'Sierżant Sztabowy', 'Sierżant', 'Starszy Sierżant', 'Starszy Sierżant Sztabowy', 'Młodszy Chorąży', 'Chorąży', 'Chorąży Sztabowy', 'Starszy Chorąży', 'Starszy Chorąży Sztabowy', 'Młodszy Chorąży Wojsk Lądowych', 'Chorąży Wojsk Lądowych', 'Chorąży Sztabowy Wojsk Lądowych', 'Starszy Chorąży Wojsk Lądowych', 'Starszy Chorąży Sztabowy Wojsk Lądowych'];

  constructor() {
    this.logNameParts(this.valueOfForm);
    this.userLoggedIn = true;
  }
  ngOnInit(): void {
    this.userLoggedIn = true;
  }

  private logNameParts(fullName: string): void {
    const escapedPrefixes = this.tempPrefixList.map(prefix =>
      prefix.replace(/[.*+?^${}()|[\\]\\]/g, '\\$&')
    );

    const prefixSearchExp = new RegExp(`\\b(?:${escapedPrefixes.join('|')})\\b`, 'gi');

    if (!fullName || !prefixSearchExp.test(fullName)) {
      return;
    }

    console.log('Caught');

    const parts = fullName.split(' ').filter(Boolean);
    const prefix = parts[0] ?? '';
    const firstName = parts[1] ?? '';

    console.log('Prefix: ' + prefix);
    console.log('First name: ' + firstName);
  }

changeView(){
  this.value = 1;
}

changeView2(){
  this.value = 0;
}

changeView3(){
  this.value = 2;
}

}

