	
	//Might be some bugs here and there
	//But works well for the time being
	let items; let prev; let next; let page; let maxPages;
	const maximumItems=9;
	let pageNumber=1;

	function disableCheck()
	{		
	  if(pageNumber==1)
		  	prev.classList.add("disabled");
	  else
			prev.classList.remove("disabled");	
  
	  if(pageNumber==maxPages)
			next.classList.add("disabled");
	  else
		   	next.classList.remove("disabled");	
	}
  
	function showItems() 
	{
		for(let i = 0; i < items.length; i++)
		{
			items[i].classList.remove("show");
			items[i].classList.add("hide");
			
			//Page item limit
			if(i >= (pageNumber * maximumItems) - maximumItems && i < pageNumber * maximumItems)
			{
				items[i].classList.remove("hide");
				items[i].classList.add("show");
			}

			page.innerHTML=pageNumber;
		}	 	
	}

	//Delay in order to count the right amount of items 
    //after angular filter applies
	function pageItemReset()
	{
		setTimeout(function()
		{ 	
			items=document.querySelectorAll(".item");
			pageNumber = 1;

			console.log(items)

			if(items.length != 0)
				maxPages = Math.ceil(items.length/maximumItems);
			else
				maxPages = 1;

			disableCheck();
			showItems(); 
		}, 650);
	}

	function normalReset()
	{
			items=document.querySelectorAll(".item");
			//console.log(items)
			//console.log(items.length)
			showItems();
			disableCheck(); 	
	}
	
	window.onload=function()
	{
		items=document.querySelectorAll(".item");
		prev=document.querySelector(".prev");
		next=document.querySelector(".next");
		page=document.querySelector(".pageNum");

		//Category filters
		showAllClick = document.querySelectorAll(".cats");
		searchInput = document.getElementById("searchInput");

		maxPages = Math.ceil(items.length/maximumItems);

		//console.log(items.length)
		//console.log(maxPages)
	
		normalReset()

		prev.addEventListener("click",function()
		{
		  	pageNumber--;
		 	normalReset()
		})
	  
		next.addEventListener("click",function()
		{
			pageNumber++;
			normalReset()  
		})

		searchInput.addEventListener("keyup",function()
		{
			//console.log(searchInput.value)
			if(searchInput.value == "" || searchInput.value.length == 0	|| pageNumber > 1)
			{
				//console.log("mt")
				pageItemReset();
			}

		})

		//Add event listener to each category button 
		for(let i = 0; i < showAllClick.length; i++)
		{
			showAllClick[i].addEventListener("click", function() { pageItemReset(); })
		}

	}













