let video;
// a long density ramp (darkest → lightest), reversed below
const ramp = ' .\'^",:;Il!i~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$';
// reverse it so index 0 is darkest (’@’) and last is lightest (’ ’)
const asciiChars = ramp.split('').reverse();

// audio
let song, fft;

function preload() {
  song = loadSound('prayer.mp3');
}

function setup() {
  createCanvas(360, 640);
  noStroke();
  // make the glyphs BIGGER so you actually see them
  textFont('monospace');
  textSize(12);
  textAlign(LEFT, TOP);
  frameRate(15);

  // video
  video = createVideo(['myClip.mp4'], () => {
    video.size(width, height);
    video.volume(0);
    video.loop();
    video.hide();
  });

  // audio analyser
  fft = new p5.FFT();
  fft.setInput(song);
  song.loop();
}

function draw() {
  background(0);
  video.loadPixels();

  // read bass and turn into a “pop” factor
  let bass = fft.getEnergy('bass') / 255;       // 0–1
  let pop  = map(bass * bass, 0, 1, 1, 8);       // square for curve

  // grid
  const cols  = 45;
  const rows  = floor((cols * height) / width);
  const cellW = width  / cols;
  const cellH = height / rows;

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      const px  = floor(x * cellW);
      const py  = floor(y * cellH);
      const idx = (py * video.width + px) * 4;

      // sample color & brightness
      const r = video.pixels[idx];
      const g = video.pixels[idx + 1];
      const b = video.pixels[idx + 2];
      const bright = (r + g + b) / 3;

      // map brightness → index in our reversed ramp
      const ci = floor(map(bright, 0, 255, 0, asciiChars.length - 1));
      const c  = asciiChars[ci];

      // draw in the video’s color, boosted by bass
      fill(
        min(r * pop, 255),
        min(g * pop, 255),
        min(b * pop, 255)
      );
      text(c, x * cellW, y * cellH);
    }
  }
}

// click to unlock audio
function mousePressed() {
  const ac = getAudioContext();
  if (ac.state !== 'running') ac.resume();
}