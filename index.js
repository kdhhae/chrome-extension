const  btn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEL = document.querySelector("#ul-el");
let  myLeads = [];


btn.addEventListener("click", (event) =>{ 
    const inputText = inputEl.value;
    myLeads.push(inputText);
    renderLeads();
});

renderLeads=()=>{
    let listItems = "";
   for (let i = 0; i < myLeads.length; i++) {
        console.log(myLeads[i])
        listItems += `<li>${myLeads[i]}</li>`; // "<li>" + myLeads[i  ] +"<li/>"
        ulEL.innerHTML = listItems;
        // another method =>
        // const li = document.createElement("li");
// li.textContent = myLeads[i];
// ulEL.append(li);
    }
}
