import{S as _t,i as xt,s as kt,k as s,a as W,q as y,l as c,m as d,c as H,r as w,h as r,n as m,J as Et,b as C,D as t,H as vt,K as Wt,L as wt,u as gt}from"../chunks/index.4f1fc032.js";function bt(u,e,a){const f=u.slice();return f[7]=e[a],f[9]=a,f}function Ht(u){let e,a,f,v,h=u[3],o=[];for(let n=0;n<h.length;n+=1)o[n]=yt(bt(u,h,n));return{c(){for(let n=0;n<o.length;n+=1)o[n].c();e=W(),a=s("button"),f=s("h1"),v=y("Thank you for your support. Beyond Heroes awaits!"),this.h()},l(n){for(let p=0;p<o.length;p+=1)o[p].l(n);e=H(n),a=c(n,"BUTTON",{class:!0,type:!0});var l=d(a);f=c(l,"H1",{});var i=d(f);v=w(i,"Thank you for your support. Beyond Heroes awaits!"),i.forEach(r),l.forEach(r),this.h()},h(){m(a,"class","stuff-item disabled"),m(a,"type","button")},m(n,l){for(let i=0;i<o.length;i+=1)o[i]&&o[i].m(n,l);C(n,e,l),C(n,a,l),t(a,f),t(f,v)},p(n,l){if(l&31){h=n[3];let i;for(i=0;i<h.length;i+=1){const p=bt(n,h,i);o[i]?o[i].p(p,l):(o[i]=yt(p),o[i].c(),o[i].m(e.parentNode,e))}for(;i<o.length;i+=1)o[i].d(1);o.length=h.length}},d(n){Wt(o,n),n&&r(e),n&&r(a)}}}function It(u){let e,a,f,v,h,o,n,l,i,p,B;return{c(){e=s("div"),a=s("div"),f=s("h1"),v=y(u[0]),h=W(),o=s("button"),n=W(),l=s("p"),i=y(u[1]),this.h()},l(g){e=c(g,"DIV",{class:!0});var b=d(e);a=c(b,"DIV",{class:!0});var _=d(a);f=c(_,"H1",{});var j=d(f);v=w(j,u[0]),j.forEach(r),h=H(_),o=c(_,"BUTTON",{class:!0}),d(o).forEach(r),_.forEach(r),n=H(b),l=c(b,"P",{});var T=d(l);i=w(T,u[1]),T.forEach(r),b.forEach(r),this.h()},h(){m(o,"class","close"),m(a,"class","flex"),m(e,"class","flex-col")},m(g,b){C(g,e,b),t(e,a),t(a,f),t(f,v),t(a,h),t(a,o),t(e,n),t(e,l),t(l,i),p||(B=wt(o,"click",u[5]),p=!0)},p(g,b){b&1&&gt(v,g[0]),b&2&&gt(i,g[1])},d(g){g&&r(e),p=!1,B()}}}function yt(u){let e,a,f=u[7]+"",v,h,o;function n(){return u[6](u[9])}return{c(){e=s("button"),a=s("h1"),v=y(f),this.h()},l(l){e=c(l,"BUTTON",{class:!0,type:!0});var i=d(e);a=c(i,"H1",{});var p=d(a);v=w(p,f),p.forEach(r),i.forEach(r),this.h()},h(){m(e,"class","stuff-item"),m(e,"type","button")},m(l,i){C(l,e,i),t(e,a),t(a,v),h||(o=wt(e,"click",n),h=!0)},p(l,i){u=l},d(l){l&&r(e),h=!1,o()}}}function zt(u){let e,a,f,v,h,o,n,l,i,p,B,g,b,_,j,T,I,P,V,M,R,J,Y,Q,z,O,F,X,Z,U,$,tt,D,et,A,nt;function at(k,E){return k[2]===!0?It:Ht}let N=at(u),x=N(u);return{c(){e=s("div"),a=s("img"),v=W(),h=s("div"),o=s("nav"),n=s("div"),l=s("h1"),i=s("a"),p=y("Join Us"),B=W(),g=s("p"),b=y("Join our war efforts on Discord or by "),_=s("a"),j=y("emailing us!"),T=W(),I=s("div"),P=s("h1"),V=s("a"),M=y("Road to Victory"),R=W(),J=s("p"),Y=y(`Explore our development roadmap, what has been done, what will be done, and who is in charge
					of doing it!`),Q=W(),z=s("div"),O=s("h1"),F=s("a"),X=y("Who are we?"),Z=W(),U=s("p"),$=y("Gather some intel about our soldiers and learn a little bit about us!"),tt=W(),D=s("div"),x.c(),et=W(),A=s("style"),nt=y(`h1 {
			color: #2B1F0F;
			margin: 4px;
			font-weight: 700;
			font-family: "Playfair Display", serif;
		}
		p {
			margin: 2px;
			color: #2B1F0F;
			font-family: "Crimson Pro", serif;
		}
		
		nav>div>h1 {
			font-size: 1.8vw;
		}

		nav>div>p {
			font-size: 1.5vw;
		}

		a:visited, a:link, a {
			font-weight: bold;
			color: #843219;
			text-decoration: none;
		}

		a:hover {
			text-decoration: underline;
		}

		.stuff-item {
			height: 45%;
			width: 30%;
			display: flex;
			flex-direction: column;
			border: dashed black 0.1vw;
			justify-content: center;
			align-items: center;
		}
		button {
			background-color: rgba(0,0,0,0);
		}
		button:hover {
			background-color: rgba(0,0,0,0.07);
		}
		button.disabled:hover {
			background-color: rgba(0,0,0,0);
		}
		.stuff-item > h1 {
			margin-top: auto;
 			margin-bottom: auto;
			font-size: 1.1vw;
		}

		nav, .stuff {
			display: flex;
			justify-content: space-around;
		}
		.content {
			position: absolute;
			top: 37%;
			left: 30%;
			width: 46%;
			height: 44%;
			transform: rotate(-3deg);
			font-size: 1.1vw;
			text-align: justify;
			display: flex;
			flex-direction: column;
		}

		h1 {
			text-align: center;
		}

		.stuff {
			height: 100%;
		}

		.nav-col {
			width: 30%
		}

		.content nav p {
			font-size: 0.9vw;
			font-weight: 500;
		}

		.bg {
			position: relative;
			top: 0;
			left: 0;
			width: 100%;
			margin: 0;
		}
		.bg-img {
			width: 100%;
			height: 100%;
		}

		.stuff {
			display: flex;
			flex-wrap: wrap;
		}

		@media (max-width: 740px) {
			.bg {
				background-size: 740px; /* Force the image to its minimum width */
			}
		}


		button.close {
			border: none;
			color: #843219;
			position: relative;
		}
		button.close:hover {
			background-color: rgba(0,0,0,0);
		}

		button.close::before {
			content: "\\2718";
			position: relative;
			font-size: 2vw;
		}

		button.close:hover::before{
			content: "\\2718";
			position: relative;
			text-decoration: underline;
		}

		.flex {
			display: flex;
			justify-content: space-between;
		}

		.col-flex {
			display: flex;
			justify-content: top;
			flex-direction: column;
		}`),this.h()},l(k){e=c(k,"DIV",{class:!0});var E=d(e);a=c(E,"IMG",{class:!0,alt:!0,src:!0}),v=H(E),h=c(E,"DIV",{class:!0});var S=d(h);o=c(S,"NAV",{});var G=d(o);n=c(G,"DIV",{class:!0});var q=d(n);l=c(q,"H1",{});var it=d(l);i=c(it,"A",{href:!0});var rt=d(i);p=w(rt,"Join Us"),rt.forEach(r),it.forEach(r),B=H(q),g=c(q,"P",{});var ot=d(g);b=w(ot,"Join our war efforts on Discord or by "),_=c(ot,"A",{href:!0});var lt=d(_);j=w(lt,"emailing us!"),lt.forEach(r),ot.forEach(r),q.forEach(r),T=H(G),I=c(G,"DIV",{class:!0});var K=d(I);P=c(K,"H1",{});var st=d(P);V=c(st,"A",{href:!0});var ct=d(V);M=w(ct,"Road to Victory"),ct.forEach(r),st.forEach(r),R=H(K),J=c(K,"P",{});var dt=d(J);Y=w(dt,`Explore our development roadmap, what has been done, what will be done, and who is in charge
					of doing it!`),dt.forEach(r),K.forEach(r),Q=H(G),z=c(G,"DIV",{class:!0});var L=d(z);O=c(L,"H1",{});var ht=d(O);F=c(ht,"A",{href:!0});var ft=d(F);X=w(ft,"Who are we?"),ft.forEach(r),ht.forEach(r),Z=H(L),U=c(L,"P",{});var ut=d(U);$=w(ut,"Gather some intel about our soldiers and learn a little bit about us!"),ut.forEach(r),L.forEach(r),G.forEach(r),tt=H(S),D=c(S,"DIV",{class:!0});var pt=d(D);x.l(pt),pt.forEach(r),S.forEach(r),et=H(E),A=c(E,"STYLE",{});var mt=d(A);nt=w(mt,`h1 {
			color: #2B1F0F;
			margin: 4px;
			font-weight: 700;
			font-family: "Playfair Display", serif;
		}
		p {
			margin: 2px;
			color: #2B1F0F;
			font-family: "Crimson Pro", serif;
		}
		
		nav>div>h1 {
			font-size: 1.8vw;
		}

		nav>div>p {
			font-size: 1.5vw;
		}

		a:visited, a:link, a {
			font-weight: bold;
			color: #843219;
			text-decoration: none;
		}

		a:hover {
			text-decoration: underline;
		}

		.stuff-item {
			height: 45%;
			width: 30%;
			display: flex;
			flex-direction: column;
			border: dashed black 0.1vw;
			justify-content: center;
			align-items: center;
		}
		button {
			background-color: rgba(0,0,0,0);
		}
		button:hover {
			background-color: rgba(0,0,0,0.07);
		}
		button.disabled:hover {
			background-color: rgba(0,0,0,0);
		}
		.stuff-item > h1 {
			margin-top: auto;
 			margin-bottom: auto;
			font-size: 1.1vw;
		}

		nav, .stuff {
			display: flex;
			justify-content: space-around;
		}
		.content {
			position: absolute;
			top: 37%;
			left: 30%;
			width: 46%;
			height: 44%;
			transform: rotate(-3deg);
			font-size: 1.1vw;
			text-align: justify;
			display: flex;
			flex-direction: column;
		}

		h1 {
			text-align: center;
		}

		.stuff {
			height: 100%;
		}

		.nav-col {
			width: 30%
		}

		.content nav p {
			font-size: 0.9vw;
			font-weight: 500;
		}

		.bg {
			position: relative;
			top: 0;
			left: 0;
			width: 100%;
			margin: 0;
		}
		.bg-img {
			width: 100%;
			height: 100%;
		}

		.stuff {
			display: flex;
			flex-wrap: wrap;
		}

		@media (max-width: 740px) {
			.bg {
				background-size: 740px; /* Force the image to its minimum width */
			}
		}


		button.close {
			border: none;
			color: #843219;
			position: relative;
		}
		button.close:hover {
			background-color: rgba(0,0,0,0);
		}

		button.close::before {
			content: "\\2718";
			position: relative;
			font-size: 2vw;
		}

		button.close:hover::before{
			content: "\\2718";
			position: relative;
			text-decoration: underline;
		}

		.flex {
			display: flex;
			justify-content: space-between;
		}

		.col-flex {
			display: flex;
			justify-content: top;
			flex-direction: column;
		}`),mt.forEach(r),E.forEach(r),this.h()},h(){m(a,"class","bg-img"),m(a,"alt","newspaper background"),Et(a.src,f="bg.png")||m(a,"src",f),m(i,"href",Dt),m(_,"href","mailto:BeyondHeroesTheGame@gmail.com"),m(n,"class","nav-col"),m(V,"href","/"),m(I,"class","nav-col"),m(F,"href","/"),m(z,"class","nav-col"),m(D,"class","stuff"),m(h,"class","content"),m(e,"class","bg")},m(k,E){C(k,e,E),t(e,a),t(e,v),t(e,h),t(h,o),t(o,n),t(n,l),t(l,i),t(i,p),t(n,B),t(n,g),t(g,b),t(g,_),t(_,j),t(o,T),t(o,I),t(I,P),t(P,V),t(V,M),t(I,R),t(I,J),t(J,Y),t(o,Q),t(o,z),t(z,O),t(O,F),t(F,X),t(z,Z),t(z,U),t(U,$),t(h,tt),t(h,D),x.m(D,null),t(e,et),t(e,A),t(A,nt)},p(k,[E]){N===(N=at(k))&&x?x.p(k,E):(x.d(1),x=N(k),x&&(x.c(),x.m(D,null)))},i:vt,o:vt,d(k){k&&r(e),x.d()}}}const Dt="https://discord.gg/gnnfKKuumg";function Bt(u,e,a){const f=["Welcome to Beyond Heroes!","What is Beyond Heroes?","What can you expect?","How can you get involved?","Spread the Word!"],v=["Beyond Heroes aims to create an exciting World War gaming experience inspired by 'Heroes & Generals' but without the issues of excessive monetization and pay-to-win mechanics. Our goal is to provide the same immersive and challenging game that is accessible to all players. Through strategic gameplay that made HnG so interesting. War, and balanced mechanics, our game aims to deliver a fun and rewarding experience that appeals to a wide range of players. We value our community and strive to provide a respectful and enjoyable environment that fosters teamwork. camaraderie, and sportsmanship. Our mission is to create a game that honors the bravery and sacrifice of those who fought in World War II while also providing a thrilling and engaging gaming experience for players around the world.","Beyond Heroes is a fan project dedicated to recreating the immersive World War II experience we all loved in the original game but without the issues of excessive monetization and other	frustrating problems. Our team is committed to building a game that truly puts the players first and keeps the spirit of the original alive.",`Immersive WWII Setting: Get yourself in the chaos and heroism of World War II with meticulously recreated battlefields, weapons, and vehicles.
Community-Driven Development: We value your feedback and will actively involve the community in shaping the game. Your voice matters! Engaging Multiplayer Modes: Experience epic battles across diverse game modes, whether you prefer tactical teamwork or intense solo action.
Regular Updates: Count on us to deliver consistent updates, bug fixes, and exciting content to keep the game fresh and exciting. (hopefully)`,"We're currently seeking passionate individuals who share our love for Heroes & Generals. Whether you're a skilled developer, talented artist, or an avid tester, we want you to be part of this	amazing journey! Join our dedicated community on Discord to learn more about available roles and how you can contribute.","Help us bring this project to life by sharing the news with your fellow Heroes & Generals enthusiasts. Let's come together and build the game we've all been dreaming of!"];let h,o,n=!1;return[h,o,n,f,v,()=>a(2,n=!1),p=>{a(0,h=f[p]),a(1,o=v[p]),a(2,n=!0)}]}class Tt extends _t{constructor(e){super(),xt(this,e,Bt,zt,kt,{})}}export{Tt as component};
