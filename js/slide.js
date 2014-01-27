slideDown = function(){
  $('.main').moveDown();
}
moveToSaturday = function(){
	$('.main').moveTo(3);
}

moveToMonday = function(){
	$('.main').moveTo(4);
}

moveToTuesday = function(){
	$('.main').moveTo(5);
}

moveToWednesday = function(){
	$('.main').moveTo(6);
}
moveToThursday = function(){
	$('.main').moveTo(7);
}
moveToFriday = function(){
	$('.main').moveTo(8);
}

$(document).ready(function(){
  $('.slide-down').on('click', slideDown); 
  $('.act-saturday').on('click', moveToSaturday);
  $('.act-monday').on('click', moveToMonday);
  $('.act-tuesday').on('click', moveToTuesday);
  $('.act-wednesday').on('click', moveToWednesday);
  $('.act-thursday').on('click', moveToThursday);
  $('.act-friday').on('click', moveToFriday);
});
