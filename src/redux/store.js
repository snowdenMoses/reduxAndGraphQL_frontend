import { createStore } from "redux";

import {fetchBooksReducers} from "./reducers";

// const rootReducer = combineReducers({
//     bookReducer:fetchBooksReducers,
// })

const store = createStore(fetchBooksReducers)

export default store