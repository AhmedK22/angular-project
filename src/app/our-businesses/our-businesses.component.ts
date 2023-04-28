import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-our-businesses',
  templateUrl: './our-businesses.component.html',
  styleUrls: ['./our-businesses.component.scss']
})
export class OurBusinessesComponent implements OnInit {

  constructor() { }
  arrofgreen=[ "METRO-MARKETS","KHEIR-ZAMAN","FRESH-FOOT-MARKET","MINI-METRO","IMPIRIAL-TOPACO","SUNSHINE","HAYAT","UPS","LABANITA","LOREAL","RED-BULL","YES!JUICE","BONJORNO-CAFE","FERRERO-ROCHER","BRITCH-AMERICAN-TOBBACO","INFORT","ROAM-WORKS"]

  ngOnInit(): void {
  }
  ngAfterViewInit(){

$(document).ready(function(){

  let underline=$('.myunderline3').offset().left;
  //  console.log(underline)
    let style={
      "display": "flex",
      "margin-left":underline,
      "width":"9%"
     }
   $('.mysecondline').css(style);

})


    //1
    $('.mychandecolor').click(function(){
      if( $('.desc1').css("display")=="none"){
     $('.desc1').css("display","flex");
     $('.desc2').css("display","none");
      $('.desc3').css("display","none");
      $('.desc4').css("display","none");
      $('.desc5').css("display","none");
      $('.desc6').css("display","none");
      //beforedepartment
       $('.mythirdsection').css("display","flex");
       $('.mythirdsection').css("align-items","center");
       $('.mythirdsection2').css("display","none");
       $('.mythirdsection3').css("display","none");
       $('.mythirdsection4').css("display","none");
       $('.mythirdsection5').css("display","none");
       $('.mythirdsection6').css("display","none");
       //lastdepartment
       $('.bluepart').css("display","block");
       $('.yellowpart').css("display","none");
       $('.greenpart').css("display","none");
       $('.redpart').css("display","none");
       $('.graypart').css("display","none");
       $('.darkgreenpart').css("display","none");
       //titles
       $('.bluetitle').css("display","flex");
       $('.yellowtitle').css("display","none");
       $('.greentitle').css("display","none");
       $('.redtitle').css("display","none");
       $('.graytitle').css("display","none");
       $('.darkgreentitle').css("display","none");
    }

      })
       //2
    $('.mychandecolor2').click(function(){
      if( $('.desc2').css("display")=="none"){
     $('.desc2').css("display","flex");
      $('.desc1').css("display","none");
      $('.desc3').css("display","none");
      $('.desc4').css("display","none");
      $('.desc5').css("display","none");
      $('.desc6').css("display","none");

       //beforedepartment
       $('.mythirdsection2').css("display","flex");
       $('.mythirdsection2').css("align-items","center");
       $('.mythirdsection').css("display","none");
       $('.mythirdsection3').css("display","none");
       $('.mythirdsection4').css("display","none");
       $('.mythirdsection5').css("display","none");
       $('.mythirdsection6').css("display","none");
        //lastdepartment
        $('.bluepart').css("display","none");
        $('.yellowpart').css("display","block");
        $('.greenpart').css("display","none");
        $('.redpart').css("display","none");
        $('.graypart').css("display","none");
        $('.darkgreenpart').css("display","none");
            //titles
       $('.bluetitle').css("display","none");
       $('.yellowtitle').css("display","inline");
       $('.greentitle').css("display","none");
       $('.redtitle').css("display","none");
       $('.graytitle').css("display","none");
       $('.darkgreentitle').css("display","none");
    }

      })

       //3
    $('.mychandecolor3').click(function(){
      if( $('.desc3').css("display")=="none"){
     $('.desc3').css("display","flex");
      $('.desc2').css("display","none");
      $('.desc1').css("display","none");
      $('.desc4').css("display","none");
      $('.desc5').css("display","none");
      $('.desc6').css("display","none");
       //beforedepartment
       $('.mythirdsection3').css("display","flex");
       $('.mythirdsection3').css("align-items","center");
       $('.mythirdsection2').css("display","none");
       $('.mythirdsection').css("display","none");
       $('.mythirdsection4').css("display","none");
       $('.mythirdsection5').css("display","none");
       $('.mythirdsection6').css("display","none");
        //lastdepartment
        $('.bluepart').css("display","none");
        $('.yellowpart').css("display","none");
        $('.greenpart').css("display","block");
        $('.redpart').css("display","none");
        $('.graypart').css("display","none");
        $('.darkgreenpart').css("display","none");
    }

      })

       //4
    $('.mychandecolor4').click(function(){
      if( $('.desc4').css("display")=="none"){
     $('.desc4').css("display","flex");
      $('.desc2').css("display","none");
      $('.desc3').css("display","none");
      $('.desc1').css("display","none");
      $('.desc5').css("display","none");
      $('.desc6').css("display","none");
       //beforedepartment
       $('.mythirdsection4').css("display","flex");
       $('.mythirdsection4').css("align-items","center");
       $('.mythirdsection2').css("display","none");
       $('.mythirdsection3').css("display","none");
       $('.mythirdsection').css("display","none");
       $('.mythirdsection5').css("display","none");
       $('.mythirdsection6').css("display","none");
        //lastdepartment
        $('.bluepart').css("display","none");
        $('.yellowpart').css("display","none");
        $('.greenpart').css("display","none");
        $('.redpart').css("display","block");
        $('.graypart').css("display","none");
        $('.darkgreenpart').css("display","none");
    }

      })

       //5
    $('.mychandecolor5').click(function(){
      if( $('.desc5').css("display")=="none"){
     $('.desc5').css("display","flex");
      $('.desc2').css("display","none");
      $('.desc3').css("display","none");
      $('.desc4').css("display","none");
      $('.desc1').css("display","none");
      $('.desc6').css("display","none");
       //beforedepartment
       $('.mythirdsection5').css("display","flex");
       $('.mythirdsection5').css("align-items","center");
       $('.mythirdsection2').css("display","none");
       $('.mythirdsection3').css("display","none");
       $('.mythirdsection4').css("display","none");
       $('.mythirdsection').css("display","none");
       $('.mythirdsection6').css("display","none");
        //lastdepartment
        $('.bluepart').css("display","none");
        $('.yellowpart').css("display","none");
        $('.greenpart').css("display","none");
        $('.redpart').css("display","none");
        $('.graypart').css("display","block");
        $('.darkgreenpart').css("display","none");
    }

      })

       //6
    $('.mychandecolor6').click(function(){
      if( $('.desc6').css("display")=="none"){
     $('.desc6').css("display","flex");
      $('.desc2').css("display","none");
      $('.desc3').css("display","none");
      $('.desc4').css("display","none");
      $('.desc5').css("display","none");
      $('.desc1').css("display","none");
       //beforedepartment
       $('.mythirdsection6').css("display","flex");
       $('.mythirdsection6').css("align-items","center");
       $('.mythirdsection2').css("display","none");
       $('.mythirdsection3').css("display","none");
       $('.mythirdsection4').css("display","none");
       $('.mythirdsection5').css("display","none");
       $('.mythirdsection').css("display","none");
        //lastdepartment
        $('.bluepart').css("display","none");
        $('.yellowpart').css("display","none");
        $('.greenpart').css("display","none");
        $('.redpart').css("display","none");
        $('.graypart').css("display","none");
        $('.darkgreenpart').css("display","block");
    }

      })


      //1
      $('.mychandecolor').click(function(){
        let  style1=
        {
           "transform" : "scale(1.2, 1.2)",
           "box-shadow": "0 0 10px 5px rgb(0 0 0 / 10%)",
           "border": "1px",
           "border-color": "whitesmoke",
           "border-style": "solid"

         }



        if($('.mychandecolor').css( "border")!="1"){


          $('.mychandecolor').css(style1);
          //2
          $('.mychandecolor2').css("transform","scale(1, 1)");
          $('.mychandecolor2').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");
          //3

          $('.mychandecolor3').css("transform","scale(1, 1)");
          $('.mychandecolor3').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");
              //4
              $('.mychandecolor4').css("transform","scale(1, 1)");
              $('.mychandecolor4').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");
            //5
            $('.mychandecolor5').css("transform","scale(1, 1)");
            $('.mychandecolor5').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");
              //6
              $('.mychandecolor6').css("transform","scale(1, 1)");
              $('.mychandecolor6').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");




      }

      })

      //2
      $('.mychandecolor2').click(function(){
        let  style1=
        {
           "transform" : "scale(1.2, 1.2)",
           "box-shadow": "0 0 10px 5px rgb(0 0 0 / 10%)",


         }

        if($('.mychandecolor2').css( "border")!="1"){

        $('.mychandecolor2').css(style1);
        //1
        $('.mychandecolor').css("transform","scale(1, 1)");
        $('.mychandecolor').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");

             //3

             $('.mychandecolor3').css("transform","scale(1, 1)");
             $('.mychandecolor3').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");
                 //4
                 $('.mychandecolor4').css("transform","scale(1, 1)");
                 $('.mychandecolor4').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");
               //5
               $('.mychandecolor5').css("transform","scale(1, 1)");
               $('.mychandecolor5').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");
                 //6
                 $('.mychandecolor6').css("transform","scale(1, 1)");
                 $('.mychandecolor6').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");



      }

      })

      //3
      $('.mychandecolor3').click(function(){
        let  style1=
        {
           "transform" : "scale(1.2, 1.2)",
           "box-shadow": "0 0 10px 5px rgb(0 0 0 / 10%)",


         }

        if($('.mychandecolor3').css( "border")!="1"){

        $('.mychandecolor3').css(style1);
        //1
        $('.mychandecolor').css("transform","scale(1, 1)");
        $('.mychandecolor').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");

             //3

             $('.mychandecolor2').css("transform","scale(1, 1)");
             $('.mychandecolor2').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");
                 //4
                 $('.mychandecolor4').css("transform","scale(1, 1)");
                 $('.mychandecolor4').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");
               //5
               $('.mychandecolor5').css("transform","scale(1, 1)");
               $('.mychandecolor5').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");
                 //6
                 $('.mychandecolor6').css("transform","scale(1, 1)");
                 $('.mychandecolor6').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");



      }

      })


      //4
      $('.mychandecolor4').click(function(){
        let  style1=
        {
           "transform" : "scale(1.2, 1.2)",
           "box-shadow": "0 0 10px 5px rgb(0 0 0 / 10%)",


         }

        if($('.mychandecolor4').css( "border")!="1"){

        $('.mychandecolor4').css(style1);
        //1
        $('.mychandecolor').css("transform","scale(1, 1)");
        $('.mychandecolor').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");

             //3

             $('.mychandecolor3').css("transform","scale(1, 1)");
             $('.mychandecolor3').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");
                 //4
                 $('.mychandecolor2').css("transform","scale(1, 1)");
                 $('.mychandecolor2').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");
               //5
               $('.mychandecolor5').css("transform","scale(1, 1)");
               $('.mychandecolor5').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");
                 //6
                 $('.mychandecolor6').css("transform","scale(1, 1)");
                 $('.mychandecolor6').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");



      }

      })


      //5
      $('.mychandecolor5').click(function(){
        let  style1=
        {
           "transform" : "scale(1.2, 1.2)",
           "box-shadow": "0 0 10px 5px rgb(0 0 0 / 10%)",


         }

        if($('.mychandecolor5').css( "border")!="1"){

        $('.mychandecolor5').css(style1);
        //1
        $('.mychandecolor').css("transform","scale(1, 1)");
        $('.mychandecolor').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");

             //3

             $('.mychandecolor3').css("transform","scale(1, 1)");
             $('.mychandecolor3').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");
                 //4
                 $('.mychandecolor4').css("transform","scale(1, 1)");
                 $('.mychandecolor4').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");
               //5
               $('.mychandecolor2').css("transform","scale(1, 1)");
               $('.mychandecolor2').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");
                 //6
                 $('.mychandecolor6').css("transform","scale(1, 1)");
                 $('.mychandecolor6').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");



      }

      })


      //6
      $('.mychandecolor6').click(function(){
        let  style1=
        {
           "transform" : "scale(1.2, 1.2)",
           "box-shadow": "0 0 10px 5px rgb(0 0 0 / 10%)",


         }

        if($('.mychandecolor6').css( "border")!="1"){

        $('.mychandecolor6').css(style1);
        //1
        $('.mychandecolor').css("transform","scale(1, 1)");
        $('.mychandecolor').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");

             //3

             $('.mychandecolor3').css("transform","scale(1, 1)");
             $('.mychandecolor3').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");
                 //4
                 $('.mychandecolor4').css("transform","scale(1, 1)");
                 $('.mychandecolor4').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");
               //5
               $('.mychandecolor5').css("transform","scale(1, 1)");
               $('.mychandecolor5').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");
                 //6
                 $('.mychandecolor2').css("transform","scale(1, 1)");
                 $('.mychandecolor2').css("box-shadow","0 0 0 0 rgb(0 0 0 / 0%)");



      }

      })



      $('.gm').mouseover(function(){
        $('.theappearance1').css("display","flex");
        $('.gm').mouseleave(function(){
          $('.theappearance1').css("display","none")

      })
    }
      )

      $('.chevrolet').mouseover(function(){
        $('.theappearance2').css("display","flex");
        $('.chevrolet').mouseleave(function(){
          $('.theappearance2').css("display","none")

      })
    }
      )
        $('.isuzu').mouseover(function(){
        $('.theappearance3').css("display","flex");
        $('.isuzu').mouseleave(function(){
          $('.theappearance3').css("display","none")

      })
    }
      )
      $('.peugeot').mouseover(function(){
        $('.theappearance4').css("display","flex");
        $('.peugeot').mouseleave(function(){
          $('.theappearance4').css("display","none")

      })
    }
      )


      $('.opel').mouseover(function(){
        $('.theappearance5').css("display","flex");
        $('.opel').mouseleave(function(){
          $('.theappearance5').css("display","none")

      })
    }
      )

      $('.mg').mouseover(function(){
        $('.theappearance6').css("display","flex");
        $('.mg').mouseleave(function(){
          $('.theappearance6').css("display","none")

      })
    }
      )

      $('.asdelco').mouseover(function(){
        $('.theappearance7').css("display","flex");
        $('.asdelco').mouseleave(function(){
          $('.theappearance7').css("display","none")

      })
    }
      )

      $('.hero').mouseover(function(){
        $('.theappearance8').css("display","flex");
        $('.hero').mouseleave(function(){
          $('.theappearance8').css("display","none")

      })
    }
      )



//1

      $('.1').mouseover(function(){
        $('.theappearance1').css("display","flex");
        $('.1').mouseleave(function(){
          $('.theappearance1').css("display","none")

      })
    }
      )
//2
      $('.2').mouseover(function(){
        $('.theappearance2').css("display","flex");
        $('.2').mouseleave(function(){
          $('.theappearance2').css("display","none")

      })
    }
      )

//3
      $('.3').mouseover(function(){
        $('.theappearance3').css("display","flex");
        $('.3').mouseleave(function(){
          $('.theappearance3').css("display","none")

      })
    }
      )


//4
      $('.4').mouseover(function(){
        $('.theappearance4').css("display","flex");
        $('.4').mouseleave(function(){
          $('.theappearance4').css("display","none")

      })
    }
      )


      $('.5').mouseover(function(){
        $('.theappearance5').css("display","flex");
        $('.5').mouseleave(function(){
          $('.theappearance5').css("display","none")

      })
    }
      )
//6

      $('.6').mouseover(function(){
        $('.theappearance6').css("display","flex");
        $('.6').mouseleave(function(){
          $('.theappearance6').css("display","none")

      })
    }
      )

//7
      $('.7').mouseover(function(){
        $('.theappearance7').css("display","flex");
        $('.7').mouseleave(function(){
          $('.theappearance7').css("display","none")

      })
    }
      )

//8
      $('.8').mouseover(function(){
        $('.theappearance8').css("display","flex");
        $('.8').mouseleave(function(){
          $('.theappearance8').css("display","none")

      })
    }
      )
//9

      $('.9').mouseover(function(){
        $('.theappearance9').css("display","flex");
        $('.9').mouseleave(function(){
          $('.theappearance9').css("display","none")

      })
    }
      )

//10
      $('.10').mouseover(function(){
        $('.theappearance10').css("display","flex");
        $('.10').mouseleave(function(){
          $('.theappearance10').css("display","none")

      })
    }
      )

//11
      $('.11').mouseover(function(){
        $('.theappearance11').css("display","flex");
        $('.11').mouseleave(function(){
          $('.theappearance11').css("display","none")

      })
    }
      )

//12
      $('.12').mouseover(function(){
        $('.theappearance12').css("display","flex");
        $('.12').mouseleave(function(){
          $('.theappearance12').css("display","none")

      })
    }
      )
//13

      $('.13').mouseover(function(){
        $('.theappearance13').css("display","flex");
        $('.13').mouseleave(function(){
          $('.theappearance13').css("display","none")

      })
    }
      )
//14

      $('.14').mouseover(function(){
        $('.theappearance14').css("display","flex");
        $('.14').mouseleave(function(){
          $('.theappearance14').css("display","none")

      })
    }
      )

//15
      $('.15').mouseover(function(){
        $('.theappearance15').css("display","flex");
        $('.15').mouseleave(function(){
          $('.theappearance15').css("display","none")

      })
    }
      )

      //16
      $('.16').mouseover(function(){
        $('.theappearance16').css("display","flex");
        $('.16').mouseleave(function(){
          $('.theappearance16').css("display","none")

      })
    }
      )
      //17
      $('.17').mouseover(function(){
        $('.theappearance17').css("display","flex");
        $('.17').mouseleave(function(){
          $('.theappearance17').css("display","none")

      })
    }
      )
      //18
      $('.18').mouseover(function(){
        $('.theappearance18').css("display","flex");
        $('.18').mouseleave(function(){
          $('.theappearance18').css("display","none")

      })
    }
      )
      //19
      $('.19').mouseover(function(){
        $('.theappearance19').css("display","flex");
        $('.19').mouseleave(function(){
          $('.theappearance19').css("display","none")

      })
    }
      )










  }

}
