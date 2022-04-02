# Pre-work - _Memory Game_

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Yansong Liu**

Time spent: **6** hours spent in total

Link to project: https://glitch.com/edit/#!/aluminum-silk-parenthesis

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [x] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

Required: 1, 3
Optional: 1, 2, 3, 7

![](https://i.imgur.com/dzL4TPF.gif)

Required: 2

![](https://i.imgur.com/s9ccuay.gif)

Required: 7
Optional: 6

![](https://i.imgur.com/QyXo1yk.gif)

Required: 6

![](https://i.imgur.com/mfsZyuU.gif)


Optional: 9

![](https://i.imgur.com/u68YHcf.gif)


Optional: 5

![](https://i.imgur.com/GYLijqE.gif)

Required: 4, 5
Optional: 4

![](https://i.imgur.com/LbDKlTZ.gif)


## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.
   
   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   
   https://www.w3schools.com/cssref/pr_background-image.asp
   
   https://www.w3schools.com/jsref/met_win_setinterval.asp
   
   https://www.w3schools.com/jsref/met_win_clearinterval.asp

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)
   
   I had very little experience with css, html, and javascript before doing this project, so I had to study for everything while working for
   the project. Luckily, the specifications and guidelines led me through finishing the basic version smoothly. However, I decided to do the optional
   works, which were quite challenging for a starter. I was not familiar with the embedded functions of javascript, but thanks to my
   previous knowledge of other programming languages, such as java, C, and python, I came up with the general idea quickly, and with the ability
   to read official documentations and searching for information efficiently on internet, I rapidly learned those new knowledge and completed
   the first three optional parts. I got stuck at the fourth part for a little bit because I had a different idea in comparison to the guildeline.
   I was thinking of recording the user guess as an array and comparing it to the pattern. After using forward reasonning to help understand the logic,
   I figured out the suggested implementation. Also with the help of the console of developer tool, I printed out the variable values to ensure the
   correcness and avoided potential bugs. I got stuck for a long time on optional part 5, I did lots of research on Google and still didn't figure out the
   suggested method. Finally, I brainstormed a few other implementations (such as using background in css and adding a showPicture function in javascript),
   which does the same work as img tag.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)
   
   From the programmer perspective:
   
   Although it's a good way to split the work into smaller parts and solve them, using 3 syntaxs to accomplish one goal is too complicated,
   why don't we invent a new language that combine the functionality of css, html, and javascript so that we can do web programming more efficiently?
   
   Human are always pursueing beauty all the time, how can we make our web prettier? Are there any fonts, typesetting, and/or UI suggestions?
   
   Currently we are doing all the front-end work, we might need to utilize the back-end data sometime in the future, how can we connect the
   front-end to the back-end?
   
   From the user perspective:
   
   It's very important to make the technology accessible, we need to think of the users who might have disabilities, for example people with visual
   impairment or hearing impairment might not able to play our game, how can we make the game accessible to them?

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)
   
   It's important to avoid redundancy and make our work more readible, I realized there are lots of duplicated works when I created those game buttons,
   and I think it's possible to utilize the inheritance to make the work more clean, so I would fix those reduncancy if I had a few more hours.
   Also, I want to add an additional function, since we already have a clock to count the time left, we can calculate people's scores based on their
   time spent for a game and generate a leader board to make the game more interactive. Also, it's possible to make the game even harder by letting the
   users follow the length each pitch was played, making such change could make the game more interesting. 

## Interview Recording URL Link

[My 5-minute Interview Recording](https://www.loom.com/share/7004551f0253496c9330896bd7bded0e)

## License

    Copyright [Yansong Liu]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
