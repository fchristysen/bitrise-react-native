import { Container } from "unstated";

class BuildContainer extends Container {
    state = [];
    addBuild (build) {
        this.setState([...this.state, build]);
    }
}