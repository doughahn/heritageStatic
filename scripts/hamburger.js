$(function() {
    // The navbar is initially collapsed
    var menuVisible = false;
    var hamburgerIcon = $('.hamburger-icon'); 
    var navbar = $("#navigation-state");

    // Shows/hides the navbar links through the application of CSS classes
    var toggleNavVisibility = function(flag) {
        if (flag) {
            hamburgerIcon.addClass('is-active');
            navbar.addClass('nav-opening');
            navbar.removeClass('nav-closing');
            // match the height in state; line-height of the li * 16
            navbar.css({'height': '192px'});
        } else {
            hamburgerIcon.removeClass('is-active');
            navbar.css({'height':'0'});
            navbar.removeClass('nav-opening');
            navbar.addClass('nav-closing');
        }
    };

    // Triggers upon transition between mobile and desktop mode
    enquire.register("screen and (min-width:40em)", {
        match : function() {
            navbar.removeClass('collapsible');
        },
        unmatch : function() {
            navbar.addClass('collapsible');
        }
    });

    // Toggle navbar visibility when hamburger icon is clicked
    hamburgerIcon.click(function(event) {
        menuVisible = !menuVisible;
        toggleNavVisibility(menuVisible);
    });

    // When the navbar has been marked as collapsible, let clicking
    // on any of its links collapse the navbar.
    $('.collapsible').on("click", "a", (function(e) {
        menuVisible = false;
        toggleNavVisibility(menuVisible);
    }));
});
