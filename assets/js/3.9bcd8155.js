(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{376:function(t,a,s){t.exports=s.p+"assets/img/harbor_container_image.bcd6ded7.png"},377:function(t,a,s){t.exports=s.p+"assets/img/harbor_signed_container_image.10bd8b45.png"},378:function(t,a,s){t.exports=s.p+"assets/img/harbor_scanned_container_image.ce6c791c.png"},379:function(t,a,s){t.exports=s.p+"assets/img/harbor_scanned_container_image_with_vulnerabilities.ff516df4.png"},380:function(t,a,s){t.exports=s.p+"assets/img/harbor_container_image_vulnerability_list.68a48998.png"},381:function(t,a,s){t.exports=s.p+"assets/img/harbor_registries.a1f41363.png"},382:function(t,a,s){t.exports=s.p+"assets/img/harbor_replications.c55dea3b.png"},383:function(t,a,s){t.exports=s.p+"assets/img/harbor_replication_execution.910b07ab.png"},384:function(t,a,s){t.exports=s.p+"assets/img/harbor_projects_repositories_list.3e69ceb1.png"},408:function(t,a,s){"use strict";s.r(a);var e=s(18),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"harbor-and-container-images"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#harbor-and-container-images"}},[t._v("#")]),t._v(" Harbor and container images")]),t._v(" "),e("p",[t._v("Few more samples how you can work with container images in Harbor.")]),t._v(" "),e("h2",{attrs:{id:"upload-docker-image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#upload-docker-image"}},[t._v("#")]),t._v(" Upload docker image")]),t._v(" "),e("p",[t._v("Create simple Docker image")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" admin "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" docker login --username aduser05 --password-stdin harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("WARNING! Your password will be stored unencrypted in /home/pruzicka/.docker/config.json.\nConfigure a credential helper to remove this warning. See\nhttps://docs.docker.com/engine/reference/commandline/login/#credentials-store\n\nLogin Succeeded\n")])])]),e("p",[t._v("Download "),e("code",[t._v("kuard")]),t._v(" docker image:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker pull gcr.io/kuar-demo/kuard-amd64:blue\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("blue: Pulling from kuar-demo/kuard-amd64\n8e402f1a9c57: Pull complete\n8df70f469ef0: Pull complete\nDigest: sha256:1ecc9fb2c871302fdb57a25e0c076311b7b352b0a9246d442940ca8fb4efe229\nStatus: Downloaded newer image for gcr.io/kuar-demo/kuard-amd64:blue\n")])])]),e("p",[t._v("Tag "),e("code",[t._v("kuard")]),t._v(" with customized name to push to the private repository in Harbor:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker tag gcr.io/kuar-demo/kuard-amd64:blue harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("/my_project/kuard-amd64:blue\n")])])]),e("p",[t._v("List all images:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker images\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("REPOSITORY                                 TAG                 IMAGE ID            CREATED             SIZE\ngcr.io/kuar-demo/kuard-amd64               blue                1db936caa6ac        3 months ago        23MB\nharbor.mylabs.dev/my_project/kuard-amd64   blue                1db936caa6ac        3 months ago        23MB\n")])])]),e("p",[t._v("Push docker image to Harbor:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker push harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("/my_project/kuard-amd64:blue\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("The push refers to repository [harbor.mylabs.dev/my_project/kuard-amd64]\n656e9c47289e: Pushed\nbcf2f368fe23: Pushed\nblue: digest: sha256:1ecc9fb2c871302fdb57a25e0c076311b7b352b0a9246d442940ca8fb4efe229 size: 739\n")])])]),e("p",[t._v("It should be visible in the Harbor UI:")]),t._v(" "),e("p",[e("img",{attrs:{src:s(376),alt:"Container image in Harbor UI",title:"Container image in Harbor UI"}})]),t._v(" "),e("h2",{attrs:{id:"signed-container-image"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#signed-container-image"}},[t._v("#")]),t._v(" Signed container image")]),t._v(" "),e("p",[t._v("YouTube video: "),e("a",{attrs:{href:"https://youtu.be/pPklSTJZY2E",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://youtu.be/pPklSTJZY2E"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("img",{attrs:{src:"https://raw.githubusercontent.com/theupdateframework/notary/97a2d690658937fea3b65b4494bd5c3a75558d08/docs/images/notary-blk.svg?sanitize=true",alt:"Notary",title:"Notary"}})]),t._v(" "),e("p",[t._v("Tag the "),e("code",[t._v("kuard")]),t._v(" image to be pulled to Harbor "),e("code",[t._v("library")]),t._v(" project:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker tag gcr.io/kuar-demo/kuard-amd64:blue harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("/library/kuard-amd64:blue\n")])])]),e("p",[t._v("Push there the image:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DOCKER_CONTENT_TRUST")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DOCKER_CONTENT_TRUST_SERVER")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://notary."),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DOCKER_CONTENT_TRUST_REPOSITORY_PASSPHRASE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"mypassphrase123"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DOCKER_CONTENT_TRUST_ROOT_PASSPHRASE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"rootpassphrase123"')]),t._v("\ndocker push harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("/library/kuard-amd64:blue\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("unset")]),t._v(" DOCKER_CONTENT_TRUST\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('The push refers to repository [harbor.mylabs.dev/library/kuard-amd64]\n656e9c47289e: Mounted from my_project/kuard-amd64\nbcf2f368fe23: Mounted from my_project/kuard-amd64\nblue: digest: sha256:1ecc9fb2c871302fdb57a25e0c076311b7b352b0a9246d442940ca8fb4efe229 size: 739\nSigning and pushing trust metadata\nFinished initializing "harbor.mylabs.dev/library/kuard-amd64"\nSuccessfully signed harbor.mylabs.dev/library/kuard-amd64:blue\n')])])]),e("p",[t._v("You should be able to see the signed container image in the Harbor web\ninterface:")]),t._v(" "),e("p",[e("img",{attrs:{src:s(377),alt:"Signed container image",title:"Signed container image"}})]),t._v(" "),e("p",[t._v("Install "),e("a",{attrs:{href:"https://github.com/theupdateframework/notary",target:"_blank",rel:"noopener noreferrer"}},[t._v("Notary"),e("OutboundLink")],1),t._v(' which can show\nyou the signature form "Harbor":')]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sL https://github.com/theupdateframework/notary/releases/download/v0.6.1/notary-Linux-amd64 -o /usr/local/bin/notary\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" a+x /usr/local/bin/notary\n")])])]),e("p",[t._v("Access Notary using the standard client:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("notary -s https://notary."),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v(" list harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("/library/kuard-amd64\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("NAME    DIGEST                                                              SIZE (BYTES)    ROLE\n----    ------                                                              ------------    ----\nblue    1ecc9fb2c871302fdb57a25e0c076311b7b352b0a9246d442940ca8fb4efe229    739             targets\n")])])]),e("h2",{attrs:{id:"vulnerability-scan"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vulnerability-scan"}},[t._v("#")]),t._v(" Vulnerability scan")]),t._v(" "),e("p",[t._v("YouTube video: "),e("a",{attrs:{href:"https://youtu.be/K4tJ6B2cGR4",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://youtu.be/K4tJ6B2cGR4"),e("OutboundLink")],1)]),t._v(" "),e("p",[e("img",{attrs:{src:"https://cloud.githubusercontent.com/assets/343539/21630811/c5081e5c-d202-11e6-92eb-919d5999c77a.png",alt:"Clair logo",title:"Clair logo"}})]),t._v(" "),e("p",[t._v('Wait for Clair to finish updating the "Vulnerability database" (it may take a\nlong time).')]),t._v(" "),e("p",[t._v("Wait for Clair to update the vulnerability data:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CLAIR_POD")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token variable"}},[e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),t._v("kubectl get pods -l "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app=harbor,component=clair"')]),t._v(" -n harbor-system -o "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("jsonpath")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{.items[0].metadata.name}"')]),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" kubectl logs -n harbor-system "),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${CLAIR_POD}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"update finished"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("do")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('". "')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("sleep")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("done")]),t._v("\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Event"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"update finished"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Level"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"info"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Location"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"updater.go:223"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"Time"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2019-07-19 10:15:24.517724"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v('See if "Vulnerability database" was successfully updated using API:')]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -s -u "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin:admin"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://harbor.'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v('/api/systeminfo"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" jq "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('".clair_vulnerability_status"')]),t._v("\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-json extra-class"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"overall_last_update"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1563531324")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"details"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"namespace"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"debian"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"last_update"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1563531324")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"namespace"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"alpine"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"last_update"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1563531324")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"namespace"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ubuntu"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"last_update"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1563531324")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"namespace"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"oracle"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"last_update"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1563531324")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"namespace"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"centos"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"last_update"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1563531324")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("Scan the image "),e("code",[t._v("kuard-amd64:blue")]),t._v(" for vulnerabilities (using API):")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -u "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aduser05:admin"')]),t._v(" --header "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" -X POST "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://harbor.'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v('/api/repositories/my_project/kuard-amd64/tags/blue/scan"')]),t._v("\n")])])]),e("p",[t._v('Everything should be "green" - no vulnerability found:')]),t._v(" "),e("p",[e("img",{attrs:{src:s(378),alt:"Scanned container image in Harbor UI",title:"Scanned container image in Harbor UI"}})]),t._v(" "),e("p",[t._v("Let's download popular web server "),e("a",{attrs:{href:"https://nginx.com",target:"_blank",rel:"noopener noreferrer"}},[t._v("Nginx"),e("OutboundLink")],1),t._v(" based on Debian\nStretch from Docker Hub. The image is is one year old:\n"),e("a",{attrs:{href:"https://hub.docker.com/_/nginx?tab=tags&page=5",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hub.docker.com/_/nginx?tab=tags&page=5"),e("OutboundLink")],1)]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker pull nginx:1.13.12\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("1.13.12: Pulling from library/nginx\nf2aa67a397c4: Pull complete\n3c091c23e29d: Pull complete\n4a99993b8636: Pull complete\nDigest: sha256:b1d09e9718890e6ebbbd2bc319ef1611559e30ce1b6f56b2e3b479d9da51dc35\nStatus: Downloaded newer image for nginx:1.13.12\n")])])]),e("p",[t._v("Tag "),e("code",[t._v("nginx")]),t._v(" to push to the private repository in Harbor:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker tag nginx:1.13.12 harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("/my_project/nginx:1.13.12\n")])])]),e("p",[t._v("List all images:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker images\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[t._v(" ")]),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("REPOSITORY                                 TAG                 IMAGE ID            CREATED             SIZE\ngcr.io/kuar-demo/kuard-amd64               blue                1db936caa6ac        3 months ago        23MB\nharbor.mylabs.dev/library/kuard-amd64      blue                1db936caa6ac        3 months ago        23MB\nharbor.mylabs.dev/my_project/kuard-amd64   blue                1db936caa6ac        3 months ago        23MB\nnginx                                      1.13.12             ae513a47849c        14 months ago       109MB\nharbor.mylabs.dev/my_project/nginx         1.13.12             ae513a47849c        14 months ago       109MB\n")])])]),e("p",[t._v("Push "),e("code",[t._v("nginx")]),t._v(" docker image to Harbor:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("docker push harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("/my_project/nginx:1.13.12\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("The push refers to repository [harbor.mylabs.dev/my_project/nginx]\n7ab428981537: Pushed\n82b81d779f83: Pushed\nd626a8ad97a1: Pushed\n1.13.12: digest: sha256:e4f0474a75c510f40b37b6b7dc2516241ffa8bde5a442bde3d372c9519c84d90 size: 948\n")])])]),e("p",[t._v("Scan the image for vulnerabilities:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -u "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"aduser06:admin"')]),t._v(" --header "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" -X POST "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://harbor.'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v('/api/repositories/my_project%2Fnginx/tags/1.13.12/scan"')]),t._v("\n")])])]),e("p",[t._v("You should see many vulnerabilities in the container image:")]),t._v(" "),e("p",[e("img",{attrs:{src:s(379),alt:"Scanned container image with vulnerabilities",title:"Scanned container image with vulnerabilities"}})]),t._v(" "),e("p",[t._v("Vulnerability list for container image:")]),t._v(" "),e("p",[e("img",{attrs:{src:s(380),alt:"Vulnerability list for container image",title:"Vulnerability list for container image"}})]),t._v(" "),e("h2",{attrs:{id:"replication"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#replication"}},[t._v("#")]),t._v(" Replication")]),t._v(" "),e("p",[t._v("YouTube video: "),e("a",{attrs:{href:"https://youtu.be/1NPlzrm5ozE",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://youtu.be/1NPlzrm5ozE"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("You can configure replication form other registries to replicate helm charts or\ncontainers.")]),t._v(" "),e("p",[t._v("Create new Registry Endpoint:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X POST -H "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" -u "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin:admin"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://harbor.'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v('/api/registries"')]),t._v(" -d "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n  '),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("name"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("Docker Hub"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("type"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("docker-hub"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("url"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("https://hub.docker.com"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("description"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("Docker Hub Registry Endpoint"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('\n}"')]),t._v("\n")])])]),e("p",[t._v("In the Web GUI you should see:")]),t._v(" "),e("p",[e("img",{attrs:{src:s(381),alt:"Harbor Registries",title:"Harbor Registries"}})]),t._v(" "),e("p",[t._v("Create new Replication Rule:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X POST -H "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" -u "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin:admin"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://harbor.'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v('/api/replication/policies"')]),t._v(" -d "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{\n  '),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("name"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("Replication of paulbouwer/hello-kubernetes"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("type"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("docker-hub"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("url"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("https://hub.docker.com"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("description"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("Replication Rule for paulbouwer/hello-kubernetes"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("enabled"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": true,\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("src_registry"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": {\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("id"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": 1\n  },\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("dest_namespace"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("library"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("filters"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": [{\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("type"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("name"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(",\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("value"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("paulbouwer/hello-kubernetes"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("\n  }],\n  "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("trigger"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": {\n    "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("type"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(": "),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("manual"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v('\n  }\n}"')]),t._v("\n")])])]),e("p",[t._v("Start the replication:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" -X POST -H "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Content-Type: application/json"')]),t._v(" -u "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"admin:admin"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://harbor.'),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v('/api/replication/executions"')]),t._v(" -d "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{ '),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v("policy_id"),e("span",{pre:!0,attrs:{class:"token entity",title:'\\"'}},[t._v('\\"')]),t._v(': 1 }"')]),t._v("\n")])])]),e("p",[t._v("Prepare ingress for running the application "),e("code",[t._v("hello-kubernetes")]),t._v(":")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("export")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("APP")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("hello-kubernetes\nenvsubst "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("/files/app_ingress.yaml "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" kubectl create -f -\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("ingress.extensions/hello-kubernetes created\n")])])]),e("p",[t._v("The Replications and Execution tabs looks like:")]),t._v(" "),e("p",[e("img",{attrs:{src:s(382),alt:"Harbor Replications",title:"Harbor Replications"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(383),alt:"Harbor Replication Execution",title:"Harbor Replication Execution"}})]),t._v(" "),e("p",[e("img",{attrs:{src:s(384),alt:"Harbor Project Repository list",title:"Harbor Project Repository list"}})]),t._v(" "),e("p",[t._v("Let's run the replicated docker image:")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[t._v("kubectl run hello-kubernetes --image"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("harbor."),e("span",{pre:!0,attrs:{class:"token variable"}},[t._v("${MY_DOMAIN}")]),t._v("/library/hello-kubernetes:1.5 --port"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),t._v(" --expose"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true --labels"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"app=hello-kubernetes"')]),t._v(" -n mytest\n")])])]),e("p",[t._v("Output:")]),t._v(" "),e("div",{staticClass:"language-text extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("kubectl run --generator=deployment/apps.v1 is DEPRECATED and will be removed in a future version. Use kubectl run --generator=run-pod/v1 or kubectl create instead.\nservice/hello-kubernetes created\ndeployment.apps/hello-kubernetes created\n")])])]),e("p",[t._v("Open the web browser with URL: "),e("a",{attrs:{href:"https://hello-kubernetes.mylabs.dev",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://hello-kubernetes.mylabs.dev"),e("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);