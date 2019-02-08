$(function () { 
  $("#navbarToggle").focusout(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

  
var switchMenuToActive = function () {
 
  var classes = document.querySelector("#navHomeButton").className;
  classes = classes.replace(new RegExp("active", "g"), "");
  document.querySelector("#navHomeButton").className = classes;
  classes = document.querySelector("#navHomeButton").className;
  if (classes.indexOf("active") == -1) {
    classes += " active";
    document.querySelector("#navhomeButton").className = classes;
  }
};
