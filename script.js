const menu = document.querySelector(".links-container i");
const menuUl = document.querySelector(".header-area .links-container ul");
const menuArrow = document.querySelector(".header-area i");
let skillsSection = document.querySelector(".Skills");
const openAndCloseGear = document.querySelector(".toggel-setting");
const settingBox = document.querySelector(".setting-box");
const SettingSpin = document.querySelector(".fa-gear ");
const colorLi = document.querySelectorAll(".option-list li");
let landingPage = document.querySelector(".landing-page");
const buttonUp = document.querySelector(".up");
const allLinks = document.querySelectorAll(".links a");
///////////////////////////
const scrollDimension = (element) => {
  let skillsOffsetTop = element.offsetTop;
  let skillsOuterHeight = element.offsetHeight;
  let windowHeight = this.innerHeight;
  let windowScrollTop = this.pageYOffset;
  let x = skillsOffsetTop + skillsOuterHeight - windowHeight;
  if (windowScrollTop > x) {
    return true;
  }
};
const activeFunction = (e) => {
  e.target.parentElement.querySelectorAll(".Active").forEach((x) => {
    x.classList.remove("Active");
  });
  e.target.classList.add("Active");
};
const scrollToSomeSection = (element) => {
  element.forEach((ele) => {
    ele.addEventListener("click", (e) => {
      e.preventDefault();
      document
        .querySelector(e.target.dataset.section)
        .scrollIntoView({ behavior: "smooth" });
    });
  });
};
//////////////////////////
menu.addEventListener("click", () => {
  menuUl.classList.toggle("open");
  menuArrow.classList.toggle("menu-active");
});
menuUl.onclick = function (e) {
  e.stopPropagation();
};
document.addEventListener("click", (e) => {
  if (e.target !== menu && e.target !== menuUl) {
    if (menuUl.classList.contains("open")) {
      menuUl.classList.toggle("open");
      menuArrow.classList.toggle("menu-active");
    }
  }
});
//////////////////////////
openAndCloseGear.addEventListener("click", () => {
  settingBox.classList.toggle("open");
  SettingSpin.classList.toggle("fa-spin");
});
/////////////////////////
let chaCol = window.localStorage.getItem("changeColor");
if (chaCol !== null) {
  document.documentElement.style.setProperty("--main-color", chaCol);
  colorLi.forEach((x) => {
    x.classList.remove("Active");
    if (x.dataset.color == chaCol) {
      x.classList.add("Active");
    }
  });
}
colorLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      e.currentTarget.dataset.color
    );
    window.localStorage.setItem("changeColor", e.currentTarget.dataset.color);
    // Add Active Class To Element
    activeFunction(e);
  });
});
/////////////////////////
window.addEventListener("scroll", function () {
  if (scrollDimension(skillsSection)) {
    let elementOfSkills = document.querySelectorAll(".skill-progress span");
    elementOfSkills.forEach((e) => {
      e.style.width = e.dataset.progress;
    });
  }
});
///////////////////////
buttonUp.addEventListener("click", (e) => {
  document.querySelector(".header-area").scrollIntoView({ behavior: "smooth" });
});
///////////////////////
window.addEventListener("scroll", function () {
  if (scrollDimension(landingPage)) {
    document.querySelector(".up").style.display = "block";
  } else {
    document.querySelector(".up").style.display = "none";
  }
});
///////////////////////
scrollToSomeSection(allLinks);
