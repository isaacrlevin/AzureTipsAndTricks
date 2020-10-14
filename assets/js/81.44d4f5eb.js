(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{436:function(e,t,s){"use strict";s.r(t);var r=s(42),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("💡 Learn more : "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/devops/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure DevOps Documentation"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("📺 Watch the video : "),s("a",{attrs:{href:"https://www.youtube.com/watch?v=QxTqEajKOqo&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=48?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Quick tour of Azure DevOps projects using Node.js and AKS: Part 2"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),s("h4",{attrs:{id:"a-quick-tour-around-azure-devops-projects-and-node-js-and-kubernetes-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a-quick-tour-around-azure-devops-projects-and-node-js-and-kubernetes-service"}},[e._v("#")]),e._v(" A quick tour around Azure DevOps Projects and Node.js and Kubernetes Service")]),e._v(" "),s("h4",{attrs:{id:"yesterday-on-azure-tips-and-tricks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#yesterday-on-azure-tips-and-tricks"}},[e._v("#")]),e._v(" Yesterday on Azure Tips and Tricks")]),e._v(" "),s("p",[e._v("We discussed what Azure DevOps Projects are and began creating a project that uses Node.js and Azure Kubernetes Services (AKS). We walked through creating a project from scratch and began looking at the pipeline which included "),s("strong",[e._v("code")]),e._v(" and "),s("strong",[e._v("build")]),e._v(". Today we'll finish up the pipeline section by looking at "),s("strong",[e._v("dev")]),e._v(". We'll also review the resources section. In case you haven't read "),s("RouterLink",{attrs:{to:"/blog/tip168.html"}},[e._v("Part 1")]),e._v(" then I'd suggest you do so now.")],1),e._v(" "),s("h4",{attrs:{id:"finish-up-the-pipelines-section"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#finish-up-the-pipelines-section"}},[e._v("#")]),e._v(" Finish up the pipelines section")]),e._v(" "),s("p",[e._v("Back on the DevOps Project dashboard, click the "),s("strong",[e._v("Release")]),e._v(" link with the number Please make sure it is green - for a successful build)")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/devops-k8s11.png")}}),e._v(" "),s("p",[e._v("Side note: If the build is "),s("strong",[e._v("red")]),e._v(", then click on it to see what the error is. A common error that I've personally seen is: "),s("strong",[e._v("The subscription is not registered to use namespace 'Microsoft.ContainerService'")]),e._v(" One way to quickly resolve that is by bringing up "),s("strong",[e._v("Cloud Shell")]),e._v(" and selecting "),s("strong",[e._v("PowerShell")]),e._v(" and running the following command:")]),e._v(" "),s("div",{staticClass:"language-powershell line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-powershell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("PS")]),e._v(" Azure:\\> "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("Register-AzureRmResourceProvider")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("-")]),e._v("ProviderNamespace “Microsoft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ContainerService”\n\n\nProviderNamespace : Microsoft"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("ContainerService\nRegistrationState : Registering\nResourceTypes     : "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("containerServices"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" managedClusters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" locations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" locations"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("/")]),e._v("operationresults"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\nLocations         : "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("Japan East"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" Central US"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" East US 2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" Japan West"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br"),s("span",{staticClass:"line-number"},[e._v("6")]),s("br"),s("span",{staticClass:"line-number"},[e._v("7")]),s("br")])]),s("p",[e._v("Now you'll see the Azure DevOps Pipeline releases. Click the "),s("strong",[e._v("Edit release")]),e._v(" button at the top.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/devops-k8s12.png")}}),e._v(" "),s("p",[e._v("Then click the "),s("strong",[e._v("Edit tasks")]),e._v(" link.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/devops-k8s13.png")}}),e._v(" "),s("p",[e._v("You now see the list of tasks that need to be run such as Creating the AKS cluster, running a PowerShell script and packaging and deploying helm charts.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/devops-k8s14.png")}}),e._v(" "),s("p",[e._v("That wraps up the Pipelines section and gives you a taste of how powerful Azure DevOps is. In this next section, we'll look at the Azure Resources section.")]),e._v(" "),s("h4",{attrs:{id:"azure-resources-in-a-nutshell"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#azure-resources-in-a-nutshell"}},[e._v("#")]),e._v(" Azure resources in a nutshell")]),e._v(" "),s("p",[e._v("Back in the DevOps Project dashboard, let’s look at the Azure resources and "),s("a",{attrs:{href:"https://azure.microsoft.com/services/application-insights?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application Insights"),s("OutboundLink")],1),e._v("?WT.mc_id=azure-azuredevtips-micrum). The resources are the URL to your live site running in Kubernetes and a link to the AKS cluster. The last link will take you to see the live telemetry for your site provided by Application Insights.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/devops-k8s15.png")}}),e._v(" "),s("p",[s("strong",[e._v("Click")]),e._v(" on the "),s("strong",[e._v("External Endpoint")]),e._v(" link to be taken to the deployed application.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/devops-k8s16.png")}}),e._v(" "),s("p",[e._v("The second link is to the Azure Kubernetes Service.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/devops-k8s17.png")}}),e._v(" "),s("p",[e._v("The last link shows the "),s("a",{attrs:{href:"https://azure.microsoft.com/services/application-insights?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Application Insights"),s("OutboundLink")],1),e._v("?WT.mc_id=azure-azuredevtips-micrum) created for the service which  includes powerful analytics tools to help you diagnose issues and to understand what users actually do with your app. It's designed to help you continuously improve performance and usability and works seamlessly with Azure DevOps")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/devops-k8s18.png")}}),e._v(" "),s("p",[e._v("Now if you go to "),s("strong",[e._v("Resource Groups")]),e._v(" on the Azure portal and search for the name of the DevOps project, you’ll see that three resource groups were created.")]),e._v(" "),s("img",{attrs:{src:e.$withBase("/files/devops-k8s19.png")}}),e._v(" "),s("p",[e._v("I hope that was helpful and hope that you continue learning by going through the "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/devops-project/azure-devops-project-aks?toc=%2F%2Fazure%2Fdevops-project%2Ftoc.json&bc=%2F%2Fazure%2Fbread%2Ftoc.json?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("step by step tutorial"),s("OutboundLink")],1),e._v(" or read more about "),s("a",{attrs:{href:"https://azure.microsoft.com/blog/introducing-azure-devops?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure DevOps"),s("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=a.exports}}]);