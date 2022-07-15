const titleAnimationVersion=1;

const sleep = ms => new Promise(r => setTimeout(r, ms));

var TitleElement = null;
var TitleAnimationTexts = ["science nerd ", "hardworking academic ", "Om Duggineni "];

var titleAnimationHideEverything = function(){
    let elements_on_page = document.body.querySelectorAll(":not(.necessary-for-title-animation)");
    //console.log(elements_on_page);
    elements_on_page.forEach(function(element){
        element.classList.add("not-visible");
    });
};

var titleAnimationBringIntoView = function(){
    let elements_on_page = document.body.querySelectorAll(":not(.necessary-for-title-animation)");
    elements_on_page.forEach(function(element){
        element.classList.add('bring-into-view');
        element.classList.remove("not-visible");
    });
    setTimeout(()=>{
        elements_on_page.forEach(function(element){
            element.classList.remove('bring-into-view');
        });
    }, 1000);
};

const titleAnimationTypewriteTitle = async(title_elements, typing_indicator_element, text, delay, untypewrite) =>{
    //TitleElement
    let delays = [];
    for(let i = 0; i < text.length; i++){
        title_elements[i].innerText = text[i];
        typing_indicator_element.style.opacity = "1";
        let current_delay = Math.random()*delay+delay;
        delays.push(current_delay);
        await sleep(current_delay);
    }
    if(untypewrite){
        //untypewrite
        for(let i = text.length-1; i >= 0; i--){
            title_elements[i].innerText = "";
            typing_indicator_element.style.opacity = "1";
            let current_delay = delays[i]*0.9;
            await sleep(current_delay);
        }
    }
}
const titleAnimationToggleTypingIndicatorHandler = function(typing_indicator_element){
    return ()=>{
        if(typing_indicator_element.style.opacity === "1"){
            typing_indicator_element.style.opacity = "0";
        }else{
            typing_indicator_element.style.opacity = "1";
        }
    }
}
const executeTitleAnimation = async() => {
    let promise = new Promise((resolve) => {
        window.addEventListener('DOMContentLoaded', async()=>{
            let TitleElement = document.getElementById("page-title");
            TitleElement.innerText = "";

            let TitleTextElements = [];
            let max_TitleTextElements = 0;
            for(let i = 0; i < TitleAnimationTexts.length; i++){
                max_TitleTextElements = Math.max(max_TitleTextElements, TitleAnimationTexts[i].length);
            }
            for(let i = 0; i < max_TitleTextElements; i++){
                let TitleTextElement = document.createElement("span");
                TitleTextElement.classList.add("necessary-for-title-animation");
                TitleTextElements.push(TitleTextElement);
                TitleElement.appendChild(TitleTextElement);
            }

            let TitleTypingElement = document.createElement("span");
            TitleTypingElement.classList.add("necessary-for-title-animation");
            TitleTypingElement.innerHTML = "&#9608";
            TitleElement.appendChild(TitleTypingElement);
            setInterval(titleAnimationToggleTypingIndicatorHandler(TitleTypingElement), 1000);

            if(localStorage.getItem("title-animation-done") !== "true" && !(localStorage.getItem("title-animation-version") || false) && parseInt(localStorage.getItem("title-animation-version")) !== titleAnimationVersion){
                titleAnimationHideEverything();
                for(let i = 0; i < TitleAnimationTexts.length-1; i++){
                    await titleAnimationTypewriteTitle(TitleTextElements, TitleTypingElement, TitleAnimationTexts[i], 70, true);
                    await sleep(400);
                }
                await titleAnimationTypewriteTitle(TitleTextElements, TitleTypingElement, TitleAnimationTexts[TitleAnimationTexts.length-1], 70, false);
                titleAnimationBringIntoView();
                localStorage.setItem("title-animation-done", "true");
                localStorage.setItem("title-animation-version", titleAnimationVersion+"");
            }

            resolve();
            let elements_necessary_for_title_animation = document.body.querySelectorAll(".necessary-for-title-animation");
            elements_necessary_for_title_animation.forEach(function(element){
                element.classList.remove("necessary-for-title-animation");
            });

            // let TitleTextElementsFront = TitleTextElements;
            // let TitleTextElementsBack = [];

            // //interleave TitleTextElementsBack into children of TitleElement
            // for(let i = 0; i < TitleTextElementsFront.length; i++){
            //     let TitleTextElement = TitleTextElementsFront[i];
            //     TitleTextElement.classList.add("not-visible");
            //     TitleTextElement.classList.remove("bring-into-view");
            //     TitleTextElementsBack.push(TitleTextElement);
            //     TitleElement.appendChild(TitleTextElement);
            // }

            await titleAnimationTypewriteTitle(TitleTextElements, TitleTypingElement, TitleAnimationTexts[TitleAnimationTexts.length-1], 70, false);
            await sleep(1000);
            
        });
    });
    return promise;
};

export default executeTitleAnimation;