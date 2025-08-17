let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function() {
    let task = document.createElement("li");
    task.innerText = inp.value;
    

    let dltbtn = document.createElement("button");
    dltbtn.innerText = "Delete";
    dltbtn.classList.add("delete");
    task.appendChild(dltbtn);

    ul.appendChild(task);
    inp.value = "";    
});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentNode;
        listItem.remove();
    }

})

// let dltbtns = document.querySelectorAll(".delete");
// for(dltbtn of dltbtns){
//     dltbtn.addEventListener("click", function(){
//         let parent = this.parentElement;
//         console.log(parent);
//         parent.remove();
//     }
// )
// }

