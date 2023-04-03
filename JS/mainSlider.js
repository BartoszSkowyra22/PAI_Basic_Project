function slideSwitch() {
    var $active = $('#slideshow IMG.active');
    if ($active.length === 0)
        $active = $('#slideshow IMG:last');
    var $next = $active.next().length ? $active.next()
        : $('#slideshow IMG:first');
    $active.addClass('last-active');
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function () {
            $active.removeClass('active last-active');
        });
}
function slide1() {
    $('#slideshow IMG.active').addClass("last-active").removeClass("active");
    $("#elem1").addClass("active");
}
function slide2() {
    $('#slideshow IMG.active').addClass("last-active").removeClass("active");
    $("#elem2").addClass("active");
}
function slide3() {
    $('#slideshow IMG.active').addClass("last-active").removeClass("active");
    $("#elem3").addClass("active");
}

$(function () {
    setInterval("slideSwitch()", 4000);
});

//responsywność banneru

let isElementVisible = true;

function ukryjElement() {
    const element = document.getElementById('bannerHide');
    if (isElementVisible) {
        element.style.transition = 'opacity 1.5s';
        element.style.opacity = 0;
        setTimeout(() => {
            element.style.display = 'none';
        }, 2000);
        isElementVisible = false;
    }
}

function pokazElement() {
    const element = document.getElementById('bannerHide');
    if (!isElementVisible) {
        element.style.display = 'block';
        element.style.transition = 'opacity 1.5s';
        element.style.opacity = 1;
        isElementVisible = true;
    }
}

window.addEventListener('resize', () => {
    if (window.innerWidth > 1100) {
        ukryjElement();
    } else {
        pokazElement();
    }
});
