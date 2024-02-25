import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice.js'
import logger from './middleware/logger.js';

const store = configureStore({
    reducer: {
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

})

export default store;