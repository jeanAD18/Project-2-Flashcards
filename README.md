# Web Development Project 2 - *Soccer Logos Challenge*

Submitted by: **Jeancarlo Almario**

This web app: **is a flashcard-style quiz that tests your knowledge of soccer team logos. Click on a card to reveal the team name and click "Next" to move to the next logo.**

Time spent: **5** hours spent in total

## Required Features

The following **required** functionality is completed:

- [x] **The app displays the title of the card set, a short description, and the total number of cards**
  - [x] Title of card set is displayed
  - [x] A short description of the card set is displayed
  - [x] A list of card pairs is created
  - [x] The total number of cards in the set is displayed
  - [x] Card set is represented as a list of card pairs (an array of dictionaries where each dictionary contains the question and answer is perfectly fine)
- [x] **A single card at a time is displayed**
  - [x] Only one half of the information pair is displayed at a time
- [x] **Clicking on the card flips the card over, showing the corresponding component of the information pair**
  - [x] Clicking on a card flips it over, showing the back with corresponding information
  - [x] Clicking on a flipped card again flips it back, showing the front
- [x] **Clicking on the next button displays a random new card**

The following **optional** features are implemented:

- [x] Cards contain images in addition to or in place of text
  - [x] All cards use soccer team logos as images
- [ ] Cards have different visual styles such as color based on their category

The following **additional** features are implemented:

- [x] Smooth flip animation using CSS `transform: rotateY`
- [x] Responsive layout using Flexbox
- [x] Reset to first card after reaching the end

## Video Walkthrough

Here's a walkthrough of implemented required features:

<img src='./src/assets/2025-06-16 23-54-21.gif' title='Video Walkthrough' width='600' alt='Video Walkthrough' />


## Notes

One challenge was implementing a realistic card-flip animation with React and syncing it correctly with the state. Also had to adjust the card size and centering using Flexbox to make it work across different screen sizes.

## License

    Copyright 2025 Jeancarlo Almario

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.