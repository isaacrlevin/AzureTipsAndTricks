(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{408:function(e,t,a){"use strict";a.r(t);var s=a(42),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/sql-database?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure SQL Database Documentation"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"easily-copy-your-sql-azure-database-to-your-local-development-server"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#easily-copy-your-sql-azure-database-to-your-local-development-server"}},[e._v("#")]),e._v(" Easily copy your SQL Azure database to your local development server")]),e._v(" "),a("p",[e._v('I\'ve ran across folks at conferences that asked me "How do you copy a SQL Azure database to my local development machine?" While chatting with them, I always found it difficult to understand why (as it is dirt cheap to have a development SQL Azure instance in the cloud) but nevertheless it is their data and there is an easy way to do this.')]),e._v(" "),a("p",[e._v("First off, "),a("a",{attrs:{href:"https://docs.microsoft.com/sql/ssms/download-sql-server-management-studio-ssms?view=sql-server-2017?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("download SQL Server Management Studio (SSMS)"),a("OutboundLink")],1),e._v(" and connect to your SQL Azure database that you want to copy locally.")]),e._v(" "),a("p",[a("strong",[e._v("Note by cbattlegear")]),e._v(" One important caveat to this process (as shown below). If any writes are happening on the database while you do the export the import will be broken. Best practice is to run "),a("code",[e._v("CREATE DATABASE AS COPY")]),e._v(" to create a copy of the database and create an export of the copy.")]),e._v(" "),a("p",[e._v("Right-click on the "),a("strong",[e._v("Database")]),e._v(" -> click "),a("strong",[e._v("Tasks")]),e._v(" > "),a("strong",[e._v("Export data-tier application")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/sqlazure1.png")}}),e._v(" "),a("p",[e._v("You'll see a wizard and will export your database to a local .bacpac file.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/sqlazure2.png")}}),e._v(" "),a("p",[e._v("You'll see something similar to this screen once it has finished processing.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/sqlazure4.png")}}),e._v(" "),a("p",[e._v("Now ensure you are connected to your local target SQL server instance (or SQL Azure instance) and right-click on "),a("strong",[e._v("Databases")]),e._v(" (the parent folder of your actual database) -> click "),a("strong",[e._v("Tasks")]),e._v(" > "),a("strong",[e._v("Import data-tier application")]),e._v(" and select the .backpac file that you created earlier.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/sqlazure3.png")}})])}),[],!1,null,null,null);t.default=o.exports}}]);