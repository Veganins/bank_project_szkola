const responsive_table=document.querySelectorAll(".responsive-tables");
const li_menu=document.querySelectorAll(".li-menu");
const wezkredyt_div=document.querySelector(".take-credit");
const splacrate_div=document.querySelector(".sell-credit");
const aktualnekredyty_div=document.querySelector(".current-credit");
const historiakredytu_div=document.querySelector(".history-credit");
const imie_nazwisko=document.querySelector(".cash11");
li_menu[0].addEventListener("click", function(){
    wezkredyt_div.style.display="block";
    splacrate_div.style.display="none";
    aktualnekredyty_div.style.display="none";
    historiakredytu_div.style.display="none";
});
li_menu[1].addEventListener("click", function(){
    wezkredyt_div.style.display="none";
    splacrate_div.style.display="flex";
    aktualnekredyty_div.style.display="none";
    historiakredytu_div.style.display="none";
});
li_menu[2].addEventListener("click", function(){
    wezkredyt_div.style.display="none";
    splacrate_div.style.display="none";
    aktualnekredyty_div.style.display="flex";
    historiakredytu_div.style.display="none";
});
li_menu[3].addEventListener("click", function(){
    wezkredyt_div.style.display="none";
    splacrate_div.style.display="none";
    aktualnekredyty_div.style.display="none";
    historiakredytu_div.style.display="flex";
});
if(window.localStorage.getItem("Bank")==null){
    location.href="bank.html";
}else if(window.localStorage.getItem("Bank")!=null){
    let bank=window.localStorage.getItem("Bank");
    let his=JSON.parse(bank);
    let Actual=his[1]
    if(his[1]==null){
        location.href="bank.html";
    }else if(his[1]!=null){
        imie_nazwisko.innerHTML=his[0][Actual][0]+" "+his[0][Actual][1];
    }
}
//range
const wysokosc_poz=document.getElementById("wysokosc-poz");
const input_range=document.getElementById("range");
const plus_range=document.getElementById("plus-range");
const minus_range=document.getElementById("minus-range");



plus_range.addEventListener("click",function () {
   
    input_range.value=parseInt(input_range.value)+1;
    wysokosc_poz.innerHTML=input_range.value*100+"zł"
    oblicznie(event)
});
minus_range.addEventListener("click",function () {
    input_range.value=parseInt(input_range.value)-1;
    wysokosc_poz.innerHTML=input_range.value*100+"zł"
    oblicznie(event)
});
input_range.addEventListener("input",function () {
   
    wysokosc_poz.innerHTML=input_range.value*100+"zł"
    oblicznie(event)
});
//month
const month=document.getElementById("month");
const plus_month=document.getElementById("plus-month");
const minus_month=document.getElementById("minus-month");
plus_month.addEventListener("click",function () {
    let month_value=parseInt(month.value)
    
    if(month_value<24){
        month.value=month_value+1+" miesięcy";
        oblicznie(event)
    }
    
});
minus_month.addEventListener("click",function () {
    let month_value=parseInt(month.value)
    if(month_value>2){
        month.value=month_value-1+" miesięcy";
        oblicznie(event)
    }
});
//oblicznie
let rata;
let Calkowita;
let month_values;
function oblicznie(e) {
    const rata_p=document.querySelectorAll(".blue-nav-text")
    const calk=document.getElementById("text3")
    let RRSO=0.0819;
     month_values=parseInt(month.value);
    let input_value=parseInt(input_range.value)*100;
     Calkowita=((input_value*RRSO)+input_value);
     rata=(Calkowita/month_values);
    rata_p[2].innerHTML=rata.toFixed(2)+"zł";
    calk.innerHTML="Całkowita kwota do zapłaty "+Calkowita.toFixed(2)+" zł";
    
   
    
}
const wez_porzyczke=document.getElementById("wezporzyczke");

function porzyczke(e) {
    
    var data = new Date();
    let bank=window.localStorage.getItem("Bank");
    let his=JSON.parse(bank);
    let Actual=his[1]
    if(Calkowita==undefined){
        Calkowita=324.57 ;
        
    }
    if(rata==undefined){
        rata=162.285;
    }
    if(month_values==undefined){
        month_values=2;
    }
    
   console.log(his[0][Actual].length==4)
    if(his[0][Actual].length==4){
        let x=[[Calkowita,rata,month_values,data.getUTCDate()+'.'+parseInt(data.getUTCMonth()+1) +'.'+data.getFullYear()]]
        his[0][Actual].push(x)
        window.localStorage.setItem('Bank',JSON.stringify(his));
       
        while (responsive_table[1].firstChild) {
            responsive_table[1].firstChild.remove(responsive_table[1].firstChild)
        }
        while (responsive_table[0].firstChild) {
            responsive_table[0].firstChild.remove(responsive_table[0].firstChild)
        }
        while (responsive_table[2].firstChild) {
            responsive_table[2].firstChild.remove(responsive_table[2].firstChild)
        }
        generowanie1(event)
        generowanie2(event)
    }else if(his[0][Actual].length>4){
        let x=[Calkowita,rata,month_values,data.getUTCDate()+'.'+parseInt(data.getUTCMonth()+1) +'.'+data.getFullYear()]
    his[0][Actual][4].push(x)
    window.localStorage.setItem('Bank',JSON.stringify(his));
    
    while (responsive_table[1].firstChild) {
        responsive_table[1].firstChild.remove(responsive_table[1].firstChild)
    }
    while (responsive_table[0].firstChild) {
        responsive_table[0].firstChild.remove(responsive_table[0].firstChild)
    }
    while (responsive_table[2].firstChild) {
        responsive_table[2].firstChild.remove(responsive_table[2].firstChild)
    }
    generowanie1(event)
    generowanie2(event)
    }
    

}
wez_porzyczke.addEventListener("click",function(){
    porzyczke(event)
})
generowanie1(event)
generowanie2(event)
//responsive-table
function generowanie1(e) {

let bank=window.localStorage.getItem("Bank");
let his=JSON.parse(bank);
let Actual=his[1]
for (let x = 0; x < his[0][Actual][4].length; x++) {
   
    
    let createElli=document.createElement("li");
    createElli.className='table-row';
    let createElDiv1=document.createElement("div");
    let createElDiv2=document.createElement("div");
    let createElDiv3=document.createElement("div");
    let createElDiv4=document.createElement("div");
    createElDiv1.className='col-1';
    createElDiv2.className='col-2';
    createElDiv3.className='col-3';
    createElDiv4.className='col-4';
    createElDiv1.setAttribute("data-label","Data");
    createElDiv2.setAttribute("data-label","Nazwa kredytu");
    createElDiv3.setAttribute("data-label","Kwota kredytu");
    createElDiv4.setAttribute("data-label","Do spłaty");
    let createtext1=document.createTextNode(his[0][Actual][4][x][3]);
    let createtext2=document.createTextNode("Kredyt Błyskawiczny");
    let createtext3=document.createTextNode(his[0][Actual][4][x][0]+"zł");
    let createtext4=document.createTextNode((his[0][Actual][4][x][2]*his[0][Actual][4][x][1]).toFixed(2)+"zł");
    createElDiv1.appendChild(createtext1);
    createElDiv2.appendChild(createtext2);
    createElDiv3.appendChild(createtext3);
    createElDiv4.appendChild(createtext4);
    createElli.appendChild(createElDiv1);
    createElli.appendChild(createElDiv2);
    createElli.appendChild(createElDiv3);
    createElli.appendChild(createElDiv4);
    responsive_table[1].appendChild(createElli);
    
}
}
function generowanie2(e) {
    let bank=window.localStorage.getItem("Bank");
    let his=JSON.parse(bank);
    let Actual=his[1]
    for (let x = 0; x < his[0][Actual][4].length; x++) {
       
        const responsive_table=document.querySelectorAll(".responsive-table");
        let createElli=document.createElement("li");
        createElli.className='table-row';
        let createElDiv1=document.createElement("div");
        let createElDiv2=document.createElement("div");
        let createElDiv3=document.createElement("div");
        let createElDiv4=document.createElement("div");
        let createElp=document.createElement("p");
        createElDiv1.className='col-1';
        createElDiv2.className='col-2';
        createElDiv3.className='col-3';
        createElDiv4.className='col-4';
        createElp.className='splac';
        createElp.id=x;
        createElDiv1.setAttribute("data-label","Data");
        createElDiv2.setAttribute("data-label","Nazwa kredytu");
        createElDiv3.setAttribute("data-label","Ilość");
        createElDiv4.setAttribute("data-label","Do spłaty");
        let createtext0=document.createTextNode("Spłać");
        let createtext1=document.createTextNode(his[0][Actual][4][x][3]);
        let createtext2=document.createTextNode("Kredyt Błyskawiczny");
        let createtext3=document.createTextNode(his[0][Actual][4][x][2]);
        let createtext4=document.createTextNode((his[0][Actual][4][x][2]*his[0][Actual][4][x][1]).toFixed(2)+"zł");
        createElDiv1.appendChild(createtext1);
        createElDiv2.appendChild(createtext2);
        createElDiv3.appendChild(createtext3);
        createElDiv4.appendChild(createtext4);
        createElp.appendChild(createtext0)
        createElDiv4.appendChild(createElp);
        createElli.appendChild(createElDiv1);
        createElli.appendChild(createElDiv2);
        createElli.appendChild(createElDiv3);
        createElli.appendChild(createElDiv4);
        responsive_table[0].appendChild(createElli);
    }
}
