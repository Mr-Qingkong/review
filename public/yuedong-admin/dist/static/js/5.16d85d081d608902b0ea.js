webpackJsonp([5],{"A2H/":function(t,e){},CtWP:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var l=a("//Fk"),i=a.n(l),s=a("mw3O"),n=a.n(s),o={data:function(){return{myhost:"http://39.107.66.152:8080",tableData:[],showData:[],page_size:7,cur_page:1,seen:!0,multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,editVisible:!1,delArr:[],delVisible:!1,delAllVisible:!1,form:{},idx:-1}},created:function(){this.getData()},methods:{handleCurrentChange:function(t){this.cur_page=t,this.getData()},getData:function(){var t=this;this.$axios.post(this.myhost+"/admin/activity",n.a.stringify({page_size:7,cur_page:t.cur_page})).then(function(e){t.tableData=e.data})},search:function(){if(this.select_word){this.seen=!1;var t=this;new i.a(function(e,a){t.$axios.post("http://39.107.66.152:8080/admin/activity",n.a.stringify({page_size:"all",cur_page:t.cur_page})).then(function(a){t.tableData=a.data,e()})}).then(function(e){t.tableData=t.filterForm("actName","actPlace")})}else this.seen=!0,this.getData()},formatter:function(t,e){return t.address},filterForm:function(t,e){var a=this;return this.tableData.filter(function(l){for(var i=!1,s=0;s<a.del_list.length;s++)if(l.word1===a.del_list[s].word1){i=!0;break}if(!i&&(l[t].indexOf(a.select_word)>-1||l[e].indexOf(a.select_word)>-1))return l})},filterTag:function(t,e){return e.tag===t},handleEdit:function(t,e){this.idx=t;var a=this.tableData[t];this.form={actID:a.actID,actName:a.actName,actPlace:a.actPlace,actTime:a.actTime,actClass:a.actClass,userID:a.userID},this.editVisible=!0},handleDelete:function(t,e){this.idx=t,this.delVisible=!0},addDelAll:function(){this.delAllVisible=!0},delAll:function(){for(var t=[],e=0;e<this.multipleSelection.length;e++)t.push(this.multipleSelection[e].actID);this.delForm(t),this.delAllVisible=!1},delForm:function(t){if(t==[])this.$message.error("请先选择活动！");else{var e=this;this.$axios.post("http://39.107.66.152:8080/admin/rmActivity",n.a.stringify({delArr:t})).then(function(t){"1"==t.data&&(e.$message.success("删除成功"),e.getData())})}},handleSelectionChange:function(t){this.multipleSelection=t},saveEdit:function(){this.$set(this.tableData,this.idx,this.form),this.editVisible=!1;var t=this;this.$axios.post("http://39.107.66.152:8080/admin/changeActivity",n.a.stringify({actID:t.form.actID,actName:t.form.actName,actPlace:t.form.actPlace,actClass:t.form.actClass,actTime:t.form.actTime})).then(function(e){"1"==e.data&&(t.$message.success("修改成功"),t.getData())})},deleteRow:function(){var t=[];t.push(this.tableData[this.idx].actID),this.delForm(t),this.delVisible=!1}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[t._v("活动管理")]),t._v(" "),a("el-breadcrumb-item",[t._v("活动列表")])],1)],1),t._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-button",{staticClass:"handle-del mr10",attrs:{type:"primary",icon:"delete"},on:{click:t.addDelAll}},[t._v("批量删除")]),t._v(" "),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"按名称或地址搜索"},model:{value:t.select_word,callback:function(e){t.select_word=e},expression:"select_word"}}),t._v(" "),a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:t.search}},[t._v("搜索")])],1),t._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),t._v(" "),a("el-table-column",{attrs:{prop:"actID",label:"活动ID"}}),t._v(" "),a("el-table-column",{attrs:{prop:"actName",label:"活动名"}}),t._v(" "),a("el-table-column",{attrs:{prop:"actPlace",label:"活动地址"}}),t._v(" "),a("el-table-column",{attrs:{prop:"actTime",label:"活动时间"}}),t._v(" "),a("el-table-column",{attrs:{prop:"actClass",label:"活动分类"}}),t._v(" "),a("el-table-column",{attrs:{prop:"userID",label:"发起人"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),t._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){t.handleDelete(e.$index,e.row)}}},[t._v("删除")])]}}])})],1),t._v(" "),t.seen?a("div",{staticClass:"pagination"},[a("el-pagination",{attrs:{layout:"prev, pager, next",total:50,"page-size":7,"current-page":t.cur_page},on:{"current-change":t.handleCurrentChange}})],1):t._e()],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑场馆",visible:t.editVisible,width:"30%"},on:{"update:visible":function(e){t.editVisible=e}}},[a("el-form",{ref:"form",attrs:{model:t.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"活动ID为："}},[t._v("\n                "+t._s(t.form.actID)+"\n            ")]),t._v(" "),a("el-form-item",{attrs:{label:"活动名："}},[a("el-input",{model:{value:t.form.actName,callback:function(e){t.$set(t.form,"actName",e)},expression:"form.actName"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"活动地址："}},[a("el-input",{model:{value:t.form.actPlace,callback:function(e){t.$set(t.form,"actPlace",e)},expression:"form.actPlace"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"活动时间："}},[a("el-date-picker",{attrs:{type:"datetime",placeholder:"选择时间"},model:{value:t.form.actTime,callback:function(e){t.$set(t.form,"actTime",e)},expression:"form.actTime"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"活动分类："}},[a("el-input",{model:{value:t.form.actClass,callback:function(e){t.$set(t.form,"actClass",e)},expression:"form.actClass"}})],1)],1),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.editVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.saveEdit}},[t._v("确定修改 ")])],1)],1),t._v(" "),a("el-dialog",{attrs:{title:"提示",visible:t.delVisible,width:"300px",center:""},on:{"update:visible":function(e){t.delVisible=e}}},[a("div",{staticClass:"del-dialog-cnt"},[t._v("删除活动不可恢复，是否确定删除？")]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.delVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.deleteRow}},[t._v("确 定")])],1)]),t._v(" "),a("el-dialog",{attrs:{title:"提示",visible:t.delAllVisible,width:"300px",center:""},on:{"update:visible":function(e){t.delAllVisible=e}}},[a("div",{staticClass:"del-dialog-cnt"},[t._v("批量删除活动不可恢复，是否确定删除？")]),t._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.delAllVisible=!1}}},[t._v("取 消")]),t._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:t.delAll}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var c=a("VU/8")(o,r,!1,function(t){a("A2H/")},"data-v-b4479d5a",null);e.default=c.exports}});