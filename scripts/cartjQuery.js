$(document).ready(function()
{
    var searchEmptyMessage = $("#cartMT")
    searchEmptyMessage.hide()


    //Delay in order to count the right amount of items 
    //after angular filter applies
    setTimeout(function()
    { 	
        var removeButton = $(".product button")

        removeButton.on('click',function(e)
        {
            emptySearchCheck()
            $('.checkout').addClass("disabled")

        });

    }, 650);

    function emptySearchCheck() 
    {            
        //Delay in order to count the right amount of items 
        //after angular filter applies
        setTimeout(function()
        { 	
            items=$(".product");
            console.log(items.length)

            if(items.length == 0)
            {
                searchEmptyMessage.show(250) 
                if(!$(".checkout").hasClass("disabled"))
                    $('.checkout').addClass("disabled")
            }
            else 
            { 
                $('.checkout').removeClass("disabled")
                searchEmptyMessage.hide(250)
            } 
        }, 650);
    }


    emptySearchCheck();
});
