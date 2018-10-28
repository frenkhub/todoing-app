import { Task } from '.'

it("is in progress return false when there aren't units", () => {
    var task = { units: [] };
    expect(Task.isInProgress(task)).toBeFalsy();
})

it("is in progress return true when end property is not set", () => {
    var task = { units: [{ end: null }] };
    expect(Task.isInProgress(task)).toBeTruthy();
})

it("is in progress return false when end property is set", () => {
    var task = { units: [{ end: 100 }] };
    expect(Task.isInProgress(task)).toBeFalsy();
})

it("get time consumed returns 0 when there are no units", () => {
    var task = { units: [] };
    expect(Task.getTimeConsumed(task)).toEqual(0);
})

it ("get time consumed when there is a unit in progress", () => {
    var task = { units: [{ start: 100, end: null}] };
    expect(Task.getTimeConsumed(task, 200)).toEqual(100);
})

it ("get time consumed when there is a unit with end property set", () => {
    var task = { units: [{ start: 100, end: 200}] };
    expect(Task.getTimeConsumed(task)).toEqual(100);
})