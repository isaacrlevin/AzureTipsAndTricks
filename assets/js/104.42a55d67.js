(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{459:function(e,s,t){"use strict";t.r(s);var a=t(42),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("💡 Learn more : "),t("a",{attrs:{href:"https://docs.microsoft.com/cli/azure?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Command-Line Interface (CLI)"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("📺 Watch the video : "),t("a",{attrs:{href:"https://www.youtube.com/watch?v=lO5Dvde07Tg&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=15?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to deploy an Azure Web App using only the CLI tool"),t("OutboundLink")],1),e._v(".")])]),e._v(" "),t("h4",{attrs:{id:"deploy-an-azure-web-app-using-only-the-cli"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-an-azure-web-app-using-only-the-cli"}},[e._v("#")]),e._v(" Deploy an Azure Web App using only the CLI")]),e._v(" "),t("p",[e._v("While I love working with the Azure Portal or even Visual Studio, it is sometimes nice to do everything from the command line. While I'm a power Windows user, in this tutorial I'll be using a Linux VM and BASH to do everything.")]),e._v(" "),t("p",[e._v("Step 1) Ensure you have the following stack installed.")]),e._v(" "),t("p",[e._v("*This will give us a full web development stack we can work with in the future. *")]),e._v(" "),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("mbcrump@crumplinux:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" --version\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" version "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2.7")]),e._v(".4\nmbcrump@crumplinux:~$ nodejs --version\nv4.2.6\nmbcrump@crumplinux:~$ "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" --version\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.5")]),e._v(".2\nmbcrump@crumplinux:~$ gulp --version\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v(":05:28"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" CLI version "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.4")]),e._v(".0\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v(":05:28"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" Local version "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("3.9")]),e._v(".1\nmbcrump@crumplinux:~$ mongod --version\ndb version v2.6.10\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2017")]),e._v("-09-20T20:11:43.087+0000 "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" version: nogitversion\n"),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2017")]),e._v("-09-20T20:11:43.095+0000 OpenSSL version: OpenSSL "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.0")]),e._v(".2g  "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" Mar "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("2016")]),e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br")])]),t("p",[e._v("I'm particularly interested in the "),t("a",{attrs:{href:"https://github.com/meanjs/mean?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("MEAN.JS"),t("OutboundLink")],1),e._v(" stack.")]),e._v(" "),t("p",[t("strong",[e._v("What is MEAN.JS?")]),e._v(" MEAN.JS is a Full-Stack JavaScript Using MongoDB, Express, AngularJS, and Node.js -")]),e._v(" "),t("p",[e._v("Step 2) Create a folder such as "),t("code",[e._v("webapp")]),e._v(" and then "),t("code",[e._v("cd webapp")]),e._v(".")]),e._v(" "),t("p",[e._v("Step 3) Run the following command "),t("code",[e._v("git clone https://github.com/crpietschmann/jsQuizEngine.git")]),e._v(". This is a JavaScript based quiz engine by "),t("a",{attrs:{href:"https://github.com/crpietschmann?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Chris Pietschmann"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Step 4) Change your working directory to "),t("code",[e._v("jsQuizEngine/src")]),e._v(" and now we'll need to create a deployment user that can deploy web app through Git.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("az webapp deployment user set --user-name mbcrump --password AREALLYLONGPW\n")])])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("Name    PublishingUserName\n------  --------------------\nweb     mbcrump\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("Step 5) We'll need a resource group. I'm going to put mine in the West US.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v('az group create --name StaticResourceGroup --location "West US"\n')])])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("Location    Name\n----------  -------------------\nwestus      StaticResourceGroup\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("Step 6) We'll also need an Azure App Service Plan. I'll use the free one for this example.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("az appservice plan create --name StaticAppServicePlan --resource-group StaticResourceGroup --sku FREE\n")])])]),t("div",{staticClass:"language-shell line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("AppServicePlanName    GeoRegion    Kind    Location      MaximumNumberOfWorkers  Name                  ProvisioningState    ResourceGroup        Status    Subscription\n--------------------  -----------  ------  ----------  ------------------------  --------------------  -------------------  -------------------  --------  ------------------------------------\nStaticAppServicePlan  West US      app     West US                            "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v("  StaticAppServicePlan  Succeeded            StaticResourceGroup  Ready     d1ecc7ac-c1d8-40dc-97d6-2507597e7404\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br")])]),t("p",[e._v("Step 7) We'll create an Azure Web App and deploy it using local Git.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("az webapp create --name MyQuizApplication --resource-group StaticResourceGroup --plan StaticAppServicePlan --deployment-local-git\n")])])]),t("p",[e._v("You should see in the output "),t("code",[e._v("Local git is configured with url of 'https://mbcrump@myquizapplication.scm.azurewebsites.net/MyQuizApplication.git'")]),e._v(" Copy and paste this to your editor of choice.")]),e._v(" "),t("p",[e._v("Step 8) We'll need to add azure to our local Git repo.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("git remote add azure https://mbcrump@myquizapplication.scm.azurewebsites.net/MyQuizApplication.git\n")])])]),t("p",[e._v("Step 9) Push the changes.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",[t("code",[e._v("git push azure master\n")])])]),t("p",[e._v("Step 10) Nice! We can now browse to our "),t("a",{attrs:{href:"http://myquizapplication.azurewebsites.net/#",target:"_blank",rel:"noopener noreferrer"}},[e._v("new site"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/azureappservicequiz.png")}})])}),[],!1,null,null,null);s.default=n.exports}}]);