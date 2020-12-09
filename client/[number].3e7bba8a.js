import{S as e,i as t,s as n,r,j as a,e as s,t as c,F as l,d as i,k as o,c as u,a as h,b as d,f,g as m,h as $,l as p,m as g,o as v,p as E,q as b,G as w,E as D,u as T,n as _,v as L,w as A,x as S,y as O,z as y,A as x}from"./client.b1279680.js";import{c as H,a as C,h as M,L as R}from"./createOctokit.c22d1f3c.js";function I(e,t,n){const r=e.slice();return r[9]=t[n],r}function N(e){let t,n,l,p,g,v=e[4].title+"",E=("closed"===e[4].state?r.i18n.incidentFixed:r.i18n.incidentOngoing)+"";return{c(){t=c(v),n=a(),l=s("span"),p=c(E),this.h()},l(e){t=d(e,v),n=o(e),l=u(e,"SPAN",{class:!0});var r=h(l);p=d(r,E),r.forEach(i),this.h()},h(){f(l,"class",g=D(`tag ${e[4].state}`)+" svelte-4o16l6")},m(e,r){m(e,t,r),m(e,n,r),m(e,l,r),$(l,p)},p(e,n){16&n&&v!==(v=e[4].title+"")&&T(t,v),16&n&&E!==(E=("closed"===e[4].state?r.i18n.incidentFixed:r.i18n.incidentOngoing)+"")&&T(p,E),16&n&&g!==(g=D(`tag ${e[4].state}`)+" svelte-4o16l6")&&f(l,"class",g)},d(e){e&&i(t),e&&i(n),e&&i(l)}}}function F(e){let t,n=r.i18n.incidentDetails+"";return{c(){t=c(n)},l(e){t=d(e,n)},m(e,n){m(e,t,n)},p:_,d(e){e&&i(t)}}}function P(e){let t,n,l,p,g,v,E,b,w,D,S,O,y,x,H,C,M,R,N,F=r.i18n.incidentOpenedAt+"",P=new Date(e[4].created_at).toLocaleString()+"",U=r.i18n.incidentSubscribe+"",k=r.i18n.incidentViewOnGitHub+"",B=e[4].closed_at&&V(e),G=e[3],q=[];for(let t=0;t<G.length;t+=1)q[t]=j(I(e,G,t));return{c(){t=s("div"),n=s("dl"),l=s("dt"),p=c(F),g=s("dd"),v=c(P),B&&B.c(),E=a(),b=s("div"),w=s("p"),D=s("a"),S=c(U),y=a(),x=s("p"),H=s("a"),C=c(k),R=a();for(let e=0;e<q.length;e+=1)q[e].c();N=L(),this.h()},l(e){t=u(e,"DIV",{class:!0});var r=h(t);n=u(r,"DL",{});var a=h(n);l=u(a,"DT",{});var s=h(l);p=d(s,F),s.forEach(i),g=u(a,"DD",{});var c=h(g);v=d(c,P),c.forEach(i),B&&B.l(a),a.forEach(i),E=o(r),b=u(r,"DIV",{class:!0});var f=h(b);w=u(f,"P",{class:!0});var m=h(w);D=u(m,"A",{href:!0});var $=h(D);S=d($,U),$.forEach(i),m.forEach(i),y=o(f),x=u(f,"P",{class:!0});var T=h(x);H=u(T,"A",{href:!0});var _=h(H);C=d(_,k),_.forEach(i),T.forEach(i),f.forEach(i),r.forEach(i),R=o(e);for(let t=0;t<q.length;t+=1)q[t].l(e);N=L(),this.h()},h(){f(D,"href",O=`https://github.com/${r.owner}/${r.repo}/issues/${e[0]}`),f(w,"class","svelte-4o16l6"),f(H,"href",M=`https://github.com/${r.owner}/${r.repo}/issues/${e[0]}`),f(x,"class","svelte-4o16l6"),f(b,"class","r svelte-4o16l6"),f(t,"class","f")},m(e,r){m(e,t,r),$(t,n),$(n,l),$(l,p),$(n,g),$(g,v),B&&B.m(n,null),$(t,E),$(t,b),$(b,w),$(w,D),$(D,S),$(b,y),$(b,x),$(x,H),$(H,C),m(e,R,r);for(let t=0;t<q.length;t+=1)q[t].m(e,r);m(e,N,r)},p(e,t){if(16&t&&P!==(P=new Date(e[4].created_at).toLocaleString()+"")&&T(v,P),e[4].closed_at?B?B.p(e,t):(B=V(e),B.c(),B.m(n,null)):B&&(B.d(1),B=null),1&t&&O!==(O=`https://github.com/${r.owner}/${r.repo}/issues/${e[0]}`)&&f(D,"href",O),1&t&&M!==(M=`https://github.com/${r.owner}/${r.repo}/issues/${e[0]}`)&&f(H,"href",M),40&t){let n;for(G=e[3],n=0;n<G.length;n+=1){const r=I(e,G,n);q[n]?q[n].p(r,t):(q[n]=j(r),q[n].c(),q[n].m(N.parentNode,N))}for(;n<q.length;n+=1)q[n].d(1);q.length=G.length}},i:_,o:_,d(e){e&&i(t),B&&B.d(),e&&i(R),A(q,e),e&&i(N)}}}function U(e){let t,n;return t=new R({}),{c(){S(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,r){y(t,e,r),n=!0},p:_,i(e){n||(E(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){x(t,e)}}}function V(e){let t,n,a,l,o=r.i18n.incidentClosedAt+"",f=new Date(e[4].closed_at).toLocaleString()+"";return{c(){t=s("dt"),n=c(o),a=s("dd"),l=c(f)},l(e){t=u(e,"DT",{});var r=h(t);n=d(r,o),r.forEach(i),a=u(e,"DD",{});var s=h(a);l=d(s,f),s.forEach(i)},m(e,r){m(e,t,r),$(t,n),m(e,a,r),$(a,l)},p(e,t){16&t&&f!==(f=new Date(e[4].closed_at).toLocaleString()+"")&&T(l,f)},d(e){e&&i(t),e&&i(a)}}}function j(e){let t,n,c,l,d,p=e[5](e[9].body)+"",g=r.i18n.incidentCommentSummary.replace(/\$DATE/,`<a href=${e[9].html_url}>${new Date(e[9].created_at).toLocaleString()}</a>`).replace(/\$AUTHOR/,`<a href=${e[9].user.html_url}>@${e[9].user.login}</a>`)+"";return{c(){t=s("article"),n=s("p"),c=a(),l=s("div"),d=a(),this.h()},l(e){t=u(e,"ARTICLE",{});var r=h(t);n=u(r,"P",{class:!0}),h(n).forEach(i),c=o(r),l=u(r,"DIV",{}),h(l).forEach(i),d=o(r),r.forEach(i),this.h()},h(){f(n,"class","svelte-4o16l6")},m(e,r){m(e,t,r),$(t,n),n.innerHTML=p,$(t,c),$(t,l),l.innerHTML=g,$(t,d)},p(e,t){8&t&&p!==(p=e[5](e[9].body)+"")&&(n.innerHTML=p),8&t&&g!==(g=r.i18n.incidentCommentSummary.replace(/\$DATE/,`<a href=${e[9].html_url}>${new Date(e[9].created_at).toLocaleString()}</a>`).replace(/\$AUTHOR/,`<a href=${e[9].user.html_url}>@${e[9].user.login}</a>`)+"")&&(l.innerHTML=g)},d(e){e&&i(t)}}}function k(e){let t,n,b,w,D,T,_,L,A,S,O,y,x,H=r.i18n.incidentBack+"";function C(e,t){return e[2]?F:N}document.title=t=r.i18n.incidentTitle.replace("$NUMBER",e[0]);let M=C(e),R=M(e);const I=[U,P],V=[];function j(e,t){return e[1]?0:1}return T=j(e),_=V[T]=I[T](e),{c(){n=a(),b=s("h2"),R.c(),w=a(),D=s("section"),_.c(),L=a(),A=s("footer"),S=s("a"),O=c(H),this.h()},l(e){l('[data-svelte="svelte-1txp228"]',document.head).forEach(i),n=o(e),b=u(e,"H2",{class:!0});var t=h(b);R.l(t),t.forEach(i),w=o(e),D=u(e,"SECTION",{});var r=h(D);_.l(r),r.forEach(i),L=o(e),A=u(e,"FOOTER",{class:!0});var a=h(A);S=u(a,"A",{href:!0});var s=h(S);O=d(s,H),s.forEach(i),a.forEach(i),this.h()},h(){f(b,"class","svelte-4o16l6"),f(S,"href",y=r.path),f(A,"class","svelte-4o16l6")},m(e,t){m(e,n,t),m(e,b,t),R.m(b,null),m(e,w,t),m(e,D,t),V[T].m(D,null),m(e,L,t),m(e,A,t),$(A,S),$(S,O),x=!0},p(e,[n]){(!x||1&n)&&t!==(t=r.i18n.incidentTitle.replace("$NUMBER",e[0]))&&(document.title=t),M===(M=C(e))&&R?R.p(e,n):(R.d(1),R=M(e),R&&(R.c(),R.m(b,null)));let a=T;T=j(e),T===a?V[T].p(e,n):(p(),g(V[a],1,1,(()=>{V[a]=null})),v(),_=V[T],_?_.p(e,n):(_=V[T]=I[T](e),_.c()),E(_,1),_.m(D,null))},i(e){x||(E(_),x=!0)},o(e){g(_),x=!1},d(e){e&&i(n),e&&i(b),R.d(),e&&i(w),e&&i(D),V[T].d(),e&&i(L),e&&i(A)}}}function B(e,t,n){let{number:a}=t,s=w,c=!0,l=!0;const i=H(),o=r.owner,u=r.repo;let h=[],d={};return b((async()=>{try{n(4,d=(await C(`issue-${o}-${u}-${a}`,(()=>i.issues.get({owner:o,repo:u,issue_number:a,sort:"created",direction:"desc"})))).data)}catch(e){M(e)}n(2,l=!1);try{n(3,h=(await C(`issue-comments-${o}-${u}-${a}`,(()=>i.issues.listComments({owner:o,repo:u,issue_number:a})))).data.reverse())}catch(e){M(e)}n(1,c=!1)})),e.$$set=e=>{"number"in e&&n(0,a=e.number)},[a,c,l,h,d,s]}class G extends e{constructor(e){super(),t(this,e,B,k,n,{number:0})}}function q(e){let t,n;return t=new G({props:{number:e[0]}}),{c(){S(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,r){y(t,e,r),n=!0},p(e,[n]){const r={};1&n&&(r.number=e[0]),t.$set(r)},i(e){n||(E(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){x(t,e)}}}async function z(e){const{number:t}=e.params;return{number:t}}function J(e,t,n){let{number:r}=t;return e.$$set=e=>{"number"in e&&n(0,r=e.number)},[r]}export default class extends e{constructor(e){super(),t(this,e,J,q,n,{number:0})}}export{z as preload};
