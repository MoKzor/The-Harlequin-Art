function deactivateTooltips() {

    const spans = document.getElementsByTagName("span")
    const spansLenght = spans.length;

    for (let i = 0; i < spansLenght; i++ ){

        if(spans[i].className == "tooltip"){
            spans[i].style.display = "none";
            console.log("effacé");
        }
    }

}

function getTooltip(elemHTML){

    while(elemHTML = elemHTML.nextSibling){
        if(elemHTML.className == "tooltip"){
            return elemHTML;
        }
    }
        return false;
}

let check = {



}

check["sexe"] = function(){
    console.log("check de sexe");
    let sexe = document.getElementsByName("sexe"),
    tooltip = getTooltip(sexe[1].parentNode);

    if(sexe[0].checked || sexe[1].checked){
        tooltip.style.display = "none";
        return true;
    }else{
        tooltip.style.display = "inline-block";
        return false;
    }
};

check["lastName"] = function(id){
    console.log("check de lastName");

    let elemHTML = document.getElementById(id),
    tooltip = getTooltip(elemHTML);
    console.log(tooltip);

    if(elemHTML.value.length >=2){
        elemHTML.className = "correct"
        tooltip.style.display = "none";
        console.log("ca s'enlève")
        return true;
    }else{

        tooltip.style.display = "inline-block";
        elemHTML.className = "incorrect"
        return false;
    }

};

check["firstName"] = check["lastName"]
;

check["age"] = function(){
    console.log("check de age");

        let age = document.getElementById("age"),
        tooltip = getTooltip(age),
        ageValue = parseInt(age.value);

        if(ageValue >= 5 && ageValue <= 140){
            age.className = "correct";
            tooltip.style.display = "none";
            console.log("ca s'enlève");
            return true;
        }else{
            age.className = "incorrect";
            tooltip.style.display = "inline-block"
            console.log("apparait")
            return false;
        }
};

check["login"] = function(){
    console.log("check de login");
    let login = document.getElementById("login"),
    tooltip = getTooltip(login);

    if(login.value.length >=4){
        login.className = "correct"
        tooltip.style.display = "none"
        console.log("ca s'enlève");
        return true;
    }else{
        login.className = "incorrect";
    tooltip.style.display = "inline-block";
    return false;
}

};

check["pwd1"] = function(){
    console.log("check de pwd1");
    let pwd1 = document.getElementById("pwd1"),
    tooltip = getTooltip(pwd1);

    if(pwd1.value.length >= 6){
        pwd1.className = "correct";
        tooltip.style.display = "none";
        return true;
    }else{
        pwd1.className = "incorrect";
        tooltip.style.display = "inline-block";
        return false;
    }

};

check["pwd2"] = function(){
    console.log("check de pwd2");

    let pwd1 = document.getElementById("pwd1"),
    pwd2 = document.getElementById("pwd2"),
    tooltip = getTooltip(pwd2);

    if(pwd1.value == pwd2.value && pwd2.value != ""){
        pwd2.className = "correct";
    tooltip.style.display = "none";
    return true;
    }else{
    pwd2.className = "incorrect";
    tooltip.style.display = "inline-block";
    return false;
    }
}

check["country"] = function(){
    console.log("check de country");

    let country = document.getElementById("country"),
    tooltip = getTooltip(country);

    if(country.value !== "none"){
        tooltip.style.display = "none";
        return true;
    }else{
        tooltip.style.display = "inline-block";
        return false;
    }
};





(function (){



//formulaire
const myForm = document.getElementById("myForm");
const listInputs = document.getElementsByTagName("input");
const listInputsLenght = listInputs.length;



for (let i=0; i<listInputsLenght;i++){

    if(listInputs[i].type == "text" || listInputs[i].type == "password"){
        listInputs[i].onkeyup = function(){
            check[this.id](this.id);
        }
    }
}


myForm.onsubmit = function(e){

    e.preventDefault();
    let result = true;

    for(let i in check){
        result = check[i](i) && result;
    }

    if(result){
        alert("Vous êtes inscrits")
    }else{
        alert("Un champ n'est pas correctement remplie");
    }
};

myForm.onreset = function (e) {
    for( i = 0; i< listInputs.length; i++) {
        listInputs[i].className = "";
    }
    deactivateTooltips();
};



deactivateTooltips();
}());