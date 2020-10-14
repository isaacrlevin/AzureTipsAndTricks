(window.webpackJsonp=window.webpackJsonp||[]).push([[269],{622:function(t,a,s){"use strict";s.r(a);var r=s(42),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("💡 Learn more : "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/common/storage-account-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure storage account overview"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h4",{attrs:{id:"ensure-a-clean-rowkey-in-azure-storage-table"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ensure-a-clean-rowkey-in-azure-storage-table"}},[t._v("#")]),t._v(" Ensure a clean RowKey in Azure Storage Table")]),t._v(" "),s("p",[t._v("In case you are new to the Azure Storage Tables, we've reviewed the following items so far:")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip82.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Creating your first Azure Storage Table"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip83.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Adding an item to a Azure Storage Table"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip84.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Reading an item from a Azure Storage Table"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip85.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Updating an item from a Azure Storage Table"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip86.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Deleting an item from a Azure Storage Table"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip86.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ensure a clean RowKey in Azure Storage Table"),s("OutboundLink")],1)])]),t._v(" "),s("h4",{attrs:{id:"the-problem"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-problem"}},[t._v("#")]),t._v(" The problem")]),t._v(" "),s("p",[t._v("If you've ever been working with Azure Table Storage and tried to insert data and received "),s("strong",[t._v("400 Bad Request")]),t._v(", then you've probably narrowed this down to a malformed "),s("strong",[t._v("PartitionKey")]),t._v(" or "),s("strong",[t._v("RowKey")]),t._v(" after many hours. This is due to the fact that for "),s("strong",[t._v("PartitionKey")]),t._v(" and "),s("strong",[t._v("RowKey")]),t._v(", there are some disallowed characters such as:")]),t._v(" "),s("ul",[s("li",[t._v("The forward slash (/) character")]),t._v(" "),s("li",[t._v("The backslash () character")]),t._v(" "),s("li",[t._v("The number sign (#) character")]),t._v(" "),s("li",[t._v("The question mark (?) character")]),t._v(" "),s("li",[t._v("Control characters from U+0000 to U+001F, including:")]),t._v(" "),s("li",[t._v("The horizontal tab (\\t) character")]),t._v(" "),s("li",[t._v("The linefeed (\\n) character")]),t._v(" "),s("li",[t._v("The carriage return (\\r) character")]),t._v(" "),s("li",[t._v("Control characters from U+007F to U+009F")])]),t._v(" "),s("p",[s("strong",[t._v("Debugging in Visual Studio")]),t._v(" If you are debugging in Visual Studio, then you can also check the "),s("em",[t._v("StorageException.RequestInformation.ExtendedInformation")]),t._v(" to gain additional information about the error.")]),t._v(" "),s("h4",{attrs:{id:"the-solution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-solution"}},[t._v("#")]),t._v(" The Solution")]),t._v(" "),s("p",[t._v("There is many ways that you can handle this, but my favorite is this extension method that simply strips away those characters as shown below.")]),t._v(" "),s("div",{staticClass:"language-csharp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token return-type class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToAzureKeyString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")])]),t._v(" str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" sb "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("StringBuilder")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("foreach")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")])]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" str\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Where")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string character"}},[t._v("'/'")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string character"}},[t._v("'\\\\'")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string character"}},[t._v("'#'")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string character"}},[t._v("'/'")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" c "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string character"}},[t._v("'?'")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("char")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("IsControl")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        sb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Append")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("c"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);