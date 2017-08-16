// navbar hide and show on scroll
var headingHeight = $('.heading').outerHeight();
var didScroll;
var delta = 100;
var lastPos = 0;

$(window).scroll((evt) => {
    didScroll = true;
});

setInterval(() => {
    if(didScroll) {
        judge();
        didScroll = false;
    }
    // make sure navbar always shows up when the page is at top
    else if($(window).scrollTop() < headingHeight - $('#navtop').outerHeight()) {
        $('#navtop').removeClass('nav-hide');
    }
}, 200);

function judge() {
    var currPos = $(this).scrollTop();
    if(Math.abs(lastPos - currPos) <= delta)
        return;
    // scroll down
    if (currPos > lastPos && currPos > headingHeight) {
        $('#navtop').addClass('nav-hide');
    } 
    // scroll up
    else if (currPos + $(window).height() < $(document).height()){
        $('#navtop').removeClass('nav-hide');
    }
    lastPos = currPos;
}

// highlight current nav link
$('a').each(function(){
    if ($(this).prop('href') == window.location.href) {
        $(this).addClass('active'); 
        $(this).parents('li').addClass('active');
    }
});