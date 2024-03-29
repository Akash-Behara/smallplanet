
document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
    $('.js-timeline').Timeline(
        {}
    );
    const N = 10;
    // [...Array(N).keys()]
    // const arcsData = ['Hi'].map(() => ({
    //     startLat: (Math.random() - 0.5) * 180,
    //     startLng: (Math.random() - 0.5) * 360,
    //     endLat: (Math.random() - 0.5) * 180,
    //     endLng: (Math.random() - 0.5) * 360,
    //     color: [['red', 'black', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'black', 'blue', 'green'][Math.round(Math.random() * 3)]]
    // }));

    // let worldWidth = 0
    // let worldHeight = 0

    // if(window.innerWidth > 768){
    //     worldWidth = 700
    //     worldHeight = 700
    // }
    // if(window.innerWidth > 766 && window.innerWidth < 900){
    //     worldWidth = 500
    //     worldHeight = 500
    // } else {
    //     worldWidth = 1000
    //     worldHeight = 700
    // }
    
    // fetch('https://github.com/Akash-Behara/smallplanet/ne_110m_admin_0_countries.geojson', {
    //     headers: {
    //         mode: 'no-cors',
    //     }
    // }).then(res => res.json()).then(countries =>
    // {
    // const world = Globe()
    //     .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
    //     // .hexPolygonsData(countries.features)
    //     // .hexPolygonResolution(3)
    //     // .hexPolygonMargin(0.7)
    //     // .hexPolygonUseDots(true)
    //     // .hexPolygonColor(() => "rgba(255,255,255, 1)")
    //     .arcsData(arcsData)
    //     .arcColor('color')
    //     .arcDashLength(() => Math.random())
    //     .arcDashGap(() => Math.random())
    //     .arcDashAnimateTime(() => Math.random() * 2000 + 500)
    //     .backgroundColor('rgba(0, 0, 0, 0)')
    //     .pointOfView({ altitude: 5 })
    //     (document.getElementById('globe'))
    //     world.controls().autoRotate = true
    //     world.controls().autoRotateSpeed = 0.9
    //     world.controls().enableZoom = false;
    //     world.width([worldWidth])
    //     world.height([worldHeight])
    //     window.addEventListener('resize', () => {
    //         if(window.innerWidth > 768){
    //             worldWidth = 700
    //             worldHeight = 700
    //             world.width([worldWidth])
    //             world.height([worldHeight])
    //         }
    //         if(window.innerWidth > 766 && window.innerWidth < 900){
    //             worldWidth = 700
    //             worldHeight = 700
    //             world.width([550])
    //             world.height([550])
    //         } else {
    //             world.width([1000])
    //             world.height([700])
    //         }    
    //     })
    // }).catch((err) => console.log('err', err));

    gsap.registerPlugin(ScrollTrigger);

    //SD SECTION
    // let tl_sd = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: ".SD",
    //             toggleActions: "restart complete reverse resume",
    //             start: "top top",
    //             // markers: true,
    //             scrub: true,
    //             pin: true
    //         }
    // })
    // tl_sd.to(".p-one", {
    //     autoAlpha: 0
    // });
    // tl_sd.from(".p-two", {
    //     autoAlpha: 0,
    //     // y: 20
    // });
    // tl_sd.set(
    //     ".img-one",
    //     {
    //     autoAlpha: 0
    //     },
    //     "<"
    // );
    // tl_sd.from(
    //     ".img-two",
    //     {
    //     autoAlpha: 0
    //     },
    //     ">"
    // );
    //SD SECTION END

    // //MOVE INFO IMG TO LEFT
    // let info__tl = gsap.to('.Info__Img__Container',{
    //     x: -800,
    //     scrollTrigger: {
    //         trigger: ".Info__Img__Container",
    //         toggleActions: "restart complete reverse resume",
    //         start: "top center",
    //         markers: true,
    //         scrub: true,
    //     }
    // })
        


   //PROCESS
//    let sections = gsap.utils.toArray(".Process");
//    let process = document.querySelector(".method");
//    function getScrollAmount(){
//         let processWidth = process.scrollWidth
//         return -(processWidth - window.innerWidth)
//    }
//    console.log( getScrollAmount())
//    gsap.to(process, {
//      xPercent: getScrollAmount,
//      ease: "none",
//      scrollTrigger: {
//        trigger: ".method",
//        pin: true,
//        pinSpacing: false,
//        scrub: 1,
//     //    snap: 1 / (process.length - 1),
//        markers: true,
//        start: "top 20%",
//        end: () => `+=3500`,
//      }
//    });
   // PROCESS END

   let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
    xPercent: -100 * (sections.length - 1),
    ease: "none",
    scrollTrigger: {
        trigger: ".container_gsap",
        start: "top 10%",
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        markers: true,
        // pinSpacing: false,
        // base vertical scrolling on how wide the container is so it feels more natural.
        // end: "+=3500",
    }
    });


    // window.addEventListener('scroll', () => {
    //     console.log('scrol')
    //     const g = document.getElementById('globe')
    //     if(window.scrollY < 780){
    //         // g.style.transform = `translateX(-${window.scrollY}px)`
    //         window.innerWidth < 1005 ? g.style.transform = `translate(calc(-${window.scrollY}px + 100px), ${window.scrollY}px)` :
    //         g.style.transform = `translate(-${window.scrollY}px, ${window.scrollY}px)`
    //     }
    // })

    const whatsappAnim = document.getElementById('Whatsapp__Content')
    // setInterval(() => {
    //     whatsappAnim.classList.add('animate');
    //     const timer = setTimeout(() => {
    //         whatsappAnim.classList.remove('animate');
    //         clearTimeout(timer)
    //     }, 4000)
    // }, 5000);

    function isInViewport(el) {
        const rect = el.getBoundingClientRect();
        var isinview = (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    
        );
        // returns true or false based on whether or not the element is in viewport
        return isinview; 
    }

    let specialCard = document.querySelector('.Services__Section__Heading');
    window.addEventListener('scroll', () =>{
        console.log('in view', isInViewport(specialCard))
        let icons = document.querySelectorAll('.services_img_1')
        let icons2 = document.querySelectorAll('.services_img_2')
        if(isInViewport(specialCard)){
            icons.forEach((el) => {
                el.classList.add('services_img_1_move')
            })
            icons2.forEach((el) => {
                el.classList.add('services_img_1_move')
            })
        } else {
            icons.forEach((el) => {
                el.classList.remove('services_img_1_move')
            })
            icons2.forEach((el) => {
                el.classList.remove('services_img_1_move')
            })
        }
    })

    const cube1 = document.querySelector('.cube');
    const cube2 = document.querySelector('.cube2');
    const cube3 = document.querySelector('.cube3');
    const aboutus1 = document.getElementById('About__Us__Main');
    let isVisible = false;
    let aboutVisible = false

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    function checkVisibilityAndLog() {
        if (isElementInViewport(cube1) && !isVisible) {
            isVisible = true;
            cube1.classList.add('show-back')
            setTimeout(() => {
                cube1.classList.remove('show-back')
            }, 3500)
        }
         else if (!isElementInViewport(cube1)) {
            isVisible = false;
        }

        // if (isElementInViewport(cube2) && !isVisible) {
        //     isVisible = true;
        //     cube2.classList.add('show-back')
        //     setTimeout(() => {
        //         cube2.classList.remove('show-back')
        //     }, 3500)
        // }

        // if (isElementInViewport(cube3) && !isVisible) {
        //     isVisible = true;
        //     cube3.classList.add('show-back')
        //     setTimeout(() => {
        //         cube3.classList.remove('show-back')
        //     }, 3500)
        // }
    }
    // checkVisibilityAndLog();
    // window.addEventListener('scroll', checkVisibilityAndLog);


    // CAROUSEL SECTION
    // let arr = [
    //     {title: 'title1', description: 'description', image: 'image'},
    //     {title: 'title2', description: 'description', image: 'image'},
    //     {title: 'title3', description: 'description', image: 'image'},
    //     {title: 'title4', description: 'description', image: 'image'},
    //     {title: 'title5', description: 'description', image: 'image'},
    //     {title: 'title5', description: 'description', image: 'image'},
    //     {title: 'title5', description: 'description', image: 'image'},
    //     {title: 'title5', description: 'description', image: 'image'},
    // ]
    // let carouselItems = [];
    // let carouselNavItems = [];
    // let currentSlide = '#slide-0';
    // const carouselItem = (item, i) => {
    //     return `
    //         <div id="slide-${i}" class="carousel__item">
    //             <h1>${item.title}</h1>
    //             <p>${item.description}</p>
    //             <img src=${item.image} alt="">
    //         </div>
    //     `
    // }
    // const carouselNav = (i) => {
    //     return `
    //         <a href="#slide-${i}" id="${i}" class="slider-nav-item"></a>
    //     `
    // }
    
    // const carouselContainer = document.getElementById('Slider')
    // const caroudleNavContainer = document.getElementById('slider-nav')
    // for(let i = 0; i < arr.length; i++){
    //     carouselItems.push(carouselItem(arr[i], i))
    //     carouselNavItems.push(carouselNav(i))
    // }
    // carouselContainer.innerHTML = carouselItems.join('')
    // caroudleNavContainer.innerHTML = carouselNavItems.join('')

    // const sliderNavItem = document.querySelectorAll('.slider-nav-item')
    // sliderNavItem.forEach((el) => {
    //     el.addEventListener('click', (e) => {
    //         currentSlide = e.target.attributes.href.value
    //     })
    // })
    // const slidePrevBtn = document.getElementById('sliderPrev')  
    // slidePrevBtn.addEventListener('click', () => {
    //     if(currentSlide == '#slide-0'){
    //         return
    //     }
    //     let slide  = currentSlide.split('-')[1]
    //     currentSlide = `#slide-${parseInt(slide) - 1}`
    //     document.getElementById(currentSlide.split('-')[1]).classList.remove('active')
    //     slidePrevBtn.href = currentSlide
    // })

    // const slideNextBtn = document.getElementById('sliderNext')  
    // slideNextBtn.addEventListener('click', () => {
    //     if(currentSlide == `#slide-${arr.length - 1}`){
    //         return
    //     }
    //     let slide  = currentSlide.split('-')[1]
    //     currentSlide = `#slide-${parseInt(slide) + 1}`
    //     document.getElementById(slide).classList.add('active')
    //     slideNextBtn.href = currentSlide
    // })

});

var cube = document.querySelector('.cube');
var cube2 = document.querySelector('.cube2');
var cube3 = document.querySelector('.cube3');
var currentClass = 'show-front';
var currentClass2 = 'show-front';
var currentClass3 = 'show-front';

function changeSide(e) {
    if(e === 'enter'){
        var showClass = 'show-back';
        if ( currentClass ) {
            cube.classList.remove( currentClass );
        }
        cube.classList.add( showClass );
        currentClass = showClass;
    } if(e === 'leave') {
        var showClass = 'show-front';
        if ( currentClass ) {
            cube.classList.remove( currentClass );
        }
        cube.classList.add( showClass );
        currentClass = showClass;
    }
    if(e === 'click'){
        if ( currentClass === 'show-front' ) {
            cube.classList.remove( currentClass );
            currentClass = 'show-back'
            cube.classList.add( currentClass );
            return
        }

        if( currentClass === 'show-back' ){
            cube.classList.remove( currentClass );
            currentClass = 'show-front';
            cube.classList.add( currentClass );
            return
        }

    }
}

function changeSide2(e) {
    if(e === 'click'){
        if ( currentClass2 === 'show-front' ) {
            cube2.classList.remove( currentClass2 );
            currentClass2 = 'show-back'
            cube2.classList.add( currentClass2 );
            return
        }

        if( currentClass2 === 'show-back' ){
            cube2.classList.remove( currentClass2 );
            currentClass2 = 'show-front';
            cube2.classList.add( currentClass2 );
            return
        }

    }
}

function changeSide3(e) {
    if(e === 'enter'){
        var showClass = 'show-back';
        if ( currentClass3 ) {
            cube3.classList.remove( currentClass3 );
        }
        cube3.classList.add( showClass );
        currentClass3 = showClass;
    } if(e === 'leave') {
        var showClass = 'show-front';
        if ( currentClass3 ) {
            cube3.classList.remove( currentClass3 );
        }
        cube3.classList.add( showClass );
        currentClass3 = showClass;
    }
    if(e === 'click'){
        if ( currentClass3 === 'show-front' ) {
            cube3.classList.remove( currentClass3 );
            currentClass3 = 'show-back'
            cube3.classList.add( currentClass3 );
            return
        }

        if( currentClass3 === 'show-back' ){
            cube3.classList.remove( currentClass3 );
            currentClass3 = 'show-front';
            cube3.classList.add( currentClass3 );
            return
        }

    }
}
// set initial side
// changeSide();

// cube.addEventListener( 'mouseenter', () => {
//     changeSide('enter') 
// });
// cube.addEventListener( 'mouseleave', () => {
//     changeSide('leave') 
// });
// cube.addEventListener('click', () => {
//     changeSide('click')
// })

// cube2.addEventListener( 'mouseenter', () => {
//     changeSide2('enter') }
// );
// cube2.addEventListener( 'mouseleave', () => {
//     changeSide2('leave') 
// });
// cube2.addEventListener('click', () => {
//     changeSide2('click')
// })

// changeSide2()

// cube3.addEventListener( 'mouseenter', () => {
//     changeSide3('enter') }
// );
// cube3.addEventListener( 'mouseleave', () => {
//     changeSide3('leave') 
// }
// );
// cube3.addEventListener('click', () => {
//     changeSide3('click')
// })

// changeSide3()




