(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{447:function(e,a,t){"use strict";t.r(a);var r=t(42),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("💡 Learn more : "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/hdinsight/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure HDInsight Documentation"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"getting-started-with-hdinsight"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-hdinsight"}},[e._v("#")]),e._v(" Getting Started with HDInsight")]),e._v(" "),t("h4",{attrs:{id:"what-is-azure-hdinsight"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#what-is-azure-hdinsight"}},[e._v("#")]),e._v(" What is Azure HDInsight?")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://azure.microsoft.com/services/hdinsight?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure HDInsight"),t("OutboundLink")],1),e._v(" is a managed cloud service for analyzing large sets of data. This big data is often collected rapidly and may be relatively unstructured. By itself this data might not be very useful, but when cleaned, analyzed, and presented, it can provide actionable insights. You can use Azure HDInsight to power machine learning, IoT, or data warehousing projects.")]),e._v(" "),t("p",[e._v("The service is available in most Azure regions and has the security and compliance standards you would expect from an Azure managed service. You can use whichever language you prefer to develop with. Python, Java, and C# are just a few examples.")]),e._v(" "),t("h4",{attrs:{id:"the-elephant-in-the-room"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#the-elephant-in-the-room"}},[e._v("#")]),e._v(" The elephant in the room?")]),e._v(" "),t("p",[e._v("When you read about "),t("a",{attrs:{href:"https://azure.microsoft.com/services/hdinsight?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure HDInsight"),t("OutboundLink")],1),e._v(" (or see it in the Azure portal, you'll probably notice a little elephant icon. This is the logo for Apache Hadoop, which is an open-source distributed data analysis solution (which MS contributes to).")]),e._v(" "),t("p",[e._v("Hadoop manages the processing of large datasets across large clusters of computers and it detects and handles failures. There are related projects in the Hadoop stack such as Hive, Spark, and Kafka that HDInsight also contains.")]),e._v(" "),t("h4",{attrs:{id:"why-hadoop-on-azure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#why-hadoop-on-azure"}},[e._v("#")]),e._v(" Why Hadoop on Azure?")]),e._v(" "),t("p",[e._v("As we already know, Azure provides dynamic machines that are billed only when active. This enables elastic computing, where you can add machines for particular workloads or projects and then remove them when not needed. HDInsight can take advantage of this scalable platform. It can also capitalize on the security and management features of Azure, integration with Azure Active Directory and Log Analytics.")]),e._v(" "),t("p",[e._v("HDInsight can also integrate with familiar business intelligence tools such as Excel, PowerPivot, and SQL Server Analysis Services and Reporting Services. This is facilitated with special ODBC drivers.")]),e._v(" "),t("h4",{attrs:{id:"hardoop-for-devs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hardoop-for-devs"}},[e._v("#")]),e._v(" Hardoop for Devs")]),e._v(" "),t("p",[e._v("Hadoop uses the "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/hdinsight/hadoop/hdinsight-use-mapreduce?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("MapReduce"),t("OutboundLink")],1),e._v(" programming model. This allows you to map (filter and sort) data sources and reduce (summarize, count, etc.) to produce meaningful output from a large unstructured data source. For developing with HDInsight, you can use Visual Studio, Visual Studio Code, Eclipse, and IntelliJ development environments. You can create user-defined functions (UDFs) written in a number of languages for the Pig Latin programming language or use HiveQL, which is an SQL dialect, to treat the data like a relational model. A third tool, "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/hdinsight/hadoop/hdinsight-use-sqoop?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sqoop"),t("OutboundLink")],1),e._v(", allows you to export to a conventional relational database.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/hadoop-ecosystem.png")}}),e._v(" "),t("h4",{attrs:{id:"into-the-action-setting-up-your-cluster"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#into-the-action-setting-up-your-cluster"}},[e._v("#")]),e._v(" Into the action - Setting up your cluster")]),e._v(" "),t("p",[e._v("Adding a new HDInsight cluster is a three-step process. First, search the Azure Portal for "),t("strong",[e._v("HDInsight cluster")]),e._v(" and create a new cluster. We'll stay on the "),t("strong",[e._v("Quick create")]),e._v(" for this sample.")]),e._v(" "),t("p",[e._v("You must specify a unique name and login credentials and fill in the rest of the fields as you normally would.")]),e._v(" "),t("p",[e._v("When you get to "),t("strong",[e._v("cluster type")]),e._v(", select "),t("strong",[e._v("Hardoop")]),e._v(" and leave the rest at their default values.")]),e._v(" "),t("p",[e._v("Note: It also supports the following types:")]),e._v(" "),t("ul",[t("li",[e._v("Hadoop: Terabyte-scale processing with Hadoop components like Hive (SQL in Hadoop), Pig and Oozie.")]),e._v(" "),t("li",[e._v("HBase: Fast and scalable NoSQL database. Data Lake Storage connectivity is available in preview for HDI 3.6.")]),e._v(" "),t("li",[e._v("Storm: Reliably process infinite streams of data in real-time.")]),e._v(" "),t("li",[e._v("Spark: Fast data analytics and cluster computing using in-memory processing.")]),e._v(" "),t("li",[e._v("Interactive Query: In-memory analytics using Hive and LLAP.")]),e._v(" "),t("li",[e._v("R Server: Terabyte-scale, enterprise-grade R analytics with transparent parallelization on top of Spark and Hadoop.")]),e._v(" "),t("li",[e._v("Kafka: Fast, scalable, durable, and fault-tolerant publish-subscribe messaging system.")])]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/azure-hdinsight-basics.png")}}),e._v(" "),t("p",[e._v("Next, you either select an existing Storage account or create a new one.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/azure-hdinsight-storage.png")}}),e._v(" "),t("p",[e._v("Finally, you are presented with a summary of the options you have chosen and an estimated running cost, per hour, for this configuration.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/azure-hdinsight-summary.png")}}),e._v(" "),t("p",[e._v("Once you click "),t("strong",[e._v("Create")]),e._v(", the cluster nodes will be configured and you will be billed for the cluster until you remove it.")]),e._v(" "),t("p",[e._v("NOTE: It may take a while to spin this up. The information dialog says up to 20 minutes.")]),e._v(" "),t("p",[e._v("You can now open the cluster in the Azure Portal and do things such as scale up or scale out, manage policies (such as mask a column) or review audit logs.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/azure-hdinsight-summary3.png")}}),e._v(" "),t("p",[e._v("Click "),t("strong",[e._v("Cluster dashboards")]),e._v(" to open your Apache Ambari dashboard which simplifies Hadoop management with a GUI. You can use Ambari to manage and monitor Hadoop clusters. Developers can integrate these capabilities into their applications by using the Ambari REST APIs.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/azure-hdinsight-summary2.png")}}),e._v(" "),t("h4",{attrs:{id:"wrap-up"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#wrap-up"}},[e._v("#")]),e._v(" Wrap-up")]),e._v(" "),t("p",[e._v("You can read about the Hadoop project in more detail "),t("a",{attrs:{href:"http://hadoop.apache.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(". There is also a range of third-party applications "),t("a",{attrs:{href:"https://azure.microsoft.com/services/hdinsight/partner-ecosystem/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("to explore"),t("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);a.default=s.exports}}]);