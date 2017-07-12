var titleList = ["Honorable", "Ms.", "Mr.", "Professor", "Lady", "Duke", "Duchess"];
var adjList = ["Messy", "Nuclear", "Sunny", "Chatty", "Childish", "Smokey", "Lucky", "Suave"];
var nounList = ["Kiwi", "Mango", "Skittles", "Harley", "Phoenix", "Eagle", "Sammy", "Peaches", "Tweety", "Charlie", "Bebe", "Gizmo", "Noodles", "Odin", "Pixie", "Picles", "Zeus", "Goldie", "Robin"];
var wildcardList = ["Smith", "Tailfeathers", "the First", "Pikachu", "Chirp", "Twinkles", "Bon Bon", "Chip", "Littlefoot", "Big Bird"];


var generateNumber = function(number){
	return Math.floor(Math.random() * number);
}

var randomName = function(choice){
	var i = generateNumber(choice.length);
	var name = choice[i];
	return name;
}

var fullName = function(){
	return randomName(titleList) + " " + randomName(adjList) + " " + randomName(nounList) + " " + randomName(wildcardList);
}

$(function(){


	$('button').on('click', function(e){
		e.preventDefault();
			$('p').empty();
		$('p').html(fullName());	
	});


});