!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base","./grid.common"],e):e(jQuery)}(function(D){"use strict";D.jgrid.inlineEdit=D.jgrid.inlineEdit||{},D.jgrid.extend({editRow:function(u,e,t,i,r,a,n,o,d){var p={},s=D.makeArray(arguments).slice(1),f=this[0];return"object"===D.type(s[0])?p=s[0]:(void 0!==e&&(p.keys=e),D.isFunction(t)&&(p.oneditfunc=t),D.isFunction(i)&&(p.successfunc=i),void 0!==r&&(p.url=r),void 0!==a&&(p.extraparam=a),D.isFunction(n)&&(p.aftersavefunc=n),D.isFunction(o)&&(p.errorfunc=o),D.isFunction(d)&&(p.afterrestorefunc=d)),p=D.extend(!0,{keys:!1,keyevent:"keydown",onEnter:null,onEscape:null,oneditfunc:null,successfunc:null,url:null,extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,mtype:"POST",focusField:!0,saveui:"enable",savetext:D.jgrid.getRegional(f,"defaults.savetext")},D.jgrid.inlineEdit,p),this.each(function(){var a,n,t,o,e,d=0,s=null,l={},c=D(this).jqGrid("getStyleUI",f.p.styleUI+".inlinedit","inputClass",!0);f.grid&&!1!==(t=D(f).jqGrid("getInd",u,!0))&&(f.p.beforeAction=!0,void 0===(e=D.isFunction(p.beforeEditRow)?p.beforeEditRow.call(f,p,u):void 0)&&(e=!0),e?"0"!==(D(t).attr("editable")||"0")||D(t).hasClass("not-editable-row")||(o=f.p.colModel,D(t).children('td[role="gridcell"]').each(function(t){a=o[t].name;var e,i,r=!0===f.p.treeGrid&&a===f.p.ExpandColumn;if(r)n=D("span:first",this).html();else try{n=D.unformat.call(f,this,{rowId:u,colModel:o[t]},t)}catch(e){n=o[t].edittype&&"textarea"===o[t].edittype?D(this).text():D(this).html()}"cb"!==a&&"subgrid"!==a&&"rn"!==a&&(f.p.autoencode&&(n=D.jgrid.htmlDecode(n)),!0===o[t].editable&&(l[a]=n,null===s&&(s=t),(r?D("span:first",this):D(this)).html(""),e=D.extend({},o[t].editoptions||{},{id:u+"_"+a,name:a,rowId:u,oper:"edit",module:"inline"}),o[t].edittype||(o[t].edittype="text"),("&nbsp;"===n||"&#160;"===n||null!==n&&1===n.length&&160===n.charCodeAt(0))&&(n=""),i=D.jgrid.createEl.call(f,o[t].edittype,e,n,!0,D.extend({},D.jgrid.ajaxOptions,f.p.ajaxSelectOptions||{})),D(i).addClass("editable inline-edit-cell"),-1<D.inArray(o[t].edittype,["text","textarea","password","select"])&&D(i).addClass(c),(r?D("span:first",this):D(this)).append(i),D.jgrid.bindEv.call(f,i,e),"select"===o[t].edittype&&void 0!==o[t].editoptions&&!0===o[t].editoptions.multiple&&void 0===o[t].editoptions.dataUrl&&D.jgrid.msie()&&D(i).width(D(i).width()),d++))}),0<d&&(l.id=u,f.p.savedRow.push(l),D(t).attr("editable","1"),p.focusField&&("number"==typeof p.focusField&&parseInt(p.focusField,10)<=o.length&&(s=p.focusField),setTimeout(function(){var e=D("td:eq("+s+") :input:visible",t).not(":disabled");0<e.length&&e.focus()},0)),!0===p.keys&&D(t).on(p.keyevent,function(e){if(27===e.keyCode){if(D.isFunction(p.onEscape))return p.onEscape.call(f,u,p,e),!0;if(D(f).jqGrid("restoreRow",u,p),f.p.inlineNav)try{D(f).jqGrid("showAddEditButtons")}catch(e){}return!1}if(13===e.keyCode){if("TEXTAREA"===e.target.tagName)return!0;if(D.isFunction(p.onEnter))return p.onEnter.call(f,u,p,e),!0;if(D(f).jqGrid("saveRow",u,p)&&f.p.inlineNav)try{D(f).jqGrid("showAddEditButtons")}catch(e){}return!1}}),D(f).triggerHandler("jqGridInlineEditRow",[u,p]),D.isFunction(p.oneditfunc)&&p.oneditfunc.call(f,u))):f.p.beforeAction=!1)})},saveRow:function(n,e,t,i,r,a,o){var d=D.makeArray(arguments).slice(1),s={},l=this[0];"object"===D.type(d[0])?s=d[0]:(D.isFunction(e)&&(s.successfunc=e),void 0!==t&&(s.url=t),void 0!==i&&(s.extraparam=i),D.isFunction(r)&&(s.aftersavefunc=r),D.isFunction(a)&&(s.errorfunc=a),D.isFunction(o)&&(s.afterrestorefunc=o)),s=D.extend(!0,{successfunc:null,url:null,extraparam:{},aftersavefunc:null,errorfunc:null,afterrestorefunc:null,restoreAfterError:!0,mtype:"POST",saveui:"enable",savetext:D.jgrid.getRegional(l,"defaults.savetext")},D.jgrid.inlineEdit,s);var c,u,p,f,v=!1,g={},m={},w={},j=!1,h=D.trim(D(l).jqGrid("getStyleUI",l.p.styleUI+".common","error",!0));if(!l.grid)return v;if(!1===(f=D(l).jqGrid("getInd",n,!0)))return v;var y,q,x,R,b,I=D.jgrid.getRegional(l,"errors"),_=D.jgrid.getRegional(l,"edit"),a=D.isFunction(s.beforeSaveRow)?s.beforeSaveRow.call(l,s,n):void 0;if(void 0===a&&(a=!0),a){if(o=D(f).attr("editable"),s.url=s.url||l.p.editurl,"1"===o){if(D(f).children('td[role="gridcell"]').each(function(e){if(y=l.p.colModel[e],c=y.name,x="","cb"!==c&&"subgrid"!==c&&!0===y.editable&&"rn"!==c&&!D(this).hasClass("not-editable-cell")){switch(y.edittype){case"checkbox":var t=["Yes","No"];y.editoptions&&y.editoptions.value&&(t=y.editoptions.value.split(":")),g[c]=D("input",this).is(":checked")?t[0]:t[1],x=D("input",this);break;case"text":case"password":case"textarea":case"button":g[c]=D("input, textarea",this).val(),x=D("input, textarea",this);break;case"select":var i;y.editoptions.multiple?(t=D("select",this),i=[],g[c]=D(t).val(),g[c]?g[c]=g[c].join(","):g[c]="",D("select option:selected",this).each(function(e,t){i[e]=D(t).text()}),m[c]=i.join(",")):(g[c]=D("select option:selected",this).val(),m[c]=D("select option:selected",this).text()),y.formatter&&"select"===y.formatter&&(m={}),x=D("select",this);break;case"custom":try{if(!y.editoptions||!D.isFunction(y.editoptions.custom_value))throw"e1";if(g[c]=y.editoptions.custom_value.call(l,D(".customelement",this),"get"),void 0===g[c])throw"e2"}catch(e){"e1"===e?D.jgrid.info_dialog(I.errcap,"function 'custom_value' "+_.msg.nodefined,_.bClose,{styleUI:l.p.styleUI}):D.jgrid.info_dialog(I.errcap,e.message,_.bClose,{styleUI:l.p.styleUI})}}if(!1===(p=D.jgrid.checkValues.call(l,g[c],e))[0])return q=e,!1;l.p.autoencode&&(g[c]=D.jgrid.htmlEncode(g[c])),"clientArray"!==s.url&&y.editoptions&&!0===y.editoptions.NullIfEmpty&&""===g[c]&&(w[c]="null",j=!0)}}),!1===p[0]){try{D.isFunction(l.p.validationCell)?l.p.validationCell.call(l,x,p[1],f.rowIndex,q):(R=D(l).jqGrid("getGridRowById",n),b=D.jgrid.findPos(R),D.jgrid.info_dialog(I.errcap,p[1],_.bClose,{left:b[0],top:b[1]+D(R).outerHeight(),styleUI:l.p.styleUI,onClose:function(){0<=q&&D("#"+n+"_"+l.p.colModel[q].name).focus()}}))}catch(e){alert(p[1])}return v}var a=l.p.prmNames,G=n,o=!1===l.p.keyName?a.id:l.p.keyName;if(g&&(g[a.oper]=a.editoper,void 0===g[o]||""===g[o]?g[o]=n:f.id!==l.p.idPrefix+g[o]&&(a=D.jgrid.stripPref(l.p.idPrefix,n),void 0!==l.p._index[a]&&(l.p._index[g[o]]=l.p._index[a],delete l.p._index[a]),n=l.p.idPrefix+g[o],D(f).attr("id",n),l.p.selrow===G&&(l.p.selrow=n),!D.isArray(l.p.selarrrow)||0<=(a=D.inArray(G,l.p.selarrrow))&&(l.p.selarrrow[a]=n),l.p.multiselect&&(C="jqg_"+l.p.id+"_"+n,D("input.cbox",f).attr("id",C).attr("name",C))),void 0===l.p.inlineData&&(l.p.inlineData={}),g=D.extend({},g,l.p.inlineData,s.extraparam)),"clientArray"===s.url){g=D.extend({},g,m),l.p.autoencode&&D.each(g,function(e,t){g[e]=D.jgrid.htmlDecode(t)}),g=D.isFunction(l.p.serializeRowData)?l.p.serializeRowData.call(l,g):g;var A,C=D(l).jqGrid("setRowData",n,g);for(D(f).attr("editable","0"),A=0;A<l.p.savedRow.length;A++)if(String(l.p.savedRow[A].id)===String(G)){u=A;break}D(l).triggerHandler("jqGridInlineAfterSaveRow",[n,C,g,s]),D.isFunction(s.aftersavefunc)&&s.aftersavefunc.call(l,n,C,g,s),0<=u&&l.p.savedRow.splice(u,1),v=!0,D(f).removeClass("jqgrid-new-row").off("keydown")}else D(l).jqGrid("progressBar",{method:"show",loadtype:s.saveui,htmlcontent:s.savetext}),(w=D.extend({},g,w))[o]=D.jgrid.stripPref(l.p.idPrefix,w[o]),D.ajax(D.extend({url:s.url,data:D.isFunction(l.p.serializeRowData)?l.p.serializeRowData.call(l,w):w,type:s.mtype,async:!1,complete:function(e,t){if(D(l).jqGrid("progressBar",{method:"hide",loadtype:s.saveui,htmlcontent:s.savetext}),"success"===t){var i,r=!0,a=D(l).triggerHandler("jqGridInlineSuccessSaveRow",[e,n,s]);if(D.isArray(a)||(a=[!0,w]),a[0]&&D.isFunction(s.successfunc)&&(a=s.successfunc.call(l,e)),D.isArray(a)?(r=a[0],g=a[1]||g):r=a,!0===r){for(l.p.autoencode&&D.each(g,function(e,t){g[e]=D.jgrid.htmlDecode(t)}),j&&D.each(g,function(e){"null"===g[e]&&(g[e]="")}),g=D.extend({},g,m),D(l).jqGrid("setRowData",n,g),D(f).attr("editable","0"),i=0;i<l.p.savedRow.length;i++)if(String(l.p.savedRow[i].id)===String(n)){u=i;break}D(l).triggerHandler("jqGridInlineAfterSaveRow",[n,e,g,s]),D.isFunction(s.aftersavefunc)&&s.aftersavefunc.call(l,n,e,g,s),0<=u&&l.p.savedRow.splice(u,1),v=!0,D(f).removeClass("jqgrid-new-row").off("keydown")}else D(l).triggerHandler("jqGridInlineErrorSaveRow",[n,e,t,null,s]),D.isFunction(s.errorfunc)&&s.errorfunc.call(l,n,e,t,null),!0===s.restoreAfterError&&D(l).jqGrid("restoreRow",n,s)}},error:function(e,t,i){if(D("#lui_"+D.jgrid.jqID(l.p.id)).hide(),D(l).triggerHandler("jqGridInlineErrorSaveRow",[n,e,t,i,s]),D.isFunction(s.errorfunc))s.errorfunc.call(l,n,e,t,i);else{var r=e.responseText||e.statusText;try{D.jgrid.info_dialog(I.errcap,'<div class="'+h+'">'+r+"</div>",_.bClose,{buttonalign:"right",styleUI:l.p.styleUI})}catch(e){alert(r)}}!0===s.restoreAfterError&&D(l).jqGrid("restoreRow",n,s)}},D.jgrid.ajaxOptions,l.p.ajaxRowOptions||{}))}return v}},restoreRow:function(o,e){var t=D.makeArray(arguments).slice(1),d={};return"object"===D.type(t[0])?d=t[0]:D.isFunction(e)&&(d.afterrestorefunc=e),d=D.extend(!0,{},D.jgrid.inlineEdit,d),this.each(function(){var e,t,i=this,r=-1,a={};if(i.grid&&!1!==(e=D(i).jqGrid("getInd",o,!0))){var n=D.isFunction(d.beforeCancelRow)?d.beforeCancelRow.call(i,d,o):void 0;if(void 0===n&&(n=!0),n){for(t=0;t<i.p.savedRow.length;t++)if(String(i.p.savedRow[t].id)===String(o)){r=t;break}if(0<=r){if(D.isFunction(D.fn.datepicker))try{D("input.hasDatepicker","#"+D.jgrid.jqID(e.id)).datepicker("hide")}catch(e){}D.each(i.p.colModel,function(){i.p.savedRow[r].hasOwnProperty(this.name)&&(a[this.name]=i.p.savedRow[r][this.name])}),D(i).jqGrid("setRowData",o,a),D(e).attr("editable","0").off("keydown"),i.p.savedRow.splice(r,1),D("#"+D.jgrid.jqID(o),"#"+D.jgrid.jqID(i.p.id)).hasClass("jqgrid-new-row")&&setTimeout(function(){D(i).jqGrid("delRowData",o),D(i).jqGrid("showAddEditButtons")},0)}D(i).triggerHandler("jqGridInlineAfterRestoreRow",[o]),D.isFunction(d.afterrestorefunc)&&d.afterrestorefunc.call(i,o)}}})},addRow:function(r){return r=D.extend(!0,{rowID:null,initdata:{},position:"first",useDefValues:!0,useFormatter:!1,addRowParams:{extraparam:{}}},r||{}),this.each(function(){var t,e,i;this.grid&&((t=this).p.beforeAction=!0,void 0===(i=D.isFunction(r.beforeAddRow)?r.beforeAddRow.call(t,r.addRowParams):void 0)&&(i=!0),i?(r.rowID=D.isFunction(r.rowID)?r.rowID.call(t,r):null!=r.rowID?r.rowID:D.jgrid.randId(),!0===r.useDefValues&&D(t.p.colModel).each(function(){var e;this.editoptions&&this.editoptions.defaultValue&&(e=this.editoptions.defaultValue,e=D.isFunction(e)?e.call(t):e,r.initdata[this.name]=e)}),D(t).jqGrid("addRowData",r.rowID,r.initdata,r.position),r.rowID=t.p.idPrefix+r.rowID,D("#"+D.jgrid.jqID(r.rowID),"#"+D.jgrid.jqID(t.p.id)).addClass("jqgrid-new-row"),r.useFormatter?D("#"+D.jgrid.jqID(r.rowID)+" .ui-inline-edit","#"+D.jgrid.jqID(t.p.id)).click():(i=(e=t.p.prmNames).oper,r.addRowParams.extraparam[i]=e.addoper,D(t).jqGrid("editRow",r.rowID,r.addRowParams),D(t).jqGrid("setSelection",r.rowID))):t.p.beforeAction=!1)})},inlineNav:function(n,o){var d=this[0],s=D.jgrid.getRegional(d,"nav"),e=D.jgrid.styleUI[d.p.styleUI].inlinedit;return o=D.extend(!0,{edit:!0,editicon:e.icon_edit_nav,add:!0,addicon:e.icon_add_nav,save:!0,saveicon:e.icon_save_nav,cancel:!0,cancelicon:e.icon_cancel_nav,addParams:{addRowParams:{extraparam:{}}},editParams:{},restoreAfterSelect:!0,saveAfterSelect:!1},s,o||{}),this.each(function(){if(this.grid&&!this.p.inlineNav){var a=D.jgrid.jqID(d.p.id),t=D.trim(D(d).jqGrid("getStyleUI",d.p.styleUI+".common","disabled",!0));if(d.p.navGrid||D(d).jqGrid("navGrid",n,{refresh:!1,edit:!1,add:!1,del:!1,search:!1,view:!1}),D(d).data("inlineNav")||D(d).data("inlineNav",o),d.p.force_regional&&(o=D.extend(o,s)),(d.p.inlineNav=!0)===o.addParams.useFormatter)for(var e,i=d.p.colModel,r=0;r<i.length;r++)if(i[r].formatter&&"actions"===i[r].formatter){i[r].formatoptions&&(e=D.extend({keys:!1,onEdit:null,onSuccess:null,afterSave:null,onError:null,afterRestore:null,extraparam:{},url:null},i[r].formatoptions),o.addParams.addRowParams={keys:e.keys,oneditfunc:e.onEdit,successfunc:e.onSuccess,url:e.url,extraparam:e.extraparam,aftersavefunc:e.afterSave,errorfunc:e.onError,afterrestorefunc:e.afterRestore});break}o.add&&D(d).jqGrid("navButtonAdd",n,{caption:o.addtext,title:o.addtitle,buttonicon:o.addicon,id:d.p.id+"_iladd",internal:!0,onClickButton:function(){void 0===d.p.beforeAction&&(d.p.beforeAction=!0),D(d).jqGrid("addRow",o.addParams),!o.addParams.useFormatter&&d.p.beforeAction&&(D("#"+a+"_ilsave").removeClass(t),D("#"+a+"_ilcancel").removeClass(t),D("#"+a+"_iladd").addClass(t),D("#"+a+"_iledit").addClass(t))}}),o.edit&&D(d).jqGrid("navButtonAdd",n,{caption:o.edittext,title:o.edittitle,buttonicon:o.editicon,id:d.p.id+"_iledit",internal:!0,onClickButton:function(){var e=D(d).jqGrid("getGridParam","selrow");e?(void 0===d.p.beforeAction&&(d.p.beforeAction=!0),D(d).jqGrid("editRow",e,o.editParams),d.p.beforeAction&&(D("#"+a+"_ilsave").removeClass(t),D("#"+a+"_ilcancel").removeClass(t),D("#"+a+"_iladd").addClass(t),D("#"+a+"_iledit").addClass(t))):(D.jgrid.viewModal("#alertmod_"+a,{gbox:"#gbox_"+a,jqm:!0}),D("#jqg_alrt").focus())}}),o.save&&(D(d).jqGrid("navButtonAdd",n,{caption:o.savetext||"",title:o.savetitle||"Save row",buttonicon:o.saveicon,id:d.p.id+"_ilsave",internal:!0,onClickButton:function(){var e,t,i,r=d.p.savedRow[0].id;r?(t=(e=d.p.prmNames).oper,i=o.editParams,D("#"+D.jgrid.jqID(r),"#"+a).hasClass("jqgrid-new-row")?(o.addParams.addRowParams.extraparam[t]=e.addoper,i=o.addParams.addRowParams):(o.editParams.extraparam||(o.editParams.extraparam={}),o.editParams.extraparam[t]=e.editoper),D(d).jqGrid("saveRow",r,i)&&D(d).jqGrid("showAddEditButtons")):(D.jgrid.viewModal("#alertmod_"+a,{gbox:"#gbox_"+a,jqm:!0}),D("#jqg_alrt").focus())}}),D("#"+a+"_ilsave").addClass(t)),o.cancel&&(D(d).jqGrid("navButtonAdd",n,{caption:o.canceltext||"",title:o.canceltitle||"Cancel row editing",buttonicon:o.cancelicon,id:d.p.id+"_ilcancel",internal:!0,onClickButton:function(){var e=d.p.savedRow[0].id,t=o.editParams;e?(D("#"+D.jgrid.jqID(e),"#"+a).hasClass("jqgrid-new-row")&&(t=o.addParams.addRowParams),D(d).jqGrid("restoreRow",e,t),D(d).jqGrid("showAddEditButtons")):(D.jgrid.viewModal("#alertmod",{gbox:"#gbox_"+a,jqm:!0}),D("#jqg_alrt").focus())}}),D("#"+a+"_ilcancel").addClass(t)),!0!==o.restoreAfterSelect&&!0!==o.saveAfterSelect||D(d).on("jqGridBeforeSelectRow.inlineNav",function(e,t){0<d.p.savedRow.length&&!0===d.p.inlineNav&&t!==d.p.selrow&&null!==d.p.selrow&&(t=!0,d.p.selrow===o.addParams.rowID?D(d).jqGrid("delRowData",d.p.selrow):!0===o.restoreAfterSelect?D(d).jqGrid("restoreRow",d.p.selrow,o.editParams):t=D(d).jqGrid("saveRow",d.p.selrow,o.editParams),t&&D(d).jqGrid("showAddEditButtons"))})}})},showAddEditButtons:function(){return this.each(function(){var e,t;this.grid&&(e=D.jgrid.jqID(this.p.id),t=D.trim(D(this).jqGrid("getStyleUI",this.p.styleUI+".common","disabled",!0)),D("#"+e+"_ilsave").addClass(t),D("#"+e+"_ilcancel").addClass(t),D("#"+e+"_iladd").removeClass(t),D("#"+e+"_iledit").removeClass(t))})},showSaveCancelButtons:function(){return this.each(function(){var e,t;this.grid&&(e=D.jgrid.jqID(this.p.id),t=D.trim(D(this).jqGrid("getStyleUI",this.p.styleUI+".common","disabled",!0)),D("#"+e+"_ilsave").removeClass(t),D("#"+e+"_ilcancel").removeClass(t),D("#"+e+"_iladd").addClass(t),D("#"+e+"_iledit").addClass(t))})}})});