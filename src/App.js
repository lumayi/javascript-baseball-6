import Baseball from './Baseball';
import Computer from './Computer';
import InputView from './view/InputView';

class App {
  async play() {
    const computer = Computer.getComputerNumber();
    const user = await InputView.getUserNumbers();
    const baseball = new Baseball(computer, user);
  }
}

export default App;
