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
        classList: ['container-fluid'],
        children: [
          {
            tag: 'div',
            classList: ['row'],
            children: [{
              tag: 'div',
              classList: ['col-5', 'col-sm-4'],
              children: [
                {
                  tag: Characters,
                }
              ]

            },
            {
              tag: 'div',
              classList: ['col-7', 'col-sm-8'],
              children: [
                {
                  tag: CharacterCard
                }
              ]
            }
          ]
          },
        ]
      }

    ];


  }
}
