AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [
  {
    title: "Python",
    cardImage: "assets/images/education-page/dicoding.jpg",
    moocLink: "https://drive.google.com/drive/folders/1oWXoOS6gfwmZok2IQ5NLVzEpfRGrE4X3",
  },
  {
    title: "Javascript",
    cardImage: "assets/images/education-page/javascript.jpg",
    moocLink: "https://drive.google.com/drive/folders/1rDgZb3aIXVMB2SJkJ1fyJzbhH1vsRCY4",
  },
  {
    title: "UX Designer",
    cardImage: "assets/images/education-page/ux-designer.jpg",
    moocLink: "https://drive.google.com/drive/folders/1ZX4iz3cW20x1Tk_mzTzUaeC4wK9qhEcK",
  },
  {
    title: "PHP",
    cardImage: "assets/images/education-page/PHP.jpg",
    moocLink: "https://drive.google.com/drive/folders/1FB_zx4vV3yQxpRIXX9cAq2vF-DIqwhrf",
  },
  {
    title: "SQL",
    cardImage: "assets/images/education-page/SQL.jpg",
    moocLink: "https://drive.google.com/drive/folders/1PhRBDmoL7doXnI9iHKUXvJ7L1M3kEyBI",
  },
  {
    title: "Cyber Scurity",
    cardImage: "assets/images/education-page/security.jpg",
    moocLink: "https://drive.google.com/drive/folders/1PeDOhrxPBklBZj78i4mBfLakzoKcPZW3",
  },
  {
    title: "Saas",
    cardImage: "assets/images/education-page/Saas.jpg",
    moocLink: "https://drive.google.com/drive/folders/1JKwyOBq_Z9gN_i8DjMZVI43MOTnqsXu5",
  },
  {
    title: "Command Line",
    cardImage: "assets/images/education-page/cmd.jpg",
    moocLink: "https://drive.google.com/drive/folders/1ZWhHtNhAcgScBcBxOR32AbAcMw06JuH0",
  },
  {
    title: "CSS",
    cardImage: "assets/images/education-page/css.png",
    moocLink: "https://drive.google.com/drive/folders/1HmSKyhy_OiJ97rCLrTgeAmIi9rEePbOg",
  },
  {
    title: "Git",
    cardImage: "assets/images/education-page/git.jpg",
    moocLink: "https://drive.google.com/drive/folders/1WYRUlnpbL8YQVkYOo4grGraTAMNME9xE",
  },
  {
    title: "Linux",
    cardImage: "assets/images/education-page/linux.jpg",
    moocLink: "https://drive.google.com/drive/folders/1ns0qfwFV8HjQCiTsMU0thCyI0KsNo-r6",
  },
  {
    title: "Virtual Machine",
    cardImage: "assets/images/education-page/virtual-machine.jpg",
    moocLink: "https://drive.google.com/drive/folders/1PbifnoWxqOF4SL6Ga3EUL7dR5bZlpwO_",
  },
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
  let output = "";
  moocscards.forEach(
    ({ title, cardImage, moocLink }) =>
      (output += `        
        <div class="col-6 col-md-3 col-sm-4 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >  
            <div class="card mb-3 mx-auto">
               <div class="content">
                  <div class="content-overlay"></div>
                    <img src=${cardImage} class="card-img-top content-image">     
                  <div class="content-details fadeIn-bottom">
                    <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>                                   
                  </div>
                </div>
                <div class="card-body">
                    <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
                </div>
            </div>
        </div>        
      `)
  );
  moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});
