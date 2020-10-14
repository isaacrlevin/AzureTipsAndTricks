(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{510:function(e,t,a){"use strict";a.r(t);var n=a(42),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("🔥 Make sure you "),a("a",{attrs:{href:"http://azuredev.tips?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("star the repo"),a("OutboundLink")],1),e._v(" to keep up to date with new tips and tricks.")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/en-us/azure/aks/configure-azure-cni?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configure Azure CNI networking in Azure Kubernetes Service (AKS)"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("📺 Watch the video : "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=knnn2fPEL0M&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=3&t=0s?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Secure traffic between pods using network policies in Azure Kubernetes Service (AKS)"),a("OutboundLink")],1)])]),e._v(" "),a("h4",{attrs:{id:"securing-components-in-your-azure-kubernetes-service-aks"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#securing-components-in-your-azure-kubernetes-service-aks"}},[e._v("#")]),e._v(" Securing components in your Azure Kubernetes Service (AKS)")]),e._v(" "),a("p",[e._v("By default, components in a Kubernetes cluster can receive traffic from anywhere. This is fine for a development scenario, but not when you run your services in production. To secure your "),a("a",{attrs:{href:"https://azure.microsoft.com/services/kubernetes-service/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Kubernetes Service (AKS)"),a("OutboundLink")],1),e._v(" cluster, you can implement a network policy that defines which components can receive traffic from which sources.")]),e._v(" "),a("p",[e._v("In this post, we'll secure traffic between Kubernetes pods using a network policy.")]),e._v(" "),a("h4",{attrs:{id:"prerequisites"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),a("p",[e._v("If you want to follow along, you'll need the following:")]),e._v(" "),a("ul",[a("li",[e._v("An Azure subscription (If you don't have an Azure subscription, create a "),a("a",{attrs:{href:"https://azure.microsoft.com/free/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("free account"),a("OutboundLink")],1),e._v(" before you begin)")])]),e._v(" "),a("h4",{attrs:{id:"secure-traffic-between-pods-using-network-policies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#secure-traffic-between-pods-using-network-policies"}},[e._v("#")]),e._v(" Secure traffic between pods using network policies")]),e._v(" "),a("p",[e._v("To start securing your Kubernetes components, you need to implement a network policy.")]),e._v(" "),a("p",[e._v("Azure provides two ways to implement a network policy. You choose a network policy option when you create an AKS cluster. The policy option can't be changed after the cluster is created. You can choose between:")]),e._v(" "),a("ul",[a("li",[e._v("Azure’s own implementation, called "),a("strong",[e._v("Azure Network Policies")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.projectcalico.org/v3.8/security/calico-network-policy",target:"_blank",rel:"noopener noreferrer"}},[e._v("Calico Network Policies"),a("OutboundLink")],1),e._v(", an open-source network and network security solution")])]),e._v(" "),a("p",[e._v("You can learn more about the differences between these options "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/aks/use-network-policies#overview-of-network-policy?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("So, to get started, we'll create a new AKS cluster with a network policy:")]),e._v(" "),a("ol",[a("li",[e._v("We are going to use the "),a("a",{attrs:{href:"https://azure.microsoft.com/features/cloud-shell/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cloud Shell"),a("OutboundLink")],1),e._v(" to run our scripts. By using this, we make sure that we run the latest version of the Azure CLI. Go to "),a("a",{attrs:{href:"https://shell.azure.com/?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://shell.azure.com/"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("Run the following script in the Azure Cloud Shell. This creates a virtual network and subnet, an Azure AD Service principal and creates an AKS cluster with "),a("strong",[e._v("Azure Network Policy")]),e._v(" enabled\na. Replace the values for the "),a("strong",[e._v("RESOURCE_GROUP_NAME")]),e._v(", "),a("strong",[e._v("CLUSTER_NAME")]),e._v(" and "),a("strong",[e._v("LOCATION")]),e._v(" parameters at the top with your own values")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('RESOURCE_GROUP_NAME=akstips\nCLUSTER_NAME=tipsAndTricksAKSCluster\nLOCATION=eastus\n\n# Create a resource group\naz group create --name $RESOURCE_GROUP_NAME --location $LOCATION\n\n# Create a virtual network and subnet\naz network vnet create \\\n    --resource-group $RESOURCE_GROUP_NAME \\\n    --name myVnet \\\n    --address-prefixes 10.0.0.0/8 \\\n    --subnet-name myAKSSubnet \\\n    --subnet-prefix 10.240.0.0/16\n\n# Create a service principal and read in the application ID\nSP=$(az ad sp create-for-rbac --output json)\nSP_ID=$(echo $SP | jq -r .appId)\nSP_PASSWORD=$(echo $SP | jq -r .password)\n\n# Wait 15 seconds to make sure that service principal has propagated\necho "Waiting for service principal to propagate..."\nsleep 15\n\n# Get the virtual network resource ID\nVNET_ID=$(az network vnet show --resource-group $RESOURCE_GROUP_NAME --name myVnet --query id -o tsv)\n\n# Assign the service principal Contributor permissions to the virtual network resource\naz role assignment create --assignee $SP_ID --scope $VNET_ID --role Contributor\n\n# Get the virtual network subnet resource ID\nSUBNET_ID=$(az network vnet subnet show --resource-group $RESOURCE_GROUP_NAME --vnet-name myVnet --name myAKSSubnet --query id -o tsv)\n\n# Create the AKS cluster and specify the virtual network and service principal information\n# Enable network policy by using the `--network-policy` parameter\naz aks create \\\n    --resource-group $RESOURCE_GROUP_NAME \\\n    --name $CLUSTER_NAME \\\n    --node-count 1 \\\n    --generate-ssh-keys \\\n    --network-plugin azure \\\n    --service-cidr 10.0.0.0/16 \\\n    --dns-service-ip 10.0.0.10 \\\n    --docker-bridge-address 172.17.0.1/16 \\\n    --vnet-subnet-id $SUBNET_ID \\\n    --service-principal $SP_ID \\\n    --client-secret $SP_PASSWORD \\\n    --network-policy azure\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br"),a("span",{staticClass:"line-number"},[e._v("18")]),a("br"),a("span",{staticClass:"line-number"},[e._v("19")]),a("br"),a("span",{staticClass:"line-number"},[e._v("20")]),a("br"),a("span",{staticClass:"line-number"},[e._v("21")]),a("br"),a("span",{staticClass:"line-number"},[e._v("22")]),a("br"),a("span",{staticClass:"line-number"},[e._v("23")]),a("br"),a("span",{staticClass:"line-number"},[e._v("24")]),a("br"),a("span",{staticClass:"line-number"},[e._v("25")]),a("br"),a("span",{staticClass:"line-number"},[e._v("26")]),a("br"),a("span",{staticClass:"line-number"},[e._v("27")]),a("br"),a("span",{staticClass:"line-number"},[e._v("28")]),a("br"),a("span",{staticClass:"line-number"},[e._v("29")]),a("br"),a("span",{staticClass:"line-number"},[e._v("30")]),a("br"),a("span",{staticClass:"line-number"},[e._v("31")]),a("br"),a("span",{staticClass:"line-number"},[e._v("32")]),a("br"),a("span",{staticClass:"line-number"},[e._v("33")]),a("br"),a("span",{staticClass:"line-number"},[e._v("34")]),a("br"),a("span",{staticClass:"line-number"},[e._v("35")]),a("br"),a("span",{staticClass:"line-number"},[e._v("36")]),a("br"),a("span",{staticClass:"line-number"},[e._v("37")]),a("br"),a("span",{staticClass:"line-number"},[e._v("38")]),a("br"),a("span",{staticClass:"line-number"},[e._v("39")]),a("br"),a("span",{staticClass:"line-number"},[e._v("40")]),a("br"),a("span",{staticClass:"line-number"},[e._v("41")]),a("br"),a("span",{staticClass:"line-number"},[e._v("42")]),a("br"),a("span",{staticClass:"line-number"},[e._v("43")]),a("br"),a("span",{staticClass:"line-number"},[e._v("44")]),a("br"),a("span",{staticClass:"line-number"},[e._v("45")]),a("br"),a("span",{staticClass:"line-number"},[e._v("46")]),a("br"),a("span",{staticClass:"line-number"},[e._v("47")]),a("br"),a("span",{staticClass:"line-number"},[e._v("48")]),a("br")])]),a("img",{attrs:{src:e.$withBase("/files/37createaks.png")}}),e._v(" "),a("p",[e._v("(AKS cluster successfully created in Azure Cloud Shell)")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("When the AKS cluster is created, run the following command to configure "),a("strong",[e._v("kubectl")]),e._v(" to connect to your Kubernetes cluster:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("az aks get-credentials --resource-group $RESOURCE_GROUP_NAME --name $CLUSTER_NAME\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Before we can run example pods to apply network policies to, we need to "),a("strong",[e._v("create a namespace")]),e._v(". Run the following code to create a namespace called "),a("strong",[e._v("test")]),e._v(":")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl create namespace test\nkubectl label namespace/test purpose=test\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Now create an example back-end pod that runs "),a("a",{attrs:{href:"https://www.nginx.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("NGINX"),a("OutboundLink")],1),e._v(". We'll use this back-end pod to simulate a sample back-end web application. The following code creates the pod in the "),a("strong",[e._v("test")]),e._v(" namespace, and opens port 80 to serve web traffic. It also labels the pod with "),a("strong",[e._v("app=webapp,role=backend")]),e._v(" so that we can target it with a network policy in the next section:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl run backend --image=nginx --labels app=webapp,role=backend --namespace test --expose --port 80 --generator=run-pod/v1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[e._v("Next, create another pod and attach a terminal session to it, to test that we can reach the NGINX webpage:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl run --rm -it --image=alpine network-policy --namespace test --generator=run-pod/v1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"7"}},[a("li",[e._v("At the command prompt, run the following command to try and get the webpage from the other pod. The output should be the HTML of the NGINX pod.")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("wget -qO- http://backend\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"8"}},[a("li",[e._v("Run the "),a("strong",[e._v("exit")]),e._v(" command to stop the terminal session")])]),e._v(" "),a("h4",{attrs:{id:"deny-all-traffic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#deny-all-traffic"}},[e._v("#")]),e._v(" Deny all traffic")]),e._v(" "),a("ol",[a("li",[e._v("Remember that by default, all traffic is allowed. So, before we can allow specific network traffic between the pods, we have to create a network policy that denies all traffic. To do this, we start by creating a file that contains YAML code that defines the network policy. Create a new file on your computer called "),a("strong",[e._v("backend-policy.yaml")]),e._v(" and paste the following code into the file. This denies all inbound (ingress) traffic to the pod, because there are no rules defined for "),a("strong",[e._v("ingress")]),e._v(".")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kind: NetworkPolicy\napiVersion: networking.k8s.io/v1\nmetadata:\n  name: backend-policy\n  namespace: test\nspec:\n  podSelector:\n    matchLabels:\n      app: webapp\n      role: backend\n  ingress: []\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("In the Azure Cloud Shell, upload the network policy document by clicking the "),a("strong",[e._v("Upload/Download files button")]),e._v(" and selecting the document")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/37uploadfiles.png")}}),e._v(" "),a("p",[e._v("(Upload files in the Azure Cloud Shell)")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Now apply the network policy by running this command:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl apply -f backend-policy.yaml\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h4",{attrs:{id:"test-that-all-traffic-is-denied"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#test-that-all-traffic-is-denied"}},[e._v("#")]),e._v(" Test that all traffic is denied")]),e._v(" "),a("ol",[a("li",[e._v("Let's test the network policy. Run the following code to create another pod and attach a terminal to it:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl run --rm -it --image=alpine network-policy --namespace test --generator=run-pod/v1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Now run "),a("strong",[e._v("wget")]),e._v(" again to try and get the NGINX webpage. This command should result in "),a("strong",[e._v("wget: download timed out")])])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("wget -qO- --timeout=2 http://backend\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Exit out of the terminal by running the "),a("strong",[e._v("exit")]),e._v(" command")])]),e._v(" "),a("h4",{attrs:{id:"allow-specific-traffic"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#allow-specific-traffic"}},[e._v("#")]),e._v(" Allow specific traffic")]),e._v(" "),a("p",[e._v("Now that all traffic is denied, we can start allowing specific traffic.")]),e._v(" "),a("ol",[a("li",[e._v("Edit the "),a("strong",[e._v("backend-policy.yaml")]),e._v(" and paste the following, new code in. This only allows ingress traffic to pods that match the labels "),a("strong",[e._v("app:webapp and role: frontend")])])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kind: NetworkPolicy\napiVersion: networking.k8s.io/v1\nmetadata:\n  name: backend-policy\n  namespace: test\nspec:\n  podSelector:\n    matchLabels:\n      app: webapp\n      role: backend\n  ingress:\n  - from:\n    - namespaceSelector: {}\n      podSelector:\n        matchLabels:\n          app: webapp\n          role: frontend\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br"),a("span",{staticClass:"line-number"},[e._v("16")]),a("br"),a("span",{staticClass:"line-number"},[e._v("17")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Upload the new version of the file to the Azure Cloud Shell")]),e._v(" "),a("li",[e._v("Apply the new policy by running the following code:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl apply -f backend-policy.yaml\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Now run a pod that has the labels "),a("strong",[e._v("app=webapp,role=frontend")]),e._v(" and attach a terminal session with the following code:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl run --rm -it frontend --image=alpine --labels app=webapp,role=frontend --namespace test --generator=run-pod/v1\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Test if we can get the HTML of the NGINX webpage with the "),a("strong",[e._v("wget")]),e._v(" command. This should work as the pod that we are using has the labels that are allowed by the network policy:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("wget -qO- http://backend\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[e._v("It works! Now exit the terminal by running the "),a("strong",[e._v("exit")]),e._v(" command")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/37getnginxpage.png")}}),e._v(" "),a("p",[e._v("(Successful get of the NGINX webpage in the Azure Cloud Shell)")]),e._v(" "),a("ol",{attrs:{start:"7"}},[a("li",[e._v("Let's see if the network policy actually works. Let's create a pod that doesn't have the allowed labels and get the webpage from there:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("kubectl run --rm -it --image=alpine network-policy --namespace test --generator=run-pod/v1\n\nwget -qO- --timeout=2 http://backend\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("This doesn't work and times out. This means that the network policy is working.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/37downloadfailed.png")}}),e._v(" "),a("p",[e._v("(Failed get of the NGINX webpage in the Azure Cloud Shell)")]),e._v(" "),a("ol",{attrs:{start:"8"}},[a("li",[e._v("Exit the terminal with the "),a("strong",[e._v("exit")]),e._v(" command")])]),e._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("Securing traffic between components in your Kubernetes cluster is very important, especially when you are running a cluster in production. With the "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/aks/use-network-policies?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://docs.projectcalico.org/v3.8/security/calico-network-policy",target:"_blank",rel:"noopener noreferrer"}},[e._v("Calico"),a("OutboundLink")],1),e._v(" network policies that AKS can use out-of-the-box, you can apply advanced security rules to control your traffic. Go and check it out!")]),e._v(" "),a("h4",{attrs:{id:"stay-connected-with-me-on-various-social-platforms-for-daily-software-development-news"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stay-connected-with-me-on-various-social-platforms-for-daily-software-development-news"}},[e._v("#")]),e._v(" Stay connected with me on various social platforms for daily software development news.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://twitter.com/intent/follow?screen_name=mbcrump",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://twitch.tv/mbcrump",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitch"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://instagram.com/mbcrump",target:"_blank",rel:"noopener noreferrer"}},[e._v("Instagram"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://youtube.com/mbcrump",target:"_blank",rel:"noopener noreferrer"}},[e._v("YouTube"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/mbcrump",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),a("OutboundLink")],1)]),e._v(" "),a("li",[a("a",{attrs:{href:"https://www.michaelcrump.net",target:"_blank",rel:"noopener noreferrer"}},[e._v("Website"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);