//header nav dropdown 
function myFunction(){
    document.getElementById("mydropdown").classList.toggle("show");
}
function currencyFunction(){
  document.getElementById("mydropdown-currency").classList.toggle("show");
}
function settingFunction(){
  document.getElementById("mydropdown-setting").classList.toggle("show");
}
function settingmobileFunction(){
  document.getElementById("mydropdown-setting-mobile").classList.toggle("show");
}

//middle nav dropdown 
function yourFunction(){
    document.getElementById("mydropdown-nav").classList.toggle("show");
}

//header nav dropdown 
window.onclick= function(event){
    if(!event.target.matches('.dropbtn-currency')){
        var dropdown= document.getElementsByClassName("dropdown-content-currency");
        var i;
        for(i=o;i<dropdown.length; i++){
            var openDropdown = dropdown[i];
            if(openDropdown.classList.contain('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}
window.onclick= function(event){
  if(!event.target.matches('.dropbtn-setting')){
      var dropdown= document.getElementsByClassName("dropdown-content-setting");
      var i;
      for(i=o;i<dropdown.length; i++){
          var openDropdown = dropdown[i];
          if(openDropdown.classList.contain('show')){
              openDropdown.classList.remove('show');
          }
      }
  }
}

window.onclick= function(event){
  if(!event.target.matches('.dropbtn-setting-mobile')){
      var dropdown= document.getElementsByClassName("dropdown-content-setting-mobile");
      var i;
      for(i=o;i<dropdown.length; i++){
          var openDropdown = dropdown[i];
          if(openDropdown.classList.contain('show')){
              openDropdown.classList.remove('show');
          }
      }
  }
}


window.onclick= function(event){
  if(!event.target.matches('.dropbtn')){
      var dropdown= document.getElementsByClassName("dropdown-content");
      var i;
      for(i=o;i<dropdown.length; i++){
          var openDropdown = dropdown[i];
          if(openDropdown.classList.contain('show')){
              openDropdown.classList.remove('show');
          }
      }
  }
}


//middle nav dropdown 
window.onclick= function(event){
    if(!event.target.matches('.dropbtn-nav')){
        var dropdown2= document.getElementsByClassName("dropdown-content-nav");
        var i;
        for(i=o;i<dropdown2.length; i++){
            var openDropdown = dropdown2[i];
            if(openDropdown.classList.contain('show')){
                openDropdown.classList.remove('show');
            }
        }
        }
    }

// swiper od produce have auto slide
    var swiper1 = new Swiper(".mySwiper1", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });    

// swiper od produce have 5 part
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
            spaceBetween: 0,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 5,
            spaceBetween: 0,
          },
        },
      });  

// swiper od produce have two part
      var swiper3 = new Swiper(".mySwiper3", {
        slidesPerView: 1,
        spaceBetween: 0,
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
            spaceBetween: 0,
          },
          750: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        },
      });  


// class that jaek jea picture zoom and swiper
      var swiper4 = new Swiper(".mySwiper4", {
        slidesPerView: 4,
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
            spaceBetween: 0,
          },
          700: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          1280: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
        },
      });  

//logo slider swiper
var swiper5 = new Swiper(".mySwiper5", {
  slidesPerView: 2,
  spaceBetween: 30,
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
      slidesPerView: 3,
      spaceBetween: 0,
    },
    770: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
    1280: {
      slidesPerView: 5,
      spaceBetween: 0,
    },
  },
  
});        

var swiper6 = new Swiper(".mySwiper6", {
  slidesPerView: 1,
  spaceBetween: 0,
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
      spaceBetween: 0,
    },
    700: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
  },
});        