const form = document.querySelector(".resume_form_container")
const menu_items = document.querySelectorAll(".menu_items")
const button_next = document.querySelector(".button_next")
const button_back = document.querySelector(".button_back")


// nav items transition
menu_items.forEach((item, index) => {
    item.addEventListener("click", () => {
        form.style.transform = `translateX(-${(index) * 70}vw)`

        menu_items.forEach((innerItem) => {
            innerItem.classList.remove("active")
        })

        item.classList.add("active")
    })
})


// next button transition
button_next.addEventListener('click', () => {
    let activeIndex = 0

    menu_items.forEach((item, index) => {
        if (item.classList.contains("active"))
            activeIndex = (index + 1) % menu_items.length
        item.classList.remove("active")
    })

    menu_items[activeIndex].classList.add("active")
    form.style.transform = `translateX(-${(activeIndex) * 70}vw)`
})


// back button transition
button_back.addEventListener('click', () => {
    let activeIndex = 0

    menu_items.forEach((item, index) => {
        if (item.classList.contains("active"))
            activeIndex = (menu_items.length + index - 1) % menu_items.length
        item.classList.remove("active")
    })

    menu_items[activeIndex].classList.add("active")
    form.style.transform = `translateX(-${(activeIndex) * 70}vw)`
})