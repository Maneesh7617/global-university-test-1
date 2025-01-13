document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("content");
  setTimeout(() => {
    preloader.style.opacity = "0";
    preloader.style.visibility = "hidden";
    content.style.display = "block";
    setTimeout(() => {
      content.style.opacity = "1";
    }, 100);
  }, 3000);
});
document.querySelectorAll('.tab-btn').forEach(button => {
  button.addEventListener('click', () => {
    const tabName = button.getAttribute('data-tab');
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.tab-pane').forEach(pane => pane.classList.remove('active'));
    button.classList.add('active');
    document.getElementById(tabName).classList.add('active');
  });
});
document.querySelectorAll('.subtab-btn').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    document.querySelectorAll('.subtab-btn').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    document.querySelectorAll('.card-container').forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block'; 
      } else {
        card.style.display = 'none'; 
      }
    });
  });
});
document.querySelectorAll('.subtab-btn1').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    document.querySelectorAll('.subtab-btn1').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    document.querySelectorAll('.card-container').forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block'; 
      } else {
        card.style.display = 'none'; 
      }
    });
  });
});
document.querySelectorAll('.subtab-btn2').forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter');
    document.querySelectorAll('.subtab-btn2').forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    document.querySelectorAll('.card-container').forEach(card => {
      if (filter === 'all' || card.getAttribute('data-category') === filter) {
        card.style.display = 'block'; 
      } else {
        card.style.display = 'none'; 
      }
    });
  });
});

const agents = [
  {
    name: "John Smith",
    role: "Agent",
    image: "assets/img/body/testimonial/img-1.png",
    text: "Working with John Smith has been an absolute pleasure. The professionalism, dedication, and attention to detail exceeded my expectations. They delivered the project on time and ensured it was tailored to my needs. I highly recommend their services to anyone looking for exceptional quality and reliability."
  },
  {
    name: "Emma Williams",
    role: "Agent",
    image: "assets/img/body/testimonial/img-2.png",
    text: "he team at Emma Williams truly impressed me with their creativity and commitment. They understood my requirements perfectly and went above and beyond to deliver outstanding results. Communication was seamless, and their expertise was evident throughout the project. I’m thrilled with the outcome and would."
  },
  {
    name: "Michael Brown",
    role: "Agent",
    image: "assets/img/body/testimonial/img-3.png",
    text: "I had a fantastic experience working with Michael Brown. Their innovative ideas and flawless execution brought my vision to life. They were responsive, professional, and always willing to accommodate changes. I’m incredibly satisfied with their work and highly recommend their services for anyone seeking."
  },
  {
    name: "Sophia Johnson",
    role: "Agent",
    image: "assets/img/body/testimonial/img-4.png",
    text: "From start to finish, Sophia Johnson demonstrated exceptional skill and dedication. Their ability to listen and translate my ideas into reality was remarkable. The entire process was smooth, and their customer service was outstanding. I am extremely happy with the final product and look forward to future."
  },
  {
    name: "EMMA",
    role: "Agent",
    image: "assets/img/body/testimonial/img-5.png",
    text: "Choosing EMMA was the best decision I made for my project. Their expertise, timely delivery, and unmatched creativity set them apart. They kept me updated throughout the process and ensured I was completely satisfied. I wholeheartedly recommend their services to anyone looking for excellence and professionalism."
  },
];

let currentIndex = 0;
const mainImage = document.getElementById("main-agent-image");
const mainName = document.getElementById("main-agent-name");
const mainRole = document.getElementById("main-agent-role");
const mainText = document.getElementById("main-agent-text");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const agentPictures = document.querySelectorAll(".agent-picture");

function updateMainContent(index) {
  const agent = agents[index];
  mainImage.src = agent.image;
  mainName.textContent = agent.name;
  mainRole.textContent = agent.role;
  mainText.textContent = agent.text;
}
function autoSlide() {
  currentIndex = (currentIndex + 1) % agents.length;
  updateMainContent(currentIndex);
}
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + agents.length) % agents.length;
  updateMainContent(currentIndex);
});
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % agents.length;
  updateMainContent(currentIndex);
});
agentPictures.forEach((picture, index) => {
  picture.addEventListener("click", () => {
    currentIndex = index;
    updateMainContent(currentIndex);
  });
});
let sliderInterval = setInterval(autoSlide, 5000);

const flags = document.querySelectorAll(".flag-container");
const popup = document.getElementById("popup");
const popupContent = document.querySelector(".popup-images");
const closePopup = document.querySelector(".close-popup");

const popupData = {
  Canada: ["assets/img/body/flag/canada.jpg"],
  UK: ["assets/img/body/flag/uk.jpg"],
  Germany: ["assets/img/body/flag/germany.jpg"],
};
function openPopup(country) {
  const images = popupData[country];
  popupContent.innerHTML = images
    .map(img => `<img src="${img}" alt="${country} Image">`)
    .join("");
  popup.style.display = "flex";
}
flags.forEach(flag => {
  const country = flag.dataset.country;
  flag.addEventListener("mouseenter", () => {
    if (window.innerWidth > 768) { 
      openPopup(country);
    }
  });
  flag.addEventListener("click", () => {
    openPopup(country);
  });
});
closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 10,
  spaceBetween: 30,
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
  breakpoints: {
    210: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    768: { 
      slidesPerView: 5,
      spaceBetween: 20,
    },
    1024: { 
      slidesPerView: 10,
      spaceBetween: 30,
    },
  },
});


