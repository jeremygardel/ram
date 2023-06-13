//  

$( document ).ready(function() {
    $('.overlay').hide();
    $('.login-page').hide();
    $('.form-nav').animate({
        'top': '9px'


    },2000)
    $('.login-btn').click(function(){
        $('.overlay').fadeIn(2000);
        $('.login-page').fadeIn(2000);
    })

});
