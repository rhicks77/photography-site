// when image is clicked
// log message
// const imgClick1=(e)=>{
//     console.log(e);
//     console.log('image clicked');
// // open a box
// // get the box element
//     const modal1=document.getElementById('modal1');
//     // make box visable
//     modal1.style.display='block';
// }

// const imgClick2=()=>{
//     const modal=document.getElementById('modal2');
//     console.log('image clicked');
//     modal2.style.display='block';    
// }   

// const imgClick3=()=>{
//     const modal=document.getElementById('modal3');
//     console.log('image clicked');
//     modal3.style.display='block';
// }   

// const imgClick4=()=>{
//     const modal=document.getElementById('modal4');
//     console.log('image clicked');
//     modal4.style.display='block';    
// }   

// const imgClick5=()=>{
//     const modal=document.getElementById('modal5');
//     console.log('image clicked');
//     modal5.style.display='block';    
// }   

// const imgClick6=()=>{
//     const modal=document.getElementById('modal6');
//     console.log('image clicked');
//     modal6.style.display='block';    
// }   

// const imgClick7=()=>{
//     const modal=document.getElementById('modal7');
//     console.log('image clicked');
//     modal7.style.display='block';    
// }  

// const imgClick8=()=>{
//     const modal=document.getElementById('modal8');
//     console.log('image clicked');
//     modal8.style.display='block';    
// }  

// const imgClick9=()=>{
//     const modal=document.getElementById('modal9');
//     console.log('image clicked');
//     modal9.style.display='block';    
// }  

// const imgClick10=()=>{
//     const modal=document.getElementById('modal10');
//     console.log('image clicked');
//     modal10.style.display='block';    
// } 

// const imgClick11=()=>{
//     const modal=document.getElementById('modal11');
//     console.log('image clicked');
//     modal11.style.display='block';    
// }   

// const imgClick12=()=>{
//     const modal=document.getElementById('modal12');
//     console.log('image clicked');
//     modal12.style.display='block';    
// }

const imgClick=(e)=>{
    console.log(e);

    document.getElementById('my-modals').innerHTML=e.target.outerHTML;
    const img=document.querySelector('#my-modals').querySelector('img');
    img.className='modal-image';
    modals.style.display='block';
}
// get the image element

for(let img=1; img<13; img++){
    console.log('img')
    const image=document.getElementById('img'+img)
    image.addEventListener('click', imgClick)
}

   
    // const img1=document.getElementById('img1');
    // const img2=document.getElementById('img2');
    // const img3=document.getElementById('img3');
    // const img4=document.getElementById('img4');
    // const img5=document.getElementById('img5');
    // const img6=document.getElementById('img6');
    // const img7=document.getElementById('img7');
    // const img8=document.getElementById('img8');
    // const img9=document.getElementById('img9');
    // const img10=document.getElementById('img10');
    // const img11=document.getElementById('img11');
    // const img12=document.getElementById('img12');

// add event listener
    // img1.addEventListener('click', imgClick1);
    // img2.addEventListener('click', imgClick2);
    // img3.addEventListener('click', imgClick3);
    // img4.addEventListener('click', imgClick4);
    // img5.addEventListener('click', imgClick5);
    // img6.addEventListener('click', imgClick6);
    // img7.addEventListener('click', imgClick7);
    // img8.addEventListener('click', imgClick8);
    // img9.addEventListener('click', imgClick9);
    // img10.addEventListener('click', imgClick10);
    // img11.addEventListener('click', imgClick11);
    // img12.addEventListener('click', imgClick12);

// const clickX=()=>{
//     console.log('x was clicked');
//     modal1.style.display='none';
//     modal2.style.display='none';
//     modal3.style.display='none';
//     modal4.style.display='none';
//     modal5.style.display='none';
//     modal6.style.display='none';
//     modal7.style.display='none';
//     modal8.style.display='none';
//     modal9.style.display='none';
//     modal10.style.display='none';
//     modal11.style.display='none';
//     modal12.style.display='none';
// }

const exitModal=(e)=>{
    console.log(e);
    console.log('clicked to exit');
    if(e.target.className!=='modal-image'){
        modals.style.display='none';
    }
}


document.getElementsByClassName('close')[0].addEventListener('click', exitModal);
// document.getElementsByClassName('close')[1].addEventListener('click', clickX);
// document.getElementsByClassName('close')[2].addEventListener('click', clickX);
// document.getElementsByClassName('close')[3].addEventListener('click', clickX);
// document.getElementsByClassName('close')[4].addEventListener('click', clickX);
// document.getElementsByClassName('close')[5].addEventListener('click', clickX);
// document.getElementsByClassName('close')[6].addEventListener('click', clickX);
// document.getElementsByClassName('close')[7].addEventListener('click', clickX);
// document.getElementsByClassName('close')[8].addEventListener('click', clickX);
// document.getElementsByClassName('close')[9].addEventListener('click', clickX);
// document.getElementsByClassName('close')[10].addEventListener('click', clickX);
// document.getElementsByClassName('close')[11].addEventListener('click', clickX);
    
document.getElementsByClassName('modals')[0].addEventListener('click', exitModal);
// document.getElementsByClassName('modal')[1].addEventListener('click', exitModal);
// document.getElementsByClassName('modal')[2].addEventListener('click', exitModal);
// document.getElementsByClassName('modal')[3].addEventListener('click', exitModal);
// document.getElementsByClassName('modal')[4].addEventListener('click', exitModal);
// document.getElementsByClassName('modal')[5].addEventListener('click', exitModal);
// document.getElementsByClassName('modal')[6].addEventListener('click', exitModal);
// document.getElementsByClassName('modal')[7].addEventListener('click', exitModal);
// document.getElementsByClassName('modal')[8].addEventListener('click', exitModal);
// document.getElementsByClassName('modal')[9].addEventListener('click', exitModal);
// document.getElementsByClassName('modal')[10].addEventListener('click', exitModal);
// document.getElementsByClassName('modal')[11].addEventListener('click', exitModal); 

let dialogBox=document.getElementById('dialog-box');

const submit=()=>{
    console.log('submit was clicked');
    let firstName=document.getElementById('first-name').value;
    let lastName=document.getElementById('last-name').value;
    let email=document.getElementById('email').value;
    let boxText=document.querySelector('p');
    if(firstName===""){
        boxText.innerHTML='Please enter your name.';
        dialogBox.style.display='block';
    }else if(lastName===""){
        boxText.innerHTML='Please enter your last name.';
        dialogBox.style.display='block';
    }else if(email===""){
        boxText.innerHTML='Please enter your email.';
        dialogBox.style.display='block';
    }else {
        boxText.innerHTML=
            `<h4>Success!</h4>
             <p>Thank you ${firstName} ${lastName}! We'll be in touch!</p>`
        dialogBox.style.display='block';
    }
    
    
}
document.getElementById('button').addEventListener('click', submit)

const closeBox=()=>{
    console.log('ok button clicked');
    dialogBox.style.display='none';
}
document.getElementById('ok-button').addEventListener('click', closeBox)