const form = document.querySelector('#form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById("name");
    const fname = document.getElementById("fieldset_name")

    if (name.value == "") {
        fname.classList.add("errorInput");
    } else {
        fname.classList.remove("errorInput");
    }

    const rg = document.getElementById("rg");
    const frg = document.getElementById("fieldset_rg")

    if (rg.value == "") {
        frg.classList.add("errorInput");
    } else {
        frg.classList.remove("errorInput");
    }


})