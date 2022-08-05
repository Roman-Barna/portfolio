document.addEventListener('DOMContentLoaded', function () {
    var elems1 = document.querySelectorAll('.slider');
    var instances1 = M.Slider.init(elems1, {
        height:500,
        interval:1000
    });

    var elems2 = document.querySelectorAll('.materialboxed');
    var instances2 = M.Materialbox.init(elems2, {});

    var elems3 = document.querySelectorAll('.sidenav');
    var instances3 = M.Sidenav.init(elems3, {});
});