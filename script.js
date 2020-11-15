$(document).ready(function () {
	
	$('a[href^="#"]').attr('target', '_blank');
	
	var iconsArray = [
	'fa-facebook-f', 'fa-instagram', 'fa-twitter', 'fa-pinterest', 
	'fa-facebook-f', 'fa-instagram', 'fa-twitter', 'fa-pinterest', 
	'fa-facebook-f', 'fa-instagram', 'fa-twitter', 'fa-pinterest', 
	'fa-facebook-f', 'fa-instagram', 'fa-twitter', 'fa-pinterest'];

	$('.socialnetworks a').each(function (i) {
		$(this).prepend('<i class="fab ' + iconsArray[i] + '"></i> ');
	});

	$("h2").on("click", function(event){
		$(this).css("color", "red");
	});

	$('.socialnetworks li').each(function(i){
		if(i===7){
			$(this).append('<ul><li><a href="#">link 4.a</a></li></ul>').after('<li><a href="#">link 5</a></li>');
		}
	});

});