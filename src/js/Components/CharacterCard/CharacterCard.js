import Component from "../../framework/Component";
import AppState from "../../Services/AppState";
import DataService from "../../Services/DataService"



export default class Characters extends Component {
  constructor(host, props) {
    super(host, props);
    AppState.watch('SHOWTIME', this.updateMyself);


  }

  init() {
    ['updateMyself']
    .forEach(methodName => this[methodName] = this[methodName].bind(this));
    this.state = {
      apiData : null,
      img: null

    }

  }
   updateMyself(subState) {
    // .... transform response
    console.log('PNumber in CountControls', subState);
    // do update
    this.updateState(subState);
  }



  render() {
    return [ 
    {
      tag: 'div',
      content: `<img src="${this.state.img}">`
    }
    ]
  }
}
