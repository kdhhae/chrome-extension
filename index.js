// chrome://extensions/
const  btn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEL = document.querySelector("#ul-el");
let  myLeads = [];

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
console.log(leadsFromLocalStorage);


clearInputText =  () => {
inputEl.value = "";
}

btn.addEventListener("click", (event) =>{ 
    let inputText = inputEl.value;
    myLeads.push(inputText);
    clearInputText();
    localStorage.setItem("myLeads",JSON.stringify(myLeads));

    renderLeads();
    console.log(localStorage.getItem("myLeads"))
});

renderLeads=()=>{
    let listItems = "";
   for (let i = 0; i < myLeads.length; i++) {
        console.log(myLeads[i])
        listItems += `<li><a href= "https://${myLeads[i]}" target="_blank">${myLeads[i]}</a></li>`; 
        // "<li>" + myLeads[i  ] +"<li/>"
        ulEL.innerHTML = listItems;
        // another method =>
        // const li = document.createElement("li");
// li.textContent = myLeads[i];
// ulEL.append(li);
    }
}

