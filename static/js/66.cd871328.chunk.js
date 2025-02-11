"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[66],{1066:(e,n,a)=>{a.r(n),a.d(n,{default:()=>F});var r=a(5043),t=a(1319),i=a(4647),s=a(9281);const l={name:"",email:"",message:"",challenges:[],otherChallenge:""},o=e=>{var n;const a={};return e.name||(a.name="Name is required"),e.email?/\S+@\S+\.\S+/.test(e.email)||(a.email="Invalid email format"):a.email="Email is required",e.message||(a.message="Message is required"),e.challenges&&0!==e.challenges.length?!e.challenges.includes("Other")||null!==(n=e.otherChallenge)&&void 0!==n&&n.trim()||(a.challenges=["Please specify your challenge in the Other field"]):a.challenges=["Please select at least one challenge"],a};var d=a(5639),m=a(1529);const h=(0,m.Ay)("p")`
  margin-top: 1.5rem;
`,c=(0,m.Ay)("div")`
  position: relative;
  max-width: 700px;
`,g=(0,m.Ay)("div")`
  border-radius: 3rem;
  max-width: 400px;
`;var p=a(579);const u=(0,s.C)()((e=>{let{title:n,content:a,t:r}=e;return(0,p.jsxs)(c,{children:[(0,p.jsx)("h6",{children:r(n)}),(0,p.jsx)(g,{children:(0,p.jsx)(h,{children:r(a)})})]})})),y=(0,m.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
`,x=(0,m.Ay)("input")`
  font-size: 0.875rem;
`,b=(0,m.Ay)("div")`
  display: inline-block;
  width: 100%;
  padding: 10px 5px;
  margin-bottom: -0.625rem;
`,f=(0,m.Ay)("textarea")`
  resize: none;
  font-size: 0.875rem;
  height: 185px;
`,j=(0,m.Ay)("label")`
  display: block;
  padding-bottom: 10px;
  text-transform: capitalize;
`,v=(0,s.C)()((e=>{let{name:n,placeholder:a,onChange:r,t:t}=e;return(0,p.jsxs)(y,{children:[(0,p.jsx)(j,{htmlFor:n,children:t(n)}),(0,p.jsx)(x,{placeholder:t(a),name:n,id:n,onChange:r})]})})),w=(0,s.C)()((e=>{let{name:n,placeholder:a,onChange:r,t:t}=e;return(0,p.jsxs)(b,{children:[(0,p.jsx)(j,{htmlFor:n,children:t(n)}),(0,p.jsx)(f,{placeholder:t(a),id:n,name:n,onChange:r})]})})),A=(0,m.Ay)("div")`
  padding: 5rem 0;

  @media only screen and (max-width: 1024px) {
    padding: 3rem 0;
  }
`,k=(0,m.Ay)("form")`
  width: 100%;
  max-width: 520px;

  @media only screen and (max-width: 1045px) {
    max-width: 100%;
    margin-top: 2rem;
  }
`,C=(0,m.Ay)("span")`
  display: block;
  font-weight: 600;
  color: rgb(255, 130, 92);
  height: 0.775rem;
  padding: 0 0.675rem;
`,S=(0,m.Ay)("label")`
  display: block;
  padding: 0 0.675rem;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
`,O=(0,m.Ay)("div")`
  text-align: end;
  position: relative;

  @media only screen and (max-width: 414px) {
    padding-top: 0.75rem;
  }
`,_=(0,m.Ay)("div")`
  margin-bottom: 0.5rem;
`,z=(0,m.Ay)("label")`
  display: flex;
  align-items: center;
`,q=(0,m.Ay)("input")`
  margin-right: 0.5rem;
  width: 1.5em;
`,D=(0,m.Ay)("div")`
  margin-left: 2rem;
  margin-bottom: 0.5rem;
  width: calc(100% - 2rem);
  
  .other-input {
    padding: 8px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 0.875rem;
    
    &:focus {
      border-color: rgb(103, 58, 183);
      outline: none;
    }
  }
`,T=["Challenge in maintaining consistent code review quality and timeliness across different time zones","Team members are blocked but don't report it promptly, leading to delayed problem resolution and missed deadlines","Asynchronous communication delays causing bottlenecks in decision-making and project progress","Difficulty in detecting early signs of project risks or technical debt when team members work independently","Team members working on unplanned tasks without proper alignment with sprint goals or priorities","Spending excessive time in back-and-forth chat conversations that could be resolved quickly in person","Uncertainty about whether missed deadlines are due to technical challenges or poor time management","Difficulty in measuring individual productivity without micromanaging or creating unnecessary pressure"],F=(0,s.C)()((e=>{let{title:n,content:a,id:s,t:m}=e;const[h,c]=(0,r.useState)(!1),[g,y]=(0,r.useState)([]),[x,b]=(0,r.useState)(""),[f,j]=(0,r.useState)(""),{values:F,errors:Y,handleChange:E,handleSubmit:L}=(e=>{const[n,a]=(0,r.useState)({values:{...l},errors:{...l}});return{handleChange:(e,n)=>{a((a=>({...a,values:{...a.values,[e]:n},errors:{...a.errors,[e]:""}})))},handleSubmit:r=>{r.preventDefault();const t=n.values,i=e(t);return a((e=>({...e,errors:i}))),i},values:n.values,errors:n.errors}})(o),M=e=>{E(e.target.name,e.target.value)};return(0,p.jsx)(A,{id:s,children:(0,p.jsxs)(t.A,{justify:"space-between",align:"middle",children:[(0,p.jsx)(i.A,{lg:12,md:11,sm:24,xs:24,children:(0,p.jsx)(u,{title:n,content:a})}),(0,p.jsx)(i.A,{lg:12,md:12,sm:24,xs:24,children:(0,p.jsxs)(k,{onSubmit:async e=>{const n=L(e);if(0===Object.keys(n).length){c(!0);try{const e=new FormData;e.append("entry.602484349",F.name),e.append("entry.1839736380",F.email),e.append("entry.1820855826",F.message),F.challenges.forEach((n=>{"Other"!==n&&e.append("entry.1030791043",n)})),g.includes("Other")&&x&&(e.append("entry.1030791043","__other_option__"),e.append("entry.1030791043.other_option_response",x)),await fetch("https://docs.google.com/forms/d/e/1FAIpQLSe--YtN0fxM3LnliIBA4yLyhVLimQG0Tbq_MDDfQFB03XhfJg/formResponse",{method:"POST",mode:"no-cors",body:e}),c(!1),j("Thank you for your message. We'll get back to you soon!"),y([]),b(""),E("name",""),E("email",""),E("message",""),E("challenges",[]),E("otherChallenge","")}catch(a){c(!1),j("There was an error sending your message. Please try again."),console.error("Error submitting form:",a)}}},children:[(0,p.jsxs)(i.A,{span:24,children:[(0,p.jsx)(v,{type:"text",name:"name",placeholder:"Your Name",value:F.name,onChange:M}),Y.name&&(0,p.jsx)(C,{children:Y.name})]}),(0,p.jsxs)(i.A,{span:24,children:[(0,p.jsx)(v,{type:"text",name:"email",placeholder:"Your Email",value:F.email,onChange:M}),Y.email&&(0,p.jsx)(C,{children:Y.email})]}),(0,p.jsxs)(i.A,{span:24,children:[(0,p.jsx)(S,{children:"What is your challenge in leading your team?"}),[...T,"Other"].map((e=>(0,p.jsxs)(_,{children:[(0,p.jsxs)(z,{children:[(0,p.jsx)(q,{type:"checkbox",checked:g.includes(e),onChange:()=>(e=>{let n;"Other"===e?g.includes("Other")?(n=g.filter((e=>"Other"!==e)),b("")):n=[...g,"Other"]:n=g.includes(e)?g.filter((n=>n!==e)):[...g,e],y(n),E("challenges",n)})(e)}),e]}),"Other"===e&&g.includes("Other")&&(0,p.jsx)(D,{children:(0,p.jsx)("input",{type:"text",className:"other-input",name:"otherChallenge",placeholder:"Your challenge",value:x,onChange:e=>{b(e.target.value),E("otherChallenge",e.target.value)}})})]},e))),Y.challenges&&Array.isArray(Y.challenges)&&(0,p.jsx)(C,{children:Y.challenges[0]})]}),(0,p.jsxs)(i.A,{span:24,children:[(0,p.jsx)(w,{placeholder:"Your Message",value:F.message,name:"message",onChange:M}),Y.message&&(0,p.jsx)(C,{children:Y.message})]}),(0,p.jsxs)(O,{children:[f&&(0,p.jsx)(C,{style:{color:f.includes("error")?"#ff4d4f":"#52c41a",marginBottom:"1rem"},children:f}),(0,p.jsx)(d.$,{name:"submit",color:h?"secondary":"primary",children:h?"Sending...":"Submit"})]})]})})]})})}))}}]);
//# sourceMappingURL=66.cd871328.chunk.js.map