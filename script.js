var tl = gsap.timeline();

var counter=0;
function showHiddenContent() {
  document.getElementById('hiddenContent').style.display = 'block';
}

function time(){
    var a = 0
    counter++;
    setInterval(function(){
        a += Math.floor(Math.random()*20)
        if(a<100){
            document.querySelector("#loader h1").innerHTML = a+"%"
        }else{
            a = 100
            document.querySelector("#loader h1").innerHTML = a+"%"
        }
    },150)
}

if (!localStorage.getItem("loaderShown")) {
  // If not shown, run the loader animation
  localStorage.setItem("loaderShown", "true"); // Set the flag indicating the loader has been shown

  tl.to("#loader h1", {
      delay: 0.5,
      duration: 1,
      onStart: time,
  });

  tl.to(
      "#loader",
      {
          top: "-100vh",
          delay: 0.5,
          duration: 1.5,
          //  onComplete: showHiddenContent()
      },
      "-=0.5" // Adjust the timeline to start the second animation earlier
  );
} else {
  // If the loader has already been shown, hide it immediately
  document.getElementById("loader").style.display = "none";
  // showHiddenContent();
}










const txtContainers = document.querySelectorAll(".animate-text");
        txtContainers.forEach(animateText);

        function animateText(txtContainer) {
            const txts = txtContainer.children,
                txtsLen = txts.length;
            let index = 0;
            const textInTimer = 3000,
                textOutTimer = 2800;

            function animate() {
                for (let i = 0; i < txtsLen; i++) {
                    txts[i].classList.remove("text-in", "text-out");
                }
                txts[index].classList.add("text-in");

                setTimeout(function () {
                    txts[index].classList.add("text-out");
                }, textOutTimer);

                setTimeout(function () {
                    if (index == txtsLen - 1) {
                        index = 0;
                    } else {
                        index++;
                    }
                    animate();
                }, textInTimer);
            }

            animate();
        }


        var swiper = new Swiper(".slide-container", {
            slidesPerView: 3,
            spaceBetween: 20,
            sliderPerGroup: 3,
            loop: true,
            centerSlide: "true",
            fade: "true",
            grabCursor: "true",
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
              dynamicBullets: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          
            breakpoints: {
              0: {
                slidesPerView: 1,
              },
              520: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1000: {
                slidesPerView: 4,
              },
            },
          });

          let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
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

// Set a timeout to call the function after 5000 milliseconds (5 seconds)
// setTimeout(showHiddenContent, 5000);