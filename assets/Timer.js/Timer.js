// A nice, easy to use, timer, that provides powerful features
// Made with ❤️ by Gaskam -> Gaskam.dev
// Version: 0.0.1 Pre-Alpha
// Released: Event gestionnary
// TODO: Timing events triggering

export class Timer {
    pauseAmount = 0;
    beginTime = null;
    paused = true;
    callbacks = [];
    formatTime(time, format) {
        format = format || "ms";
        format = format.toLowerCase();
        if (format === "ms") return time;
        if (format.includes("yyyy")) {
            let tmp = Math.floor(time / 31536000000);
            format = format.replace("yyyy", tmp);
            time -= tmp * 31536000000; // 31 536 000 000 ms = 1 year of 365 days
        }
        else if (format.includes("yy")) {
            let tmp = Math.floor(time / 31536000000);
            format = format.replace("yy", String(tmp).slice(-2));
            time -= tmp * 31536000000; // 31 536 000 000 ms = 1 year of 365 days
        }
        if (format.includes("mo")) {
            let tmp = Math.floor(time / 2592000000);
            format = format.replace("mo", tmp);
            time -= tmp * 2592000000; // 2 592 000 000 ms = 1 month of 30 days
        }
        if (format.includes("ww")) {
            let tmp = Math.floor(time / 604800000);
            format = format.replace("ww", tmp);
            time -= tmp * 604800000; // 604 800 000 ms = 1 week
        }
        if (format.includes("dd")) {
            let tmp = Math.floor(time / 86400000);
            format = format.replace("dd", tmp);
            time -= tmp * 86400000; // 86 400 000 ms = 1 day
        }
        if (format.includes("hh")) {
            let tmp = Math.floor(time / 3600000);
            format = format.replace("hh", tmp);
            time -= tmp * 3600000; // 3 600 000 ms = 1 hour
        }
        if (format.includes("mm")) {
            let tmp = Math.floor(time / 60000);
            format = format.replace("mm", tmp);
            time -= tmp * 60000; // 60 000 ms = 1 minute
        }
        if (format.includes("ss")) {
            let tmp = Math.floor(time / 1000);
            format = format.replace("ss", tmp);
            time -= tmp * 1000; // 1 000 ms = 1 second
        }
        if (format.includes("ms")) {
            format = format.replace("ms", time);
        }
        return format;
    }
    toMs(time) {
        try {
            let tmp = "";
            if (typeof time === "string") {
                if (time.includes("ms")) return Number(time.replace("ms", ""));
                if (time.includes("ss")) return Number(time.replace("ss", "")) * 1000;
                if (time.includes("s")) return Number(time.replace("s", "")) * 1000;
                if (time.includes("mm")) return Number(time.replace("mm", "")) * 60000;
                if (time.includes("m")) return Number(time.replace("m", "")) * 60000;
                if (time.includes("hh")) return Number(time.replace("hh", "")) * 3600000;
                if (time.includes("h")) return Number(time.replace("h", "")) * 3600000;
                if (time.includes("dd")) return Number(time.replace("dd", "")) * 86400000;
                if (time.includes("d")) return Number(time.replace("d", "")) * 86400000;
                if (time.includes("ww")) return Number(time.replace("ww", "")) * 604800000;
                if (time.includes("w")) return Number(time.replace("w", "")) * 604800000;
                if (time.includes("mo")) return Number(time.replace("mo", "")) * 2592000000;
                if (time.includes("yyyy")) return Number(time.replace("yyyy", "")) * 31536000000;
                if (time.includes("yy")) return Number(time.replace("yy", "")) * 31536000000;
                if (time.includes("y")) return Number(time.replace("y", "")) * 31536000000;
            }
            if (typeof time === "number") {
                return time;
            }
        } catch (e) {
            console.error("Timer.js: incorrect value provided for time");
        }
        return 0;
    }
    constructor(duration, options) {
        this.duration = this.toMs(duration);
        this.options = options || {};
    }
    
    // Timer length functions
    setDuration(duration) {
        this.duration = this.toMs(duration);
    }
    addRunningTime(time) {
        this.pauseAmount += this.toMs(time);
    }
    addDuration(duration) {
        this.duration += this.toMs(duration);
    }
    
    // Timer execution functions
    runningTime(format) {
        if (this.paused === true) return this.formatTime(this.pauseAmount, format);
        return this.formatTime(this.pauseAmount + (Date.now() - this.beginTime), format);
    }
    timeLeft(format) {
        return this.formatTime(this.duration - this.runningTime(), format);
    }
    start() {
        this.paused = false;
        this.beginTime = Date.now();
        return this;
    }
    resume() {
        return this.start();
    }
    stop() {
        if (this.paused !== true) {
            this.paused = true;
            this.pauseAmount += Date.now() - this.beginTime;
            return this;
        }
        return this;
    }
    pause() {
        return this.stop();
    }
    reset() {
        this.pauseAmount = 0;
        this.paused = true;
        this.beginTime = null;
        return this;
    }

    // Callbacks functions
    addEventListener(event, callback) {
        return this.callbacks.push(Object.defineProperty({}, event, {
            value: callback,
            writable: true
        }));
    }
    on(event, callback) {
        return this.addEventListener(event, callback);
    }

    removeEventListener(event) {
        if (typeof event === "string") {
            this.callbacks = this.callbacks.filter(callback => callback[event] == undefined);
            return this;
        }
        if (typeof event === "number") {
            this.callbacks.splice(event, 1);
            return this;
        }
    }

    dispatchEvent(event) {
        let tmp = 0;
        this.callbacks.forEach((el) => {
            if (el.hasOwnProperty(event)) {
                el[event]();
                tmp++;
            }
        });
        return tmp;
    }

    emit(event) {
        return this.dispatchEvent(event);
    }


    // Events
    checkEvents() {
        if (this.paused === true) return;
        if (this.timeLeft() <= 0) {
            this.emit("end");
            this.stop();
        }

    }

}