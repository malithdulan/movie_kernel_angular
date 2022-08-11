
//nav bar animation
$(window).on('scroll', function(){
    if($(window).scrollTop()){
        $('nav').addClass('black');
        
    }
    else{
        $('nav').removeClass('black');
    }
})


$(document).ready(function(){
    //menu click animation
    $(".menu-icon").click(function(){
        $("nav ul").toggleClass("active");
        $(".menu-icon").toggleClass("active");
    });

    



    $('.toggle').click(function(){
        $('.toggle').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('.mainsearch-container').toggleClass('active');
    })

    if($( "#myDiv" ).is( ".head" ))
    {
        //hide slider
         //document.getElementById("slider-hide").hidden=true;

         //hide navigation item home
         document.getElementById("hide-home").hidden=true;
         /*document.getElementById("test").hidden=false*/
    }



    //movie details header image hide
 var currentWidth = window.innerWidth;
 var element = document.getElementById("myDiv");
 if (element != null && currentWidth <= 768) {
   // hide movie details banner with this width
   document.getElementById("myDiv").hidden=true;
 }

    var element = document.getElementsByClassName("scrollevel1");
 if (element != null && currentWidth <= 768) {
      //scroll on mobile to section div
      
            $(document).on('click','.scrollto',function () {
                $('html,body').animate({
                    scrollTop: $(".scrollevel1").offset().top},
                    'slow');
            });

          

            
    }


 if ($( ".scrollevel1" ).length && currentWidth <= 768) {
      //scroll on mobile to section div
      
            $(document).on('click','li',function () {
                $('html,body').animate({
                    scrollTop: $(".scrollevel1").offset().top},
                    'slow');
            });

            
    }

 

})








$(document).on("keypress", ":input:not(textarea)", function(event) {
    return event.keyCode != 13;
});

/*
$(document).ready(function(){
    $(".searchinput").focus(function() {
        $('.tt-menu').removeClass('showmenu');
        console.log('in');
    }).blur(function() {
        $('.tt-menu').addClass('showmenu');
        console.log('out');
    });
    
})
*/


//auto search item show and hide
$('html').click(function(e){
    if (e.target.id == 'menu_content' || $(e.target).parents('#menu_content').length > 0) {
        // clicked menu content or children
        $('.tt-menu').removeClass('showmenu');
    } else {
        // didnt click menu content
        $('.tt-menu').addClass('showmenu');
    }
});


