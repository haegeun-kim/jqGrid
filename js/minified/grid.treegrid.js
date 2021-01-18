!function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery","./grid.base"],e):e(jQuery)}(function(N){"use strict";N.jgrid.extend({setTreeNode:function(g,u){return this.each(function(){var t=this;if(t.grid&&t.p.treeGrid){var e,r,i,d=t.p.expColInd,a=t.p.treeReader.expanded_field,s=t.p.treeReader.leaf_field,l=t.p.treeReader.level_field,n=t.p.treeReader.icon_field,p=t.p.treeReader.loaded,o=N.jgrid.styleUI[t.p.styleUI||"jQueryUI"].common,h=g;for(N(t).triggerHandler("jqGridBeforeSetTreeNode",[h,u]),N.isFunction(t.p.beforeSetTreeNode)&&t.p.beforeSetTreeNode.call(t,h,u);g<u;){var f=N.jgrid.stripPref(t.p.idPrefix,t.rows[g].id),c=t.p._index[f],f=t.p.data[c];"nested"===t.p.treeGridModel&&(f[s]||(r=parseInt(f[t.p.treeReader.left_field],10),i=parseInt(f[t.p.treeReader.right_field],10),f[s]=i===r+1?"true":"false",t.rows[g].cells[t.p._treeleafpos].innerHTML=f[s])),c=parseInt(f[l],10),i=0===t.p.tree_root_level?(e=c+1,c):(e=c)-1,r="<div class='tree-wrap tree-wrap-"+t.p.direction+"' style='width:"+18*e+"px;'>",r+="<div style='"+("rtl"===t.p.direction?"right:":"left:")+18*i+"px;' class='"+o.icon_base+" ",void 0!==f[p]&&("true"===f[p]||!0===f[p]?f[p]=!0:f[p]=!1),i="true"===f[s]||!0===f[s]?(r+=(void 0!==f[n]&&""!==f[n]?f[n]:t.p.treeIcons.leaf)+" tree-leaf treeclick",f[s]=!0,"leaf"):(f[s]=!1,""),f[a]=("true"===f[a]||!0===f[a])&&(f[p]||void 0===f[p]),!1===f[a]?r+=!0===f[s]?"'":t.p.treeIcons.plus+" tree-plus treeclick'":r+=!0===f[s]?"'":t.p.treeIcons.minus+" tree-minus treeclick'",r+="></div></div>",N(t.rows[g].cells[d]).wrapInner("<span class='cell-wrapper"+i+"'></span>").prepend(r),c!==parseInt(t.p.tree_root_level,10)&&(N(t).jqGrid("isVisibleNode",f)||N(t.rows[g]).css("display","none")),N(t.rows[g].cells[d]).find("div.treeclick").on("click",function(e){e=e.target||e.srcElement,e=N.jgrid.stripPref(t.p.idPrefix,N(e,t.rows).closest("tr.jqgrow")[0].id),e=t.p._index[e];return t.p.data[e][s]||(t.p.data[e][a]?(N(t).jqGrid("collapseRow",t.p.data[e]),N(t).jqGrid("collapseNode",t.p.data[e])):(N(t).jqGrid("expandRow",t.p.data[e]),N(t).jqGrid("expandNode",t.p.data[e]))),!1}),!0===t.p.ExpandColClick&&N(t.rows[g].cells[d]).find("span.cell-wrapper").css("cursor","pointer").on("click",function(e){var r=e.target||e.srcElement,e=N.jgrid.stripPref(t.p.idPrefix,N(r,t.rows).closest("tr.jqgrow")[0].id),r=t.p._index[e];return t.p.data[r][s]||(t.p.data[r][a]?(N(t).jqGrid("collapseRow",t.p.data[r]),N(t).jqGrid("collapseNode",t.p.data[r])):(N(t).jqGrid("expandRow",t.p.data[r]),N(t).jqGrid("expandNode",t.p.data[r]))),N(t).jqGrid("setSelection",e),!1}),g++}N(t).triggerHandler("jqGridAfterSetTreeNode",[h,u]),N.isFunction(t.p.afterSetTreeNode)&&t.p.afterSetTreeNode.call(t,h,u)}})},setTreeGrid:function(){return this.each(function(){var e,r,t,i,d=this,a=0,s=!1,l=[],n=N.jgrid.styleUI[d.p.styleUI||"jQueryUI"].treegrid;if(d.p.treeGrid){for(t in d.p.treedatatype||N.extend(d.p,{treedatatype:d.p.datatype}),d.p.loadonce&&(d.p.treedatatype="local"),d.p.subGrid=!1,d.p.altRows=!1,d.p.treeGrid_bigData||(d.p.pgbuttons=!1,d.p.pginput=!1,d.p.rowList=[]),d.p.gridview=!0,null!==d.p.rowTotal||d.p.treeGrid_bigData||(d.p.rowNum=1e4),d.p.multiselect=!1,d.p.expColInd=0,e=n.icon_plus,"jQueryUI"===d.p.styleUI&&(e+="rtl"===d.p.direction?"w":"e"),d.p.treeIcons=N.extend({plus:e,minus:n.icon_minus,leaf:n.icon_leaf},d.p.treeIcons||{}),"nested"===d.p.treeGridModel?d.p.treeReader=N.extend({level_field:"level",left_field:"lft",right_field:"rgt",leaf_field:"isLeaf",expanded_field:"expanded",loaded:"loaded",icon_field:"icon"},d.p.treeReader):"adjacency"===d.p.treeGridModel&&(d.p.treeReader=N.extend({level_field:"level",parent_id_field:"parent",leaf_field:"isLeaf",expanded_field:"expanded",loaded:"loaded",icon_field:"icon"},d.p.treeReader)),d.p.colModel)if(d.p.colModel.hasOwnProperty(t))for(i in(r=d.p.colModel[t].name)!==d.p.ExpandColumn||s||(s=!0,d.p.expColInd=a),a++,r!==d.p.treeReader.level_field&&r!==d.p.treeReader.left_field&&r!==d.p.treeReader.right_field||(d.p.colModel[t].sorttype="integer"),d.p.treeReader)d.p.treeReader.hasOwnProperty(i)&&d.p.treeReader[i]===r&&l.push(r);N.each(d.p.treeReader,function(e,r){r&&-1===N.inArray(r,l)&&("leaf_field"===e&&(d.p._treeleafpos=a),a++,d.p.colNames.push(r),d.p.colModel.push({name:r,width:1,hidden:!0,sortable:!1,resizable:!1,hidedlg:!0,editable:!0,search:!1}))})}})},expandRow:function(s){this.each(function(){var e,r,t,i,d,a=this;a.p.treeGrid_bigData||(e=a.p.lastpage),a.grid&&a.p.treeGrid&&(r=N(a).jqGrid("getNodeChildren",s),t=a.p.treeReader.expanded_field,i=s[a.p.localReader.id],void 0===(d=N(a).triggerHandler("jqGridBeforeExpandTreeGridRow",[i,s,r]))&&(d=!0),d&&N.isFunction(a.p.beforeExpandTreeGridRow)&&(d=a.p.beforeExpandTreeGridRow.call(a,i,s,r)),!1!==d&&(N(r).each(function(){var e=a.p.idPrefix+N.jgrid.getAccessor(this,a.p.localReader.id);N(N(a).jqGrid("getGridRowById",e)).css("display",""),this[t]&&N(a).jqGrid("expandRow",this)}),N(a).triggerHandler("jqGridAfterExpandTreeGridRow",[i,s,r]),N.isFunction(a.p.afterExpandTreeGridRow)&&a.p.afterExpandTreeGridRow.call(a,i,s,r),a.p.treeGrid_bigData||(a.p.lastpage=e)))})},collapseRow:function(a){this.each(function(){var e,r,t,i,d=this;d.grid&&d.p.treeGrid&&(e=N(d).jqGrid("getNodeChildren",a),r=d.p.treeReader.expanded_field,t=a[d.p.localReader.id],void 0===(i=N(d).triggerHandler("jqGridBeforeCollapseTreeGridRow",[t,a,e]))&&(i=!0),i&&N.isFunction(d.p.beforeCollapseTreeGridRow)&&(i=d.p.beforeCollapseTreeGridRow.call(d,t,a,e)),!1!==i&&(N(e).each(function(){var e=d.p.idPrefix+N.jgrid.getAccessor(this,d.p.localReader.id);N(N(d).jqGrid("getGridRowById",e)).css("display","none"),this[r]&&N(d).jqGrid("collapseRow",this)}),N(d).triggerHandler("jqGridAfterCollapseTreeGridRow",[t,a,e]),N.isFunction(d.p.afterCollapseTreeGridRow)&&d.p.afterCollapseTreeGridRow.call(d,t,a,e)))})},getRootNodes:function(){var d=[];return this.each(function(){var e,r,t=this,i=t.p.data;if(t.grid&&t.p.treeGrid)switch(t.p.treeGridModel){case"nested":e=t.p.treeReader.level_field,N(i).each(function(){parseInt(this[e],10)===parseInt(t.p.tree_root_level,10)&&d.push(this)});break;case"adjacency":r=t.p.treeReader.parent_id_field,N(i).each(function(){null!==this[r]&&"null"!==String(this[r]).toLowerCase()||d.push(this)})}}),d},getNodeDepth:function(r){var t=null;return this.each(function(){if(this.grid&&this.p.treeGrid)switch(this.p.treeGridModel){case"nested":var e=this.p.treeReader.level_field;t=parseInt(r[e],10)-parseInt(this.p.tree_root_level,10);break;case"adjacency":t=N(this).jqGrid("getNodeAncestors",r).length}}),t},getNodeParent:function(h){var f=null;return this.each(function(){var e=this;if(e.grid&&e.p.treeGrid)switch(e.p.treeGridModel){case"nested":var r=e.p.treeReader.left_field,t=e.p.treeReader.right_field,i=e.p.treeReader.level_field,d=parseInt(h[r],10),a=parseInt(h[t],10),s=parseInt(h[i],10);N(this.p.data).each(function(){if(parseInt(this[i],10)===s-1&&parseInt(this[r],10)<d&&parseInt(this[t],10)>a)return f=this,!1});break;case"adjacency":for(var l=e.p.treeReader.parent_id_field,n=e.p.localReader.id,p=h[n],o=e.p._index[p];o--;)if(String(e.p.data[o][n])===String(N.jgrid.stripPref(e.p.idPrefix,h[l]))){f=e.p.data[o];break}}}),f},getNodeChildren:function(f){var c=[];return this.each(function(){var e=this;if(e.grid&&e.p.treeGrid){var r,t=this.p.data.length;switch(e.p.treeGridModel){case"nested":for(var i=e.p.treeReader.left_field,d=e.p.treeReader.right_field,a=e.p.treeReader.level_field,s=parseInt(f[i],10),l=parseInt(f[d],10),n=parseInt(f[a],10),p=0;p<t;p++)(r=e.p.data[p])&&parseInt(r[a],10)===n+1&&parseInt(r[i],10)>s&&parseInt(r[d],10)<l&&c.push(r);break;case"adjacency":var o=e.p.treeReader.parent_id_field,h=e.p.localReader.id;for(p=0;p<t;p++)(r=e.p.data[p])&&String(r[o])===String(N.jgrid.stripPref(e.p.idPrefix,f[h]))&&c.push(r)}}}),c},getFullTreeNode:function(h,f){var c=[];return this.each(function(){var r,t,i,d=this,a=d.p.treeReader.expanded_field;if(d.grid&&d.p.treeGrid)switch(null!=f&&"boolean"==typeof f||(f=!1),d.p.treeGridModel){case"nested":var e=d.p.treeReader.left_field,s=d.p.treeReader.right_field,l=d.p.treeReader.level_field,n=parseInt(h[e],10),p=parseInt(h[s],10),o=parseInt(h[l],10);N(this.p.data).each(function(){parseInt(this[l],10)>=o&&parseInt(this[e],10)>=n&&parseInt(this[e],10)<=p&&(f&&(this[a]=!0),c.push(this))});break;case"adjacency":h&&(c.push(h),t=d.p.treeReader.parent_id_field,i=d.p.localReader.id,N(this.p.data).each(function(e){for(r=c.length,e=0;e<r;e++)if(String(N.jgrid.stripPref(d.p.idPrefix,c[e][i]))===String(this[t])){f&&(this[a]=!0),c.push(this);break}}))}}),c},getNodeAncestors:function(r,t,i){var d=[];return void 0===t&&(t=!1),this.each(function(){if(this.grid&&this.p.treeGrid){i=void 0!==i&&this.p.treeReader.expanded_field;for(var e=N(this).jqGrid("getNodeParent",r);e;){if(i)try{e[i]=!0}catch(e){}t?d.unshift(e):d.push(e),e=N(this).jqGrid("getNodeParent",e)}}}),d},isVisibleNode:function(t){var i=!0;return this.each(function(){var e,r;this.grid&&this.p.treeGrid&&(e=N(this).jqGrid("getNodeAncestors",t),r=this.p.treeReader.expanded_field,N(e).each(function(){if(!(i=i&&this[r]))return!1}))}),i},isNodeLoaded:function(i){var d;return this.each(function(){var e,r,t=this;t.grid&&t.p.treeGrid&&(e=t.p.treeReader.leaf_field,r=t.p.treeReader.loaded,d=void 0!==i&&(void 0!==i[r]?i[r]:!!(i[e]||0<N(t).jqGrid("getNodeChildren",i).length)))}),d},setLeaf:function(a,s,l){return this.each(function(){var e,r=N.jgrid.getAccessor(a,this.p.localReader.id),t=N("#"+r,this.grid.bDiv)[0],i=this.p.treeReader.leaf_field;try{var d=this.p._index[r];null!=d&&(this.p.data[d][i]=s)}catch(e){}!0===s?N("div.treeclick",t).removeClass(this.p.treeIcons.minus+" tree-minus "+this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.leaf+" tree-leaf"):!1===s&&(e=this.p.treeIcons.minus+" tree-minus",l&&(e=this.p.treeIcons.plus+" tree-plus"),N("div.treeclick",t).removeClass(this.p.treeIcons.leaf+" tree-leaf").addClass(e))})},reloadNode:function(o,h){return this.each(function(){var e,r,t,i,d,a,s,l,n,p;this.grid&&this.p.treeGrid&&(p=this.p.localReader.id,e=this.p.selrow,N(this).jqGrid("delChildren",o[p]),void 0===h&&(h=!1),h||jQuery._data(this,"events").jqGridAfterSetTreeNode||N(this).on("jqGridAfterSetTreeNode.reloadNode",function(){var e,r,t=this.p.treeReader.leaf_field;this.p.reloadnode&&(e=this.p.reloadnode,r=N(this).jqGrid("getNodeChildren",e),e[t]&&r.length?N(this).jqGrid("setLeaf",e,!1):e[t]||0!==r.length||N(this).jqGrid("setLeaf",e,!0)),this.p.reloadnode=!1}),r=this.p.treeReader.expanded_field,t=this.p.treeReader.parent_id_field,i=this.p.treeReader.loaded,d=this.p.treeReader.level_field,a=this.p.treeReader.leaf_field,s=this.p.treeReader.left_field,l=this.p.treeReader.right_field,n=N.jgrid.getAccessor(o,this.p.localReader.id),p=N("#"+n,this.grid.bDiv)[0],o[r]=!0,o[a]||N("div.treeclick",p).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus"),this.p.treeANode=p.rowIndex,this.p.datatype=this.p.treedatatype,this.p.reloadnode=o,h&&(this.p.treeANode=0<p.rowIndex?p.rowIndex-1:1,N(this).jqGrid("delRowData",n)),"nested"===this.p.treeGridModel?N(this).jqGrid("setGridParam",{postData:{nodeid:n,n_left:o[s],n_right:o[l],n_level:o[d]}}):N(this).jqGrid("setGridParam",{postData:{nodeid:n,parentid:o[t],n_level:o[d]}}),N(this).trigger("reloadGrid"),o[i]=!0,"nested"===this.p.treeGridModel?N(this).jqGrid("setGridParam",{selrow:e,postData:{nodeid:"",n_left:"",n_right:"",n_level:""}}):N(this).jqGrid("setGridParam",{selrow:e,postData:{nodeid:"",parentid:"",n_level:""}}))})},expandNode:function(o){return this.each(function(){var e,r,t,i,d,a,s,l,n,p;this.grid&&this.p.treeGrid&&(e=this.p.treeReader.expanded_field,r=this.p.treeReader.parent_id_field,t=this.p.treeReader.loaded,i=this.p.treeReader.level_field,d=this.p.treeReader.left_field,a=this.p.treeReader.right_field,o[e]||(s=N.jgrid.getAccessor(o,this.p.localReader.id),l=N("#"+this.p.idPrefix+N.jgrid.jqID(s),this.grid.bDiv)[0],n=this.p._index[s],void 0===(p=N(this).triggerHandler("jqGridBeforeExpandTreeGridNode",[s,o]))&&(p=!0),p&&N.isFunction(this.p.beforeExpandTreeGridNode)&&(p=this.p.beforeExpandTreeGridNode.call(this,s,o)),!1!==p&&(N(this).jqGrid("isNodeLoaded",this.p.data[n])?(o[e]=!0,N("div.treeclick",l).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus")):this.grid.hDiv.loading||(o[e]=!0,N("div.treeclick",l).removeClass(this.p.treeIcons.plus+" tree-plus").addClass(this.p.treeIcons.minus+" tree-minus"),this.p.treeANode=l.rowIndex,this.p.datatype=this.p.treedatatype,"nested"===this.p.treeGridModel?N(this).jqGrid("setGridParam",{postData:{nodeid:s,n_left:o[d],n_right:o[a],n_level:o[i]}}):N(this).jqGrid("setGridParam",{postData:{nodeid:s,parentid:o[r],n_level:o[i]}}),N(this).trigger("reloadGrid"),o[t]=!0,"nested"===this.p.treeGridModel?N(this).jqGrid("setGridParam",{postData:{nodeid:"",n_left:"",n_right:"",n_level:""}}):N(this).jqGrid("setGridParam",{postData:{nodeid:"",parentid:"",n_level:""}})),N(this).triggerHandler("jqGridAfterExpandTreeGridNode",[s,o]),N.isFunction(this.p.afterExpandTreeGridNode)&&this.p.afterExpandTreeGridNode.call(this,s,o))))})},collapseNode:function(d){return this.each(function(){var e,r,t,i;this.grid&&this.p.treeGrid&&(e=this.p.treeReader.expanded_field,d[e]&&(r=N.jgrid.getAccessor(d,this.p.localReader.id),t=N("#"+this.p.idPrefix+N.jgrid.jqID(r),this.grid.bDiv)[0],void 0===(i=N(this).triggerHandler("jqGridBeforeCollapseTreeGridNode",[r,d]))&&(i=!0),i&&N.isFunction(this.p.beforeCollapseTreeGridNode)&&(i=this.p.beforeCollapseTreeGridNode.call(this,r,d)),(d[e]=!1)!==i&&(N("div.treeclick",t).removeClass(this.p.treeIcons.minus+" tree-minus").addClass(this.p.treeIcons.plus+" tree-plus"),N(this).triggerHandler("jqGridAfterCollapseTreeGridNode",[r,d]),N.isFunction(this.p.afterCollapseTreeGridNode)&&this.p.afterCollapseTreeGridNode.call(this,r,d))))})},SortTree:function(o,h,f,c){return this.each(function(){if(this.grid&&this.p.treeGrid){var e,r,t,i,d=[],a=this,s=N(this).jqGrid("getRootNodes",a.p.search),l=N.jgrid.from.call(this,s);for(Boolean(a.p.sortTreeByNodeType)&&(s=a.p.sortTreeNodeOrder&&"desc"===a.p.sortTreeNodeOrder.toLowerCase()?"d":"a",l.orderBy(a.p.treeReader.leaf_field,s,f,c)),l.orderBy(o,h,f,c),e=0,r=(i=l.select()).length;e<r;e++)t=i[e],d.push(t),N(this).jqGrid("collectChildrenSortTree",d,t,o,h,f,c);var n=N(this).jqGrid("getDataIDs"),p=1;N.each(d,function(e){var r=N.jgrid.getAccessor(this,a.p.localReader.id);-1!==N.inArray(r,n)&&(N("#"+N.jgrid.jqID(a.p.id)+" tbody tr:eq("+p+")").after(N("#"+N.jgrid.jqID(a.p.id)+" tbody tr#"+N.jgrid.jqID(r))),p++)}),d=i=l=null}})},searchTree:function(t){var i,d,a,s,l,n,p,o=t.length||0,h=[],f=[],c=[];return this.each(function(){if(this.grid&&this.p.treeGrid&&o)for(i=this.p.localReader.id,p=0;p<o;p++){var e;if(h=N(this).jqGrid("getNodeAncestors",t[p],!0,!0),Boolean(this.p.FullTreeSearchResult)?(e=N(this).jqGrid("getFullTreeNode",t[p],!0),h=h.concat(e)):h.push(t[p]),d=h[0][i],-1===N.inArray(d,f))f.push(d),c=c.concat(h);else for(l=0,a=h.length;l<a;l++){var r=!1;for(n=0,s=c.length;n<s;n++)if(h[l][i]===c[n][i]){r=!0;break}r||c.push(h[l])}}}),c},collectChildrenSortTree:function(a,s,l,n,p,o){return this.each(function(){if(this.grid&&this.p.treeGrid){var e,r,t,i,d=N(this).jqGrid("getNodeChildren",s,this.p.search),d=N.jgrid.from.call(this,d);for(d.orderBy(l,n,p,o),e=0,r=(i=d.select()).length;e<r;e++)t=i[e],a.push(t),N(this).jqGrid("collectChildrenSortTree",a,t,l,n,p,o)}})},setTreeRow:function(e,r){var t=!1;return this.each(function(){this.grid&&this.p.treeGrid&&(t=N(this).jqGrid("setRowData",e,r))}),t},delTreeNode:function(h){return this.each(function(){var e,r,t,i,d,a=this,s=a.p.localReader.id,l=a.p.treeReader.left_field,n=a.p.treeReader.right_field;if(a.grid&&a.p.treeGrid){h=N.jgrid.stripPref(a.p.idPrefix,h);var p=a.p._index[h];if(void 0!==p){t=(r=parseInt(a.p.data[p][n],10))-parseInt(a.p.data[p][l],10)+1;var o=N(a).jqGrid("getFullTreeNode",a.p.data[p]);if(0<o.length)for(e=0;e<o.length;e++)N(a).jqGrid("delRowData",a.p.idPrefix+o[e][s]);if("nested"===a.p.treeGridModel){if((i=N.jgrid.from.call(a,a.p.data).greater(l,r,{stype:"integer"}).select()).length)for(d in i)i.hasOwnProperty(d)&&(i[d][l]=parseInt(i[d][l],10)-t);if((i=N.jgrid.from.call(a,a.p.data).greater(n,r,{stype:"integer"}).select()).length)for(d in i)i.hasOwnProperty(d)&&(i[d][n]=parseInt(i[d][n],10)-t)}}}})},delChildren:function(h){return this.each(function(){var e,r,t,i,d=this,a=d.p.localReader.id,s=d.p.treeReader.left_field,l=d.p.treeReader.right_field;if(d.grid&&d.p.treeGrid){h=N.jgrid.stripPref(d.p.idPrefix,h);var n=d.p._index[h];if(void 0!==n){r=(e=parseInt(d.p.data[n][l],10))-parseInt(d.p.data[n][s],10)+1;var p=N(d).jqGrid("getFullTreeNode",d.p.data[n]);if(0<p.length)for(var o=0;o<p.length;o++)p[o][a]!==h&&N(d).jqGrid("delRowData",d.p.idPrefix+p[o][a]);if("nested"===d.p.treeGridModel){if((t=N.jgrid.from(d.p.data).greater(s,e,{stype:"integer"}).select()).length)for(i in t)t.hasOwnProperty(i)&&(t[i][s]=parseInt(t[i][s],10)-r);if((t=N.jgrid.from(d.p.data).greater(l,e,{stype:"integer"}).select()).length)for(i in t)t.hasOwnProperty(i)&&(t[i][l]=parseInt(t[i][l],10)-r)}}}})},addChildNode:function(e,r,t,i){var d=this[0];if(t){var a,s,l,n=d.p.treeReader.expanded_field,p=d.p.treeReader.leaf_field,o=d.p.treeReader.level_field,h=d.p.treeReader.parent_id_field,f=d.p.treeReader.left_field,c=d.p.treeReader.right_field,g=d.p.treeReader.loaded,u=0,G=r;if(void 0===i&&(i=!1),null==e){if(0<=(q=d.p.data.length-1))for(;0<=q;)u=Math.max(u,parseInt(d.p.data[q][d.p.localReader.id],10)),q--;e=u+1}var v,_,j=N(d).jqGrid("getInd",r),R=!1;if(null==r||""===r)G=r=null,a="last",s=d.p.tree_root_level,q=d.p.data.length+1;else{a="after";var I,w=N.jgrid.stripPref(d.p.idPrefix,r),x=d.p._index[w];r=(I=d.p.data[x])[d.p.localReader.id],s=parseInt(I[o],10)+1;var w=N(d).jqGrid("getFullTreeNode",I),q=w.length?(G=q=w[w.length-1][d.p.localReader.id],N(d).jqGrid("getInd",d.p.idPrefix+G)):N(d).jqGrid("getInd",d.p.idPrefix+r);if(I[p]&&(R=!0,I[n]=!0,N(d.rows[j]).find("span.cell-wrapperleaf").removeClass("cell-wrapperleaf").addClass("cell-wrapper").end().find("div.tree-leaf").removeClass(d.p.treeIcons.leaf+" tree-leaf").addClass(d.p.treeIcons.minus+" tree-minus"),d.p.data[x][p]=!1,I[g]=!0),!1===q)throw"Parent item with id: "+G+" ("+r+") can't be found";q++}if(x=q+1,void 0===t[n]&&(t[n]=!1),void 0===t[g]&&(t[g]=!1),t[o]=s,void 0===t[p]&&(t[p]=!0),"adjacency"===d.p.treeGridModel&&(t[h]=r),"nested"===d.p.treeGridModel)if(null!==r){if(l=parseInt(I[c],10),(v=N.jgrid.from.call(d,d.p.data).greaterOrEquals(c,l,{stype:"integer"}).select()).length)for(_ in v)v.hasOwnProperty(_)&&(v[_][f]=v[_][f]>l?parseInt(v[_][f],10)+2:v[_][f],v[_][c]=v[_][c]>=l?parseInt(v[_][c],10)+2:v[_][c]);t[f]=l,t[c]=l+1}else{if(l=parseInt(N(d).jqGrid("getCol",c,!1,"max"),10),(v=N.jgrid.from.call(d,d.p.data).greater(f,l,{stype:"integer"}).select()).length)for(_ in v)v.hasOwnProperty(_)&&(v[_][f]=parseInt(v[_][f],10)+2);if((v=N.jgrid.from.call(d,d.p.data).greater(c,l,{stype:"integer"}).select()).length)for(_ in v)v.hasOwnProperty(_)&&(v[_][c]=parseInt(v[_][c],10)+2);t[f]=l+1,t[c]=l+2}(null===r||N(d).jqGrid("isNodeLoaded",I)||R)&&(N(d).jqGrid("addRowData",e,t,a,d.p.idPrefix+G),N(d).jqGrid("setTreeNode",q,x)),I&&!I[n]&&i&&N(d.rows[j]).find("div.treeclick").click()}}})});