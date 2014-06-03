// This is a solo challenge

// Your mission description:
// 
// The mission is that the knight Tharin needs to escape
// the castle. He needs to steal a horse in the stable 
// across the field. However, in order to get the horse
// to go with him, he needs to pick up the apple that is
// located in the middle of the field. Then persuades the 
// horse with the apple to ride the horse. Tharin then rides
// off.
// 
// 

// Pseudocode
// Move up 2x
// Move right 2x
// Pick up apple
// Move right 2x
// Move Up 1x
// Present apple
// Say "Here horsey- I have a treat for you!"
// Give apple to horse
// While distracted, get on horse
// 
// 
// 

// Initial Code

this.moveUp();
this.moveUp();
this.moveRight();
this.pickApple();
this.moveRight();
this.moveRight();
this.moveUp();
this.showApple();
this.say("Here horsey- I have a treat for you!");
this.giveApple();
this.getonHorse();
this.rideaway();


// Refactored Code

var knight = {
	move = function(direction) {
		[INSERT CODE];
	}
	say: function(sentence) {
		console.log("Here horsey- I have a treat for you!");
	}
	pickApple: function() {
		[INSERT CODE];
	}
	giveApple: function() {
		[INSERT CODE];
	}
	showApple: function() {
		[INSERT CODE];
	}
	getonHorse: function() {
		[INSERT CODE];
	}
}

var horse = {
	rideaway: function() {
		[INSERT CODE];
	}
}

knight.move('up');
knight.move('up');
knight.move('right');
knight.pickApple();
knight.move('right');
knight.move('right');
knight.move('up');
knight.showApple();
knight.say("Here horsey- I have a treat for you!");
knight.giveApple();
knight.getonHorse();
horse.rideaway();





// Reflection
// This challenge was difficult for me and I believe it's because
// I don't understand Js still. I definitely need go buy the buy 
// and work on some Js exercises to. I know my code probably doesn't
// work, so I feel this was too big of a learning leap for me. What I
// enjoyed about this game was designing the game, which further 
// makes me want to look into UX design as a possible career goal.
// 
// 
// 
// 
// 
// 