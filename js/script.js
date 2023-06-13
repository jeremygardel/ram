//  

$( document ).ready(function() {
    $('.overlay').hide();
    $('.login-page').hide();
    $('.form-nav').animate({
        'top': '0'
    },2000)
    $('.login-btn').click(function(){
        $('.overlay').fadeIn(2000);
        $('.login-page').fadeIn(2000);
    })

    $('.close-login').click(function(){
        $('.overlay').fadeOut(500);
    })
});
