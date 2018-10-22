"use strict";
var nAnimationTime = 800;
var index = 0;

var typicalUserGreetings = ["hello", "hi", "hey", "sup"];

$(document).ready(function(){
	$('#fun').click(function(){
		$('#console').slideToggle(nAnimationTime);
	});

	var input = document.getElementById("userInput");
	input.addEventListener("keyup",function(event){
		event.preventDefault();
		if(event.keyCode===13){
			var sText = $('#userInput').val();
			handleInput(sText);
			index = 0;
			previousCommands.unshift(sText);
		} else if(event.keyCode===38&&index<previousCommands.length){
			$('#userInput').val(previousCommands[index]);
			index++;
		} else if(event.keyCode===40 && index>0){
			index--;
			$('#userInput').val(previousCommands[index]);
		} else if (event.keyCode===40 && index == 0){
			$('#userInput').val("");
		}
});
});


function handleInput(sText){
	writeToFakeConsole(sText, ">");
	sText = sText.replace(/\?|\.|[0..9]|\!/g,'');
	
	$('#userInput').val("");
	if(typicalUserGreetings.includes(sText)){
		sText = "hello"
	}
	if(acceptableCommands.hasOwnProperty(sText)){
		acceptableCommands[sText]();
	} else {
		unknownCommand();
	}
}

function writeToFakeConsole(sText, sPrefix = ""){
	$('#log').append('<br>' + sPrefix + sText).scrollTop(1E10);
}
