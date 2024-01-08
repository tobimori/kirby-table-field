(function(){"use strict";function p(e,t,s,a,l,n,d,u){var i=typeof e=="function"?e.options:e;t&&(i.render=t,i.staticRenderFns=s,i._compiled=!0),a&&(i.functional=!0),n&&(i._scopeId="data-v-"+n);var r;if(d?(r=function(o){o=o||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!o&&typeof __VUE_SSR_CONTEXT__<"u"&&(o=__VUE_SSR_CONTEXT__),l&&l.call(this,o),o&&o._registeredComponents&&o._registeredComponents.add(d)},i._ssrRegister=r):l&&(r=u?function(){l.call(this,(i.functional?this.parent:this).$root.$options.shadowRoot)}:l),r)if(i.functional){i._injectStyles=r;var v=i.render;i.render=function(C,h){return r.call(h),v(C,h)}}else{var c=i.beforeCreate;i.beforeCreate=c?[].concat(c,r):[r]}return{exports:e,options:i}}const b={props:{label:String,type:String,help:String,empty:String,disabled:Boolean,required:Boolean,value:[String,Array],index:{type:[Number,Boolean],default:1},sortable:{type:Boolean,default:!0},duplicate:{type:Boolean,default:!0},minColumns:{type:Number,default:2},maxColumns:{type:Number,default:5}},computed:{values(){return[...this.tableData]},columns(){return this.tableData[0]},rows(){return this.tableData.slice(1)},colspan(){let e=this.columns.length;return this.hasIndexColumn&&e++,e},hasIndexColumn(){return this.sortable||this.index!==!1},tableData(){const e=a=>a.trim().replace(/^- /,"").replace(/^[\"\'](.*)[\"\']$/g,"$1"),t=a=>a==="- ";let s=typeof this.value=="string"?this.value.split(`
`).reduce((a,l)=>(t(l)?a.push([]):a[a.length-1].push(e(l)),a),[]).filter(a=>a.length>0).map(a=>[...a]):this.value;return s||(s=Array.from({length:2},()=>Array(this.minColumns).fill(""))),s},dragOptions(){return{disabled:!this.sortable,fallbackClass:"k-table-row-fallback",ghostClass:"k-table-row-ghost"}},options(){return[{click:()=>this.removeAll(),disabled:this.rows.length===0&&this.columns.length<=this.minColumns,icon:"trash",text:this.$t("delete.all")}]},columnOptions(){return[{disabled:this.columns.length>=this.maxColumns,icon:"angle-left",text:this.$t("insert.before"),click:"insertBefore"},{disabled:this.columns.length>=this.maxColumns,icon:"angle-right",text:this.$t("insert.after"),click:"insertAfter"},"-",{disabled:!this.duplicate||this.columns.length>=this.maxColumns,icon:"copy",text:this.$t("duplicate"),click:"duplicate"},"-",{disabled:this.columns.length<=this.minColumns,icon:"trash",text:this.$t("delete"),click:"remove"}]},rowOptions(){return[{icon:"angle-up",text:this.$t("insert.before"),click:"insertBefore"},{icon:"angle-down",text:this.$t("insert.after"),click:"insertAfter"},"-",{disabled:!this.duplicate,icon:"copy",text:this.$t("duplicate"),click:"duplicate"},"-",{icon:"trash",text:this.$t("delete"),click:"remove"}]}},methods:{columnOption(e,t){switch(e){case"insertBefore":this.insertColumn(t,"before");break;case"insertAfter":this.insertColumn(t,"after");break;case"duplicate":this.duplicateColumn(t);break;case"remove":this.removeColumn(t);break}},rowOption(e,t){switch(e){case"insertBefore":this.insertRow(t,"before");break;case"insertAfter":this.insertRow(t,"after");break;case"duplicate":this.duplicateRow(t);break;case"remove":this.removeRow(t);break}},moveArray(e,t,s){e.splice(s,0,...e.splice(t,1))},moveColumn(e,t){this.moveArray(this.columns,e,t),this.rows.forEach(s=>this.moveArray(s,e,t)),this.updateTable()},moveRow(e,t){this.moveArray(this.tableData,e,t),this.updateTable()},onColumnDrag(e){this.moveColumn(e.oldIndex-1,e.newIndex-1)},onRowDrag(e){this.moveRow(e.oldIndex+1,e.newIndex+1)},addRow(){this.tableData.push(Array(this.columns.length).fill("")),this.updateTable()},addColumn(){this.tableData.forEach(e=>e.push("")),this.updateTable()},removeColumn(e){this.$panel.dialog.open({component:"k-remove-dialog",props:{text:this.$t("field.table.delete.confirm.column")},on:{submit:()=>{this.tableData.forEach(t=>t.splice(e,1)),this.updateTable(),this.$panel.dialog.close()}}})},removeRow(e){this.$panel.dialog.open({component:"k-remove-dialog",props:{text:this.$t("field.table.delete.confirm.row")},on:{submit:()=>{this.tableData.splice(e+1,1),this.updateTable(),this.$panel.dialog.close()}}})},insertColumn(e,t="before"){const s=t==="before"?e:e+1;this.columns.splice(s,0,""),this.rows.forEach(a=>a.splice(s,0,"")),this.updateTable()},insertRow(e,t="before"){const s=t==="before"?e+1:e+2;this.tableData.splice(s,0,Array(this.columns.length).fill("")),this.updateTable()},duplicateColumn(e){this.columns.splice(e+1,0,this.columns[e]),this.rows.forEach(t=>t.splice(e+1,0,t[e])),this.updateTable()},duplicateRow(e){this.tableData.splice(e+1,0,[...this.tableData[e+1]]),this.updateTable()},removeAll(){this.$panel.dialog.open({component:"k-remove-dialog",props:{text:this.$t("field.table.delete.confirm.all")},on:{submit:()=>{this.columns.splice(0,this.columns.length,...Array.from({length:this.minColumns},()=>"")),this.tableData.splice(0,this.tableData.length,Array(this.minColumns).fill("")),this.updateTable(),this.$panel.dialog.close()}}})},updateTable(){this.$emit("input",this.tableData)}}};var m=function(){var t=this,s=t._self._c;return s("k-field",t._b({staticClass:"k-table-field",scopedSlots:t._u([t.disabled?null:{key:"options",fn:function(){return[s("k-button-group",{attrs:{layout:"collapsed"}},[s("k-button",{attrs:{disabled:t.columns.length>=t.maxColumns,text:t.$t("field.table.column"),icon:"add",variant:"filled",size:"xs"},on:{click:function(a){return t.addColumn()}}}),s("k-button",{attrs:{icon:"dots",size:"xs",variant:"filled"},on:{click:function(a){return t.$refs.options.toggle()}}}),s("k-dropdown-content",{ref:"options",attrs:{options:t.options,"align-x":"end"}})],1)]},proxy:!0}],null,!0)},"k-field",t.$props,!1),[s("div",{staticClass:"k-table",attrs:{"aria-disabled":t.disabled}},[s("table",{attrs:{"data-disabled":t.disabled,"data-indexed":t.hasIndexColumn}},[s("thead",[s("k-draggable",{attrs:{list:t.values,options:t.dragOptions,handle:!0,element:"tr"},on:{end:t.onColumnDrag}},[t.hasIndexColumn?s("th",{staticClass:"k-table-index-column"},[t._v("#")]):t._e(),t._l(t.columns,function(a,l){return s("th",{key:l+"-header",staticClass:"k-table-column k-table-header",attrs:{"data-sortable":!t.disabled&&t.sortable}},[s("k-bar",[!t.disabled&&t.sortable?s("k-sort-handle",{staticClass:"k-table-sort-handle"}):t._e(),s("k-text-input",{attrs:{placeholder:`${t.$t("field.table.column")} ${l+1}`,type:"text"},on:{input:function(n){return t.updateTable()}},model:{value:t.columns[l],callback:function(n){t.$set(t.columns,l,n)},expression:"columns[columnIndex]"}}),t.disabled?t._e():s("k-options-dropdown",{attrs:{options:t.columnOptions},on:{option:function(n){return t.columnOption(n,l)}}})],1)],1)}),!t.disabled&&t.rows.length!==0?s("th",{staticClass:"k-table-options-column"}):t._e()],2)],1),s("k-draggable",{attrs:{list:t.values,options:t.dragOptions,handle:!0,element:"tbody"},on:{end:t.onRowDrag}},[t.rows.length===0?s("tr",[s("td",{staticClass:"k-table-empty",attrs:{colspan:t.colspan}},[t._v(" "+t._s(t.empty??t.$t("field.table.empty.rows"))+" ")])]):t._l(t.rows,function(a,l){return s("tr",{key:l},[t.hasIndexColumn?s("td",{staticClass:"k-table-index-column",attrs:{"data-sortable":!t.disabled&&t.sortable&&t.rows.length>1}},[s("div",{staticClass:"k-table-index",domProps:{textContent:t._s(t.index+l)}}),!t.disabled&&t.sortable&&t.rows.length>1?s("k-sort-handle",{staticClass:"k-table-sort-handle"}):t._e()],1):t._e(),t._l(a,function(n,d){return s("td",{key:d,staticClass:"k-table-column k-table-cell"},[s("k-text-input",{attrs:{type:"text"},on:{input:function(u){return t.updateTable()}},model:{value:a[d],callback:function(u){t.$set(a,d,u)},expression:"row[columnIndex]"}})],1)}),t.disabled?t._e():s("td",{staticClass:"k-table-options-column"},[s("k-options-dropdown",{attrs:{options:t.rowOptions},on:{option:function(n){return t.rowOption(n,l)}}})],1)],2)})],2)],1)]),t.disabled?t._e():s("footer",[s("k-button",{attrs:{text:t.$t("field.table.row"),icon:"add",size:"xs",variant:"filled"},on:{click:function(a){return t.addRow()}}})],1)])},f=[],k=p(b,m,f,!1,null,null,null,null);const g=k.exports;panel.plugin("bogdancondorachi/table-field",{fields:{table:g}})})();
