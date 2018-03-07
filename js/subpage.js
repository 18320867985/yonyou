var subpage = {
    subnav: function () {
        $(".subnav .main ul li").click(function () {
            if ("netSeminar" == $(this).attr("id"))
                return true;

            $(this).parent("ul").children("li").each(function () {
                $(this).removeClass("on");
            });
            $(this).addClass("on");

            var i = $(this).index();
            //特殊需求 start
            if (i != 0) {
                $(".subnav").eq(1).addClass("hidden");
                $(".subnav").eq(1).next(".main").addClass("hidden");
            }
            else if (i == 0) {
                $(".subnav").eq(1).removeClass("hidden");
                $(".subnav").eq(1).next(".main").removeClass("hidden");
            }
            //特殊需求 end		
            var subcontent = $(this).parent("ul").parent(".main").parent(".subnav").next(".main").children(".subcontent");
            subcontent.each(function () {
                $(this).addClass("hidden");
            });
            subcontent.eq(i).removeClass("hidden");

        });
    },
    logo: function () {
        $(".subcontent .logo li").hover(function () {
            var i = $(this).index() + 1;
            $(this).find("img").attr("src", "../static/images/logo/lg" + i + "1.jpg")
        },
		function () {
		    var i = $(this).index() + 1;
		    $(this).find("img").attr("src", "../static/images/logo/lg" + i + "2.jpg")
		})
    },
    tabYears: function () {
        $(".categorytab").find(".item").each(function (index, element) {
            $(this).click(function () {
                //$(".categorytab").find(".item").removeClass("focus");
                //$(this).addClass("focus");
                //$(".categorycontent").children().hide();
                //$(".categorycontent").children().eq(index).show();
            })
        });
    }

}
$(function () {
    subpage.subnav();
    //subpage.logo();
    subpage.tabYears();

    var search = window.location.search;
    if (search.length > 0) {
        var idIndex = search.indexOf("id"),
            id = search.charAt(idIndex + 3);
        if (id > -1)
            $(".subnav .main ul li a")[id].click();
    }

})
