/**
 * @providesModule DateUtils
 */

import moment from 'moment/min/moment-with-locales';
import I18n from 'react-native-i18n';

var DateUtils = {
    dateToTime(template, date) {
        date = date.split(template[1]);
        template = template.split(template[1]);
        date = date[template.indexOf('m')]
            + "/" + date[template.indexOf('d')]
            + "/" + date[template.indexOf('Y')];

        return (new Date(date).getTime());
    },
    getCurDay() {
        let d = new Date()
        let time = d.getTime();
        return moment(Number(time)).format("DD/MM/YYYY");
    },
    getBirthDay(date) {
        var wrapped = moment(date);
        var birthday = wrapped.format("MM-DD");
        return birthday;
    },
    getDayAgo(timeStamp) {
        var date1 = moment(Number(timeStamp));
        var date2 = moment(new Date());

        var differenceInMs = date2.diff(date1); // diff yields milliseconds
        var duration = moment.duration(differenceInMs); // moment.duration accepts ms
        var differenceInMinutes = duration.asMinutes();
        var differenceInDay = duration.asDays();

        return parseInt(differenceInDay)
    },
    formatDateTime(date, type) {
        if (type === 0) {
            return moment(Number(date)).format("hh:mm A");
        } else {
            return moment(Number(date)).format("hh:mm A DD/MM/YYYY");
        }
    },
    formatAppointDateTime(date, type) {
        if (type == 2) {
            return moment(Number(date)).zone('+07.00').format("hh");
        }
        if (type === 0) {
            return moment(Number(date)).zone('+07.00').format("hh:mm A");
        } else {
            return moment(Number(date)).zone('+07.00').format("hh:mm A DD/MM/YYYY");
        }
    },
    formatAppointDateTimeWithTimeZone(date, type, timeZone) {
        var apTimeZone = DateUtils.getTimeZone(timeZone);
        if (type === 0) {
            return moment(Number(date)).zone(apTimeZone).format("hh:mm A");
        } else {
            return moment(Number(date)).zone(apTimeZone).format("hh:mm A DD/MM/YYYY");
        }
    },
    getTimeZone(timeZone) {
        var apTimeZone = '';
        if (timeZone > 0 && timeZone <= 9) {
            apTimeZone = '+0' + timeZone + '.00';
        } else if (timeZone > 0 && timeZone > 9) {
            apTimeZone = '+' + timeZone + '.00';
        } else if (timeZone < 0 && timeZone <= -9) {
            apTimeZone = '-' + Math.abs(timeZone) + '.00';
        } else if (timeZone < 0 && timeZone > -9) {
            apTimeZone = '-0' + Math.abs(timeZone) + '.00';
        }
        return apTimeZone;
    },
    formatEventDate(date) {
        if (I18n.t("locale") === 'vi') {
            return moment(Number(date)).get('date') + " " + I18n.t("common.dateTime.month") + " " + (moment(Number(date)).month() + 1) + ", " + moment(Number(date)).year();
        } else {
            return moment(Number(date)).format('ll');
        }
    },
    formatEventTime(date) {
        return moment(Number(date)).format('LT');
    },
    getFormatDate(date, type) {
        var wrapped = moment(date);
        var dt = null;
        if (type === 0) {
            dt = wrapped.format("MM/DD/YYYY");
        } else if (type === 1) {
            dt = wrapped.format("DD/MM");
        } if (type === 4) {
            dt = wrapped.format("YYYY-MM-DD");
        }
        else {
            dt = wrapped.format("DD/MM/YYYY");
        }
        return dt;
    },
    getFormatDateNotYear(date, type) {
        var wrapped = moment(date);
        var dt = null;
        if (type === 0) {
            dt = wrapped.format("MM/DD");
        } else {
            dt = wrapped.format("DD/MM");
        }
        return dt;
    },
    getFormatDateForFeed(date) {
        var wrapped = moment(date, moment.ISO_8601);
        var dt = wrapped.format("dddd, HH:mm DD MMM YYYY");
        return dt;
    },
    getDateByFormat(date, format) {
        var wrapped = moment(date);
        var dt = wrapped.format(format);
        return dt;
    },
    getLocaleTimeByFormat(time, format) {
        const regex = /^[0-9]*$/;
        let appMoment;
        if (regex.test(time)) {
            appMoment = moment(Number(time));
        } else {
            appMoment = moment(time);
        }
        appMoment.locale(I18n.t("locale"));
        return appMoment.format(format);
    },
    getLocaleTimeFromNow(time) {
        const regex = /^[0-9]*$/;
        let appMoment;
        if (regex.test(time)) {
            appMoment = moment(Number(time));
        } else {
            appMoment = moment(time);
        }
        appMoment.locale(I18n.t("locale"));
        return appMoment.fromNow();
    },
    getStringDayOfWeek(day) {
        switch (parseInt(day)) {
            case 0: return I18n.t("screen.product.dayHeadings.su"); break;
            case 1: return I18n.t("screen.product.dayHeadings.mo"); break;
            case 2: return I18n.t("screen.product.dayHeadings.tu"); break;
            case 3: return I18n.t("screen.product.dayHeadings.we"); break;
            case 4: return I18n.t("screen.product.dayHeadings.th"); break;
            case 5: return I18n.t("screen.product.dayHeadings.fr"); break;
            case 6: return I18n.t("screen.product.dayHeadings.sa"); break;
        }
    },
    getCustomDay(date) {
        let curDate = new Date();
        let curDateText = moment(Number(curDate.getTime())).format("DD/MM/YYYY");
        let dText = moment(Number(date)).format("DD/MM/YYYY");
        if (curDateText == dText) {
            return I18n.t('customize.today').toUpperCase()
        }
        return dText
    },
    getCustomTime(date, type) {
        if (type) {
            return moment(Number(date)).format("hh:mm A");
        }
        return moment(Number(date)).format("HH:mm");
    },
    getFullTime(date, type) {
        if (type) {
            return moment(Number(date)).format("hh:mm:ss A");
        }
        return moment(Number(date)).format("HH:mm:ss");
    },
    getTimestamp(date) {
        var timestamp = null;
        if (date) {
            var d = new Date(date);
            timestamp = d.getTime();
        } else {
            var d = new Date();
            timestamp = d.getTime();
        }
        return timestamp
    },
    getFullDay(date) {
        var d = new Date(date);
        let day = d.getDay();
        return day
    },
    getDayOrMonth(date, type) {
        var d = new Date(date);
        let output = null;
        if (type == 'd') { output = d.getDate(); }
        if (type == 'm') { output = d.getMonth() + 1; }
        if (output != null && output < 10) { return '0' + output }
        return output
    },
    getMonthAndYear(date) {
        var d = new Date(date);
        let m = d.getMonth() + 1;
        let y = d.getFullYear();
        if (m < 10) { m = '0' + m; }
        return m + '/' + y
    },
    getNextYear(next) {
        var d = new Date();
        return d.getFullYear() + next
    },
    getTime(date) {
        var d = new Date(date);
        let h = d.getHours();
        let m = d.getMinutes();
        if (h < 10) { h = '0' + h }
        if (m < 10) { m = '0' + m }
        return h + ':' + m
    },
    formatDateToNumber(date) {
        var wrapped = moment(date);
        dt = wrapped.format("YYYY-MM-DD");
        var timer = new Date(dt).getTime();
        return timer;
    },
}

export { DateUtils as default };
