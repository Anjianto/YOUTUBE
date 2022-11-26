const list = document.querySelectorAll(".list");

const setActiveClass = (event) => {
    event.stopPropagation();

    // set this if you not set mouseleave with function removeActiveClass below
    list.forEach(item => item.classList.remove('active'))

    event.target.classList.add("active");
};

// const removeActiveClass = (event) => {
//   event.stopPropagation();
//   event.target.classList.remove("active");
// };

list.forEach((item) => item.addEventListener("mouseenter", setActiveClass));
// set this if you want the indicator gone when user not hover
// list.forEach((item) => item.addEventListener("mouseleave", removeActiveClass));
