/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './profile';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from '@angular/core/src/metadata/view';
import * as import10 from '@angular/core/src/linker/component_factory';
import * as import11 from '../../node_modules/ionic-angular/components/toolbar/toolbar.ngfactory';
import * as import12 from '../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import13 from '../../node_modules/ionic-angular/components/toolbar/toolbar-item.ngfactory';
import * as import14 from '@angular/core/src/linker/query_list';
import * as import15 from '../../node_modules/ionic-angular/components/button/button.ngfactory';
import * as import16 from '../../node_modules/ionic-angular/components/menu/menu-toggle.ngfactory';
import * as import17 from '../../node_modules/ionic-angular/components/icon/icon.ngfactory';
import * as import18 from '../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import19 from '../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import20 from 'ionic-angular/config/config';
import * as import21 from '@angular/core/src/linker/element_ref';
import * as import22 from 'ionic-angular/navigation/view-controller';
import * as import23 from 'ionic-angular/components/app/app';
import * as import24 from 'ionic-angular/components/toolbar/toolbar';
import * as import25 from 'ionic-angular/components/menu/menu-controller';
import * as import26 from 'ionic-angular/util/keyboard';
import * as import27 from '@angular/core/src/zone/ng_zone';
import * as import28 from 'ionic-angular/components/tabs/tabs';
import * as import29 from 'ionic-angular/components/icon/icon';
import * as import30 from 'ionic-angular/components/button/button';
import * as import31 from 'ionic-angular/components/menu/menu-toggle';
import * as import32 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import33 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import34 from 'ionic-angular/components/navbar/navbar';
import * as import35 from 'ionic-angular/components/content/content';
export class Wrapper_ProfilePage {
  context:import0.ProfilePage;
  changed:boolean;
  constructor(p0:any) {
    this.changed = false;
    this.context = new import0.ProfilePage(p0);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_ProfilePage_Host:import2.RenderComponentType = (null as any);
class _View_ProfilePage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _ProfilePage_0_4:Wrapper_ProfilePage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ProfilePage_Host0,renderType_ProfilePage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('page-profile',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_ProfilePage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ProfilePage_0_4 = new Wrapper_ProfilePage(this.parentInjector.get(import8.NavController));
    this._appEl_0.initComponent(this._ProfilePage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._ProfilePage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.ProfilePage) && (0 === requestNodeIndex))) { return this._ProfilePage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._ProfilePage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_ProfilePage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_ProfilePage_Host === (null as any))) { (renderType_ProfilePage_Host = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_ProfilePage_Host0(viewUtils,parentInjector,declarationEl);
}
export const ProfilePageNgFactory:import10.ComponentFactory<import0.ProfilePage> = new import10.ComponentFactory<import0.ProfilePage>('page-profile',viewFactory_ProfilePage_Host0,import0.ProfilePage);
const styles_ProfilePage:any[] = ([] as any[]);
var renderType_ProfilePage:import2.RenderComponentType = (null as any);
class _View_ProfilePage0 extends import1.AppView<import0.ProfilePage> {
  _text_0:any;
  _el_1:any;
  _Header_1_3:import11.Wrapper_Header;
  _text_2:any;
  _el_3:any;
  /*private*/ _appEl_3:import3.AppElement;
  _Navbar_3_4:import12.Wrapper_Navbar;
  _text_4:any;
  _el_5:any;
  _ToolbarItem_5_3:import13.Wrapper_ToolbarItem;
  _query_Button_5_0:import14.QueryList<any>;
  _text_6:any;
  _el_7:any;
  /*private*/ _appEl_7:import3.AppElement;
  _Button_7_4:import15.Wrapper_Button;
  _MenuToggle_7_5:import16.Wrapper_MenuToggle;
  _ToolbarItem_7_6:import13.Wrapper_ToolbarItem;
  _query_Button_7_0:import14.QueryList<any>;
  _text_8:any;
  _el_9:any;
  _Icon_9_3:import17.Wrapper_Icon;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  /*private*/ _appEl_13:import3.AppElement;
  _ToolbarTitle_13_4:import18.Wrapper_ToolbarTitle;
  _text_14:any;
  _text_15:any;
  _text_16:any;
  _text_17:any;
  _el_18:any;
  /*private*/ _appEl_18:import3.AppElement;
  _Content_18_4:import19.Wrapper_Content;
  _text_19:any;
  _text_20:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_ProfilePage0,renderType_ProfilePage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._text_0 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._el_1 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_1_3 = new import11.Wrapper_Header(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_1),this.renderer,this.parentInjector.get(import22.ViewController,(null as any)));
    this._text_2 = this.renderer.createText(this._el_1,'\n\n  ',(null as any));
    this._el_3 = this.renderer.createElement(this._el_1,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_3,'class','toolbar');
    this._appEl_3 = new import3.AppElement(3,1,this,this._el_3);
    var compView_3:any = import12.viewFactory_Navbar0(this.viewUtils,this.injector(3),this._appEl_3);
    this._Navbar_3_4 = new import12.Wrapper_Navbar(this.parentInjector.get(import23.App),this.parentInjector.get(import22.ViewController,(null as any)),this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_3),this.renderer);
    this._appEl_3.initComponent(this._Navbar_3_4.context,([] as any[]),compView_3);
    this._text_4 = this.renderer.createText((null as any),'\n  	',(null as any));
    this._el_5 = this.renderer.createElement((null as any),'ion-buttons',(null as any));
    this.renderer.setElementAttribute(this._el_5,'start','');
    this._ToolbarItem_5_3 = new import13.Wrapper_ToolbarItem(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_5),this.renderer,this.parentInjector.get(import24.Toolbar,(null as any)),this._Navbar_3_4.context);
    this._query_Button_5_0 = new import14.QueryList<any>();
    this._text_6 = this.renderer.createText(this._el_5,'\n	  	',(null as any));
    this._el_7 = this.renderer.createElement(this._el_5,'button',(null as any));
    this.renderer.setElementAttribute(this._el_7,'icon-only','');
    this.renderer.setElementAttribute(this._el_7,'ion-button','');
    this.renderer.setElementAttribute(this._el_7,'menuToggle','');
    this._appEl_7 = new import3.AppElement(7,5,this,this._el_7);
    var compView_7:any = import15.viewFactory_Button0(this.viewUtils,this.injector(7),this._appEl_7);
    this._Button_7_4 = new import15.Wrapper_Button('','',this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_7),this.renderer);
    this._MenuToggle_7_5 = new import16.Wrapper_MenuToggle(this.parentInjector.get(import25.MenuController),new import21.ElementRef(this._el_7),this.parentInjector.get(import22.ViewController,(null as any)),this._Navbar_3_4.context);
    this._ToolbarItem_7_6 = new import13.Wrapper_ToolbarItem(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_7),this.renderer,this.parentInjector.get(import24.Toolbar,(null as any)),this._Navbar_3_4.context);
    this._query_Button_7_0 = new import14.QueryList<any>();
    this._appEl_7.initComponent(this._Button_7_4.context,([] as any[]),compView_7);
    this._text_8 = this.renderer.createText((null as any),'\n	  		',(null as any));
    this._el_9 = this.renderer.createElement((null as any),'ion-icon',(null as any));
    this.renderer.setElementAttribute(this._el_9,'name','menu');
    this.renderer.setElementAttribute(this._el_9,'role','img');
    this._Icon_9_3 = new import17.Wrapper_Icon(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_9),this.renderer);
    this._text_10 = this.renderer.createText((null as any),'\n	  	',(null as any));
      compView_7.create(this._Button_7_4.context,[([] as any[]).concat([
        this._text_8,
        this._el_9,
        this._text_10
      ]
    )],(null as any));
    this._text_11 = this.renderer.createText(this._el_5,'\n	  ',(null as any));
    this._text_12 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_13 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_13 = new import3.AppElement(13,3,this,this._el_13);
    var compView_13:any = import18.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(13),this._appEl_13);
    this._ToolbarTitle_13_4 = new import18.Wrapper_ToolbarTitle(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_13),this.renderer,this.parentInjector.get(import24.Toolbar,(null as any)),this._Navbar_3_4.context);
    this._appEl_13.initComponent(this._ToolbarTitle_13_4.context,([] as any[]),compView_13);
    this._text_14 = this.renderer.createText((null as any),'profile',(null as any));
    compView_13.create(this._ToolbarTitle_13_4.context,[([] as any[]).concat([this._text_14])],(null as any));
    this._text_15 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_3.create(this._Navbar_3_4.context,[
      ([] as any[]),
      ([] as any[]).concat([this._el_5]),
      ([] as any[]),
      ([] as any[]).concat([
        this._text_4,
        this._text_12,
        this._el_13,
        this._text_15
      ]
      )
    ]
    ,(null as any));
    this._text_16 = this.renderer.createText(this._el_1,'\n\n',(null as any));
    this._text_17 = this.renderer.createText(parentRenderNode,'\n\n\n',(null as any));
    this._el_18 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_18,'padding','');
    this._appEl_18 = new import3.AppElement(18,(null as any),this,this._el_18);
    var compView_18:any = import19.viewFactory_Content0(this.viewUtils,this.injector(18),this._appEl_18);
    this._Content_18_4 = new import19.Wrapper_Content(this.parentInjector.get(import20.Config),new import21.ElementRef(this._el_18),this.renderer,this.parentInjector.get(import23.App),this.parentInjector.get(import26.Keyboard),this.parentInjector.get(import27.NgZone),this.parentInjector.get(import22.ViewController,(null as any)),this.parentInjector.get(import28.Tabs,(null as any)));
    this._appEl_18.initComponent(this._Content_18_4.context,([] as any[]),compView_18);
    this._text_19 = this.renderer.createText((null as any),'\n\n',(null as any));
    compView_18.create(this._Content_18_4.context,[
      ([] as any[]),
      ([] as any[]).concat([this._text_19]),
      ([] as any[])
    ]
    ,(null as any));
    this._text_20 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_7,'click',this.eventHandler(this._handle_click_7_0.bind(this)));
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
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
      this._text_15,
      this._text_16,
      this._text_17,
      this._el_18,
      this._text_19,
      this._text_20
    ]
    ,[disposable_0],([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import29.Icon) && (9 === requestNodeIndex))) { return this._Icon_9_3.context; }
    if (((token === import30.Button) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._Button_7_4.context; }
    if (((token === import31.MenuToggle) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._MenuToggle_7_5.context; }
    if (((token === import32.ToolbarItem) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 10)))) { return this._ToolbarItem_7_6.context; }
    if (((token === import32.ToolbarItem) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._ToolbarItem_5_3.context; }
    if (((token === import33.ToolbarTitle) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._ToolbarTitle_13_4.context; }
    if (((token === import34.Navbar) && ((3 <= requestNodeIndex) && (requestNodeIndex <= 15)))) { return this._Navbar_3_4.context; }
    if (((token === import24.Header) && ((1 <= requestNodeIndex) && (requestNodeIndex <= 16)))) { return this._Header_1_3.context; }
    if (((token === import35.Content) && ((18 <= requestNodeIndex) && (requestNodeIndex <= 19)))) { return this._Content_18_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._Header_1_3.detectChangesInternal(this,this._el_1,throwOnChange);
    this._Navbar_3_4.detectChangesInternal(this,this._el_3,throwOnChange);
    this._ToolbarItem_5_3.detectChangesInternal(this,this._el_5,throwOnChange);
    if (this._Button_7_4.detectChangesInternal(this,this._el_7,throwOnChange)) { this._appEl_7.componentView.markAsCheckOnce(); }
    const currVal_3:any = '';
    this._MenuToggle_7_5.check_menuToggle(currVal_3,throwOnChange,false);
    this._MenuToggle_7_5.detectChangesInternal(this,this._el_7,throwOnChange);
    this._ToolbarItem_7_6.detectChangesInternal(this,this._el_7,throwOnChange);
    const currVal_5:any = 'menu';
    this._Icon_9_3.check_name(currVal_5,throwOnChange,false);
    this._Icon_9_3.detectChangesInternal(this,this._el_9,throwOnChange);
    if (this._ToolbarTitle_13_4.detectChangesInternal(this,this._el_13,throwOnChange)) { this._appEl_13.componentView.markAsCheckOnce(); }
    if (this._Content_18_4.detectChangesInternal(this,this._el_18,throwOnChange)) { this._appEl_18.componentView.markAsCheckOnce(); }
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
      if ((this.numberOfChecks === 0)) { this._Button_7_4.context.ngAfterContentInit(); }
    }
    const currVal_0:any = this._Navbar_3_4.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setElementProperty(this._el_3,'hidden',currVal_0);
      this._expr_0 = currVal_0;
    }
    const currVal_1:any = this._Navbar_3_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementClass(this._el_3,'statusbar-padding',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_4:any = this._MenuToggle_7_5.context.isHidden;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementProperty(this._el_7,'hidden',currVal_4);
      this._expr_4 = currVal_4;
    }
    const currVal_6:any = this._Icon_9_3.context._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setElementClass(this._el_9,'hide',currVal_6);
      this._expr_6 = currVal_6;
    }
    const currVal_7:any = this._Content_18_4.context._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementClass(this._el_18,'statusbar-padding',currVal_7);
      this._expr_7 = currVal_7;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_3_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Icon_9_3.context.ngOnDestroy();
    this._Content_18_4.context.ngOnDestroy();
  }
  private _handle_click_7_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this._MenuToggle_7_5.context.toggle()) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_ProfilePage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.ProfilePage> {
  if ((renderType_ProfilePage === (null as any))) { (renderType_ProfilePage = viewUtils.createRenderComponentType('',0,import9.ViewEncapsulation.None,styles_ProfilePage,{})); }
  return new _View_ProfilePage0(viewUtils,parentInjector,declarationEl);
}