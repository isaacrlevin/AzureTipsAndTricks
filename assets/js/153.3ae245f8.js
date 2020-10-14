(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{505:function(t,e,n){"use strict";n.r(e);var s=n(42),a=Object(s.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),n("p",[t._v("🦄 Wanna get in on the Live Streaming world? Check out "),n("a",{attrs:{href:"https://twitch.tv/mbcrump?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure Developer Streaming"),n("OutboundLink")],1),t._v("!")]),t._v(" "),n("p",[t._v("💡 Learn more : "),n("a",{attrs:{href:"https://github.com/Azure/actions?WT.mc_id=code-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Actions for Azure"),n("OutboundLink")],1),t._v(".")]),t._v(" "),n("p",[t._v("📺 Watch the video : "),n("a",{attrs:{href:"https://www.youtube.com/watch?v=zcYqejz6Iig&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=3&t=0s?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("How to get started with GitHub Actions for Azure"),n("OutboundLink")],1),t._v(".")])]),t._v(" "),n("h4",{attrs:{id:"getting-started-with-github-actions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-github-actions"}},[t._v("#")]),t._v(" Getting started with GitHub Actions")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/features/actions?WT.mc_id=code-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Actions"),n("OutboundLink")],1),t._v(" enable you to execute jobs whenever something happens in a GitHub repository. For instance, you can create an action that builds the code in your repository, every time that you push code to it. With GitHub Actions, you can customize your GitHub workflow to whatever you need it to be.")]),t._v(" "),n("p",[t._v("In this post, we'll take a look at how to get started with GitHub Actions and we'll try out one of the "),n("a",{attrs:{href:"https://github.com/Azure/actions?WT.mc_id=code-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure actions"),n("OutboundLink")],1),t._v(" that deploys an application to Azure.")]),t._v(" "),n("h4",{attrs:{id:"prerequisites"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[t._v("#")]),t._v(" Prerequisites")]),t._v(" "),n("p",[t._v("If you want to follow along, you'll need the following:")]),t._v(" "),n("ul",[n("li",[t._v("An Azure subscription (If you don't have an Azure subscription, create a "),n("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("free account"),n("OutboundLink")],1),t._v(" before you begin)")]),t._v(" "),n("li",[t._v("A GitHub repository that contains an "),n("a",{attrs:{href:"https://docs.microsoft.com/aspnet/core/?view=aspnetcore-2.2?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("ASP.NET Core 2.x"),n("OutboundLink")],1),t._v(" web application")]),t._v(" "),n("li",[t._v("An existing "),n("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/web/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure App Service Web App"),n("OutboundLink")],1)])]),t._v(" "),n("h4",{attrs:{id:"deploy-applications-to-azure-with-github-actions"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#deploy-applications-to-azure-with-github-actions"}},[t._v("#")]),t._v(" Deploy applications to Azure with GitHub Actions")]),t._v(" "),n("p",[t._v("GitHub Actions are workflows that run whenever something happens in your GitHub repository. You can create a new GitHub Action workflow in the GitHub website:")]),t._v(" "),n("ol",[n("li",[t._v("Open the "),n("a",{attrs:{href:"https://github.com/?WT.mc_id=code-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("GitHub website")]),n("OutboundLink")],1),t._v(" and open a "),n("strong",[t._v("GitHub repository")]),t._v(" that has an ASP.NET Core 2.x application in it")]),t._v(" "),n("li",[t._v("Click on the "),n("strong",[t._v("Actions")]),t._v(" tab\na. This opens the GitHub Actions page")]),t._v(" "),n("li",[t._v("Click on "),n("strong",[t._v("Blank workflow file")]),t._v(" to get started")])]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/33createaction.png")}}),t._v(" "),n("p",[t._v("(GitHub Actions page)")]),t._v(" "),n("p",[t._v("As you could see on the GitHub Actions page, there are lots of predefined templates that you can use. These contain commonly used workflows and help you to get started quickly. We'll start with a blank template, because we want to create our own, custom workflow.\nGitHub Actions are defined in "),n("strong",[t._v(".yml files")]),t._v(". In the YAML editor, you can type your complete workflow using the "),n("a",{attrs:{href:"https://help.github.com/articles/workflow-syntax-for-github-actions?WT.mc_id=code-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Workflow syntax for GitHub Actions."),n("OutboundLink")],1),t._v("\nFor our example, paste the following code into the editor:")]),t._v(" "),n("div",{staticClass:"language-yaml line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-yaml"}},[n("code",[n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build code and deploy to Azure\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("push"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("build")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build Code\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    \n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/checkout@v1\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Setup .NET Core\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" actions/setup"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("dotnet@v1\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("dotnet-version")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2.2.108\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Build with dotnet\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" dotnet build "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("configuration Release\n\n  "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("deploy")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("needs")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" build\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Deploy App\n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    \n    "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" deploy to azure web app\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("uses")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" azure/appservice"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("actions/webapp@master\n      "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("with")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("app-name")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" mynewestwebapplication\n        "),n("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("publish-profile")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" $"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" secrets.azureWebAppPublishProfile "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("    \n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br")])]),n("p",[t._v("Let me explain what the above YAML code does:")]),t._v(" "),n("ol",[n("li",[n("p",[t._v("First, the "),n("strong",[t._v("name")]),t._v(", defines the name of the GitHub Actions workflow. You can use this later to see that this workflow has run and what the result was")])]),t._v(" "),n("li",[n("p",[t._v("Next, this workflow is triggered "),n("strong",[t._v("on: [push]")]),t._v(". This means that this workflow runs whenever code is pushed to this repository. There are also other triggers that you can use, like "),n("strong",[t._v("on: pull_request")]),t._v(" and "),n("strong",[t._v("on: schedule")])])]),t._v(" "),n("li",[n("p",[t._v("The "),n("strong",[t._v("jobs")]),t._v(" section can contain one or more jobs that have one or more steps within them. In this case, we have two jobs: "),n("strong",[t._v("build")]),t._v(" and "),n("strong",[t._v("deploy")]),t._v(". The "),n("strong",[t._v("build job")]),t._v(" compiles the code and the "),n("strong",[t._v("deploy job")]),t._v(" deploys the app to Azure. The deploy job will only run if the build job completes successfully, because of the "),n("strong",[t._v("needs: build")]),t._v(" parameter in the deploy job")])]),t._v(" "),n("li",[n("p",[t._v("GitHub Actions run in hosted virtual machines. You can define which operating system you want your job to run on with the "),n("strong",[t._v("runs-on:")]),t._v(" parameter, which in this case, is set to "),n("strong",[t._v("ubuntu-latest")]),t._v(" for both jobs, but can also be set to "),n("strong",[t._v("windows-latest")]),t._v(", "),n("strong",[t._v("macOS-latest")]),t._v(" and "),n("a",{attrs:{href:"https://help.github.com/en/articles/virtual-environments-for-github-actions?WT.mc_id=code-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("other environments"),n("OutboundLink")],1)])]),t._v(" "),n("li",[n("p",[t._v("Next are the "),n("strong",[t._v("steps")]),t._v(" in the jobs. The first step of the "),n("strong",[t._v("build job")]),t._v(" is to checkout the code from the repository using "),n("strong",[t._v("actions/checkout@v1")]),t._v(". "),n("strong",[t._v("actions/checkout@v1")]),t._v(" is one of the "),n("a",{attrs:{href:"https://github.com/actions?WT.mc_id=code-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("predefined GitHub Actions"),n("OutboundLink")],1),t._v(" that you can use. There are many others and you can write your own, custom actions")])]),t._v(" "),n("li",[n("p",[t._v("The next step is to make sure that .NET Core is installed on the virtual environment by running "),n("strong",[t._v("actions/setup-dotnet@v1")])])]),t._v(" "),n("li",[n("p",[t._v("Finally, we run "),n("strong",[t._v("dotnet build")]),t._v(" with the "),n("strong",[t._v("run")]),t._v(" parameter, to compile the code. This is really cool, because we can run commands on the virtual environment like "),n("strong",[t._v("dotnet")]),t._v(" commands, but also Azure CLI commands and others")])]),t._v(" "),n("li",[n("p",[t._v("In the "),n("strong",[t._v("deploy job")]),t._v(", we only have one step, which is "),n("strong",[t._v("azure/appservice-actions/webapp@master")]),t._v(". This action deploys the application to an "),n("a",{attrs:{href:"https://azure.microsoft.com/services/app-service/web/?WT.mc_id=azure-azuredevtips-micrum?WT.mc_id=code-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[n("strong",[t._v("Azure App Service Web App")]),n("OutboundLink")],1),t._v(". This step requires two arguments: the "),n("strong",[t._v("app-name")]),t._v(", which is the name of the Web App in Azure to publish to, and the "),n("strong",[t._v("publish-profile")]),t._v(", which contains the URLs and credentials to deploy the app")]),t._v(" "),n("p",[t._v("a. To deploy the app, you need the "),n("strong",[t._v("publish profile")]),t._v(". You can get that from the Azure portal:\n1. In the Azure portal, navigate to the Web App\n2. Click on the "),n("strong",[t._v("Get publish profile button")]),t._v(" to download the publish profile file")])])]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/33publishprofile.png")}}),t._v(" "),n("p",[t._v("(Get Publish Profile in the Azure portal)")]),t._v(" "),n("p",[t._v("b. In our example code, we get the Web App Publish Profile from a GitHub secret. This is how you create the GitHub secret:\n1. In the GitHub repository, click on the "),n("strong",[t._v("Settings")]),t._v(" tab\n2. In Settings, click on the "),n("strong",[t._v("Secrets")]),t._v(" menu-item\n3. Click "),n("strong",[t._v("Add a new secret")]),t._v("\n4. Put in the name "),n("strong",[t._v("azureWebAppPublishProfile")]),t._v(", which is the same as we use in the yml code\n5. Paste the contents of the publish profile file into the "),n("strong",[t._v("Value")]),t._v(" textbox\n6. Click "),n("strong",[t._v("Add secret")]),t._v(" to save the secret")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/33addsecret.png")}}),t._v(" "),n("p",[t._v("(Create a secret in GitHub)")]),t._v(" "),n("p",[t._v("Besides the "),n("strong",[t._v("azure/appservice-actions/webapp@master")]),t._v(" action, there are other GitHub Actions that interact with Azure, which you can find "),n("a",{attrs:{href:"https://github.com/Azure/actions?WT.mc_id=code-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),n("OutboundLink")],1),t._v(". These include:")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://github.com/Azure/actions?WT.mc_id=code-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure login"),n("OutboundLink")],1),t._v(" "),n("ul",[n("li",[t._v("Azure login using Service Principal")])])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/Azure/appservice-actions?WT.mc_id=code-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("AppService actions"),n("OutboundLink")],1),t._v(" "),n("ul",[n("li",[t._v("Azure WebApp (Windows / Linux WebApps)")]),t._v(" "),n("li",[t._v("Azure Web app for containers (Single / multi-container apps)")])])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/Azure/container-actions?WT.mc_id=code-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Container actions"),n("OutboundLink")],1),t._v(" "),n("ul",[n("li",[t._v("Docker login/logout")])])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/Azure/k8s-actions?WT.mc_id=code-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kubernetes actions"),n("OutboundLink")],1),t._v(" "),n("ul",[n("li",[t._v("Kubectl tool installer")]),t._v(" "),n("li",[t._v("Kubernetes set context")]),t._v(" "),n("li",[t._v("AKS set context")]),t._v(" "),n("li",[t._v("K8s create secret")]),t._v(" "),n("li",[t._v("K8s deploy")])])])]),t._v(" "),n("p",[t._v("That's it! Now that the YAML code is complete, you can create the workflow by clicking "),n("strong",[t._v("Start commit")]),t._v(" and committing the code to the repository. This will trigger the workflow to run, as it is triggered by any push to the repository.\nYou can see the workflow(s) that are running in the "),n("strong",[t._v("Actions tab")]),t._v(" of the repository.")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/33actionrunning.png")}}),t._v(" "),n("p",[t._v("(Running workflows in GitHub)")]),t._v(" "),n("p",[t._v("And when you click on a workflow, you can see the detailed status of it.")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/33actiondone.png")}}),t._v(" "),n("p",[t._v("(Running workflow details in GitHub)")]),t._v(" "),n("p",[t._v("And when the workflow is done, you'll see the URL of the Web App that we've just deployed the app to. Navigate to that URL, and you should see the application running.")]),t._v(" "),n("img",{attrs:{src:t.$withBase("/files/33webappinaction.png")}}),t._v(" "),n("p",[t._v("(Application running in Azure)")]),t._v(" "),n("h4",{attrs:{id:"conclusion"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[t._v("#")]),t._v(" Conclusion")]),t._v(" "),n("p",[n("a",{attrs:{href:"https://github.com/features/actions?WT.mc_id=code-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Actions"),n("OutboundLink")],1),t._v(" are a really powerful way to customize your GitHub workflow to whatever you need. This enables you to, for instance, create a continuous integration and continuous deployment pipeline that increases your application quality, without ever leaving GitHub. As we've seen, it is very easy to get started with GitHub Actions and there are a lot of "),n("a",{attrs:{href:"https://github.com/actions?WT.mc_id=code-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("predefined actions"),n("OutboundLink")],1),t._v(" and templates that you can use, including "),n("a",{attrs:{href:"https://github.com/Azure/actions?WT.mc_id=code-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("actions that interact with Azure"),n("OutboundLink")],1),t._v(". Go and check it out!")])])}),[],!1,null,null,null);e.default=a.exports}}]);