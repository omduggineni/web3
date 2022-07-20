!function(){function t(t,e,i,s){Object.defineProperty(t,e,{get:i,set:s,enumerable:!0,configurable:!0})}var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire94c2;e.register("fD4Ua",(function(i,s){t(i.exports,"rick_utterances",(function(){return u})),t(i.exports,"Particle",(function(){return l})),t(i.exports,"ParticleSystem",(function(){return d}));var n=e("71mVs"),h=e("agqG7"),a=function(){"use strict";function t(e,i){(0,n.default)(this,t),this.value=Math.random()*e,this.next_value=Math.random()*e,this.next_value_steps=Math.floor(Math.sqrt(Math.random())*(i-1)+1),this.max_value=e,this.max_steps=i,this.step_num=0}return(0,h.default)(t,[{key:"ease",value:function(t,e,i){return t+(e-t)*i}},{key:"getValue",value:function(){var t=this.ease(this.value,this.next_value,this.step_num/this.next_value_steps);return this.step_num++,this.step_num==this.next_value_steps&&(this.step_num=0,this.value=this.next_value,this.next_value=Math.random()*this.max_value,this.next_value_steps=Math.floor(Math.sqrt(Math.random())*(this.max_steps-1)+1)),t}}]),t}(),r=function(t,e,i,s,n){var h=document.createElement("span");h.innerHTML=t,h.classList.add("particle-system-text"),e.appendChild(h),h.style.top=s+"px",h.style.left=i+"px",h.style.animationDuration=n/1e3+"s",setTimeout(h.remove.bind(h),n)},u=[["We're",.3800000000000001],["no",.2699999999999998],["strangers",.24],["to",.29000000000000004],["love",2.83],["You",.33000000000000007],["know",.22999999999999954],["the",.25],["rules",.6900000000000004],["and",.3600000000000003],["so",.40999999999999925],["do",.3600000000000003],["I",1.63],["A",.2900000000000009],["full",.21999999999999886],["commitment's",.7699999999999996],["what",.25],["I'm",.5400000000000009],["thinking",.3200000000000003],["of",1.8100000000000005],["you",.3299999999999983],["wouldn't",.4800000000000004],["get",.2599999999999998],["this",.25],["from",.46000000000000085],["any",.40000000000000036],["other",.21999999999999886],["guy",.26000000000000156],["I",.25],["how",.9599999999999973],["I'm",1.3000000000000007],["feeling",.3500000000000014],["gotta",.259999999999998],["make",.25],["you",.2900000000000027],["understand",.7899999999999991],["never",.41999999999999815],["gonna",1.620000000000001],["give",.39000000000000057],["you",.23999999999999844],["up",.2700000000000031],["never",.4299999999999997],["gonna",.34999999999999787],["let",.2699999999999996],["you",.6900000000000013],["down",.23999999999999844],["never",.18000000000000327],["gonna",.2699999999999996],["run",.2699999999999996],["around",.4299999999999997],["and",.7399999999999984],["desert",.23000000000000043],["you",.16000000000000014],["never",.3200000000000003],["hi",.25],["hi",.35999999999999943],["hi",.6900000000000013],["hi",.259999999999998],["hi",.15000000000000213],["hi",.16000000000000014],["hi",.17999999999999972],["hi",.35999999999999943],["hi",.3500000000000014],["hi",.48999999999999844],["hi",.5000000000000036],["hi",.3399999999999963],["hi",.39000000000000057],["hi",1.1400000000000006],["hi",.240000000000002],["hi",.17999999999999972],["hi",.28999999999999915],["hi",.28999999999999915],["hi",.36999999999999744],["hi",.7899999999999991],["hi",.2600000000000051],["hi",.14999999999999858],["hi",.269999999999996],["hi",.37000000000000455],["hi",.3200000000000003],["hi",.7299999999999969],["hi",.21000000000000085],["hi",.14000000000000057],["hi",.0799999999999983],["hi",.20000000000000284],["hi",.4200000000000017],["hi",.29999999999999716],["hi",.6099999999999994],["hi",.4200000000000017],["hi",.3399999999999963],["hi",.4299999999999997],["hi",1]],o=function(){"use strict";function t(e,i){(0,n.default)(this,t),this.particle=e,this.utterances=i,this.utterance_index=0}return(0,h.default)(t,[{key:"make_utterance",value:function(){var t=this.utterances[this.utterance_index];return r(t[0],this.particle._parentSystem.element,this.particle._x,this.particle._y,1e3*t[1]),this.utterance_index++,this.utterance_index<this.utterances.length}},{key:"speak",value:function(){this.make_utterance()&&setTimeout(this.speak.bind(this),1e3*this.utterances[this.utterance_index-1][1])}}]),t}(),l=function(){"use strict";function t(e,i){(0,n.default)(this,t),this._speed=t.SPEED,this._parentSystem=i,this._x=Math.random()*this._parentSystem.width,this._y=Math.random()*this._parentSystem.height,this._z_generator=new a(10,100),this._z=this._z_generator.getValue()+10,this._theta_generator=new a(2*Math.PI,500),this._theta=this._theta_generator.getValue(),this.element=document.createElement("div"),this.element.classList.add("particle-system-particle"),this.element.style.left=this._x+"px",this.element.style.top=this._y+"px",e.appendChild(this.element)}return(0,h.default)(t,[{key:"update",value:function(){this._x=(this._x+Math.cos(this._theta)*this._speed+this._parentSystem.width)%this._parentSystem.width,this._y=(this._y+Math.sin(this._theta)*this._speed+this._parentSystem.height)%this._parentSystem.height,this._theta=this._theta_generator.getValue(),this._speed+=.1*(Math.random()-Math.random()),this._speed=t.SPEED+(this._speed-t.SPEED)*(this.SPEED>t.SPEED?.998:.95),this._z=this._z_generator.getValue()+10,Math.random()>.999&&r("Hello!",this._parentSystem.element,this._x,this._y,1e3),this.element.style.left=this._x+"px",this.element.style.top=this._y+"px",this.element.style.width=this._z+"px",this.element.style.height=this._z+"px",this.element.style.opacity=Math.min(2/this._z,1)}},{key:"sayUtterances",value:function(t){new o(this,t).speak()}}]),t}();l.SPEED=1,l.WIDTH=15;var d=function(){"use strict";function t(e,i){var s=this;(0,n.default)(this,t),this._ticknum=0,this.width=window.innerWidth-l.WIDTH,this.height=document.body.scrollHeight-l.WIDTH,e.style.height=this.height+"px",this.element=e,this.particles=[];for(var h=function(){s.particles.push(new l(s.element,s))},a=0;a<i;a++)setTimeout(h,a);this.update_this=this.update.bind(this),requestAnimationFrame(this.update_this),window.addEventListener("resize",this.on_resize.bind(this))}return(0,h.default)(t,[{key:"on_resize",value:function(){this.width=window.innerWidth,this.height=document.body.scrollHeight,this.element.style.height=this.height+"px"}},{key:"update",value:function(){for(var t=0;t<this.particles.length;t++)this.particles[t].update();this._ticknum++,requestAnimationFrame(this.update_this)}}]),t}()})),e.register("71mVs",(function(e,i){function s(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}t(e.exports,"default",(function(){return s}))})),e.register("agqG7",(function(e,i){function s(t,e){for(var i=0;i<e.length;i++){var s=e[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(t,s.key,s)}}function n(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}t(e.exports,"default",(function(){return n}))}))}();
//# sourceMappingURL=particle_system.d2e198e1.js.map
