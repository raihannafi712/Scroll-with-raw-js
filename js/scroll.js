let btn = document.querySelector(".back_top");
let scroll = document.querySelector(".menu_bg")

btn.addEventListener("click" , ()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
})

// window.addEventListener("scroll", ()=>{           /* To check how many pixels were scrolled */
//      console.log("ami"); 
//     console.log(window.scrollY);    
// })
 
window.addEventListener("scroll", ()=>{          
   let haha = (window.scrollY);   
    if (haha > 1200) {
        scroll.classList.add("main2")       
    }else{
        scroll.classList.remove("main2")
    }
})

