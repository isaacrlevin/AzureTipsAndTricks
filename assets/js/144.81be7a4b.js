(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{500:function(e,t,a){"use strict";a.r(t);var r=a(42),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("🔥  Help shape the future of Azure Tips and Tricks by telling me what you'd like for me to write about by filling out this "),a("a",{attrs:{href:"http://survey.azuredev.tips",target:"_blank",rel:"noopener noreferrer"}},[e._v("quick survey"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("📺 Watch the video : "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=gryqWUlCjU0&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=78&t=0s?WT.mc_id=youtube-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to share your Azure Blob Storage securely with Azure Data Share"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/data-share?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Data Share"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h3",{attrs:{id:"how-to-share-your-azure-blob-storage-securely-with-azure-data-share"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-share-your-azure-blob-storage-securely-with-azure-data-share"}},[e._v("#")]),e._v(" How to share your Azure Blob Storage securely with Azure Data Share")]),e._v(" "),a("h4",{attrs:{id:"use-azure-data-share-to-share-azure-blob-storage-securely"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-azure-data-share-to-share-azure-blob-storage-securely"}},[e._v("#")]),e._v(" Use Azure Data Share to share Azure Blob Storage securely")]),e._v(" "),a("p",[e._v("How do you securely share data that you have in Azure? Do you sent it over e-mail? Put it in a place like SharePoint or OneDrive? Securely sharing data has always been difficult. And it has traditionally required you to use an external service, which requires you and the receiver of the data to have access to these services. There is a better way to do this and it is called Azure Data Share.")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://docs.microsoft.com/azure/data-share?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Data Share"),a("OutboundLink")],1),e._v(" is a service in Azure that allows you to securely share you Azure data with other people, without the need of external services.\nIn this article, we are going to use Azure Data Share to securely share files in Azure Blob Storage with somebody.")]),e._v(" "),a("h4",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),a("ul",[a("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),a("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),a("OutboundLink")],1),e._v(" before you begin)")]),e._v(" "),a("li",[e._v("An Azure Storage account with a Blob Container that you want to share")]),e._v(" "),a("li",[e._v("An Azure Storage account with a Blob Container that you will use to receive data\n"),a("ul",[a("li",[e._v("This can be located in another Azure subscription as the storage account that you are sharing")]),e._v(" "),a("li",[e._v("If you use another subscription to receive data, you will also need to create an Azure Data Share in that subscription that will receive the shared data")])])])]),e._v(" "),a("h4",{attrs:{id:"sharing-azure-blob-storage-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sharing-azure-blob-storage-data"}},[e._v("#")]),e._v(" Sharing Azure Blob Storage data")]),e._v(" "),a("p",[e._v("Let's start by creating a new Azure Data Share account and use that to share an Azure Blob Storage Container.")]),e._v(" "),a("p",[e._v("We'll create the Azure Data Share using the Azure portal.")]),e._v(" "),a("ol",[a("li",[e._v("Go to the "),a("a",{attrs:{href:"https://portal.azure.com/?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure portal"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Click the "),a("strong",[e._v("Create a resource")]),e._v(" button (the plus-sign in the top left corner)")]),e._v(" "),a("li",[e._v("Search for "),a("strong",[e._v("Data Share")]),e._v(" and click on the result to start creating one\n"),a("ol",[a("li",[e._v("Fill in a "),a("strong",[e._v("Name")]),e._v(" for the Azure Data Share")]),e._v(" "),a("li",[e._v("Select an "),a("strong",[e._v("Azure subscription")])]),e._v(" "),a("li",[e._v("Select or create a "),a("strong",[e._v("Resource group")])]),e._v(" "),a("li",[e._v("Select a "),a("strong",[e._v("Location")])]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Create")])])])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/27createdatashare.png")}}),e._v(" "),a("p",[e._v("(Create a new Azure Data Share account in the Azure portal)")]),e._v(" "),a("p",[e._v("Once the deployment is finished, you'll have a new Azure Data Share account. Now we need to share data with it.")]),e._v(" "),a("ol",[a("li",[e._v("Go to the newly created "),a("strong",[e._v("Azure Data Share")]),e._v(" account in the Azure portal")]),e._v(" "),a("li",[e._v("Click on "),a("strong",[e._v("Start sharing your data")]),e._v(". This opens the "),a("strong",[e._v("Sent shares")]),e._v(" blade")]),e._v(" "),a("li",[e._v("In the "),a("strong",[e._v("Sent shares")]),e._v(" blade, click "),a("strong",[e._v("Create")]),e._v(" to start sharing data, like in the image below")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/27createnewshare.png")}}),e._v(" "),a("p",[e._v("(Start sharing data)")]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Follow the wizard. First, fill in a "),a("strong",[e._v("Name")]),e._v(" for the share and a "),a("strong",[e._v("Description")]),e._v(" and "),a("strong",[e._v("Terms of Use")]),e._v(" and click "),a("strong",[e._v("Continue")])]),e._v(" "),a("li",[e._v("In step 2, click "),a("strong",[e._v("Add datasets")]),e._v(" and select "),a("strong",[e._v("Azure Blob Storage")]),e._v(" and click "),a("strong",[e._v("Next")]),e._v(". This should look like the image below:")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/27adddatastore.png")}}),e._v(" "),a("p",[e._v("(Share Azure Blob Storage)")]),e._v(" "),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Select the "),a("strong",[e._v("storage account")]),e._v(" and the "),a("strong",[e._v("Blob Container")]),e._v(" that you want to share and click "),a("strong",[e._v("Add dataset")])]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Continue")]),e._v(" to go to the next step")]),e._v(" "),a("li",[e._v("In step 3, click "),a("strong",[e._v("Add recipient")]),e._v(" and fill in the "),a("strong",[e._v("e-mail address")]),e._v(" of the person you want to share the data with and click "),a("strong",[e._v("Continue")])]),e._v(" "),a("li",[e._v("In step 4, check the "),a("strong",[e._v("Snapshot schedule")]),e._v(" box and configure the "),a("strong",[e._v("Start time")]),e._v(" and "),a("strong",[e._v("Recurrence")]),e._v(". This will refresh the data for the recipient at set intervals")]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Continue")]),e._v(" to review the share")]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Create")])])]),e._v(" "),a("p",[e._v("The Azure Blob Storage container is now shared.")]),e._v(" "),a("h4",{attrs:{id:"receiving-azure-blob-storage-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#receiving-azure-blob-storage-data"}},[e._v("#")]),e._v(" Receiving Azure Blob Storage data")]),e._v(" "),a("p",[e._v("The recipient of the share should now have an e-mail that invites her to receive the data share. Let's accept the invite and receive the data.")]),e._v(" "),a("p",[e._v("Before we can accept the invite, we need to make sure that Azure Data Share will have enough permissions to receive the data. We'll do that in the Azure portal.")]),e._v(" "),a("ol",[a("li",[e._v("In the Azure portal, navigate to the "),a("strong",[e._v("Azure Storage account")]),e._v(" that you will use to receive the data share")]),e._v(" "),a("li",[e._v("In the "),a("strong",[e._v("Azure Storage account")]),e._v(", click on "),a("strong",[e._v("Blobs")])]),e._v(" "),a("li",[e._v("If you haven't created one yet, create a new "),a("strong",[e._v("Container")]),e._v(" to receive the data in. Otherwise, click on the "),a("strong",[e._v("Container")]),e._v(" to open it")]),e._v(" "),a("li",[e._v("In the Container, click on the "),a("strong",[e._v("Access Control (IAM)")]),e._v(" menu-item on the left")]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Add > Add role assignment")])]),e._v(" "),a("li",[e._v("Select the role "),a("strong",[e._v("Owner")])]),e._v(" "),a("li",[e._v("Select the "),a("strong",[e._v("user that has received the data share invite")]),e._v(" and click "),a("strong",[e._v("Save")])])]),e._v(" "),a("p",[e._v("We are ready to accept the data share invite and receive the data:")]),e._v(" "),a("ol",[a("li",[e._v("Open the "),a("strong",[e._v("e-mail")]),e._v(" of the data share invite and click on the "),a("strong",[e._v("View Invitation")]),e._v(" button")]),e._v(" "),a("li",[e._v("This will open the Azure portal and show your Data Share Invitations. "),a("strong",[e._v("Click on the invitation")]),e._v(" in the Azure portal to open it")]),e._v(" "),a("li",[e._v("The invitation is shown like in the image below\na. Agree to the "),a("strong",[e._v("terms of use")]),e._v("\nb. Pick a "),a("strong",[e._v("Subscription")]),e._v("\nc. Select a "),a("strong",[e._v("Resource group")]),e._v("\nd. Select or create a "),a("strong",[e._v("Data Share")]),e._v(" account that you will use to receive the data in. Both the sender and the receiver of the data need to have an Azure Data Share account\ne. Click the "),a("strong",[e._v("Accept and configure now")]),e._v(" button")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/27acceptinvitation.png")}}),e._v(" "),a("p",[e._v("(Accept a Data Share invite)")]),e._v(" "),a("p",[e._v("Now we need to configure where we store the received data.")]),e._v(" "),a("ol",[a("li",[e._v("Select the "),a("strong",[e._v("Subscription")]),e._v(" to receive the data in")]),e._v(" "),a("li",[e._v("Select a "),a("strong",[e._v("Resource group")])]),e._v(" "),a("li",[e._v("Select the "),a("strong",[e._v("Storage account")]),e._v(" the we've configured the access rights on")]),e._v(" "),a("li",[e._v("Enter the "),a("strong",[e._v("Container name")]),e._v(" of the Blob Container to receive the data in")]),e._v(" "),a("li",[e._v("Check the "),a("strong",[e._v("Snapshot Settings")]),e._v(" box to keep the data updated")]),e._v(" "),a("li",[e._v("Click "),a("strong",[e._v("Save")])])]),e._v(" "),a("p",[e._v("We are now ready to receive the data. Receiving shared data is done through our own Azure Data Share account. Let's take a look.")]),e._v(" "),a("ol",[a("li",[e._v("In the Azure portal, open the "),a("strong",[e._v("Data Share account")]),e._v(" that we've configured to receive the data")]),e._v(" "),a("li",[e._v("Go to "),a("strong",[e._v("Received shares")]),e._v(" to see the data share that we received and click on it to open it")]),e._v(" "),a("li",[e._v("The data is shared, but the data snapshot hasn't downloaded yet. We can manually trigger that, by clicking "),a("strong",[e._v("Trigger Snapshot > Full copy")])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/27shareinvite.png")}}),e._v(" "),a("p",[e._v("(Trigger a data snapshot in the Azure portal)")]),e._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[e._v("After a while, the download is done and the data will be in "),a("strong",[e._v("Blob Container of the the Azure Storage account")])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/27datareceived.png")}}),e._v(" "),a("p",[e._v("(Shared data received in Blob Container)")]),e._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("Azure Data Share is an easy way to securely share data that is in Azure. It is easy to use and doesn't require the sender or receiver to use any tools or services outside Azure. Additionally, it provides a way to keep shared data updated with data snapshots and can update that data incrementally, which saves costs and is faster than updating the entire data set. Go and check out "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/data-share/share-your-data?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Data Share"),a("OutboundLink")],1),e._v("!")])])}),[],!1,null,null,null);t.default=o.exports}}]);