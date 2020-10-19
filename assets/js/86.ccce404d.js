(window.webpackJsonp=window.webpackJsonp||[]).push([[86],{437:function(e,t,o){"use strict";o.r(t);var a=o(42),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("div",{staticClass:"custom-block tip"},[o("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),o("p",[e._v("💡 Learn more : "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/advisor/advisor-overview?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Introduction to Azure Advisor"),o("OutboundLink")],1),e._v(".")])]),e._v(" "),o("h3",{attrs:{id:"get-the-most-out-of-azure-advisor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#get-the-most-out-of-azure-advisor"}},[e._v("#")]),e._v(" Get the most out of Azure Advisor")]),e._v(" "),o("p",[o("a",{attrs:{href:"https://azure.microsoft.com/services/advisor?WT.mc_id=azure-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Advisor"),o("OutboundLink")],1),e._v(" is a simple dashboard that helps you implement best practices across your Azure resources. In this blog post, I’ll walk you through the types of recommendations it provides and how easy it is to implement them.")]),e._v(" "),o("h4",{attrs:{id:"recommendation-categories"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#recommendation-categories"}},[e._v("#")]),e._v(" Recommendation categories")]),e._v(" "),o("p",[e._v("Advisor looks at the Azure resources in your subscriptions and comes up with recommendations that fall into these categories:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://docs.microsoft.com/azure/advisor/advisor-high-availability-recommendations?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("High Availability"),o("OutboundLink")],1),e._v(": Suggestions that are important for business-critical and production-worthy applications.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.microsoft.com/azure/advisor/advisor-security-recommendations?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Security"),o("OutboundLink")],1),e._v(": Advice to help you prevent and detect threats or security vulnerabilities.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.microsoft.com/azure/advisor/advisor-performance-recommendations?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Performance"),o("OutboundLink")],1),e._v(": Recommendations that are tailored to the configurations of your resources and that compile together items from "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/sql-database/sql-database-advisor?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("SQL Database Advisor"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://docs.microsoft.com/azure/redis-cache/cache-configure#redis-cache-advisor?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Redis Cache Advisor"),o("OutboundLink")],1),e._v(", and other best practices.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.microsoft.com/azure/advisor/advisor-cost-recommendations?WT.mc_id=docs-azuredevtips-azureappsdev",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cost"),o("OutboundLink")],1),e._v(": Information on past usage of things like VMs generates cost-saving recommendations as well as sizing and other resource configurations that affect cost.")])]),e._v(" "),o("h4",{attrs:{id:"use-advisor-to-implement-recommendations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#use-advisor-to-implement-recommendations"}},[e._v("#")]),e._v(" Use Advisor to implement recommendations")]),e._v(" "),o("p",[e._v("Inside the Azure portal, search for "),o("strong",[e._v("Advisor")]),e._v(" and open the "),o("strong",[e._v("Advisor recommendations")]),e._v(' dashboard. At first glance, we can see Advisor has a few recommendations for me, one performance, two for high availability and three for security. At the bottom of the screen, you\'ll also notice that you can export the recommendations to PDF or CSV files - which is great for mangers to prove you need to work on this task. It is very cool that Azure is watching my back "out of the box"!')]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/advisor1.png")}}),e._v(" "),o("p",[e._v("If you’re following along in your own Azure subscription, chances are good you have some recommendations available on the "),o("strong",[e._v("Advisor dashboard")]),e._v(".")]),e._v(" "),o("p",[e._v("Let’s take a look at the High Availability recommendations I have.")]),e._v(" "),o("p",[o("strong",[e._v("Click")]),e._v(" on the "),o("strong",[e._v("High Availability")]),e._v(" box in the dashboard.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/advisor2.png")}}),e._v(" "),o("p",[e._v("You now see more information about the recommendations, like the impact (high, medium, low), description, potential benefits, impacted resources, and the last time the recommendation was updated.")]),e._v(" "),o("p",[o("strong",[e._v("Click")]),e._v(" on an "),o("strong",[e._v("item")]),e._v(" in the recommendation list to learn the complete details.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/advisor3.png")}}),e._v(" "),o("p",[e._v("The recommendation I selected was the "),o("strong",[e._v("“Enable Soft Delete to protect blob data.”")]),e._v(" In my case, I do think it’s a good idea to turn that on for one of the two storage account it lists. So, I clicked on the "),o("strong",[e._v("“Enable Soft Delete to protect blob data”")]),e._v(" link to get to where I can turn that feature on. Isn’t that cool? Not only did it tell me it was a good idea, but it walks me through what I need to do to follow the recommendation!")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/advisor4.png")}}),e._v(" "),o("p",[e._v("Once I click "),o("strong",[e._v("Enabled")]),e._v(", I set the Retention policies to "),o("strong",[e._v("30 days")]),e._v(" and click "),o("strong",[e._v("Save")]),e._v(", that’s it! Now I can use the breadcrumbs in the top to go back to the Enable Soft Delete list.")]),e._v(" "),o("p",[e._v("Next, I want to select "),o("strong",[e._v("Postpone")]),e._v(" for the other storage account.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/advisor5.png")}}),e._v(" "),o("p",[e._v("Since I know I don’t want soft delete enabled on this account, I can postpone this recommendation to "),o("strong",[e._v("Never")]),e._v(" and click the "),o("strong",[e._v("Postpone")]),e._v(" button so it doesn’t make the recommendation next time I take a look at Advisor.")]),e._v(" "),o("p",[e._v("If you click on the "),o("strong",[e._v("Security")]),e._v(" tab and drill into a recommendation, then you'll see an actual secure score. This allows you to quickly see which security recommendations pose the greatest threat.")]),e._v(" "),o("img",{attrs:{src:e.$withBase("/files/advisor6.png")}}),e._v(" "),o("p",[e._v("Again, we see that not only did it tell me what posed the greatest threat, but it walks me through what I need to do to follow the recommendation.")]),e._v(" "),o("h4",{attrs:{id:"summary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),o("p",[e._v("To sum it up, the flow for all four categories of recommendations is:")]),e._v(" "),o("ol",[o("li",[e._v("Select the recommendation category in the dashboard.")]),e._v(" "),o("li",[e._v("Select the individual recommendation.")]),e._v(" "),o("li",[e._v("If you want to ignore, you can postpone (or, for security recommendations, use “dismiss”).")]),e._v(" "),o("li",[e._v("If you want to implement, select the recommendation item and Advisor will walk you through the steps you need to implement the recommendation.")])]),e._v(" "),o("p",[e._v("Implementing best practices is that easy!")])])}),[],!1,null,null,null);t.default=r.exports}}]);