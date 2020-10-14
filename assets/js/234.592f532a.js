(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{586:function(e,s,t){"use strict";t.r(s);var a=t(42),r=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h4",{attrs:{id:"getting-a-net-core-webapi-project-ready-for-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-a-net-core-webapi-project-ready-for-docker"}},[e._v("#")]),e._v(" Getting a .NET Core WebAPI Project Ready for Docker")]),e._v(" "),t("p",[e._v("How hard do you think it is to:")]),e._v(" "),t("ul",[t("li",[t("RouterLink",{attrs:{to:"/blog/tip54.html"}},[e._v("Create and Publish a .NET Core WebAPI project")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/blog/tip55.html"}},[e._v("Add it to a Docker Container using Docker Compose and push it to a Docker Hub")])],1),e._v(" "),t("li",[t("RouterLink",{attrs:{to:"/blog/tip56.html"}},[e._v("Use it in Azure with Web App for Containers")])],1)]),e._v(" "),t("p",[e._v("In this mini-series, we'll cover each part starting with creating and publishing a .NET Core WebAPI project. Tomorrow, we'll use Docker Compose to create an image and push it to Docker Hub and we'll wrap up by deploying it to Azure using Web App for Containers.")]),e._v(" "),t("h4",{attrs:{id:"create-a-net-core-webapi-project"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-a-net-core-webapi-project"}},[e._v("#")]),e._v(" Create a .NET Core WebAPI Project")]),e._v(" "),t("p",[e._v("Ensure "),t("a",{attrs:{href:"https://www.microsoft.com/net/learn/get-started/windows?WT.mc_id=microsoft-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET Core"),t("OutboundLink")],1),e._v(" is installed and then follow the direction below:")]),e._v(" "),t("p",[e._v("Create a directory on your HDD "),t("code",[e._v("mkdir mbcwebapi")]),e._v(". Now "),t("code",[e._v("cd mbcwebapi")]),e._v(" into it.")]),e._v(" "),t("p",[e._v("Create another directory inside your mbcwebapi folder "),t("code",[e._v("mkdir mbcwebapi")]),e._v(". Now "),t("code",[e._v("cd mbcwebapi")]),e._v(" into it.")]),e._v(" "),t("p",[e._v("Run "),t("code",[e._v("dotnet new webapi")]),e._v(" to scaffold a new ASP.NET WebAPI Project.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Michaels-MacBook-Pro:mbcwebapi mbcrump$ dotnet new webapi\nThe template \"ASP.NET Core Web API\" was created successfully.\nThis template contains technologies from parties other than Microsoft, see https://aka.ms/template-3pn for details.\n\nProcessing post-creation actions...\nRunning 'dotnet restore' on /Users/mbcrump/mbcwebapi/mbcwebapi.csproj...\n  Restoring packages for /Users/mbcrump/mbcwebapi/mbcwebapi.csproj...\n  Restore completed in 35.83 ms for /Users/mbcrump/mbcwebapi/mbcwebapi.csproj.\n  Generating MSBuild file /Users/mbcrump/mbcwebapi/obj/mbcwebapi.csproj.nuget.g.props.\n  Generating MSBuild file /Users/mbcrump/mbcwebapi/obj/mbcwebapi.csproj.nuget.g.targets.\n  Restore completed in 1.96 sec for /Users/mbcrump/mbcwebapi/mbcwebapi.csproj.\n\nRestore succeeded.\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br"),t("span",{staticClass:"line-number"},[e._v("10")]),t("br"),t("span",{staticClass:"line-number"},[e._v("11")]),t("br"),t("span",{staticClass:"line-number"},[e._v("12")]),t("br"),t("span",{staticClass:"line-number"},[e._v("13")]),t("br")])]),t("p",[e._v("If you use "),t("code",[e._v("dotnet run")]),e._v(" then you'll have a URL that you can paste into your browser.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/webapiazure1.png")}}),e._v(" "),t("p",[e._v("Add "),t("code",[e._v("http://localhost:5000/api/values")]),e._v(" to see a response from the WebAPI, otherwise the site will 404.")]),e._v(" "),t("img",{attrs:{src:e.$withBase("/files/webapiazure2.png")}}),e._v(" "),t("p",[e._v("You should see "),t("code",[e._v('["value1","value2"]')]),e._v(". Nice! It is working properly!")]),e._v(" "),t("h4",{attrs:{id:"publish-the-net-core-webapi"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#publish-the-net-core-webapi"}},[e._v("#")]),e._v(" Publish the .NET Core WebAPI")]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("dotnet publish")]),e._v(" command packs the application and its dependencies into a folder for deployment to a hosting system. We are going to prep our project for Docker, so use "),t("code",[e._v("dotnet publish -c Release -o ./obj/Docker/publish")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("Michaels-MacBook-Pro:mbcwebapi mbcrump$ dotnet publish -c Release -o ./obj/Docker/publish\nMicrosoft (R) Build Engine version 15.3.409.57025 for .NET Core\nCopyright (C) Microsoft Corporation. All rights reserved.\n\n  mbcwebapi -> /Users/mbcrump/mbcwebapi/bin/Release/netcoreapp2.0/mbcwebapi.dll\n  mbcwebapi -> /Users/mbcrump/mbcwebapi/obj/Docker/publish/\nMichaels-MacBook-Pro:mbcwebapi mbcrump$ \n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])]),t("p",[e._v("If you navigate to the /obj/Docker/publish folder, then you will see our WebAPI is packaged and ready for deployment.")]),e._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("11/19/2017  12:12 PM               178 appsettings.Development.json\n11/19/2017  12:12 PM               228 appsettings.json\n11/19/2017  12:41 PM           284,199 mbcwebapi.deps.json\n11/19/2017  12:41 PM             6,656 mbcwebapi.dll\n11/19/2017  12:41 PM             1,312 mbcwebapi.pdb\n11/19/2017  12:41 PM             2,560 mbcwebapi.PrecompiledViews.dll\n11/19/2017  12:41 PM             7,680 mbcwebapi.PrecompiledViews.pdb\n11/19/2017  12:41 PM               221 mbcwebapi.runtimeconfig.json\n11/19/2017  12:41 PM               383 web.config\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br"),t("span",{staticClass:"line-number"},[e._v("8")]),t("br"),t("span",{staticClass:"line-number"},[e._v("9")]),t("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);