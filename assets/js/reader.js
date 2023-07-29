$(document).ready(function () {
    $("#about .container").load("./views/about/about.html");
    $("#featured").load("./views/portfolio/portfolio.html");
    $("#testimonials").load("./views/testimonials/testimonials.html");
    $("#contact").load("./views/contact/contact.html");
    $("#footer").load("./views/footer/footer.html");
});
$(document).ready(function () {

    animate_loop = function animate_loop() {
      $("#down-fa").animate({
        opacity: 0.1,
  
      }, 500, function () {
        $("#down-fa").animate({ opacity: 1 }, 1500)
        animate_loop();
      });
    }
  
    animate_loop();
  
  })