(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{225:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{json:null}},methods:{onFileChange:function(e){var t=this,n=e.target.files[0];if(n){var o=new FileReader;o.onload=function(e){t.json=JSON.parse(e.target.result),t.$emit("jsondata",t.json)},o.readAsText(n)}}}},l=n(36),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("label",{attrs:{for:"data_upload"}},[e._v("ファイル(JSON)を選択")]),e._v(" "),n("input",{attrs:{id:"data_upload",type:"file",name:"data_upload"},on:{change:e.onFileChange}})])}),[],!1,null,"101bebc8",null);t.default=component.exports}}]);