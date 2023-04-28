import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-our-approach',
  templateUrl: './our-approach.component.html',
  styleUrls: ['./our-approach.component.scss']
})
export class OurApproachComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){


$(document).ready(function(){

  let underline=$('.myunderline2').offset().left;
  //  console.log(underline)
    let style={
      "display": "flex",
      "margin-left":underline,
      "width":"9%"
     }
   $('.mysecondline').css(style);

})




let oldwindow=$(window).width()
  if(oldwindow<=950)
  {
    let style={
      display:"inline",
      position:"fixed"
    }

    $('.mynavv').click(function(){
      $('.mysmallsize').css(style);
    })
    oldwindow=$(window).width()


  }

   if(oldwindow>1000) {


      $('.mysmallsize').css( "display","none");
      oldwindow=$(window).width()





      }
      $('.myexit').click(function(){
        $('.mysmallsize').css( "display","none");
      })

}
}
