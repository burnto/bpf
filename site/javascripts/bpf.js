(function() {
  var portfolioSectionSelector = "#portfolio section";
  
  var setupSectionSlideshow = function(index) {
    var section = $(this);
    var slideshowContainer = section.find(".slideshow");
    if(slideshowContainer.length) {
      var content = section.find(".content");
      var navContainer = content.find('.nav');
      if(!navContainer.length) {
        navContainer = $("<p></p>").addClass("nav").appendTo(content);
      }
      var pagerSelector = portfolioSectionSelector + ":eq(" + index + ") .content .nav";
      slideshowContainer.cycle({
        next: slideshowContainer,
        pager: pagerSelector
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
    $(portfolioSectionSelector)
      .each(setupSectionSlideshow)
      .hover(sectionMouseOver, sectionMouseOut)
  })  
  
})()