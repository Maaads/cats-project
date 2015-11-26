import alt from '../../alt';
import modalActions from './actions';


class modalStore {
    constructor() {
        this.bindActions(modalActions);

        this.open = false;
        this.type = false;
    }

    onOpen(data) {
        this.setState({
            open: true,
            type: data.type
        });
    }

    onClose() {
        this.setState({
            open: false,
            type: false
        });
    }
}

export
default alt.createStore(modalStore);