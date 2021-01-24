<p align="center">
<img src="https://github.com/drawwithcode/2020-asmr-final/blob/master/public/assets/images/readme/cover_small.gif"
</p>

# Mouse Party

**Table of Contents**

1. [The Project](#the-project)<br>1a. [Context](#context)<br>1b.[Concept](#concept)<br>1c. [Overview](#overview) <br>&ensp;▪ [Architecture](#architecture)<br>&ensp;▪ [Functioning](#functioning)<br>&ensp;▪ [Visuals](#visuals)<br>&ensp;▪ [Sounds](#sounds)

3. [Design Challenges](#design-challenges)<br>2a. [Instructions](#instructions)<br>2b.  [Contextualize](#contextualize)<br>2c.  [Input](#input)<br>2d. [Solo Mode](#solo-mode)

4. [Coding Challenges](#coding-challenges)<br>3a. [Beatmap](#beatmap)<br>3b. [Cursors](#cursors)<br>3c. [Collision](#collision)<br>3d. [User Connection](#user-connection)

5. [Tools](#tools)

6. [References](#references)

7. [Credits](#credits)

## The Project
Mouse Party is a desktop game designed to celebrate New Year's Eve together.

### Context
2020 has been the year of this big, scary pandemic that is still not over. In 2020 we had to give up gatherings in order to stop the spreading of this virus. We wanted to have a virtual place where people could gather together once again to celebrate and we wanted to stress how collaboration brings good things. We rely on word of mouth and shares on social media and instant messagging apps in order to spread the game.

### Concept
We weren’t sure whether we would have been able to celebrate New Year’s Eve together with our friends, so we thought we could design an interactive experience online which would recall two of the symbols of New Year’s Eve. We put fireworks and dances together and we got Mouse Party, a virtual place where you can create fireworks "dancing" with friends or strangers, following the rhythm of the music.
People can play with Mouse Party alone, but the full experience is designed to be enjoyed by multiple users - simple movements can become something intricate and beautiful thanks to collaboration among players.

### Overview
The site features two rooms with a music track each and its beatmap. The beatmap is mirrored around the center point of the window, one reflection for each player, so that the final result is reminiscent of New Year’s Eve fireworks. The scope is to interact with other players and execute a choreography by following the beatmap and the rhythm with the focus on the collaboration. The game can be played from any device with a pointing device (a mouse, a trackpad, a graphic tablet). 

<p align="center">
<img src="https://github.com/drawwithcode/2020-asmr-final/blob/master/public/assets/images/readme/gameplay_1.gif"
</p>

* #### Architecture<br>
The website has a landing page, two interactive rooms and a solo mode room. The landing page has an icon indicator for the users dancing in each room, three buttons for joining the different rooms, an info button and a watch button.
The user is greeted by a welcome message with a short tutorial, that can be recalled clicking on the info button in the upper right corner. Credits are at the end of the tutorial.
When landing on the website, the user will be able to see what's happening in the «party room» but it will be darkened by an overlay. By clicking the watch button the user will be able to see what's happening without this «screen».
In each room the user will find the game and the home button.

<p align="center">
<img src="https://github.com/drawwithcode/2020-asmr-final/blob/master/public/assets/images/readme/tutorial.png"
</p>

* #### Functioning<br>
The interaction is mostly real-time. Users can join in different moments and inputs from the users will be mirrored around a central point. Based on the number of users in the room, the angle of different inputs will increase or decrease (360°/no. of users).  The instructions that the user has to follow will always be on the 0° angle, while the other users are shown as translated. <br>When the users are alone in the room they can still play, but a pop-up will suggest inviting a few friends in order to make the experience more enjoyable.

* #### Visuals
We chose a neon noir visual feel: neon colors on a blue night background, inspired by fireworks. The player’s cursor is always shown in white while the other players get randomly assigned one out of 9 colors.

* #### Sounds
We added fireworks sound effects when clicking on the beatmap and when sliding down the sliders. We chose to use electronic open source music.


## Design Challenges

### Instructions
We coded circles on the beats and at the beginning and the end of the sliders. These circles shrink showing the user when to click and have a hint about the speed, the rhythm. We also added a visual feedback (the circle turning blue) if the timing was correct - according to the learning by doing approach.

<p align="center">
<img src="https://github.com/drawwithcode/2020-asmr-final/blob/master/public/assets/images/readme/feedback.gif"
</p>

### Contextualize
We decided to add an illustration for context. Its main purpose is to distinguish the interactive area from the rest of the webpage. This illustration has fixed dimensions and according to the resolution on the screen, users will see it with different levels of zoom.

<p align="center">
<img src="https://github.com/drawwithcode/2020-asmr-final/blob/master/public/assets/images/readme/context.gif"
</p>

### Input
We wanted to have an alternative to the left-click input (in order to make the gameplay suitable also for trackpads). We decided to go for an input from the spacebar (that works just like a left-click)

### Solo Mode
What would happen if only a player was online? 	Although we wanted Mouse Party to be a collaborative experience, we also wanted to give the people a chance to see what they could achieve with many players, therefore we created a "solo" room, where users can see the result with their cursor rotated 8 times.

## Coding Challenges

### Beatmap
We decided to have a single beatmap that didn't have to be rotated or moved. In order to make it possibile, we chose to keep the user in a fixed position, while rotating the cursors of other connected players.

We then had to make the choreography uniform from different screen sizes. At first we made a grid and remapped everything, but then we realized collision wasn't working on scaled p5.play Sprites - which we used to create the sliders - therefore we couldn't make the beatmap responsive. We managed to work around the problem putting the beatmap in an iframe with fixed dimensions (800x800px) and we added an illustration for context, in order to make it look nicer.

We also implemented a system to show the user when the execution of the betmap is correct. The sliders' sprites are made up by an animation made up of two different frames: the first one is the regular slider, the second one is colored with blue and the animation is called when the input and the timing is correct.


```javascript
...
      else if(this.type == 'slider'){
        this.beatSprite = createSprite(this.cornerX+sliderSizeX[this.sliderType-1]/2, this.cornerY+sliderSizeY[this.sliderType-1]/2);
        this.beatSprite.addAnimation('hit', sliderImg[this.sliderType-1]);
        this.beatSprite.animation.stop();
        this.beatSprite.animation.changeFrame(0);
      }
      
...

    if (this.beatCollide){
...
this.beatSprite.animation.changeFrame(1)
...}
```

### Cursors
We had to find a way in order to avoid showing in the "Room 1" iframe the cursor of the user who just landed on the page. We hide the cursor, making a boolean variable that turns true when the user clicks on the button to join the room, and when this variable is true, the cursor turns visible. Moreover, when the variable is false, the rotation angle is calculated without counting the user's cursor, otherwise - when the variable is true - the rotation angle keeps into consideration the user's cursor too.

```javascript
...
// playerIn checks if the player has joined the room or is just a spectator
  if (playerIn == true) {
    drawSprites();

    // display myCursor and send the information
    myCursor.update();
    myCursor.display();
    socket.emit("mouse", mousePosition);

    // display the cursors of other players
    for(var i = 0; i < otherCursors.length; i++) {
      push();
      // rotation angle defined by the amount of players connected
      rotate((360 / (otherCursors.length + 1) * (i + 1)));
      otherCursors[i].display();
      otherCursors[i].update();
      pop();
    }
...
```

### Collision
Collision in p5.collide2D did not fit for our project since it allowed us to have collisions on basic shapes only, while we needed to follow the sliders shape (often a curve). We ended up implementing collision with the overlapPixel function of p5.play, creating png files with the background color in the collision area.

```javascript
...
    //check collision on 4 points arount the pointer (allows for more forgiving inputs)
    this.beatCollideA = this.beatSprite.overlapPixel(mouseX-width/2+inputSize, mouseY-height/2+inputSize);
    this.beatCollideB = this.beatSprite.overlapPixel(mouseX-width/2-inputSize, mouseY-height/2+inputSize);
    this.beatCollideC = this.beatSprite.overlapPixel(mouseX-width/2-inputSize, mouseY-height/2-inputSize);
    this.beatCollideD = this.beatSprite.overlapPixel(mouseX-width/2+inputSize, mouseY-height/2-inputSize);
    this.beatCollideMain = this.beatSprite.overlapPixel(mouseX-width/2, mouseY-height/2);
    if (this.beatCollideA || this.beatCollideB || this.beatCollideC || this.beatCollideD || this.beatCollideMain){
      this.beatCollide = true;
    }
    else{this.beatCollide = false}
...
```

### User Connection
We had to manage user connection at different moments without getting the song to start back from the beginning. We managed to make the song start on the first user, then the following users will inherit the ability to emit time from the first user who joined the room. In this way we let the song continue even if the first user logs off.

After that, we had to solve a small bug we encountered: the user icons were flickering and do not respond correctly to log-ins and log-puts from the users. We solved it sending the delete cursor message  a second time, just after 0.5 from the first one.

```javascript
...
// join the selected room
  socket.on('subscribe', function (room) {
    socket.join(room);
  });

  // receive the time of the track and send it to every player in that room
  socket.on("where", function (data) {
    console.log(data);
    io.to(data.room).emit("current", data.times);
  });
  
...

// set the time of the song to get at the same point of other players
socket.on("current", function (data) {
  var diff = audio.currentTime - data;
  if (diff < 0 || diff > 2) {
    audio.currentTime = data;
  }
  audio.ontimeupdate = function () {
    socket.emit("where", {times: audio.currentTime, room: roomname});
  };
});

socket.on("playsong", function (data) {
  audio.currentTime = data.times;
  audio.play();
});
```

 ## Tools
* P5.js
* P5.play
* Node.js
* Socket.io
* Express.js<br><br>
* Github
* Heroku<br><br>
* osu!

 ## References

 * StackOverflow.com
 * w3schools.com

## Credits
#### Music
&ensp;Room 1 + Solo Mode Room<br>
&ensp;&ensp;"Musik liegt in der Luft" by Phillip Gross [(CC BY-NC-SA 3.0)](https://creativecommons.org/licenses/by-nc-sa/3.0/)<br>
&ensp;&ensp;[freemusicarchive.org](https://freemusicarchive.org/home)<br>
&ensp;Room 2:<br>
&ensp;&ensp;"Fireworks" by Alexander Nakarada [(CC 0 1.0)](https://creativecommons.org/publicdomain/zero/1.0/deed.it)<br>
&ensp;&ensp;[https://freepd.com](https://freepd.com/electronic.php)
<br>
#### Sound Effects
[fesliyanstudios.com,](https://fesliyanstudios.com/)<br>
[audiomicro.com,](https://audiomicro.com/)<br>
[bigsoundbank.com,](https://bigsoundbank.com/)<br>
[freemusicarchive.org](https://freemusicarchive.org/home)<br>
<br>
<br>
Coded with ♥ by ASMR | Andrea Bellavita, Nicole Moreschi, Riccardo Rigamondi, Sharon Manfredi

**Creative Coding 2020/2021** (https://drawwithcode.github.io/)<br>
Politecnico di Milano - School of Design<br>
Faculty: Michele Mauri, Tommaso Elli, Andrea Benedetti
