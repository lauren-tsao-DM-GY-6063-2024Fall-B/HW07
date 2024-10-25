let mStrings = [];
let groups = []; // Array to hold the groups of lines
let lineSpacing = 20; // Fixed spacing between lines within a group
let groupSpacing = 50; // Fixed spacing between groups

function preload() {
  mStrings = loadStrings("../assets/BetterBeHeaven_lyrics.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  textSize(16); // Set the default text size

  // Split into lines
  let lines = mStrings.join('\n').split('\n');

  // Define groups
  groups.push(lines.slice(0, 4));
  groups.push(lines.slice(4, 8)); 
  groups.push(lines.slice(8, 11)); // This is the group we want to reposition
  groups.push(lines.slice(11, 17));
  groups.push(lines.slice(17, 20)); 
  groups.push(lines.slice(22, 27));

  // Display the groups
  let y = 20; // Starting y position
  for (let i = 0; i < groups.length; i++) {
    let xPosition = 10; // Default x position
    if (i === 2) { // Check if it's the group containing lines 8 to 11
      xPosition = 100; // Change to your desired x position
    }
    displayGroup(groups[i], y, xPosition);
    y += groupSpacing + (groups[i].length - 1) * lineSpacing; // Adjust for group spacing
  }
}

function displayGroup(group, y, x) {
  for (let line of group) {
    text(line, x, y);
    y += lineSpacing; // Use fixed line spacing
  }
}

function draw() {}
