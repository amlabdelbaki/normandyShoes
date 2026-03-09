$( document ).ready( function () {

    //calculate h-banner height
    (function(){
        var winH    = $(window).height(),
        headerH = $("header").innerHeight();
        $(window).on("resize",function(){
            $('body').css("paddingTop",headerH);
        });

        $(window).trigger('resize');
    })();

       

        



    //loading script
    $(window).on('load',function(){
        $(".loading-container .loading-center").fadeOut(1000,function(){
               $(this).parent().fadeOut(500,function()
                       {
                           $("body").css("overflow-y","auto");
                           $(this).remove(); 
                        });
         });
       });
       
    //add active class to navtogglebtn

    $('.navbar-toggle').on('click', function ()
    {
        var btn = $(this);
        $(" header nav #N-menu").toggleClass("showMenu");

    

        if (!btn.hasClass('active'))
        {
            btn.addClass('active');  
        }
        else
        {
            btn.removeClass('active');
        

    
        }
    });


    // show dropdown on hover

    // $("#N-menu .dropdown").on( 'mouseenter',function(){
    //     $(this).find(".dropdown-menu").stop(true, true).delay(1000).parent(".dropdown").addClass("open");  
    //   }).on("mouseleave",function(){$(this).find('.dropdown-menu').stop(true, true).delay(1000).parent(".dropdown").removeClass("open");});




    // $("#N-menu .dropdown").hover(function(){

    //     var dropdownLink= $("#N-menu .dropdown");
    //     dropdownLink.removeClass('open');
    //     $(this).addClass("open");
 
     
    //     });

        $("#N-menu .dropdown").hover(function(){
            $(this).delay(1000).toggleClass("open");
            });
    

// hide menu when click on body 
var TopMenu =$("header nav #N-menu"),
btn=$(".navbar-toggle");
$(document).on('click', function (event) {
    if (!$(event.target).closest('#N-header').length) {
        // ... clicked on the 'body', but not inside of #menutop
        if(TopMenu.is(':visible')) {
            TopMenu.toggleClass("showMenu");
            btn.toggleClass("active");
           }
      }
 
  });

  TopMenu.on('click', function (event) {
    event.stopPropagation();
  });



    // NORslider

    $('.Nor-banner .slider-wrap').slick({
        autoplay:true,
        infinite: true,
        pauseOnFocus:false,
        pauseOnHover:false,
        prevArrow: '<div class="slick-nav sm-btn"><i class="fa fa-long-arrow-left"></i>  </div>',
        nextArrow: '<div class="slick-nav sm-btn"> <i class="fa fa-long-arrow-right"></i> </div>',
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 6000,
        autoplaySpeed: 6000,
        fade: true,
       cssEase: 'linear'
        // speed:1000,
        // fade: true,
        // cssEase: 'linear'
    
   
    }).slickAnimation();

//PRoduct slider
    $('.Nor-products  .slider-wrap-2').slick({
        autoplay:true,
        infinite: true,
        pauseOnFocus:false,
        pauseOnHover:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true,
        autoplaySpeed: 1000,
        cssEase: 'linear',
        speed:1000,
         fade: true,
        initialSlide: 1,
      
 

   
    });


    /*contact form  label */


        $(".N-Form .form-control"). on ("focusout",function (){
           if( $(this).val() != '')
             {
               $(this).parent().addClass("has-data");
             }
          else
            {
               $(this).parent().removeClass("has-data");
            }
        });

    /*contact form  label */


// upload photo
$("[type=file]").on("change", function(){
    // Name of file and placeholder
    var file = this.files[0].name;
    var dflt = $(this).attr("placeholder");
    if($(this).val()!=""){
      $(this).next().text(file);
    } else {
      $(this).next().text(dflt);
    }
  });

























    //sticky navbar : 
    
                //  var navbar = document.getElementById("navbar");
                //  var sticky = navbar.offsetTop;
                // $( window ).scroll(function(){
                //     if (window.pageYOffset >= sticky) {
                //                     navbar.classList.add("sticky")
                //                 } else {
                //                     navbar.classList.remove("sticky");
                //                 }
                // } );
//animation
            //    var wow = new WOW(
            //         {
            //              animateClass: 'animated',
            //           offset:       50
            //         }
            //       );
            //       wow.init();


//screens-slider
    
            //       $('.screen-slider').slick({
            //         autoplay:true,
            //         speed: 1000,
            //         pauseOnFocus:true,
            //         pauseOnHover:true,
            //         dots: true,
            //         arrows: false,
            //         centerMode: true,
            //         focusOnSelect: true,
              


            //         responsive: [
                
            //             {
            //             breakpoint: 768,
            //             settings: {
                            
            //                 slidesToShow: 1,
            //                 slidesToScroll: 1,
                       
            //             }
            //     },
                
            //     {
            //             breakpoint: 480,
            //             settings: {
            //                 slidesToShow: 1,
            //                 slidesToScroll: 1,
                
            //             }
            //     },
            
            // ]
            //       });

              


            });
     

