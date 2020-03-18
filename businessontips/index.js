(function($){
    $(document).ready(function(){
        //hide .navbar first
        $(".navbar").hide();
        //fade in .navbar
        $(function(){
            $(window).scroll(function(){
                //set distance user needs to scroll before it fade in
                if($(this).scrollTop()>100){
                    $('.navbar').fadeIn();
                }
                else{
                  $('.navbar').fadeOut();  
                }
            
            });
        });
    });
});

