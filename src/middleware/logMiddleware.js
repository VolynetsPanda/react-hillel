export const logMiddleware = store => next => action => {
    let res
    console.groupCollapsed('dispatching', action.type)
    console.log('1st state', store.getState())
    console.log('action', action)
    // logic fetch
    res = next(action)
    console.log('2nd state', store.getState())
    console.groupEnd()
    return res
}