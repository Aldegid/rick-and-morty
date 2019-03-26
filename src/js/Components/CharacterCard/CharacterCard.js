import Component from "../../framework/Component";
import DataService from "../../Services/DataService"

export default class Users extends Component {

    constructor(host, props) {
        super(host, props);
        console.log(props);
        this.userId = props.id - 1;
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
          console.log(this.state.apiData.results[this.userId]);
          const currentPerson = this.state.apiData.results[this.userId];
          return {
            tag: 'div',
            classList: ['card', 'card-img-top'],
            content: `
            <img src="${currentPerson.image}">
            <p class="card__item name">${currentPerson.name}</p>
            <p class="card__item">${currentPerson.gender}</p>
            <p class="card__item">${currentPerson.species}</p>
            <p class="card__item">Location: ${currentPerson.location.name}</p>
            `

          }

        } else {
          return 'LOADING...'
        }
    }

}
