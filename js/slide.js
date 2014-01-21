slideDown = function(){
  $('.main').moveDown();
}

$(document).ready(function(){
  $('.slide-down').on('click', slideDown);  
});
