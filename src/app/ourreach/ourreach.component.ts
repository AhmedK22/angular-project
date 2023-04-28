import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-ourreach',
  templateUrl: './ourreach.component.html',
  styleUrls: ['./ourreach.component.scss']
})
export class OurreachComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(){
    $('.imagesdofiframe').click(function(){
      $('.iframeclick').css('display',"flex")
      $('.iframeitself').attr('src',"https://player.vimeo.com/video/370344655?byline=0&amp;portrait=0&amp;autoplay=1 ")
    })
    $('.myexit').click(function(){
      $('.iframeclick').css('display',"none")
      $('.iframeitself').attr('src'," ")
    })

  }

}
