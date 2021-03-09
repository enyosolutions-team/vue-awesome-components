(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{575:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"template-parsing-system-wip"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#template-parsing-system-wip"}},[t._v("#")]),t._v(" Template parsing system (wip)")]),t._v(" "),a("p",[t._v("there are some cases where you want the app state to change depending on the state of some variable.")]),t._v(" "),a("p",[t._v("Example an api url that must change every time the current item has changed\nor oa field that become visible if another was selected.")]),t._v(" "),a("p",[t._v("For those case VueAwesomeComponents has you covered.  The library allows to use functions and templated strings.")]),t._v(" "),a("h2",{attrs:{id:"templated-strings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#templated-strings"}},[t._v("#")]),t._v(" templated strings")]),t._v(" "),a("p",[t._v("The templated string is a very powerful way to format dat that will be used in various place of the app.")]),t._v(" "),a("p",[t._v("Simply put Templated strings are strings with variable inside them, formatted like so")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("my best friend is `{{ currentUser.firstName }}`\n")])])]),a("p",[t._v("Usiing that templating, you'll be able to :")]),t._v(" "),a("ul",[a("li",[t._v("Define the condition for an item to display")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("      estimatedDuration"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        field"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          visible"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{{ currentItem.isPublished }}'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// this is templated.")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("ul",[a("li",[t._v("Format the display field of any item")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in a model or in a relation label field")]),t._v("\n  primaryKeyField"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  displayField"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{{firstName}} {{lastName}}'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("ul",[a("li",[t._v("Define the url dynamically")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in a nested module")]),t._v("\n    nestedModels"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'extends'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'workshop'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/api/workshop?filters[moduleId]={{parent.id}}'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"available-items-in-a-templated-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#available-items-in-a-templated-string"}},[t._v("#")]),t._v(" Available items in a templated string.")]),t._v(" "),a("p",[t._v("Templated strings have predefined vaiable in them")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("currentItem")]),t._v(" The item currently displayed, or in use (case ).")]),t._v(" "),a("li",[a("code",[t._v("items")]),t._v(" The list of items on display (for tables, lists and kanban).")]),t._v(" "),a("li",[a("code",[t._v("parent")]),t._v(" The currentitem on the parent context (moslty used for nestedModules) .")]),t._v(" "),a("li",[a("code",[t._v("context")]),t._v(" access to the component being sollicitated.")]),t._v(" "),a("li",[a("code",[t._v("$state")]),t._v(" access to the vuex state.")]),t._v(" "),a("li",[a("code",[t._v("componentMode")]),t._v(" access to the component display state => 'table' | 'create' | 'view' | 'edit' | 'list' | 'kanban' etc")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("        parent: this.parent,\n        context: this,\n        currentItem: this.selectedItem,\n        items: this.items,\n        $state: this.$store && this.$store.state,\n        userHasRole: this.userHasRole,\n        componentMode: this.mode || this.displayMode\n")])])]),a("h2",{attrs:{id:"functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#functions"}},[t._v("#")]),t._v(" functions")]),t._v(" "),a("p",[t._v("Templated strings have predefined vaiable in them")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("userHasRole")]),t._v(" Function to check the user role")]),t._v(" "),a("li",[a("code",[t._v("moment")]),t._v(" Function to manipulate date")])])])}),[],!1,null,null,null);e.default=n.exports}}]);