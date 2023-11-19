import Baseball from './Baseball.js';

class App {
  async play() {
    const baseball = new Baseball();
    await baseball.playBall();
  }
}

export default App;
