gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
    toggleActions: "restart pause resume pause",
    scroller: ".container-fluid"
  });

$(document).ready(()=>{
  $('#te-nav-btn').click(()=>{
    $('#te-nav-model').modal('toggle')
  });
});

