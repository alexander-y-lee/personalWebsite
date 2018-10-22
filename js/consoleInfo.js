"use strict";

var previousCommands=[];

var greetings = ["hello!", "hey!", "sup", "hey there", "oh hey", "oh hi", "haha hey", "howdy"];

var confusion = ["huh?", "uhhhh...", "what?", "wh- uh... huh?", "i uh.... what?"];


var acceptableCommands = {
	"hello": writeRandomGreeting,
	"who are you": revealSelf,
	"help": printHelp
}

function writeRandomGreeting(){
		writeToFakeConsole(greetings[Math.floor(Math.random()*(greetings.length-1))]);
		
}

function unknownCommand(){
	writeToFakeConsole(confusion[Math.floor(Math.random()*(confusion.length-1))]);
	writeToFakeConsole("I don't recognize that command.");
}

function revealSelf(){
	writeToFakeConsole(specialImage);
	writeToFakeConsole("I'm Alexander Lee!");
}

function printHelp(){
	writeToFakeConsole("########################################");
	writeToFakeConsole("Here is a list of accepted commands, try them out!");
	for (var property in acceptableCommands) {
    	if (acceptableCommands.hasOwnProperty(property)) {
       		writeToFakeConsole(property, "- ");
    	}
    }
    writeToFakeConsole("########################################");
	
}