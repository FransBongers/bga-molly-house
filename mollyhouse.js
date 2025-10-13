var DISABLED = 'disabled';
var SELECTABLE = 'selectable';
var SELECTED = 'selected';
var HAND = 'hand';
var DRAW_TOKEN = 'drawToken';
var ADDITIONAL_ROUND = 'additionalRound';
var PREF_CONFIRM_END_OF_TURN_AND_PLAYER_SWITCH_ONLY = 'confirmEndOfTurnPlayerSwitchOnly';
var PREF_SHOW_ANIMATIONS = 'showAnimations';
var PREF_ANIMATION_SPEED = 'animationSpeed';
var PREF_CARD_INFO_IN_TOOLTIP = 'cardInfoInTooltip';
var PREF_CARD_SIZE = 'cardSize';
var PREF_CARD_SIZE_IN_LOG = 'cardSizeInLog';
var PREF_COLUMN_SIZES = 'columnSizes';
var PREF_DISABLED = 'disabled';
var PREF_ENABLED = 'enabled';
var PREF_SINGLE_COLUMN_MAP_SIZE = 'singleColumnMapSize';
var PREF_TWO_COLUMN_LAYOUT = 'twoColumnLayout';
var PREF_SIZE_OF_HAND = 'sizeOfHand';
var BOARD_SCALE = 'boardScale';
var CARD_SCALE = 'cardScale';
var BLUE = 'blue';
var GREEN = 'green';
var PINK = 'pink';
var PURPLE = 'purple';
var YELLOW = 'yellow';
var HEX_COLOR_COLOR_MAP = {
    '8393ca': BLUE,
    a2a882: GREEN,
    e3bcb4: PINK,
    '7f5574': PURPLE,
    fcd873: YELLOW,
};
var _a, _b, _c, _d;
var COMMUNITY = 'community';
var CURRENT_WEEK_MARKER = 'currentWeekMarker';
var COMMUNITY_JOY_MARKER = 'communityJoyMarker';
var INDULGE = 'Indulge';
var LIE_LOW = 'LieLow';
var ACCUSE = 'Accuse';
var CRUISE = 'Cruise';
var SHOP = 'Shop';
var THROW_FESTIVITY = 'ThrowFestivity';
var USE_ITEM = 'UseItem';
var PLAYED_DRESSES = 'playedDresses';
var RED = 'red';
var DESIRE = 'desire';
var THREAT = 'threat';
var MOLLY = 'molly';
var CONVICTED = 'convicted';
var MAJOR = 'major';
var MINOR = 'minor';
var CUPS = 'cups';
var PENTACLES = 'pentacles';
var FANS = 'fans';
var HEARTS = 'hearts';
var SUIT_COLOR_MAP = (_a = {},
    _a[CUPS] = BLUE,
    _a[PENTACLES] = YELLOW,
    _a[FANS] = GREEN,
    _a[HEARTS] = RED,
    _a);
var COLOR_SUIT_MAP = (_b = {},
    _b[BLUE] = CUPS,
    _b[YELLOW] = PENTACLES,
    _b[GREEN] = FANS,
    _b[RED] = HEARTS,
    _b);
var MARKET_0 = 'market_0';
var MARKET_1 = 'market_1';
var MARKET_2 = 'market_2';
var MARKET_3 = 'market_3';
var MARKET_SPOTS = [MARKET_0, MARKET_1, MARKET_2, MARKET_3];
var GOSSIP_PILE = 'gossipPile';
var SAFE_PILE = 'safePile';
var DECK = 'deck';
var DISCARD = 'discard';
var MOTHER_CLAPS = 'MotherClaps';
var ST_PAULS_CATHEDRAL = 'StPaulsCathedral';
var NOBLE_STREET = 'NobleStreet';
var MOORFIELDS = 'Moorfields';
var MISS_MUFFS = 'MissMuffs';
var ROYAL_EXCHANGE = 'RoyalExchange';
var LEADENHALL_STREET = 'LeadenhallStreet';
var LONDON_BRIDGE = 'LondonBridge';
var SUKEY_BEVELLS = 'SukeyBevells';
var OLD_ROUND_COURT = 'OldRoundCourt';
var CANNON_STREET = 'CannonStreet';
var ST_JAMESS_PARK = 'StJamessPark';
var JULIUS_CESAR_TAYLORS = 'JuliusCesarTaylors';
var COVENT_GARDEN_PIAZZA = 'CoventGardenPiazza';
var DUKE_STREET = 'DukeStreet';
var LINCOLNS_INN_BOGHOUSE = 'LincolnsInnBoghouse';
var SITES = [
    MOTHER_CLAPS,
    ST_PAULS_CATHEDRAL,
    NOBLE_STREET,
    MOORFIELDS,
    MISS_MUFFS,
    ROYAL_EXCHANGE,
    LEADENHALL_STREET,
    LONDON_BRIDGE,
    SUKEY_BEVELLS,
    OLD_ROUND_COURT,
    CANNON_STREET,
    ST_JAMESS_PARK,
    JULIUS_CESAR_TAYLORS,
    COVENT_GARDEN_PIAZZA,
    DUKE_STREET,
    LINCOLNS_INN_BOGHOUSE,
];
var MOLLY_HOUSES = [
    MOTHER_CLAPS,
    MISS_MUFFS,
    SUKEY_BEVELLS,
    JULIUS_CESAR_TAYLORS,
];
var SHOP_SITES = [
    NOBLE_STREET,
    LEADENHALL_STREET,
    CANNON_STREET,
    DUKE_STREET,
];
var TOP = 'top';
var BOTTOM = 'bottom';
var LEFT = 'left';
var RIGHT = 'right';
var CRUISING_SITES = (_c = {},
    _c[ST_PAULS_CATHEDRAL] = TOP,
    _c[MOORFIELDS] = TOP,
    _c[ROYAL_EXCHANGE] = RIGHT,
    _c[LONDON_BRIDGE] = RIGHT,
    _c[OLD_ROUND_COURT] = BOTTOM,
    _c[ST_JAMESS_PARK] = BOTTOM,
    _c[COVENT_GARDEN_PIAZZA] = LEFT,
    _c[LINCOLNS_INN_BOGHOUSE] = LEFT,
    _c);
var NEWSPAPER_NOTICE = 'NewspaperNotice';
var BRIBE = 'Bribe';
var VIOLIN = 'Violin';
var DOMINO = 'Domino';
var BOTTLE_OF_GIN = 'BottleOfGin';
var DRESS_OF_CUPS = 'DressOfCups';
var DRESS_OF_PENTACLES = 'DressOfPentacles';
var DRESS_OF_FANS = 'DressOfFans';
var DRESS_OF_HEARTS = 'DressOfHearts';
var ITEM_DISTRIBUTIION = (_d = {},
    _d[NEWSPAPER_NOTICE] = 3,
    _d[BRIBE] = 3,
    _d[VIOLIN] = 3,
    _d[DOMINO] = 3,
    _d[BOTTLE_OF_GIN] = 4,
    _d[DRESS_OF_CUPS] = 1,
    _d[DRESS_OF_PENTACLES] = 1,
    _d[DRESS_OF_FANS] = 1,
    _d[DRESS_OF_HEARTS] = 1,
    _d);
var SURPRISE_BALL = 'SurpriseBall';
var CHRISTENING = 'Christening';
var DANCE = 'Dance';
var QUIET_GATHERING = 'QuietGathering';
var FESTIVITIES = [SURPRISE_BALL, CHRISTENING, DANCE, QUIET_GATHERING];
var MOVE_WEEK_MARKER = 'moveWeekMarker';
var LOYAL = 'Loyal';
var INFORMER = 'Informer';
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
var CardStock = (function () {
    function CardStock(manager, element, settings) {
        this.manager = manager;
        this.element = element;
        this.settings = settings;
        this.cards = [];
        this.selectedCards = [];
        this.selectionMode = 'none';
        manager.addStock(this);
        element === null || element === void 0 ? void 0 : element.classList.add('card-stock');
        this.bindClick();
        this.sort = settings === null || settings === void 0 ? void 0 : settings.sort;
    }
    CardStock.prototype.remove = function () {
        var _a;
        this.manager.removeStock(this);
        (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
    };
    CardStock.prototype.getCards = function () {
        return this.cards.slice();
    };
    CardStock.prototype.isEmpty = function () {
        return !this.cards.length;
    };
    CardStock.prototype.getSelection = function () {
        return this.selectedCards.slice();
    };
    CardStock.prototype.isSelected = function (card) {
        var _this = this;
        return this.selectedCards.some(function (c) { return _this.manager.getId(c) == _this.manager.getId(card); });
    };
    CardStock.prototype.contains = function (card) {
        var _this = this;
        return this.cards.some(function (c) { return _this.manager.getId(c) == _this.manager.getId(card); });
    };
    CardStock.prototype.getCardElement = function (card) {
        return this.manager.getCardElement(card);
    };
    CardStock.prototype.canAddCard = function (card, settings) {
        return !this.contains(card);
    };
    CardStock.prototype.addCard = function (card, animation, settings) {
        var _this = this;
        var _a, _b, _c, _d;
        if (!this.canAddCard(card, settings)) {
            return Promise.resolve(false);
        }
        var promise;
        var originStock = this.manager.getCardStock(card);
        var index = this.getNewCardIndex(card);
        var settingsWithIndex = __assign({ index: index }, (settings !== null && settings !== void 0 ? settings : {}));
        var updateInformations = (_a = settingsWithIndex.updateInformations) !== null && _a !== void 0 ? _a : true;
        var needsCreation = true;
        if (originStock === null || originStock === void 0 ? void 0 : originStock.contains(card)) {
            var element = this.getCardElement(card);
            if (element) {
                promise = this.moveFromOtherStock(card, element, __assign(__assign({}, animation), { fromStock: originStock }), settingsWithIndex);
                needsCreation = false;
                if (!updateInformations) {
                    element.dataset.side = ((_b = settingsWithIndex === null || settingsWithIndex === void 0 ? void 0 : settingsWithIndex.visible) !== null && _b !== void 0 ? _b : this.manager.isCardVisible(card)) ? 'front' : 'back';
                }
            }
        }
        else if ((_c = animation === null || animation === void 0 ? void 0 : animation.fromStock) === null || _c === void 0 ? void 0 : _c.contains(card)) {
            var element = this.getCardElement(card);
            if (element) {
                promise = this.moveFromOtherStock(card, element, animation, settingsWithIndex);
                needsCreation = false;
            }
        }
        if (needsCreation) {
            var element = this.manager.createCardElement(card, ((_d = settingsWithIndex === null || settingsWithIndex === void 0 ? void 0 : settingsWithIndex.visible) !== null && _d !== void 0 ? _d : this.manager.isCardVisible(card)));
            promise = this.moveFromElement(card, element, animation, settingsWithIndex);
        }
        if (settingsWithIndex.index !== null && settingsWithIndex.index !== undefined) {
            this.cards.splice(index, 0, card);
        }
        else {
            this.cards.push(card);
        }
        if (updateInformations) {
            this.manager.updateCardInformations(card);
        }
        if (!promise) {
            console.warn("CardStock.addCard didn't return a Promise");
            promise = Promise.resolve(false);
        }
        if (this.selectionMode !== 'none') {
            promise.then(function () { var _a; return _this.setSelectableCard(card, (_a = settingsWithIndex.selectable) !== null && _a !== void 0 ? _a : true); });
        }
        return promise;
    };
    CardStock.prototype.getNewCardIndex = function (card) {
        if (this.sort) {
            var otherCards = this.getCards();
            for (var i = 0; i < otherCards.length; i++) {
                var otherCard = otherCards[i];
                if (this.sort(card, otherCard) < 0) {
                    return i;
                }
            }
            return otherCards.length;
        }
        else {
            return undefined;
        }
    };
    CardStock.prototype.addCardElementToParent = function (cardElement, settings) {
        var _a;
        var parent = (_a = settings === null || settings === void 0 ? void 0 : settings.forceToElement) !== null && _a !== void 0 ? _a : this.element;
        if ((settings === null || settings === void 0 ? void 0 : settings.index) === null || (settings === null || settings === void 0 ? void 0 : settings.index) === undefined || !parent.children.length || (settings === null || settings === void 0 ? void 0 : settings.index) >= parent.children.length) {
            parent.appendChild(cardElement);
        }
        else {
            parent.insertBefore(cardElement, parent.children[settings.index]);
        }
    };
    CardStock.prototype.moveFromOtherStock = function (card, cardElement, animation, settings) {
        var promise;
        var element = animation.fromStock.contains(card) ? this.manager.getCardElement(card) : animation.fromStock.element;
        var fromRect = element === null || element === void 0 ? void 0 : element.getBoundingClientRect();
        this.addCardElementToParent(cardElement, settings);
        this.removeSelectionClassesFromElement(cardElement);
        promise = fromRect ? this.animationFromElement(cardElement, fromRect, {
            originalSide: animation.originalSide,
            rotationDelta: animation.rotationDelta,
            animation: animation.animation,
        }) : Promise.resolve(false);
        if (animation.fromStock && animation.fromStock != this) {
            animation.fromStock.removeCard(card);
        }
        if (!promise) {
            console.warn("CardStock.moveFromOtherStock didn't return a Promise");
            promise = Promise.resolve(false);
        }
        return promise;
    };
    CardStock.prototype.moveFromElement = function (card, cardElement, animation, settings) {
        var promise;
        this.addCardElementToParent(cardElement, settings);
        if (animation) {
            if (animation.fromStock) {
                promise = this.animationFromElement(cardElement, animation.fromStock.element.getBoundingClientRect(), {
                    originalSide: animation.originalSide,
                    rotationDelta: animation.rotationDelta,
                    animation: animation.animation,
                });
                animation.fromStock.removeCard(card);
            }
            else if (animation.fromElement) {
                promise = this.animationFromElement(cardElement, animation.fromElement.getBoundingClientRect(), {
                    originalSide: animation.originalSide,
                    rotationDelta: animation.rotationDelta,
                    animation: animation.animation,
                });
            }
        }
        else {
            promise = Promise.resolve(false);
        }
        if (!promise) {
            console.warn("CardStock.moveFromElement didn't return a Promise");
            promise = Promise.resolve(false);
        }
        return promise;
    };
    CardStock.prototype.addCards = function (cards_1, animation_1, settings_1) {
        return __awaiter(this, arguments, void 0, function (cards, animation, settings, shift) {
            var promises, result, others, _loop_2, i, results;
            var _this = this;
            if (shift === void 0) { shift = false; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.manager.animationsActive()) {
                            shift = false;
                        }
                        promises = [];
                        if (!(shift === true)) return [3, 4];
                        if (!cards.length) return [3, 3];
                        return [4, this.addCard(cards[0], animation, settings)];
                    case 1:
                        result = _a.sent();
                        return [4, this.addCards(cards.slice(1), animation, settings, shift)];
                    case 2:
                        others = _a.sent();
                        return [2, result || others];
                    case 3: return [3, 5];
                    case 4:
                        if (typeof shift === 'number') {
                            _loop_2 = function (i) {
                                setTimeout(function () { return promises.push(_this.addCard(cards[i], animation, settings)); }, i * shift);
                            };
                            for (i = 0; i < cards.length; i++) {
                                _loop_2(i);
                            }
                        }
                        else {
                            promises = cards.map(function (card) { return _this.addCard(card, animation, settings); });
                        }
                        _a.label = 5;
                    case 5: return [4, Promise.all(promises)];
                    case 6:
                        results = _a.sent();
                        return [2, results.some(function (result) { return result; })];
                }
            });
        });
    };
    CardStock.prototype.removeCard = function (card, settings) {
        var promise;
        if (this.contains(card) && this.element.contains(this.getCardElement(card))) {
            promise = this.manager.removeCard(card, settings);
        }
        else {
            promise = Promise.resolve(false);
        }
        this.cardRemoved(card, settings);
        return promise;
    };
    CardStock.prototype.cardRemoved = function (card, settings) {
        var _this = this;
        var index = this.cards.findIndex(function (c) { return _this.manager.getId(c) == _this.manager.getId(card); });
        if (index !== -1) {
            this.cards.splice(index, 1);
        }
        if (this.selectedCards.find(function (c) { return _this.manager.getId(c) == _this.manager.getId(card); })) {
            this.unselectCard(card);
        }
    };
    CardStock.prototype.removeCards = function (cards, settings) {
        return __awaiter(this, void 0, void 0, function () {
            var promises, results;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        promises = cards.map(function (card) { return _this.removeCard(card, settings); });
                        return [4, Promise.all(promises)];
                    case 1:
                        results = _a.sent();
                        return [2, results.some(function (result) { return result; })];
                }
            });
        });
    };
    CardStock.prototype.removeAll = function (settings) {
        var _this = this;
        var cards = this.getCards();
        cards.forEach(function (card) { return _this.removeCard(card, settings); });
    };
    CardStock.prototype.setSelectionMode = function (selectionMode, selectableCards) {
        var _this = this;
        if (selectionMode !== this.selectionMode) {
            this.unselectAll(true);
        }
        this.cards.forEach(function (card) { return _this.setSelectableCard(card, selectionMode != 'none'); });
        this.element.classList.toggle('bga-cards_selectable-stock', selectionMode != 'none');
        this.selectionMode = selectionMode;
        if (selectionMode === 'none') {
            this.getCards().forEach(function (card) { return _this.removeSelectionClasses(card); });
        }
        else {
            this.setSelectableCards(selectableCards !== null && selectableCards !== void 0 ? selectableCards : this.getCards());
        }
    };
    CardStock.prototype.setSelectableCard = function (card, selectable) {
        if (this.selectionMode === 'none') {
            return;
        }
        var element = this.getCardElement(card);
        var selectableCardsClass = this.getSelectableCardClass();
        var unselectableCardsClass = this.getUnselectableCardClass();
        if (selectableCardsClass) {
            element === null || element === void 0 ? void 0 : element.classList.toggle(selectableCardsClass, selectable);
        }
        if (unselectableCardsClass) {
            element === null || element === void 0 ? void 0 : element.classList.toggle(unselectableCardsClass, !selectable);
        }
        if (!selectable && this.isSelected(card)) {
            this.unselectCard(card, true);
        }
    };
    CardStock.prototype.setSelectableCards = function (selectableCards) {
        var _this = this;
        if (this.selectionMode === 'none') {
            return;
        }
        var selectableCardsIds = (selectableCards !== null && selectableCards !== void 0 ? selectableCards : this.getCards()).map(function (card) { return _this.manager.getId(card); });
        this.cards.forEach(function (card) {
            return _this.setSelectableCard(card, selectableCardsIds.includes(_this.manager.getId(card)));
        });
    };
    CardStock.prototype.selectCard = function (card, silent) {
        var _this = this;
        var _a;
        if (silent === void 0) { silent = false; }
        if (this.selectionMode == 'none') {
            return;
        }
        var element = this.getCardElement(card);
        var selectableCardsClass = this.getSelectableCardClass();
        if (!element || !element.classList.contains(selectableCardsClass)) {
            return;
        }
        if (this.selectionMode === 'single') {
            this.cards.filter(function (c) { return _this.manager.getId(c) != _this.manager.getId(card); }).forEach(function (c) { return _this.unselectCard(c, true); });
        }
        var selectedCardsClass = this.getSelectedCardClass();
        element.classList.add(selectedCardsClass);
        this.selectedCards.push(card);
        if (!silent) {
            (_a = this.onSelectionChange) === null || _a === void 0 ? void 0 : _a.call(this, this.selectedCards.slice(), card);
        }
    };
    CardStock.prototype.unselectCard = function (card, silent) {
        var _this = this;
        var _a;
        if (silent === void 0) { silent = false; }
        var element = this.getCardElement(card);
        var selectedCardsClass = this.getSelectedCardClass();
        element === null || element === void 0 ? void 0 : element.classList.remove(selectedCardsClass);
        var index = this.selectedCards.findIndex(function (c) { return _this.manager.getId(c) == _this.manager.getId(card); });
        if (index !== -1) {
            this.selectedCards.splice(index, 1);
        }
        if (!silent) {
            (_a = this.onSelectionChange) === null || _a === void 0 ? void 0 : _a.call(this, this.selectedCards.slice(), card);
        }
    };
    CardStock.prototype.selectAll = function (silent) {
        var _this = this;
        var _a;
        if (silent === void 0) { silent = false; }
        if (this.selectionMode == 'none') {
            return;
        }
        this.cards.forEach(function (c) { return _this.selectCard(c, true); });
        if (!silent) {
            (_a = this.onSelectionChange) === null || _a === void 0 ? void 0 : _a.call(this, this.selectedCards.slice(), null);
        }
    };
    CardStock.prototype.unselectAll = function (silent) {
        var _this = this;
        var _a;
        if (silent === void 0) { silent = false; }
        var cards = this.getCards();
        cards.forEach(function (c) { return _this.unselectCard(c, true); });
        if (!silent) {
            (_a = this.onSelectionChange) === null || _a === void 0 ? void 0 : _a.call(this, this.selectedCards.slice(), null);
        }
    };
    CardStock.prototype.bindClick = function () {
        var _this = this;
        var _a;
        (_a = this.element) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (event) {
            var cardDiv = event.target.closest('.card');
            if (!cardDiv) {
                return;
            }
            var card = _this.cards.find(function (c) { return _this.manager.getId(c) == cardDiv.id; });
            if (!card) {
                return;
            }
            _this.cardClick(card);
        });
    };
    CardStock.prototype.cardClick = function (card) {
        var _this = this;
        var _a;
        if (this.selectionMode != 'none') {
            var alreadySelected = this.selectedCards.some(function (c) { return _this.manager.getId(c) == _this.manager.getId(card); });
            if (alreadySelected) {
                this.unselectCard(card);
            }
            else {
                this.selectCard(card);
            }
        }
        (_a = this.onCardClick) === null || _a === void 0 ? void 0 : _a.call(this, card);
    };
    CardStock.prototype.animationFromElement = function (element, fromRect, settings) {
        return __awaiter(this, void 0, void 0, function () {
            var side, cardSides_1, animation, result;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        side = element.dataset.side;
                        if (settings.originalSide && settings.originalSide != side) {
                            cardSides_1 = element.getElementsByClassName('card-sides')[0];
                            cardSides_1.style.transition = 'none';
                            element.dataset.side = settings.originalSide;
                            setTimeout(function () {
                                cardSides_1.style.transition = null;
                                element.dataset.side = side;
                            });
                        }
                        animation = settings.animation;
                        if (animation) {
                            animation.settings.element = element;
                            animation.settings.fromRect = fromRect;
                        }
                        else {
                            animation = new BgaSlideAnimation({ element: element, fromRect: fromRect });
                        }
                        return [4, this.manager.animationManager.play(animation)];
                    case 1:
                        result = _b.sent();
                        return [2, (_a = result === null || result === void 0 ? void 0 : result.played) !== null && _a !== void 0 ? _a : false];
                }
            });
        });
    };
    CardStock.prototype.setCardVisible = function (card, visible, settings) {
        this.manager.setCardVisible(card, visible, settings);
    };
    CardStock.prototype.flipCard = function (card, settings) {
        this.manager.flipCard(card, settings);
    };
    CardStock.prototype.getSelectableCardClass = function () {
        var _a, _b;
        return ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.selectableCardClass) === undefined ? this.manager.getSelectableCardClass() : (_b = this.settings) === null || _b === void 0 ? void 0 : _b.selectableCardClass;
    };
    CardStock.prototype.getUnselectableCardClass = function () {
        var _a, _b;
        return ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.unselectableCardClass) === undefined ? this.manager.getUnselectableCardClass() : (_b = this.settings) === null || _b === void 0 ? void 0 : _b.unselectableCardClass;
    };
    CardStock.prototype.getSelectedCardClass = function () {
        var _a, _b;
        return ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.selectedCardClass) === undefined ? this.manager.getSelectedCardClass() : (_b = this.settings) === null || _b === void 0 ? void 0 : _b.selectedCardClass;
    };
    CardStock.prototype.removeSelectionClasses = function (card) {
        this.removeSelectionClassesFromElement(this.getCardElement(card));
    };
    CardStock.prototype.removeSelectionClassesFromElement = function (cardElement) {
        var selectableCardsClass = this.getSelectableCardClass();
        var unselectableCardsClass = this.getUnselectableCardClass();
        var selectedCardsClass = this.getSelectedCardClass();
        cardElement === null || cardElement === void 0 ? void 0 : cardElement.classList.remove(selectableCardsClass, unselectableCardsClass, selectedCardsClass);
    };
    return CardStock;
}());
var SlideAndBackAnimation = (function (_super) {
    __extends(SlideAndBackAnimation, _super);
    function SlideAndBackAnimation(manager, element, tempElement) {
        var distance = (manager.getCardWidth() + manager.getCardHeight()) / 2;
        var angle = Math.random() * Math.PI * 2;
        var fromDelta = {
            x: distance * Math.cos(angle),
            y: distance * Math.sin(angle),
        };
        return _super.call(this, {
            animations: [
                new BgaSlideToAnimation({ element: element, fromDelta: fromDelta, duration: 250 }),
                new BgaSlideAnimation({ element: element, fromDelta: fromDelta, duration: 250, animationEnd: tempElement ? (function () { return element.remove(); }) : undefined }),
            ]
        }) || this;
    }
    return SlideAndBackAnimation;
}(BgaCumulatedAnimation));
var Deck = (function (_super) {
    __extends(Deck, _super);
    function Deck(manager, element, settings) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
        var _this = _super.call(this, manager, element) || this;
        _this.manager = manager;
        _this.element = element;
        element.classList.add('deck');
        var cardWidth = _this.manager.getCardWidth();
        var cardHeight = _this.manager.getCardHeight();
        if (cardWidth && cardHeight) {
            _this.element.style.setProperty('--width', "".concat(cardWidth, "px"));
            _this.element.style.setProperty('--height', "".concat(cardHeight, "px"));
        }
        else {
            throw new Error("You need to set cardWidth and cardHeight in the card manager to use Deck.");
        }
        _this.fakeCardGenerator = (_a = settings === null || settings === void 0 ? void 0 : settings.fakeCardGenerator) !== null && _a !== void 0 ? _a : manager.getFakeCardGenerator();
        _this.thicknesses = (_b = settings.thicknesses) !== null && _b !== void 0 ? _b : [0, 2, 5, 10, 20, 30];
        _this.setCardNumber((_c = settings.cardNumber) !== null && _c !== void 0 ? _c : 0);
        _this.autoUpdateCardNumber = (_d = settings.autoUpdateCardNumber) !== null && _d !== void 0 ? _d : true;
        _this.autoRemovePreviousCards = (_e = settings.autoRemovePreviousCards) !== null && _e !== void 0 ? _e : true;
        var shadowDirection = (_f = settings.shadowDirection) !== null && _f !== void 0 ? _f : 'bottom-right';
        var shadowDirectionSplit = shadowDirection.split('-');
        var xShadowShift = shadowDirectionSplit.includes('right') ? 1 : (shadowDirectionSplit.includes('left') ? -1 : 0);
        var yShadowShift = shadowDirectionSplit.includes('bottom') ? 1 : (shadowDirectionSplit.includes('top') ? -1 : 0);
        _this.element.style.setProperty('--xShadowShift', '' + xShadowShift);
        _this.element.style.setProperty('--yShadowShift', '' + yShadowShift);
        if (settings.topCard) {
            _this.addCard(settings.topCard);
        }
        else if (settings.cardNumber > 0) {
            _this.addCard(_this.getFakeCard());
        }
        if (settings.counter && ((_g = settings.counter.show) !== null && _g !== void 0 ? _g : true)) {
            if (settings.cardNumber === null || settings.cardNumber === undefined) {
                console.warn("Deck card counter created without a cardNumber");
            }
            _this.createCounter((_h = settings.counter.position) !== null && _h !== void 0 ? _h : 'bottom', (_j = settings.counter.extraClasses) !== null && _j !== void 0 ? _j : 'round', settings.counter.counterId);
            if ((_k = settings.counter) === null || _k === void 0 ? void 0 : _k.hideWhenEmpty) {
                _this.element.querySelector('.bga-cards_deck-counter').classList.add('hide-when-empty');
            }
        }
        _this.setCardNumber((_l = settings.cardNumber) !== null && _l !== void 0 ? _l : 0);
        return _this;
    }
    Deck.prototype.createCounter = function (counterPosition, extraClasses, counterId) {
        var left = counterPosition.includes('right') ? 100 : (counterPosition.includes('left') ? 0 : 50);
        var top = counterPosition.includes('bottom') ? 100 : (counterPosition.includes('top') ? 0 : 50);
        this.element.style.setProperty('--bga-cards-deck-left', "".concat(left, "%"));
        this.element.style.setProperty('--bga-cards-deck-top', "".concat(top, "%"));
        this.element.insertAdjacentHTML('beforeend', "\n            <div ".concat(counterId ? "id=\"".concat(counterId, "\"") : '', " class=\"bga-cards_deck-counter ").concat(extraClasses, "\"></div>\n        "));
    };
    Deck.prototype.getCardNumber = function () {
        return this.cardNumber;
    };
    Deck.prototype.setCardNumber = function (cardNumber, topCard) {
        var _this = this;
        if (topCard === void 0) { topCard = undefined; }
        var promise = topCard === null || cardNumber == 0 ?
            Promise.resolve(false) :
            _super.prototype.addCard.call(this, topCard || this.getFakeCard(), undefined, { autoUpdateCardNumber: false });
        this.cardNumber = cardNumber;
        this.element.dataset.empty = (this.cardNumber == 0).toString();
        var thickness = 0;
        this.thicknesses.forEach(function (threshold, index) {
            if (_this.cardNumber >= threshold) {
                thickness = index;
            }
        });
        this.element.style.setProperty('--thickness', "".concat(thickness, "px"));
        var counterDiv = this.element.querySelector('.bga-cards_deck-counter');
        if (counterDiv) {
            counterDiv.innerHTML = "".concat(cardNumber);
        }
        return promise;
    };
    Deck.prototype.addCard = function (card, animation, settings) {
        var _this = this;
        var _a, _b;
        if ((_a = settings === null || settings === void 0 ? void 0 : settings.autoUpdateCardNumber) !== null && _a !== void 0 ? _a : this.autoUpdateCardNumber) {
            this.setCardNumber(this.cardNumber + 1, null);
        }
        var promise = _super.prototype.addCard.call(this, card, animation, settings);
        if ((_b = settings === null || settings === void 0 ? void 0 : settings.autoRemovePreviousCards) !== null && _b !== void 0 ? _b : this.autoRemovePreviousCards) {
            promise.then(function () {
                var previousCards = _this.getCards().slice(0, -1);
                _this.removeCards(previousCards, { autoUpdateCardNumber: false });
            });
        }
        return promise;
    };
    Deck.prototype.cardRemoved = function (card, settings) {
        var _a;
        if ((_a = settings === null || settings === void 0 ? void 0 : settings.autoUpdateCardNumber) !== null && _a !== void 0 ? _a : this.autoUpdateCardNumber) {
            this.setCardNumber(this.cardNumber - 1);
        }
        _super.prototype.cardRemoved.call(this, card, settings);
    };
    Deck.prototype.getTopCard = function () {
        var cards = this.getCards();
        return cards.length ? cards[cards.length - 1] : null;
    };
    Deck.prototype.shuffle = function (settings) {
        return __awaiter(this, void 0, void 0, function () {
            var animatedCardsMax, animatedCards, elements, getFakeCard, uid, i, newCard, newElement, pauseDelayAfterAnimation;
            var _this = this;
            var _a, _b, _c;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        animatedCardsMax = (_a = settings === null || settings === void 0 ? void 0 : settings.animatedCardsMax) !== null && _a !== void 0 ? _a : 10;
                        this.addCard((_b = settings === null || settings === void 0 ? void 0 : settings.newTopCard) !== null && _b !== void 0 ? _b : this.getFakeCard(), undefined, { autoUpdateCardNumber: false });
                        if (!this.manager.animationsActive()) {
                            return [2, Promise.resolve(false)];
                        }
                        animatedCards = Math.min(10, animatedCardsMax, this.getCardNumber());
                        if (!(animatedCards > 1)) return [3, 4];
                        elements = [this.getCardElement(this.getTopCard())];
                        getFakeCard = function (uid) {
                            var newCard;
                            if (settings === null || settings === void 0 ? void 0 : settings.fakeCardSetter) {
                                newCard = {};
                                settings === null || settings === void 0 ? void 0 : settings.fakeCardSetter(newCard, uid);
                            }
                            else {
                                newCard = _this.fakeCardGenerator("".concat(_this.element.id, "-shuffle-").concat(uid));
                            }
                            return newCard;
                        };
                        uid = 0;
                        for (i = elements.length; i <= animatedCards; i++) {
                            newCard = void 0;
                            do {
                                newCard = getFakeCard(uid++);
                            } while (this.manager.getCardElement(newCard));
                            newElement = this.manager.createCardElement(newCard, false);
                            newElement.dataset.tempCardForShuffleAnimation = 'true';
                            this.element.prepend(newElement);
                            elements.push(newElement);
                        }
                        return [4, this.manager.animationManager.playWithDelay(elements.map(function (element) { return new SlideAndBackAnimation(_this.manager, element, element.dataset.tempCardForShuffleAnimation == 'true'); }), 50)];
                    case 1:
                        _d.sent();
                        pauseDelayAfterAnimation = (_c = settings === null || settings === void 0 ? void 0 : settings.pauseDelayAfterAnimation) !== null && _c !== void 0 ? _c : 500;
                        if (!(pauseDelayAfterAnimation > 0)) return [3, 3];
                        return [4, this.manager.animationManager.play(new BgaPauseAnimation({ duration: pauseDelayAfterAnimation }))];
                    case 2:
                        _d.sent();
                        _d.label = 3;
                    case 3: return [2, true];
                    case 4: return [2, Promise.resolve(false)];
                }
            });
        });
    };
    Deck.prototype.getFakeCard = function () {
        return this.fakeCardGenerator(this.element.id);
    };
    return Deck;
}(CardStock));
var HandStock = (function (_super) {
    __extends(HandStock, _super);
    function HandStock(manager, element, settings) {
        var _a, _b, _c, _d;
        var _this = _super.call(this, manager, element, settings) || this;
        _this.manager = manager;
        _this.element = element;
        element.classList.add('hand-stock');
        element.style.setProperty('--card-overlap', (_a = settings.cardOverlap) !== null && _a !== void 0 ? _a : '60px');
        element.style.setProperty('--card-shift', (_b = settings.cardShift) !== null && _b !== void 0 ? _b : '15px');
        element.style.setProperty('--card-inclination', "".concat((_c = settings.inclination) !== null && _c !== void 0 ? _c : 12, "deg"));
        _this.inclination = (_d = settings.inclination) !== null && _d !== void 0 ? _d : 4;
        return _this;
    }
    HandStock.prototype.addCard = function (card, animation, settings) {
        var promise = _super.prototype.addCard.call(this, card, animation, settings);
        this.updateAngles();
        return promise;
    };
    HandStock.prototype.cardRemoved = function (card, settings) {
        _super.prototype.cardRemoved.call(this, card, settings);
        this.updateAngles();
    };
    HandStock.prototype.updateAngles = function () {
        var _this = this;
        var middle = (this.cards.length - 1) / 2;
        this.cards.forEach(function (card, index) {
            var middleIndex = index - middle;
            var cardElement = _this.getCardElement(card);
            cardElement.style.setProperty('--hand-stock-middle-index', "".concat(middleIndex));
            cardElement.style.setProperty('--hand-stock-middle-index-abs', "".concat(Math.abs(middleIndex)));
        });
    };
    return HandStock;
}(CardStock));
var LineStock = (function (_super) {
    __extends(LineStock, _super);
    function LineStock(manager, element, settings) {
        var _a, _b, _c, _d;
        var _this = _super.call(this, manager, element, settings) || this;
        _this.manager = manager;
        _this.element = element;
        element.classList.add('line-stock');
        element.dataset.center = ((_a = settings === null || settings === void 0 ? void 0 : settings.center) !== null && _a !== void 0 ? _a : true).toString();
        element.style.setProperty('--wrap', (_b = settings === null || settings === void 0 ? void 0 : settings.wrap) !== null && _b !== void 0 ? _b : 'wrap');
        element.style.setProperty('--direction', (_c = settings === null || settings === void 0 ? void 0 : settings.direction) !== null && _c !== void 0 ? _c : 'row');
        element.style.setProperty('--gap', (_d = settings === null || settings === void 0 ? void 0 : settings.gap) !== null && _d !== void 0 ? _d : '8px');
        return _this;
    }
    return LineStock;
}(CardStock));
var ManualPositionStock = (function (_super) {
    __extends(ManualPositionStock, _super);
    function ManualPositionStock(manager, element, settings, updateDisplay) {
        var _this = _super.call(this, manager, element, settings) || this;
        _this.manager = manager;
        _this.element = element;
        _this.updateDisplay = updateDisplay;
        element.classList.add('manual-position-stock');
        return _this;
    }
    ManualPositionStock.prototype.addCard = function (card, animation, settings) {
        var promise = _super.prototype.addCard.call(this, card, animation, settings);
        this.updateDisplay(this.element, this.getCards(), card, this);
        return promise;
    };
    ManualPositionStock.prototype.cardRemoved = function (card, settings) {
        _super.prototype.cardRemoved.call(this, card, settings);
        this.updateDisplay(this.element, this.getCards(), card, this);
    };
    return ManualPositionStock;
}(CardStock));
var SlotStock = (function (_super) {
    __extends(SlotStock, _super);
    function SlotStock(manager, element, settings) {
        var _a, _b;
        var _this = _super.call(this, manager, element, settings) || this;
        _this.manager = manager;
        _this.element = element;
        _this.slotsIds = [];
        _this.slots = [];
        element.classList.add('slot-stock');
        _this.mapCardToSlot = settings.mapCardToSlot;
        _this.slotsIds = (_a = settings.slotsIds) !== null && _a !== void 0 ? _a : [];
        _this.slotClasses = (_b = settings.slotClasses) !== null && _b !== void 0 ? _b : [];
        _this.slotsIds.forEach(function (slotId) {
            _this.createSlot(slotId);
        });
        return _this;
    }
    SlotStock.prototype.createSlot = function (slotId) {
        var _a;
        this.slots[slotId] = document.createElement("div");
        this.slots[slotId].dataset.slotId = slotId;
        this.element.appendChild(this.slots[slotId]);
        (_a = this.slots[slotId].classList).add.apply(_a, __spreadArray(['slot'], this.slotClasses, true));
    };
    SlotStock.prototype.addCard = function (card, animation, settings) {
        var _a, _b;
        var slotId = (_a = settings === null || settings === void 0 ? void 0 : settings.slot) !== null && _a !== void 0 ? _a : (_b = this.mapCardToSlot) === null || _b === void 0 ? void 0 : _b.call(this, card);
        if (slotId === undefined) {
            throw new Error("Impossible to add card to slot : no SlotId. Add slotId to settings or set mapCardToSlot to SlotCard constructor.");
        }
        if (!this.slots[slotId]) {
            throw new Error("Impossible to add card to slot \"".concat(slotId, "\" : slot \"").concat(slotId, "\" doesn't exists."));
        }
        var newSettings = __assign(__assign({}, settings), { forceToElement: this.slots[slotId] });
        return _super.prototype.addCard.call(this, card, animation, newSettings);
    };
    SlotStock.prototype.setSlotsIds = function (slotsIds) {
        var _this = this;
        if (slotsIds.length == this.slotsIds.length && slotsIds.every(function (slotId, index) { return _this.slotsIds[index] === slotId; })) {
            return;
        }
        this.removeAll();
        this.element.innerHTML = '';
        this.slotsIds = slotsIds !== null && slotsIds !== void 0 ? slotsIds : [];
        this.slotsIds.forEach(function (slotId) {
            _this.createSlot(slotId);
        });
    };
    SlotStock.prototype.addSlotsIds = function (newSlotsIds) {
        var _a;
        var _this = this;
        if (newSlotsIds.length == 0) {
            return;
        }
        (_a = this.slotsIds).push.apply(_a, newSlotsIds);
        newSlotsIds.forEach(function (slotId) {
            _this.createSlot(slotId);
        });
    };
    SlotStock.prototype.canAddCard = function (card, settings) {
        var _a, _b;
        if (!this.contains(card)) {
            return true;
        }
        else {
            var currentCardSlot = this.getCardElement(card).closest('.slot').dataset.slotId;
            var slotId = (_a = settings === null || settings === void 0 ? void 0 : settings.slot) !== null && _a !== void 0 ? _a : (_b = this.mapCardToSlot) === null || _b === void 0 ? void 0 : _b.call(this, card);
            return currentCardSlot != slotId;
        }
    };
    SlotStock.prototype.swapCards = function (cards, settings) {
        var _this = this;
        if (!this.mapCardToSlot) {
            throw new Error('You need to define SlotStock.mapCardToSlot to use SlotStock.swapCards');
        }
        var promises = [];
        var elements = cards.map(function (card) { return _this.manager.getCardElement(card); });
        var elementsRects = elements.map(function (element) { return element.getBoundingClientRect(); });
        var cssPositions = elements.map(function (element) { return element.style.position; });
        elements.forEach(function (element) { return element.style.position = 'absolute'; });
        cards.forEach(function (card, index) {
            var _a, _b;
            var cardElement = elements[index];
            var promise;
            var slotId = (_a = _this.mapCardToSlot) === null || _a === void 0 ? void 0 : _a.call(_this, card);
            _this.slots[slotId].appendChild(cardElement);
            cardElement.style.position = cssPositions[index];
            var cardIndex = _this.cards.findIndex(function (c) { return _this.manager.getId(c) == _this.manager.getId(card); });
            if (cardIndex !== -1) {
                _this.cards.splice(cardIndex, 1, card);
            }
            if ((_b = settings === null || settings === void 0 ? void 0 : settings.updateInformations) !== null && _b !== void 0 ? _b : true) {
                _this.manager.updateCardInformations(card);
            }
            _this.removeSelectionClassesFromElement(cardElement);
            promise = _this.animationFromElement(cardElement, elementsRects[index], {});
            if (!promise) {
                console.warn("CardStock.animationFromElement didn't return a Promise");
                promise = Promise.resolve(false);
            }
            promise.then(function () { var _a; return _this.setSelectableCard(card, (_a = settings === null || settings === void 0 ? void 0 : settings.selectable) !== null && _a !== void 0 ? _a : true); });
            promises.push(promise);
        });
        return Promise.all(promises);
    };
    return SlotStock;
}(LineStock));
var VoidStock = (function (_super) {
    __extends(VoidStock, _super);
    function VoidStock(manager, element) {
        var _this = _super.call(this, manager, element) || this;
        _this.manager = manager;
        _this.element = element;
        element.classList.add('void-stock');
        return _this;
    }
    VoidStock.prototype.addCard = function (card, animation, settings) {
        var _this = this;
        var _a;
        var promise = _super.prototype.addCard.call(this, card, animation, settings);
        var cardElement = this.getCardElement(card);
        var originalLeft = cardElement.style.left;
        var originalTop = cardElement.style.top;
        cardElement.style.left = "".concat((this.element.clientWidth - cardElement.clientWidth) / 2, "px");
        cardElement.style.top = "".concat((this.element.clientHeight - cardElement.clientHeight) / 2, "px");
        if (!promise) {
            console.warn("VoidStock.addCard didn't return a Promise");
            promise = Promise.resolve(false);
        }
        if ((_a = settings === null || settings === void 0 ? void 0 : settings.remove) !== null && _a !== void 0 ? _a : true) {
            return promise.then(function () {
                return _this.removeCard(card);
            });
        }
        else {
            cardElement.style.left = originalLeft;
            cardElement.style.top = originalTop;
            return promise;
        }
    };
    return VoidStock;
}(CardStock));
function sortFunction() {
    var sortedFields = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        sortedFields[_i] = arguments[_i];
    }
    return function (a, b) {
        for (var i = 0; i < sortedFields.length; i++) {
            var direction = 1;
            var field = sortedFields[i];
            if (field[0] == '-') {
                direction = -1;
                field = field.substring(1);
            }
            else if (field[0] == '+') {
                field = field.substring(1);
            }
            var type = typeof a[field];
            if (type === 'string') {
                var compare = a[field].localeCompare(b[field]);
                if (compare !== 0) {
                    return compare;
                }
            }
            else if (type === 'number') {
                var compare = (a[field] - b[field]) * direction;
                if (compare !== 0) {
                    return compare * direction;
                }
            }
        }
        return 0;
    };
}
var CardManager = (function () {
    function CardManager(game, settings) {
        var _a;
        this.game = game;
        this.settings = settings;
        this.stocks = [];
        this.updateMainTimeoutId = [];
        this.updateFrontTimeoutId = [];
        this.updateBackTimeoutId = [];
        this.animationManager = (_a = settings.animationManager) !== null && _a !== void 0 ? _a : new AnimationManager(game);
    }
    CardManager.prototype.animationsActive = function () {
        return this.animationManager.animationsActive();
    };
    CardManager.prototype.addStock = function (stock) {
        this.stocks.push(stock);
    };
    CardManager.prototype.removeStock = function (stock) {
        var index = this.stocks.indexOf(stock);
        if (index !== -1) {
            this.stocks.splice(index, 1);
        }
    };
    CardManager.prototype.getId = function (card) {
        var _a, _b, _c;
        return (_c = (_b = (_a = this.settings).getId) === null || _b === void 0 ? void 0 : _b.call(_a, card)) !== null && _c !== void 0 ? _c : "card-".concat(card.id);
    };
    CardManager.prototype.createCardElement = function (card, visible) {
        var _a, _b, _c, _d, _e, _f;
        if (visible === void 0) { visible = true; }
        var id = this.getId(card);
        var side = visible ? 'front' : 'back';
        if (this.getCardElement(card)) {
            throw new Error('This card already exists ' + JSON.stringify(card));
        }
        var element = document.createElement("div");
        element.id = id;
        element.dataset.side = '' + side;
        element.innerHTML = "\n            <div class=\"card-sides\">\n                <div id=\"".concat(id, "-front\" class=\"card-side front\">\n                </div>\n                <div id=\"").concat(id, "-back\" class=\"card-side back\">\n                </div>\n            </div>\n        ");
        element.classList.add('card');
        document.body.appendChild(element);
        (_b = (_a = this.settings).setupDiv) === null || _b === void 0 ? void 0 : _b.call(_a, card, element);
        (_d = (_c = this.settings).setupFrontDiv) === null || _d === void 0 ? void 0 : _d.call(_c, card, element.getElementsByClassName('front')[0]);
        (_f = (_e = this.settings).setupBackDiv) === null || _f === void 0 ? void 0 : _f.call(_e, card, element.getElementsByClassName('back')[0]);
        document.body.removeChild(element);
        return element;
    };
    CardManager.prototype.getCardElement = function (card) {
        return document.getElementById(this.getId(card));
    };
    CardManager.prototype.removeCard = function (card, settings) {
        var _a;
        var id = this.getId(card);
        var div = document.getElementById(id);
        if (!div) {
            return Promise.resolve(false);
        }
        div.id = "deleted".concat(id);
        div.remove();
        (_a = this.getCardStock(card)) === null || _a === void 0 ? void 0 : _a.cardRemoved(card, settings);
        return Promise.resolve(true);
    };
    CardManager.prototype.getCardStock = function (card) {
        return this.stocks.find(function (stock) { return stock.contains(card); });
    };
    CardManager.prototype.isCardVisible = function (card) {
        var _a, _b, _c, _d;
        return (_c = (_b = (_a = this.settings).isCardVisible) === null || _b === void 0 ? void 0 : _b.call(_a, card)) !== null && _c !== void 0 ? _c : ((_d = card.type) !== null && _d !== void 0 ? _d : false);
    };
    CardManager.prototype.setCardVisible = function (card, visible, settings) {
        var _this = this;
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        var element = this.getCardElement(card);
        if (!element) {
            return;
        }
        var isVisible = visible !== null && visible !== void 0 ? visible : this.isCardVisible(card);
        element.dataset.side = isVisible ? 'front' : 'back';
        var stringId = JSON.stringify(this.getId(card));
        if ((_a = settings === null || settings === void 0 ? void 0 : settings.updateMain) !== null && _a !== void 0 ? _a : false) {
            if (this.updateMainTimeoutId[stringId]) {
                clearTimeout(this.updateMainTimeoutId[stringId]);
                delete this.updateMainTimeoutId[stringId];
            }
            var updateMainDelay = (_b = settings === null || settings === void 0 ? void 0 : settings.updateMainDelay) !== null && _b !== void 0 ? _b : 0;
            if (isVisible && updateMainDelay > 0 && this.animationsActive()) {
                this.updateMainTimeoutId[stringId] = setTimeout(function () { var _a, _b; return (_b = (_a = _this.settings).setupDiv) === null || _b === void 0 ? void 0 : _b.call(_a, card, element); }, updateMainDelay);
            }
            else {
                (_d = (_c = this.settings).setupDiv) === null || _d === void 0 ? void 0 : _d.call(_c, card, element);
            }
        }
        if ((_e = settings === null || settings === void 0 ? void 0 : settings.updateFront) !== null && _e !== void 0 ? _e : true) {
            if (this.updateFrontTimeoutId[stringId]) {
                clearTimeout(this.updateFrontTimeoutId[stringId]);
                delete this.updateFrontTimeoutId[stringId];
            }
            var updateFrontDelay = (_f = settings === null || settings === void 0 ? void 0 : settings.updateFrontDelay) !== null && _f !== void 0 ? _f : 500;
            if (!isVisible && updateFrontDelay > 0 && this.animationsActive()) {
                this.updateFrontTimeoutId[stringId] = setTimeout(function () { var _a, _b; return (_b = (_a = _this.settings).setupFrontDiv) === null || _b === void 0 ? void 0 : _b.call(_a, card, element.getElementsByClassName('front')[0]); }, updateFrontDelay);
            }
            else {
                (_h = (_g = this.settings).setupFrontDiv) === null || _h === void 0 ? void 0 : _h.call(_g, card, element.getElementsByClassName('front')[0]);
            }
        }
        if ((_j = settings === null || settings === void 0 ? void 0 : settings.updateBack) !== null && _j !== void 0 ? _j : false) {
            if (this.updateBackTimeoutId[stringId]) {
                clearTimeout(this.updateBackTimeoutId[stringId]);
                delete this.updateBackTimeoutId[stringId];
            }
            var updateBackDelay = (_k = settings === null || settings === void 0 ? void 0 : settings.updateBackDelay) !== null && _k !== void 0 ? _k : 0;
            if (isVisible && updateBackDelay > 0 && this.animationsActive()) {
                this.updateBackTimeoutId[stringId] = setTimeout(function () { var _a, _b; return (_b = (_a = _this.settings).setupBackDiv) === null || _b === void 0 ? void 0 : _b.call(_a, card, element.getElementsByClassName('back')[0]); }, updateBackDelay);
            }
            else {
                (_m = (_l = this.settings).setupBackDiv) === null || _m === void 0 ? void 0 : _m.call(_l, card, element.getElementsByClassName('back')[0]);
            }
        }
        if ((_o = settings === null || settings === void 0 ? void 0 : settings.updateData) !== null && _o !== void 0 ? _o : true) {
            var stock = this.getCardStock(card);
            var cards = stock.getCards();
            var cardIndex = cards.findIndex(function (c) { return _this.getId(c) === _this.getId(card); });
            if (cardIndex !== -1) {
                stock.cards.splice(cardIndex, 1, card);
            }
        }
    };
    CardManager.prototype.flipCard = function (card, settings) {
        var element = this.getCardElement(card);
        var currentlyVisible = element.dataset.side === 'front';
        this.setCardVisible(card, !currentlyVisible, settings);
    };
    CardManager.prototype.updateCardInformations = function (card, settings) {
        var newSettings = __assign(__assign({}, (settings !== null && settings !== void 0 ? settings : {})), { updateData: true });
        this.setCardVisible(card, undefined, newSettings);
    };
    CardManager.prototype.getCardWidth = function () {
        var _a;
        return (_a = this.settings) === null || _a === void 0 ? void 0 : _a.cardWidth;
    };
    CardManager.prototype.getCardHeight = function () {
        var _a;
        return (_a = this.settings) === null || _a === void 0 ? void 0 : _a.cardHeight;
    };
    CardManager.prototype.getSelectableCardClass = function () {
        var _a, _b;
        return ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.selectableCardClass) === undefined ? 'bga-cards_selectable-card' : (_b = this.settings) === null || _b === void 0 ? void 0 : _b.selectableCardClass;
    };
    CardManager.prototype.getUnselectableCardClass = function () {
        var _a, _b;
        return ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.unselectableCardClass) === undefined ? 'bga-cards_disabled-card' : (_b = this.settings) === null || _b === void 0 ? void 0 : _b.unselectableCardClass;
    };
    CardManager.prototype.getSelectedCardClass = function () {
        var _a, _b;
        return ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.selectedCardClass) === undefined ? 'bga-cards_selected-card' : (_b = this.settings) === null || _b === void 0 ? void 0 : _b.selectedCardClass;
    };
    CardManager.prototype.getFakeCardGenerator = function () {
        var _this = this;
        var _a, _b;
        return (_b = (_a = this.settings) === null || _a === void 0 ? void 0 : _a.fakeCardGenerator) !== null && _b !== void 0 ? _b : (function (deckId) { return ({ id: _this.getId({ id: "".concat(deckId, "-fake-top-card") }) }); });
    };
    return CardManager;
}());
var DiceManager = (function () {
    function DiceManager(game, settings) {
        var _this = this;
        var _a;
        this.game = game;
        this.settings = settings;
        this.stocks = [];
        this.registeredDieTypes = [];
        this.animationManager = (_a = settings.animationManager) !== null && _a !== void 0 ? _a : new AnimationManager(game);
        if (settings.dieTypes) {
            Object.entries(settings.dieTypes).forEach(function (entry) { return _this.setDieType(entry[0], entry[1]); });
        }
    }
    DiceManager.prototype.animationsActive = function () {
        return this.animationManager.animationsActive();
    };
    DiceManager.prototype.addStock = function (stock) {
        this.stocks.push(stock);
    };
    DiceManager.prototype.setDieType = function (type, dieType) {
        this.registeredDieTypes[type] = dieType;
    };
    DiceManager.prototype.getDieType = function (die) {
        return this.registeredDieTypes[die.type];
    };
    DiceManager.prototype.getId = function (die) {
        return "bga-die-".concat(die.type, "-").concat(die.id);
    };
    DiceManager.prototype.createDieElement = function (die) {
        var _a, _b, _c;
        var id = this.getId(die);
        if (this.getDieElement(die)) {
            throw new Error("This die already exists ".concat(JSON.stringify(die)));
        }
        var dieType = this.registeredDieTypes[die.type];
        if (!dieType) {
            throw new Error("This die type doesn't exists ".concat(die.type));
        }
        var element = document.createElement("div");
        element.id = id;
        element.classList.add('bga-dice_die');
        element.style.setProperty('--size', "".concat((_a = dieType.size) !== null && _a !== void 0 ? _a : 50, "px"));
        var dieFaces = document.createElement("div");
        dieFaces.classList.add('bga-dice_die-faces');
        dieFaces.dataset.visibleFace = '' + die.face;
        element.appendChild(dieFaces);
        var facesElements = [];
        for (var i = 1; i <= dieType.facesCount; i++) {
            facesElements[i] = document.createElement("div");
            facesElements[i].id = "".concat(id, "-face-").concat(i);
            facesElements[i].classList.add('bga-dice_die-face');
            facesElements[i].dataset.face = '' + i;
            dieFaces.appendChild(facesElements[i]);
            element.dataset.face = '' + i;
        }
        document.body.appendChild(element);
        (_b = dieType.setupDieDiv) === null || _b === void 0 ? void 0 : _b.call(dieType, die, element);
        if (dieType.setupFaceDiv) {
            for (var i = 1; i <= dieType.facesCount; i++) {
                (_c = dieType.setupFaceDiv) === null || _c === void 0 ? void 0 : _c.call(dieType, die, facesElements[i], i);
            }
        }
        document.body.removeChild(element);
        return element;
    };
    DiceManager.prototype.getDieElement = function (die) {
        return document.getElementById(this.getId(die));
    };
    DiceManager.prototype.removeDie = function (die) {
        var _a;
        var id = this.getId(die);
        var div = document.getElementById(id);
        if (!div) {
            return false;
        }
        div.id = "deleted".concat(id);
        div.remove();
        (_a = this.getDieStock(die)) === null || _a === void 0 ? void 0 : _a.dieRemoved(die);
        return true;
    };
    DiceManager.prototype.getDieStock = function (die) {
        return this.stocks.find(function (stock) { return stock.contains(die); });
    };
    DiceManager.prototype.updateDieInformations = function (die, updateData) {
        var _this = this;
        var div = this.getDieElement(die);
        div.dataset.visibleFace = '' + die.face;
        if (updateData !== null && updateData !== void 0 ? updateData : true) {
            var stock = this.getDieStock(die);
            var dice = stock.getDice();
            var dieIndex = dice.findIndex(function (c) { return _this.getId(c) === _this.getId(die); });
            if (dieIndex !== -1) {
                stock.dice.splice(dieIndex, 1, die);
            }
        }
    };
    DiceManager.prototype.getPerspective = function () {
        var _a, _b;
        return ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.perspective) === undefined ? 1000 : (_b = this.settings) === null || _b === void 0 ? void 0 : _b.perspective;
    };
    DiceManager.prototype.getSelectableDieClass = function () {
        var _a, _b;
        return ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.selectableDieClass) === undefined ? 'bga-dice_selectable-die' : (_b = this.settings) === null || _b === void 0 ? void 0 : _b.selectableDieClass;
    };
    DiceManager.prototype.getUnselectableDieClass = function () {
        var _a, _b;
        return ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.unselectableDieClass) === undefined ? 'bga-dice_disabled-die' : (_b = this.settings) === null || _b === void 0 ? void 0 : _b.unselectableDieClass;
    };
    DiceManager.prototype.getSelectedDieClass = function () {
        var _a, _b;
        return ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.selectedDieClass) === undefined ? 'bga-dice_selected-die' : (_b = this.settings) === null || _b === void 0 ? void 0 : _b.selectedDieClass;
    };
    return DiceManager;
}());
var BgaDie6 = (function () {
    function BgaDie6(settings) {
        var _a;
        this.settings = settings;
        this.facesCount = 6;
        this.borderRadius = (_a = settings === null || settings === void 0 ? void 0 : settings.borderRadius) !== null && _a !== void 0 ? _a : 0;
    }
    BgaDie6.prototype.setupDieDiv = function (die, element) {
        element.classList.add('bga-dice_die6');
        element.style.setProperty('--bga-dice_border-radius', "".concat(this.borderRadius, "%"));
    };
    return BgaDie6;
}());
var DiceStock = (function () {
    function DiceStock(manager, element, settings) {
        this.manager = manager;
        this.element = element;
        this.settings = settings;
        this.dice = [];
        this.selectedDice = [];
        this.selectionMode = 'none';
        manager.addStock(this);
        element === null || element === void 0 ? void 0 : element.classList.add('bga-dice_die-stock');
        var perspective = this.getPerspective();
        element.style.setProperty('--perspective', perspective ? "".concat(perspective, "px") : 'unset');
        this.bindClick();
        this.sort = settings === null || settings === void 0 ? void 0 : settings.sort;
    }
    DiceStock.prototype.getDice = function () {
        return this.dice.slice();
    };
    DiceStock.prototype.isEmpty = function () {
        return !this.dice.length;
    };
    DiceStock.prototype.getSelection = function () {
        return this.selectedDice.slice();
    };
    DiceStock.prototype.isSelected = function (die) {
        var _this = this;
        return this.selectedDice.some(function (c) { return _this.manager.getId(c) == _this.manager.getId(die); });
    };
    DiceStock.prototype.contains = function (die) {
        var _this = this;
        return this.dice.some(function (c) { return _this.manager.getId(c) == _this.manager.getId(die); });
    };
    DiceStock.prototype.getDieElement = function (die) {
        return this.manager.getDieElement(die);
    };
    DiceStock.prototype.canAddDie = function (die, settings) {
        return !this.contains(die);
    };
    DiceStock.prototype.addDie = function (die, animation, settings) {
        var _this = this;
        var _a;
        if (!this.canAddDie(die, settings)) {
            return Promise.resolve(false);
        }
        var promise;
        var originStock = this.manager.getDieStock(die);
        var index = this.getNewDieIndex(die);
        var settingsWithIndex = __assign({ index: index }, (settings !== null && settings !== void 0 ? settings : {}));
        var updateInformations = (_a = settingsWithIndex.updateInformations) !== null && _a !== void 0 ? _a : true;
        if (originStock === null || originStock === void 0 ? void 0 : originStock.contains(die)) {
            var element = this.getDieElement(die);
            promise = this.moveFromOtherStock(die, element, __assign(__assign({}, animation), { fromStock: originStock }), settingsWithIndex);
        }
        else if ((animation === null || animation === void 0 ? void 0 : animation.fromStock) && animation.fromStock.contains(die)) {
            var element = this.getDieElement(die);
            promise = this.moveFromOtherStock(die, element, animation, settingsWithIndex);
        }
        else {
            var element = this.manager.createDieElement(die);
            promise = this.moveFromElement(die, element, animation, settingsWithIndex);
        }
        if (settingsWithIndex.index !== null && settingsWithIndex.index !== undefined) {
            this.dice.splice(index, 0, die);
        }
        else {
            this.dice.push(die);
        }
        if (updateInformations) {
            this.manager.updateDieInformations(die);
        }
        if (!promise) {
            console.warn("Dicetock.addDie didn't return a Promise");
            promise = Promise.resolve(false);
        }
        if (this.selectionMode !== 'none') {
            promise.then(function () { var _a; return _this.setSelectableDie(die, (_a = settingsWithIndex.selectable) !== null && _a !== void 0 ? _a : true); });
        }
        return promise;
    };
    DiceStock.prototype.getNewDieIndex = function (die) {
        if (this.sort) {
            var otherDice = this.getDice();
            for (var i = 0; i < otherDice.length; i++) {
                var otherDie = otherDice[i];
                if (this.sort(die, otherDie) < 0) {
                    return i;
                }
            }
            return otherDice.length;
        }
        else {
            return undefined;
        }
    };
    DiceStock.prototype.addDieElementToParent = function (dieElement, settings) {
        var _a;
        var parent = (_a = settings === null || settings === void 0 ? void 0 : settings.forceToElement) !== null && _a !== void 0 ? _a : this.element;
        if ((settings === null || settings === void 0 ? void 0 : settings.index) === null || (settings === null || settings === void 0 ? void 0 : settings.index) === undefined || !parent.children.length || (settings === null || settings === void 0 ? void 0 : settings.index) >= parent.children.length) {
            parent.appendChild(dieElement);
        }
        else {
            parent.insertBefore(dieElement, parent.children[settings.index]);
        }
    };
    DiceStock.prototype.moveFromOtherStock = function (die, dieElement, animation, settings) {
        var promise;
        var element = animation.fromStock.contains(die) ? this.manager.getDieElement(die) : animation.fromStock.element;
        var fromRect = element.getBoundingClientRect();
        this.addDieElementToParent(dieElement, settings);
        this.removeSelectionClassesFromElement(dieElement);
        promise = this.animationFromElement(dieElement, fromRect, {
            originalSide: animation.originalSide,
            rotationDelta: animation.rotationDelta,
            animation: animation.animation,
        });
        if (animation.fromStock && animation.fromStock != this) {
            animation.fromStock.removeDie(die);
        }
        if (!promise) {
            console.warn("Dicetock.moveFromOtherStock didn't return a Promise");
            promise = Promise.resolve(false);
        }
        return promise;
    };
    DiceStock.prototype.moveFromElement = function (die, dieElement, animation, settings) {
        var promise;
        this.addDieElementToParent(dieElement, settings);
        if (animation) {
            if (animation.fromStock) {
                promise = this.animationFromElement(dieElement, animation.fromStock.element.getBoundingClientRect(), {
                    originalSide: animation.originalSide,
                    rotationDelta: animation.rotationDelta,
                    animation: animation.animation,
                });
                animation.fromStock.removeDie(die);
            }
            else if (animation.fromElement) {
                promise = this.animationFromElement(dieElement, animation.fromElement.getBoundingClientRect(), {
                    originalSide: animation.originalSide,
                    rotationDelta: animation.rotationDelta,
                    animation: animation.animation,
                });
            }
        }
        else {
            promise = Promise.resolve(false);
        }
        if (!promise) {
            console.warn("Dicetock.moveFromElement didn't return a Promise");
            promise = Promise.resolve(false);
        }
        return promise;
    };
    DiceStock.prototype.addDice = function (dice_1, animation_1, settings_1) {
        return __awaiter(this, arguments, void 0, function (dice, animation, settings, shift) {
            var promises, result, others, _loop_3, i, results;
            var _this = this;
            if (shift === void 0) { shift = false; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.manager.animationsActive()) {
                            shift = false;
                        }
                        promises = [];
                        if (!(shift === true)) return [3, 4];
                        if (!dice.length) return [3, 3];
                        return [4, this.addDie(dice[0], animation, settings)];
                    case 1:
                        result = _a.sent();
                        return [4, this.addDice(dice.slice(1), animation, settings, shift)];
                    case 2:
                        others = _a.sent();
                        return [2, result || others];
                    case 3: return [3, 5];
                    case 4:
                        if (typeof shift === 'number') {
                            _loop_3 = function (i) {
                                setTimeout(function () { return promises.push(_this.addDie(dice[i], animation, settings)); }, i * shift);
                            };
                            for (i = 0; i < dice.length; i++) {
                                _loop_3(i);
                            }
                        }
                        else {
                            promises = dice.map(function (die) { return _this.addDie(die, animation, settings); });
                        }
                        _a.label = 5;
                    case 5: return [4, Promise.all(promises)];
                    case 6:
                        results = _a.sent();
                        return [2, results.some(function (result) { return result; })];
                }
            });
        });
    };
    DiceStock.prototype.removeDie = function (die) {
        if (this.contains(die) && this.element.contains(this.getDieElement(die))) {
            this.manager.removeDie(die);
        }
        this.dieRemoved(die);
    };
    DiceStock.prototype.dieRemoved = function (die) {
        var _this = this;
        var index = this.dice.findIndex(function (c) { return _this.manager.getId(c) == _this.manager.getId(die); });
        if (index !== -1) {
            this.dice.splice(index, 1);
        }
        if (this.selectedDice.find(function (c) { return _this.manager.getId(c) == _this.manager.getId(die); })) {
            this.unselectDie(die);
        }
    };
    DiceStock.prototype.removeDice = function (dice) {
        var _this = this;
        dice.forEach(function (die) { return _this.removeDie(die); });
    };
    DiceStock.prototype.removeAll = function () {
        var _this = this;
        var dice = this.getDice();
        dice.forEach(function (die) { return _this.removeDie(die); });
    };
    DiceStock.prototype.setSelectionMode = function (selectionMode, selectableDice) {
        var _this = this;
        if (selectionMode !== this.selectionMode) {
            this.unselectAll(true);
        }
        this.dice.forEach(function (die) { return _this.setSelectableDie(die, selectionMode != 'none'); });
        this.element.classList.toggle('bga-dice_selectable-stock', selectionMode != 'none');
        this.selectionMode = selectionMode;
        if (selectionMode === 'none') {
            this.getDice().forEach(function (die) { return _this.removeSelectionClasses(die); });
        }
        else {
            this.setSelectableDice(selectableDice !== null && selectableDice !== void 0 ? selectableDice : this.getDice());
        }
    };
    DiceStock.prototype.setSelectableDie = function (die, selectable) {
        if (this.selectionMode === 'none') {
            return;
        }
        var element = this.getDieElement(die);
        var selectableDiceClass = this.getSelectableDieClass();
        var unselectableDiceClass = this.getUnselectableDieClass();
        if (selectableDiceClass) {
            element.classList.toggle(selectableDiceClass, selectable);
        }
        if (unselectableDiceClass) {
            element.classList.toggle(unselectableDiceClass, !selectable);
        }
        if (!selectable && this.isSelected(die)) {
            this.unselectDie(die, true);
        }
    };
    DiceStock.prototype.setSelectableDice = function (selectableDice) {
        var _this = this;
        if (this.selectionMode === 'none') {
            return;
        }
        var selectableDiceIds = (selectableDice !== null && selectableDice !== void 0 ? selectableDice : this.getDice()).map(function (die) { return _this.manager.getId(die); });
        this.dice.forEach(function (die) {
            return _this.setSelectableDie(die, selectableDiceIds.includes(_this.manager.getId(die)));
        });
    };
    DiceStock.prototype.selectDie = function (die, silent) {
        var _this = this;
        var _a;
        if (silent === void 0) { silent = false; }
        if (this.selectionMode == 'none') {
            return;
        }
        var element = this.getDieElement(die);
        var selectableDiceClass = this.getSelectableDieClass();
        if (!element.classList.contains(selectableDiceClass)) {
            return;
        }
        if (this.selectionMode === 'single') {
            this.dice.filter(function (c) { return _this.manager.getId(c) != _this.manager.getId(die); }).forEach(function (c) { return _this.unselectDie(c, true); });
        }
        var selectedDiceClass = this.getSelectedDieClass();
        element.classList.add(selectedDiceClass);
        this.selectedDice.push(die);
        if (!silent) {
            (_a = this.onSelectionChange) === null || _a === void 0 ? void 0 : _a.call(this, this.selectedDice.slice(), die);
        }
    };
    DiceStock.prototype.unselectDie = function (die, silent) {
        var _this = this;
        var _a;
        if (silent === void 0) { silent = false; }
        var element = this.getDieElement(die);
        var selectedDiceClass = this.getSelectedDieClass();
        element.classList.remove(selectedDiceClass);
        var index = this.selectedDice.findIndex(function (c) { return _this.manager.getId(c) == _this.manager.getId(die); });
        if (index !== -1) {
            this.selectedDice.splice(index, 1);
        }
        if (!silent) {
            (_a = this.onSelectionChange) === null || _a === void 0 ? void 0 : _a.call(this, this.selectedDice.slice(), die);
        }
    };
    DiceStock.prototype.selectAll = function (silent) {
        var _this = this;
        var _a;
        if (silent === void 0) { silent = false; }
        if (this.selectionMode == 'none') {
            return;
        }
        this.dice.forEach(function (c) { return _this.selectDie(c, true); });
        if (!silent) {
            (_a = this.onSelectionChange) === null || _a === void 0 ? void 0 : _a.call(this, this.selectedDice.slice(), null);
        }
    };
    DiceStock.prototype.unselectAll = function (silent) {
        var _this = this;
        var _a;
        if (silent === void 0) { silent = false; }
        var dice = this.getDice();
        dice.forEach(function (c) { return _this.unselectDie(c, true); });
        if (!silent) {
            (_a = this.onSelectionChange) === null || _a === void 0 ? void 0 : _a.call(this, this.selectedDice.slice(), null);
        }
    };
    DiceStock.prototype.bindClick = function () {
        var _this = this;
        var _a;
        (_a = this.element) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function (event) {
            var dieDiv = event.target.closest('.bga-dice_die');
            if (!dieDiv) {
                return;
            }
            var die = _this.dice.find(function (c) { return _this.manager.getId(c) == dieDiv.id; });
            if (!die) {
                return;
            }
            _this.dieClick(die);
        });
    };
    DiceStock.prototype.dieClick = function (die) {
        var _this = this;
        var _a;
        if (this.selectionMode != 'none') {
            var alreadySelected = this.selectedDice.some(function (c) { return _this.manager.getId(c) == _this.manager.getId(die); });
            if (alreadySelected) {
                this.unselectDie(die);
            }
            else {
                this.selectDie(die);
            }
        }
        (_a = this.onDieClick) === null || _a === void 0 ? void 0 : _a.call(this, die);
    };
    DiceStock.prototype.animationFromElement = function (element, fromRect, settings) {
        return __awaiter(this, void 0, void 0, function () {
            var side, diceides_1, animation, result;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        side = element.dataset.side;
                        if (settings.originalSide && settings.originalSide != side) {
                            diceides_1 = element.getElementsByClassName('die-sides')[0];
                            diceides_1.style.transition = 'none';
                            element.dataset.side = settings.originalSide;
                            setTimeout(function () {
                                diceides_1.style.transition = null;
                                element.dataset.side = side;
                            });
                        }
                        animation = settings.animation;
                        if (animation) {
                            animation.settings.element = element;
                            animation.settings.fromRect = fromRect;
                        }
                        else {
                            animation = new BgaSlideAnimation({ element: element, fromRect: fromRect });
                        }
                        return [4, this.manager.animationManager.play(animation)];
                    case 1:
                        result = _b.sent();
                        return [2, (_a = result === null || result === void 0 ? void 0 : result.played) !== null && _a !== void 0 ? _a : false];
                }
            });
        });
    };
    DiceStock.prototype.getPerspective = function () {
        var _a, _b;
        return ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.perspective) === undefined ? this.manager.getPerspective() : (_b = this.settings) === null || _b === void 0 ? void 0 : _b.perspective;
    };
    DiceStock.prototype.getSelectableDieClass = function () {
        var _a, _b;
        return ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.selectableDieClass) === undefined ? this.manager.getSelectableDieClass() : (_b = this.settings) === null || _b === void 0 ? void 0 : _b.selectableDieClass;
    };
    DiceStock.prototype.getUnselectableDieClass = function () {
        var _a, _b;
        return ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.unselectableDieClass) === undefined ? this.manager.getUnselectableDieClass() : (_b = this.settings) === null || _b === void 0 ? void 0 : _b.unselectableDieClass;
    };
    DiceStock.prototype.getSelectedDieClass = function () {
        var _a, _b;
        return ((_a = this.settings) === null || _a === void 0 ? void 0 : _a.selectedDieClass) === undefined ? this.manager.getSelectedDieClass() : (_b = this.settings) === null || _b === void 0 ? void 0 : _b.selectedDieClass;
    };
    DiceStock.prototype.removeSelectionClasses = function (die) {
        this.removeSelectionClassesFromElement(this.getDieElement(die));
    };
    DiceStock.prototype.removeSelectionClassesFromElement = function (dieElement) {
        var selectableDiceClass = this.getSelectableDieClass();
        var unselectableDiceClass = this.getUnselectableDieClass();
        var selectedDiceClass = this.getSelectedDieClass();
        dieElement.classList.remove(selectableDiceClass, unselectableDiceClass, selectedDiceClass);
    };
    DiceStock.prototype.addRollEffectToDieElement = function (die, element, effect, duration) {
        var _a, _b;
        switch (effect) {
            case 'rollIn':
                this.manager.animationManager.play(new BgaSlideAnimation({
                    element: element,
                    duration: duration,
                    transitionTimingFunction: 'ease-out',
                    fromDelta: {
                        x: 0,
                        y: ((_a = this.manager.getDieType(die).size) !== null && _a !== void 0 ? _a : 50) * 5,
                    }
                }));
                break;
            case 'rollOutPauseAndBack':
                this.manager.animationManager.play(new BgaCumulatedAnimation({ animations: [
                        new BgaSlideToAnimation({
                            element: element,
                            duration: duration,
                            transitionTimingFunction: 'ease-out',
                            fromDelta: {
                                x: 0,
                                y: ((_b = this.manager.getDieType(die).size) !== null && _b !== void 0 ? _b : 50) * -5,
                            }
                        }),
                        new BgaPauseAnimation({}),
                        new BgaSlideToAnimation({
                            duration: 250,
                            transitionTimingFunction: 'ease-out',
                            element: element,
                            fromDelta: {
                                x: 0,
                                y: 0,
                            }
                        }),
                    ] }));
                break;
            case 'turn':
                this.manager.animationManager.play(new BgaPauseAnimation({ duration: duration }));
                break;
        }
    };
    DiceStock.prototype.rollDice = function (dice, settings) {
        var _this = this;
        dice.forEach(function (die) { return _this.rollDie(die, settings); });
    };
    DiceStock.prototype.rollDie = function (die, settings) {
        var _a, _b;
        var div = this.getDieElement(die);
        var faces = div.querySelector('.bga-dice_die-faces');
        faces.style.setProperty('--roll-duration', "0");
        faces.clientWidth;
        faces.dataset.visibleFace = "";
        faces.clientWidth;
        var rollEffect = (_a = settings === null || settings === void 0 ? void 0 : settings.effect) !== null && _a !== void 0 ? _a : 'rollIn';
        var animate = this.manager.animationManager.animationsActive() && rollEffect !== 'none';
        var duration = (_b = settings === null || settings === void 0 ? void 0 : settings.duration) !== null && _b !== void 0 ? _b : 1000;
        if (animate) {
            if (Array.isArray(duration)) {
                var diff = Math.abs(duration[1] - duration[0]);
                duration = Math.min.apply(Math, duration) + Math.floor(Math.random() * diff);
            }
            if (rollEffect.includes('roll')) {
                faces.style.transform = "rotate3d(".concat(Math.random() < 0.5 ? -1 : 1, ", ").concat(Math.random() < 0.5 ? -1 : 1, ", ").concat(Math.random() < 0.5 ? -1 : 1, ", ").concat(720 + Math.random() * 360, "deg)");
                faces.clientWidth;
            }
            this.addRollEffectToDieElement(die, div, rollEffect, duration);
        }
        faces.style.setProperty('--roll-duration', "".concat(animate ? duration : 0, "ms"));
        faces.clientWidth;
        faces.style.removeProperty('transform');
        faces.dataset.visibleFace = "".concat(die.face);
    };
    return DiceStock;
}());
var LineDiceStock = (function (_super) {
    __extends(LineDiceStock, _super);
    function LineDiceStock(manager, element, settings) {
        var _a, _b, _c, _d;
        var _this = _super.call(this, manager, element, settings) || this;
        _this.manager = manager;
        _this.element = element;
        element.classList.add('bga-dice_line-stock');
        element.dataset.center = ((_a = settings === null || settings === void 0 ? void 0 : settings.center) !== null && _a !== void 0 ? _a : true).toString();
        element.style.setProperty('--wrap', (_b = settings === null || settings === void 0 ? void 0 : settings.wrap) !== null && _b !== void 0 ? _b : 'wrap');
        element.style.setProperty('--direction', (_c = settings === null || settings === void 0 ? void 0 : settings.direction) !== null && _c !== void 0 ? _c : 'row');
        element.style.setProperty('--gap', (_d = settings === null || settings === void 0 ? void 0 : settings.gap) !== null && _d !== void 0 ? _d : '8px');
        return _this;
    }
    return LineDiceStock;
}(DiceStock));
var BgaHelpButton = (function () {
    function BgaHelpButton() {
    }
    return BgaHelpButton;
}());
var BgaHelpPopinButton = (function (_super) {
    __extends(BgaHelpPopinButton, _super);
    function BgaHelpPopinButton(settings) {
        var _this = _super.call(this) || this;
        _this.settings = settings;
        return _this;
    }
    BgaHelpPopinButton.prototype.add = function (toElement) {
        var _a;
        var _this = this;
        var button = document.createElement('button');
        (_a = button.classList).add.apply(_a, __spreadArray(['bga-help_button', 'bga-help_popin-button'], (this.settings.buttonExtraClasses ? this.settings.buttonExtraClasses.split(/\s+/g) : []), false));
        button.innerHTML = "?";
        if (this.settings.buttonBackground) {
            button.style.setProperty('--background', this.settings.buttonBackground);
        }
        if (this.settings.buttonColor) {
            button.style.setProperty('--color', this.settings.buttonColor);
        }
        toElement.appendChild(button);
        button.addEventListener('click', function () { return _this.showHelp(); });
    };
    BgaHelpPopinButton.prototype.showHelp = function () {
        var _a, _b, _c;
        var popinDialog = new window.ebg.popindialog();
        popinDialog.create('bgaHelpDialog');
        popinDialog.setTitle(this.settings.title);
        popinDialog.setContent("<div id=\"help-dialog-content\">".concat((_a = this.settings.html) !== null && _a !== void 0 ? _a : '', "</div>"));
        (_c = (_b = this.settings).onPopinCreated) === null || _c === void 0 ? void 0 : _c.call(_b, document.getElementById('help-dialog-content'));
        popinDialog.show();
    };
    return BgaHelpPopinButton;
}(BgaHelpButton));
var BgaHelpExpandableButton = (function (_super) {
    __extends(BgaHelpExpandableButton, _super);
    function BgaHelpExpandableButton(settings) {
        var _this = _super.call(this) || this;
        _this.settings = settings;
        return _this;
    }
    BgaHelpExpandableButton.prototype.add = function (toElement) {
        var _a;
        var _this = this;
        var _b, _c, _d, _e, _f, _g, _h, _j;
        var folded = (_b = this.settings.defaultFolded) !== null && _b !== void 0 ? _b : true;
        if (this.settings.localStorageFoldedKey) {
            var localStorageValue = localStorage.getItem(this.settings.localStorageFoldedKey);
            if (localStorageValue) {
                folded = localStorageValue == 'true';
            }
        }
        var button = document.createElement('button');
        button.dataset.folded = folded.toString();
        (_a = button.classList).add.apply(_a, __spreadArray(['bga-help_button', 'bga-help_expandable-button'], (this.settings.buttonExtraClasses ? this.settings.buttonExtraClasses.split(/\s+/g) : []), false));
        button.innerHTML = "\n            <div class=\"bga-help_folded-content ".concat(((_c = this.settings.foldedContentExtraClasses) !== null && _c !== void 0 ? _c : '').split(/\s+/g), "\">").concat((_d = this.settings.foldedHtml) !== null && _d !== void 0 ? _d : '', "</div>\n            <div class=\"bga-help_unfolded-content  ").concat(((_e = this.settings.unfoldedContentExtraClasses) !== null && _e !== void 0 ? _e : '').split(/\s+/g), "\">").concat((_f = this.settings.unfoldedHtml) !== null && _f !== void 0 ? _f : '', "</div>\n        ");
        button.style.setProperty('--expanded-width', (_g = this.settings.expandedWidth) !== null && _g !== void 0 ? _g : 'auto');
        button.style.setProperty('--expanded-height', (_h = this.settings.expandedHeight) !== null && _h !== void 0 ? _h : 'auto');
        button.style.setProperty('--expanded-radius', (_j = this.settings.expandedRadius) !== null && _j !== void 0 ? _j : '10px');
        toElement.appendChild(button);
        button.addEventListener('click', function () {
            button.dataset.folded = button.dataset.folded == 'true' ? 'false' : 'true';
            if (_this.settings.localStorageFoldedKey) {
                localStorage.setItem(_this.settings.localStorageFoldedKey, button.dataset.folded);
            }
        });
    };
    return BgaHelpExpandableButton;
}(BgaHelpButton));
var HelpManager = (function () {
    function HelpManager(game, settings) {
        this.game = game;
        if (!(settings === null || settings === void 0 ? void 0 : settings.buttons)) {
            throw new Error('HelpManager need a `buttons` list in the settings.');
        }
        var leftSide = document.getElementById('left-side');
        var buttons = document.createElement('div');
        buttons.id = "bga-help_buttons";
        leftSide.appendChild(buttons);
        settings.buttons.forEach(function (button) { return button.add(buttons); });
    }
    return HelpManager;
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
define([
    'dojo',
    'dojo/_base/declare',
    g_gamethemeurl + 'modules/js/vendor/nouislider.min.js',
    'dojo/fx',
    'dojox/fx/ext-dojo/complex',
    'ebg/core/gamegui',
    'ebg/counter',
], function (dojo, declare, noUiSliderDefined) {
    if (noUiSliderDefined) {
        noUiSlider = noUiSliderDefined;
    }
    return declare('bgagame.mollyhouse', ebg.core.gamegui, new MollyHouse());
});
var InfoPanel = (function () {
    function InfoPanel(game) {
        this.game = game;
        var gamedatas = game.gamedatas;
        this.setup(gamedatas);
    }
    InfoPanel.create = function (game) {
        InfoPanel.instance = new InfoPanel(game);
    };
    InfoPanel.getInstance = function () {
        return InfoPanel.instance;
    };
    InfoPanel.prototype.clearInterface = function () { };
    InfoPanel.prototype.updateInterface = function (gamedatas) { };
    InfoPanel.prototype.setup = function (gamedatas) {
        var node = document.getElementById('player_boards');
        if (!node) {
            return;
        }
        node.insertAdjacentHTML('afterbegin', tplInfoPanel());
    };
    return InfoPanel;
}());
var tplInfoPanel = function () { return "<div class='player-board' id=\"info-panel\">\n  <div id=\"info-panel-buttons\">\n    \n  </div>\n\n</div>"; };
var tplHelpModeSwitch = function () { return "<div id=\"help-mode-switch\">\n           <input type=\"checkbox\" class=\"checkbox\" id=\"help-mode-chk\" />\n           <label class=\"label\" for=\"help-mode-chk\">\n             <div class=\"ball\"></div>\n           </label><svg aria-hidden=\"true\" focusable=\"false\" data-prefix=\"fad\" data-icon=\"question-circle\" class=\"svg-inline--fa fa-question-circle fa-w-16\" role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><g class=\"fa-group\"><path class=\"fa-secondary\" fill=\"currentColor\" d=\"M256 8C119 8 8 119.08 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 422a46 46 0 1 1 46-46 46.05 46.05 0 0 1-46 46zm40-131.33V300a12 12 0 0 1-12 12h-56a12 12 0 0 1-12-12v-4c0-41.06 31.13-57.47 54.65-70.66 20.17-11.31 32.54-19 32.54-34 0-19.82-25.27-33-45.7-33-27.19 0-39.44 13.14-57.3 35.79a12 12 0 0 1-16.67 2.13L148.82 170a12 12 0 0 1-2.71-16.26C173.4 113 208.16 90 262.66 90c56.34 0 116.53 44 116.53 102 0 77-83.19 78.21-83.19 106.67z\" opacity=\"0.4\"></path><path class=\"fa-primary\" fill=\"currentColor\" d=\"M256 338a46 46 0 1 0 46 46 46 46 0 0 0-46-46zm6.66-248c-54.5 0-89.26 23-116.55 63.76a12 12 0 0 0 2.71 16.24l34.7 26.31a12 12 0 0 0 16.67-2.13c17.86-22.65 30.11-35.79 57.3-35.79 20.43 0 45.7 13.14 45.7 33 0 15-12.37 22.66-32.54 34C247.13 238.53 216 254.94 216 296v4a12 12 0 0 0 12 12h56a12 12 0 0 0 12-12v-1.33c0-28.46 83.19-29.67 83.19-106.67 0-58-60.19-102-116.53-102z\"></path></g></svg>\n         </div>"; };
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
        var _this = this;
        var previousSteps = _a.previousSteps, previousEngineChoices = _a.previousEngineChoices;
        var lastStep = Math.max.apply(Math, __spreadArray([0], previousSteps, false));
        if (lastStep > 0) {
            this.addDangerActionButton({
                id: 'undo_last_step_btn',
                text: _('Undo last step'),
                callback: function () {
                    _this.game.framework().bgaPerformAction('actUndoToStep', {
                        stepId: lastStep,
                    });
                },
            });
        }
        if (previousEngineChoices > 0) {
            this.addDangerActionButton({
                id: 'restart_btn',
                text: _('Restart turn'),
                callback: function () {
                    _this.game.framework().bgaPerformAction('actRestart');
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
var Modal = (function () {
    function Modal(id, config) {
        var _this = this;
        this.open = false;
        this.container = 'ebd-body';
        this.class = 'custom_popin';
        this.autoShow = false;
        this.modalTpl = "\n    <div id='popin_${id}_container' class=\"${class}_container\">\n      <div id='popin_${id}_underlay' class=\"${class}_underlay\"></div>\n      <div id='popin_${id}_wrapper' class=\"${class}_wrapper\">\n        <div id=\"popin_${id}\" class=\"${class}\">\n          ${titleTpl}\n          ${closeIconTpl}\n          ${helpIconTpl}\n          ${contentsTpl}\n        </div>\n      </div>\n    </div>\n  ";
        this.closeIcon = 'fa-times-circle';
        this.closeIconTpl = '<a id="popin_${id}_close" class="${class}_closeicon"><i class="fa ${closeIcon} fa-2x" aria-hidden="true"></i></a>';
        this.closeAction = 'destroy';
        this.closeWhenClickOnUnderlay = true;
        this.helpIcon = null;
        this.helpLink = '#';
        this.helpIconTpl = '<a href="${helpLink}" target="_blank" id="popin_${id}_help" class="${class}_helpicon"><i class="fa ${helpIcon} fa-2x" aria-hidden="true"></i></a>';
        this.title = null;
        this.titleTpl = '<h2 id="popin_${id}_title" class="${class}_title">${title}</h2>';
        this.contentsTpl = "\n      <div id=\"popin_${id}_contents\" class=\"${class}_contents\">\n        ${contents}\n      </div>";
        this.contents = '';
        this.verticalAlign = 'center';
        this.animationDuration = 500;
        this.fadeIn = true;
        this.fadeOut = true;
        this.openAnimation = false;
        this.openAnimationTarget = null;
        this.openAnimationDelta = 200;
        this.onShow = null;
        this.onHide = null;
        this.statusElt = null;
        this.scale = 1;
        this.breakpoint = null;
        if (id === undefined) {
            console.error('You need an ID to create a modal');
            throw 'You need an ID to create a modal';
        }
        this.id = id;
        Object.entries(config).forEach(function (_a) {
            var key = _a[0], value = _a[1];
            if (value !== undefined) {
                _this[key] = value;
            }
        });
        this.create();
        if (this.autoShow)
            this.show();
    }
    Modal.prototype.isDisplayed = function () {
        return this.open;
    };
    Modal.prototype.isCreated = function () {
        return this.id != null;
    };
    Modal.prototype.create = function () {
        var _this = this;
        dojo.destroy('popin_' + this.id + '_container');
        var titleTpl = this.title == null ? '' : dojo.string.substitute(this.titleTpl, this);
        var closeIconTpl = this.closeIcon == null ? '' : dojo.string.substitute(this.closeIconTpl, this);
        var helpIconTpl = this.helpIcon == null ? '' : dojo.string.substitute(this.helpIconTpl, this);
        var contentsTpl = dojo.string.substitute(this.contentsTpl, this);
        var modalTpl = dojo.string.substitute(this.modalTpl, {
            id: this.id,
            class: this.class,
            titleTpl: titleTpl,
            closeIconTpl: closeIconTpl,
            helpIconTpl: helpIconTpl,
            contentsTpl: contentsTpl,
        });
        dojo.place(modalTpl, this.container);
        dojo.style('popin_' + this.id + '_container', {
            display: 'none',
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '100%',
            height: '100%',
        });
        dojo.style('popin_' + this.id + '_underlay', {
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '100%',
            height: '100%',
            zIndex: 949,
            opacity: 0,
            backgroundColor: 'white',
        });
        dojo.style('popin_' + this.id + '_wrapper', {
            position: 'fixed',
            left: '0px',
            top: '0px',
            width: 'min(100%,100vw)',
            height: '100vh',
            zIndex: 950,
            opacity: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: this.verticalAlign,
            paddingTop: this.verticalAlign == 'center' ? 0 : '125px',
            transformOrigin: 'top left',
        });
        this.adjustSize();
        this.resizeListener = dojo.connect(window, 'resize', function () { return _this.adjustSize(); });
        if (this.closeIcon != null && $('popin_' + this.id + '_close')) {
            dojo.connect($('popin_' + this.id + '_close'), 'click', function () { return _this[_this.closeAction](); });
        }
        if (this.closeWhenClickOnUnderlay) {
            dojo.connect($('popin_' + this.id + '_underlay'), 'click', function () { return _this[_this.closeAction](); });
            dojo.connect($('popin_' + this.id + '_wrapper'), 'click', function () { return _this[_this.closeAction](); });
            dojo.connect($('popin_' + this.id), 'click', function (evt) { return evt.stopPropagation(); });
        }
    };
    Modal.prototype.updateContent = function (newContent) {
        var contentContainerId = "popin_".concat(this.id, "_contents");
        dojo.empty(contentContainerId);
        dojo.place(newContent, contentContainerId);
    };
    Modal.prototype.adjustSize = function () {
        var bdy = dojo.position(this.container);
        dojo.style('popin_' + this.id + '_container', {
            width: bdy.w + 'px',
            height: bdy.h + 'px',
        });
        if (this.breakpoint != null) {
            var newModalWidth = bdy.w * this.scale;
            var modalScale = newModalWidth / this.breakpoint;
            if (modalScale > 1)
                modalScale = 1;
            dojo.style('popin_' + this.id, {
                transform: "scale(".concat(modalScale, ")"),
                transformOrigin: this.verticalAlign == 'center' ? 'center center' : 'top center',
            });
        }
    };
    Modal.prototype.getOpeningTargetCenter = function () {
        var startTop, startLeft;
        if (this.openAnimationTarget == null) {
            startLeft = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0) / 2;
            startTop = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0) / 2;
        }
        else {
            var target = dojo.position(this.openAnimationTarget);
            startLeft = target.x + target.w / 2;
            startTop = target.y + target.h / 2;
        }
        return {
            x: startLeft,
            y: startTop,
        };
    };
    Modal.prototype.fadeInAnimation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var containerId = 'popin_' + _this.id + '_container';
            if (!$(containerId))
                reject();
            if (_this.runningAnimation)
                _this.runningAnimation.stop();
            var duration = _this.fadeIn ? _this.animationDuration : 0;
            var animations = [];
            animations.push(dojo.fadeIn({
                node: 'popin_' + _this.id + '_wrapper',
                duration: duration,
            }));
            animations.push(dojo.animateProperty({
                node: 'popin_' + _this.id + '_underlay',
                duration: duration,
                properties: { opacity: { start: 0, end: 0.7 } },
            }));
            if (_this.openAnimation) {
                var pos = _this.getOpeningTargetCenter();
                animations.push(dojo.animateProperty({
                    node: 'popin_' + _this.id + '_wrapper',
                    properties: {
                        transform: { start: 'scale(0)', end: 'scale(1)' },
                        top: { start: pos.y, end: 0 },
                        left: { start: pos.x, end: 0 },
                    },
                    duration: _this.animationDuration + _this.openAnimationDelta,
                }));
            }
            _this.runningAnimation = dojo.fx.combine(animations);
            dojo.connect(_this.runningAnimation, 'onEnd', function () { return resolve(); });
            _this.runningAnimation.play();
            setTimeout(function () {
                if ($('popin_' + _this.id + '_container'))
                    dojo.style('popin_' + _this.id + '_container', 'display', 'block');
            }, 10);
        });
    };
    Modal.prototype.show = function () {
        var _this = this;
        if (this.isOpening || this.open)
            return;
        if (this.statusElt !== null) {
            dojo.addClass(this.statusElt, 'opened');
        }
        this.adjustSize();
        this.isOpening = true;
        this.isClosing = false;
        this.fadeInAnimation().then(function () {
            if (!_this.isOpening)
                return;
            _this.isOpening = false;
            _this.open = true;
            if (_this.onShow !== null) {
                _this.onShow();
            }
        });
    };
    Modal.prototype.fadeOutAnimation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var containerId = 'popin_' + _this.id + '_container';
            if (!$(containerId))
                reject();
            if (_this.runningAnimation)
                _this.runningAnimation.stop();
            var duration = _this.fadeOut ? _this.animationDuration + (_this.openAnimation ? _this.openAnimationDelta : 0) : 0;
            var animations = [];
            animations.push(dojo.fadeOut({
                node: 'popin_' + _this.id + '_wrapper',
                duration: duration,
            }));
            animations.push(dojo.animateProperty({
                node: 'popin_' + _this.id + '_underlay',
                duration: duration,
                properties: { opacity: { start: 0.7, end: 0 } },
            }));
            if (_this.openAnimation) {
                var pos = _this.getOpeningTargetCenter();
                animations.push(dojo.animateProperty({
                    node: 'popin_' + _this.id + '_wrapper',
                    properties: {
                        transform: { start: 'scale(1)', end: 'scale(0)' },
                        top: { start: 0, end: pos.y },
                        left: { start: 0, end: pos.x },
                    },
                    duration: _this.animationDuration,
                }));
            }
            _this.runningAnimation = dojo.fx.combine(animations);
            dojo.connect(_this.runningAnimation, 'onEnd', function () { return resolve(); });
            _this.runningAnimation.play();
        });
    };
    Modal.prototype.hide = function () {
        var _this = this;
        if (this.isClosing)
            return;
        this.isClosing = true;
        this.isOpening = false;
        this.fadeOutAnimation().then(function () {
            if (!_this.isClosing || _this.isOpening)
                return;
            _this.isClosing = false;
            _this.open = false;
            dojo.style('popin_' + _this.id + '_container', 'display', 'none');
            if (_this.onHide !== null) {
                _this.onHide();
            }
            if (_this.statusElt !== null) {
                dojo.removeClass(_this.statusElt, 'opened');
            }
        });
    };
    Modal.prototype.destroy = function () {
        var _this = this;
        if (this.isClosing)
            return;
        this.isOpening = false;
        this.isClosing = true;
        this.fadeOutAnimation().then(function () {
            if (!_this.isClosing || _this.isOpening)
                return;
            _this.isClosing = false;
            _this.open = false;
            _this.kill();
        });
    };
    Modal.prototype.kill = function () {
        if (this.runningAnimation)
            this.runningAnimation.stop();
        var underlayId = 'popin_' + this.id + '_container';
        dojo.destroy(underlayId);
        dojo.disconnect(this.resizeListener);
        this.id = null;
        if (this.statusElt !== null) {
            dojo.removeClass(this.statusElt, 'opened');
        }
    };
    return Modal;
}());
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
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
            'refreshUI',
            'refreshUIPrivate',
            'addCardFromGossipPile',
            'addCardFromGossipPilePrivate',
            'addCardToHand',
            'addCardToGossipPile',
            'addCardToReputation',
            'addCardToSafePile',
            'addExcessCardsToGossip',
            'addExcessCardsToGossipPrivate',
            'communityAtrophy',
            'dealItemToShop',
            'discardEncounterToken',
            'discardIndictment',
            'discardItem',
            'drawCards',
            'drawCardsPrivate',
            'endOfWeekAddCardToGossipPile',
            'endOfWeekCreateViceDeck',
            'endOfWeekDiscardToSafePile',
            'endOfWeekGenerateEvidence',
            'endOfWeekMollyHouseRaided',
            'gainIndictment',
            'gainIndictmentPrivate',
            'festivityEnd',
            'festivityPlayCard',
            'festivityRevealTopCardViceDeck',
            'festivityPhase',
            'festivitySetRogueValue',
            'festivityWinningSet',
            'hang',
            'gainCubes',
            'gainDrawTokens',
            'loseJoy',
            'loseJoyCommunity',
            'movePawn',
            'phase',
            'placeEncounterToken',
            'placeEncounterTokenPrivate',
            'placePawn',
            'playDress',
            'refillMarket',
            'revealEncounterToken',
            'revealIndictment',
            'rollDice',
            'rollTenSidedDie',
            'scoreBonusJoy',
            'scoreJoy',
            'scoreJoyCommunity',
            'scoreVictoryPoints',
            'setupChooseCardPrivate',
            'setupChooseCard',
            'setupRevealCard',
            'takeCandelabra',
            'takeItem',
            'throwFestivity',
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
            [
                'addCardFromGossipPile',
                'addExcessCardsToGossip',
                'drawCards',
                'gainIndictment',
                'setupChooseCard',
                'placeEncounterToken',
            ].forEach(function (notifId) {
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
    NotificationManager.prototype.gainCubes = function (player, suit, numberOfCubes) {
        player.counters[SUIT_COLOR_MAP[suit]].incValue(numberOfCubes);
        player.counters["playerBoard_".concat(SUIT_COLOR_MAP[suit])].incValue(numberOfCubes);
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
    NotificationManager.prototype.notif_refreshUI = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var gamedatas, players, otherData, updatedGamedatas;
            return __generator(this, function (_a) {
                gamedatas = notif.args.data;
                players = gamedatas.players, otherData = __rest(gamedatas, ["players"]);
                updatedGamedatas = __assign(__assign({}, this.game.gamedatas), otherData);
                this.game.gamedatas = updatedGamedatas;
                this.game.clearInterface();
                Board.getInstance().updateInterface(updatedGamedatas);
                PlayerManager.getInstance().updateInterface(updatedGamedatas);
                Market.getInstance().updateInterface(updatedGamedatas);
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_refreshUIPrivate = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, playerId, handCards, encounterTokens, indictments, player, hand;
            return __generator(this, function (_b) {
                _a = notif.args, playerId = _a.playerId, handCards = _a.hand, encounterTokens = _a.encounterTokens, indictments = _a.indictments;
                player = this.getPlayer(playerId);
                player.indictments.removeAll();
                player.encounterTokens.removeAll();
                player.updatePrivateData({
                    encounterTokens: encounterTokens,
                    indictments: indictments,
                });
                hand = Hand.getInstance();
                hand.clearInterface();
                hand.updateHand(handCards);
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_phase = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, phase, week;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, phase = _a.phase, week = _a.week;
                        if (!(phase === MOVE_WEEK_MARKER && week)) return [3, 2];
                        return [4, Board.getInstance().moveWeekMarker(week)];
                    case 1:
                        _b.sent();
                        _b.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_addCardFromGossipPile = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var playerId;
            return __generator(this, function (_a) {
                playerId = notif.args.playerId;
                Board.getInstance().counters[GOSSIP_PILE].incValue(-1);
                this.getPlayer(playerId).counters[HAND].incValue(1);
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_addCardFromGossipPilePrivate = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, playerId, card, player, hand;
            return __generator(this, function (_b) {
                _a = notif.args, playerId = _a.playerId, card = _a.card;
                player = this.getPlayer(playerId);
                Board.getInstance().counters[GOSSIP_PILE].incValue(-1);
                hand = Hand.getInstance();
                hand.addCard(getViceCard(card));
                player.counters[HAND].incValue(1);
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_addCardToHand = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, playerId, card, viceCard, hand;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, playerId = _a.playerId, card = _a.card;
                        viceCard = getViceCard(card);
                        this.getPlayer(playerId).counters[HAND].incValue(1);
                        if (!(playerId === this.game.getPlayerId())) return [3, 2];
                        hand = Hand.getInstance();
                        return [4, hand.addCard(viceCard)];
                    case 1:
                        _b.sent();
                        return [3, 3];
                    case 2:
                        Market.getInstance().stock.removeCard(viceCard);
                        _b.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_addCardToGossipPile = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, card, fromLocation, viceCard, board, playerId, playerId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, card = _a.card, fromLocation = _a.fromLocation;
                        viceCard = getViceCard(card);
                        board = Board.getInstance();
                        if (fromLocation.startsWith('reputation')) {
                            playerId = Number(fromLocation.split('_')[1]);
                            this.getPlayer(playerId).counters[viceCard.suit].incValue(-1);
                        }
                        else if (fromLocation.startsWith('hand')) {
                            playerId = Number(fromLocation.split('_')[1]);
                            this.getPlayer(playerId).counters[HAND].incValue(-1);
                        }
                        return [4, board.gossipPile.addCard(viceCard)];
                    case 1:
                        _b.sent();
                        board.counters[GOSSIP_PILE].incValue(1);
                        return [4, this.game.viceCardManager.removeCard(viceCard)];
                    case 2:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_addCardToReputation = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, playerId, card, from, player, viceCard, fromElement;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, playerId = _a.playerId, card = _a.card, from = _a.from;
                        player = this.getPlayer(playerId);
                        viceCard = getViceCard(card);
                        fromElement = this.game.getPlayerId() !== playerId
                            ? document.getElementById("player_board_".concat(playerId))
                            : undefined;
                        if (from.startsWith('hand')) {
                            player.counters[HAND].incValue(-1);
                        }
                        return [4, player.reputation.addCard(viceCard, {
                                fromElement: fromElement,
                            })];
                    case 1:
                        _b.sent();
                        player.counters[viceCard.suit].incValue(1);
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_addCardToSafePile = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, card, playerId, community, from, viceCard, playerId_1, market;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, card = _a.card, playerId = _a.playerId, community = _a.community, from = _a.from;
                        viceCard = getViceCard(card);
                        if (from.startsWith('reputation_') && !community && playerId) {
                            this.getPlayer(playerId).counters[viceCard.suit].incValue(-1);
                        }
                        else if (from.startsWith('hand')) {
                            playerId_1 = Number(from.split('_')[1]);
                            this.getPlayer(playerId_1).counters[HAND].incValue(-1);
                        }
                        market = Market.getInstance();
                        return [4, market.addCardToSafePile(viceCard)];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_addExcessCardsToGossip = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, number, playerId, cardsAddedToSafePile, cards, player, market, promises;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, number = _a.number, playerId = _a.playerId, cardsAddedToSafePile = _a.cardsAddedToSafePile, cards = _a.cards;
                        player = this.getPlayer(playerId);
                        market = Market.getInstance();
                        player.counters[HAND].incValue(-number);
                        if (!cardsAddedToSafePile) return [3, 2];
                        promises = cards.map(function (card, index) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, Interaction.use().wait(index * 150)];
                                    case 1:
                                        _a.sent();
                                        return [4, market.addCardToSafePile(getViceCard(card))];
                                    case 2:
                                        _a.sent();
                                        return [2];
                                }
                            });
                        }); });
                        return [4, Promise.all(promises)];
                    case 1:
                        _b.sent();
                        return [3, 3];
                    case 2:
                        Board.getInstance().counters[GOSSIP_PILE].incValue(number);
                        _b.label = 3;
                    case 3: return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_addExcessCardsToGossipPrivate = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, cards, playerId, board, market, promises;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, cards = _a.cards, playerId = _a.playerId;
                        board = Board.getInstance();
                        market = Market.getInstance();
                        this.getPlayer(playerId).counters[HAND].incValue(-cards.length);
                        promises = cards.map(function (card, index) { return __awaiter(_this, void 0, void 0, function () {
                            var viceCard;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, Interaction.use().wait(index * 150)];
                                    case 1:
                                        _a.sent();
                                        viceCard = getViceCard(card);
                                        if (!(viceCard.location === GOSSIP_PILE)) return [3, 4];
                                        return [4, board.gossipPile.addCard(viceCard)];
                                    case 2:
                                        _a.sent();
                                        board.counters[GOSSIP_PILE].incValue(1);
                                        return [4, this.game.viceCardManager.removeCard(viceCard)];
                                    case 3:
                                        _a.sent();
                                        return [3, 6];
                                    case 4:
                                        if (!(viceCard.location === SAFE_PILE)) return [3, 6];
                                        return [4, market.addCardToSafePile(viceCard)];
                                    case 5:
                                        _a.sent();
                                        _a.label = 6;
                                    case 6: return [2];
                                }
                            });
                        }); });
                        return [4, Promise.all(promises)];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_communityAtrophy = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                PlayerManager.getInstance()
                    .getPlayerIds()
                    .forEach(function (playerId) {
                    setScore(playerId, -1);
                });
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_dealItemToShop = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item = notif.args.item;
                        return [4, Board.getInstance().shops[item.location].addCard(getItem(item))];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_discardEncounterToken = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        token = notif.args.token;
                        return [4, Board.getInstance().encounterTokenDiscard.addCard(token)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_discardIndictment = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, playerId, indictment;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, playerId = _a.playerId, indictment = _a.indictment;
                        return [4, Board.getInstance().indictmentDiscard.addCard(indictment)];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_discardItem = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item = notif.args.item;
                        return [4, Board.getInstance().itemDiscard.addCard(getItem(item))];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_drawCards = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, playerId, number, numberOfDrawTokenToReturn, player;
            return __generator(this, function (_b) {
                _a = notif.args, playerId = _a.playerId, number = _a.number, numberOfDrawTokenToReturn = _a.numberOfDrawTokenToReturn;
                Market.getInstance().incDeckCounter(-number);
                player = this.getPlayer(playerId);
                player.counters[DRAW_TOKEN].incValue(-numberOfDrawTokenToReturn);
                player.counters[HAND].incValue(number);
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_drawCardsPrivate = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, cards, playerId, numberOfDrawTokenToReturn, viceCards, hand, market, player, promises;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, cards = _a.cards, playerId = _a.playerId, numberOfDrawTokenToReturn = _a.numberOfDrawTokenToReturn;
                        viceCards = cards.map(function (card) { return getViceCard(card); });
                        hand = Hand.getInstance();
                        market = Market.getInstance();
                        player = this.getPlayer(playerId);
                        player.counters[DRAW_TOKEN].incValue(-numberOfDrawTokenToReturn);
                        promises = viceCards.map(function (card, index) { return __awaiter(_this, void 0, void 0, function () {
                            var location;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        Interaction.use().wait(index * 150);
                                        location = card.location;
                                        card.location = DECK;
                                        return [4, market.deck.addCard(card)];
                                    case 1:
                                        _a.sent();
                                        card.location = location;
                                        market.incDeckCounter(-1);
                                        return [4, hand.addCard(card)];
                                    case 2:
                                        _a.sent();
                                        player.counters[HAND].incValue(1);
                                        return [2];
                                }
                            });
                        }); });
                        return [4, Promise.all(promises)];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_endOfWeekAddCardToGossipPile = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var fakeCard, market, board;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fakeCard = {
                            id: 'fakeCardId',
                            location: DECK,
                        };
                        market = Market.getInstance();
                        board = Board.getInstance();
                        return [4, market.deck.addCard(fakeCard)];
                    case 1:
                        _a.sent();
                        fakeCard.location = GOSSIP_PILE;
                        market.incDeckCounter(-1);
                        return [4, board.gossipPile.addCard(fakeCard)];
                    case 2:
                        _a.sent();
                        board.counters[GOSSIP_PILE].incValue(1);
                        return [4, this.game.viceCardManager.removeCard(fakeCard)];
                    case 3:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_endOfWeekCreateViceDeck = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var cards, market, board, promises;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cards = notif.args.cards;
                        market = Market.getInstance();
                        board = Board.getInstance();
                        promises = cards.map(function (card, index) { return __awaiter(_this, void 0, void 0, function () {
                            var viceCard;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, Interaction.use().wait(index * 100)];
                                    case 1:
                                        _a.sent();
                                        viceCard = getViceCard(card);
                                        if (!(card.location === SAFE_PILE)) return [3, 3];
                                        return [4, market.safePile.addCard(viceCard)];
                                    case 2:
                                        _a.sent();
                                        market.incSafePileCounter(-1);
                                        _a.label = 3;
                                    case 3:
                                        if (!(card.location === GOSSIP_PILE)) return [3, 5];
                                        return [4, board.gossipPile.addCard(viceCard)];
                                    case 4:
                                        _a.sent();
                                        board.counters[GOSSIP_PILE].incValue(-1);
                                        _a.label = 5;
                                    case 5:
                                        card.location = DECK;
                                        return [4, market.deck.addCard(viceCard)];
                                    case 6:
                                        _a.sent();
                                        market.incDeckCounter(1);
                                        this.game.viceCardManager.removeCard(viceCard);
                                        return [2];
                                }
                            });
                        }); });
                        return [4, Promise.all(promises)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_endOfWeekDiscardToSafePile = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, number, cards;
            return __generator(this, function (_b) {
                _a = notif.args, number = _a.number, cards = _a.cards;
                Board.getInstance().counters[GOSSIP_PILE].incValue(-number);
                Market.getInstance().incSafePileCounter(number);
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_endOfWeekGenerateEvidence = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, site, number;
            return __generator(this, function (_b) {
                _a = notif.args, site = _a.site, number = _a.number;
                Board.getInstance().evidenceCounters[site.id].incValue(number);
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_endOfWeekMollyHouseRaided = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, mollyHouse, adjacentSites, board;
            return __generator(this, function (_b) {
                _a = notif.args, mollyHouse = _a.mollyHouse, adjacentSites = _a.adjacentSites;
                board = Board.getInstance();
                board.setMollyHouseRaided(mollyHouse.id);
                Object.keys(adjacentSites).forEach(function (siteId) {
                    board.setCruisingSiteDangerous(siteId);
                });
                board.evidenceCounters[mollyHouse.id].incValue(-7);
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_festivityEnd = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                Board.getInstance().setFestivityActive(false);
                Festivity.getInstance().setFestivityActive(false);
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_festivityPlayCard = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, playerId, card;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, playerId = _a.playerId, card = _a.card;
                        this.getPlayer(playerId).counters[HAND].incValue(-1);
                        return [4, Festivity.getInstance().stocks[playerId].addCard(getViceCard(card))];
                    case 1:
                        _b.sent();
                        if (getViceCard(card).displayValue === 'R') {
                            Festivity.getInstance().addRogueValue(card.id, card.festivityValue);
                        }
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_gainDrawTokens = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, playerId, number, player;
            return __generator(this, function (_b) {
                _a = notif.args, playerId = _a.playerId, number = _a.number;
                player = this.getPlayer(playerId);
                player.counters[DRAW_TOKEN].incValue(number);
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_gainIndictment = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, playerId, indictment;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, playerId = _a.playerId, indictment = _a.indictment;
                        return [4, this.getPlayer(playerId).indictments.addCard(indictment)];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_gainIndictmentPrivate = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, playerId, indictment;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, playerId = _a.playerId, indictment = _a.indictment;
                        return [4, this.getPlayer(playerId).indictments.addCard(indictment)];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_festivityRevealTopCardViceDeck = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, card, cardDrawnFromGossipPile, viceCard, location, market;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, card = _a.card, cardDrawnFromGossipPile = _a.cardDrawnFromGossipPile;
                        viceCard = getViceCard(card);
                        location = viceCard.location;
                        viceCard.location = cardDrawnFromGossipPile ? GOSSIP_PILE : DECK;
                        market = Market.getInstance();
                        if (!cardDrawnFromGossipPile) return [3, 1];
                        Board.getInstance().gossipPile.addCard(viceCard);
                        return [3, 3];
                    case 1: return [4, market.deck.addCard(viceCard)];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        viceCard.location = location;
                        if (cardDrawnFromGossipPile) {
                            Board.getInstance().counters[GOSSIP_PILE].incValue(-1);
                        }
                        else {
                            market.incDeckCounter(-1);
                        }
                        return [4, Festivity.getInstance().stocks[COMMUNITY].addCard(viceCard)];
                    case 4:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_festivityPhase = function (notif) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2];
        }); });
    };
    NotificationManager.prototype.notif_festivitySetRogueValue = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, card, value;
            return __generator(this, function (_b) {
                _a = notif.args, card = _a.card, value = _a.value;
                Festivity.getInstance().addRogueValue(card.id, value);
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_festivityWinningSet = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var cards;
            return __generator(this, function (_a) {
                cards = notif.args.cards;
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_gainCubes = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, playerId, numberOfCubes, suit, player;
            return __generator(this, function (_b) {
                _a = notif.args, playerId = _a.playerId, numberOfCubes = _a.numberOfCubes, suit = _a.suit;
                player = this.getPlayer(playerId);
                this.gainCubes(player, suit, numberOfCubes);
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_hang = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, playerId, joyMarker;
            return __generator(this, function (_b) {
                _a = notif.args, playerId = _a.playerId, joyMarker = _a.joyMarker;
                setScore(playerId, -1);
                this.game.joyMarkerManager.updateCardInformations(joyMarker);
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_loseJoy = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, playerId, amount, total, joyMarker;
            return __generator(this, function (_b) {
                _a = notif.args, playerId = _a.playerId, amount = _a.amount, total = _a.total, joyMarker = _a.joyMarker;
                incScore(playerId, -amount);
                Board.getInstance().joyMarkerStocks[total % 40].addCard(joyMarker);
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_loseJoyCommunity = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, joyTotal, joyMarker;
            return __generator(this, function (_b) {
                _a = notif.args, joyTotal = _a.joyTotal, joyMarker = _a.joyMarker;
                Board.getInstance().joyMarkerStocks[joyTotal % 40].addCard(joyMarker);
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_movePawn = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, from, pawn, board;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, from = _a.from, pawn = _a.pawn;
                        board = Board.getInstance();
                        return [4, board.movePawn({
                                pawn: pawn,
                                from: from,
                            })];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_playDress = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var item;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        item = notif.args.item;
                        return [4, Festivity.getInstance().playedDresses.addCard(getItem(item))];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_placeEncounterToken = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, siteId, token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, siteId = _a.siteId, token = _a.token;
                        return [4, Board.getInstance().encounterTokens[siteId].addCard(token)];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_placeEncounterTokenPrivate = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, siteId, token;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, siteId = _a.siteId, token = _a.token;
                        return [4, Board.getInstance().encounterTokens[siteId].addCard(token)];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_placePawn = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, playerId, pawn, board, player;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, playerId = _a.playerId, pawn = _a.pawn;
                        board = Board.getInstance();
                        player = this.getPlayer(playerId);
                        return [4, board.placePawn(pawn, document.getElementById("player_board_".concat(playerId)))];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_refillMarket = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, movedCards, addedCards, market, promises;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, movedCards = _a.movedCards, addedCards = _a.addedCards;
                        market = Market.getInstance();
                        promises = movedCards.concat(addedCards).map(function (card, index) { return __awaiter(_this, void 0, void 0, function () {
                            var viceCard, location_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4, Interaction.use().wait(index * 200)];
                                    case 1:
                                        _a.sent();
                                        viceCard = getViceCard(card);
                                        if (!movedCards.some(function (movedCard) { return movedCard.id === card.id; })) return [3, 3];
                                        return [4, market.stock.addCard(viceCard)];
                                    case 2:
                                        _a.sent();
                                        return [3, 6];
                                    case 3:
                                        location_1 = viceCard.location;
                                        viceCard.location = DECK;
                                        return [4, market.deck.addCard(viceCard)];
                                    case 4:
                                        _a.sent();
                                        viceCard.location = location_1;
                                        market.incDeckCounter(-1);
                                        return [4, market.stock.addCard(viceCard)];
                                    case 5:
                                        _a.sent();
                                        _a.label = 6;
                                    case 6: return [2];
                                }
                            });
                        }); });
                        return [4, Promise.all(promises)];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_revealEncounterToken = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, siteId, token;
            return __generator(this, function (_b) {
                _a = notif.args, siteId = _a.siteId, token = _a.token;
                this.game.encounterTokenManager.updateCardInformations(token);
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_revealIndictment = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, playerId, indictment;
            return __generator(this, function (_b) {
                _a = notif.args, playerId = _a.playerId, indictment = _a.indictment;
                this.game.indictmentManager.updateCardInformations(indictment);
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_rollDice = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var diceResults;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        diceResults = notif.args.diceResults;
                        Board.getInstance().diceStock.rollDice(getDice(diceResults), {
                            effect: 'rollIn',
                            duration: [800, 1200],
                        });
                        return [4, sleep(1200)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_rollTenSidedDie = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var dieResult;
            return __generator(this, function (_a) {
                dieResult = notif.args.dieResult;
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_scoreBonusJoy = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, playerId, amount, total, joyMarker;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, playerId = _a.playerId, amount = _a.amount, total = _a.total, joyMarker = _a.joyMarker;
                        incScore(playerId, amount);
                        return [4, Board.getInstance().joyMarkerStocks[total % 40].addCard(joyMarker)];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_scoreJoy = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, playerId, amount, total, joyMarker;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, playerId = _a.playerId, amount = _a.amount, total = _a.total, joyMarker = _a.joyMarker;
                        incScore(playerId, amount);
                        return [4, Board.getInstance().joyMarkerStocks[total % 40].addCard(joyMarker)];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_scoreJoyCommunity = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, joyTotal, joyMarker;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, joyTotal = _a.joyTotal, joyMarker = _a.joyMarker;
                        return [4, Board.getInstance().joyMarkerStocks[joyTotal % 40].addCard(joyMarker)];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_scoreVictoryPoints = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, playerId, amount;
            return __generator(this, function (_b) {
                _a = notif.args, playerId = _a.playerId, amount = _a.amount;
                incScore(playerId, amount);
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_setupChooseCard = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, playerId, card;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, playerId = _a.playerId, card = _a.card;
                        this.getPlayer(playerId).counters[HAND].incValue(-1);
                        return [4, this.getPlayer(playerId).reputation.addCard(card, {
                                fromElement: document.getElementById("player_board_".concat(playerId)),
                            })];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_setupChooseCardPrivate = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, playerId, card;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, playerId = _a.playerId, card = _a.card;
                        this.getPlayer(playerId).counters[HAND].incValue(-1);
                        return [4, this.getPlayer(playerId).reputation.addCard(getViceCard(card))];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_setupRevealCard = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, playerId, card, viceCard;
            return __generator(this, function (_b) {
                _a = notif.args, playerId = _a.playerId, card = _a.card;
                viceCard = getViceCard(card);
                this.game.viceCardManager.updateCardInformations(viceCard);
                this.getPlayer(playerId).counters[viceCard.suit].incValue(1);
                return [2];
            });
        });
    };
    NotificationManager.prototype.notif_takeCandelabra = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var playerId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        playerId = notif.args.playerId;
                        return [4, PlayerManager.getInstance().moveCandelabraTo(playerId)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_takeItem = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, playerId, item, player;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = notif.args, playerId = _a.playerId, item = _a.item;
                        player = this.getPlayer(playerId);
                        return [4, player.items[item.location].addCard(getItem(item))];
                    case 1:
                        _b.sent();
                        return [2];
                }
            });
        });
    };
    NotificationManager.prototype.notif_throwFestivity = function (notif) {
        return __awaiter(this, void 0, void 0, function () {
            var playerId;
            return __generator(this, function (_a) {
                playerId = notif.args.playerId;
                Board.getInstance().setFestivityActive(true);
                Festivity.getInstance().setRunner(playerId);
                Festivity.getInstance().setFestivityActive(true);
                return [2];
            });
        });
    };
    return NotificationManager;
}());
var getSettingsConfig = function () {
    var _a, _b;
    return ({
        baseSettings: {
            id: 'baseSettings',
            name: _('Base Settings'),
            config: (_a = {
                    twoColumnLayout: {
                        id: PREF_TWO_COLUMN_LAYOUT,
                        onChangeInSetup: true,
                        defaultValue: {
                            mobile: 'disabled',
                            desktop: 'enabled',
                            wideScreen: 'enabled',
                        },
                        label: _('Two column layout'),
                        type: 'select',
                        options: [
                            {
                                label: _('Enabled'),
                                value: 'enabled',
                            },
                            {
                                label: _('Disabled (single column)'),
                                value: 'disabled',
                            },
                        ],
                    },
                    columnSizes: {
                        id: PREF_COLUMN_SIZES,
                        onChangeInSetup: true,
                        label: _('Column sizes'),
                        defaultValue: {
                            mobile: 50,
                            desktop: 50,
                            wideScreen: 50,
                        },
                        visibleCondition: {
                            id: PREF_TWO_COLUMN_LAYOUT,
                            values: [PREF_ENABLED],
                        },
                        sliderConfig: {
                            step: 5,
                            padding: 0,
                            range: {
                                min: 35,
                                max: 65,
                            },
                        },
                        type: 'slider',
                    }
                },
                _a[PREF_CARD_SIZE_IN_LOG] = {
                    id: PREF_CARD_SIZE_IN_LOG,
                    onChangeInSetup: true,
                    label: _('Size of cards in log'),
                    defaultValue: {
                        mobile: 0,
                        desktop: 0,
                        wideScreen: 0,
                    },
                    sliderConfig: {
                        step: 25,
                        padding: 0,
                        range: {
                            min: 0,
                            max: 125,
                        },
                    },
                    type: 'slider',
                },
                _a[PREF_SIZE_OF_HAND] = {
                    id: PREF_SIZE_OF_HAND,
                    onChangeInSetup: true,
                    label: _('Size of hand'),
                    defaultValue: {
                        mobile: 100,
                        desktop: 100,
                        wideScreen: 100,
                    },
                    sliderConfig: {
                        step: 20,
                        padding: 0,
                        range: {
                            min: 40,
                            max: 160,
                        },
                    },
                    type: 'slider',
                },
                _a),
        },
        gameplay: {
            id: 'gameplay',
            name: _('Gameplay'),
            config: (_b = {},
                _b[PREF_CONFIRM_END_OF_TURN_AND_PLAYER_SWITCH_ONLY] = {
                    id: PREF_CONFIRM_END_OF_TURN_AND_PLAYER_SWITCH_ONLY,
                    onChangeInSetup: false,
                    defaultValue: {
                        mobile: PREF_DISABLED,
                        desktop: PREF_DISABLED,
                        wideScreen: PREF_DISABLED,
                    },
                    label: _('Confirm end of turn and player switch only'),
                    type: 'select',
                    options: [
                        {
                            label: _('Enabled'),
                            value: PREF_ENABLED,
                        },
                        {
                            label: _('Disabled (confirm every move)'),
                            value: PREF_DISABLED,
                        },
                    ],
                },
                _b[PREF_SHOW_ANIMATIONS] = {
                    id: PREF_SHOW_ANIMATIONS,
                    onChangeInSetup: false,
                    defaultValue: {
                        mobile: PREF_ENABLED,
                        desktop: PREF_ENABLED,
                        wideScreen: PREF_ENABLED,
                    },
                    label: _('Show animations'),
                    type: 'select',
                    options: [
                        {
                            label: _('Enabled'),
                            value: PREF_ENABLED,
                        },
                        {
                            label: _('Disabled'),
                            value: PREF_DISABLED,
                        },
                    ],
                },
                _b[PREF_ANIMATION_SPEED] = {
                    id: PREF_ANIMATION_SPEED,
                    onChangeInSetup: false,
                    label: _('Animation speed'),
                    defaultValue: {
                        mobile: 1600,
                        desktop: 1600,
                        wideScreen: 1600,
                    },
                    visibleCondition: {
                        id: PREF_SHOW_ANIMATIONS,
                        values: [PREF_ENABLED],
                    },
                    sliderConfig: {
                        step: 300,
                        padding: 0,
                        range: {
                            min: 200,
                            max: 2000,
                        },
                    },
                    type: 'slider',
                },
                _b),
        },
    });
};
var Settings = (function () {
    function Settings(game) {
        this.settings = {};
        this.selectedTab = 'baseSettings';
        this.preferenceValues = {};
        this.sliderValues = {};
        this.game = game;
        var gamedatas = game.gamedatas;
        this.setup(gamedatas);
    }
    Settings.create = function (game) {
        Settings.instance = new Settings(game);
    };
    Settings.getInstance = function () {
        return Settings.instance;
    };
    Settings.prototype.setupSettingsContainer = function () {
        var header = document.querySelectorAll('#ingame_menu_content > h2')[0];
        if (header) {
            header.remove();
        }
        var firstPreferenceNode = document.querySelectorAll('#ingame_menu_content > .preference_choice')[0];
        firstPreferenceNode.insertAdjacentHTML('beforebegin', tplSettingsContainer(this.isMobileVersion()));
    };
    Settings.prototype.addTabs = function () {
        var _this = this;
        var config = getSettingsConfig();
        var tabsNode = document.getElementById('preference-tabs');
        var contentNode = document.getElementById('preference-content');
        Object.entries(config).forEach(function (_a) {
            var tabId = _a[0], name = _a[1].name;
            tabsNode.insertAdjacentHTML('beforeend', tplSettingsTab(tabId, name));
            contentNode.insertAdjacentHTML('beforeend', tplSettingsTabContent(tabId));
            document
                .getElementById("preference-tab-".concat(tabId))
                .addEventListener('click', function (event) {
                event.preventDefault();
                event.stopPropagation();
                _this.changeTab(tabId);
            });
            document.getElementById("preference-content-".concat(tabId)).style.display =
                'none';
        });
    };
    Settings.prototype.moveExisitingPreferences = function () {
        var contentNode = document.getElementById('preference-content-baseSettings');
        document
            .querySelectorAll('#ingame_menu_content > .preference_choice')
            .forEach(function (node) {
            contentNode.insertAdjacentElement('beforeend', node);
        });
    };
    Settings.prototype.setupSelect = function (tabId, config) {
        var _this = this;
        var id = config.id, visibleCondition = config.visibleCondition;
        var visible = !visibleCondition ||
            (visibleCondition &&
                visibleCondition.values.includes(this.preferenceValues[visibleCondition.id]));
        var tabContentNode = document.getElementById("preference-content-".concat(tabId));
        tabContentNode.insertAdjacentHTML('beforeend', tplPlayerPrefenceSelectRow({
            setting: config,
            currentValue: this.preferenceValues[config.id],
            visible: visible,
        }));
        1;
        var controlId = "setting_".concat(id);
        $(controlId).addEventListener('change', function () {
            var value = $(controlId).value;
            _this.onChangePreferenceValue(id, value);
        });
    };
    Settings.prototype.setupSlider = function (tabId, config) {
        var _this = this;
        var id = config.id, visibleCondition = config.visibleCondition, label = config.label;
        var visible = !visibleCondition ||
            (visibleCondition &&
                visibleCondition.values.includes(this.preferenceValues[visibleCondition.id]));
        var tabContentNode = document.getElementById("preference-content-".concat(tabId));
        tabContentNode.insertAdjacentHTML('beforeend', tplPlayerPrefenceSliderRow({
            id: id,
            label: label,
            visible: visible,
        }));
        var sliderConfig = __assign(__assign({}, config.sliderConfig), { start: this.preferenceValues[id] });
        noUiSlider.create($('setting_' + id), sliderConfig);
        var currentValue = sliderConfig.range.min;
        var sliderValues = [];
        while (currentValue <= sliderConfig.range.max) {
            sliderValues.push(currentValue);
            currentValue += sliderConfig.step;
        }
        this.sliderValues[id] = sliderValues;
        this.updateSliderLabelValue(id, this.preferenceValues[id]);
        $('setting_' + id).noUiSlider.on('slide', function (arg) {
            _this.onChangePreferenceValue(id, arg[0]);
            _this.updateSliderLabelValue(id, arg[0]);
        });
    };
    Settings.prototype.setupPreferences = function () {
        var _this = this;
        var config = getSettingsConfig();
        Object.values(config).forEach(function (_a) {
            var tabId = _a.id, tabConfig = _a.config;
            Object.values(tabConfig).forEach(function (preferenceConfig) {
                var id = preferenceConfig.id, type = preferenceConfig.type, defaultValue = preferenceConfig.defaultValue, onChangeInSetup = preferenceConfig.onChangeInSetup;
                var value = _this.getValue(id, defaultValue);
                _this.preferenceValues[id] = value;
                if (type === 'select') {
                    _this.setupSelect(tabId, preferenceConfig);
                }
                else if (type === 'slider') {
                    _this.setupSlider(tabId, preferenceConfig);
                }
                var methodName = _this.getMethodName(id);
                if (onChangeInSetup && value && _this[methodName]) {
                    _this[methodName](value);
                }
            });
        });
    };
    Settings.prototype.setup = function (gamedatas) {
        this.setupSettingsContainer();
        this.addTabs();
        this.moveExisitingPreferences();
        this.setupPreferences();
        document
            .getElementById("preference-content")
            .addEventListener('click', function (event) {
            event.preventDefault();
            event.stopPropagation();
        });
        this.changeTab(this.selectedTab);
    };
    Settings.prototype.changeTab = function (id) {
        var currentTab = document.getElementById("preference-tab-".concat(this.selectedTab));
        var currentTabContent = document.getElementById("preference-content-".concat(this.selectedTab));
        currentTab.removeAttribute('data-state');
        if (currentTabContent) {
            currentTabContent.style.display = 'none';
        }
        this.selectedTab = id;
        var tab = document.getElementById("preference-tab-".concat(id));
        var tabContent = document.getElementById("preference-content-".concat(this.selectedTab));
        tab.setAttribute('data-state', 'selected');
        if (tabContent) {
            tabContent.style.display = '';
        }
    };
    Settings.prototype.checkAnmimationSpeedVisisble = function () {
        var sliderNode = document.getElementById('setting_row_animationSpeed');
        if (!sliderNode) {
            return;
        }
        if (this.settings[PREF_SHOW_ANIMATIONS] === PREF_ENABLED) {
            sliderNode.style.display = '';
        }
        else {
            sliderNode.style.display = 'none';
        }
    };
    Settings.prototype.checkColumnSizesVisisble = function () {
        var sliderNode = document.getElementById('setting_row_columnSizes');
        var mapSizeSliderNode = document.getElementById('setting_row_singleColumnMapSize');
        if (!sliderNode) {
            return;
        }
        if (this.preferenceValues['twoColumnsLayout'] === PREF_ENABLED) {
            sliderNode.style.display = '';
            mapSizeSliderNode.style.display = 'none';
        }
        else {
            sliderNode.style.display = 'none';
            mapSizeSliderNode.style.display = '';
        }
    };
    Settings.prototype.get = function (id) {
        return this.preferenceValues[id] || null;
    };
    Settings.prototype.getLocalStorageKey = function (id) {
        return "".concat(this.game.framework().game_name, "-").concat(this.getSuffix(id));
    };
    Settings.prototype.getMethodName = function (id) {
        return "onChange".concat(this.getSuffix(id));
    };
    Settings.prototype.getSuffix = function (id) {
        return id.charAt(0).toUpperCase() + id.slice(1);
    };
    Settings.prototype.getValue = function (id, defaultValues) {
        var localValue = localStorage.getItem(this.getLocalStorageKey(id));
        var defaultValue = this.isMobileVersion()
            ? defaultValues.mobile
            : defaultValues.desktop;
        return localValue || defaultValue;
    };
    Settings.prototype.isMobileVersion = function () {
        var body = document.getElementById('ebd-body');
        var mobileVersion = body && body.classList.contains('mobile_version');
        return mobileVersion;
    };
    Settings.prototype.onChangePreferenceValue = function (id, value) {
        var suffix = this.getSuffix(id);
        this.preferenceValues[id] = value;
        localStorage.setItem(this.getLocalStorageKey(id), value);
        var methodName = this.getMethodName(id);
        if (this[methodName]) {
            this[methodName](value);
        }
    };
    Settings.prototype.updateSliderLabelValue = function (id, value) {
        var numberValue = Number(value);
        if (isNaN(numberValue)) {
            return;
        }
        var index = this.sliderValues[id].indexOf(numberValue);
        if (index === -1) {
            return;
        }
        var labelNode = document.getElementById("slider-".concat(id, "-label-value"));
        if (labelNode) {
            labelNode.innerText = "(".concat(index + 1, "/").concat(this.sliderValues[id].length, ")");
        }
    };
    Settings.prototype.onChangeTwoColumnLayout = function (value) {
        this.checkColumnSizesVisisble();
        var node = document.getElementById('play-area-container');
        if (node) {
            node.setAttribute('data-two-columns', value);
        }
        this.game.updateLayout();
    };
    Settings.prototype.onChangeColumnSizes = function (value) {
        this.game.updateLayout();
    };
    Settings.prototype.onChangeSingleColumnMapSize = function (value) {
        this.game.updateLayout();
    };
    Settings.prototype.onChangeCardSizeInLog = function (value) {
        var ROOT = document.documentElement;
        ROOT.style.setProperty('--logCardScale', "".concat(Number(value) / 100));
    };
    Settings.prototype.onChangeSizeOfHand = function (value) {
        console.log('onChangeSizeOfHandSetting', value);
        var ROOT = document.documentElement;
        ROOT.style.setProperty('--handScale', "".concat(Number(value) / 100));
    };
    Settings.prototype.onChangeAnimationSpeed = function (value) {
        var duration = 2100 - value;
        debug('onChangeAnimationSpeedSetting', duration);
        this.game.animationManager.getSettings().duration = duration;
    };
    Settings.prototype.onChangeShowAnimations = function (value) {
        if (value === PREF_ENABLED) {
            this.game.animationManager.getSettings().duration = Number(this.settings[PREF_ANIMATION_SPEED]);
        }
        else {
            this.game.animationManager.getSettings().duration = 0;
        }
        this.checkAnmimationSpeedVisisble();
    };
    Settings.prototype.onChangeCardInfoInTooltip = function (value) {
        this.game.updateLogTooltips();
    };
    return Settings;
}());
var tplSettingsContainer = function (isMobileVersion) { return "<div class=\"preference-container\" ".concat(isMobileVersion ? 'data-version="mobile"' : '', ">\n  <div id=\"preference-header\" class=\"preference-header\">\n    <h2>").concat(_('Preferences'), "</h2>\n    <div id=\"preference-tabs\"></div>\n  </div>\n  <div id=\"preference-content\">\n  </div>\n</div>"); };
var tplSettingsTab = function (id, name) { return "\n  <div id=\"preference-tab-".concat(id, "\" class=\"preference-tab\">\n    <span>").concat(_(name), "</span>\n  </div>"); };
var tplSettingsTabContent = function (id) { return "\n    <div id=\"preference-content-".concat(id, "\" class=\"preference-tab-content\">\n    </div>\n  "); };
var tplPlayerPrefenceSelectRow = function (_a) {
    var setting = _a.setting, currentValue = _a.currentValue, _b = _a.visible, visible = _b === void 0 ? true : _b;
    var values = setting.options
        .map(function (option) {
        return "<option value='".concat(option.value, "' ").concat(option.value === currentValue ? 'selected="selected"' : '', ">").concat(_(option.label), "</option>");
    })
        .join('');
    return "\n    <div id=\"setting_row_".concat(setting.id, "\" class=\"preference_choice\"").concat(!visible ? " style=\"display: none;\"" : '', ">\n         <div class=\"row-data row-data-large\">\n         <div class=\"label\">").concat(_(setting.label), "</div>\n         <div class=\"row-value\">\n                 <select id=\"setting_").concat(setting.id, "\" class=\"preference_control game_preference_control\" style=\"display: block;\">\n        ").concat(values, "\n        </select>\n         </div>\n     </div>\n    </div>\n  ");
};
var tplPlayerPrefenceSliderRow = function (_a) {
    var label = _a.label, id = _a.id, _b = _a.visible, visible = _b === void 0 ? true : _b;
    return "\n  <div id=\"setting_row_".concat(id, "\" class=\"preference_choice\"").concat(!visible ? " style=\"display: none;\"" : '', ">\n        <div class=\"row-data row-data-large\">\n        <div class=\"row-label\">").concat(_(label), "<span id=\"slider-").concat(id, "-label-value\" class=\"preference-slider-label-value\"></span></div>\n        <div class=\"row-value\" style=\"padding-right: 10px;\">\n          <div id=\"setting_").concat(id, "\" class=\"\"></div>\n        </div>\n    </div>\n  </div>\n  ");
};
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
var TooltipManager = (function () {
    function TooltipManager(game) {
        this._customTooltipIdCounter = 0;
        this._registeredCustomTooltips = {};
        this.game = game;
    }
    TooltipManager.create = function (game) {
        TooltipManager.instance = new TooltipManager(game);
    };
    TooltipManager.getInstance = function () {
        return TooltipManager.instance;
    };
    TooltipManager.prototype.addTextTooltip = function (_a) {
        var nodeId = _a.nodeId, text = _a.text, title = _a.title, _b = _a.custom, custom = _b === void 0 ? true : _b;
        if (custom) {
            this.addCustomTooltip(nodeId, tplTextTooltip({
                text: text,
                title: title,
            }));
        }
        else {
            this.game.framework().addTooltipHtml(nodeId, tplTextTooltip({
                text: text,
                title: title,
            }), 400);
        }
    };
    TooltipManager.prototype.removeTooltip = function (nodeId) {
        this.game.framework().removeTooltip(nodeId);
    };
    TooltipManager.prototype.setupTooltips = function () { };
    TooltipManager.prototype.addCardTooltip = function (_a) {
        var nodeId = _a.nodeId, cardId = _a.cardId;
    };
    TooltipManager.prototype.addBoardTooltips = function () { };
    TooltipManager.prototype.registerCustomTooltip = function (html, id) {
        if (id === void 0) { id = null; }
        id =
            id ||
                this.game.framework().game_name +
                    '-tooltipable-' +
                    this._customTooltipIdCounter++;
        this._registeredCustomTooltips[id] = html;
        return id;
    };
    TooltipManager.prototype.attachRegisteredTooltips = function () {
        var _this = this;
        Object.keys(this._registeredCustomTooltips).forEach(function (id) {
            if ($(id)) {
                _this.addCustomTooltip(id, _this._registeredCustomTooltips[id], {
                    forceRecreate: true,
                });
            }
        });
        this._registeredCustomTooltips = {};
    };
    TooltipManager.prototype.addCustomTooltip = function (id, html, config) {
        var _this = this;
        if (config === void 0) { config = {}; }
        if (!document.getElementById(id)) {
            return;
        }
        config = Object.assign({
            delay: 400,
            midSize: true,
            forceRecreate: false,
        }, config);
        var getContent = function () {
            var content = typeof html === 'function' ? html() : html;
            if (config.midSize) {
                content = '<div class="midSizeDialog">' + content + '</div>';
            }
            return content;
        };
        if (this.game.framework().tooltips[id] && !config.forceRecreate) {
            this.game.framework().tooltips[id].getContent = getContent;
            return;
        }
        var tooltip = new dijit.Tooltip({
            getContent: getContent,
            position: this.game.framework().defaultTooltipPosition,
            showDelay: config.delay,
        });
        this.game.framework().tooltips[id] = tooltip;
        dojo.addClass(id, 'tooltipable');
        dojo.place("<div class='help-marker'>\n            <svg><use href=\"#help-marker-svg\" /></svg>\n          </div>", id);
        dojo.connect($(id), 'click', function (evt) {
            if (!_this.game._helpMode) {
                tooltip.close();
            }
            else {
                evt.stopPropagation();
                if (tooltip.state == 'SHOWING') {
                    _this.game.closeCurrentTooltip();
                }
                else {
                    _this.game.closeCurrentTooltip();
                    tooltip.open($(id));
                    _this.game._displayedTooltip = tooltip;
                }
            }
        });
        tooltip.showTimeout = null;
        dojo.connect($(id), 'mouseenter', function (evt) {
            evt.stopPropagation();
            if (!_this.game._helpMode && !_this.game._dragndropMode) {
                if (tooltip.showTimeout != null)
                    clearTimeout(tooltip.showTimeout);
                tooltip.showTimeout = setTimeout(function () {
                    if ($(id))
                        tooltip.open($(id));
                }, config.delay);
            }
        });
        dojo.connect($(id), 'mouseleave', function (evt) {
            evt.stopPropagation();
            if (!_this.game._helpMode && !_this.game._dragndropMode) {
                tooltip.close();
                if (tooltip.showTimeout != null)
                    clearTimeout(tooltip.showTimeout);
            }
        });
    };
    return TooltipManager;
}());
var tplTextTooltip = function (_a) {
    var text = _a.text, title = _a.title;
    return "\n  <div class=\"text-tooltip-container\">\n    ".concat(title ? "<span class=\"title\">".concat(title, "</span>") : '', "\n    <span class=\"text\">").concat(text, "</span>\n  </div>\n");
};
var IconCounter = (function () {
    function IconCounter(config) {
        this.setupIconCounter(config);
    }
    IconCounter.prototype.setupIconCounter = function (_a) {
        var id = _a.id, initialValue = _a.initialValue, parentElement = _a.parentElement, _b = _a.type, type = _b === void 0 ? 'row' : _b;
        this.containerElement = document.createElement('div');
        this.containerElement.id = id;
        this.containerElement.className = 'icon-counter-container';
        this.containerElement.dataset.type = type;
        this.iconElement = document.createElement('div');
        this.iconElement.id = "".concat(id, "-icon");
        this.iconElement.className = 'icon-counter-icon';
        this.counterElement = document.createElement('span');
        this.counterElement.id = "".concat(id, "-counter");
        this.counterElement.className = 'icon-counter-counter';
        this.containerElement.appendChild(this.iconElement);
        if (type === 'overlap') {
            this.iconElement.appendChild(this.counterElement);
        }
        else {
            this.containerElement.appendChild(this.counterElement);
        }
        parentElement.appendChild(this.containerElement);
        this.counter = new ebg.counter();
        this.counter.create("".concat(id, "-counter"));
        this.setValue(initialValue);
    };
    IconCounter.prototype.setValue = function (value) {
        this.counter.setValue(value);
        this.checkHasValue(value);
    };
    IconCounter.prototype.incValue = function (value) {
        this.counter.incValue(value);
        this.checkHasValue(this.counter.getValue());
    };
    IconCounter.prototype.getElement = function () {
        return this.containerElement;
    };
    IconCounter.prototype.getValue = function () {
        return this.counter.getValue();
    };
    IconCounter.prototype.checkHasValue = function (value) {
        if (value === 0) {
            this.containerElement.dataset.hasValue = 'false';
        }
        else {
            this.containerElement.dataset.hasValue = 'true';
        }
    };
    return IconCounter;
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
var incScore = function (playerId, value) {
    Interaction.use().game.framework().scoreCtrl[playerId].incValue(value);
};
var setScore = function (playerId, value) {
    Interaction.use().game.framework().scoreCtrl[playerId].setValue(value);
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
var setCalculatedValue = function (_a) {
    var elt = _a.elt, scaleVarName = _a.scaleVarName, value = _a.value, property = _a.property;
    if (!elt) {
        return;
    }
    elt.style[property] = "calc(var(--".concat(scaleVarName, ") * ").concat(value, "px)");
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
var MollyHouseDie = (function (_super) {
    __extends(MollyHouseDie, _super);
    function MollyHouseDie() {
        var _this = _super.call(this) || this;
        _this.size = 48;
        return _this;
    }
    return MollyHouseDie;
}(BgaDie6));
var MollyHouseDiceManager = (function (_super) {
    __extends(MollyHouseDiceManager, _super);
    function MollyHouseDiceManager(game) {
        return _super.call(this, game, {
            dieTypes: {
                '0': new MollyHouseDie(),
            },
            perspective: 1000,
        }) || this;
    }
    return MollyHouseDiceManager;
}(DiceManager));
function sleep(ms) {
    return new Promise(function (r) { return setTimeout(r, ms); });
}
var MollyHouse = (function () {
    function MollyHouse() {
        this._displayedTooltip = null;
        this._dragndropMode = false;
        this._helpMode = false;
        this._last_notif = null;
        this._notif_uid_to_log_id = {};
        this._notif_uid_to_mobile_log_id = {};
        this._selectableNodes = [];
        this.mobileVersion = false;
        this.loadingComplete = false;
        this.states = {
            ConfirmPartialTurn: ConfirmPartialTurn,
            ConfirmTurn: ConfirmTurn,
            TakeAction: TakeAction,
            PlayerSetupChooseCard: PlayerSetupChooseCard,
            Indulge: Indulge,
            LieLow: LieLow,
            Accuse: Accuse,
            AddExcessCardsToGossip: AddExcessCardsToGossip,
            Cruise: Cruise,
            Shop: Shop,
            MovePawn: MovePawn,
            FestivityPlayCard: FestivityPlayCard,
            FestivityGenerateGossip: FestivityGenerateGossip,
            FestivitySelectWinningSet: FestivitySelectWinningSet,
            FestivityChooseNextFoiledThreat: FestivityChooseNextFoiledThreat,
            FestivityTakeMatchingCubes: FestivityTakeMatchingCubes,
            EndOfWeekEncounterSociety: EndOfWeekEncounterSociety,
            DiscardItem: DiscardItem,
            ExamineGossipPile: ExamineGossipPile,
            PlaceEncounterToken: PlaceEncounterToken,
            FestivityUseBottleOfGin: FestivityUseBottleOfGin,
            EndOfWeekUseDomino: EndOfWeekUseDomino,
            FestivityPlayDress: FestivityPlayDress,
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
        debug('game', this);
        this._connections = [];
        TooltipManager.create(this);
        Settings.create(this);
        var settings = Settings.getInstance();
        this.animationManager = new AnimationManager(this, {
            duration: settings.get(PREF_SHOW_ANIMATIONS) === DISABLED
                ? 0
                : 2100 - settings.get(PREF_ANIMATION_SPEED),
        });
        StaticData.create(this);
        this.diceManager = new MollyHouseDiceManager(this);
        this.encounterTokenManager = new EncounterTokenManager(this);
        this.indictmentManager = new IndictmentManager(this);
        this.itemManager = new ItemManager(this);
        this.viceCardManager = new ViceCardManager(this);
        this.joyMarkerManager = new JoyMarkerManager(this);
        Interaction.create(this);
        PlayerManager.create(this);
        NotificationManager.create(this);
        Board.create(this);
        Festivity.create(this);
        Market.create(this);
        if (this.playerOrder.includes(this.getPlayerId())) {
            Hand.create(this);
        }
        Object.values(this.states).forEach(function (state) { return state.create(_this); });
        PlayerManager.getInstance()
            .getPlayers()
            .forEach(function (player) {
            player.updateEncounterTokens(_this.gamedatas.players[player.getPlayerId()]);
        });
        NotificationManager.getInstance().setupNotifications();
        MollyHouseHelpManager.create(this);
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
    MollyHouse.prototype.closeCurrentTooltip = function () {
        if (!this._helpMode)
            return;
        if (this._displayedTooltip == null)
            return;
        else {
            this._displayedTooltip.close();
            this._displayedTooltip = null;
        }
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
        Board.getInstance().clearInterface();
        PlayerManager.getInstance().clearInterface();
        Market.getInstance().clearInterface();
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
        var settings = Settings.getInstance();
        if (!Settings.getInstance()) {
            return;
        }
        $('play-area-container').setAttribute('data-two-columns', settings.get(PREF_TWO_COLUMN_LAYOUT));
        var ROOT = document.documentElement;
        var WIDTH = $('play-area-container').getBoundingClientRect()['width'] - 8;
        var LEFT_COLUMN = 1500;
        var RIGHT_COLUMN = 1000;
        if (settings.get(PREF_TWO_COLUMN_LAYOUT) === PREF_ENABLED) {
            WIDTH = WIDTH - 8;
            var size = Number(settings.get(PREF_COLUMN_SIZES));
            var proportions = [size, 100 - size];
            var LEFT_SIZE = (proportions[0] * WIDTH) / 100;
            var leftColumnScale = LEFT_SIZE / LEFT_COLUMN;
            ROOT.style.setProperty('--leftColumnScale', "".concat(leftColumnScale));
            ROOT.style.setProperty('--mapSizeMultiplier', '1');
            var RIGHT_SIZE = (proportions[1] * WIDTH) / 100;
            var rightColumnScale = RIGHT_SIZE / RIGHT_COLUMN;
            ROOT.style.setProperty('--rightColumnScale', "".concat(rightColumnScale));
            $('play-area-container').style.gridTemplateColumns = "".concat(LEFT_SIZE, "px ").concat(RIGHT_SIZE, "px");
        }
        else {
            var LEFT_SIZE = WIDTH;
            var leftColumnScale = LEFT_SIZE / LEFT_COLUMN;
            ROOT.style.setProperty('--leftColumnScale', "".concat(leftColumnScale));
            var RIGHT_SIZE = WIDTH;
            var rightColumnScale = RIGHT_SIZE / RIGHT_COLUMN;
            ROOT.style.setProperty('--rightColumnScale', "".concat(rightColumnScale));
        }
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
        this.loadingComplete = true;
        this.updateLayout();
    };
    MollyHouse.prototype.updatePlayerOrdering = function () {
        this.framework().inherited(arguments);
        var container = document.getElementById('player_boards');
        if (!container) {
            return;
        }
    };
    MollyHouse.prototype.actionError = function (actionName) {
        this.framework().showMessage("cannot take ".concat(actionName, " action"), 'error');
    };
    return MollyHouse;
}());
var _a, _b, _c, _d;
var getGroupPosition = function (top, left, index, rowSize) {
    var row = Math.floor(index / rowSize);
    var column = index % 4;
    return {
        top: top + 105 * row,
        left: left + 70 * column,
    };
};
var SITE_POSITIONS = (_a = {},
    _a[MOTHER_CLAPS] = { top: 98, left: 123 },
    _a[ST_PAULS_CATHEDRAL] = { top: 98, left: 363 },
    _a[NOBLE_STREET] = { top: 98, left: 557 },
    _a[MOORFIELDS] = { top: 98, left: 752 },
    _a[MISS_MUFFS] = { top: 98, left: 948 },
    _a[ROYAL_EXCHANGE] = { top: 291, left: 1088 },
    _a[LEADENHALL_STREET] = { top: 487, left: 1088 },
    _a[LONDON_BRIDGE] = { top: 678, left: 1088 },
    _a[SUKEY_BEVELLS] = { top: 991, left: 937 },
    _a[OLD_ROUND_COURT] = { top: 991, left: 732 },
    _a[CANNON_STREET] = { top: 991, left: 539 },
    _a[ST_JAMESS_PARK] = { top: 991, left: 345 },
    _a[JULIUS_CESAR_TAYLORS] = { top: 991, left: 160 },
    _a[COVENT_GARDEN_PIAZZA] = { top: 680, left: 83 },
    _a[DUKE_STREET] = { top: 486, left: 83 },
    _a[LINCOLNS_INN_BOGHOUSE] = { top: 288, left: 83 },
    _a);
var DANGEROUS_CRUISING_MARKERS_POSITIONS = (_b = {},
    _b[ST_PAULS_CATHEDRAL] = { top: 60, left: 355 },
    _b[MOORFIELDS] = { top: 60, left: 745 },
    _b[ROYAL_EXCHANGE] = { top: 355, left: 1107 },
    _b[LONDON_BRIDGE] = { top: 746, left: 1107 },
    _b[OLD_ROUND_COURT] = { top: 1041, left: 745 },
    _b[ST_JAMESS_PARK] = { top: 1041, left: 355 },
    _b[COVENT_GARDEN_PIAZZA] = { top: 746, left: -6 },
    _b[LINCOLNS_INN_BOGHOUSE] = { top: 355, left: -6 },
    _b);
var getPawnPosition = function (location, index) {
    var position = { top: 0, left: 0 };
    var _a = SITE_POSITIONS[location] || { top: 0, left: 0 }, top = _a.top, left = _a.left;
    position = getGroupPosition(top, left, index, 5);
    return position;
};
var SITE_SELECT_POSITIONS = (_c = {},
    _c[MOTHER_CLAPS] = { top: 25, left: 28, width: 319, height: 253 },
    _c[ST_PAULS_CATHEDRAL] = { top: 25, left: 357, width: 185, height: 169 },
    _c[NOBLE_STREET] = { top: 25, left: 552, width: 185, height: 169 },
    _c[MOORFIELDS] = { top: 25, left: 747, width: 185, height: 169 },
    _c[MISS_MUFFS] = { top: 25, left: 942, width: 319, height: 253 },
    _c[ROYAL_EXCHANGE] = { top: 289, left: 1093, width: 168, height: 185 },
    _c[LEADENHALL_STREET] = { top: 485, left: 1093, width: 168, height: 185 },
    _c[LONDON_BRIDGE] = { top: 680, left: 1093, width: 168, height: 185 },
    _c[SUKEY_BEVELLS] = { top: 875, left: 943, width: 319, height: 253 },
    _c[OLD_ROUND_COURT] = { top: 959, left: 747, width: 185, height: 169 },
    _c[CANNON_STREET] = { top: 959, left: 552, width: 185, height: 169 },
    _c[ST_JAMESS_PARK] = { top: 959, left: 357, width: 185, height: 169 },
    _c[JULIUS_CESAR_TAYLORS] = { top: 875, left: 28, width: 319, height: 253 },
    _c[COVENT_GARDEN_PIAZZA] = { top: 680, left: 28, width: 168, height: 185 },
    _c[DUKE_STREET] = { top: 485, left: 28, width: 168, height: 185 },
    _c[LINCOLNS_INN_BOGHOUSE] = { top: 289, left: 28, width: 168, height: 185 },
    _c);
var CURRENT_WEEK_MARKER_POSITIONS = {
    1: { top: 613, left: 1359 },
    2: { top: 653, left: 1359 },
    3: { top: 693, left: 1359 },
    4: { top: 734, left: 1359 },
    5: { top: 774, left: 1359 },
};
var JOY_MARKER_POSITIONS = {
    0: { top: 20, left: 1304 },
    1: { top: 20, left: 1354 },
    2: { top: 24, left: 1404 },
    3: { top: 71, left: 1417 },
    4: { top: 102, left: 1377 },
    5: { top: 105, left: 1325 },
    6: { top: 142, left: 1288 },
    7: { top: 184, left: 1319 },
    8: { top: 194, left: 1370 },
    9: { top: 178, left: 1419 },
    10: { top: 228, left: 1431 },
    11: { top: 274, left: 1412 },
    12: { top: 268, left: 1363 },
    13: { top: 258, left: 1314 },
    14: { top: 306, left: 1293 },
    15: { top: 356, left: 1289 },
    16: { top: 395, left: 1325 },
    17: { top: 359, left: 1363 },
    18: { top: 353, left: 1414 },
    19: { top: 401, left: 1428 },
    20: { top: 454, left: 1427 },
    21: { top: 451, left: 1375 },
    22: { top: 492, left: 1346 },
    23: { top: 485, left: 1296 },
    24: { top: 534, left: 1286 },
    25: { top: 585, left: 1304 },
    26: { top: 565, left: 1349 },
    27: { top: 551, left: 1391 },
    28: { top: 576, left: 1428 },
    29: { top: 620, left: 1431 },
    30: { top: 662, left: 1415 },
    31: { top: 706, left: 1423 },
    32: { top: 750, left: 1427 },
    33: { top: 795, left: 1433 },
    34: { top: 823, left: 1399 },
    35: { top: 825, left: 1353 },
    36: { top: 816, left: 1309 },
    37: { top: 778, left: 1286 },
    38: { top: 733, left: 1288 },
    39: { top: 688, left: 1293 },
};
var ENCOUNTER_TOKENS_CONFIG = (_d = {},
    _d[MOTHER_CLAPS] = { top: 200, left: 65 },
    _d[MISS_MUFFS] = { top: 200, left: 1090 },
    _d[SUKEY_BEVELLS] = { top: 875, left: 1090 },
    _d[JULIUS_CESAR_TAYLORS] = { top: 875, left: 65 },
    _d);
var Board = (function () {
    function Board(game) {
        this.counters = {};
        this.evidenceCounters = {};
        this.encounterTokens = {};
        this.sites = {};
        this.joyMarkerStocks = {};
        this.shops = {};
        this.game = game;
        this.setup(game.gamedatas);
    }
    Board.create = function (game) {
        Board.instance = new Board(game);
    };
    Board.getInstance = function () {
        return Board.instance;
    };
    Board.prototype.clearInterface = function () {
        Object.values(this.shops).forEach(function (shop) { return shop.removeAll(); });
    };
    Board.prototype.updateInterface = function (gamedatas) {
        this.updateShops(gamedatas);
        this.updatePawns(Object.values(gamedatas.pawns));
    };
    Board.prototype.setup = function (gamedatas) {
        document
            .getElementById('left-column')
            .insertAdjacentHTML('afterbegin', tplBoard(gamedatas));
        this.ui = {
            containers: {
                board: document.getElementById('moho-board'),
                dangerousCruisingMarkers: document.getElementById('moho-dangerous-cruising-markers'),
                encounterTokens: document.getElementById('moho-encounter-tokens'),
                evidenceCounters: document.getElementById('moho-evidence-counters'),
                gossipPile: document.getElementById('moho-gossip-pile'),
                markers: document.getElementById('moho-markers'),
                pawns: document.getElementById('moho-pawns'),
                tokens: {},
                selectBoxes: document.getElementById('moho-select-boxes'),
                houseRaidedMarkers: document.getElementById('house-raided-markers'),
            },
            dangerousCruisingMarkers: {},
            diceStock: document.getElementById('moho-dice-stock'),
            houseRaidedMarkers: {},
            markers: {},
            pawns: {},
            selectBoxes: {},
        };
        this.setupDangerousCruisingMarkers(gamedatas);
        this.setupEvidenceCounters(gamedatas);
        this.setupGossipPile(gamedatas);
        this.setupHouseRaidedMarkers(gamedatas);
        this.setupWeekMarker(gamedatas);
        this.setupJoyMarkers(gamedatas);
        this.setupDiceStock(gamedatas);
        this.setupSelectBoxes();
        this.setupSites();
        this.setupShops(gamedatas);
        this.setupPawns(gamedatas);
        this.setFestivityActive(gamedatas.festivity.active);
        this.setupEncounterTokens(gamedatas);
        this.setupIndictmentDiscard();
    };
    Board.prototype.setupDangerousCruisingMarkers = function (gamedatas) {
        var _this = this;
        Object.entries(CRUISING_SITES).forEach(function (_a) {
            var siteId = _a[0], sideOfBoard = _a[1];
            var elt = (_this.ui.dangerousCruisingMarkers[siteId] =
                document.createElement('div'));
            elt.classList.add('moho-dangerous-cruising-marker');
            elt.setAttribute('data-site', siteId);
            elt.setAttribute('data-dangerous', 'false');
            elt.setAttribute('data-side-of-board', sideOfBoard);
            setAbsolutePosition(elt, BOARD_SCALE, DANGEROUS_CRUISING_MARKERS_POSITIONS[siteId]);
            _this.ui.containers.dangerousCruisingMarkers.appendChild(elt);
        });
        this.updateDangeousCruisingMarkers(gamedatas);
    };
    Board.prototype.setupDiceStock = function (gamedatas) {
        this.diceStock = new LineDiceStock(this.game.diceManager, this.ui.diceStock, { gap: 'calc(var(--boardScale) * 32px)' });
        this.ui.diceStock.dataset.place = "".concat(1);
        this.diceStock.addDice(getDice(gamedatas.dice));
    };
    Board.prototype.setupEncounterTokens = function (gamedatas) {
        var _this = this;
        MOLLY_HOUSES.forEach(function (siteId) {
            var elt = document.createElement('div');
            elt.id = "moho-encounter-tokens-".concat(siteId);
            setAbsolutePosition(elt, BOARD_SCALE, ENCOUNTER_TOKENS_CONFIG[siteId]);
            elt.classList.add('moho-encounter-tokens-molly-house');
            _this.ui.containers.encounterTokens.appendChild(elt);
            _this.encounterTokens[siteId] = new LineStock(_this.game.encounterTokenManager, elt, {
                gap: '0px',
                direction: 'row',
                wrap: 'nowrap',
            });
        });
        this.encounterTokenDiscard = new VoidStock(this.game.encounterTokenManager, document.getElementById('encounter-token-discard'));
        this.updateEncounterTokens(gamedatas);
    };
    Board.prototype.setupEvidenceCounters = function (gamedatas) {
        var _this = this;
        MOLLY_HOUSES.forEach(function (siteId) {
            _this.evidenceCounters[siteId] = new CubeCounter({
                id: "cubes-".concat(siteId),
                initialValue: gamedatas.sites[siteId].evidence,
                parentElement: _this.ui.containers.evidenceCounters,
                color: SUIT_COLOR_MAP[StaticData.get().site(siteId).suit],
                type: 'overlap',
            });
        });
        this.updateEvidenceCounters(gamedatas);
    };
    Board.prototype.setupGossipPile = function (gamedatas) {
        this.gossipPile = new LineStock(this.game.viceCardManager, this.ui.containers.gossipPile);
        this.counters[GOSSIP_PILE] = new ebg.counter();
        this.counters[GOSSIP_PILE].create('moho-gossip-pile-counter');
        this.updateGossipPile(gamedatas);
    };
    Board.prototype.setupHouseRaidedMarkers = function (gamedatas) {
        var _this = this;
        MOLLY_HOUSES.forEach(function (house) {
            var elt = (_this.ui.houseRaidedMarkers[house] =
                document.createElement('div'));
            elt.classList.add('moho-house-raided-marker');
            elt.setAttribute('data-house', house);
            elt.setAttribute('data-raided', 'false');
            _this.ui.containers.houseRaidedMarkers.appendChild(elt);
        });
        this.updateHouseRaidedMarkers(gamedatas);
    };
    Board.prototype.setupWeekMarker = function (gamedatas) {
        var elt = (this.ui.markers[CURRENT_WEEK_MARKER] =
            document.createElement('div'));
        elt.id = 'moho-week-marker';
        this.ui.containers.markers.appendChild(elt);
        this.updateWeekMarker(gamedatas);
    };
    Board.prototype.setupJoyMarkers = function (gamedatas) {
        for (var i = 0; i <= 39; i++) {
            var elt = document.createElement('div');
            elt.classList.add('moho-joy-marker-stock');
            if (i === gamedatas.gameEndThreshold) {
                elt.classList.add('moho-game-end-threshold');
            }
            setAbsolutePosition(elt, BOARD_SCALE, JOY_MARKER_POSITIONS[i]);
            this.ui.containers.markers.appendChild(elt);
            this.joyMarkerStocks["".concat(i)] = new LineStock(this.game.joyMarkerManager, elt, {
                gap: '0',
                direction: 'row',
            });
        }
        this.updateJoyMarkers(gamedatas);
    };
    Board.prototype.setupPawns = function (gamedatas) {
        var _this = this;
        var pawns = Object.values(gamedatas.pawns);
        pawns.forEach(function (_a) {
            var id = _a.id, color = _a.color;
            var elt = (_this.ui.pawns[id] = document.createElement('div'));
            elt.classList.add('moho-pawn');
            elt.setAttribute('data-color', color);
        });
        this.updatePawns(pawns);
    };
    Board.prototype.setupIndictmentDiscard = function () {
        this.indictmentDiscard = new VoidStock(this.game.indictmentManager, document.getElementById('indictment-discard'));
    };
    Board.prototype.setupShops = function (gamedatas) {
        var _this = this;
        SHOP_SITES.forEach(function (site) {
            _this.shops[site] = new LineStock(_this.game.itemManager, document.getElementById(site), { gap: '0px' });
        });
        this.itemDiscard = new VoidStock(this.game.itemManager, document.getElementById('item-discard'));
        this.updateShops(gamedatas);
    };
    Board.prototype.setupSites = function () {
        var _this = this;
        SITES.forEach(function (site) {
            _this.sites[site] = [];
        });
    };
    Board.prototype.setupSelectBoxes = function () {
        var _this = this;
        SITES.forEach(function (site) {
            var elt = (_this.ui.selectBoxes[site] = document.createElement('div'));
            elt.classList.add('moho-select-box');
            elt.classList.add('moho-select-site');
            elt.setAttribute('data-site', site);
            var sitePosition = SITE_SELECT_POSITIONS[site];
            setAbsolutePosition(elt, BOARD_SCALE, SITE_SELECT_POSITIONS[site]);
            setCalculatedValue({
                elt: elt,
                scaleVarName: BOARD_SCALE,
                value: sitePosition.width,
                property: 'width',
            });
            setCalculatedValue({
                elt: elt,
                scaleVarName: BOARD_SCALE,
                value: sitePosition.height,
                property: 'height',
            });
            _this.ui.containers.selectBoxes.appendChild(elt);
        });
    };
    Board.prototype.setFestivityActive = function (active) {
        this.ui.diceStock.dataset.festivity = active ? 'true' : 'false';
    };
    Board.prototype.moveToken = function (type, value) {
        return __awaiter(this, void 0, void 0, function () {
            var fromRect;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fromRect = this.ui.containers.tokens[type].getBoundingClientRect();
                        this.updateToken(type, value);
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
    Board.prototype.movePawn = function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var fromRect, fromIndex;
            var pawn = _b.pawn, _c = _b.index, index = _c === void 0 ? 0 : _c, from = _b.from;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4, Interaction.use().wait(index * 200)];
                    case 1:
                        _d.sent();
                        fromRect = this.ui.pawns[pawn.id].getBoundingClientRect();
                        fromIndex = this.sites[from].findIndex(function (pawnInOldZone) { return (pawnInOldZone === null || pawnInOldZone === void 0 ? void 0 : pawnInOldZone.id) === pawn.id; });
                        this.placePawn(pawn);
                        if (fromIndex >= 0) {
                            this.sites[from][fromIndex] = null;
                        }
                        return [4, this.game.animationManager.play(new BgaSlideAnimation({
                                element: this.ui.pawns[pawn.id],
                                transitionTimingFunction: 'ease-in-out',
                                fromRect: fromRect,
                            }))];
                    case 2:
                        _d.sent();
                        return [2];
                }
            });
        });
    };
    Board.prototype.updateToken = function (type, value) {
        var position;
        switch (type) {
            case 'week':
                break;
            case 'joy':
                break;
        }
        setAbsolutePosition(this.ui.containers.pawns[type], BOARD_SCALE, position);
    };
    Board.prototype.updateDangeousCruisingMarkers = function (gamedatas) {
        var _this = this;
        Object.keys(CRUISING_SITES).forEach(function (siteId) {
            if (gamedatas.sites[siteId].raidedOrDangerous) {
                _this.setCruisingSiteDangerous(siteId);
            }
        });
    };
    Board.prototype.updateEncounterTokens = function (gamedatas) {
        var _this = this;
        gamedatas.encounterTokens.forEach(function (token) {
            if (_this.encounterTokens[token.location]) {
                _this.encounterTokens[token.location].addCard(token);
            }
        });
    };
    Board.prototype.updateEvidenceCounters = function (gamedatas) { };
    Board.prototype.updateGossipPile = function (gamedatas) {
        this.counters[GOSSIP_PILE].setValue(gamedatas.gossipPileCount);
    };
    Board.prototype.updateHouseRaidedMarkers = function (gamedatas) {
        var _this = this;
        MOLLY_HOUSES.forEach(function (siteId) {
            if (gamedatas.sites[siteId].raidedOrDangerous) {
                _this.setMollyHouseRaided(siteId);
            }
        });
    };
    Board.prototype.updateJoyMarkers = function (gamedatas) {
        var _this = this;
        Object.values(gamedatas.joyMarkers).forEach(function (joyMarker) {
            _this.joyMarkerStocks[Number(joyMarker.location) % 40].addCard(joyMarker);
        });
    };
    Board.prototype.updateWeekMarker = function (gamedatas) {
        var currentWeek = gamedatas.currentWeek;
        setAbsolutePosition(this.ui.markers[CURRENT_WEEK_MARKER], BOARD_SCALE, CURRENT_WEEK_MARKER_POSITIONS[currentWeek]);
    };
    Board.prototype.updatePawns = function (pawns) {
        var _this = this;
        pawns.forEach(function (pawn) {
            _this.placePawn(pawn);
        });
    };
    Board.prototype.updateShops = function (gamedatas) {
        var _this = this;
        gamedatas.itemsOnShops.forEach(function (item) {
            _this.shops[item.location].addCard(getItem(item));
        });
    };
    Board.prototype.moveWeekMarker = function (week) {
        return __awaiter(this, void 0, void 0, function () {
            var fromRect;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        fromRect = this.ui.markers[CURRENT_WEEK_MARKER].getBoundingClientRect();
                        setAbsolutePosition(this.ui.markers[CURRENT_WEEK_MARKER], BOARD_SCALE, CURRENT_WEEK_MARKER_POSITIONS[week]);
                        return [4, this.game.animationManager.play(new BgaSlideAnimation({
                                element: this.ui.markers[CURRENT_WEEK_MARKER],
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
    Board.prototype.setMollyHouseRaided = function (mollyHouseId) {
        this.ui.houseRaidedMarkers[mollyHouseId].dataset.raided = 'true';
    };
    Board.prototype.setCruisingSiteDangerous = function (siteId) {
        this.ui.dangerousCruisingMarkers[siteId].dataset.dangerous = 'true';
    };
    Board.prototype.pawnAlreadyOnSite = function (pawnId, location) {
        return this.sites[location].some(function (pawn) { return (pawn === null || pawn === void 0 ? void 0 : pawn.id) === pawnId; });
    };
    Board.prototype.placePawn = function (pawn, fromElement) {
        return __awaiter(this, void 0, void 0, function () {
            var id, location, nullIndex, pawnIndex, position;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = pawn.id, location = pawn.location;
                        if (pawn.location === 'supply' || this.pawnAlreadyOnSite(id, location)) {
                            return [2];
                        }
                        if (!this.ui.pawns[id].parentElement) {
                            this.ui.containers.pawns.appendChild(this.ui.pawns[id]);
                        }
                        nullIndex = this.sites[location].findIndex(function (pos) { return pos === null; });
                        pawnIndex = nullIndex >= 0 ? nullIndex : this.sites[location].length;
                        position = getPawnPosition(location, pawnIndex);
                        this.sites[location][pawnIndex] = pawn;
                        setAbsolutePosition(this.ui.pawns[id], BOARD_SCALE, position);
                        if (!fromElement) return [3, 2];
                        return [4, this.game.animationManager.play(new BgaSlideAnimation({
                                element: this.ui.pawns[id],
                                transitionTimingFunction: 'ease-in-out',
                                fromRect: fromElement.getBoundingClientRect(),
                            }))];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2];
                }
            });
        });
    };
    return Board;
}());
var tplBoard = function (gamedatas) { return "<div id=\"moho-board\">\n\n\n  <div id=\"moho-dangerous-cruising-markers\"></div>\n  <div id=\"house-raided-markers\"></div>\n\n  <div id=\"moho-encounter-tokens\"></div>\n  \n  <div id=\"moho-evidence-counters\"></div>\n  <div id=\"moho-gossip-pile\" class=\"moho-vice-card\" data-card-id=\"back\">\n    <span id=\"moho-gossip-pile-counter\" class=\"moho-deck-counter\">10</span>\n  </div>\n  <div id=\"moho-markers\"></div>\n    <div id=\"moho-select-boxes\"></div>\n  <div id=\"moho-playmat\">\n    <div id=\"moho-festivity\"></div>\n    <div id=\"moho-dice-stock\"></div>\n  </div>\n    <div id=\"moho-shops\">\n    <div id=\"CannonStreet\" class=\"moho-shop\"></div>\n    <div id=\"DukeStreet\" class=\"moho-shop\"></div>\n    <div id=\"LeadenhallStreet\" class=\"moho-shop\"></div>\n    <div id=\"NobleStreet\" class=\"moho-shop\"></div>\n  </div>\n  <div id=\"moho-pawns\"></div>\n</div>"; };
var createJoyMarker = function (color) {
    var elt = document.createElement('div');
    elt.classList.add('moho-joy-marker');
    elt.dataset.color = color;
    return elt;
};
var EncounterTokenManager = (function (_super) {
    __extends(EncounterTokenManager, _super);
    function EncounterTokenManager(game) {
        var _this = _super.call(this, game, {
            getId: function (card) { return card.id; },
            setupDiv: function (card, div) { return _this.setupDiv(card, div); },
            setupFrontDiv: function (card, div) { return _this.setupFrontDiv(card, div); },
            setupBackDiv: function (card, div) { return _this.setupBackDiv(card, div); },
            isCardVisible: function (card) { return _this.isCardVisible(card); },
            animationManager: game.animationManager,
        }) || this;
        _this.game = game;
        return _this;
    }
    EncounterTokenManager.prototype.clearInterface = function () { };
    EncounterTokenManager.prototype.setupDiv = function (card, div) {
        div.style.position = 'relative';
        div.classList.add('moho-encounter-token-container');
        div.style.width = 'calc(var(--tokenScale) * 75px)';
        div.style.height = 'calc(var(--tokenScale) * 75px)';
    };
    EncounterTokenManager.prototype.setupFrontDiv = function (card, div) {
        div.classList.add('moho-encounter-token');
        div.setAttribute('data-type', card.type);
        div.setAttribute('data-color', card.color);
        div.style.width = 'calc(var(--tokenScale) * 75px)';
    };
    EncounterTokenManager.prototype.setupBackDiv = function (card, div) {
        div.classList.add('moho-encounter-token');
        div.setAttribute('data-type', 'back');
        div.setAttribute('data-color', card.color);
        div.style.width = 'calc(var(--tokenScale) * 75px)';
        if (card.type !== null) {
            TooltipManager.getInstance().addTextToolTip({
                nodeId: card.id,
                text: card.type,
            });
        }
    };
    EncounterTokenManager.prototype.isCardVisible = function (card) {
        if (card.type === null) {
            return false;
        }
        if (MOLLY_HOUSES.includes(card.location) && card.hidden) {
            return false;
        }
        return true;
    };
    return EncounterTokenManager;
}(CardManager));
var IndictmentManager = (function (_super) {
    __extends(IndictmentManager, _super);
    function IndictmentManager(game) {
        var _this = _super.call(this, game, {
            getId: function (card) { return card.id; },
            setupDiv: function (card, div) { return _this.setupDiv(card, div); },
            setupFrontDiv: function (card, div) { return _this.setupFrontDiv(card, div); },
            setupBackDiv: function (card, div) { return _this.setupBackDiv(card, div); },
            isCardVisible: function (card) { return _this.isCardVisible(card); },
            animationManager: game.animationManager,
        }) || this;
        _this.game = game;
        return _this;
    }
    IndictmentManager.prototype.clearInterface = function () { };
    IndictmentManager.prototype.setupDiv = function (card, div) {
        div.style.position = 'relative';
        div.classList.add('moho-indictment-container');
        div.style.width = 'calc(var(--cardScale) * 178px)';
    };
    IndictmentManager.prototype.setupFrontDiv = function (card, div) {
        div.classList.add('moho-indictment');
        div.setAttribute('data-indictment-id', card.indictmentId);
        div.style.width = 'calc(var(--cardScale) * 178px)';
    };
    IndictmentManager.prototype.setupBackDiv = function (card, div) {
        div.classList.add('moho-indictment');
        div.setAttribute('data-indictment-id', card.type);
        div.style.width = 'calc(var(--cardScale) * 178px)';
    };
    IndictmentManager.prototype.isCardVisible = function (card) {
        if (card.indictmentId === null) {
            return false;
        }
        return true;
    };
    return IndictmentManager;
}(CardManager));
var ItemManager = (function (_super) {
    __extends(ItemManager, _super);
    function ItemManager(game) {
        var _this = _super.call(this, game, {
            getId: function (card) { return card.id; },
            setupDiv: function (card, div) { return _this.setupDiv(card, div); },
            setupFrontDiv: function (card, div) { return _this.setupFrontDiv(card, div); },
            setupBackDiv: function (card, div) { return _this.setupBackDiv(card, div); },
            isCardVisible: function (card) { return _this.isCardVisible(card); },
            animationManager: game.animationManager,
            cardHeight: 225,
            cardWidth: 161,
        }) || this;
        _this.game = game;
        return _this;
    }
    ItemManager.prototype.clearInterface = function () { };
    ItemManager.prototype.setupDiv = function (card, div) {
        div.style.position = 'relative';
        div.classList.add('moho-item-container');
        div.style.width = 'calc(var(--cardScale) * 178px)';
    };
    ItemManager.prototype.setupFrontDiv = function (card, div) {
        div.classList.add('moho-item');
        div.setAttribute('data-type', card.type);
        div.style.width = 'calc(var(--cardScale) * 178px)';
        console.log('Adding tooltip for item', card);
        TooltipManager.getInstance().addTextTooltip({ nodeId: card.id, text: card.text, title: card.name });
    };
    ItemManager.prototype.setupBackDiv = function (card, div) {
        div.classList.add('moho-item');
        div.setAttribute('data-type', 'Back');
        div.style.width = 'calc(var(--cardScale) * 178px)';
    };
    ItemManager.prototype.isCardVisible = function (card) {
        return ![DISCARD, DECK].includes(card.location);
    };
    return ItemManager;
}(CardManager));
var ViceCardManager = (function (_super) {
    __extends(ViceCardManager, _super);
    function ViceCardManager(game) {
        var _this = _super.call(this, game, {
            getId: function (card) { return card.id; },
            setupDiv: function (card, div) { return _this.setupDiv(card, div); },
            setupFrontDiv: function (card, div) { return _this.setupFrontDiv(card, div); },
            setupBackDiv: function (card, div) { return _this.setupBackDiv(card, div); },
            isCardVisible: function (card) { return _this.isCardVisible(card); },
            fakeCardGenerator: function (deckId) { return ({
                id: "fake-card-".concat(deckId),
                location: deckId,
            }); },
            animationManager: game.animationManager,
            cardHeight: 225,
            cardWidth: 161,
        }) || this;
        _this.game = game;
        return _this;
    }
    ViceCardManager.prototype.clearInterface = function () { };
    ViceCardManager.prototype.setupDiv = function (card, div) {
        div.style.position = 'relative';
        div.classList.add('moho-vice-card-container');
        div.style.height = 'calc(var(--cardScale) * 225px)';
        div.style.width = 'calc(var(--cardScale) * 161px)';
    };
    ViceCardManager.prototype.setupFrontDiv = function (card, div) {
        div.classList.add('moho-vice-card');
        div.setAttribute('data-card-id', card.id);
        div.style.height = 'calc(var(--cardScale) * 225px)';
        div.style.width = 'calc(var(--cardScale) * 161px)';
    };
    ViceCardManager.prototype.setupBackDiv = function (card, div) {
        div.classList.add('moho-vice-card');
        div.setAttribute('data-card-id', 'back');
        div.style.height = 'calc(var(--cardScale) * 225px)';
        div.style.width = 'calc(var(--cardScale) * 161px)';
    };
    ViceCardManager.prototype.isCardVisible = function (card) {
        if (card.hidden || [DECK, GOSSIP_PILE,].includes(card.location) || card.id.startsWith('fake')) {
            return false;
        }
        return true;
    };
    return ViceCardManager;
}(CardManager));
var CardModal = (function () {
    function CardModal(game, pile) {
        this.game = game;
        this.pile = pile;
        var gamedatas = game.gamedatas;
        this.setup(gamedatas);
    }
    CardModal.prototype.clearInterface = function () { };
    CardModal.prototype.updateInterface = function (gamedatas) { };
    CardModal.prototype.setupModal = function (gamedatas) {
        this.modal = new Modal("moho-card-modal-".concat(this.pile), {
            class: 'moho-card-modal',
            closeIcon: 'fa-times',
            titleTpl: '<h2 id="popin_${id}_title" class="${class}_title">${title}</h2>',
            title: this.pile === GOSSIP_PILE ? _('Gossip Pile') : _('Safe Pile'),
            contents: "<div id=\"moho-card-modal-content-".concat(this.pile, "\" class=\"moho-card-modal-content\"></div>"),
            closeAction: 'hide',
            verticalAlign: 'flex-start',
            breakpoint: 740,
        });
    };
    CardModal.prototype.setup = function (gamedatas) {
        this.setupModal(gamedatas);
        this.stock = new LineStock(this.game.viceCardManager, document.getElementById("moho-card-modal-content-".concat(this.pile)), { gap: '10px' });
    };
    CardModal.prototype.addCards = function (cards) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.stock.addCards(cards.map(function (card) { return (__assign(__assign({}, getViceCard(card)), { location: 'modal' })); }))];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    CardModal.prototype.addCard = function (card) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.stock.addCard(__assign(__assign({}, getViceCard(card)), { location: 'modal' }))];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    CardModal.prototype.removeCards = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.stock.removeAll();
                return [2];
            });
        });
    };
    CardModal.prototype.open = function () {
        this.modal.show();
    };
    CardModal.prototype.close = function () {
        this.modal.hide();
    };
    return CardModal;
}());
var _a, _b, _c, _d;
var FESTIVITY_CONFIG_TWO_PLAYERS = (_a = {},
    _a[COMMUNITY] = {
        top: 250,
        left: 10,
    },
    _a[0] = {
        top: 487,
        left: 470,
    },
    _a[1] = {
        top: 10,
        left: 530,
    },
    _a[PLAYED_DRESSES] = {
        top: 250,
        left: 305,
    },
    _a);
var FESTIVITY_CONFIG_THREE_PLAYERS = (_b = {},
    _b[COMMUNITY] = {
        top: 250,
        left: 10,
    },
    _b[0] = {
        top: 487,
        left: 313,
    },
    _b[1] = {
        top: 10,
        left: 313,
    },
    _b[2] = {
        top: 250,
        left: 612,
    },
    _b[PLAYED_DRESSES] = {
        top: 250,
        left: 305,
    },
    _b);
var FESTIVITY_CONFIG_FOUR_PLAYERS = (_c = {},
    _c[COMMUNITY] = {
        top: 250,
        left: 310,
    },
    _c[0] = {
        top: 495,
        left: 612,
    },
    _c[1] = {
        top: 495,
        left: 10,
    },
    _c[2] = {
        top: 10,
        left: 10,
    },
    _c[3] = {
        top: 10,
        left: 612,
    },
    _c[PLAYED_DRESSES] = {
        top: 250,
        left: 605,
    },
    _c);
var FESTIVITY_CONFIG_FIVE_PLAYERS = (_d = {},
    _d[COMMUNITY] = {
        top: 320,
        left: 310,
    },
    _d[0] = {
        top: 495,
        left: 612,
    },
    _d[1] = {
        top: 495,
        left: 10,
    },
    _d[2] = {
        top: 10,
        left: 10,
    },
    _d[3] = {
        top: 10,
        left: 310,
    },
    _d[4] = {
        top: 10,
        left: 612,
    },
    _d[PLAYED_DRESSES] = {
        top: 250,
        left: 605,
    },
    _d);
var getFestivityPosition = function (playerCount, position) {
    switch (playerCount) {
        case 2:
            return FESTIVITY_CONFIG_TWO_PLAYERS[position];
        case 3:
            return FESTIVITY_CONFIG_THREE_PLAYERS[position];
        case 4:
            return FESTIVITY_CONFIG_FOUR_PLAYERS[position];
        case 5:
            return FESTIVITY_CONFIG_FIVE_PLAYERS[position];
        default:
            return {
                top: 0,
                left: 0,
            };
    }
};
var Festivity = (function () {
    function Festivity(game) {
        this.stocks = {};
        this.game = game;
        this.setupFestivity(game.gamedatas);
        this.updateFestivity(game.gamedatas);
        this.setFestivityActive(game.gamedatas.festivity.active);
    }
    Festivity.create = function (game) {
        Festivity.instance = new Festivity(game);
    };
    Festivity.getInstance = function () {
        return Festivity.instance;
    };
    Festivity.prototype.updateFestivity = function (gamedatas) {
        var _this = this;
        gamedatas.festivity.communityCards.map(getViceCard).forEach(function (card) {
            _this.stocks[COMMUNITY].addCard(card);
            if (card.displayValue === 'R') {
                _this.addRogueValue(card.id, card.festivityValue);
            }
        });
        Object.entries(gamedatas.players).forEach(function (_a) {
            var playerId = _a[0], player = _a[1];
            player.festivity.map(getViceCard).forEach(function (card) {
                _this.stocks[playerId].addCard(card);
                if (card.displayValue === 'R') {
                    _this.addRogueValue(card.id, card.festivityValue);
                }
            });
        });
        this.playedDresses.addCards(gamedatas.festivity.playedDresses.map(getItem));
        if (gamedatas.festivity.runner) {
            this.setRunner(gamedatas.festivity.runner);
        }
    };
    Festivity.prototype.addRogueValue = function (cardId, value) {
        var frontElt = document.getElementById("".concat(cardId, "-front"));
        if (!frontElt) {
            return;
        }
        var roqgueValueElt = document.createElement('span');
        roqgueValueElt.id = "".concat(cardId, "-rogue-value");
        roqgueValueElt.classList.add('moho-rogue-value');
        roqgueValueElt.innerHTML = value.toString();
        frontElt.appendChild(roqgueValueElt);
    };
    Festivity.prototype.removeRogueValue = function (cardId) {
        var rogueValueElt = document.getElementById("".concat(cardId, "-rogue-value"));
        if (rogueValueElt) {
            rogueValueElt.remove();
        }
    };
    Festivity.prototype.setupFestivity = function (gamedatas) {
        var _this = this;
        this.festivityContainer = document.getElementById('moho-festivity');
        var players = PlayerManager.getInstance().getPlayers();
        var playerCount = players.length;
        var communityContainerElt = this.createPlayerElement(COMMUNITY, "<span>".concat(_('Community'), "</span>"));
        setAbsolutePosition(communityContainerElt, CARD_SCALE, getFestivityPosition(playerCount, COMMUNITY));
        var playerManager = PlayerManager.getInstance();
        gamedatas.playerOrder.forEach(function (playerId, index) {
            var containerElt = _this.createPlayerElement(playerId, formatStringRecursive('${tkn_playerName}', {
                tkn_playerName: playerManager.getPlayer(playerId).getName(),
            }));
            setAbsolutePosition(containerElt, CARD_SCALE, getFestivityPosition(playerCount, index));
        });
        var dressesContainerElt = document.createElement('div');
        dressesContainerElt.id = 'moho-festivity-played-dresses';
        this.festivityContainer.appendChild(dressesContainerElt);
        setAbsolutePosition(dressesContainerElt, CARD_SCALE, getFestivityPosition(playerCount, PLAYED_DRESSES));
        this.playedDresses = new LineStock(this.game.itemManager, dressesContainerElt, {
            gap: '0px',
            wrap: 'nowrap',
        });
    };
    Festivity.prototype.createPlayerElement = function (playerId, playerName) {
        var containerElt = document.createElement('div');
        containerElt.id = "moho-festivity-".concat(playerId);
        containerElt.classList.add('moho-festivity-container');
        var nameDiv = document.createElement('div');
        nameDiv.innerHTML = playerName;
        nameDiv.classList.add('moho-festivity-player-name');
        nameDiv.insertAdjacentHTML('beforeend', '<div class="moho-candelabra"></div>');
        var playerStockElt = document.createElement('div');
        playerStockElt.classList.add('moho-festivity-stock');
        containerElt.appendChild(playerStockElt);
        containerElt.appendChild(nameDiv);
        this.festivityContainer.appendChild(containerElt);
        this.stocks[playerId] = new LineStock(this.game.viceCardManager, playerStockElt, {
            gap: '0px',
            wrap: 'nowrap',
        });
        return containerElt;
    };
    Festivity.prototype.setFestivityActive = function (active) {
        this.festivityContainer.dataset.active = active ? 'true' : 'false';
    };
    Festivity.prototype.setRunner = function (runnerPlayerId) {
        PlayerManager.getInstance()
            .getPlayerIds()
            .forEach(function (playerId) {
            var elt = document.getElementById("moho-festivity-".concat(playerId));
            if (playerId === runnerPlayerId) {
                elt.classList.add('moho-festivity-runner');
            }
            else {
                elt.classList.remove('moho-festivity-runner');
            }
        });
    };
    return Festivity;
}());
var Hand = (function () {
    function Hand(game) {
        this.game = game;
        this.setupHand();
    }
    Hand.create = function (game) {
        Hand.instance = new Hand(game);
    };
    Hand.getInstance = function () {
        return Hand.instance;
    };
    Hand.prototype.clearInterface = function () {
        this.handStock.removeAll();
    };
    Hand.prototype.updateHand = function (cards) {
        this.handStock.addCards(cards.map(getViceCard));
    };
    Hand.prototype.setupHand = function () {
        var node = $('game_play_area');
        node.insertAdjacentHTML('beforeend', tplHand());
        this.handStock = new HandStock(this.game.viceCardManager, document.getElementById('hand'), {
            cardOverlap: 'calc(var(--cardScale) * 80px)',
            cardShift: 'calc(var(--cardScale) * 15px)',
        });
        var cards = this.game.gamedatas.players[this.game.getPlayerId()].hand;
        this.updateHand(cards);
    };
    Hand.prototype.updateFloatingHandScale = function () {
        var WIDTH = $('game_play_area').getBoundingClientRect()['width'];
        var wrapperNode = document.getElementById('floating_hand_wrapper');
        var MIN_WIDTH_THREE_CARDS = 800;
        if (WIDTH <= MIN_WIDTH_THREE_CARDS) {
            var handScale = WIDTH / MIN_WIDTH_THREE_CARDS;
            wrapperNode.style.setProperty('--handScale', "".concat(handScale));
        }
        else {
            wrapperNode.style.setProperty('--handScale', '1');
        }
    };
    Hand.prototype.addCard = function (card) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.handStock.addCard(card)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Hand.prototype.removeCard = function (card) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.handStock.removeCard(card)];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    Hand.prototype.getCards = function () {
        return this.handStock.getCards();
    };
    Hand.prototype.getStock = function () {
        return this.handStock;
    };
    Hand.prototype.open = function () {
        var handWrapper = $('floating_hand_wrapper');
        if (handWrapper) {
            handWrapper.dataset.open = 'hand';
        }
    };
    Hand.prototype.updateCardTooltips = function () {
        var cards = this.handStock.getCards();
        cards.forEach(function (card) {
        });
    };
    return Hand;
}());
var tplHand = function () {
    return "<div id=\"hand\"></div\n  ";
};
var LOCAL_STORAGE_HELP_ACTIONS_FOLDED_KEY = 'MollyHouse-help-actions-folded';
var LOCAL_STORAGE_HELP_TURN_FOLDED_KEY = 'MollyHouse-help-turn-folded';
var MollyHouseHelpManager = (function () {
    function MollyHouseHelpManager(game) {
        this.game = game;
        this.setup();
    }
    MollyHouseHelpManager.create = function (game) {
        MollyHouseHelpManager.instance = new MollyHouseHelpManager(game);
    };
    MollyHouseHelpManager.getInstance = function () {
        return MollyHouseHelpManager.instance;
    };
    MollyHouseHelpManager.prototype.setup = function () {
        new HelpManager(this.game, {
            buttons: [
                new BgaHelpExpandableButton({
                    expandedWidth: '419px',
                    expandedHeight: '300px',
                    defaultFolded: true,
                    localStorageFoldedKey: LOCAL_STORAGE_HELP_ACTIONS_FOLDED_KEY,
                    buttonExtraClasses: "moho-festivity-help-actions",
                    unfoldedHtml: this.getFestivityAidHtml(),
                }),
            ],
        });
    };
    MollyHouseHelpManager.prototype.getFestivityAidHtml = function () {
        return "\n      <div class=\"moho-festivity-aid\">\n        <div class=\"moho-festivity-aid-header\">\n          <span class=\"moho-title\">".concat(_('Festivity Ranking'), "</span><span class=\"moho-title\">").concat(_('Bonus'), "</span>\n        </div>\n        <div id=\"moho-surprise-ball\" class=\"moho-rank-container\">\n          <span class=\"moho-rank-order\">").concat(_('First'), ",</span>\n          <span class=\"moho-rank\">").concat(_('Surprise Ball'), "</span>\n        </div>\n        <div id=\"moho-christening\" class=\"moho-rank-container\">\n          <span class=\"moho-rank-order\">").concat(_('Second'), ",</span>\n          <span class=\"moho-rank\">").concat(_('Christening'), "</span>\n        </div>\n        <div id=\"moho-dance\" class=\"moho-rank-container\">\n          <span class=\"moho-rank-order\">").concat(_('Third'), ",</span>\n          <span class=\"moho-rank\">").concat(_('Dance'), "</span>\n        </div>\n        <div id=\"moho-quiet-gathering\" class=\"moho-rank-container\">\n          <span class=\"moho-rank-order\">").concat(_('Otherwise, form a'), "</span>\n          <span style=\"text-align: left;\">\n            <span class=\"moho-rank\">").concat(_('Quiet Gathering'), "</span> <span>").concat(_('with constables / lowest'), "</span>\n          </span>\n          <span class=\"moho-rank-order\">").concat(_('(ignore rogues)'), "</span>\n        </div>\n        <div id=\"moho-surprise-ball-bonus\" class=\"moho-bonus-container\">\n          <span>+</span><span class=\"moho-bonus-amount\">m</span>\n        </div>\n        <div id=\"moho-christening-bonus\" class=\"moho-bonus-container\">\n          <span>+</span><span class=\"moho-bonus-amount\">m</span>\n        </div>\n        <div id=\"moho-dance-bonus\" class=\"moho-bonus-container\">\n          <span>+</span><span class=\"moho-bonus-amount\">m</span>\n        </div>\n        <div id=\"moho-quiet-gathering-bonus\" class=\"moho-bonus-container\">\n          <span>-</span><span class=\"moho-bonus-amount\">m</span>\n        </div>\n        <span id=\"moho-matching-reputation\">").concat(_('m = matching reputation'), "</span>\n      </div>\n      ");
    };
    return MollyHouseHelpManager;
}());
var JoyMarkerManager = (function (_super) {
    __extends(JoyMarkerManager, _super);
    function JoyMarkerManager(game) {
        var _this = _super.call(this, game, {
            getId: function (marker) { return marker.id; },
            setupDiv: function (marker, div) { return _this.setupDiv(marker, div); },
            setupFrontDiv: function (marker, div) {
                return _this.setupFrontDiv(marker, div);
            },
            setupBackDiv: function (marker, div) {
                return _this.setupBackDiv(marker, div);
            },
            isCardVisible: function (marker) { return _this.isCardVisible(marker); },
            animationManager: game.animationManager,
        }) || this;
        _this.game = game;
        return _this;
    }
    JoyMarkerManager.prototype.clearInterface = function () { };
    JoyMarkerManager.prototype.setupDiv = function (marker, div) {
        div.style.position = 'relative';
        div.classList.add('moho-joy-marker-container');
        div.style.width = 'calc(var(--tokenScale) * 42px)';
    };
    JoyMarkerManager.prototype.setupFrontDiv = function (marker, div) {
        div.classList.add('moho-joy-marker');
        div.setAttribute('data-color', marker.color);
        div.style.width = 'calc(var(--tokenScale) * 42px)';
    };
    JoyMarkerManager.prototype.setupBackDiv = function (marker, div) {
        div.classList.add('moho-joy-marker');
        div.setAttribute('data-color', marker.color);
        div.setAttribute('data-hanged', 'true');
        div.style.width = 'calc(var(--tokenScale) * 42px)';
    };
    JoyMarkerManager.prototype.isCardVisible = function (card) {
        return !card.hanged;
    };
    return JoyMarkerManager;
}(CardManager));
var LOG_TOKEN_BOLD_TEXT = 'boldText';
var LOG_TOKEN_BOLD_ITALIC_TEXT = 'boldItalicText';
var LOG_TOKEN_NEW_LINE = 'newLine';
var LOG_TOKEN_PLAYER_NAME = 'playerName';
var LOG_TOKEN_DIE = 'die';
var LOG_TOKEN_CUBE = 'cube';
var LOG_TOKEN_DRAW_TOKEN = 'drawToken';
var LOG_TOKEN_ENCOUNTER_TOKEN = 'encounterToken';
var LOG_TOKEN_PAWN = 'pawn';
var LOG_TOKEN_SUIT = 'suit';
var LOG_TOKEN_VICE_CARD = 'viceCard';
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
        case LOG_TOKEN_CUBE:
            return tplLogTokenCube(value.split(':')[0]);
        case LOG_TOKEN_DRAW_TOKEN:
            return tplLogTokenDrawToken();
        case LOG_TOKEN_DIE:
            return tplLogTokenDie(value.split(':')[0]);
        case LOG_TOKEN_NEW_LINE:
            return '<br class="moho-new-line">';
        case LOG_TOKEN_PAWN:
            return tplLogTokenPawn(value.split(':')[0]);
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
        case LOG_TOKEN_SUIT:
            return tplLogTokenSuit(value);
        case LOG_TOKEN_VICE_CARD:
            return tplLogTokenViceCard(value);
        case LOG_TOKEN_ENCOUNTER_TOKEN:
            var _b = value.split(':'), etColor = _b[0], etType = _b[1];
            return tplLogTokenEncounterToken(etColor, etType);
        default:
            return value;
    }
};
var tknPawn = function (pawn) {
    return [pawn.color, 'pawn'].join(':');
};
var tlpLogTokenText = function (_a) {
    var text = _a.text, tooltipId = _a.tooltipId, _b = _a.italic, italic = _b === void 0 ? false : _b;
    return "<span ".concat(tooltipId ? "id=\"".concat(tooltipId, "\" class=\"log_tooltip\"") : '', " style=\"font-weight: 700;").concat(italic ? ' font-style: italic;' : '', "\">").concat(_(text), "</span>");
};
var tplLogTokenPlayerName = function (_a) {
    var name = _a.name, color = _a.color;
    return "<span class=\"playername\" style=\"color:#".concat(color, ";\">").concat(name, "</span>");
};
var tplLogTokenCube = function (color) {
    return "<div class=\"log-token moho-cube\" data-color=\"".concat(color, "\"></div>");
};
var tplLogTokenDrawToken = function () {
    return "<div class=\"log-token moho-draw-token\"></div>";
};
var tplLogTokenDie = function (dieFace) {
    return "<div class=\"log-token bga-dice_die-face\" data-face=\"".concat(dieFace, "\"></div>");
};
var tplLogTokenPawn = function (color) {
    return "<div class=\"log-token moho-pawn\" data-color=\"".concat(color, "\"></div>");
};
var tplLogTokenSuit = function (suit) {
    return "<div class=\"log-token moho-suit\" data-suit=\"".concat(suit, "\"></div>");
};
var tplLogTokenViceCard = function (cardId) {
    return "<div class=\"log-token moho-vice-card\" data-card-id=\"".concat(cardId, "\"></div>");
};
var tplLogTokenEncounterToken = function (color, type) {
    return "<div class=\"log-token moho-encounter-token\" data-color=\"".concat(color, "\" data-type=\"").concat(type, "\"></div>");
};
var Market = (function () {
    function Market(game) {
        this.counters = {};
        this.game = game;
        this.setup(game.gamedatas);
    }
    Market.create = function (game) {
        Market.instance = new Market(game);
    };
    Market.getInstance = function () {
        return Market.instance;
    };
    Market.prototype.clearInterface = function () {
        this.stock.removeAll();
        this.safePile.removeAll();
    };
    Market.prototype.updateInterface = function (gamedatas) {
        this.updateMarket(gamedatas);
        this.updateDeck(gamedatas);
        this.updateSafePile(gamedatas);
    };
    Market.prototype.setup = function (gamedatas) {
        document
            .getElementById('left-column')
            .insertAdjacentHTML('afterbegin', tplMarket(gamedatas));
        this.ui = {
            container: document.getElementById('moho-market'),
            safePile: document.getElementById('moho-safe-pile'),
            deck: document.getElementById('moho-deck'),
        };
        this.setupModal();
        this.setupDecks(gamedatas);
        this.setupSlotStock(gamedatas);
    };
    Market.prototype.setupModal = function () {
        var _this = this;
        this.safePileModal = new CardModal(this.game, SAFE_PILE);
        dojo.connect($("moho-safe-pile"), 'onclick', function () {
            return _this.safePileModal.open();
        });
    };
    Market.prototype.setupDecks = function (gamedatas) {
        this.deck = new LineStock(this.game.viceCardManager, this.ui.deck, {});
        this.safePile = new LineStock(this.game.viceCardManager, this.ui.safePile, {});
        this.counters[DECK] = new ebg.counter();
        this.counters[DECK].create('moho-deck-counter');
        this.counters[SAFE_PILE] = new ebg.counter();
        this.counters[SAFE_PILE].create('moho-safe-pile-counter');
        this.updateDeck(gamedatas);
        this.updateSafePile(gamedatas);
    };
    Market.prototype.setupSlotStock = function (gamedatas) {
        this.stock = new SlotStock(this.game.viceCardManager, document.getElementById('moho-market-slots'), {
            slotsIds: MARKET_SPOTS,
            slotClasses: ['moho-market-slot'],
            mapCardToSlot: function (card) {
                return card.location;
            },
            gap: 'calc(var(--cardScale) * 16px)',
        });
        this.updateMarket(gamedatas);
    };
    Market.prototype.updateMarket = function (gamedatas) {
        this.stock.addCards(Object.values(gamedatas.market).map(getViceCard));
    };
    Market.prototype.updateDeck = function (gamedatas) {
        this.counters[DECK].setValue(gamedatas.deckCount);
    };
    Market.prototype.updateSafePile = function (gamedatas) {
        this.safePileModal.addCards(Object.values(gamedatas.safePile));
        this.counters[SAFE_PILE].setValue(Object.keys(gamedatas.safePile).length);
        this.ui.safePile.setAttribute('data-card-id', gamedatas.topOfSafePile ? gamedatas.topOfSafePile.id : 'none');
    };
    Market.prototype.addCardToSafePile = function (viceCard) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.safePile.addCard(getViceCard(viceCard))];
                    case 1:
                        _a.sent();
                        this.ui.safePile.setAttribute('data-card-id', viceCard.id);
                        return [4, this.safePile.removeCard(viceCard)];
                    case 2:
                        _a.sent();
                        return [4, this.safePileModal.addCard(viceCard)];
                    case 3:
                        _a.sent();
                        this.counters[SAFE_PILE].incValue(1);
                        return [2];
                }
            });
        });
    };
    Market.prototype.incDeckCounter = function (value) {
        this.counters[DECK].incValue(value);
        if (this.counters[DECK].getValue() === 0) {
            this.ui.deck.classList.add('moho-empty');
        }
        else {
            this.ui.deck.classList.remove('moho-empty');
        }
    };
    Market.prototype.incSafePileCounter = function (value) {
        this.counters[SAFE_PILE].incValue(value);
        if (this.counters[SAFE_PILE].getValue() === 0) {
            this.ui.safePile.setAttribute('data-card-id', 'none');
        }
    };
    return Market;
}());
var tplMarket = function (gamedatas) { return "\n<div> \n  <div id=\"moho-market\">\n    <div id=\"moho-safe-pile\" class=\"moho-market-slot moho-vice-card\">\n      <span id=\"moho-safe-pile-counter\" class=\"moho-deck-counter\"></span>\n    </div>\n    <div id=\"moho-deck\" class=\"moho-market-slot moho-vice-card\" data-card-id=\"back\">\n      <span id=\"moho-deck-counter\" class=\"moho-deck-counter\"></span>\n    </div>\n    <div id=\"moho-market-slots\"></div>\n\n  </div>\n  <div id=\"moho-market-bar\">\n    <span>".concat(_('Safe Pile'), "</span>\n    <span>").concat(_('Deck'), "</span>\n    <span class=\"moho-market-label\">").concat(_('Market'), "</span>\n  </div>\n</div>\n"); };
var PlayerManager = (function () {
    function PlayerManager(game) {
        this.game = game;
        this.players = {};
        for (var _i = 0, _a = game.gamedatas.playerOrder; _i < _a.length; _i++) {
            var playerId = _a[_i];
            var player = game.gamedatas.players[playerId];
            this.players[playerId] = new MohoPlayer(this.game, player);
        }
        this.setupCandelabra(game.gamedatas);
    }
    PlayerManager.create = function (game) {
        PlayerManager.instance = new PlayerManager(game);
    };
    PlayerManager.getInstance = function () {
        return PlayerManager.instance;
    };
    PlayerManager.prototype.clearInterface = function () {
        var _this = this;
        Object.keys(this.players).forEach(function (playerId) {
            _this.players[playerId].clearInterface();
        });
    };
    PlayerManager.prototype.updateInterface = function (gamedatas) {
        for (var playerId in gamedatas.players) {
            this.players[playerId].updateInterface(gamedatas);
        }
        this.updateCandelabra(gamedatas);
    };
    PlayerManager.prototype.setupCandelabra = function (gamedatas) {
        this.candelabra = document.createElement('div');
        this.candelabra.classList.add('moho-candelabra');
        this.updateCandelabra(gamedatas);
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
    PlayerManager.prototype.getCurrentPlayerId = function () {
        return this.game.getPlayerId();
    };
    PlayerManager.prototype.moveCandelabraTo = function (playerId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                document
                    .getElementById("moho-candelabra-".concat(playerId))
                    .appendChild(this.candelabra);
                return [2];
            });
        });
    };
    PlayerManager.prototype.updateCandelabra = function (gamedatas) {
        if (!gamedatas.candelabra) {
            return;
        }
        document
            .getElementById("moho-candelabra-".concat(gamedatas.candelabra))
            .appendChild(this.candelabra);
    };
    return PlayerManager;
}());
var MohoPlayer = (function () {
    function MohoPlayer(game, player) {
        this.game = game;
        this.counters = {};
        this.ui = {};
        this.items = {};
        this.game = game;
        var playerId = player.id;
        this.playerId = Number(playerId);
        this.playerName = player.name;
        this.playerColor = player.color;
        var gamedatas = game.gamedatas;
        this.setupPlayer(gamedatas);
    }
    MohoPlayer.prototype.clearInterface = function () { };
    MohoPlayer.prototype.updateInterface = function (gamedatas) {
        this.updatePlayerPanel(gamedatas);
        this.updatePlayerBoard(gamedatas.players[this.playerId]);
    };
    MohoPlayer.prototype.setupPlayer = function (gamedatas) {
        this.setupPlayerBoard(gamedatas);
        this.setupPlayerPanel(gamedatas);
    };
    MohoPlayer.prototype.setupPlayerBoard = function (gamedatas) {
        var _this = this;
        var playerGamedatas = gamedatas.players[this.playerId];
        var node = document.getElementById('right-column');
        if (!node) {
            return;
        }
        node.insertAdjacentHTML('beforeend', tplPlayerBoard({
            color: HEX_COLOR_COLOR_MAP[this.playerColor],
            playerId: this.playerId,
        }));
        this.reputation = new LineStock(this.game.viceCardManager, document.getElementById("moho-reputation-".concat(this.playerId)), {
            gap: '0px',
        });
        [1, 2].forEach(function (value) {
            _this.items["item_".concat(value, "_").concat(_this.playerId)] = new LineStock(_this.game.itemManager, document.getElementById("item_".concat(value, "_").concat(_this.playerId)), {
                gap: '0px',
            });
        });
        [YELLOW, GREEN, BLUE, RED].forEach(function (color) {
            _this.counters["playerBoard_".concat(color)] = new CubeCounter({
                id: "player-board-cubes-".concat(color, "-").concat(_this.playerId),
                initialValue: playerGamedatas.cubes[COLOR_SUIT_MAP[color]],
                parentElement: document.getElementById("moho-player-board-counters-".concat(_this.playerId)),
                color: color,
                type: 'overlap',
            });
        });
        this.setupEncounterTokens(gamedatas);
        this.setupIndictments(gamedatas);
        this.updatePlayerBoard(playerGamedatas);
        this.updatePrivateData(playerGamedatas);
    };
    MohoPlayer.prototype.setupEncounterTokens = function (gamedatas) {
        this.encounterTokens = new LineStock(this.game.encounterTokenManager, document.getElementById("moho-encounter-tokens-".concat(this.playerId)), {
            gap: '0px',
        });
    };
    MohoPlayer.prototype.setupIndictments = function (gamedatas) {
        this.indictments = new LineStock(this.game.indictmentManager, document.getElementById("moho-indictments-".concat(this.playerId)), {
            gap: '0px',
        });
    };
    MohoPlayer.prototype.setupPlayerPanel = function (gamedatas) {
        var _this = this;
        var playerGamedatas = gamedatas.players[this.playerId];
        var node = document.querySelector("#player_board_".concat(this.playerId, " .player-board-game-specific-content"));
        if (!node) {
            return;
        }
        [PENTACLES, FANS, CUPS, HEARTS].forEach(function (suit) {
            _this.counters[suit] = new SuitCounter({
                id: "cards-".concat(suit, "-").concat(_this.playerId),
                initialValue: playerGamedatas.reputation.filter(function (card) { return getViceCard(card).suit === suit && !card.hidden; }).length,
                parentElement: node,
                suit: suit,
                type: 'overlap',
            });
        });
        this.counters[HAND] = new HandCounter({
            id: "hand-".concat(this.playerId),
            initialValue: playerGamedatas.handCardCount,
            parentElement: node,
            type: 'overlap',
        });
        [YELLOW, GREEN, BLUE, RED].forEach(function (color) {
            _this.counters[color] = new CubeCounter({
                id: "cubes-".concat(color, "-").concat(_this.playerId),
                initialValue: playerGamedatas.cubes[COLOR_SUIT_MAP[color]],
                parentElement: node,
                color: color,
                type: 'overlap',
            });
        });
        this.counters[DRAW_TOKEN] = new DrawTokenCounter({
            id: "draw-tokens-".concat(this.playerId),
            initialValue: playerGamedatas.drawTokens,
            parentElement: node,
            type: 'overlap',
        });
    };
    MohoPlayer.prototype.updatePlayerBoard = function (playerGamedatas) {
        var _this = this;
        this.reputation.addCards(playerGamedatas.reputation.map(getViceCard));
        playerGamedatas.items.forEach(function (item) {
            _this.items[item.location].addCard(getItem(item));
        });
        [YELLOW, GREEN, BLUE, RED].forEach(function (color) {
            _this.counters["playerBoard_".concat(color)].setValue(playerGamedatas.cubes[COLOR_SUIT_MAP[color]]);
        });
    };
    MohoPlayer.prototype.updatePrivateData = function (playerGamedatas) {
        this.indictments.addCards(playerGamedatas.indictments);
        this.updateEncounterTokens(playerGamedatas);
    };
    MohoPlayer.prototype.updateEncounterTokens = function (playerGamedatas) {
        this.encounterTokens.addCards(playerGamedatas.encounterTokens);
    };
    MohoPlayer.prototype.updatePlayerPanel = function (gamedatas) {
        var _this = this;
        var playerGamedatas = gamedatas.players[this.playerId];
        [PENTACLES, FANS, CUPS, HEARTS].forEach(function (suit) {
            _this.counters[suit].setValue(playerGamedatas.reputation.filter(function (card) { return getViceCard(card).suit === suit && !card.hidden; }).length);
        });
        this.counters[HAND].setValue(playerGamedatas.handCardCount);
        [YELLOW, GREEN, BLUE, RED].forEach(function (color) {
            _this.counters[color].setValue(playerGamedatas.cubes[COLOR_SUIT_MAP[color]]);
        });
        this.counters[DRAW_TOKEN].setValue(playerGamedatas.drawTokens);
    };
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
var tplPlayerBoard = function (_a) {
    var playerId = _a.playerId, color = _a.color;
    return "\n<div id=\"moho-player-row-".concat(playerId, "\" class=\"moho-player-container\">\n  <div class=\"moho-player-row\">\n    <div id=\"moho-player-board-").concat(playerId, "\" class=\"moho-player-board\" data-color=\"").concat(color, "\">\n      <div id=\"moho-player-board-counters-").concat(playerId, "\" class=\"moho-player-board-counters\"></div>\n      <div id=\"moho-candelabra-").concat(playerId, "\" class=\"moho-candelabra-spot\"></div>  \n      <div id=\"item_1_").concat(playerId, "\" class=\"moho-item-spot\" data-spot=\"1\"></div>\n      <div id=\"item_2_").concat(playerId, "\" class=\"moho-item-spot\" data-spot=\"2\"></div>\n    </div>\n    <div id=\"moho-reputation-").concat(playerId, "\" class=\"moho-reputation\"></div>\n  </div>\n  <div class=\"moho-player-row\">\n    <div id=\"moho-encounter-tokens-").concat(playerId, "\" class=\"moho-encounter-tokens\"></div>\n    <div id=\"moho-indictments-").concat(playerId, "\" class=\"moho-indictments\"></div>\n  </div>\n</div>");
};
var tplPlayerCounters = function (_a) {
    var playerId = _a.playerId;
    return "\n<div id=\"moho-counters-".concat(playerId, "-row-1\" class=\"moho-counters-row\">\n\n</div>\n\n");
};
var TakeAction = (function () {
    function TakeAction(game) {
        this.game = game;
    }
    TakeAction.create = function (game) {
        TakeAction.instance = new TakeAction(game);
    };
    TakeAction.getInstance = function () {
        return TakeAction.instance;
    };
    TakeAction.prototype.onEnteringState = function (args) {
        debug('Entering TakeAction state');
        this.args = args;
        this.updateInterfaceInitialStep();
    };
    TakeAction.prototype.onLeavingState = function () {
        debug('Leaving TakeAction state');
    };
    TakeAction.prototype.setDescription = function (activePlayerIds, args) { };
    TakeAction.prototype.updateInterfaceInitialStep = function () {
        var _this = this;
        this.game.clearPossible();
        updatePageTitle(_('${you} must take an action'), {});
        if (this.args._private.LieLow) {
            onClick('moho-deck', function () { return _this.updateInterfaceConfirm(LIE_LOW, 'deck'); });
        }
        if (this.args._private.ThrowFestivity) {
            addPrimaryActionButton({
                id: 'throw_festivity_btn',
                text: _('Throw a Festivity'),
                callback: function () {
                    _this.updateInterfaceConfirm(THROW_FESTIVITY, '');
                },
            });
        }
        Object.values(this.args._private.Accuse).forEach(function (encounterToken) {
            onClick(document.getElementById(encounterToken.id), function () {
                return _this.updateInterfaceConfirm(ACCUSE, encounterToken.id);
            });
        });
        Object.values(this.args._private.Indulge || {}).forEach(function (card) {
            onClick(document.getElementById(card.id), function () {
                return _this.updateInterfaceConfirm(INDULGE, card.id);
            });
        });
        Object.values(this.args._private.Cruise || {}).forEach(function (card) {
            onClick(document.getElementById(card.id), function () {
                return _this.updateInterfaceConfirm(CRUISE, card.id);
            });
        });
        if (this.args._private.Shop) {
            onClick(document.getElementById(this.args._private.Shop.id), function () {
                return _this.updateInterfaceConfirm(SHOP, _this.args._private.Shop.id);
            });
        }
        Object.entries(this.args._private.items).forEach(function (_a) {
            var itemId = _a[0], item = _a[1];
            onClick(document.getElementById(item.id), function () {
                return _this.updateInterfaceConfirm(USE_ITEM, itemId);
            });
        });
        addUndoButtons(this.args);
    };
    TakeAction.prototype.updateInterfaceConfirm = function (action, target) {
        clearPossible();
        this.updateConfirmTitle(action, target);
        this.updateConfirmTargetSelected(action, target);
        addConfirmButton(function () {
            performAction('actTakeAction', {
                takenAction: action,
                target: target,
            });
        });
        addCancelButton();
    };
    TakeAction.prototype.updateConfirmTargetSelected = function (action, target) {
        switch (action) {
            case ACCUSE:
            case SHOP:
            case CRUISE:
            case INDULGE:
            case USE_ITEM:
                setSelected(document.getElementById(target));
                break;
            case LIE_LOW:
                setSelected(document.getElementById('moho-deck'));
                break;
            default:
                break;
        }
    };
    TakeAction.prototype.updateConfirmTitle = function (action, target) {
        var site = StaticData.get().site(this.args.site.id).name;
        switch (action) {
            case ACCUSE:
                updatePageTitle(_('Accuse ${player_name} and reveal ${tkn_encounterToken} ?'), {
                    player_name: PlayerManager.getInstance()
                        .getPlayer(Number(target.split('_')[1]))
                        .getName(),
                    tkn_encounterToken: [
                        this.args._private.Accuse[target].color,
                        null,
                    ].join(':'),
                });
                break;
            case CRUISE:
                updatePageTitle(_('Cruise at ${site} and add ${value} of ${tkn_suit} to your reputation'), {
                    site: site,
                    value: StaticData.get().viceCard(target).displayValue,
                    tkn_suit: StaticData.get().viceCard(target).suit,
                });
                break;
            case INDULGE:
                updatePageTitle(_('Indulge at ${site} and add ${value} of ${tkn_suit} to your hand'), {
                    site: site,
                    value: StaticData.get().viceCard(target).displayValue,
                    tkn_suit: StaticData.get().viceCard(target).suit,
                });
                break;
            case LIE_LOW:
                updatePageTitle(_('Lie Low at ${site} and draw a card from the vice deck?'), {
                    site: StaticData.get().site(this.args.site.id).name,
                });
                break;
            case SHOP:
                updatePageTitle(_('Take ${itemName} at ${site}?'), {
                    site: site,
                    itemName: _(getItem(this.args._private.Shop).name),
                });
                break;
            case THROW_FESTIVITY:
                updatePageTitle(_('Throw a Festivity at ${site}?'), {
                    site: site,
                });
                break;
            case USE_ITEM:
                updatePageTitle(_('Use ${itemName}?'), {
                    itemName: _(getItem(this.args._private.items[target]).name),
                });
                break;
            default:
                updatePageTitle(_('Confirm your action'));
                break;
        }
    };
    return TakeAction;
}());
var PlayerSetupChooseCard = (function () {
    function PlayerSetupChooseCard(game) {
        this.game = game;
    }
    PlayerSetupChooseCard.create = function (game) {
        PlayerSetupChooseCard.instance = new PlayerSetupChooseCard(game);
    };
    PlayerSetupChooseCard.getInstance = function () {
        return PlayerSetupChooseCard.instance;
    };
    PlayerSetupChooseCard.prototype.onEnteringState = function (args) {
        debug('Entering PlayerSetupChooseCard state');
        this.args = args;
        this.updateInterfaceInitialStep();
    };
    PlayerSetupChooseCard.prototype.onLeavingState = function () {
        debug('Leaving PlayerSetupChooseCard state');
    };
    PlayerSetupChooseCard.prototype.setDescription = function (activePlayerIds, args) { };
    PlayerSetupChooseCard.prototype.updateInterfaceInitialStep = function () {
        var _this = this;
        this.game.clearPossible();
        updatePageTitle(_('${you} must select a card to place in your reputation'), {});
        this.args._private.forEach(function (card) {
            onClick(document.getElementById(card.id), function () { return _this.updateInterfaceConfirm(card); });
        });
    };
    PlayerSetupChooseCard.prototype.updateInterfaceConfirm = function (card) {
        clearPossible();
        setSelected(card.id);
        var _a = getViceCard(card), displayValue = _a.displayValue, suit = _a.suit;
        updatePageTitle(_('Place ${value} of ${tkn_suit} in your reputation?'), {
            value: getViceCardValueText(displayValue),
            tkn_suit: suit,
        });
        addConfirmButton(function () {
            performAction('actPlayerSetupChooseCard', {
                cardId: card.id,
            });
        });
        addCancelButton();
    };
    return PlayerSetupChooseCard;
}());
var Indulge = (function () {
    function Indulge(game) {
        this.game = game;
    }
    Indulge.create = function (game) {
        Indulge.instance = new Indulge(game);
    };
    Indulge.getInstance = function () {
        return Indulge.instance;
    };
    Indulge.prototype.onEnteringState = function (args) {
        debug('Entering Indulge state');
        this.args = args;
        this.updateInterfaceInitialStep();
    };
    Indulge.prototype.onLeavingState = function () {
        debug('Leaving Indulge state');
    };
    Indulge.prototype.setDescription = function (activePlayerIds, args) { };
    Indulge.prototype.updateInterfaceInitialStep = function () {
        this.game.clearPossible();
        updatePageTitle(_('${you} may perform an action'), {});
    };
    Indulge.prototype.updateInterfaceConfirm = function () {
        clearPossible();
        updatePageTitle(_('Confirm ship placement'));
        addConfirmButton(function () {
            performAction('actIndulge', {});
        });
    };
    return Indulge;
}());
var LieLow = (function () {
    function LieLow(game) {
        this.game = game;
    }
    LieLow.create = function (game) {
        LieLow.instance = new LieLow(game);
    };
    LieLow.getInstance = function () {
        return LieLow.instance;
    };
    LieLow.prototype.onEnteringState = function (args) {
        debug('Entering LieLow state');
        this.args = args;
        this.updateInterfaceInitialStep();
    };
    LieLow.prototype.onLeavingState = function () {
        debug('Leaving LieLow state');
    };
    LieLow.prototype.setDescription = function (activePlayerIds, args) { };
    LieLow.prototype.updateInterfaceInitialStep = function () {
        this.game.clearPossible();
        updatePageTitle(_('${you} may perform an action'), {});
    };
    LieLow.prototype.updateInterfaceConfirm = function () {
        clearPossible();
        updatePageTitle(_('Confirm action'));
        addConfirmButton(function () {
            performAction('actLieLow', {});
        });
    };
    return LieLow;
}());
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
    StaticData.prototype.item = function (id) {
        var data = this.staticData.items[id];
        if (!data) {
            throw new Error('FE_ERROR_003');
        }
        return data;
    };
    StaticData.prototype.viceCard = function (id) {
        var data = this.staticData.viceCards[id];
        if (!data) {
            throw new Error('FE_ERROR_001');
        }
        return data;
    };
    StaticData.prototype.site = function (id) {
        var data = this.staticData.sites[id];
        if (!data) {
            throw new Error('FE_ERROR_002');
        }
        return data;
    };
    return StaticData;
}());
var tplPlayArea = function () { return "\n  <div id=\"encounter-token-discard\"></div>\n  <div id=\"indictment-discard\"></div>\n  <div id=\"item-discard\"></div>\n  <div id=\"play-area-container\">\n    <div id=\"left-column\"></div>\n    <div id=\"right-column\"></div>\n  </div>\n"; };
var getItem = function (base) {
    return __assign(__assign({}, base), StaticData.get().item(base.id));
};
var getViceCard = function (base) {
    return __assign(__assign({}, base), StaticData.get().viceCard(base.id));
};
var getSite = function (base) {
    return __assign(__assign({}, base), StaticData.get().site(base.id));
};
var getPlayerColor = function (playerId) {
    var playerManager = PlayerManager.getInstance();
    return HEX_COLOR_COLOR_MAP[playerManager.getPlayer(playerId).getColor()];
};
var getEncounterTokenTypeText = function (type) {
    switch (type) {
        case 'Loyal':
            return _('Loyal');
        case 'Informer':
            return _('Informer');
        default:
            return _('Unknown');
    }
};
var getViceCardValueText = function (value) {
    switch (value) {
        case 'Q':
            return _('Queen');
        case 'J':
            return _('Jack');
        case 'R':
            return _('Rogue');
        case 'C':
            return _('Constable');
        default:
            return String(value);
    }
};
var getDice = function (diceValues) {
    var dice = diceValues.map(function (faceIndex, id) { return ({
        id: id,
        face: faceIndex + 1,
        type: 0,
    }); });
    return dice;
};
var getFestivityRankingName = function (ranking) {
    switch (ranking) {
        case SURPRISE_BALL:
            return _('Surprise Ball');
        case CHRISTENING:
            return _('Christening');
        case DANCE:
            return _('Dance');
        case QUIET_GATHERING:
            return _('Quiet Gathering');
        default:
            return '';
    }
};
var viceCardValueText = function (value) {
    switch (value) {
        case 'Q':
            return _('Queen');
        case 'J':
            return _('Jack');
        case 'R':
            return _('Rogue');
        case 'C':
            return _('Constable');
        default:
            return value + '';
    }
};
var cardsLog = function (cards) {
    var cardsLog = [];
    var cardsLogArgs = {};
    cards.forEach(function (card, index) {
        var viceCard = getViceCard(card);
        var log = '';
        var key = 'tkn_boldText_cardValue' + index;
        log = log + '${' + key + '}';
        cardsLogArgs[key] = viceCardValueText(viceCard.displayValue);
        var keySuit = 'tkn_suit_' + index;
        log = log + '${' + keySuit + '}';
        cardsLogArgs[keySuit] = viceCard.suit;
        cardsLog.push(log);
    });
    return {
        log: cardsLog.join(' '),
        args: cardsLogArgs,
    };
};
var Accuse = (function () {
    function Accuse(game) {
        this.game = game;
    }
    Accuse.create = function (game) {
        Accuse.instance = new Accuse(game);
    };
    Accuse.getInstance = function () {
        return Accuse.instance;
    };
    Accuse.prototype.onEnteringState = function (args) {
        debug('Entering Accuse state');
        this.args = args;
        this.updateInterfaceInitialStep();
    };
    Accuse.prototype.onLeavingState = function () {
        debug('Leaving Accuse state');
    };
    Accuse.prototype.setDescription = function (activePlayerIds, args) { };
    Accuse.prototype.updateInterfaceInitialStep = function () {
        this.game.clearPossible();
        updatePageTitle(_('${you} may perform an action'), {});
    };
    Accuse.prototype.updateInterfaceConfirm = function () {
        clearPossible();
        updatePageTitle(_('Confirm action'));
        addConfirmButton(function () {
            performAction('actAccuse', {});
        });
    };
    return Accuse;
}());
var Cruise = (function () {
    function Cruise(game) {
        this.game = game;
    }
    Cruise.create = function (game) {
        Cruise.instance = new Cruise(game);
    };
    Cruise.getInstance = function () {
        return Cruise.instance;
    };
    Cruise.prototype.onEnteringState = function (args) {
        debug('Entering Cruise state');
        this.args = args;
        this.updateInterfaceInitialStep();
    };
    Cruise.prototype.onLeavingState = function () {
        debug('Leaving Cruise state');
    };
    Cruise.prototype.setDescription = function (activePlayerIds, args) { };
    Cruise.prototype.updateInterfaceInitialStep = function () {
        this.game.clearPossible();
        updatePageTitle(_('${you} may perform an action'), {});
    };
    Cruise.prototype.updateInterfaceConfirm = function () {
        clearPossible();
        updatePageTitle(_('Confirm action'));
        addConfirmButton(function () {
            performAction('actCruise', {});
        });
    };
    return Cruise;
}());
var Shop = (function () {
    function Shop(game) {
        this.game = game;
    }
    Shop.create = function (game) {
        Shop.instance = new Shop(game);
    };
    Shop.getInstance = function () {
        return Shop.instance;
    };
    Shop.prototype.onEnteringState = function (args) {
        debug('Entering Shop state');
        this.args = args;
        this.updateInterfaceInitialStep();
    };
    Shop.prototype.onLeavingState = function () {
        debug('Leaving Shop state');
    };
    Shop.prototype.setDescription = function (activePlayerIds, args) { };
    Shop.prototype.updateInterfaceInitialStep = function () {
        this.game.clearPossible();
        updatePageTitle(_('${you} may perform an action'), {});
    };
    Shop.prototype.updateInterfaceConfirm = function () {
        clearPossible();
        updatePageTitle(_('Confirm action'));
        addConfirmButton(function () {
            performAction('actShop', {});
        });
    };
    return Shop;
}());
var ThrowFestivity = (function () {
    function ThrowFestivity(game) {
        this.game = game;
    }
    ThrowFestivity.create = function (game) {
        ThrowFestivity.instance = new ThrowFestivity(game);
    };
    ThrowFestivity.getInstance = function () {
        return ThrowFestivity.instance;
    };
    ThrowFestivity.prototype.onEnteringState = function (args) {
        debug('Entering ThrowFestivity state');
        this.args = args;
        this.updateInterfaceInitialStep();
    };
    ThrowFestivity.prototype.onLeavingState = function () {
        debug('Leaving ThrowFestivity state');
    };
    ThrowFestivity.prototype.setDescription = function (activePlayerIds, args) { };
    ThrowFestivity.prototype.updateInterfaceInitialStep = function () {
        this.game.clearPossible();
        updatePageTitle(_('${you} may perform an action'), {});
    };
    ThrowFestivity.prototype.updateInterfaceConfirm = function () {
        clearPossible();
        updatePageTitle(_('Confirm action'));
        addConfirmButton(function () {
            performAction('actThrowFestivity', {});
        });
    };
    return ThrowFestivity;
}());
var MovePawn = (function () {
    function MovePawn(game) {
        this.game = game;
    }
    MovePawn.create = function (game) {
        MovePawn.instance = new MovePawn(game);
    };
    MovePawn.getInstance = function () {
        return MovePawn.instance;
    };
    MovePawn.prototype.onEnteringState = function (args) {
        debug('Entering MovePawn state');
        this.args = args;
        this.updateInterfaceInitialStep();
    };
    MovePawn.prototype.onLeavingState = function () {
        debug('Leaving MovePawn state');
    };
    MovePawn.prototype.setDescription = function (activePlayerIds, args) { };
    MovePawn.prototype.updateInterfaceInitialStep = function () {
        var _this = this;
        this.game.clearPossible();
        updatePageTitle(_('${you} must select a site to move ${tkn_pawn} to'), {
            tkn_pawn: tknPawn(this.args.pawn)
        });
        var board = Board.getInstance();
        Object.entries(this.args.sites).forEach(function (_a) {
            var siteId = _a[0], site = _a[1];
            onClick(board.ui.selectBoxes[siteId], function () { return _this.updateInterfaceConfirm(site); });
        });
    };
    MovePawn.prototype.updateInterfaceConfirm = function (site) {
        clearPossible();
        updatePageTitle(_('Move ${tkn_pawn} to ${site}?'), {
            site: StaticData.get().site(site.id).name,
            tkn_pawn: tknPawn(this.args.pawn)
        });
        var board = Board.getInstance();
        setSelected(board.ui.selectBoxes[site.id]);
        addConfirmButton(function () {
            performAction('actMovePawn', {
                siteId: site.id,
            });
        });
        addCancelButton();
    };
    return MovePawn;
}());
var AddExcessCardsToGossip = (function () {
    function AddExcessCardsToGossip(game) {
        this.game = game;
    }
    AddExcessCardsToGossip.create = function (game) {
        AddExcessCardsToGossip.instance = new AddExcessCardsToGossip(game);
    };
    AddExcessCardsToGossip.getInstance = function () {
        return AddExcessCardsToGossip.instance;
    };
    AddExcessCardsToGossip.prototype.onEnteringState = function (args) {
        debug('Entering AddExcessCardsToGossip state');
        this.args = args;
        this.selectedCards = {};
        this.updateInterfaceInitialStep();
    };
    AddExcessCardsToGossip.prototype.onLeavingState = function () {
        debug('Leaving Indulge state');
    };
    AddExcessCardsToGossip.prototype.setDescription = function (activePlayerId, args) {
        if (args.isRevealedInformer) {
            this.game.clientUpdatePageTitle({
                text: _('${tkn_playerName}  must add excess cards to the safe pile'),
                args: {
                    tkn_playerName: PlayerManager.getInstance()
                        .getPlayer(activePlayerId)
                        .getName(),
                },
                nonActivePlayers: true,
            });
        }
    };
    AddExcessCardsToGossip.prototype.updateInterfaceInitialStep = function () {
        var _this = this;
        this.game.clearPossible();
        var remaining = this.args.numberToDiscard - Object.keys(this.selectedCards).length;
        if (remaining === 0) {
            this.updateInterfaceConfirm();
            return;
        }
        updatePageTitle(this.args.isRevealedInformer
            ? _('${you} must select cards to add to the safe pile (${number} remaining)')
            : _('${you} must select cards to add to the gossip pile (${number} remaining)'), {
            number: remaining,
        });
        this.args._private.cards.forEach(function (card) {
            var cardElt = document.getElementById(card.id);
            if (cardElt) {
                onClick(cardElt, function () { return _this.onClickCard(card); });
            }
        });
        this.setSelected();
        if (Object.keys(this.selectedCards).length > 0) {
            addCancelButton();
        }
        else {
            addUndoButtons(this.args);
        }
    };
    AddExcessCardsToGossip.prototype.updateInterfaceConfirm = function () {
        var _this = this;
        clearPossible();
        updatePageTitle(this.args.isRevealedInformer
            ? _('Add selected cards to the safe pile?')
            : _('Add selected cards to the gossip pile?'));
        this.setSelected();
        addConfirmButton(function () {
            performAction('actAddExcessCardsToGossip', {
                cardIds: Object.keys(_this.selectedCards),
            });
        });
        addCancelButton();
    };
    AddExcessCardsToGossip.prototype.setSelected = function () {
        Object.keys(this.selectedCards).forEach(function (cardId) {
            var cardElt = document.getElementById(cardId);
            setSelected(cardElt);
        });
    };
    AddExcessCardsToGossip.prototype.onClickCard = function (card) {
        if (this.selectedCards[card.id]) {
            delete this.selectedCards[card.id];
        }
        else {
            this.selectedCards[card.id] = card;
        }
        this.updateInterfaceInitialStep();
    };
    return AddExcessCardsToGossip;
}());
var CubeCounter = (function (_super) {
    __extends(CubeCounter, _super);
    function CubeCounter(props) {
        var _this = _super.call(this, props) || this;
        _this.setup(props);
        return _this;
    }
    CubeCounter.prototype.setup = function (_a) {
        var color = _a.color;
        this.iconElement.classList.add("moho-cube");
        this.iconElement.dataset.color = color;
    };
    return CubeCounter;
}(IconCounter));
var DrawTokenCounter = (function (_super) {
    __extends(DrawTokenCounter, _super);
    function DrawTokenCounter(props) {
        var _this = _super.call(this, props) || this;
        _this.setup(props);
        return _this;
    }
    DrawTokenCounter.prototype.setup = function (_a) {
        this.iconElement.classList.add("moho-draw-token");
    };
    return DrawTokenCounter;
}(IconCounter));
var HandCounter = (function (_super) {
    __extends(HandCounter, _super);
    function HandCounter(props) {
        var _this = _super.call(this, props) || this;
        _this.setup(props);
        return _this;
    }
    HandCounter.prototype.setup = function (props) {
        this.iconElement.classList.add('moho-card-back');
    };
    return HandCounter;
}(IconCounter));
var SuitCounter = (function (_super) {
    __extends(SuitCounter, _super);
    function SuitCounter(props) {
        var _this = _super.call(this, props) || this;
        _this.setup(props);
        return _this;
    }
    SuitCounter.prototype.setup = function (_a) {
        var suit = _a.suit;
        this.iconElement.classList.add("moho-suit");
        this.iconElement.dataset.suit = suit;
    };
    return SuitCounter;
}(IconCounter));
var FestivityPlayCard = (function () {
    function FestivityPlayCard(game) {
        this.game = game;
    }
    FestivityPlayCard.create = function (game) {
        FestivityPlayCard.instance = new FestivityPlayCard(game);
    };
    FestivityPlayCard.getInstance = function () {
        return FestivityPlayCard.instance;
    };
    FestivityPlayCard.prototype.onEnteringState = function (args) {
        debug('Entering FestivityPlayCard state');
        this.args = args;
        this.updateInterfaceInitialStep();
    };
    FestivityPlayCard.prototype.onLeavingState = function () {
        debug('Leaving Indulge state');
    };
    FestivityPlayCard.prototype.setDescription = function (activePlayerId, args) {
        this.args = args;
        if (args.optionalAction) {
            this.game.clientUpdatePageTitle({
                text: _('${tkn_playerName} may play a card'),
                args: {
                    tkn_playerName: PlayerManager.getInstance()
                        .getPlayer(activePlayerId)
                        .getName(),
                },
                nonActivePlayers: true,
            });
        }
        this.highlightWinningCards();
    };
    FestivityPlayCard.prototype.updateInterfaceInitialStep = function () {
        var _this = this;
        this.game.clearPossible();
        this.updatePageTitle();
        this.highlightWinningCards();
        this.args._private.forEach(function (card) {
            onClick(card.id, function () {
                if (getViceCard(card).displayValue === 'R') {
                    _this.updateInterfaceSelectRogueValue(card);
                }
                else {
                    _this.updateInterfaceConfirm(card);
                }
            });
        });
        if (this.args.hasViolin) {
            addPrimaryActionButton({
                id: 'play-violin',
                text: _('Play Violin'),
                callback: function () {
                    performAction('actFestivityPlayCard', {
                        cardId: null,
                        valueForRogue: 0,
                        playViolin: true,
                    });
                },
            });
        }
        addPassButton(this.args.optionalAction);
    };
    FestivityPlayCard.prototype.updateInterfaceSelectRogueValue = function (card) {
        var _this = this;
        clearPossible();
        setSelected(card.id);
        this.highlightWinningCards();
        var _a = getViceCard(card), displayValue = _a.displayValue, suit = _a.suit;
        updatePageTitle(_('${you} must select a value for ${value} of ${tkn_suit}'), {
            value: getViceCardValueText(displayValue),
            tkn_suit: suit,
        });
        var _loop_4 = function (i) {
            addPrimaryActionButton({
                id: "rogue-value-".concat(i),
                text: i.toString(),
                callback: function () {
                    _this.updateInterfaceConfirm(card, i);
                },
            });
        };
        for (var i = 0; i <= 9; i++) {
            _loop_4(i);
        }
        addCancelButton();
    };
    FestivityPlayCard.prototype.updateInterfaceConfirm = function (card, valueForRogue) {
        if (valueForRogue === void 0) { valueForRogue = 0; }
        clearPossible();
        setSelected(card.id);
        this.highlightWinningCards();
        var _a = getViceCard(card), displayValue = _a.displayValue, suit = _a.suit;
        var text = displayValue === 'R'
            ? _('Play ${value} of ${tkn_suit} as ${valueForRogue} ?')
            : _('Play ${value} of ${tkn_suit} ?');
        updatePageTitle(text, {
            value: getViceCardValueText(displayValue),
            tkn_suit: suit,
            valueForRogue: valueForRogue,
        });
        addConfirmButton(function () {
            performAction('actFestivityPlayCard', {
                cardId: card.id,
                valueForRogue: valueForRogue,
                playViolin: false,
            });
        });
        addCancelButton();
    };
    FestivityPlayCard.prototype.updatePageTitle = function () {
        if (this.args.optionalAction && this.args.hasViolin) {
            updatePageTitle(_('${you} may play a card, play the Violin or pass'), {});
        }
        else if (this.args.optionalAction) {
            updatePageTitle(_('${you} may play a card or pass'), {});
        }
        else if (this.args.hasViolin) {
            updatePageTitle(_('${you} must play a card or may play the Violin'), {});
        }
        else {
            updatePageTitle(_('${you} must play a card'), {});
        }
    };
    FestivityPlayCard.prototype.highlightWinningCards = function () {
        this.args.currentWinningCards.cards.forEach(function (card) { return setSelected(card.id); });
    };
    return FestivityPlayCard;
}());
var FestivityGenerateGossip = (function () {
    function FestivityGenerateGossip(game) {
        this.game = game;
    }
    FestivityGenerateGossip.create = function (game) {
        FestivityGenerateGossip.instance = new FestivityGenerateGossip(game);
    };
    FestivityGenerateGossip.getInstance = function () {
        return FestivityGenerateGossip.instance;
    };
    FestivityGenerateGossip.prototype.onEnteringState = function (args) {
        debug('Entering FestivityGenerateGossip state');
        this.args = args;
        this.updateInterfaceInitialStep();
    };
    FestivityGenerateGossip.prototype.onLeavingState = function () {
        debug('Leaving Indulge state');
    };
    FestivityGenerateGossip.prototype.setDescription = function (activePlayerIds, args) { };
    FestivityGenerateGossip.prototype.updateInterfaceInitialStep = function () {
        var _this = this;
        this.game.clearPossible();
        updatePageTitle(_('${you} must add cards to the gossip pile, one at a time'));
        this.args.cards.forEach(function (card) {
            onClick(card.id, function () {
                _this.updateInterfaceConfirm(card);
            });
        });
    };
    FestivityGenerateGossip.prototype.updateInterfaceConfirm = function (card) {
        clearPossible();
        var viceCard = getViceCard(card);
        updatePageTitle(_('Add ${value} of ${tkn_suit} to the gossip pile?'), {
            value: getViceCardValueText(viceCard.displayValue),
            tkn_suit: viceCard.suit,
        });
        setSelected(card.id);
        addConfirmButton(function () {
            performAction('actFestivityGenerateGossip', {
                cardId: card.id,
            });
        });
        addCancelButton();
    };
    return FestivityGenerateGossip;
}());
var FestivitySelectWinningSet = (function () {
    function FestivitySelectWinningSet(game) {
        this.game = game;
        this.selectedCards = {};
    }
    FestivitySelectWinningSet.create = function (game) {
        FestivitySelectWinningSet.instance = new FestivitySelectWinningSet(game);
    };
    FestivitySelectWinningSet.getInstance = function () {
        return FestivitySelectWinningSet.instance;
    };
    FestivitySelectWinningSet.prototype.onEnteringState = function (args) {
        debug('Entering FestivitySelectWinningSet state');
        this.args = args;
        this.selectedSet = null;
        this.selectedCards = {};
        this.updateInterfaceInitialStep();
    };
    FestivitySelectWinningSet.prototype.onLeavingState = function () {
        debug('Leaving Indulge state');
    };
    FestivitySelectWinningSet.prototype.setDescription = function (activePlayerIds, args) { };
    FestivitySelectWinningSet.prototype.updateInterfaceInitialStep = function () {
        var _this = this;
        this.game.clearPossible();
        if (this.args.options.length === 1) {
            this.selectedSet = 0;
            this.args.options[0].choices.forEach(function (_a) {
                var value = _a.value;
                _this.selectedCards[value] = {};
            });
            this.updateInterfaceSelectCardsInSet();
            return;
        }
        updatePageTitle(_('${you} must select the winning set'));
        this.args.options.forEach(function (option, index) {
            addSecondaryActionButton({
                id: "set_choice_".concat(index),
                text: option.ranking === SURPRISE_BALL
                    ? formatStringRecursive(_('Surprise Ball of  ${tkn_suit}'), {
                        tkn_suit: option.suit,
                    })
                    : _('Surprise Ball with Dress(es)'),
                callback: function () {
                    _this.selectedSet = index;
                    _this.updateInterfaceSelectCardsInSet();
                },
            });
        });
    };
    FestivitySelectWinningSet.prototype.updateInterfaceSelectCardsInSet = function () {
        var _this = this;
        this.game.clearPossible();
        var set = this.args.options[this.selectedSet];
        var remaining = 0;
        var cardsAlreadySelected = 0;
        set.choices.forEach(function (_a) {
            var value = _a.value, numberToSelect = _a.numberToSelect, cards = _a.cards;
            var numberSelected = Object.keys(_this.selectedCards[value]).length;
            cardsAlreadySelected += numberSelected;
            if (numberSelected < numberToSelect) {
                remaining += numberToSelect - numberSelected;
                cards.forEach(function (card) {
                    onClick(document.getElementById(card.id), function () {
                        _this.onClickCard(card, value);
                    });
                });
            }
        });
        if (remaining === 0) {
            this.updateInterfaceConfirm();
            return;
        }
        this.setSelected(set.selected.concat(this.getSelectedCardsFromOptions()));
        updatePageTitle(_('${you} must select cards for the winning ${festivityName} (${number} remaining)'), {
            festivityName: getFestivityRankingName(this.args.ranking),
            number: remaining,
        });
        if (cardsAlreadySelected > 0) {
            addCancelButton();
        }
    };
    FestivitySelectWinningSet.prototype.uppdateInterfaceSelectSet = function (index) { };
    FestivitySelectWinningSet.prototype.updateInterfaceConfirm = function () {
        var _this = this;
        clearPossible();
        var set = this.args.options[this.selectedSet];
        var winningSet = set.selected
            .concat(this.getSelectedCardsFromOptions())
            .sort(function (a, b) {
            return a.festivityValue - b.festivityValue;
        });
        updatePageTitle(_('Confirm winning ${festivityName}: ${cardsLog}'), {
            cardsLog: cardsLog(winningSet),
            festivityName: getFestivityRankingName(this.args.ranking),
        });
        this.setSelected(winningSet);
        addConfirmButton(function () {
            var selectedCards = {};
            Object.entries(_this.selectedCards).forEach(function (_a) {
                var value = _a[0], cards = _a[1];
                selectedCards[value] = Object.keys(cards);
            });
            performAction('actFestivitySelectWinningSet', {
                setIndex: _this.selectedSet,
                selectedCards: selectedCards,
            });
        });
        addCancelButton();
    };
    FestivitySelectWinningSet.prototype.setSelected = function (cards) {
        if (cards === void 0) { cards = []; }
        cards.forEach(function (_a) {
            var id = _a.id;
            var cardElt = document.getElementById(id);
            setSelected(cardElt);
        });
    };
    FestivitySelectWinningSet.prototype.getSelectedCardsFromOptions = function () {
        var selectedCards = [];
        Object.values(this.selectedCards).forEach(function (cards) {
            selectedCards.push.apply(selectedCards, Object.values(cards));
        });
        return selectedCards;
    };
    FestivitySelectWinningSet.prototype.onClickCard = function (card, value) {
        if (this.selectedCards[value][card.id]) {
            delete this.selectedCards[value][card.id];
        }
        else {
            this.selectedCards[value][card.id] = card;
        }
        this.updateInterfaceSelectCardsInSet();
    };
    return FestivitySelectWinningSet;
}());
var FestivityChooseNextFoiledThreat = (function () {
    function FestivityChooseNextFoiledThreat(game) {
        this.game = game;
    }
    FestivityChooseNextFoiledThreat.create = function (game) {
        FestivityChooseNextFoiledThreat.instance =
            new FestivityChooseNextFoiledThreat(game);
    };
    FestivityChooseNextFoiledThreat.getInstance = function () {
        return FestivityChooseNextFoiledThreat.instance;
    };
    FestivityChooseNextFoiledThreat.prototype.onEnteringState = function (args) {
        debug('Entering FestivityChooseNextFoiledThreat state');
        this.args = args;
        this.updateInterfaceInitialStep();
    };
    FestivityChooseNextFoiledThreat.prototype.onLeavingState = function () {
        debug('Leaving Indulge state');
    };
    FestivityChooseNextFoiledThreat.prototype.setDescription = function (activePlayerIds, args) { };
    FestivityChooseNextFoiledThreat.prototype.updateInterfaceInitialStep = function () {
        var _this = this;
        this.game.clearPossible();
        updatePageTitle(_('${you} must choose the next threat to foil'), {});
        this.args.cards.forEach(function (card) {
            onClick(card.id, function () {
                _this.updateInterfaceConfirm(card);
            });
        });
        addUndoButtons(this.args);
    };
    FestivityChooseNextFoiledThreat.prototype.updateInterfaceConfirm = function (card) {
        clearPossible();
        var _a = getViceCard(card), displayValue = _a.displayValue, suit = _a.suit;
        updatePageTitle(_('Choose ${value} of ${tkn_suit} as the next threat to foil?'), {
            value: getViceCardValueText(displayValue),
            tkn_suit: suit,
        });
        addConfirmButton(function () {
            performAction('actFestivityChooseNextFoiledThreat', {
                cardId: card.id,
            });
        });
        addCancelButton();
    };
    return FestivityChooseNextFoiledThreat;
}());
var FestivityTakeMatchingCubes = (function () {
    function FestivityTakeMatchingCubes(game) {
        this.game = game;
    }
    FestivityTakeMatchingCubes.create = function (game) {
        FestivityTakeMatchingCubes.instance = new FestivityTakeMatchingCubes(game);
    };
    FestivityTakeMatchingCubes.getInstance = function () {
        return FestivityTakeMatchingCubes.instance;
    };
    FestivityTakeMatchingCubes.prototype.onEnteringState = function (args) {
        debug('Entering FestivityTakeMatchingCubes state');
        this.args = args;
        this.updateInterfaceInitialStep();
    };
    FestivityTakeMatchingCubes.prototype.onLeavingState = function () {
        debug('Leaving FestivityTakeMatchingCubes state');
    };
    FestivityTakeMatchingCubes.prototype.setDescription = function (activePlayerIds, args) { };
    FestivityTakeMatchingCubes.prototype.updateInterfaceInitialStep = function () {
        this.game.clearPossible();
        updatePageTitle(_('${you} may take ${number} ${tkn_cube}'), {
            number: this.args.number,
            tkn_cube: SUIT_COLOR_MAP[this.args.suit],
        });
        addPrimaryActionButton({
            id: 'take_cubes_btn',
            text: _('Take'),
            callback: function () {
                performAction('actFestivityTakeMatchingCubes', {
                    takeCubes: true,
                });
            },
        });
        addSecondaryActionButton({
            id: 'do_not_take_cubes_btn',
            text: _('Do not take'),
            callback: function () {
                performAction('actFestivityTakeMatchingCubes', {
                    takeCubes: false,
                });
            },
        });
    };
    return FestivityTakeMatchingCubes;
}());
var EndOfWeekEncounterSociety = (function () {
    function EndOfWeekEncounterSociety(game) {
        this.game = game;
    }
    EndOfWeekEncounterSociety.create = function (game) {
        EndOfWeekEncounterSociety.instance = new EndOfWeekEncounterSociety(game);
    };
    EndOfWeekEncounterSociety.getInstance = function () {
        return EndOfWeekEncounterSociety.instance;
    };
    EndOfWeekEncounterSociety.prototype.onEnteringState = function (args) {
        debug('Entering EndOfWeekEncounterSociety state');
        this.args = args;
        this.updateInterfaceInitialStep();
    };
    EndOfWeekEncounterSociety.prototype.onLeavingState = function () {
        debug('Leaving EndOfWeekEncounterSociety state');
    };
    EndOfWeekEncounterSociety.prototype.setDescription = function (activePlayerIds, args) { };
    EndOfWeekEncounterSociety.prototype.updateInterfaceInitialStep = function () {
        var _this = this;
        this.game.clearPossible();
        updatePageTitle(_('${you} must place an encounter token on ${siteName}'), {
            siteName: getSite(this.args._private.site).name,
        });
        setSelected(Board.getInstance().ui.selectBoxes[this.args._private.site.id]);
        this.args._private.encounterTokens.forEach(function (token) {
            onClick(token.id, function () {
                _this.updateInterfaceConfirm(token);
            });
        });
    };
    EndOfWeekEncounterSociety.prototype.updateInterfaceConfirm = function (token) {
        clearPossible();
        updatePageTitle(_('Place ${tkn_encounterToken} on ${siteName}'), {
            tkn_encounterToken: [token.color, token.type].join(':'),
            siteName: getSite(this.args._private.site).name,
        });
        setSelected(Board.getInstance().ui.selectBoxes[this.args._private.site.id]);
        addConfirmButton(function () {
            performAction('actEndOfWeekEncounterSociety', {
                encounterTokenId: token.id,
            });
        });
        addCancelButton();
    };
    return EndOfWeekEncounterSociety;
}());
var DiscardItem = (function () {
    function DiscardItem(game) {
        this.game = game;
    }
    DiscardItem.create = function (game) {
        DiscardItem.instance = new DiscardItem(game);
    };
    DiscardItem.getInstance = function () {
        return DiscardItem.instance;
    };
    DiscardItem.prototype.onEnteringState = function (args) {
        debug('Entering DiscardItem state');
        this.args = args;
        this.updateInterfaceInitialStep();
    };
    DiscardItem.prototype.onLeavingState = function () {
        debug('Leaving DiscardItem state');
    };
    DiscardItem.prototype.setDescription = function (activePlayerIds, args) { };
    DiscardItem.prototype.updateInterfaceInitialStep = function () {
        var _this = this;
        this.game.clearPossible();
        updatePageTitle(_('${you} must discard an item'), {});
        this.args.items.forEach(function (item) {
            onClick(item.id, function () {
                _this.updateInterfaceConfirm(item);
            });
        });
        addUndoButtons(this.args);
    };
    DiscardItem.prototype.updateInterfaceConfirm = function (item) {
        clearPossible();
        updatePageTitle(_('Discard ${itemName}?'), {
            itemName: getItem(item).name,
        });
        setSelected(item.id);
        addConfirmButton(function () {
            performAction('actDiscardItem', {
                itemId: item.id,
            });
        });
        addCancelButton();
    };
    return DiscardItem;
}());
var ExamineGossipPile = (function () {
    function ExamineGossipPile(game) {
        this.game = game;
        this.modal = new CardModal(game, GOSSIP_PILE);
    }
    ExamineGossipPile.create = function (game) {
        ExamineGossipPile.instance = new ExamineGossipPile(game);
    };
    ExamineGossipPile.getInstance = function () {
        return ExamineGossipPile.instance;
    };
    ExamineGossipPile.prototype.onEnteringState = function (args) {
        debug('Entering ExamineGossipPile state');
        this.args = args;
        this.modal.addCards(Object.values(this.args._private));
        this.updateInterfaceInitialStep();
    };
    ExamineGossipPile.prototype.onLeavingState = function () {
        debug('Leaving ExamineGossipPile state');
        this.modal.removeCards();
    };
    ExamineGossipPile.prototype.setDescription = function (activePlayerIds, args) { };
    ExamineGossipPile.prototype.updateInterfaceInitialStep = function () {
        var _this = this;
        this.game.clearPossible();
        updatePageTitle(_('${you} may add a card from the gossip pile to your hand'), {});
        addPrimaryActionButton({
            id: 'open_btn',
            text: _('Show Gossip Pile'),
            callback: function () {
                _this.modal.open();
            },
        });
        Object.values(this.args._private).forEach(function (card) {
            onClick(card.id, function () {
                _this.updateInterfaceConfirm(card);
                _this.modal.close();
            });
        });
        this.modal.open();
    };
    ExamineGossipPile.prototype.updateInterfaceConfirm = function (card) {
        var _this = this;
        clearPossible();
        var viceCard = getViceCard(card);
        updatePageTitle(_('Add ${value} of ${tkn_suit} to your hand?'), {
            value: getViceCardValueText(viceCard.displayValue),
            tkn_suit: viceCard.suit,
        });
        addConfirmButton(function () {
            performAction('actExamineGossipPile', {
                cardId: card.id
            });
            _this.modal.removeCards();
        });
        addCancelButton();
    };
    return ExamineGossipPile;
}());
var PlaceEncounterToken = (function () {
    function PlaceEncounterToken(game) {
        this.game = game;
    }
    PlaceEncounterToken.create = function (game) {
        PlaceEncounterToken.instance = new PlaceEncounterToken(game);
    };
    PlaceEncounterToken.getInstance = function () {
        return PlaceEncounterToken.instance;
    };
    PlaceEncounterToken.prototype.onEnteringState = function (args) {
        debug('Entering PlaceEncounterToken state');
        this.args = args;
        this.updateInterfaceInitialStep();
    };
    PlaceEncounterToken.prototype.onLeavingState = function () {
        debug('Leaving PlaceEncounterToken state');
    };
    PlaceEncounterToken.prototype.setDescription = function (activePlayerIds, args) { };
    PlaceEncounterToken.prototype.updateInterfaceInitialStep = function () {
        var _this = this;
        this.game.clearPossible();
        updatePageTitle(_('${you} may place an encounter token face up on ${site}'), {
            site: _(StaticData.get().site(this.args.site.id).name),
        });
        this.args._private.forEach(function (token) {
            onClick(token.id, function () {
                _this.updateInterfaceConfirm(token);
            });
        });
        addUndoButtons(this.args);
    };
    PlaceEncounterToken.prototype.updateInterfaceConfirm = function (token) {
        clearPossible();
        var site = getSite(this.args.site);
        var playerColor = getPlayerColor(PlayerManager.getInstance().getCurrentPlayerId());
        updatePageTitle(_('Place ${tkn_encounterToken} face up on ${site}?'), {
            tkn_encounterToken: "".concat(playerColor, ":").concat(token.type),
            site: _(site.name),
        });
        setSelected(token.id);
        addConfirmButton(function () {
            performAction('actPlaceEncounterToken', {
                tokenId: token.id,
            });
        });
        addCancelButton();
    };
    return PlaceEncounterToken;
}());
var FestivityUseBottleOfGin = (function () {
    function FestivityUseBottleOfGin(game) {
        this.game = game;
    }
    FestivityUseBottleOfGin.create = function (game) {
        FestivityUseBottleOfGin.instance = new FestivityUseBottleOfGin(game);
    };
    FestivityUseBottleOfGin.getInstance = function () {
        return FestivityUseBottleOfGin.instance;
    };
    FestivityUseBottleOfGin.prototype.onEnteringState = function (args) {
        debug('Entering FestivityUseBottleOfGin state');
        this.args = args;
        this.updateInterfaceInitialStep();
    };
    FestivityUseBottleOfGin.prototype.onLeavingState = function () {
        debug('Leaving FestivityUseBottleOfGin state');
    };
    FestivityUseBottleOfGin.prototype.setDescription = function (activePlayerIds, args) {
        this.args = args;
        this.highlightWinningCards();
    };
    FestivityUseBottleOfGin.prototype.updateInterfaceInitialStep = function () {
        this.game.clearPossible();
        updatePageTitle(_('${you} may use Bottle of Gin to play an addittional round'), {});
        this.highlightWinningCards();
        addPrimaryActionButton({
            id: 'use_btn',
            text: _('Use Bottle of Gin'),
            callback: function () {
                performAction('actFestivityUseBottleOfGin', {
                    useBottleOfGin: true,
                });
            },
        });
        addSecondaryActionButton({
            id: 'do_not_use_btn',
            text: _('Do not use Bottle of Gin'),
            callback: function () {
                performAction('actFestivityUseBottleOfGin', {
                    useBottleOfGin: false,
                });
            },
        });
    };
    FestivityUseBottleOfGin.prototype.updateInterfaceConfirm = function () {
        clearPossible();
        updatePageTitle(_('Confirm action'));
        addConfirmButton(function () {
            performAction('actFestivityUseBottleOfGin', {});
        });
    };
    FestivityUseBottleOfGin.prototype.highlightWinningCards = function () {
        this.args.currentWinningCards.cards.forEach(function (card) { return setSelected(card.id); });
    };
    return FestivityUseBottleOfGin;
}());
var EndOfWeekUseDomino = (function () {
    function EndOfWeekUseDomino(game) {
        this.game = game;
    }
    EndOfWeekUseDomino.create = function (game) {
        EndOfWeekUseDomino.instance = new EndOfWeekUseDomino(game);
    };
    EndOfWeekUseDomino.getInstance = function () {
        return EndOfWeekUseDomino.instance;
    };
    EndOfWeekUseDomino.prototype.onEnteringState = function (args) {
        debug('Entering EndOfWeekUseDomino state');
        this.args = args;
        this.updateInterfaceInitialStep();
    };
    EndOfWeekUseDomino.prototype.onLeavingState = function () {
        debug('Leaving EndOfWeekUseDomino state');
    };
    EndOfWeekUseDomino.prototype.setDescription = function (activePlayerIds, args) { };
    EndOfWeekUseDomino.prototype.updateInterfaceInitialStep = function () {
        this.game.clearPossible();
        updatePageTitle(_('${you} may play Domino to ignore your reputation during Society Investigates'), {});
        addPrimaryActionButton({
            id: 'play_btn',
            text: _('Play Domino'),
            callback: function () {
                performAction('actEndOfWeekUseDomino', {
                    playDomino: true,
                });
            },
        });
        addSecondaryActionButton({
            id: 'do_not_play_btn',
            text: _('Do not play Domino'),
            callback: function () {
                performAction('actEndOfWeekUseDomino', {
                    playDomino: false,
                });
            },
        });
    };
    EndOfWeekUseDomino.prototype.updateInterfaceConfirm = function () {
        clearPossible();
        updatePageTitle(_('Confirm action'));
        addConfirmButton(function () {
            performAction('actEndOfWeekUseDomino', {});
        });
    };
    return EndOfWeekUseDomino;
}());
var FestivityPlayDress = (function () {
    function FestivityPlayDress(game) {
        this.game = game;
    }
    FestivityPlayDress.create = function (game) {
        FestivityPlayDress.instance = new FestivityPlayDress(game);
    };
    FestivityPlayDress.getInstance = function () {
        return FestivityPlayDress.instance;
    };
    FestivityPlayDress.prototype.onEnteringState = function (args) {
        debug('Entering FestivityPlayDress state');
        this.args = args;
        this.updateInterfaceInitialStep();
    };
    FestivityPlayDress.prototype.onLeavingState = function () {
        debug('Leaving Indulge state');
    };
    FestivityPlayDress.prototype.setDescription = function (activePlayerIds, args) { };
    FestivityPlayDress.prototype.updateInterfaceInitialStep = function () {
        this.game.clearPossible();
        updatePageTitle(_('${you} may play your matching Dress'), {});
        setSelected(this.args.dress.id);
        addPrimaryActionButton({
            id: 'play_btn',
            text: _('Play Dress'),
            callback: function () {
                performAction('actFestivityPlayDress', {
                    playDress: true,
                });
            },
        });
        addSecondaryActionButton({
            id: 'do_not_play_btn',
            text: _('Do not play Dress'),
            callback: function () {
                performAction('actFestivityPlayDress', {
                    playDress: false,
                });
            },
        });
    };
    return FestivityPlayDress;
}());
