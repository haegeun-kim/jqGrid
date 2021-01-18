!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base","jquery-ui/dialog","jquery-ui/draggable","jquery-ui/droppable","jquery-ui/resizable","jquery-ui/sortable","./addons/ui.multiselect"],t):t(jQuery)}(function($){"use strict";var setSelected;$.jgrid.msie()&&8===$.jgrid.msiever()&&($.expr[":"].hidden=function(t){return 0===t.offsetWidth||0===t.offsetHeight||"none"===t.style.display}),$.jgrid._multiselect=!1,$.ui&&$.ui.multiselect&&($.ui.multiselect.prototype._setSelected&&(setSelected=$.ui.multiselect.prototype._setSelected,$.ui.multiselect.prototype._setSelected=function(t,e){var i,t=setSelected.call(this,t,e);return e&&this.selectedList&&(i=this.element,this.selectedList.find("li").each(function(){$(this).data("optionLink")&&$(this).data("optionLink").remove().appendTo(i)})),t}),$.ui.multiselect.prototype.destroy&&($.ui.multiselect.prototype.destroy=function(){this.element.show(),this.container.remove(),(void 0===$.Widget?$.widget:$.Widget).prototype.destroy.apply(this,arguments)}),$.jgrid._multiselect=!0),$.jgrid.extend({sortableColumns:function(r){return this.each(function(){var n=this,t=$.jgrid.jqID(n.p.id),e=!1;function i(){n.p.disableClick=!0,n.p.frozenColumns&&($(n).jqGrid("destroyFrozenColumns"),e=!0)}function o(){setTimeout(function(){n.p.disableClick=!1,e&&($(n).jqGrid("setFrozenColumns"),e=!1)},50)}var s,a,t={tolerance:"pointer",axis:"x",scrollSensitivity:"1",items:">th:not(:has(#jqgh_"+t+"_cb,#jqgh_"+t+"_rn,#jqgh_"+t+"_subgrid),:hidden)",placeholder:{element:function(t){return $(document.createElement(t[0].nodeName)).addClass(t[0].className+" ui-sortable-placeholder ui-state-highlight").removeClass("ui-sortable-helper")[0]},update:function(t,e){e.height(t.currentItem.innerHeight()-parseInt(t.currentItem.css("paddingTop")||0,10)-parseInt(t.currentItem.css("paddingBottom")||0,10)),e.width(t.currentItem.innerWidth()-parseInt(t.currentItem.css("paddingLeft")||0,10)-parseInt(t.currentItem.css("paddingRight")||0,10))}},update:function(t,e){var i=$(e.item).parent(),e=$(">th",i),i=n.p.colModel,o={},s=n.p.id+"_";$.each(i,function(t){o[this.name]=t});var a=[];e.each(function(){var t=$(">div",this).get(0).id.replace(/^jqgh_/,"").replace(s,"");o.hasOwnProperty(t)&&a.push(o[t])}),$(n).jqGrid("remapColumns",a,!0,!0),$.isFunction(n.p.sortable.update)&&n.p.sortable.update(a)}};n.p.sortable.options?$.extend(t,n.p.sortable.options):$.isFunction(n.p.sortable)&&(n.p.sortable={update:n.p.sortable}),t.start?(s=t.start,t.start=function(t,e){i(),s.call(this,t,e)}):t.start=i,t.stop?(a=t.stop,t.stop=function(t,e){o(),a.call(this,t,e)}):t.stop=o,n.p.sortable.exclude&&(t.items+=":not("+n.p.sortable.exclude+")");t=r.sortable(t),t=t.data("sortable")||t.data("uiSortable");null!=t&&(t.data("sortable").floating=!0)})},columnChooser:function(e){var i,o,t,s=this,n={},a=[],r=s.jqGrid("getGridParam","colModel"),d=s.jqGrid("getGridParam","colNames"),l=function(t){return $.ui.multiselect.prototype&&t.data($.ui.multiselect.prototype.widgetFullName||$.ui.multiselect.prototype.widgetName)||t.data("ui-multiselect")||t.data("multiselect")},c=$.jgrid.getRegional(this[0],"col");if(!$("#colchooser_"+$.jgrid.jqID(s[0].p.id)).length){if(i=$('<div id="colchooser_'+s[0].p.id+'" style="position:relative;overflow:hidden"><div><select multiple="multiple"></select></div></div>'),o=$("select",i),e=$.extend({width:400,height:240,classname:null,done:function(t){t&&s.jqGrid("remapColumns",t,!0)},msel:"multiselect",dlog:"dialog",dialog_opts:{minWidth:470,dialogClass:"ui-jqdialog"},dlog_opts:function(t){var e={};return e[t.bSubmit]=function(){t.apply_perm(),t.cleanup(!1)},e[t.bCancel]=function(){t.cleanup(!0)},$.extend(!0,{buttons:e,close:function(){t.cleanup(!0)},modal:t.modal||!1,resizable:t.resizable||!0,width:t.width+70,resize:u},t.dialog_opts||{})},apply_perm:function(){var a=[];$("option",o).each(function(){$(this).is(":selected")?s.jqGrid("showCol",r[this.value].name):s.jqGrid("hideCol",r[this.value].name)}),$("option[selected]",o).each(function(){a.push(parseInt(this.value,10))}),$.each(a,function(){delete n[r[parseInt(this,10)].name]}),$.each(n,function(){var t,e,i,o,s=parseInt(this,10);t=a,i=e=s,a=0<=e?(s=(o=t.slice()).splice(e,Math.max(t.length-e,e)),e>t.length&&(e=t.length),o[e]=i,o.concat(s)):t}),e.done&&e.done.call(s,a),s.jqGrid("setGridWidth",s[0].p.width,s[0].p.shrinkToFit)},cleanup:function(t){p(e.dlog,i,"destroy"),p(e.msel,o,"destroy"),i.remove(),t&&e.done&&e.done.call(s)},msel_opts:{}},c,e||{}),$.ui&&$.ui.multiselect&&$.ui.multiselect.defaults){if(!$.jgrid._multiselect)return void alert("Multiselect plugin loaded after jqGrid. Please load the plugin before the jqGrid!");e.msel_opts=$.extend($.ui.multiselect.defaults,e.msel_opts)}e.caption&&i.attr("title",e.caption),e.classname&&(i.addClass(e.classname),o.addClass(e.classname)),e.width&&($(">div",i).css({width:e.width,margin:"0 auto"}),o.css("width",e.width)),e.height&&($(">div",i).css("height",e.height),o.css("height",e.height-10)),o.empty(),$.each(r,function(t){n[this.name]=t,this.hidedlg?this.hidden||a.push(t):o.append("<option value='"+t+"' "+(this.hidden?"":"selected='selected'")+">"+$.jgrid.stripHtml(d[t])+"</option>")}),t=$.isFunction(e.dlog_opts)?e.dlog_opts.call(s,e):e.dlog_opts,p(e.dlog,i,t),c=$.isFunction(e.msel_opts)?e.msel_opts.call(s,e):e.msel_opts,p(e.msel,o,c),t=$("#colchooser_"+$.jgrid.jqID(s[0].p.id));var c=$(".ui-jqgrid").css("font-size")||"11px";t.parent().css("font-size",c),t.css({margin:"auto"}),t.find(">div").css({width:"100%",height:"100%",margin:"auto"}),(c=l(o)).container.css({width:"100%",height:"100%",margin:"auto"}),c.selectedContainer.css({width:100*c.options.dividerLocation+"%",height:"100%",margin:"auto",boxSizing:"border-box"}),c.availableContainer.css({width:100-100*c.options.dividerLocation+"%",height:"100%",margin:"auto",boxSizing:"border-box"}),c.selectedList.css("height","auto"),c.availableList.css("height","auto"),t=Math.max(c.selectedList.height(),c.availableList.height()),t=Math.min(t,$(window).height()),c.selectedList.css("height",t),c.availableList.css("height",t),u()}function p(t,e){t&&("string"==typeof t?$.fn[t]&&$.fn[t].apply(e,$.makeArray(arguments).slice(2)):$.isFunction(t)&&t.apply(e,$.makeArray(arguments).slice(2)))}function u(){var t=l(o),e=t.container.closest(".ui-dialog-content");0<e.length&&"object"==typeof e[0].style?e[0].style.width="":e.css("width",""),t.selectedList.height(Math.max(t.selectedContainer.height()-t.selectedActions.outerHeight()-1,1)),t.availableList.height(Math.max(t.availableContainer.height()-t.availableActions.outerHeight()-1,1))}},sortableRows:function(s){return this.each(function(){var o=this;o.grid&&(o.p.treeGrid||$.fn.sortable&&((s=$.extend({cursor:"move",axis:"y",items:" > .jqgrow"},s||{})).start&&$.isFunction(s.start)?(s._start_=s.start,delete s.start):s._start_=!1,s.update&&$.isFunction(s.update)?(s._update_=s.update,delete s.update):s._update_=!1,s.start=function(t,e){if($(e.item).css("border-width","0"),$("td",e.item).each(function(t){this.style.width=o.grid.cols[t].style.width}),o.p.subGrid){var i=$(e.item).attr("id");try{$(o).jqGrid("collapseSubGridRow",i)}catch(t){}}s._start_&&s._start_.apply(this,[t,e])},s.update=function(t,e){$(e.item).css("border-width",""),!0===o.p.rownumbers&&$("td.jqgrid-rownum",o.rows).each(function(t){$(this).html(t+1+(parseInt(o.p.page,10)-1)*parseInt(o.p.rowNum,10))}),s._update_&&s._update_.apply(this,[t,e])},$("tbody:first",o).sortable(s),$("tbody:first > .jqgrow",o).disableSelection()))})},gridDnD:function(o){return this.each(function(){var t,e,a=this;if(a.grid&&!a.p.treeGrid&&$.fn.draggable&&$.fn.droppable){var h;if(void 0===$("#jqgrid_dnd")[0]&&$("body").append("<table id='jqgrid_dnd' class='ui-jqgrid-dnd'></table>"),"string"!=typeof o||"updateDnD"!==o||!0!==a.p.jqgdnd){if((o=$.extend({drag:function(s){return $.extend({start:function(t,e){var i,o;if(a.p.subGrid){o=$(e.helper).attr("id");try{$(a).jqGrid("collapseSubGridRow",o)}catch(t){}}for(i=0;i<$.data(a,"dnd").connectWith.length;i++)0===$($.data(a,"dnd").connectWith[i]).jqGrid("getGridParam","reccount")&&$($.data(a,"dnd").connectWith[i]).jqGrid("addRowData","jqg_empty_row",{});e.helper.addClass("ui-state-highlight"),$("td",e.helper).each(function(t){this.style.width=a.grid.headers[t].width+"px"}),s.onstart&&$.isFunction(s.onstart)&&s.onstart.call($(a),t,e)},stop:function(t,e){var i,o;for(e.helper.dropped&&!s.dragcopy&&(void 0===(o=$(e.helper).attr("id"))&&(o=$(this).attr("id")),$(a).jqGrid("delRowData",o)),i=0;i<$.data(a,"dnd").connectWith.length;i++)$($.data(a,"dnd").connectWith[i]).jqGrid("delRowData","jqg_empty_row");s.onstop&&$.isFunction(s.onstop)&&s.onstop.call($(a),t,e)}},s.drag_opts||{})},drop:function(u){return $.extend({accept:function(t){if(!$(t).hasClass("jqgrow"))return t;h=$(t).closest("table.ui-jqgrid-btable");var e=$(this).find("table.ui-jqgrid-btable:first")[0];if(0<h.length&&void 0!==$.data(h[0],"dnd")){t=$.data(h[0],"dnd").connectWith;return-1!==$.inArray("#"+$.jgrid.jqID(e.id),t)}return!1},drop:function(t,e){if($(e.draggable).hasClass("jqgrow")){var i,o=$(e.draggable).attr("id"),s=e.draggable.parent().parent().jqGrid("getRowData",o),a=[],n=$(this).find("table.ui-jqgrid-btable:first")[0];if($.isPlainObject(s)&&(a=Object.keys(s)),!u.dropbyname){var r,d,l={},c=0,p=$("#"+$.jgrid.jqID(n.id)).jqGrid("getGridParam","colModel");try{for(r=0;r<p.length;r++)"cb"!==(d=p[r].name)&&"rn"!==d&&"subgrid"!==d&&(void 0!==a[c]&&(l[d]=s[a[c]]),c++);s=l}catch(t){}}e.helper.dropped=!0,$.data(h[0],"dnd").beforedrop&&$.isFunction($.data(h[0],"dnd").beforedrop)&&(null!=(o=$.data(h[0],"dnd").beforedrop.call(n,t,e,s,$(h[0]),$(n)))&&"object"==typeof o&&(s=o)),e.helper.dropped&&(u.autoid&&(i=$.isFunction(u.autoid)?u.autoid.call(n,s):(i=Math.ceil(1e3*Math.random()),u.autoidprefix+i)),$("#"+$.jgrid.jqID(n.id)).jqGrid("addRowData",i,s,u.droppos)),u.ondrop&&$.isFunction(u.ondrop)&&u.ondrop.call(n,t,e,s)}}},u.drop_opts||{})},onstart:null,onstop:null,beforedrop:null,ondrop:null,drop_opts:{activeClass:"ui-state-active",hoverClass:"ui-state-hover",tolerance:"intersect"},drag_opts:{revert:"invalid",helper:"clone",cursor:"move",appendTo:"#jqgrid_dnd",zIndex:5e3},dragcopy:!1,dropbyname:!1,droppos:"first",autoid:!0,autoidprefix:"dnd_"},o||{})).connectWith)for(o.connectWith=o.connectWith.split(","),o.connectWith=$.map(o.connectWith,function(t){return $.trim(t)}),$.data(a,"dnd",o),0===a.p.reccount||a.p.jqgdnd||i(),a.p.jqgdnd=!0,t=0;t<o.connectWith.length;t++)e=o.connectWith[t],$(e).closest(".ui-jqgrid-bdiv").droppable($.isFunction(o.drop)?o.drop.call($(a),o):o.drop)}else i()}function i(){var t=$.data(a,"dnd");$("tr.jqgrow:not(.ui-draggable)",a).draggable($.isFunction(t.drag)?t.drag.call($(a),t):t.drag)}})},gridResize:function(opts){return this.each(function(){var $t=this,gID=$.jgrid.jqID($t.p.id),req,optstest;$t.grid&&$.fn.resizable&&(opts=$.extend({},opts||{}),opts.alsoResize?(opts._alsoResize_=opts.alsoResize,delete opts.alsoResize):opts._alsoResize_=!1,opts.stop&&$.isFunction(opts.stop)?(opts._stop_=opts.stop,delete opts.stop):opts._stop_=!1,opts.stop=function(t,e){$($t).jqGrid("setGridParam",{height:$("#gview_"+gID+" .ui-jqgrid-bdiv").height()}),$($t).jqGrid("setGridWidth",e.size.width,opts.shrinkToFit),opts._stop_&&opts._stop_.call($t,t,e),$t.p.caption&&$("#gbox_"+gID).css({height:"auto"}),$t.p.frozenColumns&&(req&&clearTimeout(req),req=setTimeout(function(){req&&clearTimeout(req),$("#"+gID).jqGrid("destroyFrozenColumns"),$("#"+gID).jqGrid("setFrozenColumns")}))},opts._alsoResize_?(optstest="{'#gview_"+gID+" .ui-jqgrid-bdiv':true,'"+opts._alsoResize_+"':true}",opts.alsoResize=eval("("+optstest+")")):opts.alsoResize=$(".ui-jqgrid-bdiv","#gview_"+gID),delete opts._alsoResize_,$("#gbox_"+gID).resizable(opts))})}})});