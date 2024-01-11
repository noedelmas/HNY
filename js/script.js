const intervalexit = setInterval(exit, 12500)

function play() {
    const audio = document.getElementById("my-audio");
    audio.volume = 0.5;
    audio.play();
  }

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
    },"2000");

    setTimeout(()=>{
        showstep2()
    }, "13000")
}

function exit(){

    step1title.style.bottom = -9000;
    step1para.style.top = -9000;

    setTimeout(()=>{
        step1.style.opacity = 1;

        step1title.style.opacity = 0;

        step1para.style.opacity = 0;
        
    },"1250");
    
}

function showstep2(){

    let step1 = document.getElementById('step1')
    let step2 = document.getElementById('step2')
    let step2title = document.getElementById('step2title')
    let step2para = document.getElementById('step2para')
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
         step2para.style.left = 0;
         step2title.style.right = 0;

    },"2000");

    setTimeout(()=>{
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

// Démarrage de l'affichage de la fonction step3

    function showstep3(){
    let step2 = document.getElementById('step2')
    let step3 = document.getElementById('step3')
    let step3title = document.getElementById('step3title')
    let step3para = document.getElementById('step3para')
    
    step2.style.display = "none";
    step3.style.display = "block";

    step3.style.opacity = 0;

    step3para.style.opacity = 0;

    step3title.style.opacity = 0;

    

    setTimeout(()=>{

        step3.style.opacity = 1;
        step3title.style.opacity = 1;
        step3para.style.opacity = 1;
    },"1000");

    setTimeout(()=>{

        step3title.style.top = 0;
        step3para.style.bottom = 0;
        step3.style.right = 0;
    },"2000");

    setTimeout(()=>{

        step3.style.bottom = -9000;
        step3title.style.top = -9000;
        step3para.style.bottom = -9000;
    },"11000");

    setTimeout(()=>{

        step3.style.opacity = 1;

        step3title.style.opacity = 1;
        
        step3para.style.opacity = 1;
    },"12000");

    setTimeout(()=>{
        showstep4()
    }, "15000")

}

function showstep4(){
    let step4 = document.getElementById('step4')
    let step4para = document.getElementById('step4para')
    let step4title = document.getElementById('step4title')

    step3.style.display = "none";
    step4.style.display = "block";

    step4.style.opacity = 0;

    step4para.style.opacity = 0;

    step4title.style.opacity = 0;

    setTimeout(()=>{

        step4.style.opacity = 1;
        step4title.style.opacity = 1;
        step4para.style.opacity = 1;
    },"1000");

    setTimeout(()=>{

        step4title.style.top = 0;
        step4para.style.bottom = 0;
    },"2000");

    setTimeout(()=>{

        step4title.style.bottom = -9000;
        step4para.style.top = -9000;
    },"11000");

    setTimeout(()=>{

        step4.style.opacity = 1;

        step4title.style.opacity = 1;
    
        step4para.style.opacity = 1;
    
    },"12000");
    
    setTimeout(()=>{
        showstep5()
    }, "15000")

}

function showstep5(){
    let step5 = document.getElementById('step5')
    let step5title = document.getElementById('step5title')
    let step5para = document.getElementById('step5para')

    step4.style.display = "none";
    step5.style.display = "block";

    step5.style.opacity = 0;

    step5title.style.opacity = 0;

    step5para.style.opacity = 0;

    setTimeout(()=>{

        step5.style.opacity = 1;
        step5title.style.opacity = 1;
        step5para.style.opacity = 1;
    },"1000");

    setTimeout(()=>{

        step5title.style.top = 0;
        step5para.style.bottom = 0;
    },"2000");

}

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

//         
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