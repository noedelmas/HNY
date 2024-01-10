const intervalexit = setInterval(exit, 2250)

function start(){

    var step1 = document.getElementById('step1')
    var step1para = document.getElementById('step1para')
    var step1title = document.getElementById('step1title')
    console.log(step1)


    step1.style.opacity = 1;

    step1para.style.opacity = 1;

    step1title.style.opacity = 1;

    setTimeout(()=>{
        step1title.style.left = 0;
        step1para.style.right = 0;

        intervalexit
    },"1250");

}

function exit(){

    step1title.style.bottom = -9000;
    step1para.style.top = -9000;

    setTimeout(()=>{
        step1.style.opacity = 1;

        step1title.style.opacity = 0;

        step1para.style.opacity = 0;

    },"11000");
    
}

function showstep2(){

    let step1 = document.getElementById('step1')
    let step2 = document.getElementById('step2')
    let step2title = document.getElementById('title2')
    let step2para = document.getElementById('poeme2')
    // let autor2 = document.getElementById('autor2')
    
    step1.style.display = "none";
    step2.style.display = "block";

    step2.style.opacity = 0;

    step2title.style.opacity = 0;
    
    step2para.style.opacity = 0;

setTimeout(()=>{
    step2.style.opacity = 1;
    step2title.style.opacity = 1;
    step2para.style.opacity = 1;

     },"1000");
     setTimeout(()=>{
         title2.style.top = 0;
         step2para.style.bottom = 0;
         step2title.style.right = 0;
     },"2000");
     setTimeout(()=>{
         title2.style.bottom = -9000;
         step2para.style.top = -9000;
         step2title.style.bottom = -9000;
     },"10000");
     setTimeout(()=>{
        step2.style.opacity = 0;
     },"13000");
     setTimeout(()=>{
        showstep3()
     }, "15000")

}

    function showstep3(){
//     let step2 = document.getElementById('step2')
//     let step3 = document.getElementById('step3')
//     let title3 = document.getElementById('title3')
//     let poeme3 = document.getElementById('poeme3')
//     let autor3 = document.getElementById('autor3')
    
//     step2.style.display = "none";
//     step3.style.display = "block";

//     step3.style.opacity = 0;

//     title3.style.opacity = 0;
    
//     poeme3.style.opacity = 0;
    
//     autor3.style.opacity = 0;

//     setTimeout(()=>{
//         step3.style.opacity = 1;
//         title3.style.opacity = 1;
//         poeme3.style.opacity = 1;
//         autor3.style.opacity = 1;
//     },"1000");
//     setTimeout(()=>{
//         title3.style.top = 0;
//         poeme3.style.bottom = 0;
//         autor3.style.right = 0;
//     },"2000");
//     setTimeout(()=>{
//         title3.style.bottom = -9000;
//         poeme3.style.top = -9000;
//         autor3.style.bottom = -9000;
//     },"11000");
//     setTimeout(()=>{
//         step3.style.opacity = 1;

//         title3.style.opacity = 1;
        
//         poeme3.style.opacity = 1;
        
//         autor3.style.opacity = 1;
//     },"12000");
//     setTimeout(()=>{
//         showstep4()
//     }, "15000")
}

// function showstep4(){
//     let step4 = document.getElementById('step4')
//     let title4 = document.getElementById('title4')
//     let poeme4 = document.getElementById('poeme4')
//     let autor4 = document.getElementById('autor4')
    
//     step3.style.display = "none";
//     step4.style.display = "block";

//     step4.style.opacity = 0;

//     title4.style.opacity = 0;
    
//     poeme4.style.opacity = 0;
    
//     autor4.style.opacity = 0;

//     setTimeout(()=>{
//         step4.style.opacity = 1;
//         title4.style.opacity = 1;
//         poeme4.style.opacity = 1;
//         autor4.style.opacity = 1;
//     },"1000");
//     setTimeout(()=>{
//         title4.style.top = 0;
//         poeme4.style.bottom = 0;
//         autor4.style.right = 0;
//     },"2000");
//     setTimeout(()=>{
//         title4.style.bottom = -9000;
//         poeme4.style.top = -9000;
//         autor4.style.bottom = -9000;
//     },"11000");
//     setTimeout(()=>{
//         step4.style.opacity = 1;

//         title4.style.opacity = 1;
        
//         poeme4.style.opacity = 1;
        
//         autor4.style.opacity = 1;
//     },"12000");
//     setTimeout(()=>{
//         showstep5()
//     }, "15000")

// }

// function showstep5(){
//     let step5 = document.getElementById('step5')
//     let title5 = document.getElementById('title5')
//     let poeme5 = document.getElementById('poeme5')
//     let autor5 = document.getElementById('autor5')
    
//     step4.style.display = "none";
//     step5.style.display = "block";

//     step5.style.opacity = 0;

//     title5.style.opacity = 0;
    
//     poeme5.style.opacity = 0;
    
//     autor5.style.opacity = 0;

//     setTimeout(()=>{
//         step5.style.opacity = 1;
//         title5.style.opacity = 1;
//         poeme5.style.opacity = 1;
//         autor5.style.opacity = 1;
//     },"1000");
//     setTimeout(()=>{
//         title5.style.top = 0;
//         poeme5.style.bottom = 0;
//         autor5.style.right = 0;
//     },"2000");

// }

// function start(){
//     let step1 = document.getElementById('step1')
//     let title1 = document.getElementById('title1')
//     let poeme1 = document.getElementById('poeme1')
//     let autor1 = document.getElementById('autor1')
//     console.log(step1)



//     step1.style.opacity = 1;

//     title1.style.opacity = 1;
    
//     poeme1.style.opacity = 1;
    
//     autor1.style.opacity = 1;

//     setTimeout(()=>{
//         title1.style.top = 0;
//         poeme1.style.bottom = 0;
//         autor1.style.right = 0;

//         intervalexit
//     },"2000");
//     setTimeout(()=>{
//         showstep2()
//     }, "13000")
// }


// function exit(){


//     title1.style.bottom = -9000;
//     poeme1.style.top = -9000;
//     autor1.style.bottom = -9000;

//     setTimeout(()=>{
        

//         title1.style.opacity = 0;
        
//         poeme1.style.opacity = 0;
        
//         autor1.style.opacity = 0;
//     },"6000");
//     setTimeout(()=>{
//         step1.style.opacity = 0;
//     },"8000")
// }