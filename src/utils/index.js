
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
        var output = "";
        var h = 0;
        var m = 0;
        var s = 0;

        s = time / 1000;

        m = s / 60;
        s = s % 60;

        h = m / 60;
        m = m % 60;

        s = Math.floor(s);
        m = Math.floor(m);
        h = Math.floor(h);

        var output = h + "h : " + m + "m : " + s + "s";

        return output;
    }

}