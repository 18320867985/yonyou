$(function(){
	

	$(window).scroll(function(){

		if($(window).scrollTop() > 50){
			$(".banner_text p").removeClass("animate_top").addClass("animate_opa0")
			$(".header .search_modal").slideUp();
		}else{
			$(".banner_text p").removeClass("animate_opa0").addClass("animate_top")
			
		}



		

	})

	$(".lang .a").on("click",function(e){
		e.stopPropagation();
		$(".chinese_btn").show();
	})

	$("body").on("click",".header .search_box",function(e){
		e.stopPropagation();
		$(".header .search_modal").slideDown();
	})

	$("html").on("click","body",function(e){
		e.stopPropagation();
		$(".header .search_modal").slideUp();
		$(".chinese_btn").hide();
	})
	$("body").on("click",".search_in .text",function(e){
		e.stopPropagation();
	})
	/*
	$("body").on("mouseover",".submit_btn,.search_box span",function(){
		$(".search_box").addClass("on");
		$(".header .search_box .text").animate({"width":"203px"},300)

	})
	$("body").on("mouseleave",".search_box",function(){
		$(".search_box").removeClass("on")
		$(".header .search_box .text").width(0)
	})*/

	$(".index_main .modal_5 .option_hd li").mouseover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		var index = $(".index_main .modal_5 .option_hd li").index($(this));
		$(".index_main .modal_5 .option_bd .item").hide().eq(index).show();
	})

	$(".index_main .modal_2  .d3 li").mouseover(function(){
		$(this).addClass("on").siblings().removeClass("on");
	})
	

	$(".index_main .modal_4 .option_hd li").mouseover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		var index = $(".index_main .modal_4 .option_hd li").index($(this));
		$(".index_main .modal_4 .option_bd .item").hide().eq(index).show();
	})


	$(".server_pop .close_btn,.baoming_pop .close_btn").on("click",function(e){
		$(".server_pop,.mask,.baoming_pop ").hide();
	})

	$(".j_server_btn").on("click",function(e){
		$(".server_pop,.mask ").show();
	})


	$(".j_baoming_btn").on("click",function(e){
		$(".baoming_pop,.mask ").show();
	})

	
	$(".pro_list .inner .d3 .more_btn").on("click",function(e){
		if($(this).data("open") == "true"){
			$(this).data("open","false")
			$(this).parents(".d3").find("ul").css("max-height","186px");
		}else{
			$(this).data("open","true")
			$(this).parents(".d3").find("ul").css("max-height","100%");
		}

	})

	$(".fixed_r_nav .li_4 a").on("click",function(e){
        var speed=200;
        $('body,html').animate({ scrollTop: 0 }, speed);
		return false;
	})


	$(".news_nav .a").mouseover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		var index = $(".news_nav a").index($(this));
		$(".index_main .modal_6  .item").hide().eq(index).show();
	})

	$(".projiect_user li").mouseover(function(){
		var index = $(".projiect_user li").index($(this));
		$(".index_main .modal_4  .item").hide().eq(index).show();
		
		$(".index_main .modal_4 .ft").find("a").attr("href",$(this).find("a").attr("link"))

	})

	$(".key_nav li").mouseover(function(){
		$(".key_nav li a").removeClass("on");
		$(this).find("a").addClass("on")
		var index = $(".key_nav li").index($(this));
		$(".key_list_con .item").hide().eq(index).show();
	})

	$(".server_nav a").mouseover(function(){
		$(".server_nav  a").removeClass("on");
		$(this).addClass("on")
		var index = $(".server_nav a").index($(this));
		$(".server_intro .item").hide().eq(index).show();
	})

	


	$(window).on("scroll",function(){
		if($(window).scrollTop() < 150){
	        if($(".header").hasClass("index_header")){
	       		$(".header").removeClass("o_header")
			}else{
	        	$(".header").addClass("o_header")
			}
			$(".nav li").eq(2).on("mouseover",function(e){
				$(".o_sub_nav").hide();
				$(".fa_sub_nav").show();
				$(".header").addClass("o_header")
				e.stopPropagation();
			})
			$(".o_sub_nav ").on("mouseleave",function(e){
				$(".o_sub_nav").hide();
		        if($(".header").hasClass("index_header")){
		       		$(".header").removeClass("o_header")
				}else{
		        	$(".header").addClass("o_header")
				}
				e.stopPropagation();
			})

			$(".nav li").eq(3).on("mouseover",function(e){
				$(".o_sub_nav").hide();
				$(".kehu_sub_nav").show();
				$(".header").addClass("o_header")
				e.stopPropagation();
			})

			$(".nav li").eq(4).on("mouseover",function(e){
				$(".o_sub_nav").hide();
				$(".header").addClass("o_header")
				$(".dt_sub_nav").show();
				e.stopPropagation();
			})
			$(".nav li").eq(5).on("mouseover",function(e){
				$(".o_sub_nav").hide();
				$(".header").addClass("o_header")
				$(".fw_sub_nav").show();
				e.stopPropagation();
			})
		}else{
	        if($(".header").hasClass("index_header")){
	        	$(".header").addClass("o_header")
			}else{
	        	$(".header").addClass("o_header")
			}
			$(".nav li").eq(2).on("mouseover",function(e){
				e.stopPropagation();
				$(".o_sub_nav").hide();
				$(".fa_sub_nav").show();
			})
			$(".o_sub_nav ").mouseleave(function(e){
           		$(".header").addClass("o_header")
				e.stopPropagation();
				$(".o_sub_nav").hide();
			})

			$(".nav li").eq(3).mouseover(function(e){
				e.stopPropagation();
				$(".o_sub_nav").hide();
				$(".kehu_sub_nav").show();
			})

			$(".nav li").eq(1).mouseover(function(e){
				e.stopPropagation();
				$(".o_sub_nav").hide();
				$(".cp_sub_nav").show();
			})
			$(".nav li").eq(4).on("mouseover",function(e){
				$(".o_sub_nav").hide();
				$(".header").addClass("o_header")
				$(".dt_sub_nav").show();
				e.stopPropagation();
			})
			$(".nav li").eq(5).on("mouseover",function(e){
				$(".o_sub_nav").hide();
				$(".header").addClass("o_header")
				$(".fw_sub_nav").show();
				e.stopPropagation();
			})
		}
	})


	if($(window).scrollTop() < 150){
        if($(".header").hasClass("index_header")){
       		$(".header").removeClass("o_header")
		}else{
        	$(".header").addClass("o_header")
		}
		$(".nav li").eq(2).on("mouseover",function(e){
			$(".o_sub_nav").hide();
			$(".fa_sub_nav").show();
			$(".header").addClass("o_header")
			e.stopPropagation();
		})
		$(".o_sub_nav ").on("mouseleave",function(e){
			$(".o_sub_nav").hide();
	        if($(".header").hasClass("index_header")){
	       		$(".header").removeClass("o_header")
			}else{
	        	$(".header").addClass("o_header")
		}
			e.stopPropagation();
		})

		$(".nav li").eq(3).on("mouseover",function(e){
			$(".o_sub_nav").hide();
			$(".kehu_sub_nav").show();
			$(".header").addClass("o_header")
			e.stopPropagation();
		})

		$(".nav li").eq(1).on("mouseover",function(e){
			$(".o_sub_nav").hide();
			$(".header").addClass("o_header")
			$(".cp_sub_nav").show();
			e.stopPropagation();
		})
			$(".nav li").eq(4).on("mouseover",function(e){
				$(".o_sub_nav").hide();
				$(".header").addClass("o_header")
				$(".dt_sub_nav").show();
				e.stopPropagation();
			})
			$(".nav li").eq(5).on("mouseover",function(e){
				$(".o_sub_nav").hide();
				$(".header").addClass("o_header")
				$(".fw_sub_nav").show();
				e.stopPropagation();
			})
	}else{
        $(".header").addClass("o_header")
		$(".nav li").eq(2).on("mouseover",function(e){
			e.stopPropagation();
			$(".o_sub_nav").hide();
			$(".fa_sub_nav").show();
		})
		$(".o_sub_nav ").mouseleave(function(e){
			e.stopPropagation();
			$(".o_sub_nav").hide();
		})

		$(".nav li").eq(3).mouseover(function(e){
			e.stopPropagation();
			$(".o_sub_nav").hide();
			$(".kehu_sub_nav").show();
		})

		$(".nav li").eq(1).mouseover(function(e){
			e.stopPropagation();
			$(".o_sub_nav").hide();
			$(".cp_sub_nav").show();
		})
			$(".nav li").eq(4).on("mouseover",function(e){
				$(".o_sub_nav").hide();
				$(".header").addClass("o_header")
				$(".dt_sub_nav").show();
				e.stopPropagation();
			})
			$(".nav li").eq(5).on("mouseover",function(e){
				$(".o_sub_nav").hide();
				$(".header").addClass("o_header")
				$(".fw_sub_nav").show();
				e.stopPropagation();
			})
	}

	
	$(".fixed_r_nav .li_1 a").mouseover(function(e){
		$(this).addClass("on");
	})
	$(".fixed_r_nav .li_1 a").mouseout(function(e){
		$(this).removeClass("on");
	})


	$(".znzz_modal_2 .ft li").mouseover(function(){
		$(this).addClass("on").siblings().removeClass("on");
		var index =$(".znzz_modal_2 .ft li").index($(this));
		$(".znzz_modal_2 .bd .item").hide().eq(index).show();
	})

	$(".it_main .cx_server .text li").mouseover(function(){
		$(".it_main .cx_server .text li a").removeClass("on");
		$(this).find("a").addClass("on")
		var index =$(".it_main .cx_server .text li").index($(this));
		$(".it_main .cx_server .item").hide().eq(index).show();
	})

	$(".header").mouseleave(function(e){
		e.stopPropagation();
		$(".o_sub_nav").hide();
	})
	
	
	



})