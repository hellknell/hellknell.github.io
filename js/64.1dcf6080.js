"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[64],{8073:function(e,a,t){t(4114);var r=t(8355),l=t(5129),o=t(5108),s=t(9325);const n=r.A.create({baseURL:"http://api.example.com",timeout:3e4});n.interceptors.request.use((e=>{e.headers["Content-Type"]="application/json;charset=utf-8";let a=JSON.parse(localStorage.getItem("member"))||void 0;return e.headers.token=a?.token,e}),(e=>(console.error("request error: "+e),Promise.reject(e)))),n.interceptors.response.use((e=>{let a=e.data;return"401"===a.code&&(l.A.commit("setMember",{}),o.A.error({message:"错误",description:"登录已过期，请重新登录"}),s.A.push("/login")),"string"===typeof a&&(a=a?JSON.parse(a):a),a}),(e=>{console.log("返回错误：",e);const a=e.response,t=a.status;return 401===t&&(console.log("未登录或登录超时，跳到登录页"),l.A.commit("setMember",{}),o.A.error({description:"未登录或登录超时"}),s.A.push("/login")),Promise.reject(e)})),a.A=n},8064:function(e,a,t){t.r(a),t.d(a,{default:function(){return v}});var r=t(6768),l=t(4232),o=t(144),s=t(8073),n=t(7694),u=t(5108),i=t(1632),d=t(3784);t(8192);const c={style:{"text-align":"left"}},p=(0,r.Lk)("a",{style:{color:"red"},href:"#"},"删除",-1);var g={__name:"PassengerView",setup(e){const a=(0,o.KR)(!1),t=(0,o.KR)({total:0,pageSize:10,current:1}),g=e=>{C.value=JSON.parse(JSON.stringify(e)),h.value=!0},m=()=>{h.value=!0,C.value={}},v=(0,o.KR)([]),b=(0,o.KR)([{title:"会员id",dataIndex:"memberId",resizable:!0},{title:"姓名",dataIndex:"name",resizable:!0},{title:"身份证",dataIndex:"idCard",resizable:!0},{title:"旅客类型",dataIndex:"type",resizable:!0},{title:"操作",dataIndex:"operation"}]);let f=async(e,a)=>{if(""===a)return Promise.reject("请输入身份证号");{let e=/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;if(!1===e.test(a))return Promise.reject("身份证号格式错误")}return Promise.resolve()};const k=(0,o.Kh)({name:[{required:!0,message:"请输入姓名",trigger:"blur"}],type:[{required:!0,message:"请输入乘客类型",trigger:"blur"}],idCard:[{trigger:"blur",validator:f}]}),y=e=>{console.log(e),_({pageNum:e.current,pageSize:e.pageSize})},h=(0,o.KR)(!1),C=(0,o.KR)({name:"",type:"",idCard:""});(0,r.sV)((()=>{_({pageNum:t.value.current,pageSize:t.value.pageSize})}));const _=e=>{e||(e={pageNum:1,pageSize:4}),a.value=!0,s.A.get("member/passenger/query-list",{params:{pageNum:e.pageNum,pageSize:e.pageSize}}).then((e=>{a.value=!1,e&&(v.value=e.data?.list,t.value.current=e.data?.pageNum,t.value.total=e.data?.total)}))},z=(0,o.KR)(),F=(e,a)=>{a.width=e},A=e=>{s.A.delete("member/passenger/del/"+e).then((e=>{e.success?(n.Ay.success("删除成功"),_()):u.A.error({description:e.message})}))},x=()=>{z.value.validate().then((()=>{s.A.post("member/passenger/save",C.value).then((e=>{"200"===e.code?(n.Ay.success({content:"操作成功"}),h.value=!1,C.value={},_({pageNum:t.value.current,pageSize:t.value.pageSize})):u.A.error({message:e.msg})}))})).catch((e=>{console.log("error",e),u.A.error({message:"请检查输入是否正确"})}))};return(e,s)=>{const n=(0,r.g2)("a-button"),u=(0,r.g2)("a-space"),f=(0,r.g2)("a-tag"),S=(0,r.g2)("a-popconfirm"),R=(0,r.g2)("a-table"),I=(0,r.g2)("a-input"),N=(0,r.g2)("a-form-item"),K=(0,r.g2)("a-select-option"),w=(0,r.g2)("a-select"),P=(0,r.g2)("a-form"),W=(0,r.g2)("a-modal");return(0,r.uX)(),(0,r.CE)("div",null,[(0,r.Lk)("div",c,[(0,r.bF)(u,{direction:"horizontal",size:10,align:"start",style:{"text-align":"left"}},{default:(0,r.k6)((()=>[(0,r.bF)(n,{type:"primary",onClick:s[0]||(s[0]=e=>_())},{default:(0,r.k6)((()=>[(0,r.eW)("刷新")])),_:1}),(0,r.bF)(n,{type:"primary",danger:"",onClick:m},{default:(0,r.k6)((()=>[(0,r.eW)("添加乘车人")])),_:1})])),_:1})]),(0,r.bF)(R,{"data-source":v.value,columns:b.value,loading:a.value,pagination:t.value,onChange:y,onResizeColumn:F},{bodyCell:(0,r.k6)((({column:e,record:a})=>["type"===e.dataIndex?((0,r.uX)(),(0,r.CE)(r.FK,{key:0},(0,r.pI)([{code:"1",desc:"成人",color:"#f50"},{code:"2",desc:"儿童",color:"#2db7f5"},{code:"3",desc:"学生",color:"#108ee9"}],(e=>(0,r.Lk)("div",{key:e.code},[e.code===a.type?((0,r.uX)(),(0,r.Wv)(f,{key:0,color:e.color},{default:(0,r.k6)((()=>[(0,r.eW)((0,l.v_)(e.desc),1)])),_:2},1032,["color"])):(0,r.Q3)("",!0)]))),64)):(0,r.Q3)("",!0),"operation"===e.dataIndex?((0,r.uX)(),(0,r.Wv)(u,{key:1,size:15},{default:(0,r.k6)((()=>[(0,r.bF)(S,{title:"确定要删除吗",onConfirm:e=>A(a.id),"ok-text":"确认","cancel-text":"取消"},{icon:(0,r.k6)((()=>[(0,r.bF)((0,o.R1)(i.A),{style:{color:"red"}})])),default:(0,r.k6)((()=>[p])),_:2},1032,["onConfirm"]),(0,r.bF)(n,{size:"small",onClick:e=>g(a),type:"primary"},{icon:(0,r.k6)((()=>[(0,r.bF)((0,o.R1)(d.A))])),_:2},1032,["onClick"])])),_:2},1024)):(0,r.Q3)("",!0)])),_:1},8,["data-source","columns","loading","pagination"]),(0,r.bF)(W,{visible:h.value,"onUpdate:visible":s[4]||(s[4]=e=>h.value=e),title:"乘车人信息",onOk:x,"ok-text":"确认","cancel-text":"取消",keyboard:""},{default:(0,r.k6)((()=>[(0,r.bF)(P,{model:C.value,ref_key:"formRef",ref:z,"label-align":"right",rules:k,"label-col":{span:6},"wrapper-col":{span:18,offset:0}},{default:(0,r.k6)((()=>[(0,r.bF)(N,{"has-feedback":"",label:"姓名",name:"name"},{default:(0,r.k6)((()=>[(0,r.bF)(I,{value:C.value.name,"onUpdate:value":s[1]||(s[1]=e=>C.value.name=e)},null,8,["value"])])),_:1}),(0,r.bF)(N,{"has-feedback":"",label:"乘客类型",name:"type"},{default:(0,r.k6)((()=>[(0,r.bF)(w,{value:C.value.type,"onUpdate:value":s[2]||(s[2]=e=>C.value.type=e)},{default:(0,r.k6)((()=>[((0,r.uX)(),(0,r.CE)(r.FK,null,(0,r.pI)([{code:"1",desc:"成人"},{code:"2",desc:"儿童"},{code:"3",desc:"学生"}],(e=>(0,r.bF)(K,{key:e.code,value:e.code},{default:(0,r.k6)((()=>[(0,r.eW)((0,l.v_)(e.desc),1)])),_:2},1032,["value"]))),64))])),_:1},8,["value"])])),_:1}),(0,r.bF)(N,{"has-feedback":"",label:"身份证号",name:"idCard"},{default:(0,r.k6)((()=>[(0,r.bF)(I,{value:C.value.idCard,"onUpdate:value":s[3]||(s[3]=e=>C.value.idCard=e)},null,8,["value"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["visible"])])}}};const m=g;var v=m}}]);
//# sourceMappingURL=64.1dcf6080.js.map