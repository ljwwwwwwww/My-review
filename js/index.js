$(document).ready(function(){
	var topInfoWrap=$(".top-info-warp"),email=$(".email"),header=$("header"),tel=$(".tel");
	var emailIcon=$("#top-email"),telIcon=$("#top-phone"),topPhoto=$("#top-photo");
	var navList=$("nav"),navListItem=$(navList).find("li"),navLength=$(navListItem).length;
	console.log(navLength)
	var mySkills=$(".my-skills"),skillbar=$(".skills-bar"),skillTile=$(".skills-title");
	var windowHeight,windowscrollTop,headerHeight,mySkillsTop,halfskillbarHeight,myskillsHeight,skilltitleHeight;
	var htmlcss=$(".html-css"),javascript=$(".javascript"),jquery=$(".jquery"),
	    bootstrap=$(".bootstrap"),angularjs=$(".angularjs"),nodejs=$(".nodejs"),
	    reactjs=$(".reactjs");
	var bookCircle=$(".book-circle"),bookNumber=$(bookCircle).length;
	var gitIcon=$(".my-project").find("img");
	var projectLink=$(".project-link"),linkLeft=$(".link-left"),linkRight=$(".link-right");
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
    //photofade
    $(topPhoto).hover(function(){
            $(this).addClass("photo-hover");
        },
    	function(){
    		$(this).removeClass("photo-hover");
    	})
    //footer
    $(footerButton).click(function(){
    	$(window).scrollTop(0);
    })
    //giticonchange
    var timeout;
    $(gitIcon).mouseenter(function(){
    	clearTimeout(timeout);
    	$(this).addClass("iconchange");
    	timeout=setTimeout(function(){
    	    $(gitIcon).removeClass("iconchange");
    	},5000)
    })
    //projectlink
    $(projectLink).click(function(){
    	$(this).addClass("linkdis");
    	$(linkLeft).addClass("link-left-slide");
    	$(linkRight).addClass("link-right-slide");
    })
    //sidebar-nav
    for(var i=0;i<navLength;i++){
    	$(navListItem[i]).hover(function(){
    		$(this).addClass("navhover")
    	},function(){
    		$(this).removeClass("navhover")
    	})
    }
})
