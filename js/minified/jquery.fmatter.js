!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base"],e):e(jQuery)}(function(v){"use strict";v.fmatter={},v.extend(v.fmatter,{isBoolean:function(e){return"boolean"==typeof e},isObject:function(e){return e&&("object"==typeof e||v.isFunction(e))||!1},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e&&isFinite(e)},isValue:function(e){return this.isObject(e)||this.isString(e)||this.isNumber(e)||this.isBoolean(e)},isEmpty:function(e){return!(!this.isString(e)&&this.isValue(e))&&(!this.isValue(e)||""===(e=v.trim(e).replace(/\&nbsp\;/gi,"").replace(/\&#160\;/gi,"")))}}),v.fn.fmatter=function(e,t,i,r,o){var n=t;i=v.extend({},v.jgrid.getRegional(this,"formatter"),i);try{n=v.fn.fmatter[e].call(this,t,i,r,o)}catch(e){}return n},v.fmatter.util={NumberFormat:function(e,t){if(v.fmatter.isNumber(e)||(e*=1),v.fmatter.isNumber(e)){var i=e<0,r=String(e),o=t.decimalSeparator||".";if(v.fmatter.isNumber(t.decimalPlaces)){var n=t.decimalPlaces,a=(r=String(Number(Math.round(e+"e"+n)+"e-"+n))).lastIndexOf(".");if(0<n)for(a<0?a=(r+=o).length-1:"."!==o&&(r=r.replace(".",o));r.length-1-a<n;)r+="0"}if(t.thousandsSeparator){var l=t.thousandsSeparator;a=-1<(a=r.lastIndexOf(o))?a:r.length;for(var d=r.substring(a),s=-1,f=a;0<f;f--)++s%3==0&&f!==a&&(!i||1<f)&&(d=l+d),d=r.charAt(f-1)+d;r=d}return r=t.prefix?t.prefix+r:r,r=t.suffix?r+t.suffix:r}return e}},v.fn.fmatter.defaultFormat=function(e,t){return v.fmatter.isValue(e)&&""!==e?e:t.defaultValue||"&#160;"},v.fn.fmatter.email=function(e,t){return v.fmatter.isEmpty(e)?v.fn.fmatter.defaultFormat(e,t):'<a href="mailto:'+e+'">'+e+"</a>"},v.fn.fmatter.checkbox=function(e,t){var i=v.extend({},t.checkbox);return void 0!==t.colModel&&void 0!==t.colModel.formatoptions&&(i=v.extend({},i,t.colModel.formatoptions)),t=!0===i.disabled?'disabled="disabled"':"",!v.fmatter.isEmpty(e)&&void 0!==e||(e=v.fn.fmatter.defaultFormat(e,i)),'<input type="checkbox" '+((e=((e=String(e))+"").toLowerCase()).search(/(false|f|0|no|n|off|undefined)/i)<0?" checked='checked' ":"")+' value="'+e+'" offval="no" '+t+"/>"},v.fn.fmatter.link=function(e,t){var i={target:t.target},r="";return void 0!==t.colModel&&void 0!==t.colModel.formatoptions&&(i=v.extend({},i,t.colModel.formatoptions)),i.target&&(r="target="+i.target),v.fmatter.isEmpty(e)?v.fn.fmatter.defaultFormat(e,t):"<a "+r+' href="'+e+'">'+e+"</a>"},v.fn.fmatter.showlink=function(e,t){var i={baseLinkUrl:t.baseLinkUrl,showAction:t.showAction,addParam:t.addParam||"",target:t.target,idName:t.idName},r="";return void 0!==t.colModel&&void 0!==t.colModel.formatoptions&&(i=v.extend({},i,t.colModel.formatoptions)),i.target&&(r="target="+i.target),i=i.baseLinkUrl+i.showAction+"?"+i.idName+"="+t.rowId+i.addParam,v.fmatter.isString(e)||v.fmatter.isNumber(e)?"<a "+r+' href="'+i+'">'+e+"</a>":v.fn.fmatter.defaultFormat(e,t)},v.fn.fmatter.integer=function(e,t){var i=v.extend({},t.integer);return void 0!==t.colModel&&void 0!==t.colModel.formatoptions&&(i=v.extend({},i,t.colModel.formatoptions)),v.fmatter.isEmpty(e)?i.defaultValue:v.fmatter.util.NumberFormat(e,i)},v.fn.fmatter.number=function(e,t){var i=v.extend({},t.number);return void 0!==t.colModel&&void 0!==t.colModel.formatoptions&&(i=v.extend({},i,t.colModel.formatoptions)),v.fmatter.isEmpty(e)?i.defaultValue:v.fmatter.util.NumberFormat(e,i)},v.fn.fmatter.currency=function(e,t){var i=v.extend({},t.currency);return void 0!==t.colModel&&void 0!==t.colModel.formatoptions&&(i=v.extend({},i,t.colModel.formatoptions)),v.fmatter.isEmpty(e)?i.defaultValue:v.fmatter.util.NumberFormat(e,i)},v.fn.fmatter.date=function(e,t,i,r){var o=v.extend({},t.date);return void 0!==t.colModel&&void 0!==t.colModel.formatoptions&&(o=v.extend({},o,t.colModel.formatoptions)),!o.reformatAfterEdit&&"edit"===r||v.fmatter.isEmpty(e)?v.fn.fmatter.defaultFormat(e,t):v.jgrid.parseDate.call(this,o.srcformat,e,o.newformat,o)},v.fn.fmatter.select=function(e,t){e=String(e);var i,r,o=!1,n=[];if(void 0!==t.colModel.formatoptions?(o=t.colModel.formatoptions.value,i=void 0===t.colModel.formatoptions.separator?":":t.colModel.formatoptions.separator,r=void 0===t.colModel.formatoptions.delimiter?";":t.colModel.formatoptions.delimiter):void 0!==t.colModel.editoptions&&(o=t.colModel.editoptions.value,i=void 0===t.colModel.editoptions.separator?":":t.colModel.editoptions.separator,r=void 0===t.colModel.editoptions.delimiter?";":t.colModel.editoptions.delimiter),o){var a,l=!0==(null!=t.colModel.editoptions&&!0===t.colModel.editoptions.multiple),d=[];if(l&&(d=e.split(","),d=v.map(d,function(e){return v.trim(e)})),v.fmatter.isString(o)){for(var s=o.split(r),f=0,c=0;c<s.length;c++)if(2<(a=s[c].split(i)).length&&(a[1]=v.map(a,function(e,t){if(0<t)return e}).join(i)),l)-1<v.inArray(a[0],d)&&(n[f]=a[1],f++);else if(v.trim(a[0])===v.trim(e)){n[0]=a[1];break}}else v.fmatter.isObject(o)&&(l?n=v.map(d,function(e){return o[e]}):n[0]=o[e]||"")}return""===(e=n.join(", "))?v.fn.fmatter.defaultFormat(e,t):e},v.fn.fmatter.rowactions=function(e){function t(e){v.isFunction(s.afterRestore)&&s.afterRestore.call(a,e),d.find("div.ui-inline-edit,div.ui-inline-del").show(),d.find("div.ui-inline-save,div.ui-inline-cancel").hide()}var i=v(this).closest("tr.jqgrow"),r=i.attr("id"),o=v(this).closest("table.ui-jqgrid-btable").attr("id").replace(/_frozen([^_]*)$/,"$1"),n=v("#"+o),a=n[0],l=a.p,o=l.colModel[v.jgrid.getCellIndex(this)],d=o.frozen?v("tr#"+r+" td:eq("+v.jgrid.getCellIndex(this)+") > div",n):v(this).parent(),s={extraparam:{}};void 0!==o.formatoptions&&(o=v.extend(!0,{},o.formatoptions),s=v.extend(s,o)),void 0!==l.editOptions&&(s.editOptions=l.editOptions),void 0!==l.delOptions&&(s.delOptions=l.delOptions),i.hasClass("jqgrid-new-row")&&(s.extraparam[l.prmNames.oper]=l.prmNames.addoper);var f={keys:s.keys,oneditfunc:s.onEdit,successfunc:s.onSuccess,url:s.url,extraparam:s.extraparam,aftersavefunc:function(e,t){v.isFunction(s.afterSave)&&s.afterSave.call(a,e,t),d.find("div.ui-inline-edit,div.ui-inline-del").show(),d.find("div.ui-inline-save,div.ui-inline-cancel").hide()},errorfunc:s.onError,afterrestorefunc:t,restoreAfterError:s.restoreAfterError,mtype:s.mtype};switch(e){case"edit":n.jqGrid("editRow",r,f),d.find("div.ui-inline-edit,div.ui-inline-del").hide(),d.find("div.ui-inline-save,div.ui-inline-cancel").show(),n.triggerHandler("jqGridAfterGridComplete");break;case"save":n.jqGrid("saveRow",r,f)&&(d.find("div.ui-inline-edit,div.ui-inline-del").show(),d.find("div.ui-inline-save,div.ui-inline-cancel").hide(),n.triggerHandler("jqGridAfterGridComplete"));break;case"cancel":n.jqGrid("restoreRow",r,t),d.find("div.ui-inline-edit,div.ui-inline-del").show(),d.find("div.ui-inline-save,div.ui-inline-cancel").hide(),n.triggerHandler("jqGridAfterGridComplete");break;case"del":n.jqGrid("delGridRow",r,s.delOptions);break;case"formedit":n.jqGrid("setSelection",r),n.jqGrid("editGridRow",r,s.editOptions)}},v.fn.fmatter.actions=function(e,t){var i,r={keys:!1,editbutton:!0,delbutton:!0,editformbutton:!1},o=t.rowId,n="",a=v.jgrid.getRegional(this,"nav"),l=v.jgrid.styleUI[t.styleUI||"jQueryUI"].fmatter,d=v.jgrid.styleUI[t.styleUI||"jQueryUI"].common;if(void 0!==t.colModel.formatoptions&&(r=v.extend(r,t.colModel.formatoptions)),void 0===o||v.fmatter.isEmpty(o))return"";t="onmouseover=jQuery(this).addClass('"+d.hover+"'); onmouseout=jQuery(this).removeClass('"+d.hover+"');  ";return r.editformbutton?(i="id='jEditButton_"+o+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'formedit'); "+t,n+="<div title='"+a.edittitle+"' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' "+i+"><span class='"+d.icon_base+" "+l.icon_edit+"'></span></div>"):r.editbutton&&(i="id='jEditButton_"+o+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'edit'); "+t,n+="<div title='"+a.edittitle+"' style='float:left;cursor:pointer;' class='ui-pg-div ui-inline-edit' "+i+"><span class='"+d.icon_base+" "+l.icon_edit+"'></span></div>"),r.delbutton&&(i="id='jDeleteButton_"+o+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'del'); "+t,n+="<div title='"+a.deltitle+"' style='float:left;' class='ui-pg-div ui-inline-del' "+i+"><span class='"+d.icon_base+" "+l.icon_del+"'></span></div>"),i="id='jSaveButton_"+o+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'save'); "+t,n+="<div title='"+a.savetitle+"' style='float:left;display:none' class='ui-pg-div ui-inline-save' "+i+"><span class='"+d.icon_base+" "+l.icon_save+"'></span></div>",i="id='jCancelButton_"+o+"' onclick=jQuery.fn.fmatter.rowactions.call(this,'cancel'); "+t,"<div style='margin-left:8px;'>"+(n+="<div title='"+a.canceltitle+"' style='float:left;display:none;' class='ui-pg-div ui-inline-cancel' "+i+"><span class='"+d.icon_base+" "+l.icon_cancel+"'></span></div>")+"</div>"},v.unformat=function(e,t,i,r){var o,n=t.colModel.formatter,a=t.colModel.formatoptions||{},l=/([\.\*\_\'\(\)\{\}\+\?\\])/g,d=t.colModel.unformat||v.fn.fmatter[n]&&v.fn.fmatter[n].unformat;if(void 0!==d&&v.isFunction(d))c=d.call(this,v(e).text(),t,e);else if(void 0!==n&&v.fmatter.isString(n)){var s=v.jgrid.getRegional(this,"formatter")||{};switch(n){case"integer":o=(a=v.extend({},s.integer,a)).thousandsSeparator.replace(l,"\\$1"),f=new RegExp(o,"g"),c=v(e).text().replace(f,"");break;case"number":o=(a=v.extend({},s.number,a)).thousandsSeparator.replace(l,"\\$1"),f=new RegExp(o,"g"),c=v(e).text().replace(f,"").replace(a.decimalSeparator,".");break;case"currency":o=(a=v.extend({},s.currency,a)).thousandsSeparator.replace(l,"\\$1"),f=new RegExp(o,"g"),c=v(e).text(),a.prefix&&a.prefix.length&&(c=c.substr(a.prefix.length)),a.suffix&&a.suffix.length&&(c=c.substr(0,c.length-a.suffix.length)),c=c.replace(f,"").replace(a.decimalSeparator,".");break;case"checkbox":var f=t.colModel.editoptions?t.colModel.editoptions.value.split(":"):["Yes","No"],c=v("input",e).is(":checked")?f[0]:f[1];break;case"select":c=v.unformat.select(e,t,i,r);break;case"actions":return"";default:c=v(e).text()}}return void 0!==c?c:!0===r?v(e).text():v.jgrid.htmlDecode(v(e).html())},v.unformat.select=function(e,t,i,r){var o=[],n=v(e).text();if(!0===r)return n;var a=v.extend({},void 0!==t.colModel.formatoptions?t.colModel.formatoptions:t.colModel.editoptions),l=void 0===a.separator?":":a.separator,t=void 0===a.delimiter?";":a.delimiter;if(a.value){var d,s=a.value,f=!0===a.multiple,c=[];if(f&&(c=n.split(","),c=v.map(c,function(e){return v.trim(e)})),v.fmatter.isString(s)){for(var u=s.split(t),m=0,p=0;p<u.length;p++)if(2<(d=u[p].split(l)).length&&(d[1]=v.map(d,function(e,t){if(0<t)return e}).join(l)),a.decodeValue&&!0===a.decodeValue&&(d[1]=v.jgrid.htmlDecode(d[1])),f)-1<v.inArray(v.trim(d[1]),c)&&(o[m]=d[0],m++);else if(v.trim(d[1])===v.trim(n)){o[0]=d[0];break}}else(v.fmatter.isObject(s)||v.isArray(s))&&(f||(c[0]=n),o=v.map(c,function(i){var r;if(v.each(s,function(e,t){if(t===i)return r=e,!1}),void 0!==r)return r}));return o.join(", ")}return n||""},v.unformat.date=function(e,t){var i=v.jgrid.getRegional(this,"formatter.date")||{};return void 0!==t.formatoptions&&(i=v.extend({},i,t.formatoptions)),v.fmatter.isEmpty(e)?v.fn.fmatter.defaultFormat(e,t):v.jgrid.parseDate.call(this,i.newformat,e,i.srcformat,i)}});