import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import {persistMiddleware, fetchMiddleware} from './middlewares'

import reducer from './reducer'

const enhancer = applyMiddleware(thunk, persistMiddleware, fetchMiddleware, logger)

const store = createStore(reducer, enhancer)

export default store