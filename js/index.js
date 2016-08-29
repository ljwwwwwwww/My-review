$(document).ready(function(){
	var topInfoWrap=$(".top-info-warp");
	var email=$(".email");
	var header=$("header");
	var tel=$(".tel");
	var emailIcon=$("#top-email");
	var telIcon=$("#top-phone");
	var mySkills=$(".my-skills");
	var skillbar=$(".skills-bar");
	var skillTile=$(".skills-title");
	var windowHeight,windowscrollTop,headerHeight,mySkillsTop,halfskillbarHeight,myskillsHeight,skilltitleHeight;
	var htmlcss=$(".html-css"),javascript=$(".javascript"),jquery=$(".jquery"),
	    bootstrap=$(".bootstrap"),angularjs=$(".angularjs"),nodejs=$(".nodejs"),
	    reactjs=$(".reactjs");
	var bookCircle=$(".book-circle"),bookNumber=$(bookCircle).length;
	var footerButton=$("footer").find("button");
	$(window).scroll(function(){
        windowHeight=$(window).innerHeight();
		windowscrollTop=$(window).scrollTop();
		headerHeight=$(header).outerHeight();
		myskillsHeight=$(mySkills).outerHeight();
		mySkillsTop=(myskillsHeight-$(mySkills).height())/2;
		halfskillbarHeight=($(skillbar).height())/2;
		skilltitleHeight=$(skillTile).outerHeight();

		//topbar
		if(windowscrollTop>10&&windowscrollTop<headerHeight-100){
			$(topInfoWrap).removeClass("top-info-noscroll")
			$(topInfoWrap).addClass("top-info-scrolldown");
		}
		else{
			$(topInfoWrap).addClass("top-info-noscroll");
			$(topInfoWrap).removeClass("top-info-scrolldown");
	    }
	    //skillbar
		if(windowHeight+windowscrollTop<headerHeight+myskillsHeight+200){
			skillbarprogress(htmlcss,90,1);
			skillbarprogress(javascript,80,2);
			skillbarprogress(jquery,80,3);
			skillbarprogress(bootstrap,80,4);
			skillbarprogress(angularjs,60,5);
			skillbarprogress(nodejs,50,6);
			skillbarprogress(reactjs,40,7);
	    }
	})

    // email&phone
    $(emailIcon).hover(function(){
    	$(email).addClass("email-block");
    },function(){
    	$(email).removeClass("email-block");
    })
    $(telIcon).hover(function(){
    	$(tel).addClass("tel-block");
    },function(){
    	$(tel).removeClass("tel-block");
    })
	//skillbar function
	function skillbarprogress(obj,width,number){
		var width=width+"%";
	   	if(windowHeight+windowscrollTop>headerHeight+mySkillsTop+skilltitleHeight+halfskillbarHeight*2*(number-0.5)){
	        $(obj).css({"width":width});
	   	}
	}
	//bookfade
    for(var i=0;i<bookNumber;i++)
    {  
        $(bookCircle[i]).hover(function(){
	        $(this).addClass("book-circle-fade")},
	        function(){$(this).removeClass("book-circle-fade")})
    }
    //footer
    $(footerButton).click(function(){
    	$(window).scrollTop(0);
    })
})
