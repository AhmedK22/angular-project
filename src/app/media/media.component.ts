
import { Component, OnInit } from '@angular/core';
declare var $:any

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit()
  {
    $(document).ready(function(){

      let underline=$('.myunderline6').offset().left;
      //  console.log(underline)
        let style={
          "display": "flex",
          "margin-left":underline,
          "width":"5%"
         }
       $('.mysecondline').css(style);

    })
  }


}
