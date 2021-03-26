## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
    - This is your pseudocode
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps

HTML
1. Page layout (title, header, footer?, etc.)
2. Explain the rules (paper beats rock, rock beats scissors, 3. scissors beats papers), an HTML List might be a good semantic choice.
3. Radio buttons with same name for grouping for choosing rock, paper, or scissors (images anyone?)
4. Button for "Play"
5. Display of wins and losses and draws
6. Display of result of each game (can be text and/or images), should indicate what the computer threw and what the result was (win, loss, draw)

Initilize
1. Wins
2. Draws
3. Total
4. Computer throw

Events
1. Computer throws (rock, paper, scissor)
2. Get user guess
3. Compare user v. computer
4. Display winner
5. Increment wins, increment draws
6. Incrment total 
7. Display new values
8. Reset button
