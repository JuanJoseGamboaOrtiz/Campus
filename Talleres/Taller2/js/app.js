document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.carousel');
    var instances = M.Carousel.init(elems,{
        duration:200,
        dist:-100,
        shift:-50,
        padding:0,
        numVisible:3,
        fullWidht:false,
        indicators:false,
        noWrap:false,
    });
  });



