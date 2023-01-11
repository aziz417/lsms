import { configureStore } from '@reduxjs/toolkit'
// import logger from 'redux-logger'
import { rootReducer } from './rootReducer'


// config the store 
const store= configureStore({
   // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
   reducer: rootReducer,
   devTools: process.env.NODE_ENV !== "production"

})

// export default the store 
export default store

// export the action
// export const iconAction = iconslice.actions