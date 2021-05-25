const $toogle=document.querySelector(".slider");
document.styleSheets[0].addRule(`.slider:before`,`content:"L";`);
const $anchor=document.getElementsByTagName('a');
const $h1=document.getElementsByTagName('h1');
const $h2=document.getElementsByTagName('h2')
const $h3=document.getElementsByTagName('h3')
const $h4=document.getElementsByTagName('h4')
const $article=document.getElementsByTagName('article')
let flag=true;


$toogle.addEventListener('click',()=>{
    if(flag){
    document.styleSheets[0].addRule(`.slider:before`,`content:"D";`)
    document.getElementById('navbar').classList.add('bg-dark')
    for(let i=0;i<$anchor.length;i++) $anchor[i].style.color='white';
    document.querySelector('.path').removeAttribute('stroke');
    document.querySelector('.path').setAttribute('stroke','white');
    document.querySelector('.Menu_container').style.background='#0a223d';
    document.getElementById('menu').style.color='white';
    for(let i=0;i<$h3.length;i++)$h3[i].style.color='black'
    for(let i=0;i<$h4.length;i++)$h4[i].style.color='black'
    for(let i=0;i<$article.length;i++)$article[i].style.background='white'
    flag=false
    }
    else{
        document.styleSheets[0].addRule(`.slider:before`,`content:"L";`);
        document.getElementById('navbar').classList.remove('bg-dark')
        document.querySelector('.path').removeAttribute('stroke');
    document.querySelector('.path').setAttribute('stroke','black');
        for(let i=0;i<$anchor.length;i++) $anchor[i].style.color='rgb(109, 103, 103)';
        document.querySelector('.Menu_container').style.background='lightgray';
        document.getElementById('menu').style.color='rgb(109, 103, 103)';
        for(let i=0;i<$h3.length;i++)$h3[i].style.color='white'
        for(let i=0;i<$h4.length;i++)$h4[i].style.color='white'
        for(let i=0;i<$article.length;i++)$article[i].style.background='#0a223d'
        flag=true;
    }
}
)