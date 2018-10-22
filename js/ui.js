"use strinct";
nAnimationTime = 800;

$(document).ready(function(){
	$('#fun').click(function(){
		$('#console').slideToggle(nAnimationTime);
	});
});
