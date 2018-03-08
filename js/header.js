$(function() {
    var serverHost = "https://one.yonyou.com";
    var init, queryLoginUsername,
        loginBtn = "";
    var header = "<div class='indexheader fixed'>" +
        "<div class='bar'>" +
        "<div class='main'>" +
        "<ul class='one'>" +
        "<li class='index'><a href='index.html'>用友</a></li>" +
        "<li class='tel'>400-660-2350</li>" +
        "</ul>" +
       
        "<ul class='four'>" + loginBtn +
        "</ul>" +
        "<ul class='five'>" +
        "</ul>  " +
        "</div>" +
        "</div>" +
        "<div class='nav'>" +
        "<div class='main'>" +
        "<div class='logo'><a href='index.html'></a></div>" +
        "<ul class='menu'>" +
        "<li class='on'><a href='index.html'>首页</a></li>" +
        "<li><a href='javascript:void(0)'>云服务</a></li>" +
        "<li><a href='javascript:void(0)'>软件</a></li>" +
      
        "<li><a href='javascript:void(0)'>关于我们</a></li>" +
        "<li>" +
        "<form id='search' name='search' action='' method='post'>" +
        "<!-- <input type='text' name='search' value='' /> -->" +
        "</form>" +
        "</li>" +
        "</ul>" +
        "</div>" +
        "<div class='menulist'>" +
        "<div class='list null'></div>" +



        "<div class='list'>" +
        "<div class='main'>" +
        "<a href='javascript:void(0);' class='dot'></a>" +
        "<div class='lilist'>" +
        "<ul class='hd'>" +
        "<li><span>领域云</span></li>" +
        "<li><span>行业云</span></li>" +
        "<li><span>云平台</span></li>" +
//      "<li><span>企业金融云</span></li>" +
//      "<li><span>畅捷通云</span></li>" +
//      "<li><span>云市场</span></li>" +
        "</ul>" +
        "<div class='bd'>" +
        "<ul>" +
        "<li><a target='_self' href='cloud.html'>营销云</a></li>" +
        "<li><a target='_self'  href='cloud-buy.html'>采购云</a></li>" +
        "<li><a target='_self'  href='cloud-assist.html'>协同云</a></li>" +
      
      //  "<li><a target='_self'  href='cloud-hr.html'>人力云</a></li>" +
      //  "<li><a target='_self' href='https://www.yonyoucloud.com/cloud_project.html'>工程云</a></li>" +
   //     "<li><a target='_self' href='https://www.yonyoucloud.com/cloud_analysis.html'>分析云</a></li>" +
        "<li><a target='_blank' href='cloud-u8.html'>U8 cloud</a></li>" +
    //    "<li><a target='_self' href='https://www.yonyoucloud.com/cloud_ebill.html'>电子发票</a></li>" +
      //  "<li><a target='_self' href='cloud-connect.html'>云通信</a></li>" +
        "</ul>" +
        
        "<ul>" +
//      "<li><a target='_self' href='index.html'>建筑</a></li>" +
//      "<li><a target='_self' href='index.html'>金融</a></li>" +
//      "<li><a target='_self' href='index.html'>能源</a></li>" +
//      "<li><a target='_self' href='index.html'>制造</a></li>" +
//      "<li><a target='_self' href='index.html'>汽车</a></li>" +
//      "<li><a target='_self' href='index.html'>教育</a></li>" +
//      "<li><a target='_self' href='index.html'>医疗</a></li>" +
//      "<li><a target='_self' href='index.html'>烟草</a></li>" +
       "<li><a target='_self'  href='cloud-hr.html'>人力云</a></li>" +
        "</ul>" +
//      
//      "<ul>" +
//      "<li><a target='_blank' href='https://euc.yonyoucloud.com/cas/login?sysid=aps&service=https%3A%2F%2Fapcenter.yonyoucloud.com%2Fapptenant'>应用中心</a></li>" +
//      "<li><a target='_blank' href='http://udn.yyuap.com/'>UDN社区</a></li>" +
//      "<li><a target='_blank' href='https://euc.yonyoucloud.com/cas/login?sysid=developer&service=https%3A%2F%2Fdeveloper.yonyoucloud.com%3A443%2Fportal%2Fsso%2Flogin.jsp%3Fr%3DL3BvcnRhbC8'>开发者中心</a></li>" +
//      "</ul>" +
//      
        "<ul>" +
//      
//      "<li><a target='_self' href='index.html'>畅捷支付</a></li>" +
//      "<li><a target='_self' href='index.html'>供应链金融</a></li>" +
//      "<li><a target='_self' href='index.html'>银企联云服务</a></li>" +
//      "<li><a target='_self' href='index.html'>企业理财</a></li>" +

   "<li><a target='_self' href='cloud-connect.html'>云通信</a></li>" +
        
        "</ul>" +
//      
//      "<ul>" +
//      "<li><a target='_blank' href='https://www.chanjet.com/hkj'>小微企业云财务</a></li>" +
//      "<li><a target='_blank' href='http://software.chanjet.com/rj-Tg.html'>云管理</a></li>" +
//      "<li><a target='_blank' href='https://www.chanjet.com/gzq'>云协同</a></li>" +
//
//      "</ul>" +
//      "<ul>" +
//      "<li><a target='_blank' href='https://market.yonyoucloud.com/'>云市场</a></li>" +
//      "</ul>" +
        
        "</div>" +
        "</div>" +
        "</div>" +
        "</div> " +


        "<div class='list'>" +
        "<div class='main'>" +
        "<a href='javascript:void(0);' class='dot'></a>" +
        "<div class='threelist'>" +
        "<div class='tablist'>" +
        "<ul class='hd'>" +
        "<li class='active'><span>软件+</span></li>" +
        "</ul>" +
        "<div class='bd'>" +
        "<ul class='t1'>" +
        "<li><span>面向大型企业</span></li>" +
        "<li><a target='_self' title='大型企业管理与电子商务平台' href='soft-l-nc6.html'>NC6</a></li>" +
        "<li><a target='_self' title='多组织企业互联网应用平台' href='soft-l-u9.html'>U9</a></li>" +
        "<li><a target='_self' title='多组织企业互联网应用平台' href='soft-l-mes.html'>MES</a></li>" +
        "<li><a target='_self' title='人力资本管理平台' href='soft-l-hcm.html'>HCM</a></li>" +
       // "<li><a target='_self' title='商业分析' href='http://bq.yonyou.com/bqweb/index.html'>BQ</a></li>" +
      //  "<li><a target='_self' title='智能IT服务管理解决方案' href='http://subject.yonyou.com/20130426/ism.html'>iSM</a></li>" +

       // "<li><a target='_blank' title='打通所有电商平台数据' href='http://www.dsclouds.com'>电商通</a></li>" +
        "</ul>" +
        "<ul class='t2'>" +
        "<li><span>面向中型及成长型企业</span></li>" +
        "<li><a target='_self' title='成长型企业互联网应用平台' href='soft-u8.html?id=18'>U8+</a></li>" +
        "<li><a target='_self' title='企业产品生命周期管理解决方案' href='soft-PLM.html'>PLM</a></li>" +
        "<li><a target='_self' title='企业客户关系管理解决方案' href='soft-ERP.html'>CRM</a></li>" +
      //  "<li><a target='_blank' title='企业实时服务桌面' href='http://fwq.yonyou.com/up_service/index.php?r=up_shop/index'>服务圈</a></li>" +
       // "<li><a target='_blank' title='企业一体化营销服务平台' href='https://uhy.yonyoucloud.com/'>U会员</a></li>" +
       // "<li><a target='_blank' title='让企业生意快起来' href='https://udh.yonyoucloud.com/'>U订货</a></li>" +
       // "<li><a target='_blank' title='友联客服' href='http://ulink.yonyou.com'>友联客服</a></li>" +
        "</ul>" +
        "<ul class='last'>" +
        "<li><span>面向小微企业 </span></li>" +
        "<li><a target='_self' href='T.html'>畅捷通T+</a></li>" +
        "<li><a target='_self' href='T1.html'>畅捷通T1</a></li>" +
        "<li><a target='_self' href='T3.html'>畅捷通T3</a></li>" +
        "<li><a target='_self' href='T6.html'>畅捷通T6</a></li>" +
        "</ul>" +
        "</div>" +
        "</div>" +
        "<div class='jie'>" +
        "<ul class='hd'>" +
        "<li class='active'><span>解决方案</span></li>" +
        "</ul>" +
        "<div class='bd'>" +
//      
//      "<ul>" +
//      "<li class='biaoti'><span>行业</span></li>" +
//
//      "<li>" +
//      "<a target='_blank' href='http://nc.yonyou.com/project.php?stype=1&id=3'>制造业</a>" +
//      "<a target='_blank' href='http://nc.yonyou.com/project.php?stype=1&id=7'>传媒·出版</a>" +
//      "<a target='_blank' href='http://auto.yonyou.com/IT_Solutions/IT_index.html'>汽车</a>" +
//      "<a target='_blank' href='http://www.yonyoufinancial.com/index.php?m=content&c=index&a=lists&catid=11'>金融</a>" +
//      "<a target='_blank' href='http://www.uf-tobacco.com/plan_list.html?name=all'>烟草</a>" +
//      "<a target='_blank' href='http://nc.yonyou.com/project.php?stype=1&id=6'>消费品</a>" +
//      "<a target='_blank' href='http://nc.yonyou.com/project.php?stype=1&id=8'>房地产</a>" +
//      "</li>" +
//
//      "<li>" +
//      "<a target='_blank' href='https://www.yonyouccs.com/icop-website/'>建筑</a>" +
//      "<a target='_blank' href='http://nc.yonyou.com/project.php?stype=1&id=4'>交通运输</a>" +
//      "<a target='_blank' href='http://nc.yonyou.com/project.php?stype=1&id=9'>园区</a>" +
//      "<a target='_blank' href='http://nc.yonyou.com/project.php?stype=1&id=5'>公用事业</a>" +
//      "<a target='_blank' href='http://www.yonyouhit.com/'>医疗卫生</a>" +
//      "<a target='_blank' href='http://nc.yonyou.com/project.php?stype=1&id=42'>医药·农业</a>" +
//      "<a target='_blank' href='http://ny.yonyou.com/'>能源</a>" +
//      "</li>" +
//
//
//      "</ul>" +
//      
//      "<ul>" +
//      "<li class='biaoti'><span>领域</span></li>" +
//      "<li>" +
//      "<a target='_blank' href='http://bq.yonyou.com/bqweb/index.html'>大数据</a>" +
//      "<a target='_blank' href='http://nc.yonyou.com/project.php?stype=2&id=4'>财务共享</a>" +
//      "<a target='_blank' href='http://nc.yonyou.com/project.php?stype=2&id=5'>人力资本</a>" +
//      "</li>" +
//      "<li>" +
//      "<a target='_blank' href='http://nc.yonyou.com/project.php?stype=2&id=3'>智能制造</a>" +
//      "<a target='_blank' href='http://nc.yonyou.com/project.php?stype=2&id=1'>项目资产</a>" +
//      "</li>" +
//      "<li>" +
//      "<a target='_blank' href='http://www.yonyouaud.com/' >审计</a>" +
//      "<a target='_blank' href='http://nc.yonyou.com/project.php?stype=2&id=6'>数字营销</a>" +
//      "</li>" +
//      "</ul>" +
//      
        
        "</div>" +
        "</div>" +
//      "<div class='other'>" +
//      "<a target='_blank' href='http://www.yyuap.com/'>iUAP</a> | " +
//      "<span>企业互联网开放平台</span>" +
//      "</div>" +
        "</div>" +
        "</div>" +
     "</div>" +


        
        
        "<div class='list'>" +
        "<div class='main'>" +
        "<a href='javascript:void(0);' class='dot'></a>" +
        "<div class='dolist'>" +
        "<p class='pic'><img src='./static/images/pic1.jpg' alt=''  style='width:300px; height:174px'  /></p>" +
        "<p class='pic'><img src='./static/images/pic19.jpg' alt='' style='width:300px; height:174px' /></p>" +
        "<ul class='mu'>" +
        "<li><a href='about.html?id=0&v=0.0.2'>公司介绍</a></li>" +
        "<li><a href='about.html?id=1&v=0.0.2'>成员企业</a></li>" +
        "<li><a href='about.html?id=2&v=0.0.2'>企业文化</a></li>" +
      //  "<li><a href='about.html?id=3&v=0.0.2'>公司领导</a></li>" +
        "<li><a href='about.html?id=3&v=0.0.2'>荣誉</a></li>" +
        "<li><a href='about.html?id=4&v=0.0.2'>大事记</a></li>" +
       // "<li><a href='about.html?id=6&v=0.0.2'>投资者关系</a></li>" +
//      "<li><a href='about.html?id=7&v=0.0.2'>视觉</a></li>" +
     //   "<li><a href='about.html?v=0.0.5'>联系</a></li>" +
        "</ul>" +
        "</div>" +
        "</div> " +
        "</div>" +
        "<div class='list null'></div>" +
        "</div>" +
        "</div>" +
        "</div>";

    var siteMonitor = "<script type='text/javascript'>" +
        "(function() {" +
        "window._CiQ11147 = window._CiQ11147 || [];" +
        "window._CiQ11147.push(['_cookieUseRootDomain', true]);" +
        "var c = document.createElement('script');" +
        "c.type = 'text/javascript';" +
        "c.async = true;" +
        "c.charset = 'utf-8';" +
        "c.src = '//collect.cn.miaozhen.com/ca/11147';" +
        "var h = document.getElementsByTagName('script')[0];" +
        "h.parentNode.insertBefore(c, h);" +
        "})();" +
        "</script>" +
        "<noscript>" +
        "<link href='//collect.cn.miaozhen.com/refer/collect?i=11147&v=13922245942&pu=http%3A//%28NoScriptPageviews%29&pt=NoScriptPageviews&ru=http%3A//%28NoScriptClients%29&csh=1000&csw=1000&css=10' rel='stylesheet' type='text/css' />" +
        "</noscript>";

    var siteMonitor3 = "<script type='text/javascript'>" +

        "var _vds = _vds || [];" +
        "window._vds = _vds;" +
        " (function(){" +
        "_vds.push(['setAccountId', '89ec4486ee5197f5']);" +
        "(function() {" +
        "var vds = document.createElement('script');" +
        "vds.type='text/javascript';" +
        "vds.async = true;" +
        "vds.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'dn-growing.qbox.me/vds.js';" +
        "var s = document.getElementsByTagName('script')[0];" +
        "s.parentNode.insertBefore(vds, s);" +
        "})();" +
        "})();" +
        "</script>";

    var menu = function() {
        $(".menu li a").mouseover(function() {
            var i = $(this).parent("li").index();
            $(".menulist .list").each(function() {
                $(this).hide();
            });
            if (!$(".menulist .list").eq(i).hasClass("null")) {
                $(".menulist .list").eq(i).slideDown();
            }
        });
        $(".menulist .list").mouseleave(function() {
            $(".menulist .list").each(function() {
                $(this).hide();
            })
        });
        $(".menulist .list .container .tablist .bd ul li a").hover(function() {
                var i = $(this).parent("li").parent("ul").index();
                $(this).parent("li").parent("ul").parent(".bd").siblings(".hd").children("li").eq(i).addClass("active");
            },
            function() {
                var i = $(this).parent("li").parent("ul").index();
                $(this).parent("li").parent("ul").parent(".bd").siblings(".hd").children("li").eq(i).removeClass("active");
            });
        $(".dot").click(function() {
            $(this).parent(".container").parent(".main").parent(".list").slideUp()
        })
        $(window).scroll(function() {
            if ($(window).scrollTop() > 0) {
                //$(".indexheader").addClass("fixed");
                $(".indexheader .bar").slideUp();
                //$(".menulist").css({"top":"100px"})
            } else {
                //$(".indexheader").removeClass("fixed");
                $(".indexheader .bar").slideDown();
                //$(".menulist").css({"top":"145px"})
            }
        })
    };



    var init = function() {
        $("#headerjs").html(header);
        //菜单滑动
        menu();

        $("head").append(siteMonitor);
        $("head").append(siteMonitor3);

        //替换跳转地址
        $("a[href^=getBusinessToken]").each(function(index, link) {
            var hrefVal = $(this).attr("href");
            var index = hrefVal.indexOf("getBusinessToken");

            $(this).attr("href", serverHost + "/" + hrefVal.substring(index));
        })
    };

    init();
  
});