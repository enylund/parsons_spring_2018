$(document).ready(function(){
	$(".prevent-default").click(function(event){
	  event.preventDefault();
	  return false;
	});
});