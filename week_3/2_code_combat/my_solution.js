// I worked on this challenge [by myself, with:] 
I worked on this challenge by myself
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 
 
//RELEASE 1 & 2

// RESCUE MISSION
// move down x2
// move right 1x
// move up x2
// move right x2
// move down 1x
// ATTACK!
this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

// GRAB THE MUSHROOM
// move up 1x
// move right 1x
// move left 1x
// move up 1x 
// ATTACK!
this.moveUp();
this.moveRight();
this.moveLeft();
this.moveUp();
this.attackNearbyEnemy();

// DRINK ME
// move right 1x
// Attack
// move right 1x
// move down 1x
// move up 1x
// move right 1x
// Attack 
// move right 1x
this.moveRight();
this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();
this.moveRight();

// TAUNT THE GUARDS
// move right 1x
// bust DownDoor 1x
// move right 1x
// say something 1x
// move left 2x
// Attack
// move right 1x
// say something 1x
// move right 2x
// move up 1x
// move right 1x
// say something 1x
// move down 1x
// move right 1x
// move up 1x
// move right 2x
this.moveRight();
this.bustDownDoor();
this.moveRight();
this.say("Hey there!");
this.moveLeft();
this.moveLeft();
this.say("Attack!");
this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("Hey There!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();
this.moveRight();


// IT'S A TRAP
// move down 2x
// say something 1x
// move up 1x
// say something 1x
// move up 1x
this.moveDown();
this.moveDown();
this.say("Hey There!");
this.moveUp();
this.say("Attack!");
this.moveUp();


// BREAK THE PRISON
// If name is 'William'
// 	breakdown door (return true)
// If name is 'Krogg'
// 	skip door (return false)
// If name is 'Lucas'
// 	breakdown door (return true)
// If name is 'Brack'
// 	skip door (return false)
// If name is 'Marcus'
// 	breakdown door (return true)
// If name is 'Gordon'
// 	breakdown door (return true)
if(name === "William")
    return true;
if(name === "Krogg")
    return false;  
if(name === "Lucas")
    return true;
if(name === "Brack")
    return false;
if(name === "Marcus")
    return true;
if(name === "Gordon")
    return true;


// TAUNT 
// say something (taunt) 4x
 this.say("Chicken!");
 this.say("Hey!");
 this.say("Stupid!");
 this.say("Come and get me!");


// COWARDLY TAUNT
// move to location (50, 16) 
// move to location (63, 20)
// say something 1x 
// move to location (70, 10)
this.moveXY(50, 16);
this.moveXY(63, 20);
this.say("I can lure them in here.");
this.moveXY(70, 10); 


// COMMANDING FOLLOWERS
// move to location (49, 66)
// move to location (60, 63)
// move to lcoation (75, 63)
// say something 1x
// move to location (74, 42)
// say something 1x
this.moveXY(49, 66);
this.moveXY(60, 63);
this.moveXY(75, 63);
this.say("Follow me!");
this.moveXY(74, 42);
this.say("Attack!");

 
// MOBILE ARTILLERY
// move to location (30, 26) 
// aim and attack at this location (46, 5) 
// move to location (46, 40)
// aim and attack at this location(69, 56)
// aim and attack at this location(57, 48)
// aim and attack at this location(50, 68)
// aim and attack at this location(48, 49)
this.moveXY(30, 26); 
this.attackXY(46, 5);  
this.moveXY(46, 40);
this.attackXY(69, 56);
this.attackXY(57, 48);
this.attackXY(50, 68);
this.attackXY(48, 49);

//RELEASE 3:
//What is 'this' referring to? Think programming-wise rather than in the terms of the game.
	//Methods following 'this' object determines the scope the function applies to.
//What does the () do in JavaScript?
	//Calls a function
//What is the point of the semicolons?
	//End a statement.

// REFLECT:
// I had a great time playing the game. I liked how
// the game required me to break down the steps and 
// forced me not to jump to quickly, otherwise I 
// missed a step and had to go back and edit my 
// code to complete the challenge.
