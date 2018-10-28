import { reducerId0 } from './helper'
import { Session, Task, Unit } from '../../actions'

it("reducer default state", () => {
    expect(reducerId0())
        .toMatchObject({ sessions: {} });
})

it("create session", () => {
    var state = reducerId0();
    var a = Session.create({ name: "test" });
    var postState = reducerId0(state, a);
    expect(postState)
        .toHaveProperty("sessions.0.id");
});

it("delete session", () => {
    var s = { sessions: { "0": {} } }
    var a = Session.delete(0);
    expect(reducerId0(s, a))
        .toMatchObject({ sessions: {} });
})

it("edit session", () => {
    var s = { sessions: { "0": { name: "prima" } } };
    var a = Session.edit(0, { name: "dopo", other: "altro" });
    expect(reducerId0(s, a))
        .toMatchObject({ sessions: { "0": a.payload } });
})

it("create task", () => {
    var s = { sessions: { "0": { tasks: {} } } };
    var a = Task.create(0, { name: "test" });
    expect(reducerId0(s, a))
        .toMatchObject({ sessions: { "0": { tasks: { "0": a.payload } } } });
})

it("delete task", () => {
    var s = {
        sessions:
        {
            "0":
            {
                tasks:
                {
                    "0":
                    {
                        name: "task"
                    }
                }
            }
        }
    };

    var a = Task.delete(0, 0);

    expect(reducerId0(s, a))
        .toMatchObject({
            sessions:
            {
                "0":
                {
                    tasks: {}
                }
            }
        });
})

it("edit task", () => {
    var s = {
        sessions:
        {
            "0":
            {
                tasks:
                {
                    "0":
                    {
                        name: "task"
                    }
                }
            }
        }
    };

    var a = Task.edit(0, 0, { name: "changed" });

    expect(reducerId0(s, a))
        .toMatchObject({
            sessions:
            {
                "0":
                {
                    tasks:
                    {
                        "0": a.payload
                    }
                }
            }
        });
})

it("create unit", () => {
    var s = {
        sessions:
        {
            "0":
            {
                tasks:
                {
                    "0":
                    {
                        units: {}
                    }
                }
            }
        }
    };

    var a = Unit.create(0, 0, { name: "test" });

    expect(reducerId0(s, a))
        .toMatchObject({
            sessions:
            {
                "0":
                {
                    tasks:
                    {
                        "0":
                        {
                            units:
                            {
                                "0": a.payload
                            }
                        }
                    }
                }
            }
        })
})

it("delete unit", () => {
    var s = {
        sessions:
        {
            "0":
            {
                tasks:
                {
                    "0":
                    {
                        units: {}
                    }
                }
            }
        }
    };

    var a = Unit.delete(0, 0, 0);

    expect(reducerId0(s, a))
        .toMatchObject({
            sessions:
            {
                "0":
                {
                    tasks:
                    {
                        "0":
                        {
                            units: {}
                        }
                    }
                }
            }
        })
})

it("edit unit", () => {
    var s = {
        sessions:
        {
            "0":
            {
                tasks:
                {
                    "0":
                    {
                        units: 
                        {
                            "0" :
                            {
                                name : "test"
                            }
                        }
                    }
                }
            }
        }
    };

    var a = Unit.edit(0, 0, 0, { name : "changed"});

    expect(reducerId0(s, a))
        .toMatchObject({
            sessions:
            {
                "0":
                {
                    tasks:
                    {
                        "0":
                        {
                            units: 
                            {
                                "0" : a.payload
                            }
                        }
                    }
                }
            }
        })
})


