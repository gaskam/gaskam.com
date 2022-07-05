export class Timer {
    constructor(duration) {
        this._beginTime = new Date.now();
        this._duration = duration;
        console.log(this._beginTime);
    }
    getTime() {
        return this.time;
    }
    setTime(time) {
        this.time = time;
    }
}