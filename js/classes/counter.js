function Counter(target) {
    this.__target = null;

    this.setTarget = function (target) {
        if (target === null || !(target instanceof Date)) {
            return false;
        }

        this.__target = target;
    }

    this.getDiffDate = function (alwaysPositive) {
        if (!(this.__target instanceof Date)) {
            return false;
        }

        var timeNow = (new Date()).getTime();
        var timeTarget = this.__target.getTime();
        var timeDiff = (timeTarget - timeNow);

        if (alwaysPositive && timeDiff < 0) {
            timeDiff = Math.abs(timeDiff);
        }

        return new Date(timeDiff);
    }

    this.getDiffDays = function (alwaysPositive) {
        var dateDiff = this.getDiffDate(alwaysPositive);
        if (dateDiff === false) {
            return false;
        }

        return (dateDiff.getTime() / 86400000);
    }

    this.getDiffMonths = function (alwaysPositive) {
        var dateDiff = this.getDiffDate(alwaysPositive);
        if (dateDiff === false) {
            return false;
        }

        var oldTime = dateDiff.getTime();
        if (oldTime < 0) {
            dateDiff = new Date(Math.abs(oldTime));
        }

        var diffYears = (dateDiff.getFullYear() - 1970);
        var diffMonths = (dateDiff.getMonth() + 0);
        var diffDays = dateDiff.getDate();

        var totalMonths = (((diffYears * 12) + diffMonths) + (diffDays / 30));
        if (oldTime < 0) {
            totalMonths = -totalMonths;
        }

        return totalMonths;
    }

    this.setTarget(target);
}
