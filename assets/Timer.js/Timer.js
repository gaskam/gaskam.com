// A nice, easy to use, timer, that provides powerful features
// Made with ❤️ by Gaskam -> Gaskam.net
// Version: 0.0.1 Pre-Alpha

export class Timer {
    pauseAmount = 0;
    beginTime = null;
    paused = true;
    constructor(duration, options) {
        this.duration = duration;
        this.options = options || {};
    }
    formatTime(time, format) {
        format = format || "ms";
        format = format.toLowerCase();
        if (format === "ms") return time;
        if (format.includes("yyyy")) {
            let years = Math.floor(time / 31536000000);
            format = format.replace("yyyy", years);
            time -= years * 31536000000; // 31 536 000 000 ms = 1 year of 365 days
        }
        else if (format.includes("yy")) {
            let years = Math.floor(time / 31536000000);
            format = format.replace("yy", String(years).slice(-2));
            time -= years * 31536000000; // 31 536 000 000 ms = 1 year of 365 days
        }
        if (format.includes("mo")) {
            let months = Math.floor(time / 2592000000);
            format = format.replace("mo", months);
            time -= months * 2592000000; // 2 592 000 000 ms = 1 month of 30 days
        }
        if (format.includes("ww")) {
            let weeks = Math.floor(time / 604800000);
            format = format.replace("ww", weeks);
            time -= weeks * 604800000; // 604 800 000 ms = 1 week
        }
        if (format.includes("dd")) {
            let days = Math.floor(time / 86400000);
            format = format.replace("dd", days);
            time -= days * 86400000; // 86 400 000 ms = 1 day
        }
        if (format.includes("hh")) {
            let hours = Math.floor(time / 3600000);
            format = format.replace("hh", hours);
            time -= hours * 3600000; // 3 600 000 ms = 1 hour
        }
        if (format.includes("mm")) {
            let minutes = Math.floor(time / 60000);
            format = format.replace("mm", minutes);
            time -= minutes * 60000; // 60 000 ms = 1 minute
        }
        if (format.includes("ss")) {
            let seconds = Math.floor(time / 1000);
            format = format.replace("ss", seconds);
            time -= seconds * 1000; // 1 000 ms = 1 second
        }
        if (format.includes("ms")) {
            let milliseconds = time;
            format = format.replace("ms", milliseconds);
        }
        return format;
    }
    runningTime(format) {
        if (this.paused === true) return this.formatTime(this.pauseAmount, format);
        return this.formatTime(this.pauseAmount + (Date.now() - this.beginTime), format);
    }
    timeLeft(format) {
        return this.formatTime(this.duration - this.runningTime(), format);
    }
    isRunning() {
        return this.paused !== true;
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

}