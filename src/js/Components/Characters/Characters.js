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
      id: null,

    }

  }

  prepareData() {
    DataService.getCharacters().then(data => {
      this.state.apiData = data;
      this.updateState(this.state.apiData);
    });
  }
  showCharCard(e) {
    //console.log(e.target.getAttribute('data-id'));
   AppState.update('SHOWTIME', {
      img: this.state.img,
      id: e.target.getAttribute('data-id')
    });
  }

  render() {

    if(this.state.apiData) {
      //console.log(this.state.apiData);
    const arr = this.state.apiData.results;

      return arr.map(item => {
       // console.log(item)
        return {
          tag: 'div',
          eventHandlers: {
            click: this.showCharCard,
        },
          children: [
            {
              tag: 'div',
              classList: ['char'],
              content: item.name,
              attributes: [{
                name: 'data-id',
                value: item.id - 1
              }
              ]

            }
          ]
        }
      })
    } else {
      return `'LOADING...!'`
    }
  }
}
