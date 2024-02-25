const logger = store => next => action => {
    next(action);
    const currentState = store.getState()
    console.log('current state ', currentState)
}

export default logger;