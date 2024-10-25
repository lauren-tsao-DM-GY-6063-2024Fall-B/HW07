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
  groups.push(lines.slice(0, 4)); //0
  groups.push(lines.slice(4, 8)); //1
  groups.push(lines.slice(8, 10));//2
  groups.push(lines.slice(10, 11));//3
  groups.push(lines.slice(11, 12));//4
  groups.push(lines.slice(12, 13));//5
  groups.push(lines.slice(13, 14));//6
  groups.push(lines.slice(14, 15));//7
  groups.push(lines.slice(15, 16));//8
  groups.push(lines.slice(16, 17));//9
  groups.push(lines.slice(17, 18));//10
  groups.push(lines.slice(18, 23));//11
  groups.push(lines.slice(23, 29));//12

  // Display the groups
  let y = 20;
  for (let i = 0; i < groups.length; i++) {
    let xPosition = 10;
    if (i === 2) {
      xPosition = 100;
    } 
    
    else if (i === 3) {
      xPosition = 100;
      textSize(20)
    }

    else if (i === 4) {
      xPosition = 250;
    }

    else if (i === 5) {
      xPosition = 300;
    }

    else if (i === 6) {
      xPosition = 350;
    }

    else if (i === 7) {
      xPosition = 400;
    }

    else if (i === 8) {
      xPosition = 450;
    }

    else if (i === 9) {
      xPosition = 500;
    }

    else if (i === 10) {
      xPosition = 550;
    }

    
    else if (i === 11) {
      xPosition = 500;
    }

    // else if (i === 5) {
    //   xPosition = 600;
    // }
    
    // else if (i === 6) {
    //   xPosition = 700;
    // }
    
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
