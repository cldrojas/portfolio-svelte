const we=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function l(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=l(i);fetch(i.href,o)}};we();function M(){}function he(t){return t()}function ue(){return Object.create(null)}function ne(t){t.forEach(he)}function ye(t){return typeof t=="function"}function G(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let ee;function P(t,e){return ee||(ee=document.createElement("a")),ee.href=e,t===ee.href}function ke(t){return Object.keys(t).length===0}function n(t,e){t.appendChild(e)}function S(t,e,l){t.insertBefore(e,l||null)}function R(t){t.parentNode.removeChild(t)}function _e(t,e){for(let l=0;l<t.length;l+=1)t[l]&&t[l].d(e)}function c(t){return document.createElement(t)}function O(t){return document.createTextNode(t)}function v(){return O(" ")}function s(t,e,l){l==null?t.removeAttribute(e):t.getAttribute(e)!==l&&t.setAttribute(e,l)}function qe(t){return Array.from(t.childNodes)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let ge;function K(t){ge=t}const X=[],pe=[],le=[],me=[],Ue=Promise.resolve();let ce=!1;function Be(){ce||(ce=!0,Ue.then(xe))}function fe(t){le.push(t)}const re=new Set;let te=0;function xe(){const t=ge;do{for(;te<X.length;){const e=X[te];te++,K(e),Ce(e.$$)}for(K(null),X.length=0,te=0;pe.length;)pe.pop()();for(let e=0;e<le.length;e+=1){const l=le[e];re.has(l)||(re.add(l),l())}le.length=0}while(X.length);for(;me.length;)me.pop()();ce=!1,re.clear(),K(t)}function Ce(t){if(t.fragment!==null){t.update(),ne(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(fe)}}const se=new Set;let je;function E(t,e){t&&t.i&&(se.delete(t),t.i(e))}function Y(t,e,l,r){if(t&&t.o){if(se.has(t))return;se.add(t),je.c.push(()=>{se.delete(t),r&&(l&&t.d(1),r())}),t.o(e)}}function z(t){t&&t.c()}function L(t,e,l,r){const{fragment:i,on_mount:o,on_destroy:a,after_update:d}=t.$$;i&&i.m(e,l),r||fe(()=>{const u=o.map(he).filter(ye);a?a.push(...u):ne(u),t.$$.on_mount=[]}),d.forEach(fe)}function N(t,e){const l=t.$$;l.fragment!==null&&(ne(l.on_destroy),l.fragment&&l.fragment.d(e),l.on_destroy=l.fragment=null,l.ctx=[])}function Pe(t,e){t.$$.dirty[0]===-1&&(X.push(t),Be(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(t,e,l,r,i,o,a,d=[-1]){const u=ge;K(t);const g=t.$$={fragment:null,ctx:null,props:o,update:M,not_equal:i,bound:ue(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(u?u.$$.context:[])),callbacks:ue(),dirty:d,skip_bound:!1,root:e.target||u.$$.root};a&&a(g.root);let p=!1;if(g.ctx=l?l(t,e.props||{},(f,A,...k)=>{const w=k.length?k[0]:A;return g.ctx&&i(g.ctx[f],g.ctx[f]=w)&&(!g.skip_bound&&g.bound[f]&&g.bound[f](w),p&&Pe(t,f)),A}):[],g.update(),p=!0,ne(g.before_update),g.fragment=r?r(g.ctx):!1,e.target){if(e.hydrate){const f=qe(e.target);g.fragment&&g.fragment.l(f),f.forEach(R)}else g.fragment&&g.fragment.c();e.intro&&E(t.$$.fragment),L(t,e.target,e.anchor,e.customElement),xe()}K(u)}class H{$destroy(){N(this,1),this.$destroy=M}$on(e,l){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(l),()=>{const i=r.indexOf(l);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!ke(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var Me="/assets/github.711850ab.svg",Ie="/assets/twitter.0a4858d5.svg",Qe="/assets/mail.5defbeeb.svg",De="/assets/llinkedin.33359518.svg",Ee="/assets/nextArrow.a723f0de.svg";function Le(t){let e,l,r,i,o,a,d,u,g,p,f,A,k,w,_,C,U,y,I,j,B,h,Q,T,W,J,D,x,m,q,b,Z,F,de;return{c(){e=c("section"),l=c("div"),r=c("nav"),i=c("header"),o=c("p"),o.textContent="Hi there! \u{1F44B} I am",a=v(),d=c("h1"),d.textContent="Daniel Rojas",u=v(),g=c("h2"),g.textContent="Frontend Developer, coffee lover and cannabis grower",p=v(),f=c("ul"),A=c("li"),k=c("a"),w=c("img"),C=v(),U=c("li"),y=c("a"),I=c("img"),B=v(),h=c("li"),Q=c("a"),T=c("img"),J=v(),D=c("li"),x=c("a"),m=c("img"),b=v(),Z=c("a"),F=c("img"),s(o,"class","svelte-qbfxqk"),s(d,"class","svelte-qbfxqk"),P(w.src,_=Me)||s(w,"src",_),s(w,"alt","github"),s(k,"href","https://github.com/cldrojas"),s(k,"rel","noreferrer noopener"),s(k,"target","_blank"),P(I.src,j=Ie)||s(I,"src",j),s(I,"alt","twitter"),s(y,"href","https://twitter.com/cld_rojas"),s(y,"rel","noreferrer noopener"),s(y,"target","_blank"),P(T.src,W=Qe)||s(T,"src",W),s(T,"alt","mail"),s(Q,"href","mailto:cld.rojasz@gmail.com"),s(Q,"rel","noreferrer noopener"),s(Q,"target","_blank"),P(m.src,q=De)||s(m,"src",q),s(m,"alt","linkedin"),s(x,"href","https://linkedin.com/in/cldrojas/"),s(x,"rel","noreferrer noopener"),s(x,"target","_blank"),s(f,"class","links svelte-qbfxqk"),s(i,"class","svelte-qbfxqk"),s(r,"class","social svelte-qbfxqk"),P(F.src,de=Ee)||s(F,"src",de),s(F,"alt","Go to next section"),s(F,"class","svelte-qbfxqk"),s(Z,"href","#Projects"),s(Z,"class","next svelte-qbfxqk"),s(l,"class","page"),s(e,"class","intro svelte-qbfxqk"),s(e,"id","Intro")},m(ie,be){S(ie,e,be),n(e,l),n(l,r),n(r,i),n(i,o),n(i,a),n(i,d),n(i,u),n(i,g),n(i,p),n(i,f),n(f,A),n(A,k),n(k,w),n(f,C),n(f,U),n(U,y),n(y,I),n(f,B),n(f,h),n(h,Q),n(Q,T),n(f,J),n(f,D),n(D,x),n(x,m),n(l,b),n(l,Z),n(Z,F)},p:M,i:M,o:M,d(ie){ie&&R(e)}}}class Ne extends H{constructor(e){super(),V(this,e,null,Le,G,{})}}function We(t){let e,l,r,i,o,a,d,u,g,p;return{c(){e=c("article"),l=c("div"),r=c("img"),o=v(),a=c("h3"),d=O(t[0]),u=v(),g=c("p"),p=O(t[1]),P(r.src,i=t[2])||s(r,"src",i),s(r,"alt",t[0]),s(r,"class","svelte-x2gtie"),s(a,"class","skill-title svelte-x2gtie"),s(g,"class","skill-description svelte-x2gtie"),s(l,"class","skill-details svelte-x2gtie"),s(e,"class","skill svelte-x2gtie")},m(f,A){S(f,e,A),n(e,l),n(l,r),n(l,o),n(l,a),n(a,d),n(l,u),n(l,g),n(g,p)},p(f,[A]){A&4&&!P(r.src,i=f[2])&&s(r,"src",i),A&1&&s(r,"alt",f[0]),A&1&&$(d,f[0]),A&2&&$(p,f[1])},i:M,o:M,d(f){f&&R(e)}}}function Ye(t,e,l){let{title:r}=e,{description:i}=e,{imgUrl:o}=e;return t.$$set=a=>{"title"in a&&l(0,r=a.title),"description"in a&&l(1,i=a.description),"imgUrl"in a&&l(2,o=a.imgUrl)},[r,i,o]}class oe extends H{constructor(e){super(),V(this,e,Ye,We,G,{title:0,description:1,imgUrl:2})}}var ze="/assets/mobile.33cc54ef.svg",Te="/assets/composed.f43b8d95.svg",Ze="/assets/geometry.92a4df54.svg",Oe="/assets/newhero.3f095006.jpg";function Re(t){let e,l,r,i,o,a,d,u,g,p,f,A,k,w,_,C,U,y,I,j,B;return C=new oe({props:{title:"Mobile-first design",imgUrl:ze,description:"Today, most of the internet access happens via mobile devices"}}),y=new oe({props:{title:"Composed app",imgUrl:Te,description:"Applications divided by small pieces of code make them easly mantainable"}}),j=new oe({props:{title:"Pixel perfect code",imgUrl:Ze,description:`Pixel perfect is one of the best
          ways to build awsome mockup based applications`}}),{c(){e=c("section"),l=c("div"),r=c("h2"),r.textContent="About",i=v(),o=c("article"),a=c("picture"),d=c("img"),g=v(),p=c("div"),p.innerHTML=`<p class="svelte-1fy87p1">I&#39;m software engeenier, passionate about frontend development and web
          technologies, I really enjoy building fast and responsive web
          applications</p> 
        <p class="svelte-1fy87p1">I consider myself detail-oriented, cheerful and observant. I&#39;m also
          very persistent, specially when it comes to precision and speed</p>`,f=v(),A=c("h3"),A.textContent="My skills",k=v(),w=c("div"),_=c("div"),z(C.$$.fragment),U=v(),z(y.$$.fragment),I=v(),z(j.$$.fragment),s(r,"class","title svelte-1fy87p1"),s(d,"class","hero svelte-1fy87p1"),P(d.src,u=Oe)||s(d,"src",u),s(d,"alt","Welcome"),s(a,"class","svelte-1fy87p1"),s(p,"class","description svelte-1fy87p1"),s(o,"class","svelte-1fy87p1"),s(A,"class","svelte-1fy87p1"),s(_,"class","skill-set svelte-1fy87p1"),s(w,"class","skills"),s(l,"class","page"),s(e,"class","about svelte-1fy87p1"),s(e,"id","About")},m(h,Q){S(h,e,Q),n(e,l),n(l,r),n(l,i),n(l,o),n(o,a),n(a,d),n(o,g),n(o,p),n(l,f),n(l,A),n(l,k),n(l,w),n(w,_),L(C,_,null),n(_,U),L(y,_,null),n(_,I),L(j,_,null),B=!0},p:M,i(h){B||(E(C.$$.fragment,h),E(y.$$.fragment,h),E(j.$$.fragment,h),B=!0)},o(h){Y(C.$$.fragment,h),Y(y.$$.fragment,h),Y(j.$$.fragment,h),B=!1},d(h){h&&R(e),N(C),N(y),N(j)}}}class Se extends H{constructor(e){super(),V(this,e,null,Re,G,{})}}function ve(t,e,l){const r=t.slice();return r[7]=e[l],r}function Ae(t){let e,l=t[7]+"",r;return{c(){e=c("li"),r=O(l),s(e,"class","tech svelte-1vpslmo")},m(i,o){S(i,e,o),n(e,r)},p(i,o){o&64&&l!==(l=i[7]+"")&&$(r,l)},d(i){i&&R(e)}}}function Fe(t){let e,l,r,i,o,a,d,u,g,p,f,A,k,w,_,C,U,y,I,j,B,h,Q,T,W,J,D=t[6],x=[];for(let m=0;m<D.length;m+=1)x[m]=Ae(ve(t,D,m));return{c(){e=c("article"),l=c("img"),i=v(),o=c("div"),a=c("div"),d=c("img"),p=v(),f=c("h3"),A=O(t[0]),k=v(),w=c("p"),_=O(t[1]),C=v(),U=c("ul"),y=c("li"),y.textContent="Technologies:",I=v();for(let m=0;m<x.length;m+=1)x[m].c();j=v(),B=c("div"),h=c("a"),Q=O("Preview App"),T=v(),W=c("a"),J=O("Source Code"),s(l,"class","image svelte-1vpslmo"),P(l.src,r=t[2])||s(l,"src",r),s(l,"alt",t[0]),s(d,"class","logo svelte-1vpslmo"),P(d.src,u=t[3])||s(d,"src",u),s(d,"alt",g=`${t[0]}-logo`),s(f,"class","title svelte-1vpslmo"),s(w,"class","description svelte-1vpslmo"),s(y,"class","tech first svelte-1vpslmo"),s(U,"class","technologies svelte-1vpslmo"),s(h,"href",t[4]),s(h,"class","link svelte-1vpslmo"),s(W,"href",t[5]),s(W,"class","link svelte-1vpslmo"),s(B,"class","links svelte-1vpslmo"),s(a,"class","details svelte-1vpslmo"),s(o,"class","wrapper svelte-1vpslmo"),s(e,"class","project svelte-1vpslmo")},m(m,q){S(m,e,q),n(e,l),n(e,i),n(e,o),n(o,a),n(a,d),n(a,p),n(a,f),n(f,A),n(a,k),n(a,w),n(w,_),n(a,C),n(a,U),n(U,y),n(U,I);for(let b=0;b<x.length;b+=1)x[b].m(U,null);n(a,j),n(a,B),n(B,h),n(h,Q),n(B,T),n(B,W),n(W,J)},p(m,[q]){if(q&4&&!P(l.src,r=m[2])&&s(l,"src",r),q&1&&s(l,"alt",m[0]),q&8&&!P(d.src,u=m[3])&&s(d,"src",u),q&1&&g!==(g=`${m[0]}-logo`)&&s(d,"alt",g),q&1&&$(A,m[0]),q&2&&$(_,m[1]),q&64){D=m[6];let b;for(b=0;b<D.length;b+=1){const Z=ve(m,D,b);x[b]?x[b].p(Z,q):(x[b]=Ae(Z),x[b].c(),x[b].m(U,null))}for(;b<x.length;b+=1)x[b].d(1);x.length=D.length}q&16&&s(h,"href",m[4]),q&32&&s(W,"href",m[5])},i:M,o:M,d(m){m&&R(e),_e(x,m)}}}function Ge(t,e,l){let{name:r,description:i,imgUrl:o,logoUrl:a,previewUrl:d,repoUrl:u,technologies:g}=e;return t.$$set=p=>{"name"in p&&l(0,r=p.name),"description"in p&&l(1,i=p.description),"imgUrl"in p&&l(2,o=p.imgUrl),"logoUrl"in p&&l(3,a=p.logoUrl),"previewUrl"in p&&l(4,d=p.previewUrl),"repoUrl"in p&&l(5,u=p.repoUrl),"technologies"in p&&l(6,g=p.technologies)},[r,i,o,a,d,u,g]}class ae extends H{constructor(e){super(),V(this,e,Ge,Fe,G,{name:0,description:1,imgUrl:2,logoUrl:3,previewUrl:4,repoUrl:5,technologies:6})}}var Ve="/assets/todo.a2718019.png",He="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAaCAMAAADhRa4NAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABrVBMVEUAAABWv/RXv/VYwfVVxv9SuvJUvPRYwfVRuPJSufNZwfRduf9PtfJPtvJVv/9LsfJNs/FYwfZNzP9Ir/BLsPFWv/MYXLsYWbwaWb9Hq/BIrfBStOcYW7waWr0ZWr0UXMJDqvBGqu9MrOAAAAAZWr0dWLpDpe1Dp+5OsecAAAAYWr1Ao+1BpO5LrecYWb49oe0+oe1Jq+UZWr4ZWr0ZWr06nes8nuxIqOUZV7kndtE5m+tFpeUVRYoZWLpDouMAAAAQNXAZWrw/nuMAAAAQNnI+nOMYWbw6mOE6l98ZXb82kt8AAAAUQYIngeAugtYYUZong+Aqf9YZTpgnguApfNUZT5YnetUAAAAleNQkd9Qhb8cAAAAAAABWvvRXv/VTu/NUvPRRuPNSufNOtfJPtvJMsvFNs/FJr/BLsPEZWr1HrPBIrfBEqe9Gqu9Cpu5Dp+5Ao+1BpO49oOw+oe07new8nuwkcs83l+o4mus5m+sjcc41lOo2l+o3mOojcM4ykekzlOk1leohb84wjugxkekykukhb88ti+cujugwj+gqiOYsi+ctjOcrief///+hw8YhAAAAXXRSTlMAXPCtCWD9umH9wQth/Qxi/bwKY/1/QH4UZP1qVPrYGWP9mgn7GmP9kxBVZP2TVmT9kkf812X9ko/n/ZEl4ZECMN2RBS+Q3JCJ34gPM/m2P/jDPvjDPcIEwtaoCwiBJ5w2AAAAAWJLR0SOggWzbwAAAAd0SU1FB+YCEAcAK4/juQUAAAE0SURBVCjPfdJVVwMxEEDh4FDcirc4BHf3LBqgeLEWl+Du7vqf6SbNFOjuzmPud/IwCUI64+Pr548MJiDQ4QwyEMEhc/MOpylUr4eFLyxyEaHdI6OWloWIjtHqsXErq1LEiyNzQqKnJyWvrYNI4UepacxilT09Y2MTRGYW79mMMUuO6Ll5W9sg8rF6VKB2KQqLdnZBFPNeIroQpWV7+yDKea+oZHKqrNU1B4cganlHdcwz9Q1HxyAaRUdNzdBPTs/OQbS4O2pta3f3i8uraxAdGPZCFCFubu/uQXTiX5slSperPzw+PYPoxn92r97x8vr2DqIH/3sdovR+fH6B6KNe70f6B75BDFKNFya2ISmGqeYfISOjQoxRnV9GxrmYoLr/1K6KSWrw0+22qWmj7tr6zKz34Q+WMpMYwMC4bQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wMi0xNlQwNzowMDo0MyswMDowMEqeGRsAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDItMTZUMDc6MDA6NDMrMDA6MDA7w6GnAAAAAElFTkSuQmCC",Je="/assets/vero.791c580f.png",Xe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAATFSURBVHja7J3hbdswEIVfgvx2tEHdCaIN4g3iwANU3cAb1N3A3UAZwIA9QZ0JKm9gbRB5AfdHGdQtAok0RPJ4fO9PgEByRN13j3c0pdycz2dQ+eqWt4AAUASAIgAUAaAIAEUAKAJAEQCKAFAEgCIAFAGgCABFACgCQBEASpfuYl/AaRHkz8wAlACm5mcB4MHy3BufFzbZ/HMvSgBzi3NWagDwpLkJ+swh0BK0BPBl4JgXVQ4woqqLwN8nDO6QtgTgr0qTNfOEg/5u/zZjaCcbAvCe7RWAR2XTVtDsTxGACsAKwCeldcuQ1rkCMDeD1xh4W/s/TDY45gZAaQL/CN2Kkv2A7IWgFYBfVwS/Syz7i1jzv1QHKAHUV/TvL+Y8APiZWPYP2f9ussFbDg6wNFnvEvwdgM+mQNwrtf/a1x+X4gCFGeSTwzltwkG/HPfQmLuxe39pDjA1QXQJ/o+L87QXf7XPC4gKgPnyo3Gw/A7As5kqQtYkagG4ixz8PeyXcDv8WedvIth0LPs/TDZ+x3ubSPAPxvIb6FH07I8CwJWZXwF+2qCIqrIDwCx61AnYfojCd2iBy1vvH9MBto49/lJh8MXYf1AATgus4Lasu7vyJqQAzJD9e+39gwNg5v1vDqd0lnPkR5JeK0wtXLAOdTGhHMB1QGuFRZ84+w8CwGmBynHeb4Hxdr0maP/ee//QDrC6Ivu1SpT9ewfAZL/rLp464+x/75SgxQFcs/9F8dxvA8DOx7avKACYyt81+7eKg29zP4KP/zYi7R9pn3H2d5NN+OnPJwAzx+Nfldv/XFr2+wbAdU9fozj4Nva/VgPAaeGc/WMD8DriZxUB7L8N2fuHXgew1VFw9vq2/3WswfkC4Jqs0VoAziRW/xIdgL2/IgBcq/lOMQBzqdkvyQEaxcG/l9b7S3QAZr8mAExL0zH+cqv/EFPAnsHvtf9WwtTnEwAXe3vMMPtrCRfpDQBT3LSRxnWMfF+L7AGw7IEvNVMEwJD9v0LIyqdXACYb7AF8tTy8pP0rXAcwU8GzRVdQKQl+gf6HPjsI2vgSZCHIPOQwBfC9py54UOICNr3/m5SLDfZ4uHnObQVgZbaLlQaK2X/TQKMcgFrSxUZ5P4BZKGqAYG8Ll2L/LYStj/DbwIyznwCM351UBECfCsvjpuhf0RTT+xMA2r96AGIUWlUqvT8dYHxN0b8NXlTvTwDC2/9W6oUTAP/23xIA2j8IQJ7ZDwh/4QUB8AvAAXKfeCIAI6hE/1M/a+kDIAB+7X9LAPJt/5J43Y1WAELc+CH736Zwo7QC0LD35xQQ0/63qQyCAGRa/RMAexUf/G6Zcu9PANz04Gj/dUqDIwDXzf33BIDF30faIbF3IxCAcQGoUxsMARjP/sVu+yIAzP4sATgQgLwBGLsYq3rs/4BEn2nkFJBx9hMAexXof+iTALD3JwC0fwKgVk+aen8CMJ7q1AdAAAgAdaVEvOqVAMTTWsMgNAOw9/z5WwKQr3ZIaNsXAWD2E4AR1UHRfzgnABlnPwHIuPonABn3/gSA2U8AOP8TgGx7/1wAODL7CQB7f04BzP4+3ZzPZ4Y3Y9EBCABFACgCQBEAigBQBIAiABQBoAgARQAoAkARAEqxfg8A/doG89qZDW0AAAAASUVORK5CYII=",Ke="/assets/rick.402d0cd1.png",$e="/assets/rick_logo.efa6f1b3.png";function et(t){let e,l,r,i,o,a,d,u,g,p;return o=new ae({props:{name:"To-Do List",description:"This is my first project using svelte, it's a frontend mentor challenge",imgUrl:Ve,logoUrl:He,previewUrl:"https://cldrojas.github.io/todo",repoUrl:"https://github.com/cldrojas/todo",technologies:["html","css","javascript","svelte","webpack","travis-ci","github-pages"]}}),d=new ae({props:{name:"Ver\xF3nica",description:"Landing page for promoting my girlfriend's work",imgUrl:Je,logoUrl:Xe,previewUrl:"https://cldrojas.github.io/veronica",repoUrl:"https://github.com/cldrojas/veronica",technologies:["html","css","javascript","svelte","webpack","travis-ci","github-pages"]}}),g=new ae({props:{name:"Rick & Morty",description:"A single page application that shows Rick & Morty characters",imgUrl:Ke,logoUrl:$e,previewUrl:"https://cldrojas.github.io/spa-node/",repoUrl:"https://github.com/cldrojas/spa-node",technologies:["html","css","javascript","node","webpack","travis-ci","github-pages"]}}),{c(){e=c("section"),l=c("h2"),l.textContent="Projects",r=v(),i=c("div"),z(o.$$.fragment),a=v(),z(d.$$.fragment),u=v(),z(g.$$.fragment),s(l,"class","title svelte-1huacnx"),s(i,"class","projects-list svelte-1huacnx"),s(e,"class","projects svelte-1huacnx")},m(f,A){S(f,e,A),n(e,l),n(e,r),n(e,i),L(o,i,null),n(i,a),L(d,i,null),n(i,u),L(g,i,null),p=!0},p:M,i(f){p||(E(o.$$.fragment,f),E(d.$$.fragment,f),E(g.$$.fragment,f),p=!0)},o(f){Y(o.$$.fragment,f),Y(d.$$.fragment,f),Y(g.$$.fragment,f),p=!1},d(f){f&&R(e),N(o),N(d),N(g)}}}class tt extends H{constructor(e){super(),V(this,e,null,et,G,{})}}function lt(t){let e,l,r,i,o,a,d;return l=new Ne({}),i=new tt({}),a=new Se({}),{c(){e=c("main"),z(l.$$.fragment),r=v(),z(i.$$.fragment),o=v(),z(a.$$.fragment)},m(u,g){S(u,e,g),L(l,e,null),n(e,r),L(i,e,null),n(e,o),L(a,e,null),d=!0},p:M,i(u){d||(E(l.$$.fragment,u),E(i.$$.fragment,u),E(a.$$.fragment,u),d=!0)},o(u){Y(l.$$.fragment,u),Y(i.$$.fragment,u),Y(a.$$.fragment,u),d=!1},d(u){u&&R(e),N(l),N(i),N(a)}}}class st extends H{constructor(e){super(),V(this,e,null,lt,G,{})}}new st({target:document.getElementById("app")});
