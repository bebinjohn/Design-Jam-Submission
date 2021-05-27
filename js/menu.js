const $toogle=document.querySelector(".slider");
document.styleSheets[0].addRule(`.slider:before`,`content:"L";`);
const $anchor=document.getElementsByTagName('a');
const $h1=document.getElementsByTagName('h1');
const $h2=document.getElementsByTagName('h2')
const $h3=document.getElementsByTagName('h3')
const $h4=document.getElementsByTagName('h4')
const $article=document.getElementsByTagName('article')
const $h6=document.querySelectorAll('h6')
const $footlink=document.querySelectorAll('#foot_link');
const $original=document.querySelectorAll('.original_price')
const $offer=document.querySelectorAll('.Offer_price')
const $span=document.querySelectorAll('span');
let flag=true;
let flag1=true;

document.getElementById('toggle').addEventListener('click',()=>{
    if(window.innerWidth<700){
        if(flag1){
            if(document.querySelector('.Menu_container')){
                document.querySelector('.Menu_container').style.marginTop='130px';
            }
            else{
                document.querySelector('.Menu_container1').style.marginTop='130px';
            }
        flag1=false;
        }else{
            if(document.querySelector('.Menu_container')){
                document.querySelector('.Menu_container').style.marginTop='0px';
            }
            else{
                document.querySelector('.Menu_container1').style.marginTop='0px';
            }
            flag1=true
        }
    }
})

$toogle.addEventListener('click',()=>{
    if(flag){
    document.styleSheets[0].addRule(`.slider:before`,`content:"D";`)
    document.getElementById('navbar').classList.add('bg-dark')
    for(let i=0;i<$anchor.length;i++) $anchor[i].style.color='white';
    if( document.querySelector('#Menu_container').classList.contains('Menu_container')) document.querySelector('#Menu_container').classList.remove('Menu_container')
        document.querySelector('#Menu_container').classList.add('Menu_container1');
    document.getElementById('menu').style.color='white';
    for(let i=0;i<$h3.length;i++)$h3[i].style.color='black'
    for(let i=0;i<$h4.length;i++)$h4[i].style.color='black'
    for(let i=0;i<$h3.length;i++)$h3[i].style.color='black'
    for(let i=0;i<$h1.length;i++)$h1[i].style.color='white'
    document.querySelector('.footer').style.background='rgb(16, 72, 145)'
    $original.forEach((each)=>each.style.color='black')
    $offer.forEach((each)=>each.style.color='black')
    $span.forEach((each)=>each.style.color='black')
    for(let i=0;i<$article.length;i++)$article[i].style.background='white'
    $h6.forEach((each)=>each.style.color='white')
    $footlink.forEach((each)=>each.style.cssText='color:white !important')
    flag=false
    }
    else{
        document.styleSheets[0].addRule(`.slider:before`,`content:"L";`);
        document.getElementById('navbar').classList.remove('bg-dark')
    if( document.querySelector('#Menu_container').classList.contains('Menu_container1')) document.querySelector('#Menu_container').classList.remove('Menu_container1')
        document.querySelector('#Menu_container').classList.add('Menu_container');
        for(let i=0;i<$anchor.length;i++) $anchor[i].style.color='rgb(109, 103, 103)';
        document.getElementById('menu').style.color='rgb(109, 103, 103)';
        $original.forEach((each)=>each.style.color='white')
    $offer.forEach((each)=>each.style.color='white')
    $span.forEach((each)=>each.style.color='white')
        for(let i=0;i<$h3.length;i++)$h3[i].style.color='white'
        for(let i=0;i<$h1.length;i++)$h1[i].style.color='black'
        for(let i=0;i<$h4.length;i++)$h4[i].style.color='white'
        document.querySelector('.footer').style.background='rgba(126, 222, 233, 1)'
        $footlink.forEach((each)=>each.style.cssText='color:gray !important')
            $h6.forEach((each)=>each.style.color='black')
        for(let i=0;i<$article.length;i++)$article[i].style.background='#0a223d'
        flag=true;
    }
}
)