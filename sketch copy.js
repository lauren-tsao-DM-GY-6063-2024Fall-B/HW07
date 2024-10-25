let mStrings = [];

function preload() {
  mStrings = loadStrings("../assets/BeStillMyHeart_lyrics.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  textSize(16);
  
  for (let idx = 0; idx < mStrings.length; idx++) {
    let wordHeart = mStrings[idx];
    let pos = map(idx, 0, mStrings.length, 0, height);
    
    // Set text size to 64 px for line 25 (index 24)
    if (idx === 17) {
      textSize(64);
    } else {
      textSize(16);
    }
    
    text(wordHeart, width / 2, pos);  // Displaying the actual lyric
  }
}

function draw() {}
