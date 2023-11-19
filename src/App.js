import InputView from './view/InputView';

class App {
  async play() {
    const user = await InputView.getUserNumbers();
  }
}

export default App;
