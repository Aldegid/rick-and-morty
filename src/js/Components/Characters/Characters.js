import Component from "../../framework/Component";
import AppState from "../../Services/AppState";
import DataService from "../../Services/DataService"



export default class Characters extends Component {
  constructor(host, props) {
    super(host, props);
    this.prepareData();


  }

  init() {
    ['prepareData', 'showCharCard']
    .forEach(methodName => this[methodName] = this[methodName].bind(this));
    this.state = {
      apiData : null,
      img: null,
      name: null,

    }

  }

  prepareData() {
    DataService.getCharacters().then(data => {
      this.state.apiData = data;
      this.updateState(this.state.apiData);
    });
  }
  showCharCard() {

   AppState.update('SHOWTIME', {
      img: this.state.img
    });
  }

  render() {

    if(this.state.apiData) {
      console.log(this.state.apiData);
    const arr = this.state.apiData.results.map(item => {
      //this.state.img = item.image;
      return item.name
    })
      return arr.map(item => {
        return {
          tag: 'div',
          classList: ['char'],
          content: item,
          eventHandlers: {
            click: this.showCharCard,
        },
        }
      })
    } else {
      return 'OH NOOOO!'
    }
  }
}
