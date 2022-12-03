// //sliders
// let slideContainers=[...document.querySelectorAll('.slide-container')];
// let prevButtons=[...document.querySelectorAll('.prev-button')];
// let nextButtons=[...document.querySelectorAll('.next-button')];

// slideContainers.forEach((item,i)=>{
//     let sliderDimensions=item.getBoundingClientRect();
//     let sliderWidth=containerDimensions.width;

//     nextButtons[i].addEventListener('click',()=>{
//         item.scrollLeft += sliderWidth - 200;
//     })

//     prevButtons[i].addEventListener('click',()=>{
//         item.scrollLeft -= sliderWidth + 200;
//     })
// });


// Video Cards
let cardContainers=[...document.querySelectorAll('.card-container')];
let preButtons=[...document.querySelectorAll('.pre-button')];
let nxtButtons=[...document.querySelectorAll('.nxt-button')];

cardContainers.forEach((item,i)=>{
    let containerDimensions=item.getBoundingClientRect();
    let containerWidth=containerDimensions.width;

    nxtButtons[i].addEventListener('click',()=>{
        item.scrollLeft += containerWidth - 200;
    })

    preButtons[i].addEventListener('click',()=>{
        item.scrollLeft -= containerWidth + 200;
    })
});

//coupon code
function onLoad(){
    document.getElementById('coupon').style.opacity='1';
    document.getElementById('coupon').style.visibility='visible';
    document.getElementById('body').style.opacity='0.4';
}
function closeCoupon(){
    document.getElementById('coupon').style.visibility='hidden';
    document.getElementById('body').style.opacity='1';
}