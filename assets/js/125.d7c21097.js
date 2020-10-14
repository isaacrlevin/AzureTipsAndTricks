(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{478:function(e,t,a){"use strict";a.r(t);var s=a(42),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("🔥 Checkout our new Azure Developer page at "),a("a",{attrs:{href:"https://azure.com/developer?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("azure.com/developer"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("📺 Watch the video : "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=7DeV01p73_8&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=65&t=0s?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to build and run a MEAN-based application in Azure"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://aka.ms/att/mean-app-sample?WT.mc_id=azure-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Sample MEAN application GitHub repository"),a("OutboundLink")],1)])]),e._v(" "),a("h4",{attrs:{id:"set-up-a-mean-based-web-application-on-a-new-azure-linux-virtual-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-up-a-mean-based-web-application-on-a-new-azure-linux-virtual-machine"}},[e._v("#")]),e._v(" Set up a MEAN-based web application on a new Azure Linux virtual machine")]),e._v(" "),a("p",[e._v("A MEAN application stack is one that is based on MongoDB, Express, AngularJS and Node.js. This is an attractive technology stack, because it is very performant, cost-effective and can run almost anywhere. The technologies in a MEAN-based application can all be free of cost as they are open source. However, you can also choose to pay to get support contracts for these technologies.")]),e._v(" "),a("p",[e._v("Creating a MEAN-based application and running it in Azure is surprisingly simple. Let's take a look at how to do it:")]),e._v(" "),a("h4",{attrs:{id:"_1-create-a-virtual-machine-in-azure-with-linux"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-a-virtual-machine-in-azure-with-linux"}},[e._v("#")]),e._v(" 1. Create a Virtual Machine in Azure with Linux")]),e._v(" "),a("p",[e._v("We're going to run the MEAN-based application on a VM in Azure that runs Ubuntu. This will show that this type of application can run on many types of Operating Systems, including Ubuntu.")]),e._v(" "),a("ol",[a("li",[e._v("We'll create the VM in Azure using the Azure Cloud Shell. You can open it in the Azure portal, or open it full-screen by going to https://shell.azure.com. Alternatively, you can also do all of in the Azure CLI locally, if you have it "),a("a",{attrs:{href:"https://docs.microsoft.com/cli/azure/install-azure-cli?view=azure-cli-latest?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("installed"),a("OutboundLink")],1)]),e._v(" "),a("li",[e._v("In the Cloud Shell, execute the following commands to create the VM and open up the public port so that we can SSH into it")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("az vm create \\\n    --resource-group AzureTipsAndTricks \\\n    --name tipsandtrickVM \\\n    --image UbuntuLTS \\\n    --admin-username azuremichael \\\n    --admin-password 'my1stFakePassword!' \\\n    --generate-ssh-keys\naz vm open-port --port 3300 --resource-group AzureTipsAndTricks --name tipsandtrickVM\naz vm open-port --port 80 --resource-group AzureTipsAndTricks --name tipsandtrickVM\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br")])]),a("p",[e._v("When the VM is created, you'll see something like the image below. Copy the "),a("strong",[e._v("publicIpAddress")]),e._v(" value. We'll need that to connect to the VM.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/ResultsOfVMCreation.png")}}),e._v(" "),a("p",[e._v("(Results of VM creation in the Azure Cloud Shell)")]),e._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[e._v("You can now SSH into the VM. You need the username, the public IP address and your password. Execute the SSH command like in the image below")])]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/SSHIntoVM.png")}}),e._v(" "),a("p",[e._v("(SSH into the VM in the Azure Cloud Shell)")]),e._v(" "),a("h4",{attrs:{id:"_2-install-the-mean-stack-on-the-virtual-machine"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-install-the-mean-stack-on-the-virtual-machine"}},[e._v("#")]),e._v(" 2. Install the MEAN stack on the Virtual Machine")]),e._v(" "),a("p",[e._v("We're now ready to install all of the software that we need in the MEAN stack. This means that we need to install MongoDB and Node.js. the E in MEAN stands for Express, which is a web server framework for Node.js that handles request routing. We'll get this as a Node.js package when we create the application later on. The same goes for the A in MEAN; AngularJS. This is not something that we need to install, but rather a JavaScript framework that we will get by referencing it in the application. So let's install MongoDB and Node.js on the VM.")]),e._v(" "),a("ol",[a("li",[e._v("Use the console of the VM (We work from the SSH command line from the last section)")]),e._v(" "),a("li",[e._v("First, we need to import the encryption key for the MongoDB repository. This allows the Ubuntu package manager to verify that the packages you install are coming from MongoDB Inc")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv E52529D4\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("Now, we need to register the MongoDB repository, so that the package manager can find it")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.0.list\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Update the package database so that it includes MongoDB with this command")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo apt-get update\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"5"}},[a("li",[e._v("Install MongoDB with this command")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo apt install mongodb-org\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"6"}},[a("li",[e._v("And start the MongoDB service, so that we can use it in our application")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo service mongod start\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("That's it! We have a MongoDB database sever running on the VM. Let's continue with Node.js.")]),e._v(" "),a("ol",[a("li",[e._v("In the SSH command prompt, first, register the Node.js repository with the package manager, so that we can find and install it")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Install Node.js with the following command")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo apt-get install nodejs\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("And check that you are now running Node.js with this command")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("node -v\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h4",{attrs:{id:"_3-create-the-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-create-the-application"}},[e._v("#")]),e._v(" 3. Create the application")]),e._v(" "),a("p",[e._v("Now for the easy part: creating the application. We'll use a simple Node.js application that manages books that we store in MongoDB. We'll get the application files from a "),a("a",{attrs:{href:"https://github.com/MicrosoftDocs/mslearn-build-a-web-app-with-mean-on-a-linux-vm?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("public GitHub repository"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("ol",[a("li",[e._v("If you are still SSH-ed into the VM, exit to the Cloud Shell by typing "),a("strong",[e._v("exit")])]),e._v(" "),a("li",[e._v("Get the application files by executing git clone:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("git clone https://github.com/MicrosoftDocs/mslearn-build-a-web-app-with-mean-on-a-linux-vm\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("h4",{attrs:{id:"_4-run-the-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-run-the-application"}},[e._v("#")]),e._v(" 4. Run the application")]),e._v(" "),a("p",[e._v("We now have a complete application that we can run. Let's copy it to the VM and run it.")]),e._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[e._v("Copy the files to the VM. You'll use your VM username, public IP address and password again. You can use this command:")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("scp -r mslearn-build-a-web-app-with-mean-on-a-linux-vm azuremichael@65.52.133.121:./\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"3"}},[a("li",[e._v("SSH into the VM again by using this command")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("ssh azuremichael@65.52.133.121\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("ol",{attrs:{start:"4"}},[a("li",[e._v("Navigate to the books folder in the application files by executing "),a("strong",[e._v("cd ~/mslearn-build-a-web-app-with-mean-on-a-linux-vm/Books")])]),e._v(" "),a("li",[e._v("Execute "),a("strong",[e._v("npm install")]),e._v(" to install the packages that we need to run the application")]),e._v(" "),a("li",[e._v("Finally, run the application by executing the command below")])]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("sudo node server.js\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The application is now running and listening for requests on the public IP address of the VM. Navigate to this address in a browser to open the application. Try it out by adding and deleting a couple of books.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/UseTheApplication.png")}}),e._v(" "),a("p",[e._v("(Run the application in a browser)")]),e._v(" "),a("h4",{attrs:{id:"conclusion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),a("p",[e._v("MEAN-based applications are extremely portable and relatively easy to create. As you've seen, you don't need a lot of plumbing. Just a simple HTML + JavaScript application with routes and a database. And a MEAN-based app is very portable as we've seen. You can create some files and simply copy them over and run them. This makes the MEAN stack very powerful. Go and check it out!")])])}),[],!1,null,null,null);t.default=n.exports}}]);