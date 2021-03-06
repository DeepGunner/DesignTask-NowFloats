    // Initialize and add the map
function initMap() {

    let myLatLng = {
        lat: 17.434047,
        lng: 78.401988
    };

    var contentString = '<div id="mapInfo">'+
      '<p>Zephyr Motors Pvt. Ltd.,<br>' +
      'Commercial Building,<br>'+
      'Road No. 36, Jubilee Hills,<br>'+
      'Hyderabad - 500033</p><br>'+
      '<p><a class="mapInfoBtn" href="#">'+
      'VISIT WEBSITE</a></p>'+
      '</div>';

      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });

    let map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 15,
            center: myLatLng
        });


    let marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: '',
        icon: 'https://i.postimg.cc/W3RXb1wC/Location-Pin.png'
        
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
}

    //calculate section height from top

let ht = $(".site-header").innerHeight(),
    f1 = $('.main-container .home').offset().top,
    f2 = $('.main-container .services').offset().top,
    f3 = $('.main-container .about').offset().top,
    f4 = $('.main-container .location').offset().top,
    f5 = $('.main-container .contact').offset().top,
    myHeader = $(".site-header"),
    myWindow = $(window);

function makeSticky() {
    // $('.info-container').css({
    //     'padding-top': ht
    // });

    //add remove sticky nav class based on height
    myWindow.scroll(function () {
        if (myWindow.scrollTop() == 0) {
            myHeader.removeClass("sticky-nav");
        } else {
            myHeader.addClass("sticky-nav");
        }
    });
}

    //navigation highlight  on scroll
function remove_highlight() {
    $('.menu-items li a').each(function () {
        $(this).removeClass('textWhite');
    })
    
}

    //navigate to specific section on click
function jump() {
    $('nav ul li a').click(function () {
        event.preventDefault();
        let str = $(this).parents().index();
        if (str == 0) {
            $('body,html').animate({
                scrollTop: f1 - ht
            });
        }
        if (str == 1) {
            $('body,html').animate({
                scrollTop: f2 - ht
            });
        }
        if (str == 2) {
            $('body,html').animate({
                scrollTop: f3 - ht
            });
        }
        if (str == 3) {
            $('body,html').animate({
                scrollTop: f4 - ht
            });
        }
        if (str == 4) {
            $('body,html').animate({
                scrollTop: f5 - ht
            });
        };
    })
}
$(function () {
    jump();
    makeSticky();
    $(window).scroll(function () {

        if ($(window).scrollTop() > f1 - (4 * ht)) {
            remove_highlight();
            $('.menu .menu-items li:nth-child(1) a').addClass('selected');
            

        }
        if ($(window).scrollTop() > f2 - (4 * ht)) {
            remove_highlight();
            $('.menu-items li:nth-child(2) a').addClass('textWhite');
            

        }
        if ($(window).scrollTop() > f3 - (4 * ht)) {
            remove_highlight();
            $('.menu-items li:nth-child(3) a').addClass('textWhite');
            

        }
        if ($(window).scrollTop() > f4 - (4 * ht)) {
            remove_highlight();
            $('.menu-items li:nth-child(4) a').addClass('textWhite');
            

        }
        if ($(window).scrollTop() > f5 - (8 * ht)) {
            remove_highlight();
            $('.menu-items li:nth-child(5) a').addClass('textWhite');
            

        };
    })

});


    // jquery ui select menu and datepicker
$(function () {
    $(".carSelect").selectmenu();
    $(".pickTime").selectmenu();
    $(".dropTime").selectmenu();
    $(".locSelect").selectmenu();
    $(".dropOff").datepicker();
    $(".pickUp").datepicker();
});


$(function () {
    //hamburger menu using tweenMax
    $("#hamburger").click(function () {


        let nav = $(".nav-wrapper");
        let navHeight = nav.height();
    //hamburger div height and speed
        if (navHeight < 115) {

            TweenMax.to(nav, 0.3, {
                "height": 115
            });
        } else {
            TweenMax.to(nav, 0.3, {
                "height": 50
            });
        };

    });

    $("#hamburger").click(function () {

        let nav = $(".nav-wrapper");
        let navHeight = nav.height();

        if (navHeight < 115) {
            $("#a").addClass("rotate-down");
            $("#hamburger").addClass("menu-up");
            $("#b").addClass("disappear");
            $("#c").addClass("rotate-up");


        } else {
            $("#a").removeClass("rotate-down");
            $("#hamburger").removeClass("menu-up");
            $("#b").removeClass("disappear");
            $("#c").removeClass("rotate-up");
        };
    });
});


//Initiate Carousel
$('.carousel').carousel();