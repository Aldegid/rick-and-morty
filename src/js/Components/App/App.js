import Component from "../../framework/Component";
import {Characters} from "../../Components/Characters";
import {CharacterCard} from "..//CharacterCard/";




export default class App extends Component {
  constructor(host) {
    super(host);
  }

  render() {

    return [

      {
        tag: 'div',
        classList: ['container'],
        children: [
          {
            tag: 'div',
            classList: ['row'],
            children: [{
              tag: 'div',
              classList: ['col-4'],
              children: [
                {
                  tag: Characters
                },
                {
                  tag: CharacterCard
                }
              ]

            }]
          }
        ]
      }

    ];


  }
}
