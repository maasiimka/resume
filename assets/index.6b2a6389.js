(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))f(c);new MutationObserver(c=>{for(const a of c)if(a.type==="childList")for(const m of a.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&f(m)}).observe(document,{childList:!0,subtree:!0});function n(c){const a={};return c.integrity&&(a.integrity=c.integrity),c.referrerpolicy&&(a.referrerPolicy=c.referrerpolicy),c.crossorigin==="use-credentials"?a.credentials="include":c.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function f(c){if(c.ep)return;c.ep=!0;const a=n(c);fetch(c.href,a)}})();function W(){}function Mt(s){return s()}function Ft(){return Object.create(null)}function Ee(s){s.forEach(Mt)}function Nt(s){return typeof s=="function"}function Ht(s,i){return s!=s?i==i:s!==i||s&&typeof s=="object"||typeof s=="function"}let je;function u(s,i){return je||(je=document.createElement("a")),je.href=i,s===je.href}function It(s){return Object.keys(s).length===0}function t(s,i){s.appendChild(i)}function T(s,i,n){s.insertBefore(i,n||null)}function b(s){s.parentNode.removeChild(s)}function l(s){return document.createElement(s)}function Dt(s){return document.createTextNode(s)}function o(){return Dt(" ")}function e(s,i,n){n==null?s.removeAttribute(i):s.getAttribute(i)!==n&&s.setAttribute(i,n)}function Ut(s){return Array.from(s.childNodes)}let He;function ee(s){He=s}const Z=[],Lt=[],Le=[],Et=[],Gt=Promise.resolve();let Ne=!1;function Rt(){Ne||(Ne=!0,Gt.then(Pt))}function Pe(s){Le.push(s)}const Me=new Set;let Fe=0;function Pt(){const s=He;do{for(;Fe<Z.length;){const i=Z[Fe];Fe++,ee(i),Jt(i.$$)}for(ee(null),Z.length=0,Fe=0;Lt.length;)Lt.pop()();for(let i=0;i<Le.length;i+=1){const n=Le[i];Me.has(n)||(Me.add(n),n())}Le.length=0}while(Z.length);for(;Et.length;)Et.pop()();Ne=!1,Me.clear(),ee(s)}function Jt(s){if(s.fragment!==null){s.update(),Ee(s.before_update);const i=s.dirty;s.dirty=[-1],s.fragment&&s.fragment.p(s.ctx,i),s.after_update.forEach(Pe)}}const Vt=new Set;function Wt(s,i){s&&s.i&&(Vt.delete(s),s.i(i))}function Kt(s,i,n,f){const{fragment:c,after_update:a}=s.$$;c&&c.m(i,n),f||Pe(()=>{const m=s.$$.on_mount.map(Mt).filter(Nt);s.$$.on_destroy?s.$$.on_destroy.push(...m):Ee(m),s.$$.on_mount=[]}),a.forEach(Pe)}function Xt(s,i){const n=s.$$;n.fragment!==null&&(Ee(n.on_destroy),n.fragment&&n.fragment.d(i),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(s,i){s.$$.dirty[0]===-1&&(Z.push(s),Rt(),s.$$.dirty.fill(0)),s.$$.dirty[i/31|0]|=1<<i%31}function Qt(s,i,n,f,c,a,m,te=[-1]){const w=He;ee(s);const r=s.$$={fragment:null,ctx:[],props:a,update:W,not_equal:c,bound:Ft(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(w?w.$$.context:[])),callbacks:Ft(),dirty:te,skip_bound:!1,root:i.target||w.$$.root};m&&m(r.root);let p=!1;if(r.ctx=n?n(s,i.props||{},(d,h,...O)=>{const K=O.length?O[0]:h;return r.ctx&&c(r.ctx[d],r.ctx[d]=K)&&(!r.skip_bound&&r.bound[d]&&r.bound[d](K),p&&zt(s,d)),h}):[],r.update(),p=!0,Ee(r.before_update),r.fragment=f?f(r.ctx):!1,i.target){if(i.hydrate){const d=Ut(i.target);r.fragment&&r.fragment.l(d),d.forEach(b)}else r.fragment&&r.fragment.c();i.intro&&Wt(s.$$.fragment),Kt(s,i.target,i.anchor,i.customElement),Pt()}ee(w)}class Yt{$destroy(){Xt(this,1),this.$destroy=W}$on(i,n){if(!Nt(n))return W;const f=this.$$.callbacks[i]||(this.$$.callbacks[i]=[]);return f.push(n),()=>{const c=f.indexOf(n);c!==-1&&f.splice(c,1)}}$set(i){this.$$set&&!It(i)&&(this.$$.skip_bound=!0,this.$$set(i),this.$$.skip_bound=!1)}}const Zt="/assets/arrow.cd8dfa5a.svg",qt="/assets/newsFirst.f0f6e835.jpg",es="/assets/newsFirst2x.c0f8c501.jpg",ts="/assets/newsFirst3x.3d6161b3.jpg",At="/assets/newsSecond.a74c908d.jpg",ss="/assets/newsSecond2x.bdbc067b.jpg",ls="/assets/newsSecond3x.8b55f0ad.jpg",Bt="/assets/newsThird.f38330fa.jpg",is="/assets/newsThird2x.123c024c.jpg",ns="/assets/newsThird3x.045f561f.jpg",os="/assets/design.6507045e.svg",cs="/assets/branding.bbcf45c8.svg",as="/assets/logoDesign.1932939c.svg",rs="/assets/partnerFirst.8a6580ec.svg",_s="/assets/partnerSecond.3dd2d05e.svg",us="/assets/partnerThird.4bc1a7f4.svg",fs="/assets/partnerFourth.a7b437f4.svg",ms="/assets/partnerFifth.297c3221.svg",ds="/assets/facebook.6f6ce02c.svg",hs="/assets/twitter.cb687b6a.svg",vs="/assets/youtube.4851fa60.svg",gs="/assets/linkedin.a5cc2062.svg",ps="/assets/basketball.799f399e.svg";function ys(s){let i,n,f,c,a,m,te,w,r,p,d,h,O,K,Ie,se,De,le,Ue,ie,x,X,Ge,Re,ne,Je,oe,Ve,ce,k,z,We,Ke,ae,Xe,re,qe,$,_e,ze,ue,Qe,v,fe,q,Ye,Ze,me,A,et,tt,de,B,st,lt,he,M,it,nt,ve,N,ot,Ae,y,ge,ct,pe,at,j,P,F,rt,_t,ye,ut,H,L,ft,mt,be,dt,I,E,ht,vt,we,gt,Q,Be,C,Y,pt,xe,yt,D,g,ke,U,bt,wt,$e,G,xt,kt,Ce,R,$t,Ct,Se,J,St,Tt,Te,V,Ot,jt,Oe;return{c(){i=l("div"),n=l("img"),c=o(),a=l("section"),m=l("h2"),m.textContent="Our services",te=o(),w=l("p"),w.textContent=`Voluptas sit aspernatur te natus accusan maiores alias consequatur aut
    equatur aut perferendi.`,r=o(),p=l("ul"),d=l("li"),h=l("a"),O=l("img"),Ie=o(),se=l("h3"),se.textContent="UI/UX design",De=o(),le=l("p"),le.textContent=`Perferendis doloribus asperiores repellat quia voluptas aspernatur te
          natus accusan maiores alias consequatur aut aut.`,Ue=o(),ie=l("li"),x=l("a"),X=l("img"),Re=o(),ne=l("h3"),ne.textContent="Branding",Je=o(),oe=l("p"),oe.textContent=`Asperiores repellat quia voluptas aut aspernatur te natus accusan
          maiores alias consequatur aut perferendis dolor.`,Ve=o(),ce=l("li"),k=l("a"),z=l("img"),Ke=o(),ae=l("h3"),ae.textContent="Logo design",Xe=o(),re=l("p"),re.textContent=`Maiores alias consequatur aut aut repellat perferendi doloribus
          asperiores voluptas aspernatur te natus accusan.`,qe=o(),$=l("section"),_e=l("h2"),_e.textContent="Our Clients",ze=o(),ue=l("p"),ue.textContent="We have worked with great clients for which we are very proud.",Qe=o(),v=l("ul"),fe=l("li"),q=l("img"),Ze=o(),me=l("li"),A=l("img"),tt=o(),de=l("li"),B=l("img"),lt=o(),he=l("li"),M=l("img"),nt=o(),ve=l("li"),N=l("img"),Ae=o(),y=l("section"),ge=l("h2"),ge.textContent="Latest News",ct=o(),pe=l("p"),pe.textContent="Accusan maiores alias conseaut equatur aut perferendi.",at=o(),j=l("ul"),P=l("li"),F=l("img"),_t=o(),ye=l("div"),ye.innerHTML=`<p class="news-list__date">Design / Sept 12, 2022</p> 
        <h3 class="news-list__title svelte-cyo4h1">Graphic Designing Useful Tips &amp; Best Practices</h3>`,ut=o(),H=l("li"),L=l("img"),mt=o(),be=l("div"),be.innerHTML=`<p class="news-list__date">Branding / Sept 12, 2022</p> 
        <h3 class="news-list__title svelte-cyo4h1">Best way to do branding of digital products</h3>`,dt=o(),I=l("li"),E=l("img"),vt=o(),we=l("div"),we.innerHTML=`<p class="news-list__date">Graphic Design / Sept 12, 2022</p> 
        <h3 class="news-list__title svelte-cyo4h1">Top 10 graphic designs review in 2022</h3>`,gt=o(),Q=l("a"),Q.textContent="view all blogs",Be=o(),C=l("footer"),Y=l("a"),Y.innerHTML='<h2 class="logo__text svelte-cyo4h1">Portfo.</h2>',pt=o(),xe=l("ul"),xe.innerHTML=`<li class="footer-item svelte-cyo4h1"><form class="footer-form svelte-cyo4h1"><label class="footer-form__label svelte-cyo4h1" for="email"><p class="footer-item__text">Subscribe to newsletter to get some updates related with branding,
            designs and more.</p> 
          <input class="footer-form__input svelte-cyo4h1" type="email" placeholder="Write your email adress"/></label> 
        <button class="footer-form__button svelte-cyo4h1" type="submit">SUBSCRIBE</button></form></li> 
    <li class="footer-item svelte-cyo4h1"><nav class="site-nav"><ul class="site-nav__list svelte-cyo4h1"><li class="site-nav__item"><a class="site-nav__link" href=" ">HOME</a></li> 
          <li class="site-nav__item"><a class="site-nav__link" href=" ">ABOUT</a></li> 
          <li class="site-nav__item"><a class="site-nav__link" href=" ">SERVICES</a></li> 
          <li class="site-nav__item"><a class="site-nav__link" href=" ">PORTFOLIO</a></li></ul></nav></li> 
    <li class="footer-item svelte-cyo4h1"><nav class="auth-nav"><ul class="auth-nav__list svelte-cyo4h1"><li class="auth-nav__item"><a class="auth-nav__link" href=" ">BLOGS</a></li> 
          <li class="auth-nav__item"><a class="auth-nav__link" href=" ">CONTACT</a></li></ul></nav></li> 
    <li class="footer-item svelte-cyo4h1"><div class="footer-mail svelte-cyo4h1"><p class="footer-mail__text">Just feel free to contact if you wanna collaborate with me, or simply
          have a conversation.</p> 
        <a class="footer-mail__adress svelte-cyo4h1" href="mailto:templatesjungle@gmail.com">templatesjungle@gmail.com</a></div></li>`,yt=o(),D=l("div"),g=l("ul"),ke=l("li"),U=l("img"),wt=o(),$e=l("li"),G=l("img"),kt=o(),Ce=l("li"),R=l("img"),Ct=o(),Se=l("li"),J=l("img"),Tt=o(),Te=l("li"),V=l("img"),jt=o(),Oe=l("p"),Oe.textContent="\xA92022, Portfo by TemplatesJungle.",e(n,"class","arrow svelte-cyo4h1"),u(n.src,f=Zt)||e(n,"src",f),e(n,"alt","arrow"),e(i,"class","main-picture-container svelte-cyo4h1"),e(m,"class","service-section__header"),e(w,"class","service-section__text svelte-cyo4h1"),u(O.src,K=os)||e(O,"src",K),e(O,"alt","design"),e(se,"class","service-list__title svelte-cyo4h1"),e(le,"class","service-list__text svelte-cyo4h1"),e(h,"class","service-list__link svelte-cyo4h1"),e(h,"href"," "),e(d,"class","service-list__item svelte-cyo4h1"),u(X.src,Ge=cs)||e(X,"src",Ge),e(X,"alt","branding"),e(ne,"class","service-list__title svelte-cyo4h1"),e(oe,"class","service-list__text svelte-cyo4h1"),e(x,"class","service-list__link svelte-cyo4h1"),e(x,"href"," "),e(ie,"class","service-list__item svelte-cyo4h1"),u(z.src,We=as)||e(z,"src",We),e(z,"alt","logo design"),e(ae,"class","service-list__title svelte-cyo4h1"),e(re,"class","service-list__text svelte-cyo4h1"),e(k,"class","service-list__link svelte-cyo4h1"),e(k,"href"," "),e(ce,"class","service-list__item svelte-cyo4h1"),e(p,"class","service-list svelte-cyo4h1"),e(a,"class","service-section svelte-cyo4h1"),e(_e,"class","client-section__header"),e(ue,"class","client-section__text svelte-cyo4h1"),e(q,"class","client-list__logo"),u(q.src,Ye=rs)||e(q,"src",Ye),e(q,"alt","first partner"),e(fe,"class","client-list__item svelte-cyo4h1"),e(A,"class","client-list__logo"),u(A.src,et=_s)||e(A,"src",et),e(A,"alt","second partner"),e(me,"class","client-list__item svelte-cyo4h1"),e(B,"class","client-list__logo"),u(B.src,st=us)||e(B,"src",st),e(B,"alt","third partner"),e(de,"class","client-list__item svelte-cyo4h1"),e(M,"class","client-list__logo"),u(M.src,it=fs)||e(M,"src",it),e(M,"alt","fourth partner"),e(he,"class","client-list__item svelte-cyo4h1"),e(N,"class","client-list__logo"),u(N.src,ot=ms)||e(N,"src",ot),e(N,"alt","fifth partner"),e(ve,"class","client-list__item svelte-cyo4h1"),e(v,"class","client-list svelte-cyo4h1"),e($,"class","client-section svelte-cyo4h1"),e(ge,"class","news-section__header"),e(pe,"class","news-section__text svelte-cyo4h1"),e(F,"class","news-list__image svelte-cyo4h1"),e(F,"srcset",qt+" 1x, "+es+" 2x, "+ts+" 3x"),u(F.src,rt=qt)||e(F,"src",rt),e(F,"alt",""),e(ye,"class","news-list__information svelte-cyo4h1"),e(P,"class","news-list__item svelte-cyo4h1"),e(L,"class","news-list__image svelte-cyo4h1"),e(L,"srcset",At+" 1x, "+ss+" 2x, "+ls+" 3x"),u(L.src,ft=At)||e(L,"src",ft),e(L,"alt",""),e(be,"class","news-list__information svelte-cyo4h1"),e(H,"class","news-list__item svelte-cyo4h1"),e(E,"class","news-list__image svelte-cyo4h1"),e(E,"srcset",Bt+" 1x, "+is+" 2x, "+ns+" 3x"),u(E.src,ht=Bt)||e(E,"src",ht),e(E,"alt",""),e(we,"class","news-list__information svelte-cyo4h1"),e(I,"class","news-list__item svelte-cyo4h1"),e(j,"class","news-list svelte-cyo4h1"),e(Q,"class","news-section__button svelte-cyo4h1"),e(Q,"href"," "),e(y,"class","news-section svelte-cyo4h1"),e(Y,"class","logo svelte-cyo4h1"),e(Y,"href"," "),e(xe,"class","footer-list svelte-cyo4h1"),e(U,"class","bottom-footer__icon"),u(U.src,bt=ds)||e(U,"src",bt),e(U,"alt","facebook logo"),e(ke,"class","bottom-footer__item"),e(G,"class","bottom-footer__icon"),u(G.src,xt=hs)||e(G,"src",xt),e(G,"alt","twitter logo"),e($e,"class","bottom-footer__item"),e(R,"class","bottom-footer__icon"),u(R.src,$t=gs)||e(R,"src",$t),e(R,"alt","linkedin logo"),e(Ce,"class","bottom-footer__item"),e(J,"class","bottom-footer__icon"),u(J.src,St=ps)||e(J,"src",St),e(J,"alt","basketball logo"),e(Se,"class","bottom-footer__item"),e(V,"class","bottom-footer__icon"),u(V.src,Ot=vs)||e(V,"src",Ot),e(V,"alt","youtube logo"),e(Te,"class","bottom-footer__item"),e(g,"class","bottom-footer__list svelte-cyo4h1"),e(Oe,"class","bottom-footer__text"),e(D,"class","bottom-footer svelte-cyo4h1"),e(C,"class","footer svelte-cyo4h1")},m(_,S){T(_,i,S),t(i,n),T(_,c,S),T(_,a,S),t(a,m),t(a,te),t(a,w),t(a,r),t(a,p),t(p,d),t(d,h),t(h,O),t(h,Ie),t(h,se),t(h,De),t(h,le),t(p,Ue),t(p,ie),t(ie,x),t(x,X),t(x,Re),t(x,ne),t(x,Je),t(x,oe),t(p,Ve),t(p,ce),t(ce,k),t(k,z),t(k,Ke),t(k,ae),t(k,Xe),t(k,re),T(_,qe,S),T(_,$,S),t($,_e),t($,ze),t($,ue),t($,Qe),t($,v),t(v,fe),t(fe,q),t(v,Ze),t(v,me),t(me,A),t(v,tt),t(v,de),t(de,B),t(v,lt),t(v,he),t(he,M),t(v,nt),t(v,ve),t(ve,N),T(_,Ae,S),T(_,y,S),t(y,ge),t(y,ct),t(y,pe),t(y,at),t(y,j),t(j,P),t(P,F),t(P,_t),t(P,ye),t(j,ut),t(j,H),t(H,L),t(H,mt),t(H,be),t(j,dt),t(j,I),t(I,E),t(I,vt),t(I,we),t(y,gt),t(y,Q),T(_,Be,S),T(_,C,S),t(C,Y),t(C,pt),t(C,xe),t(C,yt),t(C,D),t(D,g),t(g,ke),t(ke,U),t(g,wt),t(g,$e),t($e,G),t(g,kt),t(g,Ce),t(Ce,R),t(g,Ct),t(g,Se),t(Se,J),t(g,Tt),t(g,Te),t(Te,V),t(D,jt),t(D,Oe)},p:W,i:W,o:W,d(_){_&&b(i),_&&b(c),_&&b(a),_&&b(qe),_&&b($),_&&b(Ae),_&&b(y),_&&b(Be),_&&b(C)}}}class bs extends Yt{constructor(i){super(),Qt(this,i,null,ys,Ht,{})}}new bs({target:document.getElementById("app")});