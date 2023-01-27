// chrome://extensions/
const  btn = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
const deleteEl = document.querySelector("#delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
const tabBtn = document.querySelector("#tab-btn");
let  myLeads = [];

console.log( Boolean(leadsFromLocalStorage) );

 render=(leads)=>{
    let listItems = "";
   for (let i = 0; i < leads.length; i++) {
        console.log(leads[i])
        listItems += `<li><a href= "${leads[i]}" target="_blank">${leads[i]}</a></li>`; 
        // "<li>" + myLeads[i  ] +"<li/>"
        ulEl.innerHTML = listItems;
        // another method =>
        // const li = document.createElement("li");
// li.textContent = myLeads[i];
// ulEL.append(li);
    }
} 

if(leadsFromLocalStorage){
myLeads = leadsFromLocalStorage;    
render(myLeads);
}

const tabs = [
    {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener("click", ()=>{
chrome.tabs.query({active:true , currentWindow:true}, function(tabs){
    const newTabs = tabs[0].url;
    myLeads.push(newTabs);
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);
})
})


btn.addEventListener("click", (event) =>{ 
    let inputText = inputEl.value;
    myLeads.push(inputText);
    inputEl.value = "";   
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);
});    

deleteEl.addEventListener('dblclick', ()=>{
    localStorage.clear()
        myLeads = [];
ulEl.innerHTML="";
})

