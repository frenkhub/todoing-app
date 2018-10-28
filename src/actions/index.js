let tmp = 0;

export const ActionTypes = {
    SESSION_CREATE: tmp++,
    SESSION_DELETE: tmp++,
    SESSION_EDIT: tmp++,
    
    TASK_CREATE: tmp++,
    TASK_DELETE: tmp++,
    TASK_EDIT: tmp++,
    TASK_START: tmp++,
    TASK_PAUSE: tmp++,
    TASK_COMPLETE: tmp++,
    
    UNIT_CREATE: tmp++,
    UNIT_DELETE: tmp++,
    UNIT_EDIT: tmp++
}

export const Session = {
    create : payload => ({ type: ActionTypes.SESSION_CREATE, payload }),
    delete : id => ({ type: ActionTypes.SESSION_DELETE, id}),
    edit : (id, payload) => ({ type: ActionTypes.SESSION_EDIT, id, payload })
}

export const Task = {
    create : (sessionId, payload) => ({ type: ActionTypes.TASK_CREATE, sessionId, payload}),
    delete : (sessionId, id) => ({ type: ActionTypes.TASK_DELETE, id, sessionId}),
    edit : (sessionId, id, payload) => ({ type: ActionTypes.TASK_EDIT, sessionId, id, payload }),
    start : (sessionId, id, now) => ({ type: ActionTypes.TASK_START, sessionId, id, now}),
    pause : (sessionId, id, now) => ({ type: ActionTypes.TASK_PAUSE, sessionId, id, now}),
    complete : (sessionId, id) => ({ type: ActionTypes.TASK_START, sessionId, id})
}

export const Unit = {
    create : (sessionId, taskId, payload) => ({ type: ActionTypes.UNIT_CREATE, sessionId, taskId, payload}),
    delete : (sessionId, taskId, id) => ({ type: ActionTypes.UNIT_DELETE, sessionId, taskId, id}),
    edit : (sessionId, taskId, id, payload) => ({ type: ActionTypes.UNIT_EDIT, sessionId, taskId, id, payload })
}