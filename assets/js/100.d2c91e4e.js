(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{456:function(e,t,a){"use strict";a.r(t);var s=a(42),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/introduction?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cosmos DB"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"performance-testing-on-cosmos-db"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#performance-testing-on-cosmos-db"}},[e._v("#")]),e._v(" Performance Testing on Cosmos DB")]),e._v(" "),a("p",[e._v("Although "),a("a",{attrs:{href:"https://azure.microsoft.com/services/cosmos-db?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cosmos DB"),a("OutboundLink")],1),e._v(" comes with global availability and guaranteed performance, it's still incumbent on the developer and architect to understand the implication of application and database design choices on performance. Central to the discussion of performance in Cosmos DB is the concept of a "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/request-units?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("request unit (RU)"),a("OutboundLink")],1),e._v(", which is canonically defined as the processing capacity (CPU, memory, and IOPS) to perform a GET (retrieve) on a 1-KB document with 10 properties. Requests to delete, insert, or update require more capacity and so result in a higher RU cost. For instance, an insert of that same 1-KB document would incur a cost of 5 RUs.")]),e._v(" "),a("p",[e._v("RUs are also the currency of scale in Cosmos DB and, given that the RU cost of a single operation is deterministic, it is possible to estimate the cost of anticipated operations as well as to monitor the actual cost of completed operations. Armed with this information, you will be able to better assess the performance and scalability of your data architecture from planning to implementation to monitoring the production system.")]),e._v(" "),a("h5",{attrs:{id:"capacity-planning"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#capacity-planning"}},[e._v("#")]),e._v(" Capacity Planning")]),e._v(" "),a("p",[e._v("In the planning stages, you can make use of the "),a("a",{attrs:{href:"https://www.documentdb.com/capacityplanner",target:"_blank",rel:"noopener noreferrer"}},[e._v("capacity planner"),a("OutboundLink")],1),e._v(" to provide a rough estimate of required RUs given your sample document profile and the expected number of operations per second.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/cosmos-planner.png")}}),e._v(" "),a("p",[e._v("Here we can see that a query-heavy app storing 50,000 documents (of which "),a("strong",[e._v("sample.json")]),e._v(" was a representation) and expecting 20 new documents and 4 updates per second needs a database provisioned with just over 1,300 RUs.")]),e._v(" "),a("h5",{attrs:{id:"development-insight"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#development-insight"}},[e._v("#")]),e._v(" Development Insight")]),e._v(" "),a("p",[e._v("While developing your data access strategies, take a look at "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/performance-testing?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Performance and scale testing with Azure Cosmos DB"),a("OutboundLink")],1),e._v(". It describes an "),a("a",{attrs:{href:"https://github.com/Azure/azure-cosmosdb-dotnet/tree/master/samples/documentdb-benchmark?WT.mc_id=github-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("open-source benchmarking project"),a("OutboundLink")],1),e._v(" that you can adapt to your own domain to get a more precise accounting of RUs and thus the expected performance of your application. The code uses the .NET SDK and specifically applies to inserts into a document database (versus tables or graphs), but the concepts in the code can be adapted to your specific data model and query profiles. A key part of the processing is accumulating the "),a("strong",[e._v("RequestCharge")]),e._v(" from each operation:")]),e._v(" "),a("div",{staticClass:"language-csharp line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-csharp"}},[a("code",[a("span",{pre:!0,attrs:{class:"token class-name"}},[e._v("ResourceResponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("Document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v(" response "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("await")]),e._v(" client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("CreateDocumentAsync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("\n\tUriFactory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("CreateDocumentCollectionUri")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("DatabaseName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" DataCollectionName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n\tnewDictionary"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("new")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[e._v("RequestOptions")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\nrequestUnitsConsumed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("taskId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+=")]),e._v(" response"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("RequestCharge"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])]),a("p",[e._v("For the execution captured below, the exact cost of inserting 10,000 test documents is slightly less 4,000 RU/s or 4 percent of the provisioned throughput for this collection (as noted in the collection summary line at the top of the console output).")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/benchmarkapp.png")}}),e._v(" "),a("p",[e._v("It's important to note, too, that "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/partition-data?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("partitioning"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/consistency-levels?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("consistency levels"),a("OutboundLink")],1),e._v(", and "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/indexing-policies?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("indexing"),a("OutboundLink")],1),e._v(" will also have an impact on performance, so you may want to establish a baseline benchmark application and judiciously modify various configuration options and settings to determine their effect on performance.")]),e._v(" "),a("p",[e._v("Also consider using the "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/local-emulator?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cosmos DB Emulator"),a("OutboundLink")],1),e._v(" as the target of the performance testing application. It only supports document style databases and doesn't simulate different consistency levels, but it will provide insight into RU costs without incurring actual charges for running your performance tests against your Azure instance.")]),e._v(" "),a("h5",{attrs:{id:"production-monitoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#production-monitoring"}},[e._v("#")]),e._v(" Production Monitoring")]),e._v(" "),a("p",[e._v("For an operational database, the Azure portal Monitoring -> Metrics blade provides in-depth statistics on throughput, storage, availability, and latency. The Storage tab is of particular interest in that it lends insight into the partitioning of the data. Be sure to drill down into a specific database and collection to see the partition-specific metrics.")]),e._v(" "),a("p",[e._v("In the snapshot captured here, partitions are relatively evenly distributed, which indicates a good choice for a partition key. Had one partition been exceedingly large (or 'hot'), it could well be a performance bottleneck, and the accompanying list of the predominant keys in that partition could provide some suggestions for tweaking the partitioning strategy.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/partitions.png")}}),e._v(" "),a("p",[e._v("As you use the insight from these metrics to resolve potential bottlenecks, take a look at the performance tips offered by Microsoft in the following links:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/performance-tips?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Performance tips for .NET SDK"),a("OutboundLink")],1),e._v(" (or "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/performance-tips-async-java?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java"),a("OutboundLink")],1),e._v(")")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/key-value-store-cost?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cost-effective reads and writes"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/azure/cosmos-db/sql-api-partition-data?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("SQL data partitioning"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=o.exports}}]);