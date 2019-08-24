document.addEventListener('DOMContentLoaded', function(event) {
  var dom = document.querySelector(`
  #globalContainer
    #mainContainer
      .home_right_column
        #pagelet_gaming_destination_rhc
  `);
  if(dom) {
    dom.style.visibility = "hidden";
  }
})
