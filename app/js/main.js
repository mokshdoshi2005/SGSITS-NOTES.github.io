// // structure
// <a class="card" href>
//     <img src="" alt="" class="icon">
//     <div class="Course-name"></div>
//     <div class="Subtext"></div>
// </a>

import database from "./Database.js";
console.log(database)

const WRAPPER = document.getElementById("wrapper")

for (let index = 0; index < database['list'].length; index++) {
    createCard(WRAPPER, index);
    let current_course = database["list"][index]
    addData(WRAPPER.children[index], WRAPPER.children[index].childNodes, database[`${current_course}`])

    if (index >= (7 - 1)) {
        let a = document.createElement("a")
        a.href = "/pages/notes.html";
        a.classList.add("more")
        a.textContent = "more ..."
        WRAPPER.appendChild(a)
        break
    }
}

function addData(parent, ary, dict) {
        
    let card_nth_child = ary;
    console.log(parent)
    parent.href = dict["link"]
    // COURSE NAME
    card_nth_child[1].textContent = dict["name"];
    
    // SUBTEXT
    card_nth_child[2].textContent = dict["subtext"];
    
    // IMAGE
    card_nth_child[0].src = dict['img'];
    
}


function createCard(wrapper, index){
    let card = document.createElement("a");
    card.classList.add("card");
    card.dataset.index = index;

    {let icon = document.createElement("img");
    icon.classList.add("icon");
    card.appendChild(icon);
    let name = document.createElement("h1");
    name.classList.add("Course-name");
    name.classList.add("SHORT-STACK");
    card.appendChild(name);
    let subtext = document.createElement("div");
    subtext.classList.add("Subtext");
    subtext.classList.add("SHORT-STACK");
    card.appendChild(subtext);};

    wrapper.appendChild(card)
}