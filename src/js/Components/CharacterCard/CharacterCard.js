import Component from "../../framework/Component";
import AppState from "../../Services/AppState";
import DataService from "../../Services/DataService"



export default class Characters extends Component {
  constructor(host, props) {
    super(host, props);
    this.prepareData();
    AppState.watch('SHOWTIME', this.updateMyself);


  }

  init() {
    ['prepareData','updateMyself']
    .forEach(methodName => this[methodName] = this[methodName].bind(this));
    this.state = {
      apiData : null,
      img: null

    }

  }

  prepareData() {
    DataService.getCharacters().then(data => {
      this.state.apiData = data;
      this.updateState(this.state.apiData);
    });
  }

   updateMyself(subState) {
    // .... transform response
    console.log('PNumber in CountControls', subState);
    // do update
    this.updateState(subState);
  }



  render() {
    if(this.state.id) {
      if(this.state.apiData) {
        console.log(this.state.apiData.results[this.state.id]);
        const currentPerson = this.state.apiData.results[this.state.id];
        return {
          tag: 'div',
          classList: ['card'],
          content: `
          <img src="${currentPerson.image}">
          <p class="card__item name">${currentPerson.name}</p>
          <p class="card__item">Gender: ${currentPerson.gender}</p>
          <p class="card__item">${currentPerson.species}</p>
          <p class="card__item">Location: ${currentPerson.location.name}</p>
          `

        }

      } else {
        return 'LOADING...'
      }
    } else {
      return `<h1 class="h2">Select a character to get information about him</h1>`
    }

  }
}
