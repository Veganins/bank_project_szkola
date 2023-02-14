
const rejestracja_login_button=document.querySelectorAll(".login");


//Wyświetlanie
const login_div=document.querySelector(".logowanie");
const rejsetracja_div=document.querySelector(".rejestracja");
const modal_div=document.querySelector(".modal-container");
const modal_rejestracja=document.querySelector(".modal-rejestracja");
const modal_login=document.querySelector(".modal-login");
const closse=document.querySelectorAll(".ModalWindowClose");
const icon=document.querySelector(".icon");
const modal_menu=document.querySelector(".modal-menu-div");

const iconclose=document.querySelector(".ModalWindowClose2");
login_div.addEventListener("click", function(){
    modal_div.style.display="flex";
     modal_login.style.display="flex";

});
rejsetracja_div.addEventListener("click", function(){
    modal_div.style.display="flex";
    modal_rejestracja.style.display="flex";
});
closse[0].addEventListener("click", function(){
    modal_div.style.display="none";
    modal_login.style.display="none";
});
closse[1].addEventListener("click", function(){
    modal_div.style.display="none";
    modal_rejestracja.style.display="none";
});
icon.addEventListener("click", function(){
    modal_menu.style.display="flex";
   
});
iconclose.addEventListener("click", function(){
    modal_menu.style.display="none";
   
});
function restracja(e){
    //Resjetracja 
    const rejestracja_input=document.querySelectorAll(".rejestracja-input-class-name");
    const ErrorBox=document.querySelectorAll(".ErrorBox");
    //login1
    const input_login=document.querySelectorAll(".lofin");
    //restracja imie nazwisko
    const Imie_input=document.getElementById("Imie");
    const nazwisko_input=document.getElementById("Nazwisko");
    const regexImieNazwisko = /[aA-zZ]+/g;
    const FoundImie =Imie_input.value.match(regexImieNazwisko);
    const FoundNazwisko =nazwisko_input.value.match(regexImieNazwisko);
    let tabImieNazwisko=[];
    let tabImieNazwiskoFound=[];
    tabImieNazwisko.push(Imie_input,nazwisko_input);
       tabImieNazwiskoFound.push(FoundImie,FoundNazwisko);
      
    //rejtracja email
   
    const regexemail = /[aA-zZ0-9._%-]+@[a-z0-9.-]+\.[a-z]{2,3}/g;
    const Foundemail = rejestracja_input[2].value.match(regexemail);
     //restracja hasło
    const regexhaslo = /[aA-zZ0-9+\!\@\#\$\%\^\&\*\(\)\{\}\[\]\|\:\"\;\'\<\>\?\,\.\/]+/g;
    const regexhasloZnakiSpecjalne = /[\!\@\#\$\%\^\&\*\(\)\{\}\[\]\|\:\"\;\'\<\>\?\,\.\/]/g;
    const regexhasloliczby = /[0-9]/g;
    const regexhasloliterymale = /[a-z]/g;
    const regexhasloliteryduze = /[A-Z]/g;
    const FoundhasloZnakiSpecjalne=rejestracja_input[4].value.match(regexhasloZnakiSpecjalne);
    const Foundhasloliczby=rejestracja_input[4].value.match(regexhasloliczby );
    const Foundhasloliterymale=rejestracja_input[4].value.match(regexhasloliterymale);
    const Foundhasloliteryduze=rejestracja_input[4].value.match(regexhasloliteryduze);
    const Foundhaslo = rejestracja_input[4].value.match(regexhaslo);
    let FoundTab=[FoundhasloZnakiSpecjalne,Foundhasloliczby,Foundhasloliterymale,Foundhasloliteryduze]
    //true of false
    let imiew=false;
    let nazwiskow=false;
    let emailw=false;
    
    let haslo=false;
    let phaslow=false;
    let FoundTabstring=["ZnakiSpecjalne","liczby","małe litery","duże litery"]
    for(let x = 0;x<rejestracja_input.length;x++){
        //kasowanie
        while (ErrorBox[x].firstChild) {
            ErrorBox[x].firstChild.remove(ErrorBox[x].firstChild)
        }
        //imie nazwisko
        if(x==1||x==0){
        if(tabImieNazwisko[x].value==tabImieNazwiskoFound[x]){
            rejestracja_input[x].style.setProperty("border-bottom", "1px solid green");
            if(x==1){
                nazwiskow=true;
            }
            if(x==0){
                imiew=true;
            }
        }else{
            rejestracja_input[x].style.setProperty("border-bottom", "1px solid red");
            if((tabImieNazwisko[x].value!=tabImieNazwiskoFound[x])&&(tabImieNazwisko[x].value!="")){
                let CreateElementP = document.createElement("p");
                let CreateElementText = document.createTextNode("Pole "+tabImieNazwisko[x].id+" może zawierać tylko małe i duże litery ");
                CreateElementP.appendChild(CreateElementText);
                ErrorBox[x].appendChild(CreateElementP);
                CreateElementP.style.setProperty("display","flex")
                CreateElementP.style.setProperty("justify-content","center")
                CreateElementP.style.setProperty("color","red")
            }
            if(tabImieNazwisko[x].value==""){
                let CreateElementP = document.createElement("p");
                let CreateElementText = document.createTextNode("Pole "+tabImieNazwisko[x].id+" jest wymagane ");
                CreateElementP.appendChild(CreateElementText);
                ErrorBox[x].appendChild(CreateElementP);
                CreateElementP.style.setProperty("display","flex")
                CreateElementP.style.setProperty("justify-content","center")
                CreateElementP.style.setProperty("color","red")
            }
        }
        }
        //email
        if(x==2||x==3){
        if(rejestracja_input[x].value==Foundemail){
            rejestracja_input[x].style.setProperty("border-bottom", "1px solid green");
            if(x==3){
                emailw=true;
            }
           
            
        }else{
            rejestracja_input[x].style.setProperty("border-bottom", "1px solid red");
            if((rejestracja_input[x].value!="")){
                let CreateElementP = document.createElement("p");
                let CreateElementText = document.createTextNode(rejestracja_input[x].id+"e nie są takie same ");
                CreateElementP.appendChild(CreateElementText);
                ErrorBox[x].appendChild(CreateElementP);
                CreateElementP.style.setProperty("display","flex")
                CreateElementP.style.setProperty("justify-content","center")
                CreateElementP.style.setProperty("color","red")
            }
            if(rejestracja_input[x].value==""){
                let CreateElementP = document.createElement("p");
                let CreateElementText = document.createTextNode(rejestracja_input[x].id+" jest wymagany ");
                CreateElementP.appendChild(CreateElementText);
                ErrorBox[x].appendChild(CreateElementP);
                CreateElementP.style.setProperty("display","flex")
                CreateElementP.style.setProperty("justify-content","center")
                CreateElementP.style.setProperty("color","red")
            }
        }
    }
    
        if(x==4){
            if(rejestracja_input[x].value==Foundhaslo&&FoundTab[0]!=null&&FoundTab[1]!=null&&FoundTab[2]!=null&&FoundTab[3]!=null&&rejestracja_input[x].value.length>=8){
                rejestracja_input[x].style.setProperty("border-bottom", "1px solid green");
                haslo=true;
            }else{
                rejestracja_input[x].style.setProperty("border-bottom", "1px solid red");

                if((rejestracja_input[x].value!="")){
                    let CreateElementP = document.createElement("p");
                    let CreateElementText = document.createTextNode("Musi zawierać ");
                    CreateElementP.appendChild(CreateElementText);
                    ErrorBox[x].appendChild(CreateElementP);
                    CreateElementP.style.setProperty("display","flex")
                    CreateElementP.style.setProperty("justify-content","center")
                    CreateElementP.style.setProperty("color","red")
                    for(let y=0;y<FoundTab.length;y++){
                        
                    if(FoundTab[y]==null){

                    
                    let CreateElementP = document.createElement("p");
                    let CreateElementText = document.createTextNode(FoundTabstring[y]);

                    CreateElementP.appendChild(CreateElementText);
                    ErrorBox[x].appendChild(CreateElementP);
                    CreateElementP.style.setProperty("display","flex")
                    CreateElementP.style.setProperty("justify-content","center")
                    ErrorBox[x].style.setProperty("flex-direction","row")
                    CreateElementP.style.setProperty("color","red")
   
                }
                }
                if(rejestracja_input[x].value.length<8){
                    let CreateElementP = document.createElement("p");
                    let CreateElementText = document.createTextNode("min.8 znaków");
                    CreateElementP.appendChild(CreateElementText);
                    ErrorBox[x].appendChild(CreateElementP);
                    CreateElementP.style.setProperty("display","flex")
                    CreateElementP.style.setProperty("justify-content","center")
                    ErrorBox[x].style.setProperty("flex-direction","row")
                    CreateElementP.style.setProperty("color","red")
                }
                }
                if(rejestracja_input[x].value==""){
                    let CreateElementP = document.createElement("p");
                    let CreateElementText = document.createTextNode(rejestracja_input[x].id+"o jest wymagane ");
                    CreateElementP.appendChild(CreateElementText);
                    ErrorBox[x].appendChild(CreateElementP);
                    CreateElementP.style.setProperty("display","flex")
                    CreateElementP.style.setProperty("justify-content","center")
                    CreateElementP.style.setProperty("color","red")
                }
            }
        
        }
        if(x==5){
        if((rejestracja_input[x].value==rejestracja_input[x-1].value)&&(rejestracja_input[x-1].value!="")&&(haslo==true)){
            rejestracja_input[x].style.setProperty("border-bottom", "1px solid green");
            phaslow=true;
        }else{
            rejestracja_input[x].style.setProperty("border-bottom", "1px solid red");
            
            if((rejestracja_input[x].value!="")){
                let CreateElementP = document.createElement("p");
                let CreateElementText = document.createTextNode(rejestracja_input[x].id+"o nie jest takie same ");
                CreateElementP.appendChild(CreateElementText);
                ErrorBox[x].appendChild(CreateElementP);
                CreateElementP.style.setProperty("display","flex")
                CreateElementP.style.setProperty("justify-content","center")
                CreateElementP.style.setProperty("color","red")
            }
            if(rejestracja_input[x].value==""){
                let CreateElementP = document.createElement("p");
                let CreateElementText = document.createTextNode(rejestracja_input[x].id+"o jest wymagane ");
                CreateElementP.appendChild(CreateElementText);
                ErrorBox[x].appendChild(CreateElementP);
                CreateElementP.style.setProperty("display","flex")
                CreateElementP.style.setProperty("justify-content","center")
                CreateElementP.style.setProperty("color","red")
            }
        }
    
        }
    }
    
    if(imiew==true&&nazwiskow==true&&emailw==true&&phaslow==true){
        
        if( window.localStorage.getItem("Bank")==null){
            let szkonta=[rejestracja_input[0].value,rejestracja_input[1].value,rejestracja_input[3].value,rejestracja_input[5].value];
            let konta=[szkonta];
            let Resjetracja=[konta,null]
            window.localStorage.setItem("Bank",JSON.stringify(Resjetracja));
            modal_div.style.display="none";
            modal_rejestracja.style.display="none";
            modal_div.style.display="flex";
            modal_login.style.display="flex";
            input_login[0].value='';
            input_login[1].value='';
        }else if(window.localStorage.getItem("Bank")!=null){
            let bank=window.localStorage.getItem("Bank");
            let his=JSON.parse(bank);
            let asd=false;
            while (ErrorBox[6].firstChild) {
                ErrorBox[6].firstChild.remove(ErrorBox[6].firstChild)
            }
            for (let pb = 0; pb < his[0].length; pb++) {
                
                if (his[0][pb][2]==rejestracja_input[3].value) {
                    
                    asd=true;
                    let CreateElementP = document.createElement("p");
                    let CreateElementText = document.createTextNode("Jest już taki email");
                    CreateElementP.appendChild(CreateElementText);
                    ErrorBox[6].appendChild(CreateElementP);
                    CreateElementP.style.setProperty("display","flex")
                     CreateElementP.style.setProperty("justify-content","center")
                    CreateElementP.style.setProperty("color","red")
               } 
            }   
               if(asd==false){
                    let szkonta=[rejestracja_input[0].value,rejestracja_input[1].value,rejestracja_input[3].value,rejestracja_input[5].value];
                    his[0].push(szkonta)
                    window.localStorage.setItem("Bank",JSON.stringify(his));
                    modal_div.style.display="none";
                    modal_rejestracja.style.display="none";
                    modal_div.style.display="flex";
                    modal_login.style.display="flex";
                    input_login[0].value='';
                    input_login[1].value='';
                  
                    
                } 
              
            
        }   
    }
}
function logwanie(e) {
    const input_login=document.querySelectorAll(".lofin");
    const ErrorBox_login=document.querySelectorAll(".error-login");
  
    if(window.localStorage.getItem("Bank")!=null){
        let bank=window.localStorage.getItem("Bank");
        let his=JSON.parse(bank);
        let asd=false;
        let asd2=false;
        for(let x=0;x<3;x++){
            while (ErrorBox_login[x].firstChild) {
                ErrorBox_login[x].firstChild.remove(ErrorBox_login[x].firstChild)
            }
        }
       
        for (let pb = 0; pb < his[0].length; pb++) {
            if (his[0][pb][2]==input_login[0].value) {
                input_login[0].style.setProperty("border-bottom", "1px solid green");
                asd=true;
                
           } 
        }   
           if(asd==false&&input_login[0].value!=""){
            let CreateElementP = document.createElement("p");
            let CreateElementText = document.createTextNode("Niepoprawny email");
            CreateElementP.appendChild(CreateElementText);
            ErrorBox_login[0].appendChild(CreateElementP);
            CreateElementP.style.setProperty("display","flex")
             CreateElementP.style.setProperty("justify-content","center")
            CreateElementP.style.setProperty("color","red")
            input_login[0].style.setProperty("border-bottom", "1px solid red");    
                
            }else if(input_login[0].value==""){
                let CreateElementP = document.createElement("p");
                let CreateElementText = document.createTextNode("to pole musi by wypełnione");
                CreateElementP.appendChild(CreateElementText);
                ErrorBox_login[0].appendChild(CreateElementP);
                CreateElementP.style.setProperty("display","flex")
                 CreateElementP.style.setProperty("justify-content","center")
                CreateElementP.style.setProperty("color","red")
                input_login[0].style.setProperty("border-bottom", "1px solid red");    
            }
            if(asd==true){
                for (let pb = 0; pb < his[0].length; pb++) {
                    if (his[0][pb][3]==input_login[1].value) {
                        input_login[1].style.setProperty("border-bottom", "1px solid green");
                        location.href="bank2.html";
                        asd2=true;
                        his[1]=pb;
                        window.localStorage.setItem("Bank",JSON.stringify(his));
                   }
                } 
            }
            if(asd2==false&&input_login[1].value!=""){
                
                input_login[1].style.setProperty("border-bottom", "1px solid red");
                let CreateElementP = document.createElement("p");
                let CreateElementText = document.createTextNode("Niepoprawne hasło");
                CreateElementP.appendChild(CreateElementText);
                ErrorBox_login[1].appendChild(CreateElementP);
                CreateElementP.style.setProperty("display","flex")
                 CreateElementP.style.setProperty("justify-content","center")
                CreateElementP.style.setProperty("color","red")
                input_login[1].style.setProperty("border-bottom", "1px solid red");  
            }else if(input_login[1].value==""){
                let CreateElementP = document.createElement("p");
                let CreateElementText = document.createTextNode("to pole musi by wypełnione");
                CreateElementP.appendChild(CreateElementText);
                ErrorBox_login[1].appendChild(CreateElementP);
                CreateElementP.style.setProperty("display","flex")
                 CreateElementP.style.setProperty("justify-content","center")
                CreateElementP.style.setProperty("color","red")
                input_login[1].style.setProperty("border-bottom", "1px solid red");    
            }
          
        
    }   
}

rejestracja_login_button[0].addEventListener("click",function(){
    logwanie(event);
});
rejestracja_login_button[1].addEventListener("click",function(){
    restracja(event);
});