const panels = document.querySelectorAll('.panel');
//console.log(panels) ;
panels.forEach(panel => {
    panel.addEventListener('click', () =>{
        removeActiveClasses();
        panel.classList.add('active')
    }) ;
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    });
}



                            // RELEASE_V2.1

// let contain1 = document.querySelector('.container1') ;
// let contain2 = document.querySelector('.container2') ;
// let contain3 = document.querySelector('.container3') ;
// let contain4 = document.querySelector('.container4') ;
// let contain5 = document.querySelector('.container5') ;
// let h3 = document.querySelectorAll('h3');

// function click1(){
//     //alert("Vous m'avez cliqué !");
//     contain1.style.width = '70vw'; 
//     contain2.style.width = '5vw'; 
//     contain3.style.width = '5vw';
//     contain4.style.width = '5vw'; 
//     contain5.style.width = '5vw'; 
//     h3[0].style.color = "rgba(250, 250, 250, 1)"; 
//     h3[1].style.color = "rgba(250, 250, 250, 0)"; 
//     h3[2].style.color = "rgba(250, 250, 250, 0)"; 
//     h3[3].style.color = "rgba(250, 250, 250, 0)"; 
//     h3[4].style.color = "rgba(250, 250, 250, 0)"; 
// }
// function click2(){
//     //alert("Vous m'avez cliqué !");
//     contain1.style.width = '5vw'; 
//     contain2.style.width = '70vw';
//     contain3.style.width = '5vw';
//     contain4.style.width = '5vw'; 
//     contain5.style.width = '5vw'; 
//     h3[0].style.color = "rgba(250, 250, 250, 0)"; 
//     h3[1].style.color = "rgba(250, 250, 250, 1)"; 
//     h3[2].style.color = "rgba(250, 250, 250, 0)"; 
//     h3[3].style.color = "rgba(250, 250, 250, 0)"; 
//     h3[4].style.color = "rgba(250, 250, 250, 0)";  
// }
// function click3(){
//     //alert("Vous m'avez cliqué !");
//     contain1.style.width = '5vw'; 
//     contain2.style.width = '5vw'; 
//     contain3.style.width = '70vw';
//     contain4.style.width = '5vw'; 
//     contain5.style.width = '5vw'; 
//     h3[0].style.color = "rgba(250, 250, 250, 0)"; 
//     h3[1].style.color = "rgba(250, 250, 250, 0)"; 
//     h3[2].style.color = "rgba(250, 250, 250, 1)"; 
//     h3[3].style.color = "rgba(250, 250, 250, 0)"; 
//     h3[4].style.color = "rgba(250, 250, 250, 0)"; 
// }

// function click4(){
//     //alert("Vous m'avez cliqué !");
//     contain1.style.width = '5vw'; 
//     contain2.style.width = '5vw'; 
//     contain3.style.width = '5vw';
//     contain4.style.width = '70vw'; 
//     contain5.style.width = '5vw'; 
//     h3[0].style.color = "rgba(250, 250, 250, 0)"; 
//     h3[1].style.color = "rgba(250, 250, 250, 0)"; 
//     h3[2].style.color = "rgba(250, 250, 250, 0)"; 
//     h3[3].style.color = "rgba(250, 250, 250, 1)"; 
//     h3[4].style.color = "rgba(250, 250, 250, 0)"; 
// }
// function click5(){
//     //alert("Vous m'avez cliqué !");
//     contain1.style.width = '5vw'; 
//     contain2.style.width = '5vw'; 
//     contain3.style.width = '5vw';
//     contain4.style.width = '5vw'; 
//     contain5.style.width = '70vw'; 
//     h3[0].style.color = "rgba(250, 250, 250, 0)"; 
//     h3[1].style.color = "rgba(250, 250, 250, 0)"; 
//     h3[2].style.color = "rgba(250, 250, 250, 0)"; 
//     h3[3].style.color = "rgba(250, 250, 250, 0)"; 
//     h3[4].style.color = "rgba(250, 250, 250, 1)"; 
// }