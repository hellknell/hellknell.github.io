"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[164],{8073:function(e,a,t){t(4114);var l=t(8355),o=t(5129),d=t(5108),s=t(9325);const n=l.A.create({baseURL:"http://api.example.com",timeout:3e4});n.interceptors.request.use((e=>{e.headers["Content-Type"]="application/json;charset=utf-8";let a=JSON.parse(localStorage.getItem("member"))||void 0;return e.headers.token=a?.token,e}),(e=>(console.error("request error: "+e),Promise.reject(e)))),n.interceptors.response.use((e=>{let a=e.data;return"401"===a.code&&(o.A.commit("setMember",{}),d.A.error({message:"错误",description:"登录已过期，请重新登录"}),s.A.push("/login")),"string"===typeof a&&(a=a?JSON.parse(a):a),a}),(e=>{console.log("返回错误：",e);const a=e.response,t=a.status;return 401===t&&(console.log("未登录或登录超时，跳到登录页"),o.A.commit("setMember",{}),d.A.error({description:"未登录或登录超时"}),s.A.push("/login")),Promise.reject(e)})),a.A=n},3164:function(e,a,t){t.r(a),t.d(a,{default:function(){return q}});t(4114);var l=t(6768),o=t(4232),d=t(144),s=t(1576),n=t.n(s),u=t(8073),r=t(8192),i=t(5108);const c=e=>((0,l.Qi)("data-v-29984de7"),e=e(),(0,l.jt)(),e),p={class:"order",style:{width:"100%",padding:"10px"}},v=c((()=>(0,l.Lk)("div",{style:{"text-align":"left","font-weight":"bold","text-indent":"30px"}}," 列车信息 （以下余票信息仅供参考) ",-1))),g=c((()=>(0,l.Lk)("span",{style:{"font-size":"13px",color:"rgba(0,0,0,0.7)"}},"次",-1))),k={style:{color:"orangered"}},f={key:0},y={key:1},m={style:{color:"orangered"}},h={key:0},b={key:1},_={style:{color:"orangered"}},C={key:0},x={key:1},R={style:{color:"orangered"}},F={key:0},w={key:1},W=c((()=>(0,l.Lk)("span",{style:{"font-weight":"bold"}},"请勾选要购票的乘客:",-1))),X={key:0,style:{display:"flex","justify-content":"flex-start"}},E={style:{width:"70%",margin:"0 auto"}},T={key:0},I=c((()=>(0,l.Lk)("span",null,"乘客类型",-1))),K={key:0},A={key:0},z={key:0,style:{color:"red","font-size":"18px","margin-top":"20px",width:"max-content"}},L=c((()=>(0,l.Lk)("div",null,"12306规则：只有全部是一等座或全部是二等座才支持选座",-1))),Q=c((()=>(0,l.Lk)("div",null,"12306规则：余票小于一定数量时，不允许选座（本项目以20为例）",-1))),U={key:1,style:{display:"flex","text-align":"center",width:"100%",margin:"20px auto","align-items":"center",gap:"20px","flex-direction":"column"}},j={style:{flex:"4"}},S={key:0,style:{flex:"4"}},P={style:{position:"relative",bottom:"10px"}},D=["src"];var N={__name:"OrderView",setup(e){const a=(0,d.KR)(),t=(0,d.Kh)({imgCode:void 0}),s=(0,d.KR)(),c=(0,d.KR)(),N=(0,d.KR)(!1),O=SESSION.get(SESSINO_ORDER),Y=r.M4,q=r.v6,M=(0,d.KR)([]),Z=(0,d.KR)([]),B=(0,d.KR)([]);let H=n()(O.date,"YYYY-MM-DD").day();const J=(0,d.KR)(!1),V=(0,d.KR)(!1),G=(0,d.KR)([]);(0,l.wB)((()=>B.value),(()=>{G.value=[],B.value.forEach((e=>G.value.push({passengerId:e.id,passengerName:e.name,passengerType:e.type,passengerIdCard:e.idCard,seatTypeCode:"1"})))}),{immediate:!0});const $=(0,d.KR)([]);for(let l in q){let e=l.toLowerCase();O[e]>=0&&$.value.push({type:e,code:q[l]["code"],desc:q[l]["desc"],count:O[e],price:O[e+"Price"]})}const ee=()=>{u.A.get("member/passenger/query-passenger-mine").then((e=>{e.success&&(M.value=e.data,M.value.forEach((e=>Z.value.push({label:e.name,value:e}))))}))},ae=(0,d.KR)([{title:"乘客",dataIndex:"passengerName"},{title:"身份证",dataIndex:"passengerIdCard"},{title:"票种",dataIndex:"passengerType"},{title:"座位类型",dataIndex:"seatTypeCode"}]),te=(0,d.KR)("0"),le=(0,l.EW)((()=>r.R5.filter((e=>e.type===te.value)))),oe=(0,d.KR)({});(0,l.wB)((()=>le.value),(()=>{oe.value={};for(let e=1;e<=2;e++)le.value.forEach((a=>{oe.value[a.code+e]=!1}));console.log("初始化两排座位，都是未选中：",oe.value)}),{immediate:!0});const de=()=>{if(G.value.length>5)return void i.A.error({description:"最多只能选择五个乘客"});for(let l=1;l<=2;l++)le.value.forEach((e=>{oe.value[e.code+l]=!1}));let e=Tool.copy($.value);console.log(e);for(let l=0;l<G.value.length;l++){let a=G.value[l];if(e.filter((e=>e.code===a.seatTypeCode))[0].count--,e.filter((e=>e.code===a.seatTypeCode))[0].count<0)return void i.A.error({description:e.filter((e=>e.code===a.seatTypeCode))[0].desc+"余票不足"})}V.value=!0,setTimeout((()=>{V.value=!1,J.value=!0}),2e3);let a=[];for(let l=0;l<G.value.length;l++)a.push(G.value[l].seatTypeCode);let t=Array.from(new Set(a));t.length>1?(i.A.error({description:"不支持选座"}),te.value="0"):t[0]===q.YDZ.code?(console.log("一等座"),te.value=q.YDZ.code):t[0]===q.EDZ.code?(console.log("二等座"),te.value=q.EDZ.code):(i.A.info({description:"不支持硬卧 | 软卧"}),te.value="0"),"0"!=te.value&&$.value.filter((e=>e.code===te.value))[0].count<20&&(te.value="0")},se=()=>{N.value=!0,ce()},ne=()=>{a.value.validateFields(["imgCode"]),console.log("重新选座");for(let a=0;a<G.value.length;a++)G.value[a].seat=null;let e=-1;for(let a in oe.value)if(oe.value[a]){if(e++,e>G.value.length-1)return void i.A.error({description:"选座数超过余票数"});G.value[e].seat=a}if(e>-1&&e<G.value.length-1)return void i.A.error({description:"选座数小于购票数"});let l={date:O.date,start:O.start,trainCode:O.trainCode,end:O.end,dailyTrainTicketId:O.id,tickets:G.value,imgCode:t.imgCode,imgToken:s.value};u.A.post("business/confirm-order/do",l).then((e=>{e.success?(i.A.success({description:"选座成功"}),J.value=!1):i.A.error({description:e.msg})}))},ue=()=>{J.value=!1};(0,l.sV)((()=>{ee()}));let re=async(e,a)=>""===a?Promise.reject("验证码为空"):Promise.resolve();const ie={imgCode:[{required:!0,validator:re,trigger:"blur"}]},ce=()=>{s.value=Tool.uuid(8),c.value="http://api.example.combusiness/captcha/image-code/"+s.value};return(e,s)=>{const n=(0,l.g2)("a-col"),u=(0,l.g2)("a-row"),r=(0,l.g2)("a-divider"),i=(0,l.g2)("a-checkbox"),M=(0,l.g2)("a-checkbox-group"),ee=(0,l.g2)("a-select-option"),re=(0,l.g2)("a-select"),pe=(0,l.g2)("a-radio"),ve=(0,l.g2)("a-radio-group"),ge=(0,l.g2)("a-card"),ke=(0,l.g2)("a-button"),fe=(0,l.g2)("question-circle-outlined"),ye=(0,l.g2)("a-tooltip"),me=(0,l.g2)("a-table"),he=(0,l.g2)("a-switch"),be=(0,l.g2)("a-space"),_e=(0,l.g2)("a-drawer"),Ce=(0,l.g2)("a-input"),xe=(0,l.g2)("a-form-item"),Re=(0,l.g2)("a-form"),Fe=(0,l.g2)("a-modal");return(0,l.uX)(),(0,l.CE)(l.FK,null,[(0,l.Lk)("div",p,[(0,l.bF)(ge,{hoverable:"",style:{margin:"0 auto",padding:"10px"}},{title:(0,l.k6)((()=>[v])),cover:(0,l.k6)((()=>[(0,l.bF)(u,{justify:"start",type:"flex",align:"middle",style:{height:"40px","border-bottom":"1px dashed #000","font-size":"20px","font-weight":"bold",width:"98%",margin:"0 auto"}},{default:(0,l.k6)((()=>[(0,l.bF)(n,{style:{"padding-left":"5px"},span:4},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)((0,d.R1)(O).date)+" (周"+(0,o.v_)((0,d.R1)(H))+")",1)])),_:1}),(0,l.bF)(n,{span:3},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)((0,d.R1)(O).trainCode),1),g])),_:1}),(0,l.bF)(n,{span:10},{default:(0,l.k6)((()=>[(0,l.Lk)("span",null,(0,o.v_)((0,d.R1)(O).start),1),(0,l.eW)(" ("+(0,o.v_)((0,d.R1)(O).startTime)+"开)       ---        "+(0,o.v_)((0,d.R1)(O).end)+"("+(0,o.v_)((0,d.R1)(O).endTime)+"到) ",1)])),_:1})])),_:1}),(0,l.bF)(u,{justify:"start",type:"flex",align:"middle",style:{height:"40px","font-size":"13px","font-weight":"bold",width:"98%",margin:"0 auto"}},{default:(0,l.k6)((()=>[(0,d.R1)(O).ydz>=0?((0,l.uX)(),(0,l.Wv)(n,{key:0,style:{"padding-left":"5px"},span:4},{default:(0,l.k6)((()=>[(0,l.eW)("一等座("),(0,l.Lk)("span",k,"￥ "+(0,o.v_)((0,d.R1)(O).ydzPrice),1),(0,l.eW)(")"),(0,d.R1)(O).ydz<20?((0,l.uX)(),(0,l.CE)("span",f," "+(0,o.v_)((0,d.R1)(O).ydz)+"张票",1)):((0,l.uX)(),(0,l.CE)("span",y," 有票"))])),_:1})):(0,l.Q3)("",!0),(0,d.R1)(O).edz>=0?((0,l.uX)(),(0,l.Wv)(n,{key:1,style:{"padding-left":"5px"},span:4},{default:(0,l.k6)((()=>[(0,l.eW)("二等座("),(0,l.Lk)("span",m,"￥ "+(0,o.v_)((0,d.R1)(O).edzPrice),1),(0,l.eW)(")"),(0,d.R1)(O).edz<20?((0,l.uX)(),(0,l.CE)("span",h," "+(0,o.v_)((0,d.R1)(O).edz)+"张票",1)):((0,l.uX)(),(0,l.CE)("span",b," 有票"))])),_:1})):(0,l.Q3)("",!0),(0,d.R1)(O).yw>=0?((0,l.uX)(),(0,l.Wv)(n,{key:2,style:{"padding-left":"5px"},span:4},{default:(0,l.k6)((()=>[(0,l.eW)("硬卧("),(0,l.Lk)("span",_,"￥ "+(0,o.v_)((0,d.R1)(O).ywPrice),1),(0,l.eW)(")"),(0,d.R1)(O).yw<20?((0,l.uX)(),(0,l.CE)("span",C," "+(0,o.v_)((0,d.R1)(O).yw)+"张票",1)):((0,l.uX)(),(0,l.CE)("span",x," 有票"))])),_:1})):(0,l.Q3)("",!0),(0,d.R1)(O).rw>=0?((0,l.uX)(),(0,l.Wv)(n,{key:3,style:{"padding-left":"5px"},span:4},{default:(0,l.k6)((()=>[(0,l.eW)("软卧("),(0,l.Lk)("span",R,"￥ "+(0,o.v_)((0,d.R1)(O).rwPrice),1),(0,l.eW)(")"),(0,d.R1)(O).rw<20?((0,l.uX)(),(0,l.CE)("span",F," "+(0,o.v_)((0,d.R1)(O).rw)+"张票",1)):((0,l.uX)(),(0,l.CE)("span",w," 有票"))])),_:1})):(0,l.Q3)("",!0)])),_:1}),(0,l.bF)(r),(0,l.bF)(M,{value:B.value,"onUpdate:value":s[0]||(s[0]=e=>B.value=e)},{default:(0,l.k6)((()=>[(0,l.bF)(u,{gutter:1},{default:(0,l.k6)((()=>[W,((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(Z.value,(e=>((0,l.uX)(),(0,l.Wv)(n,{span:4,key:e.id,value:e.value},{default:(0,l.k6)((()=>[(0,l.bF)(i,{style:{"font-size":"16px"},value:e.value},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.label),1)])),_:2},1032,["value"])])),_:2},1032,["value"])))),128))])),_:1})])),_:1},8,["value"]),G.value.length>0?((0,l.uX)(),(0,l.Wv)(u,{key:0,justify:"center",type:"flex",align:"middle",gutter:10,style:{margin:"20px auto 0",border:"solid 1px cornflowerblue",background:"linear-gradient(to right, #4facfe, #00f2fe)",height:"40px","font-size":"18px"}},{default:(0,l.k6)((()=>[(0,l.bF)(n,{span:2},{default:(0,l.k6)((()=>[(0,l.eW)("乘客")])),_:1}),(0,l.bF)(n,{span:6},{default:(0,l.k6)((()=>[(0,l.eW)("身份证")])),_:1}),(0,l.bF)(n,{span:4},{default:(0,l.k6)((()=>[(0,l.eW)("票种")])),_:1}),(0,l.bF)(n,{offset:1,span:3},{default:(0,l.k6)((()=>[(0,l.eW)("座位类型")])),_:1})])),_:1})):(0,l.Q3)("",!0),((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(G.value,(e=>((0,l.uX)(),(0,l.Wv)(u,{type:"flex",justify:"center",align:"top",style:{border:"solid 1px cornflowerblue",margin:"0 auto","font-size":"16px"},gutter:10,key:e.id},{default:(0,l.k6)((()=>[(0,l.bF)(n,{offset:1,span:2},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.passengerName),1)])),_:2},1024),(0,l.bF)(n,{span:6},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.passengerIdCard),1)])),_:2},1024),(0,l.bF)(n,{span:4},{default:(0,l.k6)((()=>[(0,l.bF)(re,{style:{width:"100%"},value:e.passengerType,"onUpdate:value":a=>e.passengerType=a},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)((0,d.R1)(Y),(e=>((0,l.uX)(),(0,l.Wv)(ee,{key:e.code,value:e.code},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.desc),1)])),_:2},1032,["value"])))),128))])),_:2},1032,["value","onUpdate:value"])])),_:2},1024),(0,l.bF)(n,{offset:1,span:4},{default:(0,l.k6)((()=>[(0,l.bF)(ve,{value:e.seatTypeCode,"onUpdate:value":a=>e.seatTypeCode=a,name:"radioGroup"},{default:(0,l.k6)((()=>[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)($.value,(e=>((0,l.uX)(),(0,l.Wv)(pe,{key:e.code,value:e.code},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(e.desc),1)])),_:2},1032,["value"])))),128))])),_:2},1032,["value","onUpdate:value"])])),_:2},1024)])),_:2},1024)))),128))])),_:1}),(0,l.bF)(r),G.value.length>0?((0,l.uX)(),(0,l.CE)("div",X,[(0,l.bF)(ke,{type:"primary",size:"large",loading:V.value,onClick:de},{default:(0,l.k6)((()=>[(0,l.eW)((0,o.v_)(V.value?"正在生成订单":"确认订单"),1)])),_:1},8,["loading"])])):(0,l.Q3)("",!0),(0,l.eW)(" "+(0,o.v_)(G.value.value)+" ",1),(0,l.bF)(_e,{size:"large",title:"请核对以下信息",placement:"bottom",closable:!0,visible:J.value,onClose:ue},{extra:(0,l.k6)((()=>[(0,l.bF)(be,null,{default:(0,l.k6)((()=>[(0,l.bF)(ke,{onClick:ue},{default:(0,l.k6)((()=>[(0,l.eW)("取消")])),_:1}),(0,l.bF)(ke,{type:"primary",onClick:se},{default:(0,l.k6)((()=>[(0,l.eW)("确认")])),_:1})])),_:1})])),default:(0,l.k6)((()=>[(0,l.Lk)("div",E,[(0,l.bF)(me,{align:"center",bordered:"","row-class-name":(e,a)=>a%2===1?"table-striped":null,"data-source":G.value,columns:ae.value,pagination:!1,customHeaderRow:e.customRow},{headerCell:(0,l.k6)((({title:e,column:a})=>["passengerType"===a.dataIndex?((0,l.uX)(),(0,l.CE)("span",T,[(0,l.eW)((0,o.v_)(e)+" ",1),(0,l.bF)(ye,null,{title:(0,l.k6)((()=>[I])),default:(0,l.k6)((()=>[(0,l.bF)(fe)])),_:1})])):(0,l.Q3)("",!0)])),bodyCell:(0,l.k6)((({column:e,record:a})=>["passengerType"===e.dataIndex?((0,l.uX)(!0),(0,l.CE)(l.FK,{key:0},(0,l.pI)((0,d.R1)(Y),(e=>((0,l.uX)(),(0,l.CE)("span",{key:e.code},[e.code===a.passengerType?((0,l.uX)(),(0,l.CE)("span",K,(0,o.v_)(e.desc),1)):(0,l.Q3)("",!0)])))),128)):(0,l.Q3)("",!0),"seatTypeCode"===e.dataIndex?((0,l.uX)(!0),(0,l.CE)(l.FK,{key:1},(0,l.pI)((0,d.R1)(q),(e=>((0,l.uX)(),(0,l.CE)("span",{key:e.code},[e.code===a.seatTypeCode?((0,l.uX)(),(0,l.CE)("span",A,(0,o.v_)(e.desc),1)):(0,l.Q3)("",!0)])))),128)):(0,l.Q3)("",!0)])),_:1},8,["row-class-name","data-source","columns","customHeaderRow"]),"0"===te.value?((0,l.uX)(),(0,l.CE)("div",z,[(0,l.eW)(" 很抱歉,您购买的车票不支持选座 "),L,Q])):((0,l.uX)(),(0,l.CE)("div",U,[(0,l.Lk)("div",j,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(le.value,(e=>((0,l.uX)(),(0,l.Wv)(he,{class:"choose-seat-item",size:"large",key:e.code,"checked-children":e.desc,"un-checked-children":e.desc,checked:oe.value[e.code+1],"onUpdate:checked":a=>oe.value[e.code+1]=a},null,8,["checked-children","un-checked-children","checked","onUpdate:checked"])))),128))]),G.value.length>1?((0,l.uX)(),(0,l.CE)("div",S,[((0,l.uX)(!0),(0,l.CE)(l.FK,null,(0,l.pI)(le.value,(e=>((0,l.uX)(),(0,l.Wv)(he,{class:"choose-seat-item",size:"large",key:e.code,"checked-children":e.desc,"un-checked-children":e.desc,checked:oe.value[e.code+2],"onUpdate:checked":a=>oe.value[e.code+2]=a},null,8,["checked-children","un-checked-children","checked","onUpdate:checked"])))),128))])):(0,l.Q3)("",!0),(0,l.Lk)("span",P,"提示:你可以选择"+(0,o.v_)(G.value.length)+"个座位",1)]))])])),_:1},8,["visible"])]),(0,l.bF)(Fe,{visible:N.value,"onUpdate:visible":s[2]||(s[2]=e=>N.value=e),style:{"border-radius":"10px",height:"40%!important"},footer:null,title:"防瞬时高峰验证码"},{default:(0,l.k6)((()=>[(0,l.bF)(Re,{ref_key:"imgCodeRef",ref:a,rules:ie,model:t},{default:(0,l.k6)((()=>[(0,l.bF)(xe,{name:"imgCode"},{default:(0,l.k6)((()=>[(0,l.bF)(Ce,{placeholder:"请输入验证码",value:t.imgCode,"onUpdate:value":s[1]||(s[1]=e=>t.imgCode=e)},{suffix:(0,l.k6)((()=>[(0,l.Lk)("img",{src:c.value,alt:"",onClick:ce},null,8,D)])),_:1},8,["value"])])),_:1}),(0,l.bF)(xe,null,{default:(0,l.k6)((()=>[(0,l.bF)(ke,{"html-type":"submit",style:{width:"100%","margin-top":"20px"},type:"primary",danger:"",onClick:ne},{default:(0,l.k6)((()=>[(0,l.eW)("确认 ")])),_:1})])),_:1})])),_:1},8,["model"])])),_:1},8,["visible"])],64)}}},O=t(1241);const Y=(0,O.A)(N,[["__scopeId","data-v-29984de7"]]);var q=Y}}]);
//# sourceMappingURL=164.854530c9.js.map