$(".packages_carasoul .owl-carousel").owlCarousel({
  loop: true,
  smartSpeed: 240,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

$(".review_carasoul .owl-carousel").owlCarousel({
  loop: true,
  smartSpeed: 240,
  padding: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 2,
    },
  },
});

$(".partner_carasoul .owl-carousel").owlCarousel({
  loop: true,
  smartSpeed: 240,
  padding: 10,
  autoplay: true,
  autoplayTimeout: 3000,
  dots: false,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 6,
    },
  },
});

document.querySelector(".chat").addEventListener("click", function () {
  document.querySelector(".chatpopup").style.display = "flex";
  document.querySelector(".chat").style.display = "none";
});
document.querySelector(".fa-minus").addEventListener("click", function () {
  document.querySelector(".chatpopup").style.display = "none";
  document.querySelector(".chat").style.display = "block";
});
document.querySelector(".top").addEventListener("click", function () {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    document.querySelector(".top").style.display = "block";
  } else {
    document.querySelector(".top").style.display = "none";
  }
});

window.addEventListener("scroll", function () {
  if (window.scrollY > 90) {
    document.querySelector(".header").style.backgroundColor = "#19232d";
  } else {
    document.querySelector(".header").style.backgroundColor = "transparent";
  }
});

gsap.from(".banner_main .item strong", {
  y: 20,
  duration: 1.5,
  delay: 0.5,
  opacity: 0,
});
gsap.from(".banner_main .item h1", {
  y: 20,
  duration: 1.5,
  delay: 0.7,
  opacity: 0,
});
gsap.from(".banner_main .item p", {
  y: 20,
  duration: 1.5,
  delay: 0.9,
  opacity: 0,
});
gsap.from(".banner_main .item .action_btn", {
  y: 20,
  duration: 1.5,
  delay: 1.1,
  opacity: 0,
});

gsap.from(".chat", {
  y: 20,
  duration: 0.5,
  delay: 3,
  opacity: 0,
});

let a = document.querySelector(".counter_box:nth-child(1) h2").innerText;
let b = document.querySelector(".counter_box:nth-child(1) h2").innerText;
let c = document.querySelector(".counter_box:nth-child(1) h2").innerText;
let d = document.querySelector(".counter_box:nth-child(1) h2").innerText;
window.addEventListener("scroll", () => {
  if (scrollY > 2900) {
    setInterval(() => {
      if (a < 31) {
        document.querySelector(".counter_box:nth-child(1) h2").innerText = a++;
      }
      if (b < 101) {
        document.querySelector(".counter_box:nth-child(2) h2").innerText = b++;
      }
      if (c < 81) {
        document.querySelector(".counter_box:nth-child(3) h2").innerText = c++;
      }
      if (d < 56) {
        document.querySelector(".counter_box:nth-child(4) h2").innerText = d++;
      }
    }, 200);
  }
});

var temp = 0;
var temp1 = 0;
var temp2 = 0;
var temp3 = 0;
var temp4 = 0;
var temp5 = 0;


document.querySelector(".fa-bars").addEventListener("click", function () {
  if (temp == 0) {
    document.querySelector(".media_menu").style.maxHeight = "1000px";
    temp = 1;
  } else {
    document.querySelector(".media_menu").style.maxHeight = "0px";
    temp = 0;
  }
});

document.querySelector("#homeid").addEventListener("click", function () {
  if (temp1 == 0) {
    document.querySelector("#homesub").style.display = "block";
    document.querySelector("#aboutsub").style.display = "none";
    document.querySelector(".down").style.transform = "rotate(180deg)";
    temp1 = 1;
  } else {
    document.querySelector("#homesub").style.display = "none";
    document.querySelector(".down").style.transform = "rotate(0deg)";

    temp1 = 0;
  }
});
document.querySelector("#aboutus").addEventListener("click", function () {
  if (temp2 == 0) {
    document.querySelector("#aboutsub").style.display = "block";
    document.querySelector("#homesub").style.display = "none";
    document.querySelector(".down1").style.transform = "rotate(180deg)";
    document.querySelector(".down").style.transform = "rotate(0deg)";

    temp2 = 1;
  } else {
    document.querySelector("#aboutsub").style.display = "none";
    document.querySelector(".down1").style.transform = "rotate(0deg)";

    temp2 = 0;
  }
});

document.querySelector("#footer1").addEventListener("click", function () {
  if (temp3 == 0) {
    document.querySelector(".footer_list").style.display = "block";
    document.querySelector(".footer_second").style.display = "none";
    document.querySelector(".footer_last_list").style.display = "none";

    temp3 = 1;
  } else {
    document.querySelector(".footer_list").style.display = "none";
    temp3 = 0;
  }
});
document.querySelector("#footer2").addEventListener("click", function () {
  if (temp4 == 0) {
    document.querySelector(".footer_second").style.display = "block";
    document.querySelector(".footer_list").style.display = "none";
    document.querySelector(".footer_last_list").style.display = "none";

    temp4 = 1;
  } else {
    document.querySelector(".footer_second").style.display = "none";
    temp4 = 0;
  }
});
document.querySelector("#footer3").addEventListener("click", function () {
  if (temp5 == 0) {
    temp5 = 1;
    document.querySelector(".footer_last_list").style.display = "block";
    document.querySelector(".footer_second").style.display = "none";
    document.querySelector(".footer_list").style.display = "none";
  } else {
    temp5 = 0;
    document.querySelector(".footer_last_list").style.display = "none";
  }
});


gsap.from(".newsattele .newsattle-inner", {
  y:-20,
  delay:1.5,
  opacity: 0,
});



document.querySelector(".cross").addEventListener("click", function () {
  document.querySelector(".newsattele").style.display = "none";
  document.querySelector("body").style.overflow = "visible";

});






{
  /* <div class="main_header">
<div class="header">
  <div class="container">
    <div class="header_inner">
      <div class="header_image">
        <img src="assets/images/airflylogo.png" alt="header_image" width="160px" height="44px">
      </div>
      <div class="header_item">
        <ul>
          <li><a href="#">home<i class="fa-solid fa-angle-down"></i></a>

            <ul class="submenu">
              <li><a href="#">homepage 01</a></li>
              <li><a href="#">homepage 02</a></li>
              <li><a href="#">homepage 03</a></li>
            </ul>

          </li>
          <li><a href="#">about</a></li>
          <li><a href="#">planes<i class="fa-solid fa-angle-down"></i></a>

            <ul class="submenu">
              <li><a href="#">plane one</a></li>
              <li><a href="#">plane two</a></li>
              <li><a href="#">plane search</a></li>
              <li><a href="#">plane book</a></li>
              <li><a href="#">plane single</a></li>
            </ul>

          </li>
          <li><a href="#">pages<i class="fa-solid fa-angle-down"></i></a>

            <ul class="submenu">
              <li><a href="#">about us</a></li>
              <li><a href="#">package</a></li>
              <li><a href="#">testimonials</a></li>
              <li><a href="#">contact us</a></li>
              <li><a href="#">faq</a></li>
              <li><a href="#">account page</a></li>
              <li><a href="#">404 error</a></li>
              <li><a href="#">coming soon</a></li>
              <li><a href="#">team of services</a></li>
              <li><a href="#">privacy policy</a></li>
            </ul>

          </li>
          <li><a href="#">services<i class="fa-solid fa-angle-down"></i></a>


            <ul class="submenu">
              <li><a href="#">sevices</a></li>
              <li><a href="#">service single</a></li>
            </ul>


          </li>
          <li><a href="#">blog<i class="fa-solid fa-angle-down"></i></a>


            <ul class="submenu">
              <li><a href="#">blog</a></li>
              <li><a href="#">blog single</a></li>
            </ul>


          </li>
          <li><a href="#">contact</a></li>
        </ul>

        <a href="#" class="plane_btn "><i class="fa-solid fa-plane-departure"></i>book now</a>
        <div class="media_icon">
          <i class="fa-solid fa-bars"></i>
          <ul class="media_menu">
            <li>
              <a href="#" id="homeid">home<i class="fa-solid fa-angle-down down"></i></a>
              <ul class="submenu-2" id="homesub">
                <li><a href="#">homepage 01</a></li>
                <li><a href="#">homepage 02</a></li>
                <li><a href="#">homepage 03</a></li>
              </ul>
            </li>
            <li><a href="#">home</a></li>
            <li><a href="#" id="aboutus">about us<i class="fa-solid fa-angle-down down1"></i></a>
              <ul class="submenu-2" id="aboutsub">
                <li><a href="#">about us</a></li>
                <li><a href="#">package</a></li>
                <li><a href="#">testimonials</a></li>
                <li><a href="#">contact us</a></li>
                <li><a href="#">faq</a></li>
                <li><a href="#">account page</a></li>
                <li><a href="#">404 error</a></li>
                <li><a href="#">coming soon</a></li>
                <li><a href="#">team of services</a></li>
                <li><a href="#">privacy policy</a></li>
              </ul>
            </li>
            <li><a href="#">home</a></li>
            <li><a href="#">home</a></li>
            <li><a href="#">home</a></li>

          </ul>

        </div>
      </div>




    </div>
  </div>
</div>
</div> */
}
