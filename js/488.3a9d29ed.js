"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[488],{3488:function(e,t,l){l.r(t),l.d(t,{default:function(){return O}});var s=l(6768),a=l(144),n=l(4232),o=(l(4114),l(5129)),c=l(7694),i=l(7429),u=l(9325),d=l(6697);const k=(0,s.Lk)("div",{class:"logo"},null,-1),r={class:"menu"},p=(0,s.Lk)("span",{style:{"margin-left":"10px"}},"乘客人管理",-1),y=(0,s.Lk)("span",{style:{"margin-left":"10px"}},"余票查询",-1),m=(0,s.Lk)("span",{style:{"margin-left":"10px"}},"我的车票",-1),f=(0,s.Lk)("svg",{t:"1721285216005",class:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1470",width:"20em",height:"20em"},[(0,s.Lk)("path",{d:"M617.813333 512c0-174.08 85.333333-334.506667 225.28-433.493333 6.826667-3.413333 6.826667-10.24 6.826667-17.066667s-3.413333-10.24-10.24-13.653333c-54.613333-20.48-112.64-30.72-170.666667-30.72C395.946667 17.066667 174.08 238.933333 174.08 512s221.866667 494.933333 494.933333 494.933333c58.026667 0 116.053333-10.24 170.666667-30.72 6.826667-3.413333 10.24-6.826667 10.24-13.653333s-3.413333-13.653333-6.826667-17.066667c-139.946667-98.986667-225.28-259.413333-225.28-433.493333z m-85.333333 256c27.306667 0 51.2 23.893333 51.2 51.2s-23.893333 51.2-51.2 51.2-51.2-23.893333-51.2-51.2 20.48-51.2 51.2-51.2z m-17.066667-204.8c0 58.026667-44.373333 102.4-102.4 102.4s-102.4-44.373333-102.4-102.4 44.373333-102.4 102.4-102.4 102.4 44.373333 102.4 102.4z",fill:"#2c2c2c","p-id":"1471"})],-1),g={class:"admin",style:{color:"white","font-weight":"400","font-size":"17px",display:"flex"}},b={style:{flex:"2"}},h={style:{"white-space":"nowrap","text-overflow":"ellipsis"}},v={class:"logout",style:{flex:"2"}};var _={__name:"the-header",setup(e){const t=(0,a.KR)(!1),l=(0,a.KR)([]),_=()=>{o.A.commit("setMember",{}),c.Ay.success("退出成功")};function F(){window.document.documentElement.setAttribute("data-doc-theme",t.value?"dark":"")}(0,s.wB)((()=>u.A.currentRoute.value.path),(e=>{l.value=[],l.value.push(e)}),{immediate:!0});const w=JSON.parse(localStorage.getItem("member"));return(e,o)=>{const c=(0,s.g2)("router-link"),u=(0,s.g2)("a-menu-item"),x=(0,s.g2)("a-menu"),K=(0,s.g2)("a-switch"),L=(0,s.g2)("a-layout-header");return(0,s.uX)(),(0,s.Wv)(L,{class:"header",style:{display:"flex"}},{default:(0,s.k6)((()=>[k,(0,s.Lk)("div",r,[(0,s.bF)(x,{theme:"dark",mode:"horizontal",selectedKeys:l.value,"onUpdate:selectedKeys":o[0]||(o[0]=e=>l.value=e),style:{lineHeight:"64px"}},{default:(0,s.k6)((()=>[(0,s.bF)(u,{key:"/welcome"},{default:(0,s.k6)((()=>[(0,s.bF)(c,{to:"/welcome"},{default:(0,s.k6)((()=>[(0,s.eW)(" 欢迎页 ")])),_:1})])),_:1}),(0,s.bF)(u,{key:"/passenger"},{default:(0,s.k6)((()=>[(0,s.bF)(c,{to:"/passenger"},{default:(0,s.k6)((()=>[p])),_:1})])),_:1}),(0,s.bF)(u,{key:"/ticket"},{default:(0,s.k6)((()=>[(0,s.bF)(c,{to:"/ticket"},{default:(0,s.k6)((()=>[y])),_:1})])),_:1}),(0,s.bF)(u,{key:"/my-ticket"},{default:(0,s.k6)((()=>[(0,s.bF)(c,{to:"/my-ticket"},{default:(0,s.k6)((()=>[(0,s.bF)((0,a.R1)(d.A)),m])),_:1})])),_:1})])),_:1},8,["selectedKeys"])]),(0,s.bF)(K,{checked:t.value,"onUpdate:checked":o[1]||(o[1]=e=>t.value=e),onClick:F},{checkedChildren:(0,s.k6)((()=>[(0,s.bF)((0,a.R1)(i.A),{style:{fontSize:"1px"}},{component:(0,s.k6)((()=>[f])),_:1})])),unCheckedChildren:(0,s.k6)((()=>[])),_:1},8,["checked"]),(0,s.Lk)("div",g,[(0,s.Lk)("div",b,[(0,s.Lk)("span",h,"你好! "+(0,n.v_)((0,a.R1)(w).mobile),1)]),(0,s.Lk)("div",v,[(0,s.bF)(c,{to:"/login",onClick:_},{default:(0,s.k6)((()=>[(0,s.eW)("退出系统")])),_:1})])])])),_:1})}}};const F=_;var w=F;const x=(0,s.Lk)("span",{style:{"margin-left":"10px"},class:"menu-item-font"},"乘客人管理",-1),K=(0,s.Lk)("span",{style:{"margin-left":"10px"},class:"menu-item-font"},"余票查询",-1),L=(0,s.Lk)("span",{style:{"margin-left":"10px"},class:"menu-item-font"},"我的车票",-1);var R={__name:"the-sider",setup(e){const t=(0,a.Kh)({collapsed:!1,selectedKeys:[],openKeys:["sub1"],preOpenKeys:["sub1"]});return(0,s.wB)((()=>u.A.currentRoute.value.path),(e=>{t.selectedKeys=[],t.selectedKeys.push(e)}),{immediate:!0}),(e,l)=>{const n=(0,s.g2)("CoffeeOutlined"),o=(0,s.g2)("router-link"),c=(0,s.g2)("a-menu-item"),i=(0,s.g2)("a-menu");return(0,s.uX)(),(0,s.Wv)(i,{selectedKeys:t.selectedKeys,"onUpdate:selectedKeys":l[0]||(l[0]=e=>t.selectedKeys=e),openKeys:t.openKeys,"onUpdate:openKeys":l[1]||(l[1]=e=>t.openKeys=e),mode:"inline","inline-collapsed":t.collapsed,style:{height:"200px",borderRight:0}},{default:(0,s.k6)((()=>[(0,s.bF)(c,{key:"/welcome"},{default:(0,s.k6)((()=>[(0,s.bF)(o,{to:"/welcome"},{default:(0,s.k6)((()=>[(0,s.bF)(n),(0,s.eW)(" 欢迎页 ")])),_:1})])),_:1}),(0,s.bF)(c,{key:"/passenger"},{default:(0,s.k6)((()=>[(0,s.bF)(o,{to:"/passenger"},{default:(0,s.k6)((()=>[(0,s.bF)((0,a.R1)(d.A)),x])),_:1})])),_:1}),(0,s.bF)(c,{key:"/ticket"},{default:(0,s.k6)((()=>[(0,s.bF)(o,{to:"/ticket"},{default:(0,s.k6)((()=>[(0,s.bF)((0,a.R1)(d.A)),K])),_:1})])),_:1}),(0,s.bF)(c,{key:"/my-ticket"},{default:(0,s.k6)((()=>[(0,s.bF)(o,{to:"/my-ticket"},{default:(0,s.k6)((()=>[(0,s.bF)((0,a.R1)(d.A)),L])),_:1})])),_:1})])),_:1},8,["selectedKeys","openKeys","inline-collapsed"])}}};const A=R;var C=A,W=l(4961),z=l(1656);const U={style:{width:"min-content",height:"min-content"}},X=(0,s.Lk)("div",{style:{"text-align":"left"}},null,-1);var B={__name:"MainView",setup(e){const t=(0,a.KR)(!1);return(e,l)=>{const o=(0,s.g2)("a-layout-sider"),c=(0,s.g2)("a-button"),i=(0,s.g2)("router-view"),u=(0,s.g2)("a-layout-content"),d=(0,s.g2)("a-layout");return(0,s.uX)(),(0,s.Wv)(d,{style:{"min-height":"100vh"}},{default:(0,s.k6)((()=>[(0,s.bF)(w),(0,s.bF)(d,{style:{"margin-top":"10px"}},{default:(0,s.k6)((()=>[(0,s.bF)(o,{collapsed:t.value,"onUpdate:collapsed":l[0]||(l[0]=e=>t.value=e),collapsible:"",style:{height:"calc(90vh - 10px)",overflow:"scroll"}},{default:(0,s.k6)((()=>[(0,s.bF)(C)])),_:1},8,["collapsed"]),(0,s.bF)(d,{style:{padding:"0 18px 18px"}},{default:(0,s.k6)((()=>[(0,s.Lk)("div",U,[(0,s.bF)(c,{type:"primary",onClick:l[1]||(l[1]=()=>t.value=!t.value)},{default:(0,s.k6)((()=>[t.value?((0,s.uX)(),(0,s.Wv)((0,a.R1)(W.A),{key:0,class:"trigger"})):((0,s.uX)(),(0,s.Wv)((0,a.R1)(z.A),{key:1,class:"trigger"}))])),_:1})]),X,(0,s.bF)(u,{style:(0,n.Tr)({background:"#fff",padding:"10px",margin:0,maxHeight:"calc(87vh - 22px)",overflow:"scroll"})},{default:(0,s.k6)((()=>[(0,s.bF)(i)])),_:1},8,["style"])])),_:1})])),_:1})])),_:1})}}};const M=B;var O=M}}]);
//# sourceMappingURL=488.3a9d29ed.js.map