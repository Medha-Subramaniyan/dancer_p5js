# ASCII Dancer - p5.js Project

A creative p5.js application that converts video into ASCII art with audio-reactive visual effects. The project transforms video frames into colorful ASCII characters that respond to bass frequencies in music.

## Features

- **Video to ASCII Conversion**: Converts video frames into ASCII character representations
- **Audio Reactivity**: Visual effects respond to bass frequencies in the audio
- **Real-time Processing**: Live video processing with customizable frame rate
- **Color Enhancement**: ASCII characters are colored based on the original video with bass-boosted intensity
- **Responsive Design**: Adapts to different screen sizes

## Prerequisites

- A modern web browser with JavaScript enabled
- Video file: `myClip.mp4`
- Audio file: `prayer.mp3`

## Setup

1. **Clone or download** this project to your local machine
2. **Add your media files**:
   - Place your video file as `myClip.mp4` in the project root
   - Place your audio file as `prayer.mp3` in the project root
3. **Open `index.html`** in your web browser

## Usage

- **Click anywhere** on the canvas to unlock audio (required for some browsers)
- The video will automatically loop and play
- ASCII characters will respond to bass frequencies in the music
- Characters are colored based on the original video with enhanced intensity during bass hits

## Customization

You can modify the following parameters in `sketch.js`:

- **Grid density**: Change `cols` and `rows` variables
- **Frame rate**: Adjust `frameRate()` value
- **Bass sensitivity**: Modify the bass mapping in the `pop` variable
- **Character set**: Customize the `asciiChars` array for different visual effects

## File Structure

```
dancer_p5js/
├── index.html          # Main HTML file
├── sketch.js           # p5.js sketch with main logic
├── style.css           # CSS styling
├── libraries/          # p5.js libraries
│   ├── p5.min.js      # Core p5.js library
│   └── p5.sound.min.js # Audio processing library
├── myClip.mp4          # Video file (add your own)
├── prayer.mp3          # Audio file (add your own)
└── README.md           # This file
```

## Technical Details

- Built with **p5.js** for creative coding
- Uses **p5.sound** for audio analysis and FFT processing
- Processes video pixels in real-time for ASCII conversion
- Implements a brightness-to-character mapping algorithm
- Responsive grid system that adapts to canvas dimensions

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is open source and available under the MIT License.

## Contributing

Feel free to fork this project and submit pull requests for improvements or bug fixes.

---

**Note**: Make sure to add your own video and audio files before running the project. The current setup expects `myClip.mp4` and `prayer.mp3` files in the project root directory.