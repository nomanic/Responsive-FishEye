/**
 * fisheye.js
 *
 * A JavaScript micro-framework for adding fisheye functionality
 * to elements for advanced UI development.
 *
 * @author     Neil Oman
 * @version    1
 * @copyright  Copyright 2016 Neil Oman
 * @license    Dual licensed under MIT and GPL
 */

fisheye=function() {
	this.cacheob = {};
	this.obj = false;
	this.obj_left = 0;
	this.im=[];
	this.nfish=0;
	this.sensitive=100;
	this.imsp=[];
	this.ciw1=0;
	this.ciw2=0;
	this.ciw3=0;
	this.ciw4=0;
	this.rt=0;
	this.nmb=-1;
	this.oxpos=-1;
	this.running=0;
	this.locations=[];
	this.axis=1;
	this.ar=[];
	this.createVert=function(div,s) {
		this.axis=0;
		this.create(div,s);
	}
	this.create=function(div,s) {
		this.obj = this.ob(div);
		this.obj.fishy=this;
		this.im=this.obj.getElementsByClassName("fisheye");
		this.nfish=this.im.length;
		this.sensitive=s?s:100;
		this.imsp=this.obj.getElementsByClassName("fishspace");
		for (var i = 0; i < this.nfish; ++i) {
			(this.im[i]).i=i;
		}
		this.obj.onmousemove=function(e) {
			var xpos=(this.fishy.axis==1)?(e?e.pageX:(window.event.x + document.body.scrollLeft - 2))-this.fishy.obj_left:((e?e.pageY:(window.event.y + document.body.scrollTop - 2))-this.fishy.obj_left);
			this.fishy.ar=[xpos];
			this.fishy.sq();
		}
		this.obj.ontouchmove=function(event) {
			var touches = event.touches && event.touches.length ? event.touches : [event];
			var e = (event.changedTouches && event.changedTouches[0]) || touches[0];
			var xpos=(this.fishy.axis==1)?(e?e.pageX:(window.event.x + document.body.scrollLeft - 2))-this.fishy.obj_left:((e?e.pageY:(window.event.y + document.body.scrollTop - 2))-this.fishy.obj_left);
			this.fishy.ar=[xpos];
			this.fishy.sq();
		}
		this.obj.onmouseout = this.obj.ontouchend = function() {
			this.fishy.ss(this.fishy.nfish,0,1);
		}
		this.obj.onresize=function() {
			this.fishy.ss(this.nfish,0,1);
		}
		this.ss(this.nfish,0,1);
	}
	this.resize=function() {
		this.ss(this.nfish,0,1);
	}
	this.ss=function(nx,iw,rf,cs) {
		iw=this.axis==1?Math.floor(this.obj.offsetWidth/(this.nfish+2)):(Math.floor(this.obj.offsetHeight/(this.nfish+2)));
		this.ciw=iw;
		this.ciw1=0.5*this.ciw;
		this.ciw2=2*this.ciw;
		this.ciw3=0.74*this.ciw;
		this.ciw4=14*this.ciw;
		if (this.axis==1) {
			this.obj.style.height=this.ciw2+'px';
			(this.imsp[0]).style.height=(this.imsp[0]).style.width=(this.imsp[1]).style.height=(this.imsp[1]).style.width=this.ciw2+'px';
		}
		else {
			this.obj.style.width=this.ciw2+'px';
			(this.imsp[0]).style.width=(this.imsp[0]).style.height=(this.imsp[1]).style.width=(this.imsp[1]).style.height=this.ciw2+'px';
		}
		this.rt=(this.ciw*0.01)-1;
		for (var i=0;i<this.nfish;++i) {
			this.locations[i]=(this.rt++);
		}
		this.rt=this.nfish;
		for (var o,iw4,tlw=0,i=1;i<(this.nfish-1);++i) {
			(o=(this.im[i]).style).width=o.height=iw+'px';
			iw4=(this.axis==1)?(o.marginTop=((this.ciw2-iw)/2)+'px'):(o.marginLeft=((this.ciw2-iw)/2)+'px');
			tlw+=iw;
		}
		var wd=((2*this.ciw*2)+(this.ciw*(this.nfish-2)));
		if (this.axis==1) {
			(this.imsp[0]).style.width=(this.imsp[1]).style.width=((wd-tlw)/2)+'px';
			this.obj_left=(this.fPosXY(this.obj))[0];
		}
		else {
			(this.imsp[0]).style.height=(this.imsp[1]).style.height=((wd-tlw)/2)+'px';
			this.obj_left=(this.fPosXY(this.obj))[2];
		}
	}
	this.sq=function() {
		var self=this;
		if (this.running==1) {
			clearTimeout(this.nmb);
			this.nmb=setTimeout(self.sq,this.sensitive);
		}
		else {
			this.running=1;
			this.oxpos=this.xpos=(this.ar.length>0)?this.ar.shift():this.oxpos;
			this.x2pos=this.xpos;
			for (var flr=Math.floor,abs=Math.abs,max=Math.max,tlw=0,i = 1; i < this.nfish-1; ++i) {
				var v = (flr(this.ciw1 * max(0,2 - abs(((this.xpos - this.ciw2) * 1.2445 + this.ciw3) / this.ciw4 * this.rt - this.locations[i])) + this.ciw)),o=(this.im[i]).style,j=o.width=o.height=v+"px",iw4=(this.axis==1)?(o.marginTop=((this.ciw2-v)/2)+'px'):(o.marginLeft=((this.ciw2-v)/2)+'px');
				tlw=tlw+v;
			}
			var wd=(this.ciw*(this.nfish+2));
			if (this.axis==1) {
				(this.imsp[0]).style.width=(this.imsp[1]).style.width=((wd-tlw)/2)+'px';
			}
			else {
				(this.imsp[0]).style.height=(this.imsp[1]).style.height=((wd-tlw)/2)+'px';
			}
			this.running=0;
		}
		if (this.ar.length>0) {
			clearTimeout(this.nmb);
			this.nmb=setTimeout(sel.sq,self.sensitive);
		}
	}
	this.obz=function(orange,quebec){return (typeof orange==='string')?((orange==='')?quebec:document.getElementById(orange)):orange;};
	this.ob=function(z) {
		return (typeof z==='string')?((this.cacheob.hasOwnProperty(z))?this.cacheob[z]:(this.cacheob[z] = this.obz(z))):this.obz(z);
	}
	this.fPosXY=function(el){
		var rect = this.ob(el).getBoundingClientRect();
		return [rect.left,rect.right,rect.top,rect.bottom,rect.left+((rect.right-rect.left)/2),rect.top+((rect.bottom-rect.top)/2)];
	}
}