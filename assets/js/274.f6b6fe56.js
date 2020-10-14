(window.webpackJsonp=window.webpackJsonp||[]).push([[274],{627:function(e,t,a){"use strict";a.r(t);var s=a(42),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/virtual-machines/windows/sql/virtual-machines-windows-sql-server-iaas-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("SQL Server on Azure Virtual Machines"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"implementing-azure-search-with-sql-server-and-asp-net-mvc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementing-azure-search-with-sql-server-and-asp-net-mvc"}},[e._v("#")]),e._v(" Implementing Azure Search with SQL Server and ASP.NET MVC")]),e._v(" "),a("p",[e._v("In this series I'll cover Azure Search, SQL Server and putting it all together in a ASP.NET MVC web app. The complete list can be found below:")]),e._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/blog/tip90.html"}},[e._v("Part 1")])],1),e._v(" "),a("li",[a("RouterLink",{attrs:{to:"/blog/tip91.html"}},[e._v("This post - Part 2")])],1)]),e._v(" "),a("h4",{attrs:{id:"implementing-azure-search"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#implementing-azure-search"}},[e._v("#")]),e._v(" Implementing Azure Search")]),e._v(" "),a("p",[e._v("Yesterday, we learned that Azure Search is a search-as-a-service that allows you to search over your content using web, desktop or mobile apps. There is variety of services that you can attach Azure Search to, including SQL Server - which we covered yesterday. Today we'll walk through adding Azure Search to our existing SQL Server instance.")]),e._v(" "),a("p",[e._v("Open the Azure Portal, and navigate to your SQL Server instance and begin by looking at the  "),a("strong",[e._v("Settings")]),e._v(" pane:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azuresearchsql1.png")}}),e._v(" "),a("p",[e._v("Select a "),a("strong",[e._v("Add Azure Search")]),e._v(" and fill out the fields specified below and make sure to select the price as free.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azuresearchsql2.png")}}),e._v(" "),a("p",[e._v("Under "),a("strong",[e._v("Data Source")]),e._v(", we can easily connect to our Azure SQL Database, we'll need to give it a name, provide the userid and password (that we specified when setting up the SQL db) and press "),a("strong",[e._v("Test Connection")]),e._v(". If everything goes well, then you'll be able to select the "),a("strong",[e._v("Customer")]),e._v(" table.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azuresearchsql3.png")}}),e._v(" "),a("p",[e._v("We'll need to set an index. So give it a name and select "),a("strong",[e._v("CustomerID")]),e._v(" as our Key. We'll now clean up our fields, by deleting ones that we don't want and making sure the fields can be retrieved, sorted, filtered and are searchable by adding a check.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azuresearchsql4.png")}}),e._v(" "),a("p",[e._v("We need to create an indexer to run. I'm going to select the "),a("strong",[e._v("Daily")]),e._v(" schedule and set my watermark column to the "),a("strong",[e._v("ModifiedDate")]),e._v(" as I assume data is unique in that column.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azuresearchsql5.png")}}),e._v(" "),a("p",[e._v("Once you kick that off, you'll see the following notification. It states you can check the monitor progress and once complete you can start searching.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azuresearchsql6.png")}}),e._v(" "),a("p",[e._v("If you go ahead and click on the link on the notification window, then you'll see the following screen.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azuresearchsql7.png")}}),e._v(" "),a("p",[e._v("Go ahead and press the Run button and it will start immediately and eventually you'll see it has completed.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/azuresearchsql8.png")}})])}),[],!1,null,null,null);t.default=r.exports}}]);