"use strict";
var web_view_1 = require('ui/web-view');
var main_view_model_1 = require('./main-view-model');
var dialogs_1 = require('ui/dialogs');
var webViewInterfaceModule = require('nativescript-webview-interface');
var page;
var oLangWebViewInterface;
function pageLoaded(args) {
    page = args.object;
    page.bindingContext = main_view_model_1.webViewInterfaceDemoVM;
}
exports.pageLoaded = pageLoaded;
function navigatedTo(args) {
    setupWebViewInterface(page);
}
exports.navigatedTo = navigatedTo;
function navigatedFrom() {
    oLangWebViewInterface.destroy();
}
exports.navigatedFrom = navigatedFrom;
function setupWebViewInterface(page) {
    var webView = page.getViewById('webView');
    oLangWebViewInterface = new webViewInterfaceModule.WebViewInterface(webView, '~/www/index.html');
    webView.on(web_view_1.WebView.loadFinishedEvent, function (args) {
        if (!args.error) {
            loadLanguagesInWebView();
        }
    });
    listenLangWebViewEvents();
}
function loadLanguagesInWebView() {
    oLangWebViewInterface.emit('loadLanguages', JSON.stringify(main_view_model_1.webViewInterfaceDemoVM.lstLanguages));
}
function listenLangWebViewEvents() {
    oLangWebViewInterface.on('languageSelection', function (selectedLanguage) {
        main_view_model_1.webViewInterfaceDemoVM.selectedLanguage = selectedLanguage;
    });
}
function addLanguage() {
    oLangWebViewInterface.emit('loadLanguages', JSON.stringify(main_view_model_1.webViewInterfaceDemoVM.lstLanguages));
    var txtField = page.getViewById('txtLanguage');
    oLangWebViewInterface.callJSFunction('addNewLanguage', [txtField.text]);
}
exports.addLanguage = addLanguage;
function getSelectedLanguage() {
    oLangWebViewInterface.callJSFunction('getSelectedLanguage', null, function (oSelectedLang) {
        dialogs_1.alert("Selected Language is " + oSelectedLang.text);
    });
}
exports.getSelectedLanguage = getSelectedLanguage;
function getSelectedLanguageDeferred() {
    oLangWebViewInterface.callJSFunction('getSelectedLanguageDeferred', null, function (oSelectedLang) {
        dialogs_1.alert("Deferred Selected Language is " + oSelectedLang.text);
    });
}
exports.getSelectedLanguageDeferred = getSelectedLanguageDeferred;
