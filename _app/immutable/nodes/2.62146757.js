import{S as _t,i as xt,s as kt,k as s,a as W,q as y,l as c,m as d,c as H,r as w,h as i,n as g,J as Et,b as S,G as t,H as gt,K as Wt,L as wt,u as vt}from"../chunks/index.e1be4839.js";function bt(f,e,r){const u=f.slice();return u[7]=e[r],u[9]=r,u}function Ht(f){let e,r,u,m,h=f[3],o=[];for(let n=0;n<h.length;n+=1)o[n]=yt(bt(f,h,n));return{c(){for(let n=0;n<o.length;n+=1)o[n].c();e=W(),r=s("button"),u=s("h1"),m=y("Thank you for your support. Beyond Heroes awaits!"),this.h()},l(n){for(let p=0;p<o.length;p+=1)o[p].l(n);e=H(n),r=c(n,"BUTTON",{class:!0});var l=d(r);u=c(l,"H1",{});var a=d(u);m=w(a,"Thank you for your support. Beyond Heroes awaits!"),a.forEach(i),l.forEach(i),this.h()},h(){g(r,"class","stuff-item disabled")},m(n,l){for(let a=0;a<o.length;a+=1)o[a]&&o[a].m(n,l);S(n,e,l),S(n,r,l),t(r,u),t(u,m)},p(n,l){if(l&31){h=n[3];let a;for(a=0;a<h.length;a+=1){const p=bt(n,h,a);o[a]?o[a].p(p,l):(o[a]=yt(p),o[a].c(),o[a].m(e.parentNode,e))}for(;a<o.length;a+=1)o[a].d(1);o.length=h.length}},d(n){Wt(o,n),n&&i(e),n&&i(r)}}}function It(f){let e,r,u,m,h,o,n,l,a,p,j;return{c(){e=s("div"),r=s("div"),u=s("h1"),m=y(f[0]),h=W(),o=s("button"),n=W(),l=s("p"),a=y(f[1]),this.h()},l(v){e=c(v,"DIV",{class:!0});var b=d(e);r=c(b,"DIV",{class:!0});var _=d(r);u=c(_,"H1",{});var T=d(u);m=w(T,f[0]),T.forEach(i),h=H(_),o=c(_,"BUTTON",{class:!0}),d(o).forEach(i),_.forEach(i),n=H(b),l=c(b,"P",{});var B=d(l);a=w(B,f[1]),B.forEach(i),b.forEach(i),this.h()},h(){g(o,"class","close"),g(r,"class","flex"),g(e,"class","flex-col")},m(v,b){S(v,e,b),t(e,r),t(r,u),t(u,m),t(r,h),t(r,o),t(e,n),t(e,l),t(l,a),p||(j=wt(o,"click",f[5]),p=!0)},p(v,b){b&1&&vt(m,v[0]),b&2&&vt(a,v[1])},d(v){v&&i(e),p=!1,j()}}}function yt(f){let e,r,u=f[7]+"",m,h,o;function n(){return f[6](f[9])}return{c(){e=s("button"),r=s("h1"),m=y(u),this.h()},l(l){e=c(l,"BUTTON",{class:!0});var a=d(e);r=c(a,"H1",{});var p=d(r);m=w(p,u),p.forEach(i),a.forEach(i),this.h()},h(){g(e,"class","stuff-item")},m(l,a){S(l,e,a),t(e,r),t(r,m),h||(o=wt(e,"click",n),h=!0)},p(l,a){f=l},d(l){l&&i(e),h=!1,o()}}}function zt(f){let e,r,u,m,h,o,n,l,a,p,j,v,b,_,T,B,I,A,V,R,F,J,Y,Q,z,O,G,X,Z,U,$,tt,D,et,N,nt;function at(k,E){return k[2]===!0?It:Ht}let q=at(f),x=q(f);return{c(){e=s("div"),r=s("img"),m=W(),h=s("div"),o=s("nav"),n=s("div"),l=s("h1"),a=s("a"),p=y("Join Us"),j=W(),v=s("p"),b=y("Join our war efforts on Discord or by "),_=s("a"),T=y("emailing us!"),B=W(),I=s("div"),A=s("h1"),V=s("a"),R=y("Road to Victory"),F=W(),J=s("p"),Y=y(`Explore our development roadmap, what has been done, what will be done, and who is in charge
					of doing it!`),Q=W(),z=s("div"),O=s("h1"),G=s("a"),X=y("Who are we?"),Z=W(),U=s("p"),$=y("Gather some intel about our soldiers and learn a little bit about us!"),tt=W(),D=s("div"),x.c(),et=W(),N=s("style"),nt=y(`@import url('https://fonts.googleapis.com/css2?family=Playfair&display=swap');
		p, h1 {
			color: #2A1E0E;
			font-family: "Playfair", serif;
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
			border: dashed black 0.1vh;
			justify-content: center;
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
			font-size: 1vw;
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
			font-size: 1vw;
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
			font-size: 0.7vw;
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
			font-size: 2.5vw;
		}

		.flex {
			display: flex;
			justify-content: space-between;
		}

		.col-flex {
			display: flex;
			flex-direction: column;
		}`),this.h()},l(k){e=c(k,"DIV",{class:!0});var E=d(e);r=c(E,"IMG",{class:!0,alt:!0,src:!0}),m=H(E),h=c(E,"DIV",{class:!0});var C=d(h);o=c(C,"NAV",{});var P=d(o);n=c(P,"DIV",{class:!0});var K=d(n);l=c(K,"H1",{});var rt=d(l);a=c(rt,"A",{href:!0});var it=d(a);p=w(it,"Join Us"),it.forEach(i),rt.forEach(i),j=H(K),v=c(K,"P",{});var ot=d(v);b=w(ot,"Join our war efforts on Discord or by "),_=c(ot,"A",{href:!0});var lt=d(_);T=w(lt,"emailing us!"),lt.forEach(i),ot.forEach(i),K.forEach(i),B=H(P),I=c(P,"DIV",{class:!0});var L=d(I);A=c(L,"H1",{});var st=d(A);V=c(st,"A",{href:!0});var ct=d(V);R=w(ct,"Road to Victory"),ct.forEach(i),st.forEach(i),F=H(L),J=c(L,"P",{});var dt=d(J);Y=w(dt,`Explore our development roadmap, what has been done, what will be done, and who is in charge
					of doing it!`),dt.forEach(i),L.forEach(i),Q=H(P),z=c(P,"DIV",{class:!0});var M=d(z);O=c(M,"H1",{});var ht=d(O);G=c(ht,"A",{href:!0});var ut=d(G);X=w(ut,"Who are we?"),ut.forEach(i),ht.forEach(i),Z=H(M),U=c(M,"P",{});var ft=d(U);$=w(ft,"Gather some intel about our soldiers and learn a little bit about us!"),ft.forEach(i),M.forEach(i),P.forEach(i),tt=H(C),D=c(C,"DIV",{class:!0});var pt=d(D);x.l(pt),pt.forEach(i),C.forEach(i),et=H(E),N=c(E,"STYLE",{});var mt=d(N);nt=w(mt,`@import url('https://fonts.googleapis.com/css2?family=Playfair&display=swap');
		p, h1 {
			color: #2A1E0E;
			font-family: "Playfair", serif;
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
			border: dashed black 0.1vh;
			justify-content: center;
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
			font-size: 1vw;
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
			font-size: 1vw;
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
			font-size: 0.7vw;
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
			font-size: 2.5vw;
		}

		.flex {
			display: flex;
			justify-content: space-between;
		}

		.col-flex {
			display: flex;
			flex-direction: column;
		}`),mt.forEach(i),E.forEach(i),this.h()},h(){g(r,"class","bg-img"),g(r,"alt","newspaper background"),Et(r.src,u="bg.png")||g(r,"src",u),g(a,"href",Dt),g(_,"href","mailto:BeyondHeroesTheGame@gmail.com"),g(n,"class","nav-col"),g(V,"href","/"),g(I,"class","nav-col"),g(G,"href","/"),g(z,"class","nav-col"),g(D,"class","stuff"),g(h,"class","content"),g(e,"class","bg")},m(k,E){S(k,e,E),t(e,r),t(e,m),t(e,h),t(h,o),t(o,n),t(n,l),t(l,a),t(a,p),t(n,j),t(n,v),t(v,b),t(v,_),t(_,T),t(o,B),t(o,I),t(I,A),t(A,V),t(V,R),t(I,F),t(I,J),t(J,Y),t(o,Q),t(o,z),t(z,O),t(O,G),t(G,X),t(z,Z),t(z,U),t(U,$),t(h,tt),t(h,D),x.m(D,null),t(e,et),t(e,N),t(N,nt)},p(k,[E]){q===(q=at(k))&&x?x.p(k,E):(x.d(1),x=q(k),x&&(x.c(),x.m(D,null)))},i:gt,o:gt,d(k){k&&i(e),x.d()}}}const Dt="https://discord.gg/gnnfKKuumg";function jt(f,e,r){const u=["Welcome to Beyond Heroes!","What is Beyond Heroes?","What can you expect?","How can you get involved?","Spread the Word!"],m=["Beyond Heroes aims to create an exciting World War gaming experience inspired by 'Heroes & Generals' but without the issues of excessive monetization and pay-to-win mechanics. Our goal is to provide the same immersive and challenging game that is accessible to all players. Through strategic gameplay that made HnG so interesting. War, and balanced mechanics, our game aims to deliver a fun and rewarding experience that appeals to a wide range of players. We value our community and strive to provide a respectful and enjoyable environment that fosters teamwork. camaraderie, and sportsmanship. Our mission is to create a game that honors the bravery and sacrifice of those who fought in World War II while also providing a thrilling and engaging gaming experience for players around the world.","Beyond Heroes is a fan project dedicated to recreating the immersive World War II experience we all loved in the original game but without the issues of excessive monetization and other	frustrating problems. Our team is committed to building a game that truly puts the players first and keeps the spirit of the original alive.",`Immersive WWII Setting: Get yourself in the chaos and heroism of World War II with meticulously recreated battlefields, weapons, and vehicles.
Community-Driven Development: We value your feedback and will actively involve the community in shaping the game. Your voice matters! Engaging Multiplayer Modes: Experience epic battles across diverse game modes, whether you prefer tactical teamwork or intense solo action.
Regular Updates: Count on us to deliver consistent updates, bug fixes, and exciting content to keep the game fresh and exciting. (hopefully)`,"We're currently seeking passionate individuals who share our love for Heroes & Generals. Whether you're a skilled developer, talented artist, or an avid tester, we want you to be part of this	amazing journey! Join our dedicated community on Discord to learn more about available roles and how you can contribute.","Help us bring this project to life by sharing the news with your fellow Heroes & Generals enthusiasts. Let's come together and build the game we've all been dreaming of!"];let h,o,n=!1;return[h,o,n,u,m,()=>r(2,n=!1),p=>{r(0,h=u[p]),r(1,o=m[p]),r(2,n=!0)}]}class Bt extends _t{constructor(e){super(),xt(this,e,jt,zt,kt,{})}}export{Bt as component};
