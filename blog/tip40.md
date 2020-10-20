---
type: post
title: "Tip 40 - Upload Files from a URL with Azure Logic Apps"
excerpt: "Learn how to upload files from a URL with Azure Logic Apps"
tags: [azure, windows, portal, cloud, developers, tipsandtricks]
date: 2017-10-25 17:00:00
---

::: tip
:bulb: Learn more : [Azure Logic Apps Documentation](https://docs.microsoft.com/azure/logic-apps/?WT.mc_id=docs-azuredevtips-azureappsdev).

:tv: Watch the video : [How to Work with Connectors in Azure Logic Apps](https://www.youtube.com/watch?v=rN24xLJwPbk&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=39?WT.mc_id=youtube-azuredevtips-azureappsdev).
:::

### Upload Files from a URL with Azure Logic Apps

#### My Scenario - Tracking Run Data

I thought I'd use this week's Tip and Tricks series to show a practical example of how I am using Azure. I've started running outdoors and would like to extract several links that my app generates via email and send them to my OneDrive account automatically vs doing it manually after each run. I'm also concerned that the app that generates my data may be abandoned one day. In order to secure my data, I used a combination of [Zappier.com](http://www.zapier.com) and [Azure](http://www.azure.com) to solve my problem and over the course of this week, we'll cover the following sections needed in order to implement this: 

* [Parse Emails to be used in a Azure Logic Apps](https://microsoft.github.io/AzureTipsAndTricks/blog/tip37.html)
* [Create JSON Schema to be used in a Azure Logic Apps](https://microsoft.github.io/AzureTipsAndTricks/blog/tip38.html)
* [Setup an HTTP Request Trigger that is used in an Azure Logic Apps](https://microsoft.github.io/AzureTipsAndTricks/blog/tip39.html)
* [This post - Upload Files from a URL with Azure Logic Apps](https://microsoft.github.io/AzureTipsAndTricks/blog/tip40.html)


#### Upload Files from a URL with Azure Logic Apps

In the [this post](https://microsoft.github.io/AzureTipsAndTricks/blog/tip39.html), we setup our Azure Logic App to receive an HTTP Request from Zappier which included a JSON payload with the four fields that we wish to extract from our email. (filename, csv, gpx and kml url)

We'll pick up by working with our existing Azure Logic App and using OneDrive to automatically upload the files to my personal OneDrive account. 

<img :src="$withBase('/files/onedriveblog1.png')">

Typically, you'll add an **Action** or **Condition** to trigger once the HTTP request is complete. 

We'll select an **Action** as we want it to run every time vs. an **Condition** which would use "If..then.." logic after the HTTP request comes in. Select **Action** and search for "upload file to onedrive" and you'll see the following is available to use. 

<img :src="$withBase('/files/onedriveblog2.png')">

You'll have to sign in to your OneDrive account. 

Now you can pull the fields that we captured and use them as dynamic content. For example, the GPX file contains the full URL, so we can just use that dynamic field. For the destination URL, we'll construct where we want it to go in our OneDrive account. Note that I've also setup 2 additional OneDrive actions for the KML and CSV file. 

<img :src="$withBase('/files/onedriveblog3.png')">

Now you'd want to send an email to your Zappier mailbox to test all the pieces to this app. If everything goes well, then you can switch over to your OneDrive account and you'll see your new files. 

<img :src="$withBase('/files/onedriveblog4.png')">

If it doesn't appear to be working then you should start by looking at the **Overview** section, then the **Run History** as shown below. 

<img :src="$withBase('/files/onedriveblog5.png')">
