"use strict";(globalThis["webpackChunkopenaimart"]=globalThis["webpackChunkopenaimart"]||[]).push([[541],{1816:(e,t,o)=>{o.d(t,{H:()=>l,N$:()=>p});var a=o(7141),r=o(4747),n=o(4043);const i={apiKey:"AIzaSyCZumWqJXcx7gedGaZ1c4qZdyZFeuQ1tMg",authDomain:"aoaiportal.firebaseapp.com",databaseURL:"https://aoaiportal-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"aoaiportal",storageBucket:"aoaiportal.appspot.com",messagingSenderId:"370281326669",appId:"1:370281326669:web:e04c79a6cbd442423f5404",measurementId:"G-1QXSTKNFCZ"},l=(0,a.ZF)(i),p=((0,n.IH)(l),(0,r.N8)())},8341:(e,t,o)=>{o.d(t,{s:()=>i});var a=o(1809),r=function(e,t,o,a){function r(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,n){function i(e){try{p(a.next(e))}catch(t){n(t)}}function l(e){try{p(a["throw"](e))}catch(t){n(t)}}function p(e){e.done?o(e.value):r(e.value).then(i,l)}p((a=a.apply(e,t||[])).next())}))};const n={engine:"text-davinci-003",preprompt:"This is a preprompt.",prompt:"This is a prompt.",result:"",temperature:.3,max_tokens:128,top_p:1,frequency_penalty:0,presence_penalty:0,stop:null,best_of:1,title:"Untitled",author_name:"",author_id:"",tags:null},i=(0,a.Q_)("oai",{state:()=>({gpt:{},apiInfo:{api_type:"azure",azure_openai_name:localStorage.getItem("azure_openai_name")||"",api_version:"2023-03-15-preview",api_key:localStorage.getItem("api_key")||""},chatgpt_tokens:0,promptId:""}),getters:{},actions:{resetGPT:function(){for(const e in n)this.gpt[e]=n[e]},fetchHtmlCode:function(e){var t;return r(this,void 0,void 0,(function*(){if(console.log("starting fetchGPT"),null===this.apiInfo.api_key)return void alert("api key is null");let o=null;o=this.gpt.stop,(null===(t=this.gpt.stop)||void 0===t?void 0:t.length)&&(o=this.gpt.stop);const a=yield fetch(`https://${this.apiInfo.azure_openai_name}.openai.azure.com/openai/deployments/text-davinci-003/completions?api-version=${this.apiInfo.api_version}`,{method:"POST",headers:{"Content-Type":"application/json","api-key":this.apiInfo.api_key},body:JSON.stringify({prompt:e,max_tokens:2048,temperature:0,top_p:1,frequency_penalty:0,presence_penalty:0,stop:null})}),r=yield a.json();return r.error?(console.log(r.error),void alert(r.error.message)):r.choices[0].text}))},fetchGPT:function(){return r(this,void 0,void 0,(function*(){if(console.log("starting fetchGPT"),null===this.apiInfo.api_key)return void alert("api key is null");let e=this.gpt.stop;console.log("stopValue",e),0===(null===e||void 0===e?void 0:e.length)&&(e=null);const t=yield fetch(`https://${this.apiInfo.azure_openai_name}.openai.azure.com/openai/deployments/${this.gpt.engine}/completions?api-version=${this.apiInfo.api_version}`,{method:"POST",headers:{"Content-Type":"application/json","api-key":this.apiInfo.api_key},body:JSON.stringify({prompt:this.gpt.preprompt+this.gpt.prompt,max_tokens:"string"==typeof this.gpt.max_tokens?parseInt(this.gpt.max_tokens):this.gpt.max_tokens,temperature:this.gpt.temperature,top_p:this.gpt.top_p,frequency_penalty:this.gpt.frequency_penalty,presence_penalty:this.gpt.presence_penalty,stop:e})}),o=yield t.json();if(o.error)return console.log(o.error),void alert(o.error.message);console.log(o),this.gpt.result=o.choices[0].text}))},fetchChatGPT:function(e){return r(this,void 0,void 0,(function*(){if(console.log("starting fetchGPT"),null===this.apiInfo.api_key)return void alert("api key is null");let t=this.gpt.stop;console.log("stopValue",t),0===(null===t||void 0===t?void 0:t.length)&&(t=null);const o=yield fetch(`https://${this.apiInfo.azure_openai_name}.openai.azure.com/openai/deployments/${this.gpt.engine}/chat/completions?api-version=${this.apiInfo.api_version}`,{method:"POST",headers:{"Content-Type":"application/json","api-key":this.apiInfo.api_key},body:JSON.stringify({messages:[{role:"system",content:this.gpt.preprompt}].concat(e),max_tokens:"string"==typeof this.gpt.max_tokens?parseInt(this.gpt.max_tokens):this.gpt.max_tokens,temperature:this.gpt.temperature,top_p:this.gpt.top_p,frequency_penalty:this.gpt.frequency_penalty,presence_penalty:this.gpt.presence_penalty,stop:t})}),a=yield o.json();return a.error?(console.log(a.error),void alert(a.error.message)):(console.log(a),this.chatgpt_tokens=a.usage.total_tokens,a.choices[0].message)}))},setLocalStorage:function(){localStorage.setItem("api_key",this.apiInfo.api_key),localStorage.setItem("azure_openai_name",this.apiInfo.azure_openai_name),alert("Saved to localStorage")}}})},2541:(e,t,o)=>{o.r(t),o.d(t,{default:()=>z});var a=o(9835),r=o(6970);const n={class:"text-h4 q-pa-md"},i={class:"q-gutter-md row items-start q-pa-md full-height"},l={class:"row q-px-md q-my-md items-start q-gutter-xs justify-start"},p={class:"text-h6"},s={class:"row q-px-md q-my-md items-start q-gutter-xs justify-start"},u={class:"text-h6"};function c(e,t,o,c,d,m){const g=(0,a.up)("q-btn"),h=(0,a.up)("q-input"),f=(0,a.up)("q-card-section"),y=(0,a.up)("q-separator"),_=(0,a.up)("q-avatar"),v=(0,a.up)("q-chip"),w=(0,a.up)("q-card-actions"),k=(0,a.up)("q-card"),x=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(x,{class:"q-pa-md"},{default:(0,a.w5)((()=>[(0,a._)("div",n,[(0,a.Uk)("Prompts "),(0,a.Wm)(g,{class:"q-mx-md",color:"primary",onClick:t[0]||(t[0]=t=>{var o,a;e.$router.replace("/prompts?a="+(null===(o=e.auth.currentUser)||void 0===o?void 0:o.uid)),e.getPromptsByAuthor(null===(a=e.auth.currentUser)||void 0===a?void 0:a.uid),e.getDraftPrompts()})},{default:(0,a.w5)((()=>[(0,a.Uk)("My Prompts")])),_:1}),(0,a.Wm)(g,{class:"q-ma-md",color:"secondary",onClick:t[1]||(t[1]=t=>{e.$router.replace("/prompts"),e.getLatestPrompts()})},{default:(0,a.w5)((()=>[(0,a.Uk)("Reset")])),_:1}),(0,a.Wm)(g,{onClick:t[2]||(t[2]=t=>{e.oai.resetGPT(),e.$router.replace("/create?m=new")}),flat:"",dense:"","no-wrap":"",color:"primary",icon:"add","no-caps":"",label:"Create New Prompt",class:"q-ml-sm q-px-md"})]),(0,a._)("div",i,[(0,a.Wm)(h,{filled:"",class:"col-5",modelValue:e.titleSearch,"onUpdate:modelValue":[t[3]||(t[3]=t=>e.titleSearch=t),t[4]||(t[4]=t=>e.getPromptsByTitle(e.titleSearch))],hint:"Search by Title"},null,8,["modelValue"]),(0,a.Wm)(h,{filled:"",class:"col-5",modelValue:e.tagSearch,"onUpdate:modelValue":[t[5]||(t[5]=t=>e.tagSearch=t),t[6]||(t[6]=t=>e.getPromptsByTag(e.tagSearch))],hint:"Search by Tag"},null,8,["modelValue"])]),(0,a._)("div",l,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.prompts,((t,o)=>((0,a.wg)(),(0,a.j4)(k,{key:o,flat:"",bordered:"",style:{width:"350px"},class:"my-card col-*"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a._)("div",p,(0,r.zw)(t.title.length<30?t.title:t.title.substring(0,28)+"..."),1)])),_:2},1024),(0,a.Wm)(y),(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.tags,((e,t)=>((0,a.wg)(),(0,a.j4)(v,{dense:"",key:t},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{icon:"bookmark",color:"green","text-color":"white"}),(0,a.Uk)(" "+(0,r.zw)(e),1)])),_:2},1024)))),128))])),_:2},1024),(0,a.Wm)(f,{class:"q-pt-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{square:"",dense:"",icon:"input",color:"primary","text-color":"white"},{default:(0,a.w5)((()=>[(0,a.Uk)("Pre-prompt")])),_:1}),(0,a.Wm)(h,{modelValue:t.preprompt,"onUpdate:modelValue":e=>t.preprompt=e,rows:"3",filled:"",type:"textarea"},null,8,["modelValue","onUpdate:modelValue"]),(0,a.Wm)(v,{square:"",dense:"",icon:"input",color:"primary","text-color":"white"},{default:(0,a.w5)((()=>[(0,a.Uk)("Prompt/Input")])),_:1}),(0,a.Wm)(h,{modelValue:t.prompt,"onUpdate:modelValue":e=>t.prompt=e,rows:"3",filled:"",type:"textarea"},null,8,["modelValue","onUpdate:modelValue"]),(0,a.Wm)(v,{square:"",dense:"",icon:"output",color:"primary","text-color":"white"},{default:(0,a.w5)((()=>[(0,a.Uk)("Result")])),_:1}),(0,a.Wm)(h,{modelValue:t.result,"onUpdate:modelValue":e=>t.result=e,rows:"3",filled:"",type:"textarea"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,a.Wm)(y),(0,a.Wm)(w,{vertical:""},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{onClick:o=>{e.setGPT(t,t.id),e.$router.replace("/create?m=edit&id="+t.id)},flat:""},{default:(0,a.w5)((()=>[(0,a.Uk)("Test Now")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)))),128))]),(0,a._)("div",s,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.drafts,((t,o)=>((0,a.wg)(),(0,a.j4)(k,{key:o,flat:"",bordered:"",style:{width:"350px"},class:"my-card col-*"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Uk)(" Draft"),(0,a._)("div",u,(0,r.zw)(t.title.length<30?t.title:t.title.substring(0,28)+"..."),1)])),_:2},1024),(0,a.Wm)(y),(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(t.tags,((e,t)=>((0,a.wg)(),(0,a.j4)(v,{dense:"",key:t},{default:(0,a.w5)((()=>[(0,a.Wm)(_,{icon:"bookmark",color:"green","text-color":"white"}),(0,a.Uk)(" "+(0,r.zw)(e),1)])),_:2},1024)))),128))])),_:2},1024),(0,a.Wm)(f,{class:"q-pt-none"},{default:(0,a.w5)((()=>[(0,a.Wm)(v,{square:"",dense:"",icon:"input",color:"primary","text-color":"white"},{default:(0,a.w5)((()=>[(0,a.Uk)("Pre-prompt")])),_:1}),(0,a.Wm)(h,{modelValue:t.preprompt,"onUpdate:modelValue":e=>t.preprompt=e,rows:"3",filled:"",type:"textarea"},null,8,["modelValue","onUpdate:modelValue"]),(0,a.Wm)(v,{square:"",dense:"",icon:"input",color:"primary","text-color":"white"},{default:(0,a.w5)((()=>[(0,a.Uk)("Prompt/Input")])),_:1}),(0,a.Wm)(h,{modelValue:t.prompt,"onUpdate:modelValue":e=>t.prompt=e,rows:"3",filled:"",type:"textarea"},null,8,["modelValue","onUpdate:modelValue"]),(0,a.Wm)(v,{square:"",dense:"",icon:"output",color:"primary","text-color":"white"},{default:(0,a.w5)((()=>[(0,a.Uk)("Result")])),_:1}),(0,a.Wm)(h,{modelValue:t.result,"onUpdate:modelValue":e=>t.result=e,rows:"3",filled:"",type:"textarea"},null,8,["modelValue","onUpdate:modelValue"])])),_:2},1024),(0,a.Wm)(y),(0,a.Wm)(w,{vertical:""},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{onClick:o=>{e.setGPT(t,t.id),e.$router.replace("/create?m=new&id="+t.id)},flat:""},{default:(0,a.w5)((()=>[(0,a.Uk)("Test Now")])),_:2},1032,["onClick"])])),_:2},1024)])),_:2},1024)))),128))])])),_:1})}var d=o(499),m=o(4747),g=o(4836),h=o(1816),f=o(8341),y=o(8339),_=function(e,t,o,a){function r(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,n){function i(e){try{p(a.next(e))}catch(t){n(t)}}function l(e){try{p(a["throw"](e))}catch(t){n(t)}}function p(e){e.done?o(e.value):r(e.value).then(i,l)}p((a=a.apply(e,t||[])).next())}))};const v=(0,f.s)(),w=(0,m.iH)(h.N$,"prompts");let k=(0,d.iH)([{id:"",title:"Loading...",prompt:"Loading...",preprompt:"Loading...",result:"Loading..."}]),x=(0,d.iH)([]);const q=(0,a.aZ)({name:"IndexPage",components:{},setup(){const e=(0,y.yj)(),t=(0,g.v0)(h.H),o=()=>_(this,void 0,void 0,(function*(){var e;const o=(null===(e=t.currentUser)||void 0===e?void 0:e.uid)||"0",a=(0,m.IO)(w,(0,m.g2)("author_id"),(0,m.EW)(o)),r=yield(0,m.U2)(a);k.value=Object.entries(r.val()).reverse().map((([e,t])=>Object.assign(Object.assign({},t),{id:e})))})),a=()=>_(this,void 0,void 0,(function*(){var e;const o=(null===(e=t.currentUser)||void 0===e?void 0:e.uid)||"0",a=(0,m.iH)(h.N$,"draft_prompts/"+o),r=(0,m.IO)(a),n=yield(0,m.U2)(r);x.value=Object.entries(n.val()).reverse().map((([e,t])=>Object.assign(Object.assign({},t),{id:e})))})),r=t=>_(this,void 0,void 0,(function*(){(0,g.v0)(h.H);t||(t=e.query.a);const o=(0,m.IO)(w,(0,m.g2)("author_id"),(0,m.EW)(t)),a=yield(0,m.U2)(o);k.value=Object.entries(a.val()).reverse().map((([e,t])=>Object.assign(Object.assign({},t),{id:e})))})),n=e=>_(this,void 0,void 0,(function*(){const t=(0,m.IO)(w,(0,m.g2)("title"),(0,m.e0)(e),(0,m.Wu)(e+"")),o=yield(0,m.U2)(t);k.value=Object.entries(o.val()).reverse().map((([e,t])=>Object.assign(Object.assign({},t),{id:e})))}));function i(e){return _(this,void 0,void 0,(function*(){const t=(0,m.IO)(w,(0,m.g2)("tags")),o=[],a=yield(0,m.U2)(t);a.forEach((t=>{const a=t.val();a.tags&&a.tags.includes(e)&&(a.id=t.key,o.push(a))})),k.value=o}))}const l=()=>_(this,void 0,void 0,(function*(){const e=(0,m.iH)(h.N$,"prompts"),t=(0,m.IO)(e,(0,m.R)(),(0,m.vh)(500)),o=yield(0,m.U2)(t);k.value=Object.entries(o.val()).reverse().map((([e,t])=>Object.assign(Object.assign({},t),{id:e}))),x.value=[]})),p=(e,t)=>{v.gpt.prompt=e.prompt,v.gpt.preprompt=e.preprompt,v.gpt.result=e.result,v.gpt.engine=e.engine,v.gpt.temperature=e.temperature,v.gpt.top_p=e.top_p,v.gpt.max_tokens=e.max_tokens,v.gpt.frequency_penalty=e.frequency_penalty,v.gpt.presence_penalty=e.presence_penalty,v.gpt.stop=e.stop,v.gpt.best_of=1,v.gpt.title=e.title,v.gpt.tags=e.tags,v.gpt.author_id=e.author_id,v.gpt.author_name=e.author_name,v.promptId=t};return e.query.a?r():l(),{prompts:k,drafts:x,titleSearch:(0,d.iH)(""),tagSearch:(0,d.iH)(""),oai:v,setGPT:p,getSelfPrompts:o,getPromptsByTag:i,getPromptsByTitle:n,getPromptsByAuthor:r,getLatestPrompts:l,getDraftPrompts:a,auth:t}}});var b=o(1639),U=o(9885),I=o(4455),W=o(6611),P=o(4458),V=o(3190),j=o(926),S=o(7691),T=o(1357),O=o(1821),C=o(9984),Z=o.n(C);const $=(0,b.Z)(q,[["render",c]]),z=$;Z()(q,"components",{QPage:U.Z,QBtn:I.Z,QInput:W.Z,QCard:P.Z,QCardSection:V.Z,QSeparator:j.Z,QChip:S.Z,QAvatar:T.Z,QCardActions:O.Z})}}]);