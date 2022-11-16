// A nice, easy to use, timer, that provides powerful features
// Made with ❤️ by Gaskam -> Gaskam.dev
// Version: 0.0.2 Pre-Alpha
// Released: Event gestionnary
// TODO: Timing events triggering (on the fly)

export class Timer {
    beginTime = null;
    pauseAmount = 0;
    pauseBegin = null;
    paused = true;
    callbacks = [];
    _timeline = [];
    specialEventsRegistry = [];
    _currentTimeoutId = -1;
    options = {
        eventPrecision: 0
    }

    now() {
        return Date.now();
    }
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
            if (tmp < 10) tmp = "0" + tmp;
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
            if (tmp < 10) tmp = "0" + tmp;
            format = format.replace("dd", tmp);
            time -= tmp * 86400000; // 86 400 000 ms = 1 day
        }
        if (format.includes("hh")) {
            let tmp = Math.floor(time / 3600000);
            if (tmp < 10) tmp = "0" + tmp;
            format = format.replace("hh", tmp);
            time -= tmp * 3600000; // 3 600 000 ms = 1 hour
        }
        if (format.includes("mm")) {
            let tmp = Math.floor(time / 60000);
            if (tmp < 10) tmp = "0" + tmp;
            format = format.replace("mm", tmp);
            time -= tmp * 60000; // 60 000 ms = 1 minute
        }
        if (format.includes("ss")) {
            let tmp = Math.floor(time / 1000);
            if (tmp < 10) tmp = "0" + tmp;
            format = format.replace("ss", tmp);
            time -= tmp * 1000; // 1 000 ms = 1 second
        }
        if (format.includes("ms")) {
            let tmp = Math.floor(time);
            if (tmp < 100) tmp = "00" + tmp;
            else if (tmp < 10) tmp = "0" + tmp;
            format = format.replace("ms", tmp);
        }
        return format;
    }
    toMs(time) {
        try {
            if (typeof time === "string") {
                time = time.toLowerCase();
                if (time.includes("ms")) return Number(time.replace("ms", ""));
                if (time.includes("ss")) return Number(time.replace("ss", "")) * 1000;
                if (time.includes("mm")) return Number(time.replace("mm", "")) * 60000;
                if (time.includes("hh")) return Number(time.replace("hh", "")) * 3600000;
                if (time.includes("dd")) return Number(time.replace("dd", "")) * 86400000;
                if (time.includes("ww")) return Number(time.replace("ww", "")) * 604800000;
                if (time.includes("mo")) return Number(time.replace("mo", "")) * 2592000000;
                if (time.includes("yyyy")) return Number(time.replace("yyyy", "")) * 31536000000;
                if (time.includes("yy")) return Number(time.replace("yy", "")) * 31536000000;
                if (time.includes("s")) return Number(time.replace("s", "")) * 1000;
                if (time.includes("m")) return Number(time.replace("m", "")) * 60000;
                if (time.includes("h")) return Number(time.replace("h", "")) * 3600000;
                if (time.includes("d")) return Number(time.replace("d", "")) * 86400000;
                if (time.includes("w")) return Number(time.replace("w", "")) * 604800000;
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
        this.options = options || this.options;
    }

    // Timer length functions
    setDuration(duration) {
        this.duration = this.toMs(duration);
    }
    addDuration(duration) {
        this.duration += this.toMs(duration);
    }
    setRunningTime(time) {
        this.pauseAmount = this.toMs(time);
        this.beginTime = this.now();
    }
    addRunningTime(time) {
        this.pauseAmount += this.toMs(time);
    }

    // Timer execution functions
    get runningTimeMs() {
        if (this.paused === true) return this.pauseAmount;
        return this.pauseAmount + (this.now() - this.beginTime);
    }
    runningTime(format) {
        return this.formatTime(this.runningTimeMs, format);
    }
    get timeLeftMs() {
        return this.duration - this.runningTimeMs;
    }
    timeLeft(format) {
        return this.formatTime(this.timeLeftMs, format);
    }
    start() {
        if (this.paused) {
            this.paused = false;
            this.beginTime = this.now();
            if (this.pauseBegin) {
                let tmp1 = this.pauseBegin, tmp2 = this.beginTime;
                this._timeline.forEach(function (tmp) {
                    tmp[0] += tmp2 - tmp1;
                });
                this.checkEvents();
            }
            if (this.specialEventsRegistry.length) {
                if (this.specialEventsRegistry.filter(tmp => tmp.type === "resume").length) {
                    this.dispatchEvent("resume");
                }
            }
        }
        return this;
    }
    resume() {
        return this.start();
    }
    stop() {
        if (this.paused !== true) {
            let tmp = this.now();
            this.pauseBegin = tmp;
            this.paused = true;
            this.pauseAmount += tmp - this.beginTime;
            if (this.specialEventsRegistry.length) {
                if (this.specialEventsRegistry.filter(tmp => tmp.type === "pause").length) {
                    this.dispatchEvent("pause");
                }
            }
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
        this._registerAllEvents();
        if (this.specialEventsRegistry.length) {
            if (this.specialEventsRegistry.filter(tmp => tmp.type === "reset").length) {
                this.dispatchEvent("reset");
            }
        }
        return this;
    }

    // Callbacks functions
    addEventListener(event, callback) {
        this._registerEvent(event);
        return this.callbacks.push([event, callback]);
    }
    on(event, callback) {
        return this.addEventListener(event, callback);
    }

    removeEventListener(event) {
        if (typeof event === "string") {
            this.callbacks = this.callbacks.filter(tmp => tmp[0] !== event);
            this._timeline = this._timeline.filter(tmp => tmp[1] !== event);
            this.specialEventsRegistry = this.specialEventsRegistry.filter(tmp => tmp != event);
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
            if (el[0] == event) {
                el[1]();
                tmp++;
            }
        });
        return tmp;
    }

    emit(event) {
        return this.dispatchEvent(event);
    }

    // Events registering functions
    _timelineInsert(date, name) {
        let i = 0;
        try {
            while (date >= this._timeline[i][0]) {
                if (name === this._timeline[i][1]) return this;
                i++;
            }
        } catch (e) {
            i = this._timeline.length;
        }
        this._timeline.splice(i, 0, [date, name]);
    }
    _registerEvent(event) {
        if (typeof event !== Array) event = [event];
        if (typeof event[0] == String) event[0].toLowerCase();
        let tmp = this.toMs(event[0]);
        if (tmp > 0) {
            let tmp2 = this.now();
            let nextTime = (this.timeLeft() % tmp) + tmp2;
            if (nextTime == tmp2) nextTime = tmp + tmp2;
            this._timelineInsert(nextTime, event[0]);
        } else {
            specialEventsRegistry.push(event[0]);
        }
        return this;
    }
    _unregisterEvent(event) {
        if (typeof event === Array) event = event[0];
        if (typeof event === "string") event = event.toLowerCase();
        let tmp = this.toMs(event);
        if (tmp > 0) {
            this._timeline = this._timeline.filter(tmp => tmp[1] !== event);
        } else {
            specialEventsRegistry = specialEventsRegistry.filter(tmp => tmp !== event);
        }
        return this;
    }
    _registerAllEvents() {
        this._timeline = [];
        this.callbacks.forEach((tmp) => {
            this._registerEvent(tmp);
        });
    }
    // Events
    checkEvents() {
        if (this.paused != true) {
            while (this._timeline.length && this._timeline[0][0] + this.options.eventPrecision <= this.now()) {
                console.log("event triggered: " + this._timeline[0][1]);
                this.dispatchEvent(this._timeline[0][1]);
                let tmp = this._timeline.shift();
                this._registerEvent(tmp[1]);
            }
            if (this.timeLeft() <= 0 && this.paused == false && this.specialEventsRegistry.filter(tmp => tmp === "end").length) {
                this.dispatchEvent("end");
                this.pause();
            }
            if (this._currentTimeoutId !== null && this._timeline.length) {
                clearTimeout(this._currentTimeoutId);
                if (this._timeline.length) this._currentTimeoutId = setTimeout(this.checkEvents.bind(this), this._timeline[0][0] - this.now() - this.options.eventPrecision / 2);
            }
        }
        return this;
    }

}

export class MountTimer extends Timer {
    textBox;
    constructor(duration, options) {
        super(duration, options);
    }
    mount(selector, format, update = "1s") {
        this.textBox = document.querySelector(selector);
        format = format || "mm:ss";
        super.addEventListener(update, () => {
            console.log("1s triggered, updating text");
            this.textBox.innerHTML = super.formatTime(super.timeLeft(), format);
        });
    }
}