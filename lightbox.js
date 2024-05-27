// function to include html popupcode

function includepopupHTML() {
  let html = ` <div id="vis-popup"><span>
     <i id="closeimg" onclick="closePopup()" class="fa-solid fa-xmark"></i></span>
     <i id="leftarrow" class="fa-solid fa-angle-right"></i>
     <i id="rightarrow" class="fa-solid fa-angle-left"></i>
     <img
       src="img/slider (1).jpg"
       height="80%"
       width="80% "
       alt=""
       id="mainppimage"
     />
   </div>`;

  let popdiv = document.createElement("div");
  popdiv.innerHTML = html;

  document.body.insertBefore(popdiv, document.body.firstChild);
}

let img;
let current;

// function to init plugin

function imagePopupInint(target) {
  // select all images with classes target.
  img = document.getElementsByClassName(target);
  console.log(img);
}

//  add event listneer on slected image
imagePopupInint("popup");

for (let i = 0; i < img.length; i++) {
  // add pointer

  img[i].style.cursor = "pointer";

  // add event listner

  img[i].addEventListener("click", function () {
    // document.getElementById("slider(1)").src = this.src;

    document.querySelector("#mainppimage").src = this.src;
    document.getElementById("vis-popup").style.display = "block";
    cheakArrow();
  });

  includepopupHTML();

  //   next button

  document.getElementById("rightarrow").addEventListener("click", nextimg);

  // prev button
  document.getElementById("leftarrow").addEventListener("click", previmg);
}

// }

// // close popup

function closePopup() {
  document.querySelector("#mainppimage").src = "";
  document.getElementById("vis-popup").style.display = "none";
}

// right image click
function nextimg() {
  getCurrentImage();
  current++;
  document.getElementById("mainppimage").src = img[current].src;
  cheakArrow();
}

// left image click

function previmg() {
  getCurrentImage();
  current--;
  document.getElementById("mainppimage").src = img[current].src;
  cheakArrow();
}

function getCurrentImage() {
  for (let i = 0; i < img.length; i++) {
    if (img[i].src == document.getElementById("mainppimage").src) {
      current = i;
    }
  }
}

function cheakArrow() {
  getCurrentImage();
  if (current == "0") {
    document.getElementById("leftarrow").style.display = "none";
    document.getElementById("rightarrow").style.display = "block";
  } else if (current == img.length - 1) {
    document.getElementById("rightarrow").style.display = "none";
    document.getElementById("leftarrow").style.display = "block";
  } else {
    document.getElementById("leftarrow").style.display = "block";
    document.getElementById("rightarrow").style.display = "block";
  }
}
// Function to include HTML popup code
// function includepopupHTML() {
//     const html = `
//         <div id="vis-popup">
//             <span>
//                 <i id="closeimg" onclick="closePopup()" class="fa-solid fa-xmark"></i>
//             </span>
//             <i id="leftarrow" class="fa-solid fa-angle-right"></i>
//             <i id="rightarrow" class="fa-solid fa-angle-left"></i>
//             <img src="" height="80%" width="80%" alt="" id="mainppimage" />
//         </div>`;

//     const popdiv = document.createElement("div");
//     popdiv.innerHTML = html;

//     document.body.insertBefore(popdiv, document.body.firstChild);
// }

// // Function to initialize plugin
// function imagePopupInit(target) {
//     const images = document.getElementsByClassName(target);

//     Array.from(images).forEach(img => {
//         img.style.cursor = 'pointer';
//         img.addEventListener("click", function(event) {
//             document.getElementById("mainppimage").src = event.target.src;
//             document.getElementById("vis-popup").style.display = 'block';
//         });
//     });

//     includepopupHTML();
// }

// // Function to close popup
// function closePopup() {
//     document.getElementById("mainppimage").src = "";
//     document.getElementById("vis-popup").style.display = 'none';
// }
