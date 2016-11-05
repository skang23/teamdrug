/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import * as import0 from './interactions';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '../../providers/auth-data';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import15 from '@angular/core/src/linker/query_list';
import * as import16 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/menu/menu-toggle.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import20 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import21 from 'ionic-angular/config/config';
import * as import22 from '@angular/core/src/linker/element_ref';
import * as import23 from 'ionic-angular/navigation/view-controller';
import * as import24 from 'ionic-angular/components/app/app';
import * as import25 from 'ionic-angular/components/toolbar/toolbar';
import * as import26 from 'ionic-angular/components/menu/menu-controller';
import * as import27 from 'ionic-angular/util/keyboard';
import * as import28 from '@angular/core/src/zone/ng_zone';
import * as import29 from 'ionic-angular/components/tabs/tabs';
import * as import30 from 'ionic-angular/components/icon/icon';
import * as import31 from 'ionic-angular/components/button/button';
import * as import32 from 'ionic-angular/components/menu/menu-toggle';
import * as import33 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import34 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import35 from 'ionic-angular/components/navbar/navbar';
import * as import36 from 'ionic-angular/components/content/content';
export var Wrapper_InteractionsPage = (function () {
    function Wrapper_InteractionsPage(p0, p1) {
        this.changed = false;
        this.context = new import0.InteractionsPage(p0, p1);
    }
    Wrapper_InteractionsPage.prototype.detectChangesInternal = function (view, el, throwOnChange) {
        var changed = this.changed;
        this.changed = false;
        return changed;
    };
    return Wrapper_InteractionsPage;
}());
var renderType_InteractionsPage_Host = null;
var _View_InteractionsPage_Host0 = (function (_super) {
    __extends(_View_InteractionsPage_Host0, _super);
    function _View_InteractionsPage_Host0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_InteractionsPage_Host0, renderType_InteractionsPage_Host, import6.ViewType.HOST, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_InteractionsPage_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = this.selectOrCreateHostElement('page-interactions', rootSelector, null);
        this._appEl_0 = new import3.AppElement(0, null, this, this._el_0);
        var compView_0 = viewFactory_InteractionsPage0(this.viewUtils, this.injector(0), this._appEl_0);
        this._InteractionsPage_0_4 = new Wrapper_InteractionsPage(this.parentInjector.get(import8.NavController), this.parentInjector.get(import9.AuthData));
        this._appEl_0.initComponent(this._InteractionsPage_0_4.context, [], compView_0);
        compView_0.create(this._InteractionsPage_0_4.context, this.projectableNodes, null);
        this.init([].concat([this._el_0]), [this._el_0], [], []);
        return this._appEl_0;
    };
    _View_InteractionsPage_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import0.InteractionsPage) && (0 === requestNodeIndex))) {
            return this._InteractionsPage_0_4.context;
        }
        return notFoundResult;
    };
    _View_InteractionsPage_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._InteractionsPage_0_4.detectChangesInternal(this, this._el_0, throwOnChange);
        this.detectContentChildrenChanges(throwOnChange);
        this.detectViewChildrenChanges(throwOnChange);
    };
    return _View_InteractionsPage_Host0;
}(import1.AppView));
function viewFactory_InteractionsPage_Host0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_InteractionsPage_Host === null)) {
        (renderType_InteractionsPage_Host = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, [], {}));
    }
    return new _View_InteractionsPage_Host0(viewUtils, parentInjector, declarationEl);
}
export var InteractionsPageNgFactory = new import11.ComponentFactory('page-interactions', viewFactory_InteractionsPage_Host0, import0.InteractionsPage);
var styles_InteractionsPage = [];
var renderType_InteractionsPage = null;
var _View_InteractionsPage0 = (function (_super) {
    __extends(_View_InteractionsPage0, _super);
    function _View_InteractionsPage0(viewUtils, parentInjector, declarationEl) {
        _super.call(this, _View_InteractionsPage0, renderType_InteractionsPage, import6.ViewType.COMPONENT, viewUtils, parentInjector, declarationEl, import7.ChangeDetectorStatus.CheckAlways);
    }
    _View_InteractionsPage0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = this.renderer.createElement(parentRenderNode, 'ion-header', null);
        this._Header_1_3 = new import12.Wrapper_Header(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_1), this.renderer, this.parentInjector.get(import23.ViewController, null));
        this._text_2 = this.renderer.createText(this._el_1, '\n\n  ', null);
        this._el_3 = this.renderer.createElement(this._el_1, 'ion-navbar', null);
        this.renderer.setElementAttribute(this._el_3, 'class', 'toolbar');
        this._appEl_3 = new import3.AppElement(3, 1, this, this._el_3);
        var compView_3 = import13.viewFactory_Navbar0(this.viewUtils, this.injector(3), this._appEl_3);
        this._Navbar_3_4 = new import13.Wrapper_Navbar(this.parentInjector.get(import24.App), this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import8.NavController, null), this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_3), this.renderer);
        this._appEl_3.initComponent(this._Navbar_3_4.context, [], compView_3);
        this._text_4 = this.renderer.createText(null, '\n  	', null);
        this._el_5 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_5, 'start', '');
        this._ToolbarItem_5_3 = new import14.Wrapper_ToolbarItem(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_5), this.renderer, this.parentInjector.get(import25.Toolbar, null), this._Navbar_3_4.context);
        this._query_Button_5_0 = new import15.QueryList();
        this._text_6 = this.renderer.createText(this._el_5, '\n	  	', null);
        this._el_7 = this.renderer.createElement(this._el_5, 'button', null);
        this.renderer.setElementAttribute(this._el_7, 'icon-only', '');
        this.renderer.setElementAttribute(this._el_7, 'ion-button', '');
        this.renderer.setElementAttribute(this._el_7, 'menuToggle', '');
        this._appEl_7 = new import3.AppElement(7, 5, this, this._el_7);
        var compView_7 = import16.viewFactory_Button0(this.viewUtils, this.injector(7), this._appEl_7);
        this._Button_7_4 = new import16.Wrapper_Button('', '', this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_7), this.renderer);
        this._MenuToggle_7_5 = new import17.Wrapper_MenuToggle(this.parentInjector.get(import26.MenuController), new import22.ElementRef(this._el_7), this.parentInjector.get(import23.ViewController, null), this._Navbar_3_4.context);
        this._ToolbarItem_7_6 = new import14.Wrapper_ToolbarItem(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_7), this.renderer, this.parentInjector.get(import25.Toolbar, null), this._Navbar_3_4.context);
        this._query_Button_7_0 = new import15.QueryList();
        this._appEl_7.initComponent(this._Button_7_4.context, [], compView_7);
        this._text_8 = this.renderer.createText(null, '\n	  		', null);
        this._el_9 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_9, 'name', 'menu');
        this.renderer.setElementAttribute(this._el_9, 'role', 'img');
        this._Icon_9_3 = new import18.Wrapper_Icon(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_9), this.renderer);
        this._text_10 = this.renderer.createText(null, '\n	  	', null);
        compView_7.create(this._Button_7_4.context, [[].concat([
                this._text_8,
                this._el_9,
                this._text_10
            ])], null);
        this._text_11 = this.renderer.createText(this._el_5, '\n	  ', null);
        this._text_12 = this.renderer.createText(null, '\n	  ', null);
        this._el_13 = this.renderer.createElement(null, 'ion-buttons', null);
        this.renderer.setElementAttribute(this._el_13, 'end', '');
        this._ToolbarItem_13_3 = new import14.Wrapper_ToolbarItem(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_13), this.renderer, this.parentInjector.get(import25.Toolbar, null), this._Navbar_3_4.context);
        this._query_Button_13_0 = new import15.QueryList();
        this._text_14 = this.renderer.createText(this._el_13, '\n    	', null);
        this._el_15 = this.renderer.createElement(this._el_13, 'button', null);
        this.renderer.setElementAttribute(this._el_15, 'icon-only', '');
        this.renderer.setElementAttribute(this._el_15, 'ion-button', '');
        this._appEl_15 = new import3.AppElement(15, 13, this, this._el_15);
        var compView_15 = import16.viewFactory_Button0(this.viewUtils, this.injector(15), this._appEl_15);
        this._Button_15_4 = new import16.Wrapper_Button(null, '', this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_15), this.renderer);
        this._appEl_15.initComponent(this._Button_15_4.context, [], compView_15);
        this._text_16 = this.renderer.createText(null, '\n    		', null);
        this._el_17 = this.renderer.createElement(null, 'ion-icon', null);
        this.renderer.setElementAttribute(this._el_17, 'name', 'log-out');
        this.renderer.setElementAttribute(this._el_17, 'role', 'img');
        this._Icon_17_3 = new import18.Wrapper_Icon(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_17), this.renderer);
        this._text_18 = this.renderer.createText(null, '\n    	', null);
        compView_15.create(this._Button_15_4.context, [[].concat([
                this._text_16,
                this._el_17,
                this._text_18
            ])], null);
        this._text_19 = this.renderer.createText(this._el_13, '\n    ', null);
        this._text_20 = this.renderer.createText(null, '\n    ', null);
        this._el_21 = this.renderer.createElement(null, 'ion-title', null);
        this._appEl_21 = new import3.AppElement(21, 3, this, this._el_21);
        var compView_21 = import19.viewFactory_ToolbarTitle0(this.viewUtils, this.injector(21), this._appEl_21);
        this._ToolbarTitle_21_4 = new import19.Wrapper_ToolbarTitle(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_21), this.renderer, this.parentInjector.get(import25.Toolbar, null), this._Navbar_3_4.context);
        this._appEl_21.initComponent(this._ToolbarTitle_21_4.context, [], compView_21);
        this._text_22 = this.renderer.createText(null, 'MED MEN', null);
        compView_21.create(this._ToolbarTitle_21_4.context, [[].concat([this._text_22])], null);
        this._text_23 = this.renderer.createText(null, '\n  ', null);
        compView_3.create(this._Navbar_3_4.context, [
            [],
            [].concat([this._el_5]),
            [].concat([this._el_13]),
            [].concat([
                this._text_4,
                this._text_12,
                this._text_20,
                this._el_21,
                this._text_23
            ])
        ], null);
        this._text_24 = this.renderer.createText(this._el_1, '\n\n', null);
        this._text_25 = this.renderer.createText(parentRenderNode, '\n\n\n', null);
        this._el_26 = this.renderer.createElement(parentRenderNode, 'ion-content', null);
        this.renderer.setElementAttribute(this._el_26, 'padding', '');
        this._appEl_26 = new import3.AppElement(26, null, this, this._el_26);
        var compView_26 = import20.viewFactory_Content0(this.viewUtils, this.injector(26), this._appEl_26);
        this._Content_26_4 = new import20.Wrapper_Content(this.parentInjector.get(import21.Config), new import22.ElementRef(this._el_26), this.renderer, this.parentInjector.get(import24.App), this.parentInjector.get(import27.Keyboard), this.parentInjector.get(import28.NgZone), this.parentInjector.get(import23.ViewController, null), this.parentInjector.get(import29.Tabs, null));
        this._appEl_26.initComponent(this._Content_26_4.context, [], compView_26);
        this._text_27 = this.renderer.createText(null, '\n\n', null);
        compView_26.create(this._Content_26_4.context, [
            [],
            [].concat([this._text_27]),
            []
        ], null);
        this._text_28 = this.renderer.createText(parentRenderNode, '\n', null);
        this._expr_0 = import7.UNINITIALIZED;
        this._expr_1 = import7.UNINITIALIZED;
        var disposable_0 = this.renderer.listen(this._el_7, 'click', this.eventHandler(this._handle_click_7_0.bind(this)));
        this._expr_4 = import7.UNINITIALIZED;
        this._expr_6 = import7.UNINITIALIZED;
        var disposable_1 = this.renderer.listen(this._el_15, 'click', this.eventHandler(this._handle_click_15_0.bind(this)));
        this._expr_9 = import7.UNINITIALIZED;
        this._expr_10 = import7.UNINITIALIZED;
        this.init([], [
            this._text_0,
            this._el_1,
            this._text_2,
            this._el_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28
        ], [
            disposable_0,
            disposable_1
        ], []);
        return null;
    };
    _View_InteractionsPage0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === import30.Icon) && (9 === requestNodeIndex))) {
            return this._Icon_9_3.context;
        }
        if (((token === import31.Button) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._Button_7_4.context;
        }
        if (((token === import32.MenuToggle) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._MenuToggle_7_5.context;
        }
        if (((token === import33.ToolbarItem) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 10)))) {
            return this._ToolbarItem_7_6.context;
        }
        if (((token === import33.ToolbarItem) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 11)))) {
            return this._ToolbarItem_5_3.context;
        }
        if (((token === import30.Icon) && (17 === requestNodeIndex))) {
            return this._Icon_17_3.context;
        }
        if (((token === import31.Button) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 18)))) {
            return this._Button_15_4.context;
        }
        if (((token === import33.ToolbarItem) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 19)))) {
            return this._ToolbarItem_13_3.context;
        }
        if (((token === import34.ToolbarTitle) && ((21 <= requestNodeIndex) && (requestNodeIndex <= 22)))) {
            return this._ToolbarTitle_21_4.context;
        }
        if (((token === import35.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 23)))) {
            return this._Navbar_3_4.context;
        }
        if (((token === import25.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 24)))) {
            return this._Header_1_3.context;
        }
        if (((token === import36.Content) && ((26 <= requestNodeIndex) && (requestNodeIndex <= 27)))) {
            return this._Content_26_4.context;
        }
        return notFoundResult;
    };
    _View_InteractionsPage0.prototype.detectChangesInternal = function (throwOnChange) {
        this._Header_1_3.detectChangesInternal(this, this._el_1, throwOnChange);
        this._Navbar_3_4.detectChangesInternal(this, this._el_3, throwOnChange);
        this._ToolbarItem_5_3.detectChangesInternal(this, this._el_5, throwOnChange);
        if (this._Button_7_4.detectChangesInternal(this, this._el_7, throwOnChange)) {
            this._appEl_7.componentView.markAsCheckOnce();
        }
        var currVal_3 = '';
        this._MenuToggle_7_5.check_menuToggle(currVal_3, throwOnChange, false);
        this._MenuToggle_7_5.detectChangesInternal(this, this._el_7, throwOnChange);
        this._ToolbarItem_7_6.detectChangesInternal(this, this._el_7, throwOnChange);
        var currVal_5 = 'menu';
        this._Icon_9_3.check_name(currVal_5, throwOnChange, false);
        this._Icon_9_3.detectChangesInternal(this, this._el_9, throwOnChange);
        this._ToolbarItem_13_3.detectChangesInternal(this, this._el_13, throwOnChange);
        if (this._Button_15_4.detectChangesInternal(this, this._el_15, throwOnChange)) {
            this._appEl_15.componentView.markAsCheckOnce();
        }
        var currVal_8 = 'log-out';
        this._Icon_17_3.check_name(currVal_8, throwOnChange, false);
        this._Icon_17_3.detectChangesInternal(this, this._el_17, throwOnChange);
        if (this._ToolbarTitle_21_4.detectChangesInternal(this, this._el_21, throwOnChange)) {
            this._appEl_21.componentView.markAsCheckOnce();
        }
        if (this._Content_26_4.detectChangesInternal(this, this._el_26, throwOnChange)) {
            this._appEl_26.componentView.markAsCheckOnce();
        }
        this.detectContentChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if (this._query_Button_7_0.dirty) {
                this._query_Button_7_0.reset([this._Button_7_4.context]);
                this._ToolbarItem_7_6.context._buttons = this._query_Button_7_0;
                this._query_Button_7_0.notifyOnChanges();
            }
            if (this._query_Button_5_0.dirty) {
                this._query_Button_5_0.reset([this._Button_7_4.context]);
                this._ToolbarItem_5_3.context._buttons = this._query_Button_5_0;
                this._query_Button_5_0.notifyOnChanges();
            }
            if (this._query_Button_13_0.dirty) {
                this._query_Button_13_0.reset([this._Button_15_4.context]);
                this._ToolbarItem_13_3.context._buttons = this._query_Button_13_0;
                this._query_Button_13_0.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_7_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._Button_15_4.context.ngAfterContentInit();
            }
        }
        var currVal_0 = this._Navbar_3_4.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_0, currVal_0)) {
            this.renderer.setElementProperty(this._el_3, 'hidden', currVal_0);
            this._expr_0 = currVal_0;
        }
        var currVal_1 = this._Navbar_3_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_1, currVal_1)) {
            this.renderer.setElementClass(this._el_3, 'statusbar-padding', currVal_1);
            this._expr_1 = currVal_1;
        }
        var currVal_4 = this._MenuToggle_7_5.context.isHidden;
        if (import4.checkBinding(throwOnChange, this._expr_4, currVal_4)) {
            this.renderer.setElementProperty(this._el_7, 'hidden', currVal_4);
            this._expr_4 = currVal_4;
        }
        var currVal_6 = this._Icon_9_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setElementClass(this._el_9, 'hide', currVal_6);
            this._expr_6 = currVal_6;
        }
        var currVal_9 = this._Icon_17_3.context._hidden;
        if (import4.checkBinding(throwOnChange, this._expr_9, currVal_9)) {
            this.renderer.setElementClass(this._el_17, 'hide', currVal_9);
            this._expr_9 = currVal_9;
        }
        var currVal_10 = this._Content_26_4.context._sbPadding;
        if (import4.checkBinding(throwOnChange, this._expr_10, currVal_10)) {
            this.renderer.setElementClass(this._el_26, 'statusbar-padding', currVal_10);
            this._expr_10 = currVal_10;
        }
        this.detectViewChildrenChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._Navbar_3_4.context.ngAfterViewInit();
            }
        }
    };
    _View_InteractionsPage0.prototype.destroyInternal = function () {
        this._Icon_9_3.context.ngOnDestroy();
        this._Icon_17_3.context.ngOnDestroy();
        this._Content_26_4.context.ngOnDestroy();
    };
    _View_InteractionsPage0.prototype._handle_click_7_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this._MenuToggle_7_5.context.toggle() !== false);
        return (true && pd_0);
    };
    _View_InteractionsPage0.prototype._handle_click_15_0 = function ($event) {
        this.markPathToRootAsCheckOnce();
        var pd_0 = (this.context.logOut() !== false);
        return (true && pd_0);
    };
    return _View_InteractionsPage0;
}(import1.AppView));
export function viewFactory_InteractionsPage0(viewUtils, parentInjector, declarationEl) {
    if ((renderType_InteractionsPage === null)) {
        (renderType_InteractionsPage = viewUtils.createRenderComponentType('', 0, import10.ViewEncapsulation.None, styles_InteractionsPage, {}));
    }
    return new _View_InteractionsPage0(viewUtils, parentInjector, declarationEl);
}
//# sourceMappingURL=interactions.ngfactory.js.map