import {SHOW_MODAL_TRUE, SHOW_MODAL_FALSE} from "../actionsTypes";
import {Record} from "immutable";

const ReducerRecordModal = Record({
    showModal: false
});

export default function reducer(state = new ReducerRecordModal(), {type}) {

    switch (type) {
        case SHOW_MODAL_TRUE:
            return state
                .set('showModal', true);
        case SHOW_MODAL_FALSE:
            return state
                .set('showModal', false);

        default:
            return state
    }
}
