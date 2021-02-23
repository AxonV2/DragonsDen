
    $(document).ready(function()
    {
        //console.log("start")
        
        //(Import BackStrech)  
        $('.header-area').backstretch("img/wp.jpg");
        $('footer').backstretch("img/wpFooter.jpg");     
        
        var searchEmptyMessage = $("#searchMT")
        var categoryEmptyMessage = $("#categoryMT")
        searchEmptyMessage.hide()
        categoryEmptyMessage.hide()
        $(".cats").first().addClass('active');
        //console.log(showall)

        $(".cats").click(function(e)
        {
            emptyCategoryCheck()
            searchEmptyMessage.hide(250)
            categoryEmptyMessage.hide(250)

            e.preventDefault()
            
            //selected item
            var selectedA = $(this)
            console.log(selectedA)

            var $others = selectedA.closest("li").siblings().children("a")
            selectedA.addClass("active")
                    
            $others.removeClass("active")
        });


        //Override contains function for case-invariant comparison
        $.expr[":"].contains = $.expr.createPseudo(function(arg) {
            return function( elem ) {
                return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
            };
        });

        function emptySearchCheck() 
        {    
            //Delay in order to count the right amount of items 
            //after angular filter applies
            setTimeout(function()
            { 	
                items=$(".item");
                console.log(items.length)

                if(items.length == 0)
                {
                    searchEmptyMessage.show(250)

                    if(categoryEmptyMessage.is(":visible"))
                        categoryEmptyMessage.hide(250)
                }
                else if(searchEmptyMessage.is(":visible"))
                    searchEmptyMessage.hide(250)

            }, 650);
        }

        function emptyCategoryCheck() 
        {    
            //Delay in order to count the right amount of items 
            //after angular filter applies
            setTimeout(function()
            { 	
                items=$(".item");
                console.log(items.length)

                if(items.length == 0)
                {
                    categoryEmptyMessage.show(250)

                    if(searchEmptyMessage.is(":visible"))
                    searchEmptyMessage.hide(250)
                }
                else if(categoryEmptyMessage.is(":visible"))
                categoryEmptyMessage.hide(250)

            }, 650);
        }

        $("#searchInput").on('keyup',function() 
        {
            emptySearchCheck()

            var selectedItem = "";
            var input = $("#searchInput").val()

            if(input == "")
                searchEmptyMessage.hide(250)

            //console.log(input)

            selectedItem = $(".cats:contains('" + input + "')")
            selectedItem.addClass("active")

            if(selectedItem.length != 1)
            {
                $(".cats").each(function()
                {
                    $(this).removeClass("active")
                })
                //console.log(selectedItem)
                return
            }
            //console.log("input - " + input)
            
            var others = selectedItem.closest("li").siblings().children("a")
            selectedItem.addClass("active")
            others.removeClass("active")
        })


        //Resizes
        function checkWidth() 
        {
            var windowsize = $(window).width();
            if (windowsize < 800) 
            {
                $("#searchInput").hide(500)
                $("#searchFilterSmall").addClass("show")

                $("#title").css("font-size", "50px")
                $(".nav li a").addClass("short")
                $(".gallery-filter li a").addClass("short")
                $(".pagination div").addClass("short")
            }
            else
            {
                $("#searchInput").show(500);
                $("#searchFilterSmall").removeClass("show")

                $("#title").css("font-size", "70px")
                $(".nav li a").removeClass("short")
                $(".gallery-filter li a").removeClass("short")
                $(".pagination div").removeClass("short")

            }
        }

        checkWidth();
        $(window).resize(checkWidth);

        //Shortcuts
        let up=$('#goUp')
        let down=$('#goDown')
        let bottom = $(document).height()

        $(window).scroll(function()
        {
            //Update
            bottom = $(document).height()

            //console.log(bottom)
            //console.log($(window).scrollTop())   

            if($(window).scrollTop()>=200)
                up.addClass('show')
            else
                up.removeClass('show')

            if($(window).scrollTop() >= bottom - 1000)
                down.removeClass('show')
            else
                down.addClass('show')
        });


        up.on('click',function(e)
        {
            e.preventDefault();
            $('html,body').animate({scrollTop:0},1000)
        });

        down.on('click',function(e)
        {
            e.preventDefault();
            $('html,body').animate({scrollTop: bottom},1000)
        });


        $("#searchFilterSmall").on("focus",function()
        {
            $(this).attr("placeholder", "--Insert product/keyword/category name here--");
        })

        $("#searchFilterSmall").on("blur",function()
        {
            $(this).attr("placeholder", "Search");
        })
    })

 



    