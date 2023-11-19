import Baseball from './Baseball.js';
import Computer from './Computer.js';
import InputView from './view/InputView.js';

class App {
  async play() {
    const computer = Computer.getComputerNumber();
    const baseball = new Baseball(computer);
    baseball.playBall();
  }
}
const app = new App();
app.play();
export default App;
