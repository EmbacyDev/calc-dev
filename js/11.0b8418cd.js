"use strict";(self["webpackChunkcalc_dev"]=self["webpackChunkcalc_dev"]||[]).push([[11],{3011:function(t,e,l){l.r(e),l.d(e,{default:function(){return v}});var n=l(3396),a=l(7139);const o={class:"page"},i={class:"container"},s={key:0},c={key:1},r=(0,n.Uk)("Вопрос: "),T=(0,n.Uk)("Врнуться на главную ");function h(t,e,l,h,u,A){const p=(0,n.up)("router-link");return(0,n.wg)(),(0,n.iD)("section",null,[(0,n._)("div",o,[(0,n._)("div",i,[A.lengthTotal?((0,n.wg)(),(0,n.iD)("h1",s," Ваш охуенный результат ")):((0,n.wg)(),(0,n.iD)("h1",c,"Необходимо выбрать данные в калькуляторе")),(0,n._)("h2",null,(0,a.zw)(u.variant),1),(0,n._)("h3",null,(0,a.zw)(u.pageType),1),((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(A.calcTotal,(t=>((0,n.wg)(),(0,n.iD)("ul",{key:t},[(0,n._)("li",null,[r,(0,n._)("strong",null,(0,a.zw)(t.q),1),(0,n.Uk)(", выбраное значение "+(0,a.zw)(t.v),1)])])))),128)),(0,n.Wm)(p,{class:"btn-link",onClick:A.removeTotalAll,to:"/"},{default:(0,n.w5)((()=>[T])),_:1},8,["onClick"]),(0,n._)("span",{onClick:e[0]||(e[0]=t=>A.removeTotalAll()),onKeydown:e[1]||(e[1]=(...t)=>A.removeTotalAll&&A.removeTotalAll(...t))},"Очистить результат",32)])])])}var u=l(65),A={name:"TotalPage",components:{},props:{},data(){return{variant:"",pageType:""}},computed:{lengthTotal(){return this.calcTotal.length>1},...(0,u.Se)(["TOTAL","VARIANT"]),calcTotal(){let t=[];return this.TOTAL.length?this.TOTAL.forEach((e=>{t.push(e)})):t="0",t}},watch:{},mounted(){1===this.VARIANT[0]&&(this.variant="Code"),this.VARIANT[0]>2&&(this.variant="No code"),this.VARIANT[0]>3&&(this.pageType="Коорпор сайт"),this.VARIANT[0]>4&&(this.pageType="Landing page")},methods:{...(0,u.nv)(["ALL_REMOVE_TOTAL"]),removeTotalAll(){this.ALL_REMOVE_TOTAL()}}},p=l(89);const g=(0,p.Z)(A,[["render",h]]);var v=g}}]);
//# sourceMappingURL=11.0b8418cd.js.map