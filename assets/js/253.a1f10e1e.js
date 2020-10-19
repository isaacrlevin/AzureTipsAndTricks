(window.webpackJsonp=window.webpackJsonp||[]).push([[253],{610:function(e,s,t){"use strict";t.r(s);var r=t(42),a=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("💡 Learn more : "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/introduction?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cosmos DB"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"querying-documents-properties-with-special-characters-in-cosmos-db"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#querying-documents-properties-with-special-characters-in-cosmos-db"}},[e._v("#")]),e._v(" Querying documents properties with special characters in Cosmos DB")]),e._v(" "),t("p",[e._v("I was working with Cosmos DB yesterday and hit the following snag that I couldn't query my document that had special characters in it. Such is an example:")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/querycosmos1.png")}}),e._v(" "),t("p",[e._v("Notice the "),t("code",[e._v('"$type": "mytype",')]),e._v(" has a "),t("code",[e._v("$")]),e._v(" in it.")]),e._v(" "),t("p",[e._v("If you head over to "),t("strong",[e._v("Query Explorer")]),e._v(" and try to query it using...")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SELECT * \nFROM testing t\nWHERE t.$type = 'mytype'\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("... then you'll see the following error:")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/querycosmos2.png")}}),e._v(" "),t("p",[e._v("I was able to fix this by wrapping the property inside "),t("code",[e._v("[]")]),e._v(" such as...")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("SELECT * \nFROM testing t\nWHERE t[\"$type\"] = 'mytype'\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("Now my query returned properly")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/querycosmos3.png")}})])}),[],!1,null,null,null);s.default=a.exports}}]);