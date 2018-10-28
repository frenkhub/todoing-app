
export const Task = {

    isInProgress: ({ units }) => {
        return units.length && !units.slice(-1)[0].end;
    },
    
    getTimeConsumed: ({ units }, now) => {
        return units
            .map(({ start, end }) => (end || now) - start)
            .reduce((a, b) => a + b, 0);
    }
}

export const Mix = {

    // time is in milliseconds
    formatTime: time => {
        var date = new Date(time);
        var output = "";

        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();

        var output = h + "h : " + m + "m : " + s + "s";

        return output;
    }

}