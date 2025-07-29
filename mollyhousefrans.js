var _a, _b, _c;
var BOARD_SCALE = 'boardScale';
var PLUS = 'plus';
var MINUS = 'minus';
var DONE = 'done';
var TRADE = 'trade';
var BENYON = 'Benyon';
var HASTINGS = 'Hastings';
var LARKINS = 'Larkins';
var PAXTON = 'Paxton';
var SYKES = 'Sykes';
var WALSH = 'Walsh';
var CROWN = 'Crown';
var CROWN_PLAYER_ID = 1;
var BLUE = 'blue';
var GRAY = 'gray';
var GREEN = 'green';
var PINK = 'pink';
var PURPLE = 'purple';
var YELLOW = 'yellow';
var RED = 'red';
var HEX_COLOR_COLOR_MAP = {
    '99dae9': BLUE,
    dbd9d6: GRAY,
    addb90: GREEN,
    ffb1b9: PINK,
    c7b4e1: PURPLE,
    f9e08d: YELLOW,
};
var COLOR_FAMILY_MAP = (_a = {},
    _a[PINK] = BENYON,
    _a[BLUE] = HASTINGS,
    _a[YELLOW] = LARKINS,
    _a[GRAY] = PAXTON,
    _a[PURPLE] = SYKES,
    _a[GREEN] = WALSH,
    _a);
var SETUP = 'setup';
var LONDON_SEASON = 'londonSeason';
var FAMILY = 'family';
var FIRMS = 'firms';
var HIRING = 'hiring';
var BONUSES = 'Bonuses';
var REVENUE = 'revenue';
var EVENTS_IN_INDIA = 'eventsInIndia';
var PARLIAMENT_MEETS = 'ParliamentMeets';
var UPKEEP_AND_REFRESH = 'upkeepAndRefresh';
var OFFICE = 'office';
var COMPANY_SHARE = 'companyShare';
var CASH = 'cash';
var PRIME_MINISTER = 'primeMinister';
var RANDOM_BLACKMAIL_CARD = 'randomBlackmailCard';
var SHIP = 'ship';
var LUXURY = 'Luxury';
var WORKSHOP = 'Workshop';
var SHIPYARD = 'Shipyard';
var SHARE = 'Share';
var FAMILY_MEMBERS_COUNTER = 'familyMembers';
var CASH_COUNTER = 'cash';
var SHIPS_COUNTER = 'ships';
var SHARES_COUNTER = 'shares';
var WORKSHOPS_COUNTER = 'workshops';
var SHIPYARDS_COUNTER = 'shipyards';
var LUXURIES_COUNTER = 'luxuries';
var PROMISE_CUBES_COUNTER = 'promiseCubes';
var COUNTERS = [
    FAMILY_MEMBERS_COUNTER,
    CASH_COUNTER,
    SHIPS_COUNTER,
    SHARES_COUNTER,
    WORKSHOPS_COUNTER,
    SHIPYARDS_COUNTER,
    LUXURIES_COUNTER,
];
var CLOSED = 'closed';
var FILLED = 'filled';
var OPEN = 'open';
var ORDER_PUNJAB_1 = 'Order_Punjab_1';
var ORDER_DELHI_1 = 'Order_Delhi_1';
var ORDER_DELHI_2 = 'Order_Delhi_2';
var ORDER_DELHI_3 = 'Order_Delhi_3';
var ORDER_BENGAL_1 = 'Order_Bengal_1';
var ORDER_BENGAL_2 = 'Order_Bengal_2';
var ORDER_BOMBAY_1 = 'Order_Bombay_1';
var ORDER_BOMBAY_2 = 'Order_Bombay_2';
var ORDER_BOMBAY_3 = 'Order_Bombay_3';
var ORDER_MARATHA_1 = 'Order_Maratha_1';
var ORDER_MARATHA_2 = 'Order_Maratha_2';
var ORDER_MARATHA_3 = 'Order_Maratha_3';
var ORDER_HYDERABAD_1 = 'Order_Hyderabad_1';
var ORDER_MYSORE_1 = 'Order_Mysore_1';
var ORDER_MYSORE_2 = 'Order_Mysore_2';
var ORDER_MADRAS_1 = 'Order_Madras_1';
var ORDER_MADRAS_2 = 'Order_Madras_2';
var ORDERS = [
    ORDER_PUNJAB_1,
    ORDER_DELHI_1,
    ORDER_DELHI_2,
    ORDER_DELHI_3,
    ORDER_BENGAL_1,
    ORDER_BENGAL_2,
    ORDER_BOMBAY_1,
    ORDER_BOMBAY_2,
    ORDER_BOMBAY_3,
    ORDER_MARATHA_1,
    ORDER_MARATHA_2,
    ORDER_MARATHA_3,
    ORDER_HYDERABAD_1,
    ORDER_MYSORE_1,
    ORDER_MYSORE_2,
    ORDER_MADRAS_1,
    ORDER_MADRAS_2,
];
var CHAIRMAN = 'Chairman';
var DIRECTOR_OF_TRADE = 'DirectorOfTrade';
var MANAGER_OF_SHIPPING = 'ManagerOfShipping';
var MILITARY_AFFAIRS = 'MilitaryAffairs';
var PRESIDENT_OF_BOMBAY = 'PresidentOfBombay';
var PRESIDENT_OF_MADRAS = 'PresidentOfMadras';
var PRESIDENT_OF_BENGAL = 'PresidentOfBengal';
var GOVERNOR_GENERAL = 'GovernorGeneral';
var SUPERINTENDENT_OF_TRADE_IN_CHINA = 'SuperintendentOfTradeInChina';
var GOVERNOR_OF_BOMBAY = 'GovernorOfBombay';
var GOVERNOR_OF_MADRAS = 'GovernorOfMadras';
var GOVERNOR_OF_BENGAL = 'GovernorOfBengal';
var GOVERNOR_OF_PUNJAB = 'GovernorOfPunjab';
var GOVERNOR_OF_DELHI = 'GovernorOfDelhi';
var GOVERNOR_OF_MARATHA = 'GovernorOfMaratha';
var GOVERNOR_OF_HYDERABAD = 'GovernorOfHyderabad';
var GOVERNOR_OF_MYSORE = 'GovernorOfMysore';
var OFFICES_WITH_TREASURY = [
    DIRECTOR_OF_TRADE,
    MANAGER_OF_SHIPPING,
    PRESIDENT_OF_BOMBAY,
    PRESIDENT_OF_MADRAS,
    PRESIDENT_OF_BENGAL,
];
var COMMANDER = 'Commander';
var OFFICER = 'Officer';
var OFFICER_IN_TRAINING = 'OfficerInTraining';
var WRITER = 'Writer';
var COURT_OF_DIRECTORS = 'CourtOfDirectors';
var BENGAL_DELHI_BORDER = 'Bengal_Delhi_border';
var BENGAL_MARATHA_BORDER = 'Bengal_Maratha_border';
var BOMBAY_DELHI_BORDER = 'Bombay_Delhi_border';
var BOMBAY_HYDERABAD_BORDER = 'Bombay_Hyderabad_border';
var BOMBAY_MARATHA_BORDER = 'Bombay_Maratha_border';
var BOMBAY_MYSORE_BORDER = 'Bombay_Mysore_border';
var BOMBAY_PUNJAB_BORDER = 'Bombay_Punjab_border';
var DELHI_MARATHA_BORDER = 'Delhi_Maratha_border';
var DELHI_PUNJAB_BORDER = 'Delhi_Punjab_border';
var HYDERABAD_MADRAS_BORDER = 'Hyderabad_Madras_border';
var HYDERABAD_MARATHA_BORDER = 'Hyderabad_Maratha_border';
var HYDERABAD_MYSORE_BORDER = 'Hyderabad_Mysore_border';
var MADRAS_MYSORE_BORDER = 'Madras_Mysore_border';
var BENGAL = 'Bengal';
var BOMBAY = 'Bombay';
var DELHI = 'Delhi';
var HYDERABAD = 'Hyderabad';
var MADRAS = 'Madras';
var MARATHA = 'Maratha';
var MYSORE = 'Mysore';
var PUNJAB = 'Punjab';
var BENGAL_PRESIDENCY = 'BengalPresidency';
var BOMBAY_PRESIDENCY = 'BombayPresidency';
var MADRAS_PRESIDENCY = 'MadrasPresidency';
var PRESIDENCIES = [BENGAL_PRESIDENCY, BOMBAY_PRESIDENCY, MADRAS_PRESIDENCY];
var BENGAL_WRITERS = 'Writers_Bengal';
var BOMBAY_WRITERS = 'Writers_Bombay';
var MADRAS_WRITERS = 'Writers_Madras';
var WRITER_LOCATIONS = [BENGAL_WRITERS, BOMBAY_WRITERS, MADRAS_WRITERS];
var BENGAL_ARMY = 'Army_Bengal';
var BOMBAY_ARMY = 'Army_Bombay';
var MADRAS_ARMY = 'Army_Madras';
var ARMIES = [BENGAL_ARMY, BOMBAY_ARMY, MADRAS_ARMY];
var ARMY_REGION_MAP = (_b = {},
    _b[BENGAL_ARMY] = BENGAL,
    _b[BOMBAY_ARMY] = BOMBAY,
    _b[MADRAS_ARMY] = MADRAS,
    _b);
var WEST_INDIAN = 'westIndian';
var EAST_INDIAN = 'eastIndian';
var SOUTH_INDIAN = 'southIndian';
var CHINA = 'china';
var UNFITTED = 'unfitted';
var SEA_ZONES = [WEST_INDIAN, EAST_INDIAN, SOUTH_INDIAN];
var COMPANY_SHIP = 'CompanyShip';
var EXTRA_SHIP = 'ExtraShip';
var POWER_TOKEN_COMPANY_SHARE = 'companyShare';
var POWER_TOKEN_MANUFACTURING = 'manufacturing';
var POWER_TOKEN_SHIPPING = 'shipping';
var POWER_TOKEN_SOCIAL = 'social';
var SHARE_VICTORY_POINTS_TOKEN = 'shareVictoryPoints';
var POWER_TOKENS = [
    POWER_TOKEN_COMPANY_SHARE,
    POWER_TOKEN_MANUFACTURING,
    POWER_TOKEN_SHIPPING,
    POWER_TOKEN_SOCIAL,
];
var POWER_TOKEN_ICON_MAP = (_c = {},
    _c[POWER_TOKEN_COMPANY_SHARE] = SHARE,
    _c[POWER_TOKEN_MANUFACTURING] = WORKSHOP,
    _c[POWER_TOKEN_SHIPPING] = SHIPYARD,
    _c[POWER_TOKEN_SOCIAL] = LUXURY,
    _c);
var ENLIST_WRITER = 'EnlistWriter';
var ENLIST_OFFICER = 'EnlistOfficer';
var PURCHASE_LUXURY = 'PurchaseLuxury';
var PURCHASE_SHIPYARD = 'PurchaseShipyard';
var PURCHASE_WORKSHOP = 'PurchaseWorkshop';
var SEEK_SHARE = 'SeekShare';
var PURCHASE_ENTERPRISE = 'PurchaseEnterprise';
var STOCK_EXCHANGE_2 = 'StockExchange_2';
var STOCK_EXCHANGE_3_LEFT = 'StockExchange_3_Left';
var STOCK_EXCHANGE_3_RIGHT = 'StockExchange_3_Right';
var STOCK_EXCHANGE_4 = 'StockExchange_4';
var STOCK_EXCHANGE_5 = 'StockExchange_5';
var STOCK_EXCHANGE_POSITIONS = [
    STOCK_EXCHANGE_2,
    STOCK_EXCHANGE_3_LEFT,
    STOCK_EXCHANGE_3_RIGHT,
    STOCK_EXCHANGE_4,
    STOCK_EXCHANGE_5,
];
var BULL = 'Bull';
var STAG = 'Stag';
var LION = 'Lion';
var BEAR = 'Bear';
var PEACOCK = 'Peacock';
var CROWN_CLIMATE = [BULL, STAG, LION, BEAR, PEACOCK];
var BUY_COMPANY_SHIP = 'BUY_COMPANY_SHIP';
var DO_NOT_BUY_COMPANY_SHIP = 'BUY_COMPANY_SHIP';
var BUY_AS_MANY_SHIPS_AS_YOU_WISH = 'BUY_AS_MANY_SHIPS_AS_YOU_WISH';
var BgaAnimation = (function () {
    function BgaAnimation(animationFunction, settings) {
        this.animationFunction = animationFunction;
        this.settings = settings;
        this.played = null;
        this.result = null;
        this.playWhenNoAnimation = false;
    }
    return BgaAnimation;
}());
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function attachWithAnimation(animationManager, animation) {
    var _a;
    var settings = animation.settings;
    var element = settings.animation.settings.element;
    var fromRect = element.getBoundingClientRect();
    settings.animation.settings.fromRect = fromRect;
    settings.attachElement.appendChild(element);
    (_a = settings.afterAttach) === null || _a === void 0 ? void 0 : _a.call(settings, element, settings.attachElement);
    return animationManager.play(settings.animation);
}
var BgaAttachWithAnimation = (function (_super) {
    __extends(BgaAttachWithAnimation, _super);
    function BgaAttachWithAnimation(settings) {
        var _this = _super.call(this, attachWithAnimation, settings) || this;
        _this.playWhenNoAnimation = true;
        return _this;
    }
    return BgaAttachWithAnimation;
}(BgaAnimation));
function cumulatedAnimations(animationManager, animation) {
    return animationManager.playSequence(animation.settings.animations);
}
var BgaCumulatedAnimation = (function (_super) {
    __extends(BgaCumulatedAnimation, _super);
    function BgaCumulatedAnimation(settings) {
        var _this = _super.call(this, cumulatedAnimations, settings) || this;
        _this.playWhenNoAnimation = true;
        return _this;
    }
    return BgaCumulatedAnimation;
}(BgaAnimation));
function showScreenCenterAnimation(animationManager, animation) {
    var promise = new Promise(function (success) {
        var _a, _b, _c, _d;
        var settings = animation.settings;
        var element = settings.element;
        var elementBR = element.getBoundingClientRect();
        var xCenter = (elementBR.left + elementBR.right) / 2;
        var yCenter = (elementBR.top + elementBR.bottom) / 2;
        var x = xCenter - (window.innerWidth / 2);
        var y = yCenter - (window.innerHeight / 2);
        var duration = (_a = settings === null || settings === void 0 ? void 0 : settings.duration) !== null && _a !== void 0 ? _a : 500;
        var originalZIndex = element.style.zIndex;
        var originalTransition = element.style.transition;
        var transitionTimingFunction = (_b = settings.transitionTimingFunction) !== null && _b !== void 0 ? _b : 'linear';
        element.style.zIndex = "".concat((_c = settings === null || settings === void 0 ? void 0 : settings.zIndex) !== null && _c !== void 0 ? _c : 10);
        var timeoutId = null;
        var cleanOnTransitionEnd = function () {
            element.style.zIndex = originalZIndex;
            element.style.transition = originalTransition;
            success();
            element.removeEventListener('transitioncancel', cleanOnTransitionEnd);
            element.removeEventListener('transitionend', cleanOnTransitionEnd);
            document.removeEventListener('visibilitychange', cleanOnTransitionEnd);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
        var cleanOnTransitionCancel = function () {
            var _a;
            element.style.transition = "";
            element.offsetHeight;
            element.style.transform = (_a = settings === null || settings === void 0 ? void 0 : settings.finalTransform) !== null && _a !== void 0 ? _a : null;
            element.offsetHeight;
            cleanOnTransitionEnd();
        };
        element.addEventListener('transitioncancel', cleanOnTransitionEnd);
        element.addEventListener('transitionend', cleanOnTransitionEnd);
        document.addEventListener('visibilitychange', cleanOnTransitionCancel);
        element.offsetHeight;
        element.style.transition = "transform ".concat(duration, "ms ").concat(transitionTimingFunction);
        element.offsetHeight;
        element.style.transform = "translate(".concat(-x, "px, ").concat(-y, "px) rotate(").concat((_d = settings === null || settings === void 0 ? void 0 : settings.rotationDelta) !== null && _d !== void 0 ? _d : 0, "deg)");
        timeoutId = setTimeout(cleanOnTransitionEnd, duration + 100);
    });
    return promise;
}
var BgaShowScreenCenterAnimation = (function (_super) {
    __extends(BgaShowScreenCenterAnimation, _super);
    function BgaShowScreenCenterAnimation(settings) {
        return _super.call(this, showScreenCenterAnimation, settings) || this;
    }
    return BgaShowScreenCenterAnimation;
}(BgaAnimation));
function slideToAnimation(animationManager, animation) {
    var promise = new Promise(function (success) {
        var _a, _b, _c, _d, _e;
        var settings = animation.settings;
        var element = settings.element;
        var _f = getDeltaCoordinates(element, settings), x = _f.x, y = _f.y;
        var duration = (_a = settings === null || settings === void 0 ? void 0 : settings.duration) !== null && _a !== void 0 ? _a : 500;
        var originalZIndex = element.style.zIndex;
        var originalTransition = element.style.transition;
        var transitionTimingFunction = (_b = settings.transitionTimingFunction) !== null && _b !== void 0 ? _b : 'linear';
        element.style.zIndex = "".concat((_c = settings === null || settings === void 0 ? void 0 : settings.zIndex) !== null && _c !== void 0 ? _c : 10);
        var timeoutId = null;
        var cleanOnTransitionEnd = function () {
            element.style.zIndex = originalZIndex;
            element.style.transition = originalTransition;
            success();
            element.removeEventListener('transitioncancel', cleanOnTransitionEnd);
            element.removeEventListener('transitionend', cleanOnTransitionEnd);
            document.removeEventListener('visibilitychange', cleanOnTransitionEnd);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
        var cleanOnTransitionCancel = function () {
            var _a;
            element.style.transition = "";
            element.offsetHeight;
            element.style.transform = (_a = settings === null || settings === void 0 ? void 0 : settings.finalTransform) !== null && _a !== void 0 ? _a : null;
            element.offsetHeight;
            cleanOnTransitionEnd();
        };
        element.addEventListener('transitioncancel', cleanOnTransitionEnd);
        element.addEventListener('transitionend', cleanOnTransitionEnd);
        document.addEventListener('visibilitychange', cleanOnTransitionCancel);
        element.offsetHeight;
        element.style.transition = "transform ".concat(duration, "ms ").concat(transitionTimingFunction);
        element.offsetHeight;
        element.style.transform = "translate(".concat(-x, "px, ").concat(-y, "px) rotate(").concat((_d = settings === null || settings === void 0 ? void 0 : settings.rotationDelta) !== null && _d !== void 0 ? _d : 0, "deg) scale(").concat((_e = settings.scale) !== null && _e !== void 0 ? _e : 1, ")");
        timeoutId = setTimeout(cleanOnTransitionEnd, duration + 100);
    });
    return promise;
}
var BgaSlideToAnimation = (function (_super) {
    __extends(BgaSlideToAnimation, _super);
    function BgaSlideToAnimation(settings) {
        return _super.call(this, slideToAnimation, settings) || this;
    }
    return BgaSlideToAnimation;
}(BgaAnimation));
function slideAnimation(animationManager, animation) {
    var promise = new Promise(function (success) {
        var _a, _b, _c, _d, _e;
        var settings = animation.settings;
        var element = settings.element;
        var _f = getDeltaCoordinates(element, settings), x = _f.x, y = _f.y;
        var duration = (_a = settings.duration) !== null && _a !== void 0 ? _a : 500;
        var originalZIndex = element.style.zIndex;
        var originalTransition = element.style.transition;
        var transitionTimingFunction = (_b = settings.transitionTimingFunction) !== null && _b !== void 0 ? _b : 'linear';
        element.style.zIndex = "".concat((_c = settings === null || settings === void 0 ? void 0 : settings.zIndex) !== null && _c !== void 0 ? _c : 10);
        element.style.transition = null;
        element.offsetHeight;
        element.style.transform = "translate(".concat(-x, "px, ").concat(-y, "px) rotate(").concat((_d = settings === null || settings === void 0 ? void 0 : settings.rotationDelta) !== null && _d !== void 0 ? _d : 0, "deg)");
        var timeoutId = null;
        var cleanOnTransitionEnd = function () {
            element.style.zIndex = originalZIndex;
            element.style.transition = originalTransition;
            success();
            element.removeEventListener('transitioncancel', cleanOnTransitionEnd);
            element.removeEventListener('transitionend', cleanOnTransitionEnd);
            document.removeEventListener('visibilitychange', cleanOnTransitionEnd);
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
        var cleanOnTransitionCancel = function () {
            var _a;
            element.style.transition = "";
            element.offsetHeight;
            element.style.transform = (_a = settings === null || settings === void 0 ? void 0 : settings.finalTransform) !== null && _a !== void 0 ? _a : null;
            element.offsetHeight;
            cleanOnTransitionEnd();
        };
        element.addEventListener('transitioncancel', cleanOnTransitionCancel);
        element.addEventListener('transitionend', cleanOnTransitionEnd);
        document.addEventListener('visibilitychange', cleanOnTransitionCancel);
        element.offsetHeight;
        element.style.transition = "transform ".concat(duration, "ms ").concat(transitionTimingFunction);
        element.offsetHeight;
        element.style.transform = (_e = settings === null || settings === void 0 ? void 0 : settings.finalTransform) !== null && _e !== void 0 ? _e : null;
        timeoutId = setTimeout(cleanOnTransitionEnd, duration + 100);
    });
    return promise;
}
var BgaSlideAnimation = (function (_super) {
    __extends(BgaSlideAnimation, _super);
    function BgaSlideAnimation(settings) {
        return _super.call(this, slideAnimation, settings) || this;
    }
    return BgaSlideAnimation;
}(BgaAnimation));
function pauseAnimation(animationManager, animation) {
    var promise = new Promise(function (success) {
        var _a;
        var settings = animation.settings;
        var duration = (_a = settings === null || settings === void 0 ? void 0 : settings.duration) !== null && _a !== void 0 ? _a : 500;
        setTimeout(function () { return success(); }, duration);
    });
    return promise;
}
var BgaPauseAnimation = (function (_super) {
    __extends(BgaPauseAnimation, _super);
    function BgaPauseAnimation(settings) {
        return _super.call(this, pauseAnimation, settings) || this;
    }
    return BgaPauseAnimation;
}(BgaAnimation));
function shouldAnimate(settings) {
    var _a;
    return document.visibilityState !== 'hidden' && !((_a = settings === null || settings === void 0 ? void 0 : settings.game) === null || _a === void 0 ? void 0 : _a.instantaneousMode);
}
function getDeltaCoordinates(element, settings) {
    var _a;
    if (!settings.fromDelta && !settings.fromRect && !settings.fromElement) {
        throw new Error("[bga-animation] fromDelta, fromRect or fromElement need to be set");
    }
    var x = 0;
    var y = 0;
    if (settings.fromDelta) {
        x = settings.fromDelta.x;
        y = settings.fromDelta.y;
    }
    else {
        var originBR = (_a = settings.fromRect) !== null && _a !== void 0 ? _a : settings.fromElement.getBoundingClientRect();
        var originalTransform = element.style.transform;
        element.style.transform = '';
        var destinationBR = element.getBoundingClientRect();
        element.style.transform = originalTransform;
        x = (destinationBR.left + destinationBR.right) / 2 - (originBR.left + originBR.right) / 2;
        y = (destinationBR.top + destinationBR.bottom) / 2 - (originBR.top + originBR.bottom) / 2;
    }
    if (settings.scale) {
        x /= settings.scale;
        y /= settings.scale;
    }
    return { x: x, y: y };
}
function logAnimation(animationManager, animation) {
    var settings = animation.settings;
    var element = settings.element;
    if (element) {
        console.log(animation, settings, element, element.getBoundingClientRect(), element.style.transform);
    }
    else {
        console.log(animation, settings);
    }
    return Promise.resolve(false);
}
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var AnimationManager = (function () {
    function AnimationManager(game, settings) {
        this.game = game;
        this.settings = settings;
        this.zoomManager = settings === null || settings === void 0 ? void 0 : settings.zoomManager;
        if (!game) {
            throw new Error('You must set your game as the first parameter of AnimationManager');
        }
    }
    AnimationManager.prototype.getZoomManager = function () {
        return this.zoomManager;
    };
    AnimationManager.prototype.setZoomManager = function (zoomManager) {
        this.zoomManager = zoomManager;
    };
    AnimationManager.prototype.getSettings = function () {
        return this.settings;
    };
    AnimationManager.prototype.animationsActive = function () {
        return document.visibilityState !== 'hidden' && !this.game.instantaneousMode;
    };
    AnimationManager.prototype.play = function (animation) {
        return __awaiter(this, void 0, void 0, function () {
            var settings, _a;
            var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
            return __generator(this, function (_s) {
                switch (_s.label) {
                    case 0:
                        animation.played = animation.playWhenNoAnimation || this.animationsActive();
                        if (!animation.played) return [3, 2];
                        settings = animation.settings;
                        (_b = settings.animationStart) === null || _b === void 0 ? void 0 : _b.call(settings, animation);
                        (_c = settings.element) === null || _c === void 0 ? void 0 : _c.classList.add((_d = settings.animationClass) !== null && _d !== void 0 ? _d : 'bga-animations_animated');
                        animation.settings = __assign({ duration: (_h = (_f = (_e = animation.settings) === null || _e === void 0 ? void 0 : _e.duration) !== null && _f !== void 0 ? _f : (_g = this.settings) === null || _g === void 0 ? void 0 : _g.duration) !== null && _h !== void 0 ? _h : 500, scale: (_m = (_k = (_j = animation.settings) === null || _j === void 0 ? void 0 : _j.scale) !== null && _k !== void 0 ? _k : (_l = this.zoomManager) === null || _l === void 0 ? void 0 : _l.zoom) !== null && _m !== void 0 ? _m : undefined }, animation.settings);
                        _a = animation;
                        return [4, animation.animationFunction(this, animation)];
                    case 1:
                        _a.result = _s.sent();
                        (_p = (_o = animation.settings).animationEnd) === null || _p === void 0 ? void 0 : _p.call(_o, animation);
                        (_q = settings.element) === null || _q === void 0 ? void 0 : _q.classList.remove((_r = settings.animationClass) !== null && _r !== void 0 ? _r : 'bga-animations_animated');
                        return [3, 3];
                    case 2: return [2, Promise.resolve(animation)];
                    case 3: return [2];
                }
            });
        });
    };
    AnimationManager.prototype.playParallel = function (animations) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2, Promise.all(animations.map(function (animation) { return _this.play(animation); }))];
            });
        });
    };
    AnimationManager.prototype.playSequence = function (animations) {
        return __awaiter(this, void 0, void 0, function () {
            var result, others;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!animations.length) return [3, 3];
                        return [4, this.play(animations[0])];
                    case 1:
                        result = _a.sent();
                        return [4, this.playSequence(animations.slice(1))];
                    case 2:
                        others = _a.sent();
                        return [2, __spreadArray([result], others, true)];
                    case 3: return [2, Promise.resolve([])];
                }
            });
        });
    };
    AnimationManager.prototype.playWithDelay = function (animations, delay) {
        return __awaiter(this, void 0, void 0, function () {
            var promise;
            var _this = this;
            return __generator(this, function (_a) {
                promise = new Promise(function (success) {
                    var promises = [];
                    var _loop_1 = function (i) {
                        setTimeout(function () {
                            promises.push(_this.play(animations[i]));
                            if (i == animations.length - 1) {
                                Promise.all(promises).then(function (result) {
                                    success(result);
                                });
                            }
                        }, i * delay);
                    };
                    for (var i = 0; i < animations.length; i++) {
                        _loop_1(i);
                    }
                });
                return [2, promise];
            });
        });
    };
    AnimationManager.prototype.attachWithAnimation = function (animation, attachElement) {
        var attachWithAnimation = new BgaAttachWithAnimation({
            animation: animation,
            attachElement: attachElement
        });
        return this.play(attachWithAnimation);
    };
    return AnimationManager;
}());
var _this = this;
var moveToAnimation = function (_a) { return __awaiter(_this, [_a], void 0, function (_b) {
    var toElement, fromRect, toRect, top, left, originalPositionStyle;
    var game = _b.game, element = _b.element, toId = _b.toId, _c = _b.remove, remove = _c === void 0 ? false : _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                toElement = document.getElementById(toId);
                fromRect = element.getBoundingClientRect();
                toRect = toElement.getBoundingClientRect();
                top = toRect.top - fromRect.top;
                left = toRect.left - fromRect.left;
                originalPositionStyle = element.style.position;
                element.style.top = "".concat(pxNumber(getComputedStyle(element).top) + top, "px");
                element.style.left = "".concat(pxNumber(getComputedStyle(element).left) + left, "px");
                return [4, game.animationManager.play(new BgaSlideAnimation({
                        element: element,
                        transitionTimingFunction: 'ease-in-out',
                        fromRect: fromRect,
                    }))];
            case 1:
                _d.sent();
                if (remove) {
                    element.remove();
                }
                else {
                    element.style.position = originalPositionStyle;
                }
                return [2];
        }
    });
}); };
var pxNumber = function (px) {
    var value = px || '';
    if (value.endsWith('px')) {
        return Number(px.slice(0, -2));
    }
    else {
        return 0;
    }
};
var DISABLED = 'disabled';
var SELECTABLE = 'selectable';
var SELECTED = 'selected';
define([
    'dojo',
    'dojo/_base/declare',
    'dojo/fx',
    'dojox/fx/ext-dojo/complex',
    'ebg/core/gamegui',
    'ebg/counter',
], function (dojo, declare, noUiSliderDefined) {
    return declare('bgagame.mollyhousefrans', ebg.core.gamegui, new MollyHouse());
});
var Interaction = (function () {
    function Interaction(game) {
        this.game = game;
        this.subscriptions = [];
    }
    Interaction.create = function (game) {
        Interaction.instance = new Interaction(game);
    };
    Interaction.use = function () {
        return Interaction.instance;
    };
    Interaction.prototype.addPlayerButton = function (_a) {
        var id = _a.id, text = _a.text, playerId = _a.playerId, callback = _a.callback, extraClasses = _a.extraClasses;
        this.addSecondaryActionButton({
            id: id,
            text: text,
            callback: callback,
            extraClasses: "player-button ".concat(extraClasses),
        });
        var elt = document.getElementById(id);
        var playerColor = PlayerManager.getInstance()
            .getPlayer(playerId)
            .getColor();
        elt.style.backgroundColor = '#' + playerColor;
    };
    Interaction.prototype.addPrimaryActionButton = function (_a) {
        var id = _a.id, text = _a.text, callback = _a.callback, extraClasses = _a.extraClasses;
        if ($(id)) {
            return;
        }
        this.game
            .framework()
            .addActionButton(id, text, callback, 'customActions', false, 'blue');
        if (extraClasses) {
            dojo.addClass(id, extraClasses);
        }
    };
    Interaction.prototype.addSecondaryActionButton = function (_a) {
        var id = _a.id, text = _a.text, callback = _a.callback, extraClasses = _a.extraClasses;
        if ($(id)) {
            return;
        }
        this.game
            .framework()
            .addActionButton(id, text, callback, 'customActions', false, 'gray');
        if (extraClasses) {
            dojo.addClass(id, extraClasses);
        }
    };
    Interaction.prototype.addCancelButton = function (_a) {
        var _this = this;
        var _b = _a === void 0 ? {} : _a, callback = _b.callback, extraClasses = _b.extraClasses;
        this.addDangerActionButton({
            id: 'cancel_btn',
            text: _('Cancel'),
            callback: function () {
                if (callback) {
                    callback();
                }
                _this.game.onCancel();
            },
            extraClasses: extraClasses,
        });
    };
    Interaction.prototype.addConfirmButton = function (callback) {
        this.addPrimaryActionButton({
            id: 'confirm_btn',
            text: _('Confirm'),
            callback: callback,
        });
    };
    Interaction.prototype.addDangerActionButton = function (_a) {
        var id = _a.id, text = _a.text, callback = _a.callback, extraClasses = _a.extraClasses;
        if ($(id)) {
            return;
        }
        this.game
            .framework()
            .addActionButton(id, text, callback, 'customActions', false, 'red');
        if (extraClasses) {
            dojo.addClass(id, extraClasses);
        }
    };
    Interaction.prototype.addPassButton = function (optionalAction, text) {
        var _this = this;
        if (optionalAction) {
            this.addSecondaryActionButton({
                id: 'pass_btn',
                text: text ? _(text) : _('Pass'),
                callback: function () {
                    return _this.game.framework().bgaPerformAction('actPassOptionalAction');
                },
            });
        }
    };
    Interaction.prototype.addUndoButtons = function (_a) {
        var previousSteps = _a.previousSteps, previousEngineChoices = _a.previousEngineChoices;
        var lastStep = Math.max.apply(Math, __spreadArray([0], previousSteps, false));
        if (lastStep > 0) {
            this.addDangerActionButton({
                id: 'undo_last_step_btn',
                text: _('Undo last step'),
                callback: function () {
                },
            });
        }
        if (previousEngineChoices > 0) {
            this.addDangerActionButton({
                id: 'restart_btn',
                text: _('Restart turn'),
                callback: function () {
                },
            });
        }
    };
    Interaction.prototype.clearPossible = function () {
        this.game.clearPossible();
    };
    Interaction.prototype.clientUpdatePageTitle = function (text, args, nonActivePlayers) {
        if (nonActivePlayers === void 0) { nonActivePlayers = false; }
        var title = this.game.format_string_recursive(_(text), args);
        this.game.gamedatas.gamestate.descriptionmyturn = title;
        if (nonActivePlayers) {
            this.game.gamedatas.gamestate.description = title;
        }
        this.game.framework().updatePageTitle();
    };
    Interaction.prototype.formatStringRecursive = function (log, args) {
        return this.game.format_string_recursive(log, args);
    };
    Interaction.prototype.onClick = function (node, callback, temporary) {
        if (temporary === void 0) { temporary = true; }
        this.game.onClick(node, callback, temporary);
    };
    Interaction.prototype.setSelected = function (node) {
        if (!node) {
            return;
        }
        node.classList.add(SELECTED);
    };
    Interaction.prototype.performAction = function (actionName, args) {
        this.game.framework().bgaPerformAction('actTakeAtomicAction', {
            actionName: actionName,
            args: JSON.stringify(args),
        });
    };
    Interaction.prototype.wait = function (ms) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.game.framework().wait(ms)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    return Interaction;
}());
var MIN_NOTIFICATION_MS = 1200;
var NotificationManager = (function () {
    function NotificationManager(game) {
        this.game = game;
        this.subscriptions = [];
    }
    NotificationManager.create = function (game) {
        NotificationManager.instance = new NotificationManager(game);
    };
    NotificationManager.getInstance = function () {
        return NotificationManager.instance;
    };
    NotificationManager.prototype.setupNotifications = function () {
        var _this = this;
        console.log('notifications subscriptions setup');
        dojo.connect(this.game.framework().notifqueue, 'addToLog', function () {
            _this.game.addLogClass();
        });
        var notifs = [
            'log',
            'message',
        ];
        notifs.forEach(function (notifName) {
            _this.subscriptions.push(dojo.subscribe(notifName, _this, function (notifDetails) {
                debug("notif_".concat(notifName), notifDetails);
                var promise = _this["notif_".concat(notifName)](notifDetails);
                var promises = promise ? [promise] : [];
                var minDuration = 1;
                var msg = _this.game.format_string_recursive(notifDetails.log, notifDetails.args);
                if (msg != '') {
                    $('gameaction_status').innerHTML = msg;
                    $('pagemaintitletext').innerHTML = msg;
                    $('generalactions').innerHTML = '';
                    minDuration = MIN_NOTIFICATION_MS;
                }
                if (_this.game.animationManager.animationsActive()) {
                    Promise.all(__spreadArray(__spreadArray([], promises, true), [sleep(minDuration)], false)).then(function () {
                        return _this.game.framework().notifqueue.onSynchronousNotificationEnd();
                    });
                }
                else {
                    _this.game.framework().notifqueue.setSynchronousDuration(0);
                }
            }));
            _this.game.framework().notifqueue.setSynchronous(notifName, undefined);
            [].forEach(function (notifId) {
                _this.game
                    .framework()
                    .notifqueue.setIgnoreNotificationCheck(notifId, function (notif) {
                    return notif.args.playerId == _this.game.getPlayerId();
                });
            });
        });
    };
    NotificationManager.prototype.destroy = function () {
        dojo.forEach(this.subscriptions, dojo.unsubscribe);
    };
    NotificationManager.prototype.getPlayer = function (playerId) {
        return PlayerManager.getInstance().getPlayer(playerId);
    };
    NotificationManager.prototype.notif_log = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                debug('notif_log', notif.args);
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_message = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2];
            });
        });
    };
    return NotificationManager;
}());
var ConfirmPartialTurn = (function () {
    function ConfirmPartialTurn(game) {
        this.game = game;
    }
    ConfirmPartialTurn.create = function (game) {
        ConfirmPartialTurn.instance = new ConfirmPartialTurn(game);
    };
    ConfirmPartialTurn.getInstance = function () {
        return ConfirmPartialTurn.instance;
    };
    ConfirmPartialTurn.prototype.onEnteringState = function (args) {
        this.args = args;
        this.updateInterfaceInitialStep();
    };
    ConfirmPartialTurn.prototype.onLeavingState = function () {
        debug('Leaving ConfirmTurnState');
    };
    ConfirmPartialTurn.prototype.setDescription = function (activePlayerId) {
    };
    ConfirmPartialTurn.prototype.updateInterfaceInitialStep = function () {
        var _this = this;
        this.game.clearPossible();
        this.game.clientUpdatePageTitle({
            text: _('${you} must confirm the switch of player. You will not be able to restart your turn'),
            args: {
                you: '${you}',
            },
        });
        addConfirmButton(function () {
            return _this.game.framework().bgaPerformAction('actConfirmPartialTurn');
        });
        addUndoButtons(this.args);
    };
    return ConfirmPartialTurn;
}());
var ConfirmTurn = (function () {
    function ConfirmTurn(game) {
        this.game = game;
    }
    ConfirmTurn.create = function (game) {
        ConfirmTurn.instance = new ConfirmTurn(game);
    };
    ConfirmTurn.getInstance = function () {
        return ConfirmTurn.instance;
    };
    ConfirmTurn.prototype.onEnteringState = function (args) {
        this.args = args;
        this.updateInterfaceInitialStep();
    };
    ConfirmTurn.prototype.onLeavingState = function () {
        debug('Leaving ConfirmTurnState');
    };
    ConfirmTurn.prototype.setDescription = function (activePlayerId) {
    };
    ConfirmTurn.prototype.updateInterfaceInitialStep = function () {
        var _this = this;
        this.game.clearPossible();
        this.game.clientUpdatePageTitle({
            text: _('${you} must confirm or restart your turn'),
            args: {
                you: '${you}',
            },
        });
        addConfirmButton(function () {
            return _this.game.framework().bgaPerformAction('actConfirmTurn');
        });
        addUndoButtons(this.args);
    };
    return ConfirmTurn;
}());
var isDebug = window.location.host == 'studio.boardgamearena.com' ||
    window.location.hash.indexOf('debug') > -1;
var debug = isDebug ? console.info.bind(window.console) : function () { };
var addCancelButton = function (props) {
    if (props === void 0) { props = {}; }
    Interaction.use().addCancelButton(props);
};
var addConfirmButton = function (callback) {
    Interaction.use().addConfirmButton(callback);
};
var addDangerActionButton = function (props) {
    Interaction.use().addDangerActionButton(props);
};
var addPassButton = function (optionalAction, text) {
    return Interaction.use().addPassButton(optionalAction, text);
};
var addPlayerButton = function (props) { return Interaction.use().addPlayerButton(props); };
var addPrimaryActionButton = function (props) { return Interaction.use().addPrimaryActionButton(props); };
var addSecondaryActionButton = function (props) { return Interaction.use().addSecondaryActionButton(props); };
var addUndoButtons = function (props) {
    Interaction.use().addUndoButtons(props);
};
var clearPossible = function () {
    Interaction.use().clearPossible();
};
var updatePageTitle = function (text, args, nonActivePlayers) {
    if (args === void 0) { args = {}; }
    if (nonActivePlayers === void 0) { nonActivePlayers = false; }
    return Interaction.use().clientUpdatePageTitle(text, Object.assign(args, { you: '${you}' }), nonActivePlayers);
};
var formatStringRecursive = function (log, args) {
    return Interaction.use().formatStringRecursive(log, args);
};
var setAbsolutePosition = function (elt, scaleVarName, _a) {
    var top = _a.top, left = _a.left;
    if (!elt) {
        return;
    }
    elt.style.top = "calc(var(--".concat(scaleVarName, ") * ").concat(top, "px)");
    elt.style.left = "calc(var(--".concat(scaleVarName, ") * ").concat(left, "px)");
};
var onClick = function (node, callback, temporary) {
    if (temporary === void 0) { temporary = true; }
    var element = typeof node === 'string' ? document.getElementById(node) : node;
    Interaction.use().onClick(element, callback, temporary);
};
var setSelected = function (node) {
    var element = typeof node === 'string' ? document.getElementById(node) : node;
    Interaction.use().setSelected(element);
};
var performAction = function (actionName, args) {
    Interaction.use().clearPossible();
    Interaction.use().performAction(actionName, args);
};
var getPlayerName = function (playerId) {
    return PlayerManager.getInstance().getPlayer(playerId).getName();
};
function sleep(ms) {
    return new Promise(function (r) { return setTimeout(r, ms); });
}
var MollyHouse = (function () {
    function MollyHouse() {
        this._helpMode = false;
        this._last_notif = null;
        this._notif_uid_to_log_id = {};
        this._notif_uid_to_mobile_log_id = {};
        this._selectableNodes = [];
        this.mobileVersion = false;
        this.states = {
            ConfirmPartialTurn: ConfirmPartialTurn,
            ConfirmTurn: ConfirmTurn,
        };
        console.log('MollyHouse constructor');
    }
    MollyHouse.prototype.setup = function (gamedatas) {
        var _this = this;
        var body = document.getElementById('ebd-body');
        this.mobileVersion = body && body.classList.contains('mobile_version');
        dojo.place("<div id='customActions' style='display:inline-block'></div>", $('generalactions'), 'after');
        document
            .getElementById('game_play_area')
            .insertAdjacentHTML('afterbegin', tplPlayArea());
        this.setupDontPreloadImages();
        this.gamedatas = gamedatas;
        this.gameOptions = gamedatas.gameOptions;
        debug('gamedatas', gamedatas);
        this.setupPlayerOrder(gamedatas.playerOrder);
        this._connections = [];
        Object.values(this.states).forEach(function (state) { return state.create(_this); });
        this.animationManager = new AnimationManager(this, {
            duration: 500,
        });
        StaticData.create(this);
        Interaction.create(this);
        PlayerManager.create(this);
        NotificationManager.create(this);
        Board.create(this);
        NotificationManager.getInstance().setupNotifications();
        debug('Ending game setup');
    };
    MollyHouse.prototype.setupPlayerOrder = function (playerOrder) {
        var currentPlayerId = this.getPlayerId();
        var isInGame = playerOrder.includes(currentPlayerId);
        if (isInGame) {
            while (playerOrder[0] !== currentPlayerId) {
                var firstItem = playerOrder.shift();
                playerOrder.push(firstItem);
            }
        }
        this.playerOrder = playerOrder;
    };
    MollyHouse.prototype.setupDontPreloadImages = function () { };
    MollyHouse.prototype.onEnteringState = function (stateName, args) {
        var _this = this;
        var _a;
        console.log('Entering state: ' + stateName, args);
        var activePlayerIds = (_a = args.args) === null || _a === void 0 ? void 0 : _a.activePlayerIds;
        var playerIsActiveAndStateExists = this.framework().isCurrentPlayerActive() && this.states[stateName];
        var currentPlayerId = this.getPlayerId();
        if (playerIsActiveAndStateExists &&
            (!activePlayerIds || activePlayerIds.includes(currentPlayerId))) {
            this.states[stateName].getInstance().onEnteringState(args.args);
        }
        else if (this.states[stateName]) {
            this.states[stateName]
                .getInstance()
                .setDescription(activePlayerIds || Number(args.active_player), args.args);
        }
        if (args.args && args.args.previousSteps) {
            args.args.previousSteps.forEach(function (stepId) {
                var logEntry = $('logs').querySelector(".log.notif_newUndoableStep[data-step=\"".concat(stepId, "\"]"));
                if (logEntry) {
                    _this.onClick(logEntry, function () { return _this.undoToStep({ stepId: stepId }); });
                }
                logEntry = document.querySelector(".chatwindowlogs_zone .log.notif_newUndoableStep[data-step=\"".concat(stepId, "\"]"));
                if (logEntry) {
                    _this.onClick(logEntry, function () { return _this.undoToStep({ stepId: stepId }); });
                }
            });
        }
    };
    MollyHouse.prototype.onLeavingState = function (stateName) {
        if (this.states[stateName]) {
            this.states[stateName].getInstance().onLeavingState();
        }
        this.clearPossible();
    };
    MollyHouse.prototype.onUpdateActionButtons = function (stateName, args) {
    };
    MollyHouse.prototype.destroy = function (elem) {
        if (this.framework().tooltips[elem.id]) {
            this.framework().tooltips[elem.id].destroy();
            delete this.framework().tooltips[elem.id];
        }
        elem.remove();
    };
    MollyHouse.prototype.addActionButtonClient = function (_a) {
        var id = _a.id, text = _a.text, callback = _a.callback, extraClasses = _a.extraClasses, _b = _a.color, color = _b === void 0 ? 'none' : _b;
        if ($(id)) {
            return;
        }
        this.framework().addActionButton(id, text, callback, 'customActions', false, color);
        if (extraClasses) {
            dojo.addClass(id, extraClasses);
        }
    };
    MollyHouse.prototype.clearInterface = function () {
    };
    MollyHouse.prototype.clearPossible = function () {
        this.framework().removeActionButtons();
        dojo.empty('customActions');
        dojo.forEach(this._connections, dojo.disconnect);
        this._connections = [];
        this._selectableNodes.forEach(function (node) {
            if ($(node)) {
                dojo.removeClass(node, SELECTABLE);
                dojo.removeClass(node, SELECTED);
            }
        });
        this._selectableNodes = [];
        dojo.query(".".concat(SELECTABLE)).removeClass(SELECTABLE);
        dojo.query(".".concat(SELECTED)).removeClass(SELECTED);
    };
    MollyHouse.prototype.getPlayerId = function () {
        return Number(this.framework().player_id);
    };
    MollyHouse.prototype.framework = function () {
        return this;
    };
    MollyHouse.prototype.onCancel = function () {
        this.clearPossible();
        this.framework().restoreServerGameState();
    };
    MollyHouse.prototype.clientUpdatePageTitle = function (_a) {
        var text = _a.text, args = _a.args, _b = _a.nonActivePlayers, nonActivePlayers = _b === void 0 ? false : _b;
        var title = this.format_string_recursive(_(text), args);
        if (nonActivePlayers) {
            this.gamedatas.gamestate.description = title;
        }
        else {
            this.gamedatas.gamestate.descriptionmyturn = title;
        }
        this.framework().updatePageTitle();
    };
    MollyHouse.prototype.connect = function (node, action, callback) {
        this._connections.push(dojo.connect($(node), action, callback));
    };
    MollyHouse.prototype.onClick = function (node, callback, temporary) {
        var _this = this;
        if (temporary === void 0) { temporary = true; }
        var safeCallback = function (evt) {
            evt.stopPropagation();
            if (_this.framework().isInterfaceLocked()) {
                return false;
            }
            if (_this._helpMode) {
                return false;
            }
            callback(evt);
        };
        if (temporary) {
            this.connect($(node), 'click', safeCallback);
            dojo.addClass(node, 'selectable');
            this._selectableNodes.push(node);
        }
        else {
            dojo.connect($(node), 'click', safeCallback);
        }
    };
    MollyHouse.prototype.undoToStep = function (_a) {
        var stepId = _a.stepId;
    };
    MollyHouse.prototype.updateLayout = function () {
        var ROOT = document.documentElement;
        var playerAreaContainer = document.getElementById('moho-play-area');
        if (!playerAreaContainer) {
            return;
        }
        var WIDTH = playerAreaContainer.getBoundingClientRect()['width'];
        var LEFT_COLUMN = 1500;
        var RIGHT_COLUMN = 634;
        var LEFT_SIZE = WIDTH;
        var leftColumnScale = LEFT_SIZE / LEFT_COLUMN;
        ROOT.style.setProperty('--leftColumnScale', "".concat(leftColumnScale));
        var RIGHT_SIZE = WIDTH;
        var rightColumnScale = RIGHT_SIZE / RIGHT_COLUMN;
        ROOT.style.setProperty('--rightColumnScale', "".concat(rightColumnScale));
    };
    MollyHouse.prototype.onAddingNewUndoableStepToLog = function (notif) {
        var _this = this;
        var _a;
        if (!$("log_".concat(notif.logId)))
            return;
        var stepId = notif.msg.args.stepId;
        $("log_".concat(notif.logId)).dataset.step = stepId;
        if ($("dockedlog_".concat(notif.mobileLogId)))
            $("dockedlog_".concat(notif.mobileLogId)).dataset.step = stepId;
        if ((_a = this.gamedatas.gamestate.args.previousSteps) === null || _a === void 0 ? void 0 : _a.includes(Number(stepId))) {
            this.onClick($("log_".concat(notif.logId)), function () { return _this.undoToStep({ stepId: stepId }); });
            if ($("dockedlog_".concat(notif.mobileLogId)))
                this.onClick($("dockedlog_".concat(notif.mobileLogId)), function () {
                    return _this.undoToStep({ stepId: stepId });
                });
        }
    };
    MollyHouse.prototype.onScreenWidthChange = function () {
        this.updateLayout();
    };
    MollyHouse.prototype.format_string_recursive = function (log, args) {
        var _this = this;
        try {
            if (log && args && !args.processed) {
                args.processed = true;
                Object.entries(args).forEach(function (_a) {
                    var key = _a[0], value = _a[1];
                    if (key.startsWith('tkn_')) {
                        args[key] = getTokenDiv({
                            key: key,
                            value: value,
                            game: _this,
                        });
                    }
                });
            }
        }
        catch (e) {
            console.error(log, args, 'Exception thrown', e.stack);
        }
        return this.inherited(arguments);
    };
    MollyHouse.prototype.onPlaceLogOnChannel = function (msg) {
        var currentLogId = this.framework().notifqueue.next_log_id;
        var currentMobileLogId = this.framework().next_log_id;
        var res = this.framework().inherited(arguments);
        this._notif_uid_to_log_id[msg.uid] = currentLogId;
        this._notif_uid_to_mobile_log_id[msg.uid] = currentMobileLogId;
        this._last_notif = {
            logId: currentLogId,
            mobileLogId: currentMobileLogId,
            msg: msg,
        };
        return res;
    };
    MollyHouse.prototype.checkLogCancel = function (notifId) {
        if (this.gamedatas.canceledNotifIds != null &&
            this.gamedatas.canceledNotifIds.includes(notifId)) {
        }
    };
    MollyHouse.prototype.cancelLogs = function (notifIds) {
        var _this = this;
        notifIds.forEach(function (uid) {
            if (_this._notif_uid_to_log_id.hasOwnProperty(uid)) {
                var logId = _this._notif_uid_to_log_id[uid];
                if ($('log_' + logId))
                    dojo.addClass('log_' + logId, 'cancel');
            }
            if (_this._notif_uid_to_mobile_log_id.hasOwnProperty(uid)) {
                var mobileLogId = _this._notif_uid_to_mobile_log_id[uid];
                if ($('dockedlog_' + mobileLogId))
                    dojo.addClass('dockedlog_' + mobileLogId, 'cancel');
            }
        });
    };
    MollyHouse.prototype.addLogClass = function () {
        var _a;
        if (this._last_notif == null) {
            return;
        }
        var notif = this._last_notif;
        var type = notif.msg.type;
        if (type == 'history_history') {
            type = notif.msg.args.originalType;
        }
        if ($('log_' + notif.logId)) {
            dojo.addClass('log_' + notif.logId, 'notif_' + type);
            var methodName = 'onAdding' + type.charAt(0).toUpperCase() + type.slice(1) + 'ToLog';
            (_a = this[methodName]) === null || _a === void 0 ? void 0 : _a.call(this, notif);
        }
        if ($('dockedlog_' + notif.mobileLogId)) {
            dojo.addClass('dockedlog_' + notif.mobileLogId, 'notif_' + type);
        }
    };
    MollyHouse.prototype.addLogTooltip = function (_a) {
        var tooltipId = _a.tooltipId, cardId = _a.cardId;
    };
    MollyHouse.prototype.updateLogTooltips = function () {
    };
    MollyHouse.prototype.setLoader = function (value, max) {
        this.framework().inherited(arguments);
        if (!this.framework().isLoadingComplete && value >= 100) {
            this.framework().isLoadingComplete = true;
            this.onLoadingComplete();
        }
    };
    MollyHouse.prototype.onLoadingComplete = function () {
        this.updateLayout();
    };
    MollyHouse.prototype.updatePlayerOrdering = function () {
        this.framework().inherited(arguments);
        var container = document.getElementById('player_boards');
        var infoPanel = document.getElementById('info_panel');
        if (!container) {
            return;
        }
    };
    MollyHouse.prototype.actionError = function (actionName) {
        this.framework().showMessage("cannot take ".concat(actionName, " action"), 'error');
    };
    return MollyHouse;
}());
var Board = (function () {
    function Board(game) {
        this.game = game;
        this.setup(game.gamedatas);
    }
    Board.create = function (game) {
        Board.instance = new Board(game);
    };
    Board.getInstance = function () {
        return Board.instance;
    };
    Board.prototype.setup = function (gamedatas) {
        document
            .getElementById('moho')
            .insertAdjacentHTML('afterbegin', tplBoard(gamedatas));
        this.ui = {
            containers: {
                board: document.getElementById('moho-board'),
                pawns: {},
                selectBoxes: document.getElementById('moho-select-boxes'),
            },
            selectBoxes: {},
        };
        this.setupPawns(gamedatas);
        this.setupSelectBoxes();
    };
    Board.prototype.setupPawns = function (gamedatas) {
        var _this = this;
        ['joy', 'week'].forEach(function (pawn) {
            var elt = (_this.ui.containers.pawns[pawn] =
                document.createElement('div'));
            elt.id = pawn;
            elt.classList.add('moho-pawn');
            elt.setAttribute('data-type', pawn);
            _this.ui.containers.board.appendChild(elt);
        });
        this.updatePawns(gamedatas);
    };
    Board.prototype.setupSelectBoxes = function () {
    };
    Board.prototype.movePawn = function (type, value) {
        return __awaiter(this, void 0, void 0, function () {
            var fromRect;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fromRect = this.ui.containers.pawns[type].getBoundingClientRect();
                        this.updatePawn(type, value);
                        return [4, this.game.animationManager.play(new BgaSlideAnimation({
                                element: this.ui.containers.pawns[type],
                                transitionTimingFunction: 'ease-in-out',
                                fromRect: fromRect,
                            }))];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Board.prototype.updatePawn = function (type, value) {
        var position;
        switch (type) {
            case 'week':
                break;
            case 'joy':
                break;
        }
        setAbsolutePosition(this.ui.containers.pawns[type], BOARD_SCALE, position);
    };
    Board.prototype.updatePawns = function (gamedatas) {
    };
    return Board;
}());
var tplBoard = function (gamedatas) { return "<div id=\"moho-board\">\n  <div id=\"moho-select-boxes\"></div>\n</div>"; };
var LOG_TOKEN_BOLD_TEXT = 'boldText';
var LOG_TOKEN_BOLD_ITALIC_TEXT = 'boldItalicText';
var LOG_TOKEN_NEW_LINE = 'newLine';
var LOG_TOKEN_PLAYER_NAME = 'playerName';
var CLASS_LOG_TOKEN = 'log-token';
var tooltipIdCounter = 0;
var getTokenDiv = function (_a) {
    var key = _a.key, value = _a.value, game = _a.game;
    var splitKey = key.split('_');
    var type = splitKey[1];
    switch (type) {
        case LOG_TOKEN_BOLD_TEXT:
            return tlpLogTokenText({ text: value });
        case LOG_TOKEN_BOLD_ITALIC_TEXT:
            return tlpLogTokenText({ text: value, italic: true });
        case LOG_TOKEN_NEW_LINE:
            return '<br class="moho-new-line">';
        case LOG_TOKEN_PLAYER_NAME:
            var player = PlayerManager.getInstance()
                .getPlayers()
                .find(function (player) { return player.getName() === value; });
            return player
                ? tplLogTokenPlayerName({
                    name: player.getName(),
                    color: player.getColor(),
                })
                : value;
        default:
            return value;
    }
};
var tlpLogTokenText = function (_a) {
    var text = _a.text, tooltipId = _a.tooltipId, _b = _a.italic, italic = _b === void 0 ? false : _b;
    return "<span ".concat(tooltipId ? "id=\"".concat(tooltipId, "\" class=\"log_tooltip\"") : '', " style=\"font-weight: 700;").concat(italic ? ' font-style: italic;' : '', "\">").concat(_(text), "</span>");
};
var tplLogTokenPlayerName = function (_a) {
    var name = _a.name, color = _a.color;
    return "<span class=\"playername\" style=\"color:#".concat(color, ";\">").concat(name, "</span>");
};
var PlayerManager = (function () {
    function PlayerManager(game) {
        this.game = game;
        this.players = {};
        for (var playerId in game.gamedatas.players) {
            var player = game.gamedatas.players[playerId];
            this.players[playerId] = new MohoPlayer(this.game, player);
        }
    }
    PlayerManager.create = function (game) {
        PlayerManager.instance = new PlayerManager(game);
    };
    PlayerManager.getInstance = function () {
        return PlayerManager.instance;
    };
    PlayerManager.prototype.getPlayer = function (playerId) {
        return this.players[playerId];
    };
    PlayerManager.prototype.getPlayers = function () {
        return Object.values(this.players);
    };
    PlayerManager.prototype.getPlayerIds = function () {
        return Object.keys(this.players).map(Number);
    };
    PlayerManager.prototype.updatePlayers = function (gamedatas) {
        for (var playerId in gamedatas.players) {
            this.players[playerId].updatePlayer(gamedatas);
        }
    };
    PlayerManager.prototype.clearInterface = function () {
        var _this = this;
        Object.keys(this.players).forEach(function (playerId) {
            _this.players[playerId].clearInterface();
        });
    };
    PlayerManager.prototype.getCurrentPlayerId = function () {
        return this.game.getPlayerId();
    };
    return PlayerManager;
}());
var MohoPlayer = (function () {
    function MohoPlayer(game, player) {
        this.game = game;
        this.counters = {};
        this.ui = {};
        this.game = game;
        var playerId = player.id;
        this.playerId = Number(playerId);
        this.playerName = player.name;
        this.playerColor = player.color;
        var gamedatas = game.gamedatas;
        this.setupPlayer(gamedatas);
    }
    MohoPlayer.prototype.clearInterface = function () { };
    MohoPlayer.prototype.updatePlayer = function (gamedatas) {
        this.updatePlayerPanel(gamedatas);
    };
    MohoPlayer.prototype.setupPlayer = function (gamedatas) {
        this.setupPlayerPanel(gamedatas);
    };
    MohoPlayer.prototype.setupPlayerPanel = function (gamedatas) {
        var playerGamedatas = gamedatas.players[this.playerId];
        var node = document.querySelector("#player_board_".concat(this.playerId, " .player-board-game-specific-content"));
        if (!node) {
            return;
        }
        node.insertAdjacentHTML('afterbegin', tplPlayerCounters({
            playerId: this.playerId,
        }));
        this.updatePlayerPanel(gamedatas);
    };
    MohoPlayer.prototype.updatePlayerPanel = function (gamedatas) { };
    MohoPlayer.prototype.getColor = function () {
        return this.playerColor;
    };
    MohoPlayer.prototype.getName = function () {
        return this.playerName;
    };
    MohoPlayer.prototype.getPlayerId = function () {
        return this.playerId;
    };
    return MohoPlayer;
}());
var tplPlayerCounters = function (_a) {
    var playerId = _a.playerId;
    return "\n<div id=\"moho-counters-".concat(playerId, "-row-1\" class=\"moho-counters-row\">\n\n</div>\n\n");
};
var StaticData = (function () {
    function StaticData(game) {
        this.game = game;
        this.staticData = game.gamedatas.staticData;
    }
    StaticData.create = function (game) {
        StaticData.instance = new StaticData(game);
    };
    StaticData.get = function () {
        return StaticData.instance;
    };
    return StaticData;
}());
var tplPlayArea = function () { return "\n  <div id=\"moho-play-area\">\n    <div id=\"moho\"></div>\n  </div>\n"; };
