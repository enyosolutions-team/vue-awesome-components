(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{400:function(e,t,o){},510:function(e,t){e.exports={$id:"http://enyosolutions.com/schemas/ticket.json",type:"object",required:["id","type","subject","body","status","regionId","type","userId"],formOptions:{optionsLayout:{layout:[{x:0,y:0,w:3,h:6,i:0,fields:["type","url","test","id","test2"]},{x:3,y:0,w:3,h:3,i:1,fields:["regionId"]},{x:6,y:0,w:3,h:3,i:2,fields:["userId"]}]}},formGroups:[{id:"infos",title:"informations",wrapperClasses:"col-3",stylesClasses:"",headerClasses:"text-primary",type:"group",groups:[{id:"metaData",title:"metaData",wrapperClasses:"col-6",stylesClasses:"",headerClasses:"text-primary",type:"group"}]},{id:"details",title:"Détails",wrapperClasses:"col-9",stylesClasses:"",headerClasses:"text-danger"}],properties:{id:{$id:"_id",type:"number",title:"numéro de course",description:"Identifiant de la course",field:{}},type:{type:"string",title:"Type de ticket",description:"type de ticket",field:{required:!0,group:"infos.metaData"}},status:{type:"string",title:"Statut",description:"Statut du ticket",enum:["new","opened","treated","archived"],field:{group:"details",enum:["new","opened","treated","archived"],required:!0,type:"select"}},regionId:{type:"integer",title:"numéro région",description:"Identifiant de la région de course",field:{group:"details",required:!0}},userId:{type:"integer",title:"numéro utilisateur",description:"Identifiant utilisateur",relation:"user",relationUrl:"/users",relationKey:"id",relationLabel:"email",field:{required:!1,type:"VSelect",group:"infos.metaData",styleClasses:"col-6",fieldOptions:{trackBy:"id",label:"email"}}},userId2:{type:"integer",relation:"user",relationUrl:"/users",relationKey:"id",relationLabel:"email",label:"email",field:{required:!1,type:"VSelect",group:"infos.metaData",styleClasses:"col-6",fieldOptions:{trackBy:"id",label:"email",preload:!0}}},subject:{type:"string",title:"Sujet",description:"Sujet du ticket",field:{group:"message",required:!0,styleClasses:"col-6"}},body:{type:"string",title:"Message",description:"Texte saisi dans le ticket",field:{group:"message",required:!0,type:"textArea",classes:"col-6"}},createdOn:{type:["string","object"],format:"date-time",readonly:!0,column:{type:"datetime",format:"DD_MM_YYYY (HH,MM)",classes:"badge badge-primary"},field:{group:"metaData",type:"dateTime",classes:"col-6",styles:"display:block"}},lastModifiedOn:{type:["string","object"],format:"date-time",readonly:!0,column:{type:"datetime"},field:{group:"metaData",type:"dateTime",classes:"col-6"}}}}},511:function(e,t,o){"use strict";var s=o(400);o.n(s).a},555:function(e,t,o){"use strict";o.r(t);o(10);var s=o(510),i=o.n(s),l={name:"AwesomeCrudDemo",components:{},props:{},mounted:function(){var e=this;Promise.all([o.e(0),o.e(1),o.e(3),o.e(2),o.e(7)]).then(o.bind(null,328)).then((function(t){e.AwesomeCrud=t}))},data:function(){return{ticketModel:i.a,AwesomeCrud:""}}},a=(o(511),o(42)),d=Object(a.a)(l,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._v("\n  ``\n  "),o("h3",[e._v("Simple Crud")]),e._v(" "),o("pre",{staticStyle:{color:"white"}},[e._v("    < AwesomeCrud@\n    :columns=\"['col1', 'col2', 'col3', 'col4']\"\n    :rows=\"[\n    {col1: 'qq', col2:'some data', col3: 'oopsie',\n    notDisplayedColumn: 'ghosted'},\n    {col1: 'qq2', col2:'some moore data', col3: 'oopsie',\n    notDisplayedColumn: 'ghosted'},\n    {col1: 'qq3', col2:'a third data', col3: 'oopsie',\n    notDisplayedColumn: 'ghosted'},\n    ]\"\n    :options=\"{actions: {noActions: false}}\"\n    />\n  ")]),e._v(" "),o(e.AwesomeCrud,{tag:"div",attrs:{"model-name":"ticket",schema:e.ticketModel,columns:["col1","col2","col3"],"modal-mode":"slide",rows:[{col1:"qq",col2:"some data",col3:"oopsie",notDisplayedColumn:"ghosted"},{col1:"qq2",col2:"some moore data",col3:"oopsie",notDisplayedColumn:"ghosted"},{col1:"qq3",col2:"a third data",col3:"oopsie",notDisplayedColumn:"ghosted"}],options:{detailPageMode:"modal",actions:{create:!0}}}}),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("br"),e._v(" "),o("h3",[e._v("Table with details opening in slide mode")]),e._v(" "),o(e.AwesomeCrud,{tag:"div",attrs:{"model-name":"ticket2",schema:e.ticketModel,columns:["col1","col2","col3"],rows:[{col1:"qq",col2:"some data",col3:"oopsie",notDisplayedColumn:"ghosted"},{col1:"qq2",col2:"some moore data",col3:"oopsie",notDisplayedColumn:"ghosted"},{col1:"qq3",col2:"a third data",col3:"oopsie",notDisplayedColumn:"ghosted"}],options:{detailPageMode:"slide",actions:{create:!0}}}})],1)}),[],!1,null,null,null);t.default=d.exports}}]);