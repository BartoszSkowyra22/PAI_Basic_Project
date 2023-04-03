
//9.2 JQuerry - obliczenia.html

$(document).ready(function () {
    $("#tresc").addClass("szareTlo").css('font-weight', '700');
    $(":disabled").addClass("zielony");
    $("button").click(function () {
        $("button").html("<p>Wysłano</p>").addClass("zielony");
    });
});
