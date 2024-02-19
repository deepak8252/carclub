let pickup=document.getElementById("pickup");
let header=document.getElementById("header");
let hero=document.getElementById("hero");
window.addEventListener("scroll",()=>{
    if (window.scrollY >400) { // Change 200 to the desired scroll position
        pickup.style.position = "sticky";
        pickup.style.top = "100px";
        pickup.style.zIndex = "122";
        pickup.style.scrollBehavior="smooth"
        hero.style.height="180px";
        hero.style.position="sticky"
        hero.style.top="0"
        hero.style.backgroundSize="cover";
        hero.style.scrollBehavior="smooth";
        hero.style.zIndex="110"
    
    } 
    else if(window.scrollY>0){
        header.style.position="sticky";
        header.style.top = "0px";
        header.style.zIndex = "12277"; 
        header.style.scrollBehavior="smooth";
        header.style.transition=".4s"
    }
    
    else {
        pickup.style.position = "";
        pickup.style.top = "";
        pickup.style.zIndex = "";
        pickup.style.backgroundColor = "";
        header.style.position="";
        header.style.top = "";
        header.style.zIndex = ""; 
        hero.style.height="";
        hero.style.position=""
        hero.style.scrollBehavior="smooth"
        hero.style.top=""
    }

});

let body=document.querySelector("body");
let modalbox1=document.querySelector("#modal_box");
let modalbox2=document.querySelector("#modal_box2");
let modalbox3=document.querySelector("#modal_box3");
let modalbox4=document.querySelector("#modal_box4");
let modalbox5=document.querySelector("#modal_box5");
let closebtn =document.querySelectorAll(".close");
let modal1=document.querySelector("#modal1");
let modal2=document.querySelector("#modal2");
let modal3=document.querySelector("#modal3");
let modal4=document.querySelector("#modal4");
let modal5=document.querySelector("#modal5");

 modal1.addEventListener("click",()=>{
       modalbox1.classList.add("modal-box-show");
 });
 modal2.addEventListener("click",()=>{
    modalbox2.classList.add("modal-box-show");
 })
 modal3.addEventListener("click",()=>{
    modalbox3.classList.add("modal-box-show");
 })
 modal4.addEventListener("click",()=>{
    modalbox4.classList.add("modal-box-show");
 })
 modal5.addEventListener("click",()=>{
    modalbox5.classList.add("modal-box-show");
 })
closebtn.forEach(item=>(
    item.addEventListener("click",()=>{
    
    modalbox1.classList.remove("modal-box-show"),
        body.classList.remove("overlay");
        modalbox2.classList.remove("modal-box-show");
        modalbox3.classList.remove("modal-box-show");
        modalbox4.classList.remove("modal-box-show");
        modalbox5.classList.remove("modal-box-show");
    })
));
// active class

document.querySelectorAll(".fleetbtn").forEach(item => {
    item.addEventListener("click", () => {
        // Remove 'active1' class from all buttons
        document.querySelectorAll(".fleetbtn").forEach(btn => {
            btn.classList.remove("active1");
           
            
        });
        // Add 'active1' class to the clicked button
        item.classList.add("active1");
        // tab1Content.classList.remove("dis-none");
        
    });
});

// tabcontent
let tabcontent1=document.getElementById("tab1content");
let tabcontent2=document.getElementById("tab2content");
let tabcontent3=document.getElementById("tab3content");
let tabcontent4=document.getElementById("tab4content");
let tabcontent5=document.getElementById("tab5content");
let tab1=document.querySelector("#tab1");
let tab2=document.querySelector("#tab2");
let tab3=document.querySelector("#tab3");
let tab4=document.querySelector("#tab4");
let tab5=document.querySelector("#tab5");
console.log(tabcontent1)
function showtab1(){
tabcontent1.style.transform="translateX(0)";
tabcontent2.style.transform="translateX(100%)";
tabcontent3.style.transform="translateX(100%)";
tabcontent4.style.transform="translateX(100%)";
tabcontent5.style.transform="translateX(100%)";
}
function showtab2(){
    tabcontent1.style.transform="translateX(100%)";
    tabcontent2.style.transform="translateX(0px)";
    tabcontent3.style.transform="translateX(100%)";
    tabcontent4.style.transform="translateX(100%)";
    tabcontent5.style.transform="translateX(100%)";
    
    }
    function showtab3(){
        tabcontent1.style.transform="translateX(100%)";
        tabcontent2.style.transform="translateX(100%)";
        tabcontent3.style.transform="translateX(0)";
        tabcontent4.style.transform="translateX(100%)";
        tabcontent5.style.transform="translateX(100%)";
        
        }
        tab4.addEventListener("click",()=>{
            tabcontent1.style.transform="translateX(100%)";
            tabcontent2.style.transform="translateX(100%)";
            tabcontent3.style.transform="translateX(100%)";
            tabcontent4.style.transform="translateX(0)";
            tabcontent5.style.transform="translateX(100%)";
        })
        tab5.addEventListener("click",()=>{
            tabcontent1.style.transform="translateX(100%)";
            tabcontent2.style.transform="translateX(100%)";
            tabcontent3.style.transform="translateX(100%)";
            tabcontent4.style.transform="translateX(100%)";
            tabcontent5.style.transform="translateX(0)";
        })

