(window.webpackJsonp=window.webpackJsonp||[]).push([[136],{492:function(e,t,a){"use strict";a.r(t);var r=a(42),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("👊 that ⭐️ button on the official "),a("a",{attrs:{href:"https://github.com/Microsoft/AzureTipsAndTricks/",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub repo"),a("OutboundLink")],1),e._v(" to stay up to date.")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/web?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure App Service Web App"),a("OutboundLink")],1)])]),e._v(" "),a("h3",{attrs:{id:"build-and-deploy-your-first-app-with-the-azure-sdk-for-java-on-azure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#build-and-deploy-your-first-app-with-the-azure-sdk-for-java-on-azure"}},[e._v("#")]),e._v(" Build and deploy your first app with the Azure SDK for Java on Azure")]),e._v(" "),a("p",[e._v("Azure is a very inclusive cloud platform. You can run applications on it that have been created in almost any programming language. This includes Java. And Microsoft has even created an Azure Toolkit for Eclipse to make it easier to use Azure when you are developing Java applications. Let's see how that works. In this post, we'll create a simple Java application and run that in an "),a("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/web?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure App Service Web App"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"getting-your-development-environment-ready"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-your-development-environment-ready"}},[e._v("#")]),e._v(" Getting your development environment ready")]),e._v(" "),a("p",[e._v("Before we get started, we need to make sure that we can develop Java applications on our development machine and that we have the Azure toolkit for Eclipse installed. Follow the steps below to get your development environment ready.")]),e._v(" "),a("ol",[a("li",[e._v("Download and install the latest "),a("a",{attrs:{href:"http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Java Development Kit"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("I'm sure you have eclipse installed already but for those new to Java it can be found "),a("a",{attrs:{href:"http://www.eclipse.org/downloads",target:"_blank",rel:"noopener noreferrer"}},[e._v("here. (Eclipse IDE for Java EE Developers)"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/EclipseInstaller.png")}}),e._v(" "),a("p",[e._v("(Installing the Eclipse IDE for Java EE Developers)")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Install the "),a("a",{attrs:{href:"https://docs.microsoft.com/java/azure/eclipse/azure-toolkit-for-eclipse-installation?view=azure-java-stable?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Toolkit for Eclipse"),a("OutboundLink")],1)])]),e._v(" "),a("p",[e._v("That's it! you're now ready to develop a Java application and run it in Azure.")]),e._v(" "),a("h4",{attrs:{id:"create-a-java-application-and-run-it-on-azure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-java-application-and-run-it-on-azure"}},[e._v("#")]),e._v(" Create a Java application and run it on Azure")]),e._v(" "),a("p",[e._v("Now that our development environment is ready, we'll create a Java application and see if it rus locally. We'll create a "),a("strong",[e._v("Dynamic Web Project")]),e._v(", (if you are not familiar with Java, this is a dynamic web application).")]),e._v(" "),a("ol",[a("li",[e._v("Open Eclipse")]),e._v(" "),a("li",[e._v("In Eclipse, click "),a("strong",[e._v("File > New > Dynamic Web Project")])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/CreateNewProject.png")}}),e._v(" "),a("p",[e._v("(Create a new Dynamic Web Project)")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Fill in a "),a("strong",[e._v("Name")]),e._v(" and click "),a("strong",[e._v("Finish")]),e._v(" to create the project")]),e._v(" "),a("li",[e._v("In the "),a("strong",[e._v("Project Explorer")]),e._v(", expand your project and right-click "),a("strong",[e._v("WebContent")])]),e._v(" "),a("li",[e._v("Now select "),a("strong",[e._v("New > JSP File")])]),e._v(" "),a("li",[e._v("In the "),a("strong",[e._v("New JSP File")]),e._v(" window, name the file "),a("strong",[e._v("index.jsp")]),e._v(" and click "),a("strong",[e._v("Finish")]),e._v(" to create a new Java Server Pages file")]),e._v(" "),a("li",[e._v("In the .jsp file, put the following line in the "),a("strong",[e._v("body")]),e._v(" tags and save the file")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('<% out.println("Hello world!"); %>\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"8"}},[a("li",[e._v("In the Project Explorer, "),a("strong",[e._v("right-click")]),e._v(" on the project and select "),a("strong",[e._v("Azure > Publish as Azure Web App")])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/PublishToAzure.png")}}),e._v(" "),a("p",[e._v("(The publish to Azure menu in Eclipse)")]),e._v(" "),a("ol",{attrs:{start:"9"}},[a("li",[e._v("Choose "),a("strong",[e._v("interactive")]),e._v(" for the authentication method and click "),a("strong",[e._v("Sign in")]),e._v(" "),a("ol",[a("li",[e._v("You're now prompted to log in. Use you Azure credentials to log in")])])]),e._v(" "),a("li",[e._v("After you've logged in, you can create a new Web App by clicking "),a("strong",[e._v("Create")])])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/CreateWebApp-Java.png")}}),e._v(" "),a("p",[e._v("(Create an Azure App Service Web App in Eclipse)")]),e._v(" "),a("ol",{attrs:{start:"11"}},[a("li",[e._v("Fill in a "),a("strong",[e._v("Name")]),e._v(" for the Web App")]),e._v(" "),a("li",[e._v("Use an existing "),a("strong",[e._v("App Service Plan")]),e._v(" or create a new one")]),e._v(" "),a("li",[e._v("In the "),a("strong",[e._v("Resource Group tab")]),e._v(", select an existing "),a("strong",[e._v("Resource Group")]),e._v(" or create a new one")]),e._v(" "),a("li",[e._v("Check the settings in the "),a("strong",[e._v("Java tab")]),e._v(" to make sure that you're happy with them (usually, the latest version is fine, but it depends on your specific needs)")]),e._v(" "),a("li",[e._v("When you are ready, click "),a("strong",[e._v("Create")]),e._v(" to create the Web App")]),e._v(" "),a("li",[e._v("The Web App is now available in the deployment window. Select the Web App and click "),a("strong",[e._v("Deploy")]),e._v(" to start publishing the application to the Web App")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/DeployToAppService.png")}}),e._v(" "),a("p",[e._v("(Create an Azure App Service Web App in Eclipse)")]),e._v(" "),a("ol",{attrs:{start:"17"}},[a("li",[e._v("Once the deployment is done, navigate to the Azure portal and find the Web App that you've just created")]),e._v(" "),a("li",[e._v("In the overview blade of the Web App, you'll find the URL of the Web App. Click on the URL")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/WebAppRunningJava.png")}}),e._v(" "),a("p",[e._v("(Web App URL in Azure portal)")]),e._v(" "),a("ol",{attrs:{start:"19"}},[a("li",[e._v("The application will now load and will show the text: "),a("strong",[e._v("Hello world!")]),e._v(". Congratulations, you are running a Java application on Azure!")])]),e._v(" "),a("p",[e._v("Today we deployed a simple app but few are aware of all the Azure integration with eclipse and Java.")]),e._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("Java is just one of the programming languages that is supported on Azure. This makes Azure a very inclusive cloud platform that welcomes applications from almost any platform. And for most programming languages, there is an SDK and development tools available to help you out.")])])}),[],!1,null,null,null);t.default=o.exports}}]);