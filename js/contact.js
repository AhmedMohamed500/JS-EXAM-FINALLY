let yourName = document.querySelector(".name");
let phone = document.querySelector(".phone");
let Password = document.querySelector(".password");
let Email = document.querySelector(".email");
let Age = document.querySelector(".age");
let repassword = document.querySelector(".repassword");
let subButton = document.querySelector(".validBtn")


let rejex = {
    yourN : /^[a-z0-9_-]{3,15}$/,
    yourpassword : /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,
    yourEmail : /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]/,
    yourphone :/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    yourAge : /^\S[0-9]{0,3}$/
}


function validAll(){
    
    if(validYourName() && validYourEmail() && validYourPassword() && validYourRePassword() && validYourPhone() && validYourAge()){

        subButton.removeAttribute("disabled")
    }else{
        subButton.setAttribute("disabled")
    }

}



function validYourName(){
    let nameInput = document.querySelector(".name").value;
    let yourNameRegex = /^[a-z0-9_-]{3,15}$/
    let yourNameResult = yourNameRegex.test(nameInput)

    if(yourNameResult == false){
        document.querySelector(".validation").classList.add("d-block")
    }else{
        document.querySelector(".validation").classList.add("d-none")
    }
    
}

function validYourEmail(){
    let emailInput = document.querySelector(".email").value;
    let emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]/;
    let youtEmailResult = emailRegex.test(emailInput)

    
    if(youtEmailResult == false){
        document.querySelector(".validation").classList.add("d-block")
    }else{
        document.querySelector(".validation").classList.add("d-none")
    }
}

function validYourPassword(){
    let yourPassword = document.querySelector(".password").value;
    let yourPasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    let yourPasswordResult = yourPasswordRegex.test(yourPassword)

    if(yourPasswordResult == false){
        document.querySelector(".validation").classList.add("d-block")
    }else{
        document.querySelector(".validation").classList.add("d-none")
    }
    
}


function validYourRePassword(){
    let yourRePassword = document.querySelector(".repassword").value;
    let yourRePasswordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    let yourRePasswordResult = yourRePasswordRegex.test(yourRePassword)

    if(yourPasswordResult != yourRePasswordResult){
        document.querySelector(".validation").classList.add("d-block")
    }else{
        document.querySelector(".validation").classList.add("d-none")
    }
    
}

function validYourPhone(){
    let yourPhone = document.querySelector(".phone").value;
    let yourPhoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    let yourPhoneResult = yourPhoneRegex.test(yourPhone)

    if(yourPhoneResult == false){
        document.querySelector(".validation").classList.add("d-block")
    }else{
        document.querySelector(".validation").classList.add("d-none")
    }
}

function validYourAge(){
    let yourAge = document.querySelector(".age").value;
    let yourAgeRegex = /^\S[0-9]{0,3}$/
    let yourAgeResult = yourAgeRegex.test(yourAge)

    if(yourAgeResult == false){
        document.querySelector(".validation").classList.add("d-block")
    }else{
        document.querySelector(".validation").classList.add("d-none")
    }
}



$("#slide i.x-icon").on("click",function(){
    let contentWidth = $("#slide .content").outerWidth()

    if($("#slide").css("left") == "0px"){

        $("#slide").animate({left : -contentWidth},1000)
        
            }else{
                $("#slide").animate({left:0},1000)
        
            }
    
})
