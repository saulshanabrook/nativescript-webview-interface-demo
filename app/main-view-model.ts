import {Observable} from 'data/observable';

/**
 * View Model for the webViewInterfaceDemo.
 */
class WebViewInterfaceDemoVM extends Observable{

    /**
     * Holds language to add
     */
    private _language: string;

    /**
     * Holds currently selected language in webView.
     */
    private _selectedLanguage: string;

    /**
     * Default languages to load in dropdown.
     */
    lstLanguages: string[] = ['English', 'Sanskrit', 'French', "HEY"];

    constructor(){
        super();
    }

    get language(){
        return this._language;
    }

    set language(language: string){
        this._language = language;
        this.notifyPropertyChange('language', language);
    }

    get selectedLanguage(){
        return this._selectedLanguage;
    }

    set selectedLanguage(language: string){
        this._selectedLanguage = language;
        this.notifyPropertyChange('selectedLanguage', language);
    }
}

export var webViewInterfaceDemoVM = new WebViewInterfaceDemoVM();
