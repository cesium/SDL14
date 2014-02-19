slideDown = function(){
  $('.main').moveDown();
}
moveToSaturday = function(){
	$('.main').moveTo(4);
}

moveToMonday = function(){
	$('.main').moveTo(5);
}

moveToTuesday = function(){
	$('.main').moveTo(6);
}

moveToWednesday = function(){
	$('.main').moveTo(7);
}
moveToThursday = function(){
	$('.main').moveTo(8);
}
moveToFriday = function(){
	$('.main').moveTo(9);
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