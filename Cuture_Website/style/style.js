//To the top
// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



//swipper
var swiper2 = new Swiper(".mySwiper2", {
    slidesPerView: 1,
    spaceBetween: 1,
    slidesPerGroup: 1,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: ".swiper-pagination2",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next2",
      prevEl: ".swiper-button-prev2",
    },
    breakpoints: {
      590: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      700: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1280: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });
 
  var swiper6 = new Swiper(".mySwiper6", {
	slidesPerView: 4,
	spaceBetween: 2,
	slidesPerGroup: 1,
	loop: true,
	loopFillGroupWithBlank: true,
	pagination: {
	  el: ".swiper-pagination2",
	  clickable: true,
	},
	navigation: {
	  nextEl: ".swiper-button-next2",
	  prevEl: ".swiper-button-prev2",
	},
	breakpoints: {
	 360: {
		slidesPerView: 3,
		spaceBetween: 2,
		},
	  590: {
		slidesPerView: 5,
		spaceBetween: 2,
	  },
	  880: {
		slidesPerView: 7,
		spaceBetween: 2,
	  },
	  1024: {
		slidesPerView: 8,
		spaceBetween: 2,
	  },
	  1280: {
		slidesPerView: 10,
		spaceBetween: 2,
	  },
	  1400:{
		slidesPerView: 15,
		spaceBetween: 2,
	  }
	},
  });        

  //pagination
  var tbody = document.querySelector(".category-body");
		var pageUl = document.querySelector(".pagination");
		var itemShow = document.querySelector("#itemperpage");
		var tr = tbody.querySelectorAll(".row");
		var emptyBox = [];
		var index = 1;
		var itemPerPage = 15;

		for(let i=0; i<tr.length; i++){ emptyBox.push(tr[i]);}

		itemShow.onchange = giveTrPerPage;
		function giveTrPerPage(){
			itemPerPage = Number(this.value="07");
			// console.log(itemPerPage);
			displayPage(itemPerPage);
			pageGenerator(itemPerPage);
			getpagElement(itemPerPage);
		}

		function displayPage(limit){
			tbody.innerHTML = '';
			for(let i=0; i<limit; i++){
				tbody.appendChild(emptyBox[i]);
			}
			const  pageNum = pageUl.querySelectorAll('.list');
			pageNum.forEach(n => n.remove());
		}
		displayPage(itemPerPage);

		function pageGenerator(getem){
			const num_of_tr = emptyBox.length;
			if(num_of_tr <= getem){
				pageUl.style.display = 'none';
			}else{
				pageUl.style.display = 'flex';
				const num_Of_Page = Math.ceil(num_of_tr/getem);
				for(i=1; i<=num_Of_Page; i++){
					const li = document.createElement('li'); li.className = 'list';
					const a =document.createElement('a'); a.href = '#'; a.innerText = i;
					a.setAttribute('data-page', i);
					li.appendChild(a);
					pageUl.insertBefore(li,pageUl.querySelector('.next'));
				}
			}
		}
		pageGenerator(itemPerPage);
		let pageLink = pageUl.querySelectorAll("a");
		let lastPage =  pageLink.length - 2;
		
		function pageRunner(page, items, lastPage, active){
			for(button of page){
				button.onclick = e=>{
					const page_num = e.target.getAttribute('data-page');
					const page_mover = e.target.getAttribute('id');
					if(page_num != null){
						index = page_num;

					}else{
						if(page_mover === "next"){
							index++;
							if(index >= lastPage){
								index = lastPage;
							}
						}else{
							index--;
							if(index <= 1){
								index = 1;
							}
						}
					}
					pageMaker(index, items, active);
				}
			}

		}
		var pageLi = pageUl.querySelectorAll('.list'); pageLi[0].classList.add("active");
		pageRunner(pageLink, itemPerPage, lastPage, pageLi);

		function getpagElement(val){
			let pagelink = pageUl.querySelectorAll("a");
			let lastpage =  pagelink.length - 2;
			let pageli = pageUl.querySelectorAll('.list');
			pageli[0].classList.add("active");
			pageRunner(pagelink, val, lastpage, pageli);
			
		}
	
		
		
		function pageMaker(index, item_per_page, activePage){
			const start = item_per_page * index;
			const end  = start + item_per_page;
			const current_page =  emptyBox.slice((start - item_per_page), (end-item_per_page));
			tbody.innerHTML = "";
			for(let j=0; j<current_page.length; j++){
				let item = current_page[j];					
				tbody.appendChild(item);
			}
			Array.from(activePage).forEach((e)=>{e.classList.remove("active");});
     		activePage[index-1].classList.add("active");
		}

		//product-details


		


