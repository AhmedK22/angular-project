import { Component, OnInit } from '@angular/core';
import { lastValueFrom } from 'rxjs';

declare var $: any;

@Component({
  selector: 'app-whoweare',
  templateUrl: './whoweare.component.html',
  styleUrls: ['./whoweare.component.scss']
})
export class WhoweareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let underline=$('.myunderline').offset().left;
console.log(underline);
                let style={
                  "display": "flex",
                  "margin-left":underline,



                }
               $('.mysecondline').css(style);

  }
  ngAfterViewInit():void{
    $('.loutfy').click(function(){
      if( $('.loutfybio').css("display")=="none"){
     $('.loutfybio').css("display","flex");
      $('.ismailbio').css("display","none");
      $('.youssefbio').css("display","none");
      $('.mohamedbio').css("display","none");
      $('.yasseenbio').css("display","none");
      $('.rawyabio').css("display","none");
    }
      else if($('.loutfybio').css("display")=="flex"){
        $('.loutfybio').css("display","none");
      }
      })
    $('.ismail').click(function(){
        if( $('.ismailbio').css("display")=="none"){
        $('.ismailbio').css("display","flex");
        $('.loutfybio').css("display","none");


      $('.youssefbio').css("display","none");
      $('.mohamedbio').css("display","none");
      $('.yasseenbio').css("display","none");
      $('.rawyabio').css("display","none");
      }
        else if($('.ismailbio').css("display")=="flex"){
          $('.ismailbio').css("display","none");
        }
        })
    $('.youssef').click(function(){
          if( $('.youssefbio').css("display")=="none"){
          $('.youssefbio').css("display","flex");
          $('.loutfybio').css("display","none");
      $('.ismailbio').css("display","none");

      $('.mohamedbio').css("display","none");
      $('.yasseenbio').css("display","none");
      $('.rawyabio').css("display","none");
        }
          else if($('.youssefbio').css("display")=="flex"){
            $('.youssefbio').css("display","none");
          }
          })
    $('.mohamed').click(function(){
            if( $('.mohamedbio').css("display")=="none"){
            $('.mohamedbio').css("display","flex");
            $('.loutfybio').css("display","none");
      $('.ismailbio').css("display","none");
      $('.youssefbio').css("display","none");

      $('.yasseenbio').css("display","none");
      $('.rawyabio').css("display","none");
          }
            else if($('.mohamedbio').css("display")=="flex"){
              $('.mohamedbio').css("display","none");
            }
            })
    $('.yasseen').click(function(){
              if( $('.yasseenbio').css("display")=="none"){
              $('.yasseenbio').css("display","flex");
              $('.loutfybio').css("display","none");
      $('.ismailbio').css("display","none");
      $('.youssefbio').css("display","none");
      $('.mohamedbio').css("display","none");

      $('.rawyabio').css("display","none");
            }
              else if($('.yasseenbio').css("display")=="flex"){
                $('.yasseenbio').css("display","none");
              }
              })
    $('.rawya').click(function(){
                if( $('.rawyabio').css("display")=="none"){
                $('.rawyabio').css("display","flex");
                $('.loutfybio').css("display","none");
      $('.ismailbio').css("display","none");
      $('.youssefbio').css("display","none");
      $('.mohamedbio').css("display","none");
      $('.yasseenbio').css("display","none");

              }
                else if($('.rawyabio').css("display")=="flex"){
                  $('.rawyabio').css("display","none");
                }
                })




$(document).ready(function(){

  let underline=$('.myunderline').offset().left;
  //  console.log(underline)
    let style={
      "display": "flex",
      "margin-left":underline,
      "width":"9%"
     }
   $('.mysecondline').css(style);

})





$('.btnofselection').click(function(){

  if($('#selection').val()=="1"){
    let wanted=$("#1").offset().top;

    $('html,body').animate({scrollTop:`${wanted}`},1000)
  }


    else if($('#selection').val()=="2"){
      let wanted=$("#2").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="3"){
      let wanted=$("#3").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="4"){
      let wanted=$("#4").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="5"){
      let wanted=$("#5").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="6"){
      let wanted=$("#6").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="7"){
      let wanted=$("#7").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="8"){
      let wanted=$("#8").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="9"){
      let wanted=$("#9").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="10"){
      let wanted=$("#10").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="11"){
      let wanted=$("#11").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="12"){
      let wanted=$("#12").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="13"){
      let wanted=$("#13").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="14"){
      let wanted=$("#14").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="15"){
      let wanted=$("#15").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="16"){
      let wanted=$("#16").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="17"){
      let wanted=$("#17").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="18"){
      let wanted=$("#18").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="19"){
      let wanted=$("#19").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="20"){
      let wanted=$("#20").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="21"){
      let wanted=$("#21").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="22"){
      let wanted=$("#22").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="23"){
      let wanted=$("#23").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="24"){
      let wanted=$("#24").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="25"){
      let wanted=$("#25").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }
    else if($('#selection').val()=="26"){
      let wanted=$("#26").offset().top;
      console.log(wanted);
      $('html,body').animate({scrollTop:`${wanted}`},1000)
    }


})





  }


}

