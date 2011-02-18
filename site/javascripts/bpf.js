(function() {
  
  var setupSectionSlideshow = function() {
    var section = $(this);
    var slideshowContainer = section.find(".slideshow");
    if(slideshowContainer.length) {
      var content = section.find(".content");
      var navContainer = content.find('.nav');
      if(!navContainer.length) {
        navContainer = $("<p></p>").addClass("nav").appendTo(section.find(".media"));
      }
      slideshowContainer.cycle({
        fx:    "fade",
        timeout: 0,
        // speed: 1000,
        next:  slideshowContainer.find("img"),
        pager: navContainer
      }).cycle('pause')
    }
  }
  
  var sectionMouseOver = function() {
    $(this).find(".slideshow").cycle('resume');
  }
  
  var sectionMouseOut = function() {
    $(this).find(".slideshow").cycle('pause');
  }
  
  $(function() {
    // setup slideshow
    $("#portfolio section")
      .each(setupSectionSlideshow)
      .hover(sectionMouseOver, sectionMouseOut)
  })  
  
})()