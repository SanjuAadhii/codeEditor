const form = document.querySelector("#form");
const username = document.querySelector("#username")

const password = document.querySelector("#password")


form.addEventListener("submit",(e)=>{
 validateForm()
 e.preventDefault()
})

function validateForm()
{
    const userval = username.value.trim()
    const passval = password.value.trim()
    
    
    if(userval==='')
    {
        seterror(username,"This Field is required")
    }
    else{
     setsuccess(username)
    };
    
    if(passval===''){
        seterror(password,"This Field is required")   
    }
    else if( passval.length<6){
        seterror(password,"The password length should be greater than 6") 
    }
    else{
        setsuccess(password)
       };
 


    

}
function seterror(element,message)
{
    const mainElement = element.parentElement;
   const errElement = mainElement.querySelector('.error')
    
    errElement.innerText = message

    mainElement.classList.add("error")
    mainElement.classList.remove("success")

}

function setsuccess(element)
{
    const mainElement = element.parentElement  
    const errElement = mainElement.querySelector(".error")
    
    errElement.innerText = " "
    mainElement.classList.add("success")
    mainElement.classList.remove("error")

}