import { createStore } from 'vuex'
import  journal from "../modules/daybook/store/journal/index";

// Create a new store instance.
const store = createStore({
    modules: {
        journal,
    }
})

export default store
