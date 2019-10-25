// 1. Every time we hover over a link, run a function.
// 2. Inside of our function, we want to find out which overlay we want to show.
// 3. Remove the .visible class from all of the overlays.
// 4. Add the .visible class to the overlay we just hovered.

$(`.nav-link a`).hover(function () {

    var link = $(this)
    var overlay = link.data('overlay')

   $('.overlay-bg').removeClass('visible')
   $(overlay).addClass('visible')


})