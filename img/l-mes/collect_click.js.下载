$(function () {
    var pattern = /^(http|\/)/i;

    var text;
    // 返回点击标签内容
    function getInnerText(el) {
        console.log($(el.parentNode));
        if ($(el.parentNode).css('cursor') === 'pointer'){
            getInnerText(el.parentNode)
        }else {
            text = el.innerText;
            return text;
        }
    }

    $("html").on('click',"body",function (e) {
		if ($(e.target).css('cursor') === 'pointer'){
            getInnerText(e.target);
            var innerText = text;
            console.log(innerText)
        }
		  if (innerText !== undefined){
            var data={};
            data['DataTime']=new Date().format("yyyy-MM-dd hh:mm:ss").toLocaleString();
            var e = e||window.event;
            var x,y;
            x = e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft;
            y = e.clientY+document.body.scrollTop+document.documentElement.scrollTop;

            data['clickX'] = x;
            data['clickY'] = y;

            console.log(configs.collect_url);
            yyCollecter.track(
                innerText,
                data,
                'click'
            );
        }
    });
})