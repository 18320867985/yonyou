var index = {
    feature: function() {
        if ($("#feature").length > 0) {
            $("#feature li").each(function() {
                var src = $(this).find("img").attr("src");
                //$(this).find("img").remove();
                //$(this).find("a").css({"background":"url("+ src +") center center no-repeat"})
            });
            $("#feature").slide({
                titCell: ".hd ul li",
                mainCell: ".bd ul",
                effect: "left",
                autoPlay: true,
                delayTime: 500,
                startFun: function(i, c) {
                    var aLink = $("#feature .bd li > a:eq(" + i + ")");
                  //  if (!aLink.attr("style"))
                      aLink.attr("style", "background-image:url(./static/images/banner/feature" + (parseInt(i) + 1) + ".jpg); background-repeat:no-repeat; background-size:100% 100%;-moz-background-size:100% 100%;");
                }
            });
            var l = ($(window).width() - $("#feature .main").width()) / 2;
            var l2 = ($("#feature").width() - $("#feature .hd ul").width()) / 2;
            $("#feature .main").css({ "left": l });
            $("#feature .hd").css({ "left": l2 });
        }
    },
    loginnhot: function() {
        $(".loginnhot .bx .label").click(function() {
            if ($(".loginb").is(":hidden")) {
                $(this).siblings(".loginb").slideDown();
                $(this).addClass("on");
            } else {
                $(this).siblings(".loginb").slideUp();
                $(this).removeClass("on");
            }
            return;
        });
    },

    banner: function() {
        if ($(".picScroll-left").length > 0)
            $(".picScroll-left").slide({ titCell: ".hd ul", mainCell: ".bd ul", autoPage: true, effect: "left", autoPlay: true, vis: 6 });
        $(".picList li .pic").hover(function() {
            $(this).children('.links').animate({ top: 0 }, 600, function() {});
        }, function() {
            $(this).children('.links').stop(true, true);
            $(this).children('.links').animate({ top: "100%" }, 600, function() {});
        });
    },


    //行业解决方案 和 领域解决方案 切换

    solutions: function() {
        $(".ly li").click(function() {
            if ($(this).attr("class") != "active") {
                $(this).siblings(".active").removeClass();
                $(this).addClass('active');
                $(this).parent().next().children().hide();
                $(this).parent().next().children().eq($(this).index()).show();
            }
        });
    },



    //企业空间,表魅网等 鼠标hover 菜单滑出
    links: function() {
        $(".link_box").hover(function() {
            $(this).children('.link').hide().next().stop().animate({ top: 0 }, 600, function() {});
        }, function() {
            $(this).children('.link').show().next().stop().animate({ top: "100%" }, 600, function() {});
        });
    },

    //企业新闻切换
    news: function() {
        $(".news_content").children().eq(0).show();
        $(".news_menu ul li").click(function() {
            if ($(this).attr("class") != "active") {
                $(this).siblings(".active").removeClass();
                $(this).addClass('active');
                $(".news_content").children().hide();
                $(".news_content").children().eq($(this).index()).show();
            }
        });
    },

    leftmenu: function() {
        $(".leftmenu").css({ "width": "50" });
        $(window).scroll(function() {
            if ($(window).scrollTop() > 200) {
                $(".leftmenu").fadeIn(300);
            } else {
                $(".leftmenu").fadeOut();
            }
        });
        $(".lm_5").click(function() {
            $('body,html').animate({ scrollTop: 0 }, 1000);
            return false;
        });

        $(".bar li a").click(function() {
            $(".leftmenu").css({ "width": "250" });
            $(".bar li").each(function() {
                $(this).children(".open").animate({ left: -250 }, 200);
            });
            $(this).siblings(".open").animate({ left: 50 }, 200, function() {
                //                $(this).css({"z-index":200});
            });
        });
        $(".bar").mouseleave(function() {
            $(".leftmenu").css({ "width": "50" });
            $(".bar li").each(function() {
                $(this).children(".open").animate({ left: -250 }, 200, function() {
                    //                    $(this).css({"z-index":-200});
                });
            });
        })
    }




}
$(function() {
    index.feature();
    index.loginnhot();
    index.banner();
    index.solutions();
    index.links();
    index.news();
    index.leftmenu();
})