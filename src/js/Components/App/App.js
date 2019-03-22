import Component from "../../framework/Component";
import {Characters} from "../../Components/Characters";




export default class App extends Component {
  constructor(host) {
    super(host);
  }

  render() {

    return [
      {
        tag: Characters
      }
    ];


  }
}
