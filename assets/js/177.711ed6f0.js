(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{529:function(e,t,r){"use strict";r.r(t);var n=r(42),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("🔥 Make sure you "),r("a",{attrs:{href:"http://azuredev.tips?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("star the repo"),r("OutboundLink")],1),e._v(" to keep up to date with new tips and tricks.")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/private-link/private-link-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Private Link overview"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=311a6u0eAVw&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=4&t=0s?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How can I get started with Azure Private Link "),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h4",{attrs:{id:"connect-to-services-securely"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#connect-to-services-securely"}},[e._v("#")]),e._v(" Connect to services securely")]),e._v(" "),r("p",[e._v("It is very important to secure all aspects of your application, including your data communications. This can be difficult as services in the cloud are often exposed to the public internet. "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/private-link/private-link-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Private Link"),r("OutboundLink")],1),e._v(" can help to secure traffic between Azure services and other applications. You can use Azure Private Link to secure Azure services and also your own services, that are behind an "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/load-balancer/load-balancer-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Load Balancer"),r("OutboundLink")],1),e._v(". Consumers of services that are protected with Private Link, can simply use the Private Link and communicate with the protected services directly, over the Azure backbone, instead of over the public internet.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/47privatelink.png")}}),e._v(" "),r("p",[e._v("(Azure Private Link)")]),e._v(" "),r("p",[e._v("In this post, we'll secure an "),r("a",{attrs:{href:"https://azure.microsoft.com/services/sql-database/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure SQL Database"),r("OutboundLink")],1),e._v(" with Azure Private Link and use it securely from an "),r("a",{attrs:{href:"https://azure.microsoft.com/services/virtual-machines/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Virtual Machine"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h4",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),r("ul",[r("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),r("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),r("OutboundLink")],1),e._v(" before you begin)")])]),e._v(" "),r("h4",{attrs:{id:"using-azure-private-link-to-connect-to-a-sql-database"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#using-azure-private-link-to-connect-to-a-sql-database"}},[e._v("#")]),e._v(" Using Azure Private Link to connect to a SQL Database")]),e._v(" "),r("p",[e._v("We are going to create a Private Endpoint for an Azure SQL Database. The VM that we are going to create can use that Private Endpoint to securely access the SQL Database.")]),e._v(" "),r("p",[e._v("We'll start by creating a Virtual Network that the Virtual Machine is going to use.")]),e._v(" "),r("p",[r("strong",[e._v("1. Create a Virtual Network")])]),e._v(" "),r("ol",[r("li",[e._v("Go to the "),r("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Click the "),r("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")]),e._v(" "),r("li",[e._v("Search for "),r("strong",[e._v("Virtual Network")]),e._v(" and click on the result to start creating a VNET\na. This brings you to the "),r("strong",[e._v("create virtual network blade")]),e._v("\nb. Fill in a "),r("strong",[e._v("Name")]),e._v(" for the VNET\nc. In "),r("strong",[e._v("Address space")]),e._v(" fill in "),r("strong",[e._v("10.1.0.0/16")]),e._v("\nd. Create a "),r("strong",[e._v("new Resource Group")]),e._v(" called "),r("strong",[e._v("PrivateLink")]),e._v(". We'll put all of our resources in here\ne. Choose "),r("strong",[e._v("West Central US")]),e._v(" for "),r("strong",[e._v("Location")]),e._v("\nf. Fill in a "),r("strong",[e._v("Name")]),e._v(" for the subnet\ng. For "),r("strong",[e._v("Address range")]),e._v(" for the subnet, fill in "),r("strong",[e._v("10.1.0.0/24")]),e._v("\nh. Leave the rest and click "),r("strong",[e._v("Create")]),e._v(" to create the Virtual Network")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/47createvnet.png")}}),e._v(" "),r("p",[e._v("(Create Azure Virtual Network)")]),e._v(" "),r("p",[r("strong",[e._v("2. Create a Virtual Machine")])]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Click the "),r("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")])]),e._v(" "),r("li",[r("p",[e._v("Click "),r("strong",[e._v("Create a resource > Compute > Virtual Machine")]),e._v("\na. This brings you to first page of the "),r("strong",[e._v("Create a virtual machine wizard")]),e._v("\nb. Select the "),r("strong",[e._v("PrivateLink Resource Group")]),e._v("\nc. Fill in a "),r("strong",[e._v("Name")]),e._v(" for the VM\nd. Choose "),r("strong",[e._v("West Central US")]),e._v(" for "),r("strong",[e._v("Region")]),e._v("\ne. Select "),r("strong",[e._v("Windows Server 2019 Datacenter")]),e._v(" for "),r("strong",[e._v("Image")]),e._v("\nf. Fill in a "),r("strong",[e._v("Username")]),e._v(" that you'll use to log into the VM\ng. Fill in a "),r("strong",[e._v("Password")]),e._v(" and "),r("strong",[e._v("Confirm password")]),e._v("\nh. For "),r("strong",[e._v("Public inbound ports")]),e._v(", leave it to "),r("strong",[e._v("None")]),e._v("\ni. Leave the rest and click "),r("strong",[e._v("Next: Disks")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/47createvm1.png")}}),e._v(" "),r("p",[e._v("(Create a Virtual Machine: Basics)")]),e._v(" "),r("p",[e._v("j. Don't change anything and click "),r("strong",[e._v("Next: Networking")]),e._v("\nk. Select the VNET that we've just created for "),r("strong",[e._v("Virtual network")]),e._v("\nl. Select the "),r("strong",[e._v("Subnet")]),e._v(" (10.1.0.0/24) that we have created with the VNET\nm. Leave "),r("strong",[e._v("Public IP")]),e._v(" to (new)\nn. For "),r("strong",[e._v("Public Inbound ports")]),e._v(", select "),r("strong",[e._v("Allow selected ports")]),e._v("\no. And select "),r("strong",[e._v("HTTP and RDP")]),e._v(" for "),r("strong",[e._v("Select inbound ports")]),e._v("\np. That's it! "),r("strong",[e._v("Click Review + create")]),e._v(" and "),r("strong",[e._v("Create")]),e._v(" after that to create the VM")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/47createvm2.png")}}),e._v(" "),r("p",[e._v("(Create a Virtual Machine: Networking)")])])]),e._v(" "),r("p",[r("strong",[e._v("3. Create a SQL Database Server")])]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Click the "),r("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")])]),e._v(" "),r("li",[r("p",[e._v("Search for "),r("strong",[e._v("SQL Database")]),e._v(" and click on the result to start creating an Azure SQL Database\na. This brings you to the "),r("strong",[e._v("Create SQL Database")]),e._v(" blade\nb. Select "),r("strong",[e._v("PrivateLink")]),e._v(" for the "),r("strong",[e._v("Resource Group")]),e._v("\nc. Fill in a "),r("strong",[e._v("Database name")]),e._v("\nd. Click "),r("strong",[e._v("Create new")]),e._v(" to create a "),r("strong",[e._v("new Server")]),e._v("\ne. In the New server blade:")]),e._v(" "),r("ol",[r("li",[e._v("Fill in a "),r("strong",[e._v("Server name")])]),e._v(" "),r("li",[e._v("Enter a "),r("strong",[e._v("Server admin login")]),e._v(". This is the username that you'll use to connect with the server")]),e._v(" "),r("li",[e._v("Enter a "),r("strong",[e._v("Password")]),e._v(" and "),r("strong",[e._v("Confirm password")])]),e._v(" "),r("li",[e._v("Fill in "),r("strong",[e._v("West US Central")]),e._v(" for the "),r("strong",[e._v("Location")])]),e._v(" "),r("li",[e._v("Click "),r("strong",[e._v("OK")]),e._v(" to add the server\ne. Click "),r("strong",[e._v("Review + create")]),e._v(" and "),r("strong",[e._v("Create")]),e._v(" after that to create the SQL Database and server")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/47createsql.png")}}),e._v(" "),r("p",[e._v("(Create a SQL Database)")])])]),e._v(" "),r("p",[r("strong",[e._v("4. Create a Private Endpoint")]),e._v("\nNow, we need to create a Private Endpoint to the SQL Server.")]),e._v(" "),r("ol",[r("li",[r("p",[e._v("Click the "),r("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")])]),e._v(" "),r("li",[r("p",[e._v("Search for "),r("strong",[e._v("Private Link")]),e._v(" and click on the "),r("strong",[e._v("Private Link Center")]),e._v(" result\na. In the "),r("strong",[e._v("Private Link Center - Overview")]),e._v(", click on "),r("strong",[e._v("Start")]),e._v(" on the option "),r("strong",[e._v("Build a private connection to a service")]),e._v(". We choose this because we are creating a private connection to an Azure service and not to a custom service behind an Azure Load Balancer\nb. This brings you to the first page of the "),r("strong",[e._v("Create a private endpoint")]),e._v(" blade\nc. Select "),r("strong",[e._v("Private Link")]),e._v(" for the "),r("strong",[e._v("Resource Group")]),e._v("\nd. Fill in a "),r("strong",[e._v("Name")]),e._v(" for the private endpoint\ne. Select "),r("strong",[e._v("West Central US")]),e._v(" for the "),r("strong",[e._v("Region")]),e._v("\nf. Click "),r("strong",[e._v("Next: Resource")]),e._v("\ng. For the "),r("strong",[e._v("Connection method")]),e._v(", select "),r("strong",[e._v("Connect to an Azure resource in my directory")]),e._v("\nh. Select "),r("strong",[e._v("Microsoft.Sql/servers")]),e._v(" for "),r("strong",[e._v("Resource type")]),e._v("\ni. Select "),r("strong",[e._v("the SQL Server that we've just created")]),e._v("\nj. And select "),r("strong",[e._v("sqlServer")]),e._v(" for the "),r("strong",[e._v("Target sub-resource")]),e._v("\nk. Click "),r("strong",[e._v("Next: Configuration")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/47createprivatelink1.png")}}),e._v(" "),r("p",[e._v("(Create a Private Endpoint: Resource)")]),e._v(" "),r("p",[e._v("l. Select the VNET that we've created for "),r("strong",[e._v("Virtual network")]),e._v("\nm. And select the subnet (10.1.0.0/24) that we've created for "),r("strong",[e._v("Subnet")]),e._v("\nn. Leave the "),r("strong",[e._v("Integrate with private DNS zone")]),e._v(" to "),r("strong",[e._v("Yes")]),e._v("\no. And leave "),r("strong",[e._v("Private DNS Zone")]),e._v(" to "),r("strong",[e._v("(New)")]),e._v("\np. That's it! Click "),r("strong",[e._v("Review + create")]),e._v(" and "),r("strong",[e._v("Create")]),e._v(" after that to create the private endpoint")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/47createprivatelink2.png")}}),e._v(" "),r("p",[e._v("(Create a Private Endpoint: Configuration)")])])]),e._v(" "),r("p",[r("strong",[e._v("5. Connect to the SQL Database securely")]),e._v("\nEverything is setup to create a secure connection. So let's try it out.")]),e._v(" "),r("ol",[r("li",[e._v("Go to the Virtual Machine in the Azure portal")]),e._v(" "),r("li",[e._v("Click on the "),r("strong",[e._v("Connect")]),e._v(" button to download the RDP file for the VM")]),e._v(" "),r("li",[e._v("Open the RDP file and log into the VM")]),e._v(" "),r("li",[e._v("In the Remote Desktop session, open a command prompt")]),e._v(" "),r("li",[e._v("Enter "),r("strong",[e._v("nslookup yoursqlservername.database.windows.net")]),e._v(" to check if the private endpoint works. It should say something like in the image below:")])]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/47nslookupinvm.png")}}),e._v(" "),r("p",[e._v("(Test the Private Endpoint)")]),e._v(" "),r("ol",{attrs:{start:"6"}},[r("li",[e._v("In the Remote Desktop session of the VM, download and install "),r("a",{attrs:{href:"https://docs.microsoft.com/sql/ssms/download-sql-server-management-studio-ssms?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("SQL Server Management Studio"),r("OutboundLink")],1),e._v(". We'll use this to connect to the SQL Server")]),e._v(" "),r("li",[e._v("Once you have it installed, "),r("strong",[e._v("connect to the SQL Server")])])]),e._v(" "),r("p",[e._v("You'll notice that you don't have to add your IP address to the SQL Server firewall. The connection that you now have with the SQL Server and database is secure and travels over the Azure backbone, not over the public internet.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/47sqlinvm.png")}}),e._v(" "),r("p",[e._v("(SQL Server connection in SQL Server Management Studio)")]),e._v(" "),r("h4",{attrs:{id:"conclusion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),r("p",[e._v("You can use "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/private-link/private-link-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Private Link"),r("OutboundLink")],1),e._v(" to create secure connections to Azure services or your own services and applications that are behind an "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/load-balancer/load-balancer-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Load Balancer"),r("OutboundLink")],1),e._v(". Go and check it out!")])])}),[],!1,null,null,null);t.default=a.exports}}]);