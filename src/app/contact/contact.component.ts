

import { Component, OnInit } from '@angular/core';
declare var $:any
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit()
  {
    $(document).ready(function(){

      let underline=$('.myunderline7').offset().left;
      //  console.log(underline)
        let style={
          "display": "flex",
          "margin-left":underline,
         
         }
       $('.mysecondline').css(style);

    })
  }

}
