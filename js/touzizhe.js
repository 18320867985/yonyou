$(function () {
    var init,
        linshi = $("#linshigonggao"),
        jidu = $("#jidugonggao"),
        bannian = $("#banniangonggao"),
        nian = $("#niangonggao");

    init = function () {
        $.ajax({
            url: "/Handlers/GetTouzizheService.ashx",
            type: "get",
            success: function (data) {
                data = JSON.parse(data);
                if (data) {
                    linshi.empty();
                    jidu.empty();
                    bannian.empty();
                    nian.empty();

                    $.each(data.linshi, function (index,item) {
                        linshi.append('<li><a href="' + item.PubLink + '" target="_blank" title="">' + item.title + '</a><span> (' + item.pubDate + ')</span></li>');
                    });

                    $.each(data.jidu, function (index, item) {
                        jidu.append('<li><a href="' + item.PubLink + '" target="_blank" title="">' + item.title + '</a><span> (' + item.pubDate + ')</span></li>');
                    });

                    $.each(data.bannian, function (index, item) {
                        bannian.append('<li><a href="' + item.PubLink + '" target="_blank" title="">' + item.title + '</a><span> (' + item.pubDate + ')</span></li>');
                    });

                    $.each(data.nian, function (index, item) {
                        nian.append('<li><a href="' + item.PubLink + '" target="_blank" title="">' + item.title + '</a><span> (' + item.pubDate + ')</span></li>');
                    });

                }

            }
        });
    }

    init();
});