import { reducerId0 } from './helper'
import { Task } from '../../actions'

it("create tasks property when create new task", () => {
    var state = {
        sessions:
        {
            "0": {}
        }
    }

    var a = Task.create(0, { name: "test" });

    expect(reducerId0(state, a))
        .toMatchObject(
            {
                sessions:
                {
                    "0": {
                        tasks:
                        {
                            "0": a.payload
                        }
                    }
                }
            }
        )
})

it("initialize units property as array when create task", () => {
    var state = {
        sessions: {
            "0": {
                tasks: {
                }
            }
        }
    }

    var a = Task.create(0, {});

    expect(reducerId0(state, a))
        .toHaveProperty("sessions.0.tasks.0.units", []);
})

it ("create a unit when start task with start property initialized", () => {
    var state = {
        sessions: {
            "0": {
                tasks: {
                    "0": {
                        units : []
                    }
                }
            }
        }
    }

    var a = Task.start(0, 0, 100);

    var postState = reducerId0(state, a);

    expect(postState)
        .toHaveProperty("sessions.0.tasks.0.units.0.start", 100);
})

// it ("set end property of unit when")