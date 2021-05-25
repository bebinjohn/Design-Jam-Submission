

const $fill=document.getElementById('fill')
document.querySelector('.stawberry_selector').addEventListener('click',()=>{
    if($fill.hasAttribute('fill')) $fill.removeAttribute('fill');
    $fill.setAttribute('fill','#fc5a8d')
})
document.querySelector('.coco_selector').addEventListener('click',()=>{
    if($fill.hasAttribute('fill')) $fill.removeAttribute('fill');
    $fill.setAttribute('fill','#8C6239')
})
document.querySelector('.Blueberry_selector').addEventListener('click',()=>{
    if($fill.hasAttribute('fill')) $fill.removeAttribute('fill');
    $fill.setAttribute('fill','#4f87f7')
})
document.querySelector('.Plain').addEventListener('click',()=>{
    if($fill.hasAttribute('fill')) $fill.removeAttribute('fill');
})


document.querySelector('.Gotop_link').addEventListener('click',()=>{
    document.getElementById('Top').scroll(0,100)
})

if(window.innerWidth<700){
    document.querySelector('.Try_button').addEventListener('click',()=>{
        document.getElementById('Top').scrollBy(0,650)
    })
}
else{
    document.querySelector('.Try_button').addEventListener('click',()=>{
        document.getElementById('Top').scrollBy(0,100)
    })
}



//Toogle button
const $toogle=document.querySelector(".slider");
document.styleSheets[0].addRule(`.slider:before`,`content:"L";`)
const $anchor=document.getElementsByTagName('a');
const $h1=document.getElementsByTagName('h1');
const $h2=document.getElementsByTagName('h2')
let flag=true;

$toogle.addEventListener('click',()=>{
    // console.log('hello')
    if(flag){
    document.querySelector('.header_wrapper').style.background='rgb(94, 91, 91)';
    document.styleSheets[0].addRule(`.slider:before`,`content:"D";`)
    for(let i=0;i<$anchor.length;i++) $anchor[i].style.color='rgb(236, 233, 233)'
    for(let i=0;i<$h2.length;i++) $h2[i].style.color='rgb(236, 233, 233)'
    for(let i=0;i<$h1.length;i++) $h1[i].style.color='rgb(236, 233, 233)'
    document.querySelector('h3').style.color='cyan'
    document.querySelector('h4').style.color='lightcyan';
    document.querySelector('.Topping_container').style.backgroundImage='url("https://digitalsynopsis.com/wp-content/uploads/2017/02/beautiful-color-gradients-backgrounds-091-eternal-constance.png")';
    document.querySelector('.Menu_container').style.background='#415764'
    document.querySelector('.Testimonial_section').style.background='#980036'
    document.querySelector('.footer').style.background='#040348'
    flag=false
    }
    else{
        document.querySelector('.header_wrapper').style.background='none';
        document.styleSheets[0].addRule(`.slider:before`,`content:"L";`)
        for(let i=0;i<$anchor.length;i++) $anchor[i].style.color='rgb(109, 103, 103)';
        for(let i=0;i<$h2.length;i++) $h2[i].style.color='rgb(109, 103, 103)';
        for(let i=0;i<$h1.length;i++) $h1[i].style.color='rgb(109, 103, 103)'
        document.querySelector('h3').style.color='rgb(18, 100, 128)'
        document.querySelector('h4').style.color='#b4720e';
        document.querySelector('.Topping_container').style.backgroundImage='none';
        document.querySelector('.Topping_container').style.backgroundImage='url("https://webgradients.com/public/webgradients_png/008%20Rainy%20Ashville.png")';
        document.querySelector('.Menu_container').style.background='rgba(250, 201, 195, 0.692)'
        document.querySelector('.Testimonial_section').style.background='rgba(173, 216, 230, 0.562)'
        document.querySelector('.footer').style.background='#dee4e7'
        flag=true;
    }
})