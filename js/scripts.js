$(document).ready(function(){
    $('.slickSlider').slick({
        slidesToShow: 3,
        slidesToScroll: 1
    });


    $("#openLoginModals").click(function() {
        $("#registerDialog").hide('fast');
        $("#loginDialog").show('fast');
    });

    $("#openRegisterModals").click(function() {
        $("#loginDialog").hide('fast');
        $("#registerDialog").show('fast');
    });

    $("#closeLoginModals").click(function() {
        $("#loginDialog").hide('fast');
    });

    $("#closeRegisterModals").click(function() {
        $("#registerDialog").hide('fast');
    });

});
