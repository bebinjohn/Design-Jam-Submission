
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
    document.getElementById('Top').scrollIntoView()
})

document.querySelector('.Try_button').addEventListener('click',()=>{
document.getElementById('Hwt').scrollIntoView()
})
    

document.querySelector('#Hwt_cover').addEventListener('click',()=>{
    document.querySelector('#Topping').scrollIntoView()
})
document.querySelector('#Hwt_search').addEventListener('click',()=>{
    document.querySelector('#menu').scrollIntoView()
})
document.querySelector('#Hwt_service').addEventListener('click',()=>{
    document.querySelector('#service').scrollIntoView()
})

//Toogle button
const $toogle=document.querySelector(".slider");
document.styleSheets[0].addRule(`.slider:before`,`content:"L";`)
const $anchor=document.getElementsByTagName('a');
const $h1=document.getElementsByTagName('h1');
const $h2=document.getElementsByTagName('h2')
const $head=document.querySelectorAll('.head');
const $h6=document.querySelectorAll('h6')
const $footlink=document.querySelectorAll('#foot_link');
let flag=true;


const dark=()=>{
    if(flag){
        document.querySelector('.header_wrapper').style.background='rgb(94, 91, 91)';
        document.styleSheets[0].addRule(`.slider:before`,`content:"D";`)
        for(let i=0;i<$anchor.length;i++){
            $anchor[i].style.color='rgb(236, 233, 233)'
        } 
        for(let i=0;i<$h2.length;i++) $h2[i].style.color='rgb(236, 233, 233)'
        for(let i=0;i<$h1.length;i++) $h1[i].style.color='rgb(236, 233, 233)'
        $h6.forEach((each)=>each.style.color='white')
        if( document.querySelector('#main').classList.contains('main')) document.querySelector('#main').classList.remove('main')
        document.querySelector('#main').classList.add('main1');
        if( document.querySelector('#navbar').classList.contains('bg-light')) document.querySelector('#navbar').classList.remove('bg-light')
        document.querySelector('#navbar').classList.add('bg-dark');
        document.querySelector('.Hwt_container').style.background='none';
        $head.forEach((each)=>each.style.borderBottom=' 2px solid rgb(236, 233, 233)')
        document.querySelector('h3').style.color='cyan'
        document.querySelector('h4').style.color='lightcyan';
        if( document.querySelector('#Topping').classList.contains('Topping_container')) document.querySelector('#Topping').classList.remove('Topping_container')
        document.querySelector('#Topping').classList.add('Topping_container1');
        if( document.querySelector('#menu').classList.contains('Menu_container')) document.querySelector('#menu').classList.remove('Menu_container')
        document.querySelector('#menu').classList.add('Menu_container1');
        if( document.querySelector('#service').classList.contains('Delivery_section')) document.querySelector('#service').classList.remove('Delivery_section')
        document.querySelector('#service').classList.add('Delivery_section1');
        document.querySelector('.Testimonial_section').style.background='none'
        document.querySelector('.footer_background').style.background='#040348'
        $footlink.forEach((each)=>each.style.cssText='color:white !important')
        flag=false
        }
        else{
            document.querySelector('.header_wrapper').style.background='none';
            document.styleSheets[0].addRule(`.slider:before`,`content:"L";`)
            for(let i=0;i<$anchor.length;i++) $anchor[i].style.color='rgb(109, 103, 103)';
            for(let i=0;i<$h2.length;i++) $h2[i].style.color='rgb(109, 103, 103)';
            for(let i=0;i<$h1.length;i++) $h1[i].style.color='rgb(109, 103, 103)'
            $head.forEach((each)=>each.style.borderBottom=' 2px solid rgba(109, 103, 103, 0.486)')
            document.querySelector('h3').style.color='rgb(18, 100, 128)'
            if( document.querySelector('#main').classList.contains('main1')) document.querySelector('#main').classList.remove('main1')
            document.querySelector('#main').classList.add('main');
            if( document.querySelector('#navbar').classList.contains('bg-dark')) document.querySelector('#navbar').classList.remove('bg-dark')
        document.querySelector('#navbar').classList.add('bg-light');
        document.querySelector('.Hwt_container').style.background='rgba(173, 216, 230, 0.459)';
            document.querySelector('h4').style.color='#b4720e';
            if( document.querySelector('#Topping').classList.contains('Topping_container1')) document.querySelector('#Topping').classList.remove('Topping_container1')
            document.querySelector('#Topping').classList.add('Topping_container');
            if( document.querySelector('#menu').classList.contains('Menu_container1')) document.querySelector('#menu').classList.remove('Menu_container1')
        document.querySelector('#menu').classList.add('Menu_container');
        if( document.querySelector('#service').classList.contains('Delivery_section1')) document.querySelector('#service').classList.remove('Delivery_section1')
        document.querySelector('#service').classList.add('Delivery_section');
            document.querySelector('.Testimonial_section').style.background='rgba(173, 216, 230, 0.562)'
            document.querySelector('.footer_background').style.background='#dee4e7'
            $footlink.forEach((each)=>each.style.cssText='color:gray !important')
            $h6.forEach((each)=>each.style.color='black')
            flag=true;
        }
}

$toogle.addEventListener('click',()=>{
    // console.log('hello')
    dark()
})


//Order animation


document.getElementById('order').addEventListener('click',()=>{
    document.querySelector('.Order_container').style.animationPlayState='running';
    document.querySelector('.Order_container').style.animation='truck 3s linear forwards';
    document.querySelector('#order').disabled=true;
    document.querySelector('.Each_section_container').style.transition="1s all";
    document.querySelector('.Each_section_container').style.opacity=0;
})


document.getElementById('button').addEventListener('click',()=>{
    document.querySelector('.Order_container').style.animation='right 3s linear forwards';
    document.querySelector('.Each_section_container').style.transition="10s all";
    document.querySelector('#order').disabled=false;
    document.querySelector('.Each_section_container').style.opacity=1;
})


//navbar scroll
const $link=document.querySelector('#each_link');
const $link1=document.querySelector('#each_link2');
const $link2=document.querySelector('#each_link1');
const $link3=document.querySelector('#each_link3');
const $link4=document.querySelector('#each_link4');
window.onscroll=()=>{
    if(scrollY>400){
        document.querySelector('#navbar').style.opacity=1;
        document.querySelector('#navbar').style.transform='translateY(0px)';
    }
    else{
        document.querySelector('#navbar').style.opacity=0;
        document.querySelector('#navbar').style.transform='translateY(-20px)';
    }
    // console.log(scrollY)
    if(scrollY>316&&scrollY<646){
        if(!$link.classList.contains('each_link')){
            $link.classList.add('each_link')
        }
        if($link1.classList.contains('each_link')){
            $link1.classList.remove('each_link');
        }
        }
        else if(scrollY>646&&scrollY<1112){
            if($link.classList.contains('each_link')){
                $link.classList.remove('each_link');
            }
            if(!$link1.classList.contains('each_link')){
                $link1.classList.add('each_link')
            }
            if($link2.classList.contains('each_link')){
                $link2.classList.remove('each_link');
            }
            }
            else if(scrollY>1112&&scrollY<1656){
                if($link1.classList.contains('each_link')){
                    $link1.classList.remove('each_link');
                }
                if(!$link2.classList.contains('each_link')){
                    $link2.classList.add('each_link')
                }
                if($link3.classList.contains('each_link')){
                    $link3.classList.remove('each_link');
                }
                }
                else if(scrollY>1660&&scrollY<2286){
                    if($link2.classList.contains('each_link')){
                        $link2.classList.remove('each_link');
                    }
                    if(!$link3.classList.contains('each_link')){
                        $link3.classList.add('each_link')
                    }
                    if($link4.classList.contains('each_link')){
                        $link4.classList.remove('each_link');
                    }
                    }
                    else if(scrollY>2286){
                        if($link3.classList.contains('each_link')){
                            $link3.classList.remove('each_link');
                        }
                        if(!$link4.classList.contains('each_link')){
                            $link4.classList.add('each_link')
                        }
                    }
    
}