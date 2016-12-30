"use strict";
var observable_1 = require("data/observable");
/**
 * View Model for the webViewInterfaceDemo.
 */
var WebViewInterfaceDemoVM = (function (_super) {
    __extends(WebViewInterfaceDemoVM, _super);
    function WebViewInterfaceDemoVM() {
        var _this = _super.call(this) || this;
        /**
         * Default languages to load in dropdown.
         */
        _this.lstLanguages = ['English', 'Sanskrit', 'French', "HEY"];
        return _this;
    }
    Object.defineProperty(WebViewInterfaceDemoVM.prototype, "language", {
        get: function () {
            return this._language;
        },
        set: function (language) {
            this._language = language;
            this.notifyPropertyChange('language', language);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(WebViewInterfaceDemoVM.prototype, "selectedLanguage", {
        get: function () {
            return this._selectedLanguage;
        },
        set: function (language) {
            this._selectedLanguage = language;
            this.notifyPropertyChange('selectedLanguage', language);
        },
        enumerable: true,
        configurable: true
    });
    return WebViewInterfaceDemoVM;
}(observable_1.Observable));
exports.webViewInterfaceDemoVM = new WebViewInterfaceDemoVM();
