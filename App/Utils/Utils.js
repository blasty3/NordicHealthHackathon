/**
 * @providesModule Utils
 */

const Alert = require('Alert');
import { Colors } from '../Themes'
import { Platform } from 'react-native';
import I18n from 'react-native-i18n';

function isNumeric(str) {
    if (isUndefined(str)) { return false; }
    if (str.toString().match(/^[0-9]+$/) === null) { return false; };
    return true;
};

function isNumber(value) {
    if (typeof value === 'number') { return true; };
    if (isNumeric(value)) { return true; };
    return false;
};

function isUndefined(e) {
    switch (e) {
        case "undefined": return true;
        case "NaN": return true;
        case NaN: return true;
        case undefined: return true;
        case "": return true;
        case null: return true;
        case "null": return true;
        case false: return true;
        case "false": return true;
        default: return false;
    };
};

function isDate(d) {
    if (!d) { return false; };
    if (!isNumeric(parseFloat(d)) && new Date(d).getTime() > 0) { return true; }
    if (new Date(parseFloat(d)).getTime() > 0) { return true; };
    return false;
};

function getDateObj(d) {
    if (d && !isDate(d)) { return null; };
    if (d && isNumber(d)) { return new Date(parseFloat(d)); }
    if (d) { return new Date(d); };
    return new Date();
};

function showMessage(message) {
    Alert.alert(
        "MOVAD",
        message,
        [
            {
                text: 'OK', onPress: () => {
                }
            },
        ]
    );
}

const Utils = {
    onConnectInter() {
        Alert.alert(
            I18n.t('account.notification.notificationTitle'),
            I18n.t('login.netInfo'),
            [
                {
                    text: "OK"
                }
            ],
            { cancelable: false }
        );
    },
    showNoti(title, message, but1, but2) {
        Alert.alert(
            title,
            message,
            [
                but1 = undefined ? null : {
                    text: but1
                }, but2 = undefined ? null : {
                    text: but2
                }
            ],
            { cancelable: false }
        );
    },
    showMessage(message) {
        showMessage(message)
    },
    isUndefined(e) {
        switch (e) {
            case "undefined":
                return true;
            case undefined:
                return true;
            case '':
                return true;
            case null:
                return true;
            case 'null':
                return true;
            case 0:
                return true;
            case '0':
                return true;
            case false:
                return true;
            case 'false':
                return true;
            default:
                return false;
        }
    },
    getFontByIndex(idx) {
        switch (idx) {
            case 0:
                return 'TimesNewRomanPSMT';
            case 1:
                return 'Tahoma';
            case 2:
                return 'Arial';
            case 3:
                return 'ComicSansMS';
            case 4:
                return 'Verdana';
            case 5: {
                if (Platform.OS === 'ios') {
                    return null;
                } else {
                    return null;
                }
            }
            default:
                return 'HelveticaNeue';
        }
    },
    getFont(config) {
        var font = {
            fontFamily: Utils.getFontByIndex(config.font),
            fontWeight: config.bold ? 'bold' : 'normal',
            fontStyle: config.italic ? 'italic' : 'normal',
            fontSize: config.size ? config.size : '14',
            color: config.color ? config.color : '#000000'
        }
        return font
    },
    removeDuplicates(num) {
        var x,
            len = num.length,
            out = [],
            obj = {};

        for (x = 0; x < len; x++) {
            obj[num[x]] = 0;
        }
        for (x in obj) {
            out.push({ value: x });
        }
        return out;
    },
    getConfigLeftButtonForTheme(layoutType, notShowBack, notiAction) {
        if (notShowBack == true) {
            return null
        }
        if (layoutType == 0) {
            return ({
                icon: 'ios-arrow-back-outline',
                iconStyle: {
                    color: config.layoutNavigationFont.color
                },
            })
        } else if (layoutType == 5 || layoutType == 10 || layoutType == 11) {
            if (notiAction == undefined || notiAction == 'undefined' || !notiAction) {
                return ({
                    icon: 'ios-menu-outline',
                    iconStyle: {
                        color: config.layoutNavigationFont.color
                    },
                })
            } else {
                if (notiAction) {
                    return ({
                        icon: 'ios-arrow-back-outline',
                        iconStyle: {
                            color: config.layoutNavigationFont.color
                        },
                    })
                } else {
                    if (notShowBack == false) {
                        return ({
                            icon: 'ios-arrow-back-outline',
                            iconStyle: {
                                color: config.layoutNavigationFont.color
                            },
                        })
                    } else {
                        return ({
                            icon: 'ios-menu-outline',
                            iconStyle: {
                                color: config.layoutNavigationFont.color
                            },
                        })
                    }

                }
            }

        } else {
            return ({
                icon: 'ios-arrow-back-outline',
                iconStyle: {
                    color: config.layoutNavigationFont.color
                },
            })
        }
    },

    parseStringJSon(jsonString, isFont) {
        var jsonDefault = { "font": 0, "size": 12, "bold": false, "italic": false, color: "black" };
        var json;
        try {
            json = JSON.parse(jsonString);
        } catch (ex) {
        }
        return json ? json : (isFont ? jsonDefault : null);
    },
    getDistanceFromTwoPoint(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the earth in km
        var dLat = (lat2 - lat1) * Math.PI / 180;  // deg2rad below
        var dLon = (lon2 - lon1) * Math.PI / 180;
        var a =
            0.5 - Math.cos(dLat) / 2 +
            Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
            (1 - Math.cos(dLon)) / 2;

        return R * 2 * Math.asin(Math.sqrt(a));
    },
    roundNumber(num, n) {
        return parseFloat(Math.round(num * Math.pow(10, n)) / Math.pow(10, n)).toFixed(n);
    },
    isANumber(num) {
        var numStr = /^\d+(\.\d{0,2})?$/g;
        return numStr.test(num);
    },
    getRandomFlatColor() {
        var color = Colors.flatUIColor[Math.floor(Math.random() * Colors.flatUIColor.length)];
        return color;
    },
    formatPass(pass) {
        let length = pass.length;
        let formated = '';
        for (let i = 0; i < length; i++) {
            formated = formated + '*';
        }
        return formated;
    },
    randomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    },
    remove_unicode(str) {
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g, "-");

        str = str.replace(/-+-/g, "-"); //thay thế 2- thành 1- 
        str = str.replace(/^\-+|\-+$/g, "");

        return str;
    },
    isSocialLogin(account) {
        if (account && (account.facebookId != null || account.googleId != null)) {
            return true
        } else {
            return false
        }
    },
    socialPlatform(account) {
        if (account && account.facebookId != null) {
            return 'fb'
        } else if (account.googleId != null) {
            return 'gg'
        }
    },
    getUrls(string) {
        return string.match(/\bhttps?:\/\/\S+/gi);
    },
    getHtmlImgSize(source, baseWidth) {
        let wStatus = Utils.isUndefined(source.width);
        let hStatus = Utils.isUndefined(source.height);
        if (!wStatus && !hStatus) {
            let w = parseInt(source.width);
            let h = parseInt(source.height);
            if (w == h) {
                return { width: baseWidth, height: baseWidth }
            } else {
                let sW = w;
                let sH = h;
                let nW = baseWidth;
                let nH = (baseWidth * sH) / sW;
                return { width: nW, height: nH }
            }
        } else {
            return { width: baseWidth, height: baseWidth * 0.5625 }
        }
    },
    removeStr(string, target, replacement) {
        return string.replace(target, replacement);
    },
    removeHtmlBr(html) {

        return html.trim().replace(/\n|\r/g, "");
    },
    formatMoneyToInt(data) {
        let money = "";
        if (data.indexOf(',') >= 0) {
            let moneys = data.split(',');
            moneys.forEach((result) => {
                money = money + result
            })
        }
        if (data.indexOf('.') >= 0) {
            let moneys = data.split('.');
            moneys.forEach((result) => {
                money = money + result
            })
        }
        if (data.indexOf(' ') >= 0) {
            let moneys = data.split(' ');
            moneys.forEach((result) => {
                money = money + result
            })
        }
        return money;
    },

    ellipsisText(str, l) {
        if (str && l) {
            let sl = string.length;
            if (sl > l) {
                return str.substring(0, l) + '...'
            }
            return str
        }
        return str
    },

    getBEOfDate(type, kind, dInput) {
        // kind: true - start of date; false -  end of date;
        if (!type) { return null; }
        switch (kind) { case 'b': break; case 'e': break; default: return null; }
        let date = getDateObj(), formatDate;
        if (dInput) { date = getDateObj(dInput); };
        let y = date.getFullYear(), m = date.getMonth(), d = date.getDate();
        switch (type) {
            case 'd':
                if (kind === 'b') { formatDate = new Date(y, m, d); };
                if (kind === 'e') { formatDate = new Date(y, m, d + 1); };
                break;
            case 'm':
                if (kind === 'b') { formatDate = new Date(y, m, 1); };
                if (kind === 'e') { formatDate = new Date(y, m + 1, 1); };
                break;
            case 'y':
                if (kind === 'b') { formatDate = new Date(y, 0, 1); };
                if (kind === 'e') { formatDate = new Date(y + 1, 0, 1); };
                break;
            default: break;
        }
        if (kind === 'e') { formatDate.setMilliseconds(formatDate.getMilliseconds() - 1); }
        return formatDate.getTime();
    },

    showMessageErr(message) {
        console.log("message utils", message);

        const error = JSON.parse(message.message)
        const code = error.code;
        console.log("error code", code);

        switch (code) {
            case 'NOT_FOUND_USER':
                return showMessage(I18n.t("notification.notFoundUser"));
            case 'INVALID_PASSWORD':
                return showMessage(I18n.t("validate.invalidPassword"));
            case 'USER_NOT_ACTIVE':
                return showMessage(I18n.t("validate.userNotActive"));
            case 'WRONG_PASSWORD':
                return showMessage(I18n.t("notification.wrongPassword"));
            case 'EXISTED_USER':
                return showMessage(I18n.t("validate.existedUser"))
            case 'INVALID_PASSWORD':
                return showMessage(I18n.t("validate.invalidPassword"));
            case 'NOT_FOUND_RESET_PASS_TOKEN':
                return showMessage(I18n.t("validate.confirmCodeNotfound"));
            case 'USER_PENDING':
                return showMessage(I18n.t("validate.userPending"));
            case 'WRONG_OLD_PASSWORD':
                return showMessage(I18n.t("validate.wrongOldPassword"));
            case 'EXISTED_USER':
                return showMessage(I18n.t("validate.userExisted"))
            case 'INVALID_PHONE_NUMBER':
                return showMessage(I18n.t("validate.invaildPhoneNumber"))
            default:
                return showMessage(I18n.t("validate.err"));
        }
    }
}



export default Utils;
