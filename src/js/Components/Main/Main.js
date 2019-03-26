import Component from "../../framework/Component";
import imgMain from "../../../img/rick_and_morty.jpg";

export default class Main extends Component {

    constructor(host, props) {
        super(host, props);
    }

    render() {
        return `
        <h2 class="h2">Select a character to get information about him</h2>
        <img class="img-responsive" src="${imgMain}">
        `
    }
}
