

import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-our',
  templateUrl: './our.component.html',
  styleUrls: ['./our.component.scss']
})
export class OurComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit()
  {
    $(document).ready(function(){

      let underline=$('.myunderline5').offset().left;
      //  console.log(underline)
        let style={
          "display": "flex",
          "margin-left":underline,
          "width":"12%"
         }
       $('.mysecondline').css(style);

    })
  }


}


