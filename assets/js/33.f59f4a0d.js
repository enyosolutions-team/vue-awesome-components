(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{595:function(t,e,a){"use strict";a.r(e);var s=a(42),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[t._v("#")]),t._v(" Events")]),t._v(" "),a("p",[t._v("The AwesomeTable component features some events to create some interaction.")]),t._v(" "),a("h2",{attrs:{id:"refresh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#refresh"}},[t._v("#")]),t._v(" refresh")]),t._v(" "),a("p",[t._v("Called when the refresh button is clicked\n['image']!(./images/awesometable-refresh.png)")]),t._v(" "),a("h2",{attrs:{id:"create"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create"}},[t._v("#")]),t._v(" create")]),t._v(" "),a("p",[t._v("Called when the create button is clicked. For this button to appear :")]),t._v(" "),a("ul",[a("li",[t._v("the special "),a("code",[t._v("__ACTIONS")]),t._v(" column must be added to the list of columns")]),t._v(" "),a("li",[t._v("The create action must be set to "),a("code",[t._v("true")]),t._v(" (it is by default)")])]),t._v(" "),a("h2",{attrs:{id:"view"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#view"}},[t._v("#")]),t._v(" view")]),t._v(" "),a("p",[t._v("Called when the "),a("code",[t._v("view")]),t._v(" button is clicked or when the user clicks on the row. For this to work the view action must be set to "),a("code",[t._v("true")]),t._v(" in the options (it is by default)")]),t._v(" "),a("p",[t._v("Additionally for the button to appear the special "),a("code",[t._v("__ACTIONS")]),t._v(" column must be added to the list of columns")]),t._v(" "),a("h2",{attrs:{id:"edit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#edit"}},[t._v("#")]),t._v(" edit")]),t._v(" "),a("p",[t._v("Called when the "),a("code",[t._v("edit")]),t._v(" button is clicked  "),a("i",{staticClass:"fa fa-edit"}),t._v(" . For this but``\nton to appear :")]),t._v(" "),a("ul",[a("li",[t._v("the special "),a("code",[t._v("__ACTIONS")]),t._v(" column must be added to the list of columns")]),t._v(" "),a("li",[t._v("The edit action must be set to "),a("code",[t._v("true")]),t._v(" (it is by default)")])]),t._v(" "),a("h2",{attrs:{id:"delete"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#delete"}},[t._v("#")]),t._v(" delete")]),t._v(" "),a("p",[t._v("Called when the ## delete button is clicked  "),a("i",{staticClass:"fa fa-edit"}),t._v(" . For this button to appear :")]),t._v(" "),a("ul",[a("li",[t._v("the special "),a("code",[t._v("__ACTIONS")]),t._v(" column must be added to the list of columns")]),t._v(" "),a("li",[t._v("The ## delete action must be set to "),a("code",[t._v("true")]),t._v(" (it is by default)")])]),t._v(" "),a("h2",{attrs:{id:"customaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#customaction"}},[t._v("#")]),t._v(" customAction")]),t._v(" "),a("p",[t._v("Called when the a custom action button is clicked. For the button to appear :")]),t._v(" "),a("ul",[a("li",[t._v("the special "),a("code",[t._v("__ACTIONS")]),t._v(" column must be added to the list of columns (if the action is an inline action)")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("customAction")]),t._v(" event return an object with various properties to help you treat the action.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Property")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Usage")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("action")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("the action definition that was passed at the creation of the action")])]),t._v(" "),a("tr",[a("td",[t._v("location")]),t._v(" "),a("td",[t._v("string (inline")]),t._v(" "),a("td",[t._v("tabletop)")])]),t._v(" "),a("tr",[a("td",[t._v("item")]),t._v(" "),a("td",[t._v("Object")]),t._v(" "),a("td",[t._v("the object being clicked on if the action is an inline action")])]),t._v(" "),a("tr",[a("td",[t._v("id")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("the unique id of the button being clicked on (its basically the name of the action plus the index of the row)")])])])]),t._v(" "),a("h2",{attrs:{id:"afterrefresh"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#afterrefresh"}},[t._v("#")]),t._v(" afterRefresh")]),t._v(" "),a("p",[t._v("Emitted after the refresh of the page has completed.")]),t._v(" "),a("blockquote",[a("p",[t._v("Note: this event is only fired if the refresh was called by the user")])]),t._v(" "),a("p",[t._v("This event return the current list of items in the body.\n"),a("code",[t._v('this.$emit("afterRefresh", {data: this.data});')])]),t._v(" "),a("h2",{attrs:{id:"datachanged"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#datachanged"}},[t._v("#")]),t._v(" dataChanged")]),t._v(" "),a("p",[t._v("Called when the list of rows has changed. Most often its because a new set of data came from the api.\nIt return the new list of items received from the api.")]),t._v(" "),a("p",[t._v("This is useful for having table that will independently talk to a endpoint, while being able to access that data outside of the table if needed.")])])}),[],!1,null,null,null);e.default=i.exports}}]);