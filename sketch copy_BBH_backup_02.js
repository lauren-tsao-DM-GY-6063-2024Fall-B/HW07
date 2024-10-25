let mStrings = [];
let groups = [];
let lineSpacing = 20;
let groupSpacing = 50;
let groupAlphas = [];

function preload() {
  mStrings = loadStrings("../assets/BetterBeHeaven_lyrics.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  groupLyrics();
  groupAlphas = new Array(groups.length).fill(0);
}

function draw() {
  let m = millis();
  background(220);
  textSize(16);

  let y = 20;
  for (let i = 0; i < groups.length; i++) {
    let xPosition = 10;

    if (i === 0) {
      if (m > 1000) {
        if (groupAlphas[i] < 255) {
          groupAlphas[i] += 4;
        }
      }
    } 
    
    else if (i === 1) {
      if (m > 4000) {
      if (groupAlphas[i] < 255) {
        groupAlphas[i] += 4;
      }
    }
    } 
    
    else if (i === 2) {
      if (m > 7000) {
        if (groupAlphas[i] < 255) {
          groupAlphas[i] += 4;
        }
      }
    } 
    
    else if (i === 3) {
      xPosition = 160;
      textSize(35);
      if (m > 10000) {
        if (groupAlphas[i] < 255) {
          groupAlphas[i] += 4;
        }
      }
    } 
    
    else if (i === 4) {
      xPosition = 250;
      textSize(16);
      if (m > 12000) {
        if (groupAlphas[i] < 255) {
          groupAlphas[i] += 4;
        }
      }
    } 
    
    else if (i === 5) {
      xPosition = 300;
      if (m > 14000) {
        if (groupAlphas[i] < 255) {
          groupAlphas[i] += 4;
        }
      }
    } 
    
    else if (i === 6) {
      xPosition = 350;
      if (m > 16000) {
        if (groupAlphas[i] < 255) {
          groupAlphas[i] += 4;
        }
      }
    } 
    
    else if (i === 7) {
      xPosition = 400;
      if (m > 18000) {
        if (groupAlphas[i] < 255) {
          groupAlphas[i] += 4;
        }
      }
    } 
    
    else if (i === 8) {
      xPosition = 450;
      if (m > 20000) {
        if (groupAlphas[i] < 255) {
          groupAlphas[i] += 4;
        }
      }
    } 
    
    else if (i === 9) {
      xPosition = 500;
      if (m > 22000) {
        if (groupAlphas[i] < 255) {
          groupAlphas[i] += 4;
        }
      }
    } 
    
    else if (i === 10) {
      xPosition = 600;
      textSize(70);
      if (m > 24000) {
        if (groupAlphas[i] < 255) {
          groupAlphas[i] += 4;
        }
      }
    }

    fill(0, 0, 0, groupAlphas[i]);
    displayGroup(groups[i], y, xPosition);
    y += groupSpacing + (groups[i].length - 1) * lineSpacing;
  }
}

function groupLyrics() {
  let lines = mStrings.join("\n").split("\n");
  groups.push(lines.slice(0, 4)); // 0
  groups.push(lines.slice(4, 8)); // 1
  groups.push(lines.slice(8, 10)); // 2
  groups.push(lines.slice(10, 11)); // 3 (recall)
  groups.push(lines.slice(11, 12)); // 4
  groups.push(lines.slice(12, 13)); // 5
  groups.push(lines.slice(13, 14)); // 6
  groups.push(lines.slice(14, 15)); // 7
  groups.push(lines.slice(15, 16)); // 8
  groups.push(lines.slice(16, 17)); // 9
  groups.push(lines.slice(17, 18)); // 10
  groups.push(lines.slice(18, 23)); // 11
  groups.push(lines.slice(23, 29)); // 12
}

function displayGroup(group, y, x) {
  for (let line of group) {
    text(line, x, y);
    y += lineSpacing;
  }
}
