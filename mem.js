
let submit=document.querySelector(".submit");
let memElem=document.querySelector('.mems');
let title=document.querySelector("#text");
let desc=document.querySelector('#desc');
let me=JSON.parse(localStorage.getItem("m"));
if(me){
    me.forEach(element => {
        addNotes(element)
    });
}
submit.addEventListener("click", (e)=>{
    e.preventDefault();
    addNotes()
})
function addNotes(obj) {
    let card=document.createElement("div");
    card.classList.add("card");
    let titleval=title.value;
    let descVal=desc.value;
    if(obj){
        titleval=obj.title;
        descVal=obj.desc;
    }
    if(titleval){
        card.innerHTML=`<h3>${titleval}</h3>
                                    <p class="ptag">${descVal}</p>
                             <button class="del">Delete</button>`;
        memElem.appendChild(card);
        updateLs()
    }
    let del=card.querySelector(".del");
    del.addEventListener('click', ()=>{
        card.remove();
        updateLs();
    })
}
function updateLs() {
    let card=document.querySelectorAll(".card");
    let arr=[];
    card.forEach(element => {
        arr.push({
            title:element.children[0].innerText,
            desc:element.children[1].innerText
        })
    });
    localStorage.setItem("m", JSON.stringify(arr));
}
