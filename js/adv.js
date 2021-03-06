(function(j, K, g) {
	function l(a) {
		return Object.prototype.toString.call(a) === "[object Array]"
	}

	_py.getLast = function(d) {
		for(var c = this.length - 1; 0 <= c; c--) {
			if(l(this[c])) {
				if(this[c][0] == d) {
					return this[c][1]
				}
			}
		}
		return null
	};
	var J = _py.getLast("a"),
		C = ["R6", "CV", "9b", "g2", "xT", "_d"],
		y = J && J.split(".")[0],
		k = true;
	for(var D = 0; D < C.length; D++) {
		if(C[D] == y) {
			k = false;
			break
		}
	}
	if(k) {
		var x = _py.getLast("p"),
			I = _py.getLast("pi"),
			v = _py.getLast("pv"),
			F = _py.getLast("e"),
			G = _py.getLast("domain"),
			B = _py.getLast("mapping"),
			H = _py.getLast("urlParam");
		(function(i, q, p, f, e) {
			i._CommandName_ = f;
			i[f] = i[f] || function() {
				(i[f].q = i[f].q || []).push(arguments);
				i[f].track = function() {
					(i[f].q[i[f].q.length - 1].t = []).push(arguments)
				};
				return i[f]
			}, i[f].a = e, i[f].l = 1 * new Date();
			var u = q.createElement(p);
			u.async = 1;
			u.src = "//fm.ipinyou.com/j/a.js";
			var m = q.getElementsByTagName(p)[0];
			m.parentNode.insertBefore(u, m)
		})(j, K, "script", "py", J);
		if(v != null) {
			py("set", "user", {
				category: v
			})
		}
		if(F != null) {
			py("set", "extend", F)
		}
		if(G != null) {
			py("set", "domain", G)
		}
		if(B != null && !(B !== 1)) {
			py("set", "mapping", 0)
		}
		if(H != null) {
			py("set", "clickParam", H)
		}
		if(I != null) {
			var w = {};
			w.product_no = I.id;
			w.name = I.name;
			w.brand = I.brand;
			w.orig_price = I.origPrice;
			w.price = I.price;
			w.pc_pic_url = I.imgUrl;
			w.product_url = I.productUrl;
			w.category = I.category;
			w.sold_out = I.soldOut;
			if(I.currency) {
				w.currency_code = I.currency
			}
			py("event", "viewItem", w)
		} else {
			if(x != null) {
				py("event", "viewItem", x)
			} else {
				py("event", "viewPage")
			}
		}
	} else {
		function l(a) {
			return Object.prototype.toString.call(a) === "[object Array]"
		}
		var A = function() {
			var f = location.hostname;
			var c = /^\d{1,3}.\d{1,3}.\d{1,3}.\d{1,3}$/;
			var a = f.split(".");
			var d = a.length - 2;
			if(c.test(f) || 2 === a.length) {
				return f
			}
			for(; 0 <= d; --d) {
				if("www" === a[d]) {
					return a.slice(d + 1).join(".")
				}
				if(-1 === ",com,net,org,gov,edu,info,name,int,mil,arpa,asia,biz,pro,coop,aero,museum,ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,az,ba,bb,bd,be,bf,bg,bh,bi,bj,bm,bn,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cf,cg,ch,ci,ck,cl,cm,cn,co,cq,cr,cu,cv,cx,cy,cz,de,dj,dk,dm,do,dz,ec,ee,eg,eh,es,et,ev,fi,fj,fk,fm,fo,fr,ga,gb,gd,ge,gf,gh,gi,gl,gm,gn,gp,gr,gt,gu,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,il,in,io,iq,ir,is,it,jm,jo,jp,ke,kg,kh,ki,km,kn,kp,kr,kw,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,ml,mm,mn,mo,mp,mq,mr,ms,mt,mv,mw,mx,my,mz,na,nc,ne,nf,ng,ni,nl,no,np,nr,nt,nu,nz,om,pa,pe,pf,pg,ph,pk,pl,pm,pn,pr,pt,pw,py,qa,re,ro,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sy,sz,tc,td,tf,tg,th,tj,tk,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,va,vc,ve,vg,vn,vu,wf,ws,ye,yu,za,zm,zr,zw,".indexOf("," + a[d] + ",")) {
					return a.slice(d).join(".")
				}
			}
			return f
		};
		_py.getLast = function(d) {
			for(var c = this.length - 1; 0 <= c; c--) {
				if(l(this[c])) {
					if(this[c][0] == d) {
						return this[c][1]
					}
				}
			}
		};
		_py.serialize = function() {
			function p(i, s) {
				for(var m = 0; m < i.length; m++) {
					if(i[m] === s) {
						return m
					}
				}
				return -1
			}
			for(var f = ["domain", "urlParam", "pi", "e", "p", "mapping"], a = [], e = [], q = [], d, c = 0; c < this.length; c++) {
				d = this[c][0], -1 === p(f, d) && (e[d] = e[d] || [], 0 < e[d].length ? -1 === p(e[d], this[c][1]) && e[d].push(this[c][1]) : (e[d].push(this[c][1]), a.push([d, e[d]])))
			}
			for(c = 0; c < a.length; c++) {
				q.push(a[c][0] + "=" + g(a[c][1].join(",")))
			}
			return q.join("&")
		};
		j.ipy = {
			r: /(^|&)jump=(\d*)/i,
			cookie: {
				set: function(f, e, d, a, c) {
					z = new Date();
					z.setTime(z.getTime() + (d || 0));
					K.cookie = f + "=" + g(e || "") + (d ? "; expires=" + z.toGMTString() : "") + ";path=/; domain=" + (a || location.host) + (c ? "; secure" : "")
				},
				get: function(c) {
					return(c = K.cookie.match(RegExp("(^|;)\\s*" + c + "=([^;]*)", "i"))) ? decodeURIComponent(c[2]) : ""
				}
			},
			setCookie: function(c, a) {
				ipy.cookie.set(c, a, 31536000000, A())
			},
			setSession: function(c, a) {
				ipy.cookie.set(c, a, 0, A())
			},
			getJump: function() {
				var a = ipy.cookie.get("ipysession");
				return a && (a = a.match(ipy.r)) ? parseInt(a[2]) : 0
			},
			setJump: function(a) {
				var c = ipy.cookie.get("ipysession");
				c ? c.match(ipy.r) ? ipy.setSession("ipysession", c.replace(/jump=(\d*)/, "jump=" + a)) : ipy.setSession("ipysession", c + "&jump=" + a) : ipy.setSession("ipysession", "jump=" + a)
			},
			getInfo: function(d) {
				var a = ipy.cookie.get(d);
				if(a) {
					return a
				}
				try {
					if(j.localStorage) {
						if(localStorage.getItem(d)) {
							return localStorage.getItem(d)
						}
					}
				} catch(c) {}
				return ""
			},
			setInfo: function(d, a) {
				if(a == null || a == "") {
					return
				}
				ipy.setCookie(d, a);
				try {
					if(j.localStorage) {
						localStorage.setItem(d, a)
					}
				} catch(c) {}
			},
			getQueryString: function(a) {
				var c = new RegExp("(^|&)" + a + "=([^&]*)(&|$)");
				var d = j.location.search.substr(1).match(c);
				if(d != null) {
					return d[2]
				}
				return ""
			},
			setExendParam: function(m, q, i) {
				var d = m || "",
					a = q || "",
					f = i || "";
				ipy.getExtendParam(d, a, f)
			},
			getExtendParam: function(a, f, p) {
				var m = "",
					d = "";
				if(a != null && a) {
					m = "p=" + a
				}
				if(f != null && f) {
					_py.push(["pv", f])
				}
				if(p != null && p) {
					m += "&ext=" + p
				}
				ipy.extendSend(m)
			},
			itemInfo: function(e) {
				var a = [],
					p;
				switch(typeof e) {
					case "string":
						p = e;
						break;
					case "object":
						var f = ["id", "name", "origPrice", "price", "brand", "imgUrl", "productUrl", "categoryId", "category", "promotion", "discount", "soldOut", "domain", "currency"];
						for(var d = 0; d < f.length; d++) {
							var m = (e[f[d]] == undefined) ? "" : e[f[d]];
							m = m.toString();
							a.push(g(m))
						}
						ipy.id = e.id || "";
						p = a.join(",");
						break;
					default:
						return p = ""
				}
				return p
			},
			extendSend: function(a) {
				var c = "";
				if(_py.getLast("e")) {
					c = "e=" + _py.getLast("e") + "&"
				}
				c += a, o = _py.getLast("domain"), x = ("https:" == location.protocol ? "https" : "http") + "://" + o + "/adv?" + _py.serialize() + ipy.getSession() + "&e=" + h(c) + "&rd=" + new Date().getTime();
				(new Image()).src = x
			},
			getSession: function() {
				var d = _py.getLast("c");
				if(d && d != null) {
					var a = ipy.getJump();
					if(!isNaN(a) && a == 0) {
						ipy.setJump(a + 1);
						return ""
					}
					a++;
					ipy.setJump(a);
					return "&s=" + a
				}
				return ""
			},
			getP: function() {
				var a = _py.getLast("p");
				var c = ipy.id ? ipy.id : "";
				a = a ? a : c;
				return a
			}
		};
		if(_py.getLast("mapping") !== 1) {
			var E = "http:" != location.protocol ? "https://cm.ipinyou.com/cmas.html?a=" + _py.getLast("a") : "http://fm.p0y.cn/cm/cma.html?a=" + _py.getLast("a")
		}
		var x = location.href,
			r = K.referrer,
			F, I, t;
		j.parent != j && (x = r, r = "");
		x && _py.push(["u", x]);
		r && _py.push(["r", r]);
		var n = _py.getLast("urlParam") || "pyck",
			G = ipy.getQueryString(n);
		G = G ? G : ipy.getInfo("ipycookie");
		ipy.setInfo("ipycookie", G);
		G && _py.push(["c", G]);
		var o = _py.getLast("domain");
		var F = _py.getLast("e");
		if(F != "" && F) {
			F = "e=" + _py.getLast("e")
		} else {
			F = ""
		}
		I = ipy.itemInfo(_py.getLast("pi"));
		x = ("https:" == location.protocol ? "https" : "http") + "://" + o + "/adv?" + _py.serialize() + ipy.getSession() + "&pi=" + g(I) + "&p=" + g(ipy.getP()) + "&e=" + g(F) + "&rd=" + new Date().getTime() + "&v=1";

		function b() {
			if(K.body) {
				var a = K.createElement("script");
				a.type = "text/javascript";
				a.async = !0;
				a.src = x;
				a.onload = a.onreadystatechange = function() {
					if(!this.readyState || this.readyState == "loaded" || this.readyState == "complete") {
						a.parentNode.removeChild(a);
						var c = K.createElement("iframe");
						c.sandbox = "allow-scripts allow-same-origin";
						c.style.display = "none";
						c.src = E;
						K.body.insertBefore(c, K.body.firstChild)
					}
				};
				K.body.insertBefore(a, K.body.firstChild)
			} else {
				setTimeout(b, 50)
			}
		}
		setTimeout(b, 10)
	}
})(window, document, encodeURIComponent);