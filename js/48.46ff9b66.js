(globalThis["webpackChunkopenaimart"]=globalThis["webpackChunkopenaimart"]||[]).push([[48],{1816:(e,t,o)=>{"use strict";o.d(t,{H:()=>r,N$:()=>l});var a=o(7141),n=o(4043);const i={apiKey:"AIzaSyCZumWqJXcx7gedGaZ1c4qZdyZFeuQ1tMg",authDomain:"aoaiportal.firebaseapp.com",databaseURL:"https://aoaiportal-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"aoaiportal",storageBucket:"aoaiportal.appspot.com",messagingSenderId:"370281326669",appId:"1:370281326669:web:e04c79a6cbd442423f5404",measurementId:"G-1QXSTKNFCZ"},r=(0,a.ZF)(i),l=((0,n.IH)(app),getDatabase())},8341:(e,t,o)=>{"use strict";o.d(t,{s:()=>r});var a=o(1809),n=function(e,t,o,a){function n(e){return e instanceof o?e:new o((function(t){t(e)}))}return new(o||(o=Promise))((function(o,i){function r(e){try{s(a.next(e))}catch(t){i(t)}}function l(e){try{s(a["throw"](e))}catch(t){i(t)}}function s(e){e.done?o(e.value):n(e.value).then(r,l)}s((a=a.apply(e,t||[])).next())}))};const i={engine:"text-davinci-003",preprompt:"This is a preprompt.",prompt:"This is a prompt.",result:"",temperature:.3,max_tokens:128,top_p:1,frequency_penalty:0,presence_penalty:0,stop:null,best_of:1,title:"Untitled",author_name:"",author_id:"",tags:null},r=(0,a.Q_)("oai",{state:()=>({gpt:{},apiInfo:{api_type:"azure",azure_openai_name:localStorage.getItem("azure_openai_name")||"",api_version:"2023-03-15-preview",api_key:localStorage.getItem("api_key")||""},chatgpt_tokens:0,promptId:""}),getters:{},actions:{resetGPT:function(){for(const e in i)this.gpt[e]=i[e]},fetchHtmlCode:function(e){var t;return n(this,void 0,void 0,(function*(){if(console.log("starting fetchGPT"),null===this.apiInfo.api_key)return void alert("api key is null");let o=null;o=this.gpt.stop,(null===(t=this.gpt.stop)||void 0===t?void 0:t.length)&&(o=this.gpt.stop);const a=yield fetch(`https://${this.apiInfo.azure_openai_name}.openai.azure.com/openai/deployments/text-davinci-003/completions?api-version=${this.apiInfo.api_version}`,{method:"POST",headers:{"Content-Type":"application/json","api-key":this.apiInfo.api_key},body:JSON.stringify({prompt:e,max_tokens:2048,temperature:0,top_p:1,frequency_penalty:0,presence_penalty:0,stop:null})}),n=yield a.json();return n.error?(console.log(n.error),void alert(n.error.message)):n.choices[0].text}))},fetchGPT:function(){return n(this,void 0,void 0,(function*(){if(console.log("starting fetchGPT"),null===this.apiInfo.api_key)return void alert("api key is null");let e=this.gpt.stop;console.log("stopValue",e),0===(null===e||void 0===e?void 0:e.length)&&(e=null);const t=yield fetch(`https://${this.apiInfo.azure_openai_name}.openai.azure.com/openai/deployments/${this.gpt.engine}/completions?api-version=${this.apiInfo.api_version}`,{method:"POST",headers:{"Content-Type":"application/json","api-key":this.apiInfo.api_key},body:JSON.stringify({prompt:this.gpt.preprompt+this.gpt.prompt,max_tokens:"string"==typeof this.gpt.max_tokens?parseInt(this.gpt.max_tokens):this.gpt.max_tokens,temperature:this.gpt.temperature,top_p:this.gpt.top_p,frequency_penalty:this.gpt.frequency_penalty,presence_penalty:this.gpt.presence_penalty,stop:e})}),o=yield t.json();if(o.error)return console.log(o.error),void alert(o.error.message);console.log(o),this.gpt.result=o.choices[0].text}))},fetchChatGPT:function(e){return n(this,void 0,void 0,(function*(){if(console.log("starting fetchGPT"),null===this.apiInfo.api_key)return void alert("api key is null");let t=this.gpt.stop;console.log("stopValue",t),0===(null===t||void 0===t?void 0:t.length)&&(t=null);const o=yield fetch(`https://${this.apiInfo.azure_openai_name}.openai.azure.com/openai/deployments/${this.gpt.engine}/chat/completions?api-version=${this.apiInfo.api_version}`,{method:"POST",headers:{"Content-Type":"application/json","api-key":this.apiInfo.api_key},body:JSON.stringify({messages:[{role:"system",content:this.gpt.preprompt}].concat(e),max_tokens:"string"==typeof this.gpt.max_tokens?parseInt(this.gpt.max_tokens):this.gpt.max_tokens,temperature:this.gpt.temperature,top_p:this.gpt.top_p,frequency_penalty:this.gpt.frequency_penalty,presence_penalty:this.gpt.presence_penalty,stop:t})}),a=yield o.json();return a.error?(console.log(a.error),void alert(a.error.message)):(console.log(a),this.chatgpt_tokens=a.usage.total_tokens,a.choices[0].message)}))},setLocalStorage:function(){localStorage.setItem("api_key",this.apiInfo.api_key),localStorage.setItem("azure_openai_name",this.apiInfo.azure_openai_name),alert("Saved to localStorage")}}})},4048:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>J});o(9665);var a=o(9835),n=o(6970),i=o(7575),r=o.n(i);const l=(0,a._)("img",{src:r()},null,-1),s={class:"q-gutter-sm row items-center no-wrap"},p=(0,a._)("span",{class:"q-ml-sm"},"Navigation",-1),A={class:"q-pa-md q-gutter-sm"},u=(0,a._)("div",{class:"text-h6"},"Login",-1);function c(e,t,o,i,r,c){const g=(0,a.up)("q-btn"),m=(0,a.up)("q-avatar"),h=(0,a.up)("q-toolbar-title"),d=(0,a.up)("q-space"),w=(0,a.up)("q-tooltip"),f=(0,a.up)("q-toolbar"),y=(0,a.up)("q-header"),C=(0,a.up)("q-icon"),I=(0,a.up)("q-item-section"),B=(0,a.up)("q-item-label"),k=(0,a.up)("q-item"),v=(0,a.up)("q-list"),Q=(0,a.up)("q-scroll-area"),x=(0,a.up)("q-drawer"),b=(0,a.up)("router-view"),W=(0,a.up)("q-card-section"),q=(0,a.up)("q-card-actions"),F=(0,a.up)("q-card"),Z=(0,a.up)("q-dialog"),G=(0,a.up)("q-page-container"),D=(0,a.up)("q-layout"),P=(0,a.Q2)("close-popup");return(0,a.wg)(),(0,a.j4)(D,{view:"lHh Lpr fff",class:"bg-grey-1"},{default:(0,a.w5)((()=>[(0,a.Wm)(y,{elevated:"",class:"bg-white text-grey-8","height-hint":"64"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{class:"GPL__toolbar",style:{height:"64px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{flat:"",dense:"",round:"",onClick:i.toggleLeftDrawer,"aria-label":"Menu",icon:"menu",class:"q-mx-md"},null,8,["onClick"]),e.$q.screen.gt.sm?((0,a.wg)(),(0,a.j4)(h,{key:0,shrink:"",class:"row items-center no-wrap"},{default:(0,a.w5)((()=>[(0,a.Wm)(g,{round:"",onClick:t[0]||(t[0]=t=>e.$router.replace("/"))},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{size:"48px"},{default:(0,a.w5)((()=>[l])),_:1})])),_:1})])),_:1})):(0,a.kq)("",!0),(0,a.Wm)(d),(0,a.Wm)(g,{onClick:t[1]||(t[1]=t=>{i.resetPrompt(),e.$router.replace("/chatgpt")}),flat:"",dense:"","no-wrap":"",color:"primary",icon:"chat","no-caps":"",label:"ChatGPT",class:"q-ml-sm q-px-md"}),(0,a.Wm)(d),(0,a._)("div",s,[i.isAuth?((0,a.wg)(),(0,a.j4)(g,{key:0,round:"",flat:""},{default:(0,a.w5)((()=>[(0,a.Wm)(m,{color:"primary","text-color":"white",size:"26px"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(i.userEmail.charAt(0)),1)])),_:1}),(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(i.userEmail),1)])),_:1})])),_:1})):(0,a.kq)("",!0),i.isAuth?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(g,{key:1,onClick:t[2]||(t[2]=e=>i.prompt=!0),round:"",dense:"",flat:"",color:"text-grey-7",icon:"login"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Login")])),_:1})])),_:1})),i.isAuth?((0,a.wg)(),(0,a.j4)(g,{key:2,onClick:t[3]||(t[3]=e=>i.qSignOut()),round:"",dense:"",flat:"",color:"text-grey-7",icon:"logout"},{default:(0,a.w5)((()=>[(0,a.Wm)(w,null,{default:(0,a.w5)((()=>[(0,a.Uk)("Logout")])),_:1})])),_:1})):(0,a.kq)("",!0)])])),_:1})])),_:1}),(0,a.Wm)(x,{modelValue:i.leftDrawerOpen,"onUpdate:modelValue":t[4]||(t[4]=e=>i.leftDrawerOpen=e),bordered:"",behavior:"mobile",onClick:t[5]||(t[5]=e=>i.leftDrawerOpen=!1)},{default:(0,a.w5)((()=>[(0,a.Wm)(Q,{class:"fit"},{default:(0,a.w5)((()=>[(0,a.Wm)(f,{class:"GPL__toolbar"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{class:"row items-center text-grey-8"},{default:(0,a.w5)((()=>[p])),_:1})])),_:1}),(0,a.Wm)(v,{padding:""},{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(i.links1,(t=>((0,a.wg)(),(0,a.j4)(k,{key:t.text,clickable:"",onClick:o=>e.$router.push(t.path),class:"GPL__drawer-item"},{default:(0,a.w5)((()=>[(0,a.Wm)(I,{avatar:""},{default:(0,a.w5)((()=>[(0,a.Wm)(C,{name:t.icon},null,8,["name"])])),_:2},1024),(0,a.Wm)(I,null,{default:(0,a.w5)((()=>[(0,a.Wm)(B,null,{default:(0,a.w5)((()=>[(0,a.Uk)((0,n.zw)(t.text),1)])),_:2},1024)])),_:2},1024)])),_:2},1032,["onClick"])))),128))])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,a.Wm)(G,null,{default:(0,a.w5)((()=>[(0,a.Wm)(b),(0,a._)("div",A,[(0,a.Wm)(Z,{modelValue:i.prompt,"onUpdate:modelValue":t[7]||(t[7]=e=>i.prompt=e),persistent:""},{default:(0,a.w5)((()=>[(0,a.Wm)(F,{style:{"min-width":"350px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(W,null,{default:(0,a.w5)((()=>[u])),_:1}),(0,a.Wm)(W,{class:"q-pt-none"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(g,{onClick:t[6]||(t[6]=e=>i.googleSignIn()),color:"primary",label:"Login with Google",class:"full-width q-ma-md q-py-md"},null,512),[[P]])])),_:1}),(0,a.Wm)(q,{align:"right",class:"text-primary"},{default:(0,a.w5)((()=>[(0,a.wy)((0,a.Wm)(g,{flat:"",label:"Cancel"},null,512),[[P]])])),_:1})])),_:1})])),_:1},8,["modelValue"])])])),_:1})])),_:1})}var g=o(499),m=o(4836),h=o(1816),d=o(8341);const w=(0,m.v0)(h.H),f=(0,g.iH)(!1);let y=(0,g.iH)("");const C=()=>{const e=(0,d.s)();e.resetGPT()};(0,m.Aj)(w,(async e=>{f.value=!!e})),(0,m.Aj)(w,(async e=>{e?(y.value=e.email,f.value=!0):f.value=!1}));const I=()=>{const e=new m.hJ;(0,m.rh)(w,e)},B=()=>{(0,m.w7)(w)},k={name:"GooglePhotosLayout",setup(){const e=(0,g.iH)(!1),t=(0,g.iH)(""),o=(0,g.iH)(.26);function a(){e.value=!e.value}return{isAuth:f,leftDrawerOpen:e,search:t,storage:o,links1:[{icon:"chat",text:"Prompts",path:"/prompts"},{icon:"web",text:"Web Tools",path:"/webs"},{icon:"smart_toy",text:"Bots (Coming Soon)"},{icon:"api",text:"APIs (Coming Soon)"}],links2:[{icon:"save",text:"Prompts",path:"/prompts"},{icon:"photo_album",text:"Albums"},{icon:"assistant",text:"Assistant"},{icon:"people",text:"Sharing"},{icon:"book",text:"Photo books"}],toggleLeftDrawer:a,prompt:(0,g.iH)(!1),email:(0,g.iH)(""),password:(0,g.iH)(""),googleSignIn:I,qSignOut:B,userEmail:y,resetPrompt:C}}};var v=o(1639),Q=o(249),x=o(6602),b=o(1663),W=o(4455),q=o(1973),F=o(1357),Z=o(136),G=o(6611),D=o(2857),P=o(6362),_=o(3246),T=o(490),S=o(1233),H=o(6858),z=o(906),U=o(6663),X=o(3115),E=o(926),O=o(2133),V=o(2074),L=o(4458),N=o(3190),K=o(1821),j=o(2146),Y=o(9984),M=o.n(Y);const R=(0,v.Z)(k,[["render",c]]),J=R;M()(k,"components",{QLayout:Q.Z,QHeader:x.Z,QToolbar:b.Z,QBtn:W.Z,QToolbarTitle:q.Z,QAvatar:F.Z,QSpace:Z.Z,QInput:G.Z,QIcon:D.Z,QMenu:P.Z,QList:_.Z,QItem:T.Z,QItemSection:S.Z,QTooltip:H.Z,QDrawer:z.Z,QScrollArea:U.Z,QItemLabel:X.Z,QSeparator:E.Z,QPageContainer:O.Z,QDialog:V.Z,QCard:L.Z,QCardSection:N.Z,QCardActions:K.Z}),M()(k,"directives",{ClosePopup:j.Z})},7575:e=>{e.exports="data:image/png;base64,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"}}]);