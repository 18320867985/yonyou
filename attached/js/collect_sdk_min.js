$(function () {

	$(function() {
		var cookie = getCookieId();
		if ( cookie == null) {
			setCookieId();
		}

	});

	Date.prototype.format = function(format) {
		var o = {
			"M+": this.getMonth() + 1,
			//month
			"d+": this.getDate(),
			//day
			"h+": this.getHours(),
			//hour
			"m+": this.getMinutes(),
			//minute
			"s+": this.getSeconds(),
			//second
			"q+": Math.floor((this.getMonth() + 3) / 3),
			//quarter
			"S": this.getMilliseconds() //millisecond
		}
		if (/(y+)/.test(format)) format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
		for (var k in o) if (new RegExp("(" + k + ")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		return format;
	}

	function generateUUID() {
		var d = new Date().getTime();
		var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
			var r = (d + Math.random() * 16) % 16 | 0;
			d = Math.floor(d / 16);
			return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
		});
		return uuid;
	};

	function setCookieId() {
		$.cookie('sdk_cookieid', generateUUID(), {
			expires: 30,
			path: '/'
		});

	}

	function getCookieId() {
		//if ($.cookie('sdk_cookieid') == null){setCookieId();}
		return $.cookie('sdk_cookieid');
	}

	function setUserId(id) {
		//var userid = getUserId();
		if (getUserId() == null){//userid == null) { // 新用户
			$.cookie('sdk_userid', generateUUID(), {
				expires: 30,
				path: '/'
			});
		} else {
			if (getUserId() != id) { // 更换用户登录，需要重新刷新cookieid
				//setCookieId();
				$.cookie('sdk_userid', id, {
					expires: 30,
					path: '/'
				});
			}

		}

	}

	function getUserId() {
		return $.cookie('sdk_userid');
	}

	function Event(name, variable) {
		this.headers = {};
		this.body = {};
		this.body.event = name;
		this.body.variable = variable;

		return this;
	}
	
	function detectOS() {
				var sUserAgent = navigator.userAgent;
				if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {return "Ios";}
				else if (/(Android)/i.test(navigator.userAgent)) { return "Android";}
				else {
				
					var isWin = (navigator.platform == "Win32") || (navigator.platform == "Windows");
					var isMac = (navigator.platform == "Mac68K") || (navigator.platform == "MacPPC") || (navigator.platform == "Macintosh") || (navigator.platform == "MacIntel");
					if (isMac) return "Mac";
					var isUnix = (navigator.platform == "X11") && !isWin && !isMac;
					if (isUnix) return "Unix";
					var isLinux = (String(navigator.platform).indexOf("Linux") > -1);
					if (isLinux) return "Linux";
					if (isWin) {
						var isWin2K = sUserAgent.indexOf("Windows NT 5.0") > -1 || sUserAgent.indexOf("Windows 2000") > -1;
						if (isWin2K) return "Windows 2000";
						var isWinXP = sUserAgent.indexOf("Windows NT 5.1") > -1 || sUserAgent.indexOf("Windows XP") > -1;
						if (isWinXP) return "Windows XP";
						var isWin2003 = sUserAgent.indexOf("Windows NT 5.2") > -1 || sUserAgent.indexOf("Windows 2003") > -1;
						if (isWin2003) return "Windows 2003";
						var isWinVista= sUserAgent.indexOf("Windows NT 6.0") > -1 || sUserAgent.indexOf("Windows Vista") > -1;
						if (isWinVista) return "Windows Vista";
						var isWin7 = sUserAgent.indexOf("Windows NT 6.1") > -1 ||sUserAgent.indexOf("Windows NT 6.3") > -1 || sUserAgent.indexOf("Windows 7") > -1;
						if (isWin7) return "Windows 7";
						var isWin10 = sUserAgent.indexOf("Windows NT 10.0") > -1 || sUserAgent.indexOf("Windows 10") > -1;
						if (isWin10) return "Windows 10";
					}
					return "other";
				}
	}
	
	function getBrowserInfo()
			{
				var agent = navigator.userAgent.toLowerCase() ;

				var regStr_ie = /msie [\d.]+;/gi ;
				var regStr_ff = /firefox\/[\d.]+/gi
				var regStr_chrome = /chrome\/[\d.]+/gi ;
				var regStr_saf = /safari\/[\d.]+/gi ;
				//IE
				if(agent.indexOf("msie") > 0)
				{
					return agent.match(regStr_ie) ;
				}

				//firefox
				else if(agent.indexOf("firefox") > 0)
				{
					return agent.match(regStr_ff) ;
				}
				
				//Chrome
				else if(agent.indexOf("chrome") > 0)
				{
					return agent.match(regStr_chrome) ;
				}

				//Safari
				else if(agent.indexOf("safari") > 0 && agent.indexOf("chrome") < 0)
				{
					return agent.match(regStr_saf) ;
				}
				else {return "other/other"}

			}
			
	function createEvent(name, variable,clickEvent) {
		var event = new Event(name, variable);
		
		if (getCookieId() == null){
			setCookieId();
		}
		event.body.cookieid = getCookieId();
		
		if (getUserId() == null) {
			setUserId(null);	
		}
		
		event.body.userid = getUserId();
		event.body.project = configs.project;
		event.body.variable["DataTime"]=new Date().format("yyyy-MM-dd hh:mm:ss").toLocaleString();
		
		//event.headers.topic = "G1";
		//event.headers.topic = event_header;
		if (clickEvent){
            event.headers.topic = configs.Hotmap_header;
		}else {
            event.headers.topic = configs.event_header;
		}
		
		

/*var v_lib = {};
		v_lib["$lib"] = "lib";
		v_lib["$libmethod"] = "code";
		v_lib["$lib_version"] = "1.0.0";
		event.body.lib = v_lib;*/

		var v_properties = {};
		// 操作系统
		v_properties["$os"] = detectOS();
		//v_properties["$os_version"] = "7";
		// 浏览器
		var browser = getBrowserInfo() ;
		var strs= new Array();
		if ((browser+"").indexOf("/")>0){
			strs = (browser+"").split("/");
		}
		else
		{			
			strs = (browser+"").split(" ");
		}
		v_properties["browser"] = strs[0];
		v_properties["browser_version"] = strs[1];

		// IP 地域
		if (typeof returnCitySN.cip == "undefined") {
			v_properties["ip"] = "null"
		} else {
			v_properties["ip"] = returnCitySN.cip
		};
		if (typeof returnCitySN.cname == "undefined") {
			v_properties["city"] = "null"
		} else {
			v_properties["city"] = returnCitySN.cname
		};
		
		// url domain refer_url refer_domain
		if (typeof window.location.href == "undefined") {
			v_properties["url"] = "null"
		} else {
			v_properties["url"] = window.location.href
		};
		if (typeof document.domain == "undefined") {
			v_properties["url_domain"] = "null"
		} else {
			v_properties["url_domain"] = document.domain
		}; //document.domain
		if (typeof document.referrer == "undefined") {
			v_properties["refer"] = "null";
			v_properties["refer_domain"] = "null"
		} else {
			v_properties["refer"] = document.referrer;
			var a = document.createElement('a');
			a.href = v_properties["refer"]
			v_properties["refer_domain"] = a.host;
		};
	// 语言
	 if (typeof navigator.userLanguage == "undefined")
	 {
	 		v_properties["language"]  = navigator.language.toLowerCase();
	 	}
	 else 
	 	{
	 			v_properties["language"]  = navigator.userLanguage.toLowerCase();
	 	}
	// 屏幕分辨率
	v_properties["ScreenHeight"] = window.screen.height;
	v_properties["ScreenWidth"] = window.screen.width;
	if (document.body.scrollHeight<window.screen.height){
		v_properties["PageHeight"] = window.screen.height;
	}else {
		v_properties["PageHeight"] = document.body.scrollHeight
	}
		event.body.properties = v_properties;

		//event.setExtractor("o","16377");
		return event;
	}



	////////用户

	function Userinfo(id, variable) {
		this.headers = {};
		this.body = {};
		setUserId(id);
		this.body.userid = getUserId();
		this.body.variable = variable;
		this.headers.topic = configs.Userinfo_header;
		return this;
	}
	
	/////////登录

	function LoginInfo(cookieid, userid) {
		this.headers = {};
		this.body = {};
		this.body.userid = userid;
		this.body.cookieid = cookieid;
		//this.headers.topic = "G1";
		this.headers.topic = configs.LoginInfo_header;
		return this;
	}


	function login(userid) {
		setUserId(userid);
		var v = new LoginInfo(getCookieId(), userid);
		var header = '"' + "headers" + '"' + ":" + JSON.stringify(v.headers);
		v.body.project = configs.project;
		var body = '"' + "body" + '"' + ":" + '"' + (JSON.stringify(v.body).replace(/\"/g, "\\\"")) + '"';

		//alert("[{" + header + "," + body + "}]");

		//$.post(configs.collect_url, "[{" + header + "," + body + "}]");
		$.ajax({
		  type: 'POST',
		  timeout: 1000,
		  url: configs.collect_url,
		  data:  "[{" + header + "," + body + "}]",
		  success: function(res){}
		});

	}
	// 注册
	function register(id, variable) {

		var v = new Userinfo(id, variable);
		v.headers.topic = configs.Userinfo_header;
		var header = '"' + "headers" + '"' + ":" + JSON.stringify(v.headers);
		v.body.project = configs.project;

		//alert(v.body.userid);
		//v.body.userid = v.body.variable["UserID"];
		v.body.username = v.body.variable["UserName"];
		delete v.body.variable["UserID"];
		delete v.body.variable["UserName"];
		//delete v.body.variable["DataTime"];
		
		//v.body.variable["DataTime"] = new Date().format("yyyy-MM-dd hh:mm:ss").toLocaleString();
		
		var body = '"' + "body" + '"' + ":" + '"' + (JSON.stringify(v.body).replace(/\"/g, "\\\"")) + '"';

		//alert("[{" + header + "," + body + "}]");

		//$.post(configs.collect_url, "[{" + header + "," + body + "}]");
		$.ajax({
		  type: 'POST',
		  timeout: 1000,
		  url: configs.collect_url,
		  data:  "[{" + header + "," + body + "}]",
		  success: function(res){
			  console.log(res)
		  }
		});
		
		login(v.body.userid);

	}
	

	function track(name, variable,clickEvent) {

		var v = createEvent(name.toString(), variable,clickEvent);
		//v.body.variable.["DataTime"] = new Date().format("yyyy-MM-dd hh:mm:ss").toLocaleString();
		var header = '"' + "headers" + '"' + ":" + JSON.stringify(v.headers);
		//var body = '"' + "body" + '"' + ":" + '"'	+ (JSON.stringify(v.body).replace(/\"/g, "\\\"")) + '"';
		var body = '"' + "body" + '"' + ":" + '"' + (JSON.stringify(v.body).replace(/\"/g, "\\\"")) + '"';

		
		
		//$.post(configs.collect_url, "[{" + header + "," + body + "}]");
		$.ajax({
		  type: 'POST',
		  timeout: 1000,
		  url: configs.collect_url,
		  data:  "[{" + header + "," + body + "}]",
		  success: function(res){}
		});

		//alert(variable.UserName);

		// 登录事件触发用户信息和用户与cookie关系事件
		if (name.toString() === "online") {
			login(variable.toString());
			//register(variable.toString(), v.body.variable);
		}
		//用户注册 更新用户信息
		if (name.toString() === "onregister") {
			//register(variable.UserID.toString(),{"UserName":variable.UserName.toString()});
			//alert(JSON.stringify(v.body.variable));
			//register(variable.toString(), v.body.variable);
			
			if (typeof(variable.UserID) == "undefined"){
				register(variable.UserID, v.body.variable);
			}
			else
			{
				register(variable.UserID.toString(), v.body.variable);
			}
		}

	}

	// 需要导出全局调用的添加至此
	yyCollecter = {
		track:track
    }
	

});