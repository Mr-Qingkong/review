webpackJsonp([1],{"9qKy":function(e,t){},"np9+":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("mw3O"),i=a.n(s),l={data:function(){return{tableData:[],multipleSelection:[],select_cate:"",select_word:"",del_list:[],is_search:!1,editVisible:!1,delVisible:!1,form:{username:"",password:"",class:"",imgURL:""},idx:-1}},created:function(){this.getData()},computed:{data:function(){var e=this;return this.tableData.filter(function(t){for(var a=!1,s=0;s<e.del_list.length;s++)if(t.username===e.del_list[s].username){a=!0;break}if(!a&&t.class.indexOf(e.select_cate)>-1&&(t.class.indexOf(e.select_word)>-1||t.username.indexOf(e.select_word)>-1))return t})}},methods:{getData:function(){var e=this;this.$axios.get("http://39.107.66.152:8080/administrator").then(function(t){e.tableData=t.data})},search:function(){this.is_search=!0},formatter:function(e,t){return e.address},filterTag:function(e,t){return t.tag===e},handleEdit:function(e,t){if(console.log(t),this.chargeAdmin("change",t)){this.idx=e;var a=this.tableData[e];this.form={username:a.username,password:"",class:a.class,imgURL:a.imgURL},this.editVisible=!0}else this.$message.error("没有足够的权限！")},handleDelete:function(e,t){this.chargeAdmin("delete",t)?(this.idx=e,this.delVisible=!0):this.$message.error("没有足够的权限！")},handleSelectionChange:function(e){this.multipleSelection=e},saveEdit:function(){this.$set(this.tableData,this.idx,this.form),this.editVisible=!1;var e=this,t=this.form.username;this.$axios.post("http://39.107.66.152:8080/admin/changePWD",i.a.stringify({username:e.form.username,password:e.form.password})).then(function(a){e.$message.success("修改成功"),e.$axios.post("http://39.107.66.152:8080/admin/addNewOption",i.a.stringify({options:localStorage.getItem("ms_username")+"修改了管理员"+t+"的信息"})).then(function(e){console.log(1)})})},deleteRow:function(){var e=this;console.log(this.tableData[this.idx]);var t=this,a=this.tableData[this.idx].username;this.$axios.post("http://39.107.66.152:8080/admin/rmAdministrator",i.a.stringify({username:t.tableData[t.idx].username})).then(function(s){e.$message.success("删除成功"),t.$axios.post("http://39.107.66.152:8080/admin/addNewOption",i.a.stringify({options:localStorage.getItem("ms_username")+"删除了管理员"+a})).then(function(e){console.log(1)})}),this.tableData.splice(this.idx,1),this.delVisible=!1},chargeAdmin:function(e,t){return"delete"==e&&"admin"==localStorage.getItem("ms_username")&&localStorage.getItem("ms_username")!=t.username||"change"==e&&("admin"==localStorage.getItem("ms_username")||localStorage.getItem("ms_username")==t.username)}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"table"},[a("div",{staticClass:"crumbs"},[a("el-breadcrumb",{attrs:{separator:"/"}},[a("el-breadcrumb-item",[e._v("管理员管理")]),e._v(" "),a("el-breadcrumb-item",[e._v("管理员列表")])],1)],1),e._v(" "),a("div",{staticClass:"container"},[a("div",{staticClass:"handle-box"},[a("el-select",{staticClass:"handle-select mr10",attrs:{placeholder:"筛选管理员"},model:{value:e.select_cate,callback:function(t){e.select_cate=t},expression:"select_cate"}},[a("el-option",{key:"1",attrs:{label:"超级管理员",value:"root"}}),e._v(" "),a("el-option",{key:"2",attrs:{label:"普通管理员",value:"admin"}})],1),e._v(" "),a("el-input",{staticClass:"handle-input mr10",attrs:{placeholder:"筛选关键词"},model:{value:e.select_word,callback:function(t){e.select_word=t},expression:"select_word"}}),e._v(" "),a("el-button",{attrs:{type:"primary",icon:"search"},on:{click:e.search}},[e._v("搜索")])],1),e._v(" "),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.data,border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),e._v(" "),a("el-table-column",{attrs:{prop:"username",label:"用户名",width:"150"}}),e._v(" "),a("el-table-column",{attrs:{prop:"class",label:"等级"}}),e._v(" "),a("el-table-column",{attrs:{prop:"imgURL",label:"头像"},scopedSlots:e._u([{key:"default",fn:function(e){return[a("img",{staticClass:"user_head",attrs:{src:e.row.imgURL,alt:"点击添加"}})]}}])}),e._v(" "),a("el-table-column",{attrs:{label:"操作",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{size:"small"},on:{click:function(a){e.handleEdit(t.$index,t.row)}}},[e._v("编辑")]),e._v(" "),a("el-button",{attrs:{size:"small",type:"danger"},on:{click:function(a){e.handleDelete(t.$index,t.row)}}},[e._v("删除")])]}}])})],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"修改密码",visible:e.editVisible,width:"30%"},on:{"update:visible":function(t){e.editVisible=t}}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"用户名为："}},[e._v("\n                "+e._s(e.form.username)+"\n            ")]),e._v(" "),a("el-form-item",{attrs:{label:"填写密码："}},[a("el-input",{attrs:{type:"password"},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1)],1),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.editVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.saveEdit}},[e._v("确定修改 ")])],1)],1),e._v(" "),a("el-dialog",{attrs:{title:"提示",visible:e.delVisible,width:"300px",center:""},on:{"update:visible":function(t){e.delVisible=t}}},[a("div",{staticClass:"del-dialog-cnt"},[e._v("删除管理员不可恢复，是否确定删除？")]),e._v(" "),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.delVisible=!1}}},[e._v("取 消")]),e._v(" "),a("el-button",{attrs:{type:"primary"},on:{click:e.deleteRow}},[e._v("确 定")])],1)])],1)},staticRenderFns:[]};var o=a("VU/8")(l,n,!1,function(e){a("9qKy")},"data-v-a0d9e47a",null);t.default=o.exports}});