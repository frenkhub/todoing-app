import { ActionTypes } from "../actions"
import { combineReducers } from "redux"
import update from 'immutability-helper'

// the sessions reducer needs a way to create uniq ids
const createSessionsReducer =
    generateNextId =>
        (state = {}, action) => {

            if (!action || action.type == null) {
                return state;
            }

            switch (action.type) {
                case ActionTypes.SESSION_CREATE:
                    var x = generateNextId();
                    var session = update(action.payload, { $merge: { id: x } });
                    session.name = session.name || "";
                    session.tasks = session.tasks || {};

                    return update(
                        state,
                        {
                            [x]:
                            {
                                $set: session
                            }
                        });

                case ActionTypes.SESSION_DELETE:
                    return update(
                        state,
                        {
                            $unset: [action.id]
                        });

                case ActionTypes.SESSION_EDIT:
                    return update(
                        state,
                        {
                            [action.id]:
                            {
                                $merge: action.payload
                            }
                        });

                case ActionTypes.TASK_CREATE:
                    var x = generateNextId();
                    var task = {
                        ...action.payload,
                        id: x,
                        units: []
                    };

                    state[action.sessionId].tasks = state[action.sessionId].tasks || {};

                    return update(
                        state,
                        {
                            [action.sessionId]:
                            {
                                tasks:
                                {
                                    [x]:
                                    {
                                        $set: task
                                    }
                                }
                            }
                        });

                case ActionTypes.TASK_DELETE:
                    return update(
                        state,
                        {
                            [action.sessionId]:
                            {
                                tasks:
                                {
                                    $unset: [action.id]
                                }
                            }
                        });

                case ActionTypes.TASK_EDIT:
                    return update(
                        state,
                        {
                            [action.sessionId]:
                            {
                                tasks:
                                {
                                    [action.id]:
                                    {
                                        $merge: action.payload
                                    }
                                }
                            }
                        });

                case ActionTypes.TASK_START:
                    return update(
                        state,
                        {
                            [action.sessionId]:
                            {
                                tasks:
                                {
                                    [action.id]:
                                    {
                                        units:
                                        {
                                            $push:
                                                [{
                                                    start: action.now,
                                                    end: null
                                                }]
                                        }
                                    }
                                }
                            }
                        });

                case ActionTypes.TASK_PAUSE:

                    var f = units => {
                        var last = units.slice(-1)[0];
                        return [
                            ...units.slice(0, -1),
                            {
                                ...last,
                                end: action.now
                            }
                        ];
                    }

                    return update(
                        state,
                        {
                            [action.sessionId]:
                            {
                                tasks:
                                {
                                    [action.id]:
                                    {
                                        units:
                                        {
                                            $apply: f
                                        }
                                    }
                                }
                            }
                        });

                case ActionTypes.UNIT_CREATE:
                    var x = generateNextId();
                    var session = update(action.payload, { $merge: { id: x } });

                    state[action.sessionId].tasks[action.taskId].units = state[action.sessionId].tasks[action.taskId].units || {};

                    return update(
                        state,
                        {
                            [action.sessionId]:
                            {
                                tasks:
                                {
                                    [action.taskId]:
                                    {
                                        units:
                                        {
                                            [x]:
                                            {
                                                $set: session
                                            }
                                        }
                                    }
                                }
                            }
                        });

                case ActionTypes.UNIT_DELETE:
                    return update(
                        state,
                        {
                            [action.sessionId]:
                            {
                                tasks:
                                {
                                    [action.taskId]:
                                    {
                                        units:
                                        {
                                            $unset: [action.id]
                                        }
                                    }
                                }
                            }
                        });

                case ActionTypes.UNIT_EDIT:
                    return update(
                        state,
                        {
                            [action.sessionId]:
                            {
                                tasks:
                                {
                                    [action.taskId]:
                                    {
                                        units:
                                        {
                                            [action.id]:
                                            {
                                                $merge: action.payload
                                            }
                                        }
                                    }
                                }
                            }
                        });

                default: return state;
            }
        }

const createReducer = generateNextId => combineReducers({ sessions: createSessionsReducer(generateNextId) })

export default createReducer