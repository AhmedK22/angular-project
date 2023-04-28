


import { Component, OnInit } from '@angular/core';

declare var $:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(){

    $('.imagesdofiframe').click(function(){
      $('.iframeclick').css('display',"flex")
      $('.iframeitself').attr('src',"https://player.vimeo.com/video/370344655?byline=0&amp;portrait=0&amp;autoplay=1 ")
    })
    $('.myexit').click(function(){
      $('.iframeclick').css('display',"none")
      $('.iframeitself').attr('src'," ")
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

      //1
    $('.mychandecolor').click(function(){
      //beforedepartment
       $('.mythirdsection').css("display","flex");
       $('.mythirdsection').css("align-items","center");
       $('.mythirdsection2').css("display","none");
       $('.mythirdsection3').css("display","none");
       $('.mythirdsection4').css("display","none");
       $('.mythirdsection5').css("display","none");
       $('.mythirdsection6').css("display","none");
      })
       //2
    $('.mychandecolor2').click(function(){
       //beforedepartment
       $('.mythirdsection2').css("display","flex");
       $('.mythirdsection2').css("align-items","center");
       $('.mythirdsection').css("display","none");
       $('.mythirdsection3').css("display","none");
       $('.mythirdsection4').css("display","none");
       $('.mythirdsection5').css("display","none");
       $('.mythirdsection6').css("display","none");
      })

       //3
    $('.mychandecolor3').click(function(){
       //beforedepartment
       $('.mythirdsection3').css("display","flex");
       $('.mythirdsection3').css("align-items","center");
       $('.mythirdsection2').css("display","none");
       $('.mythirdsection').css("display","none");
       $('.mythirdsection4').css("display","none");
       $('.mythirdsection5').css("display","none");
       $('.mythirdsection6').css("display","none");
      })

       //4
    $('.mychandecolor4').click(function(){
       //beforedepartment
       $('.mythirdsection4').css("display","flex");
       $('.mythirdsection4').css("align-items","center");
       $('.mythirdsection2').css("display","none");
       $('.mythirdsection3').css("display","none");
       $('.mythirdsection').css("display","none");
       $('.mythirdsection5').css("display","none");
       $('.mythirdsection6').css("display","none");
      })

       //5
    $('.mychandecolor5').click(function(){
       //beforedepartment
       $('.mythirdsection5').css("display","flex");
       $('.mythirdsection5').css("align-items","center");
       $('.mythirdsection2').css("display","none");
       $('.mythirdsection3').css("display","none");
       $('.mythirdsection4').css("display","none");
       $('.mythirdsection').css("display","none");
       $('.mythirdsection6').css("display","none");
      })

       //6
    $('.mychandecolor6').click(function(){
       //beforedepartment
       $('.mythirdsection6').css("display","flex");
       $('.mythirdsection6').css("align-items","center");
       $('.mythirdsection2').css("display","none");
       $('.mythirdsection3').css("display","none");
       $('.mythirdsection4').css("display","none");
       $('.mythirdsection5').css("display","none");
       $('.mythirdsection').css("display","none");
      })
  }

  }
