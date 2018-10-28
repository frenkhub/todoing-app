import { reducerId0 } from './helper'
import { Session } from '../../actions'

it ("initialize tasks, name, properties when create a new session", () => {

    var state = {
        sessions:
        {
        }
    }

    var a = Session.create({});

    expect(reducerId0(state, a))
        .toMatchObject(
            {
                sessions : 
                {
                    "0" : {
                        name : "",
                        tasks : {}
                    }
                }
            })
})