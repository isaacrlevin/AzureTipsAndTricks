---
type: post
title: "Tip 49 - Add Azure Cloud Shell to Visual Studio Code"
excerpt: "Learn how to add Azure Cloud Shell to Visual Studio Code"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-11-12 17:00:00
---

::: tip
:bulb: Learn more : [Overview of Azure Cloud Shell](https://docs.microsoft.com/azure/cloud-shell/overview?WT.mc_id=docs-azuredevtips-azureappsdev). 

:tv: Watch the video : [How to Add the Azure Cloud Shell to Visual Studio Code](https://www.youtube.com/watch?v=pB_xjSg7fcQ&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=43?WT.mc_id=youtube-azuredevtips-azureappsdev).
:::
### Add Azure Cloud Shell to Visual Studio Code

I'm a big fan of [Visual Studio Code](http://twitter.com/code?WT.mc_id=twitter-azuredevtips-azureappsdev) and [Azure Cloud Shell](https://azure.microsoft.com/features/cloud-shell?WT.mc_id=azure-azuredevtips-azureappsdev) and recently saw this [tweet](https://twitter.com/fiveisprime/status/928774771763900416?WT.mc_id=twitter-azuredevtips-azureappsdev) by Matt Hernandez and had to add it to this Azure Tips and Trick list. If you've been following the series, then you'd know that I covered Azure Cloud Shell and MS Docs back in [post 11](tip11/) and how to use PowerShell in Azure Cloud Shell in [post 17](tip17/). Today, we'll cover how to add Azure Cloud Shell to Visual Studio Code. 

It is fairly easy as all you need to do is open VS Code, click on Extensions and search for `azure account` and install it as shown below. 

<img :src="$withBase('/files/azurevscode1.png')">

Once installed, go to View -> Command Palette and type `Open Bash in Cloud Shell`. 

<img :src="$withBase('/files/azurevscode2.png')">

**Note:** You can also open PowerShell in Cloud Shell with this extension!


You'll need to sign in first and VS Code makes that simple by opening the browser and copying your device authentication code. Once that is complete, you'll see: 

<img :src="$withBase('/files/azurevscode3.png')">

Go back to View -> Command Palette and select `Open Bash in Cloud Shell` again and it should spin up as shown below.

 <img :src="$withBase('/files/azurevscode4.png')">
