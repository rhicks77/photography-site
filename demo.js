
// variable declaration
var myvar=3
let mysecondvar="test"
const mythirdvar={}

mysecondvar="test2"

// function declaration
function myFunc(){
    // code goes here
}
myFunc()

const myotherfunction=()=>{
    //code goes here
}
myotherfunction()

console.log("hello world")


const log = (message) => { 
    console.log(message)
}
    
log("hello world")

log(1)





const handleclick=()=>{
    let firstName=document.getElementById("first-name").value
    console.log(firstName)
    let lastName=document.getElementById("last-name").value
    log("click")
    // alert("Hello "+firstName+" "+lastName)
    let dialogBox=document.getElementById("dialog-box")
    dialogBox.innerHTML="goodbye "+firstName+" "+lastName
    dialogBox.style.display="block"

    // Cyrilles weird code
    dialogBox.innerHTML= `
    <div class="something">
        <h1>Hello world!</h1>
        <div>Good to have you ${firstName} ${lastName} </div>
        <button id="close-button">close</button>
    </div>
    `
    document.getElementById('close-button').addEventListener('click', () => {
        dialogBox.style.display = 'none';
    });
}   
document.getElementById("button").addEventListener("click",handleclick)

