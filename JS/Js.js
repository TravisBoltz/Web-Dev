$(document).ready(function(){
    $('#registration-box').hide();
    $('#newpassword-box').hide();

    $('#icon').click(function(){
        $('ul').toggleClass('show');
        $('.close'.css('visibility','visible','opacity',1))
    })
    // $('#About').textillate(
        // {
        // loop:true,
        // in:{
            // effect: "fadeInDownBig",
            // delayScale: 3,
            // delay: 20,
        // },
        // out:{
            // effect: bounceOut,
            // delayScale: 3,
            // delay: 20,
        // }
        // }
    // );
    //For Profile//
    $(".profile_action").click(function(){
        $(".profile_menu").toggleClass("active")
    })

    // For Login //
    $('.reg').click(function(){
       $('#login-box').hide();  
       $('#registration-box').fadeIn(2000);
       $('#newpassword-box').hide();

    })
    $('#log').click(function(){
        $('#registration-box').hide();
        $('#login-box').fadeIn(2000); 
        $('#newpassword-box').hide(); 

     })
     $('#newpass').click(function(){
        $('#newpassword-box').fadeIn(1000);
        $('#login-box').hide();  

     })
     $('#nav1').click(function(){
        $('#login-box').hide();
        $('#registration-box').fadeIn(2000);
        $('#newpassword-box').hide();
        
 
     })
     $('#nav2').click(function(){
        $('#login-box').fadeIn(2000);  
        $('#registration-box').hide();
        $('#newpassword-box').hide();
 
    })

})