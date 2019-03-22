import Component from "../../framework/Component";
import AppState from "../../Services/AppState";
import DataService from "../../Services/DataService"



export default class Characters extends Component {
  constructor(host, props) {
    super(host, props);
    this.prepareData();


  }

  init() {
    ['prepareData']
    .forEach(methodName => this[methodName] = this[methodName].bind(this));
    this.state = {
      apiData : null,

    }

  }

  prepareData() {
    DataService.getCharacters().then(data => {
      this.state.apiData = data;
      this.updateState(this.state.apiData);
    });
  }


  render() {

    if(this.state.apiData) {
    console.log(this.state.apiData.results)
      return this.state.apiData.results.map(elem => {
      })
    } else {
      return 'OH NOOOO!'
    }
  }
}
