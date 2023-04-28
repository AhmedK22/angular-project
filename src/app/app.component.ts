import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontproject';
  ngAfterViewInit(){

$(window).scroll(function(){
let x=$(window).scrollTop();


 if( x>500){
$('.backtoup').css('display','block')


 }else {
  $('.backtoup').css('display','none')

 }


  })


  $('.backtoup').click(function(){
    $('html,body').animate({scrollTop:'0'},1000)
  })

  $(window).ready(function(){
    let oldwindow=$(window).width()
    console.log(oldwindow)

    if(oldwindow<=1000)
    {

      $('.menu').css('display','block')


    }


  })


  $(window).resize(function(){
    let oldwindow=$(window).width()

    if(oldwindow<=950)
    {

      $('.menu').css('display','block')




    }


  })
  $('.menu').click(function(){

    let style={
      display:"inline",
      position:"fixed"
    }
    if($('.mysmallsize').css('display')=="none"){
      $('.mysmallsize').css(style);
    }
    else {
      $('.mysmallsize').css('display','none');

    }

  })


  $(window).resize(function(){
   let oldwindow=$(window).width()
    if(oldwindow>1000) {



      $('.mysmallsize').css( "display","none");
      $('.menu').css('display','none')

  }


  })
  $('.myexit').click(function(){
    $('.mysmallsize').css( "display","none");
  })






}}
