import Component from "../../framework/Component";

import img404 from "../../../img/oops.jpg";

export default class NotFound extends Component {

    constructor(host, props) {
        super(host, props);
    }

    render() {
        return [
            `<h2 class="h2">Oops, Page not found...</h2>
            <img class="img-responsive" src="${img404}">
            `
        ]
    }
}
