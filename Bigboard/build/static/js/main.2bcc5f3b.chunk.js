(this["webpackJsonpstock-prediction"]=this["webpackJsonpstock-prediction"]||[]).push([[0],{184:function(e,t,a){},185:function(e,t,a){},186:function(e,t,a){},187:function(e,t,a){"use strict";a.r(t);var o=a(1),r=a.n(o),n=a(58),s=a.n(n),c=(a(65),a(3)),i=a(4),l=a(6),d=a(5),u=a(59),h=a(32),p=a.n(h),b=a(10),j=a.n(b),f=(a(84),a(0)),m=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={inputArray:[]},e.getResults=function(){var t=Object(u.a)(p.a.mark((function t(a,o){var r,n,s,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("123"),r=document.getElementById("stockcode").value,n=Math.round((new Date).getTime()/1e3),n-259200,!e.state.inputArray.includes(r)){t.next=9;break}alert("Already Exists"),document.getElementById("stockcode").value="",t.next=18;break;case 9:if(!(""===(s=document.getElementById("stockcode").value)||s.length>4)){t.next=14;break}alert("Please enter correct code"),t.next=18;break;case 14:return t.next=16,j.a.get("https://finnhub.io/api/v1/quote",{params:{symbol:r,token:"bu5pnnf48v6qku34c7vg"}});case 16:c=t.sent,e.setState({inputArray:e.state.inputArray.concat(r)},(function(){0===c.data.c&&0===c.data.h&&0===c.data.l&&0===c.data.o&&0===c.data.pc&&0===c.data.t?e.props.getGraphResults("no_data",""):(c.data.stockcode=r,e.props.getResults(!0,{stockcode:r,response:c.data}),console.log(c.data)),document.getElementById("stockcode").value=""}));case 18:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"convertToUppercase",value:function(){var e=document.getElementById("stockcode");e.value=e.value.toUpperCase()}},{key:"render",value:function(){var e=this;return Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("input",{className:"form-control",type:"text",id:"stockcode","aria-label":"Search",placeholder:"Enter Stock Code (e.g. AAPL)",onKeyUp:this.convertToUppercase}),Object(f.jsx)("button",{className:"btn btn-dark inputbutton","aria-label":"Search",type:"submit",onClick:function(){return e.getResults(!0,"")},children:Object(f.jsx)("i",{className:"fa fa-search"})})]})}}]),a}(r.a.Component),v=m,g=(a(86),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={currency:"$"},e}return Object(i.a)(a,[{key:"render",value:function(){var e,t=this;return e=this.props.table_Values.map((function(e,a){if(console.log(t.props.table_Values),console.log(a),"Symbol not supported"!==e)return Object(f.jsxs)("tr",{children:[Object(f.jsx)("td",{children:e.stockcode}),Object(f.jsx)("td",{children:JSON.stringify(new Date(1e3*e.t)).split("T")[0].replace('"',"")}),Object(f.jsx)("td",{className:"openrow",children:t.state.currency+e.o.toFixed(2)}),Object(f.jsx)("td",{className:"lowrow",children:t.state.currency+e.l.toFixed(2)}),Object(f.jsx)("td",{className:"highrow",children:t.state.currency+e.h.toFixed(2)}),Object(f.jsx)("td",{className:"pcloserow",children:t.state.currency+e.pc.toFixed(2)}),Object(f.jsx)("td",{className:"closerow",children:t.state.currency+e.c.toFixed(2)}),Object(f.jsx)("td",{className:"lastrow",children:(100-e.pc.toFixed(2)/e.c.toFixed(2)*100).toFixed(2)+"%"})]},a)})),Object(f.jsxs)("div",{className:"item-table",children:[Object(f.jsx)("h5",{className:"table-heading",children:"Your Companies Latest Stock values:"}),this.props.show_Table?Object(f.jsxs)("table",{className:"table table-striped",children:[Object(f.jsx)("thead",{children:Object(f.jsxs)("tr",{children:[Object(f.jsx)("th",{children:"Stock Code"}),Object(f.jsx)("th",{children:"Last Updated Data"}),Object(f.jsx)("th",{children:"Open Price"}),Object(f.jsx)("th",{children:"Low Price"}),Object(f.jsx)("th",{children:"High Price"}),Object(f.jsx)("th",{children:"Previous Close Price"}),Object(f.jsx)("th",{children:"Current Price"}),Object(f.jsx)("th",{children:"% From Yesterday"})]})}),Object(f.jsx)("tbody",{children:e})]}):Object(f.jsx)("p",{})]})}}]),a}(r.a.Component)),x=g,k=a(60),O=(a(184),a(9)),y=a.n(O),S=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={Data:{}},o}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this;if(e.currentStockCode!==this.props.currentStockCode){if(!1===this.props.alter_Graph)var a=(o=Math.round((new Date).getTime()/1e3))-259200;else{var o=this.props.dates.endDate;a=this.props.dates.startDate}j.a.get("https://finnhub.io/api/v1/stock/candle",{params:{symbol:this.props.currentStockCode,resolution:5,from:a,to:o,token:"bu5pnnf48v6qku34c7vg"}}).then((function(e){console.log(e);var a,o=e.data.t,r=[];for(a=0;a<o.length;a++){var n=y.a.unix(o[a]).format("YYYY-MM-DD HH:mm");r.push(n)}var s=e.data.c,c=s[0]<s[s.length-1]?"#81b737":"#d54f4f";t.setState({symbol:t.props.currentStockCode,text:"in the last 72 Hours",Data:{labels:r,datasets:[{label:"Stock Price",data:s,fill:!0,lineTension:.1,backgroundColor:c,borderColor:c,borderCapStyle:"butt",borderJoinStyle:"miter",pointBorderColor:c,pointBackgroundColor:c,pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:c,pointHoverBorderColor:c,pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:10}]}})})).catch((function(e){console.log(e.response)}))}else if(e.dates!==this.props.dates){if(!1===this.props.alter_Graph)a=(o=Math.round((new Date).getTime()/1e3))-259200;else o=this.props.dates.endDate,a=this.props.dates.startDate;j.a.get("https://finnhub.io/api/v1/stock/candle",{params:{symbol:this.props.currentStockCode,resolution:5,from:a,to:o,token:"bu5pnnf48v6qku34c7vg"}}).then((function(e){if(console.log(e.data),"no_data"===e.data.s)alert("No Data Currently Available. Markets are closed during weekends and public holidays. Please filter by previous date.");else{var a,o=e.data.t,r=[];for(a=0;a<o.length;a++){var n=y.a.unix(o[a]).format("YYYY-MM-DD HH:mm");r.push(n)}var s="between "+String(r[0]).slice(0,10)+" to "+String(r[r.length-1].slice(0,10)),c=e.data.c,i=c[0]<c[c.length-1]?"#81b737":"#d54f4f";t.setState({text:s,symbol:t.props.currentStockCode,Data:{labels:r,datasets:[{label:"Stock Price",data:c,fill:!0,lineTension:.1,backgroundColor:i,borderColor:i,borderCapStyle:"butt",borderJoinStyle:"miter",pointBorderColor:i,pointBackgroundColor:i,pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:i,pointHoverBorderColor:i,pointHoverBorderWidth:2,pointRadius:2,pointHitRadius:10}]}})}})).catch((function(e){console.log(e.response)}))}}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"graphClass",children:[Object(f.jsxs)("h5",{children:["Price per share of ",this.state.symbol," ",this.state.text," "]}),Object(f.jsx)(k.Line,{data:this.state.Data,height:300,width:400,options:{layout:{padding:{right:10}},responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!1},ticks:{display:!1},scaleLabel:{display:!0,labelString:"Time",fontColor:"rgb(0, 35, 80)",fontfamily:"New Century Schoolbook, TeX Gyre Schola, serif",fontSize:12}}],yAxes:[{gridLines:{display:!1},scaleLabel:{display:!0,labelString:"Stock Price ($)",fontColor:"rgb(0, 35, 80)",fontfamily:"New Century Schoolbook, TeX Gyre Schola, serif",fontSize:12},ticks:{display:!0,fontColor:"black"}}]},legend:{display:!0,position:"top",labels:{fontColor:"rgb(0, 35, 80)",fontSize:12,fontfamily:"New Century Schoolbook, TeX Gyre Schola, serif"}}}})]})}}]),a}(r.a.Component),C=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).filter=function(){if(document.getElementById("startdate").value&&document.getElementById("enddate").value){var t=document.querySelector(".filter-select").value,a=new Date(document.querySelector("input.start-date").value)/1e3,o=new Date(document.querySelector("input.end-date").value)/1e3+36e3,r=Math.round((new Date).getTime()/1e3);r>a&&r>o&&a<=o?e.props.filterData(!0,{stock_code:t,startDate:a,endDate:o}):(document.querySelector("input.start-date").value="",document.querySelector("input.end-date").value="",alert("please enter valid Start and End date"))}else alert("please enter Start and End date")},e}return Object(i.a)(a,[{key:"render",value:function(){var e;return e=this.props.dict_codes.map((function(e,t){return Object(f.jsx)("option",{value:e.stock_value,defaultValue:e.stock_value,children:e.stock_value},t)})),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("select",{className:"custom-select filter-select",id:"select","aria-label":"Search",children:e}),Object(f.jsxs)("div",{className:"d-flex filter-card-date mt-2",children:[Object(f.jsxs)("div",{className:"filter-card-date-div",children:[Object(f.jsx)("label",{className:"mb-0",children:"Start Date:"}),Object(f.jsx)("input",{className:"form-control start-date","aria-label":"Search",type:"date",id:"startdate"})]}),Object(f.jsxs)("div",{className:"filter-card-date-div",children:[Object(f.jsx)("label",{className:"mb-0",children:"End Date:"}),Object(f.jsx)("input",{className:"form-control end-date","aria-label":"Search",type:"date",id:"enddate"})]})]}),Object(f.jsx)("button",{id:"filterbutton",className:"btn btn-secondary w-100 mt-3 btn-filter",onClick:this.filter,children:"Filter"})]})}}]),a}(r.a.Component),w=C,D=(a(185),function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var o;return Object(c.a)(this,a),(o=t.call(this,e)).state={Data:"*Provide a company stock ticker for latest news*"},o}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(e){var t=this;if(e.currentStockCode!=this.props.currentStockCode){console.log(this.props.currentStockCode);var a=Math.round((new Date).getTime()/1e3),o=a-259200,r=(a=y.a.unix(a).format("YYYY MMM DD")).split(" "),n=y()().month(r[1]).format("MM");a=r[0]+"-"+n+"-"+r[2];var s=(o=y.a.unix(o).format("YYYY MMM DD")).split(" "),c=y()().month(s[1]).format("MM");o=s[0]+"-"+c+"-"+s[2],j.a.get("https://finnhub.io/api/v1/company-news",{params:{symbol:this.props.currentStockCode,from:o,to:a,token:"bu5pnnf48v6qku34c7vg"}}).then((function(e){for(var a="",o=0;o<e.data.length;o++)a+=e.data[o].headline+".";t.setState({Data:a},(function(){}))}))}}},{key:"render",value:function(){return Object(f.jsx)("div",{className:"container footer",children:Object(f.jsxs)("div",{className:"d-flex breaking-news",children:[Object(f.jsx)("div",{id:"ticker",className:"ticker d-flex news",children:Object(f.jsx)("span",{className:"d-flex align-items-center",children:"\xa0NEWS"})}),Object(f.jsx)("marquee",{className:"news-scroll",behavior:"scroll",direction:"left",children:Object(f.jsxs)("a",{href:"#",children:[" ",this.state.Data]})})]})})}}]),a}(r.a.Component)),N=(a(186),a.p+"static/media/DNA.a6b5702f.mp4"),_=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var o=arguments.length,r=new Array(o),n=0;n<o;n++)r[n]=arguments[n];return(e=t.call.apply(t,[this].concat(r))).state={videoSource:N,table_Values:[],graphData:[],currentStockCode:"",showFilterDOM:!1,showFilterData:!1,show_Table:!1,showGraph:!1,alter_Graph:!1,dict_codes:[]},e.getResults=function(t,a){"Symbol not supported"!==a.response&&e.setState({table_Values:e.state.table_Values.concat(a.response),currentStockCode:a.stockcode,dict_codes:e.state.dict_codes.concat({stock_value:a.stockcode}),showFilterDOM:!0,show_Table:!0,showGraph:!0,alter_Graph:!1},(function(){console.log(e.state.dict_codes),console.log(e.state.alter_Graph)}))},e.filterData=function(t,a){console.log(a),e.setState({dates:a,currentStockCode:a.stock_code,alter_Graph:!0,show_Table:!0,showGraph:!0},(function(){console.log(e.state.currentStockCode),console.log(e.state.dates)})),console.log(e.state.dates)},e.getGraphResults=function(t,a){console.log(t),console.log(a),e.setState({graphData:a})},e}return Object(i.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsxs)("video",{autoPlay:"autoplay",loop:"loop",muted:!0,children:[Object(f.jsx)("source",{src:this.state.videoSource,type:"video/mp4"}),"Your browser does not support the video tag."]}),Object(f.jsx)("div",{className:"heading-container",children:Object(f.jsx)("h1",{className:"pageheading",children:"Stock Price Dashboard"})}),Object(f.jsx)("div",{className:"input-container",children:Object(f.jsx)(v,{getResults:this.getResults})}),Object(f.jsx)("div",{className:this.state.showFilterDOM?"filter-container":"hidden-table-container",children:Object(f.jsx)(w,{currentStockCode:this.state.currentStockCode,filterData:this.filterData,dict_codes:this.state.dict_codes})}),Object(f.jsx)("div",{className:this.state.show_Table?"graph-container":"hidden-table-container",tabindex:"0",children:Object(f.jsx)(S,{currentStockCode:this.state.currentStockCode,dates:this.state.dates,alter_Graph:this.state.alter_Graph})}),Object(f.jsx)("div",{className:this.state.show_Table?"table-container":"hidden-table-container",tabindex:"0",children:Object(f.jsx)(x,{show_Table:this.state.show_Table,table_Values:this.state.table_Values})}),Object(f.jsx)(D,{currentStockCode:this.state.currentStockCode})]})}}]),a}(r.a.Component),M=_,T=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,188)).then((function(t){var a=t.getCLS,o=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),o(e),r(e),n(e),s(e)}))};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(M,{})}),document.getElementById("root")),T()},65:function(e,t,a){},84:function(e,t,a){},86:function(e,t,a){}},[[187,1,2]]]);
//# sourceMappingURL=main.2bcc5f3b.chunk.js.map