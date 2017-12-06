// smooth transition link
$(document).ready(function(){
    // page scroll
    $(".page-scroll").on("click", function(event){

        var tujuan = $(this).attr("href");

        var elemenTujuan = $(tujuan);

        $("html, body").animate({
            scrollTop: elemenTujuan.offset().top - 50
        }, 800, 'easeInOutExpo');
        event.preventDefault();
    });
});


// About
$(document).ready(function(){
    $(window).on("load", function(){
        $(".pLeft").addClass("pShow"),
        $(".pRight").addClass("pShow");
    });
});



// paralax
$(document).ready(function() {

    $(window).scroll(function() {
        // jumbotron
        var wScroll = $(this).scrollTop();

        $(".jumbotron img").css( {
            "transform" : "translate(0px, "+ wScroll/3 +"%)"
        });
        $(".jumbotron h2").css( {
            "transform" : "translate(0px, "+ wScroll/1 +"%)"
        });
        $(".jumbotron p").css( {
            "transform" : "translate(0px, "+ wScroll/1 +"%)"
        });

        // portfolio
        if (wScroll > $(".portfolio").offset().top - 380 ) {
            $(".portfolio .thumbnail").each(function(i) {
                setTimeout(function() {
                    $(".portfolio .thumbnail").eq(i).addClass("show");
                }, 300 * (i+1));
            });
        }
    });
});
