class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.intervalId = null;
    }

    addClock(time, callback) {
        if (!time || !callback) {
            throw new Error("Отсутствуют обязательные аргументы");
        }
        if (this.alarmCollection.some(call => call.time === time)) {
            console.warn("Уже присутствует звонок на это же время");
        }
        this.alarmCollection.push({
            callback: callback,
            time: time,
            canCall: true
        });
    }

    removeClock(timeRemove) {
        this.alarmCollection = this.alarmCollection.filter(call => call.time !== timeRemove);
    }

    getCurrentFormattedTime() {
        const currentDate = new Date();
        const currentHour = currentDate.getHours();
        const currentMinutes = currentDate.getMinutes();
        return ((currentHour < 10) ? '0' : '') + currentHour + ':' + ((currentMinutes < 10) ? '0' : '') + currentMinutes;
    }

    start() {
        if (this.intervalId) {
            return;
        }
        this.intervalId = setInterval(() => {
            this.alarmCollection.forEach(call => {
                if (call.time === this.getCurrentFormattedTime() && call.canCall) {
                    call.canCall = false;
                    call.callback();
                }
            })
        }, 1000);
    }

    stop() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    resetAllCalls() {
        this.alarmCollection.forEach(call => call.canCall = true)
    }

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }
}