
document.addEventListener('DOMContentLoaded', () => {
    AOS.init();
    const N = 10;
    const arcsData = [...Array(N).keys()].map(() => ({
        startLat: (Math.random() - 0.5) * 180,
        startLng: (Math.random() - 0.5) * 360,
        endLat: (Math.random() - 0.5) * 180,
        endLng: (Math.random() - 0.5) * 360,
        color: [['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)], ['red', 'white', 'blue', 'green'][Math.round(Math.random() * 3)]]
    }));

    let worldWidth = 0
    let worldHeight = 0

    if(window.innerWidth > 768){
        worldWidth = 700
        worldHeight = 700
    }
    if(window.innerWidth > 766 && window.innerWidth < 900){
        worldWidth = 500
        worldHeight = 500
    } else {
        worldWidth = 1000
        worldHeight = 700
    }
    
    // fetch('https://github.com/Akash-Behara/smallplanet/ne_110m_admin_0_countries.geojson', {
    //     headers: {
    //         mode: 'no-cors',
    //     }
    // }).then(res => res.json()).then(countries =>
    // {
    const world = Globe()
        .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        // .hexPolygonsData(countries.features)
        .hexPolygonResolution(3)
        .hexPolygonMargin(0.7)
        .hexPolygonUseDots(true)
        .hexPolygonColor(() => "rgba(255,255,255, 1)")
        .arcsData(arcsData)
        .arcColor('color')
        .arcDashLength(() => Math.random())
        .arcDashGap(() => Math.random())
        .arcDashAnimateTime(() => Math.random() * 2000 + 500)
        .backgroundColor('rgba(0, 0, 0, 0)')
        (document.getElementById('globe'))
        world.controls().autoRotate = true
        world.controls().autoRotateSpeed = 0.9
        world.controls().enableZoom = false;
        world.width([worldWidth])
        world.height([worldHeight])
        window.addEventListener('resize', () => {
            if(window.innerWidth > 768){
                worldWidth = 700
                worldHeight = 700
                world.width([worldWidth])
                world.height([worldHeight])
            }
            if(window.innerWidth > 766 && window.innerWidth < 900){
                worldWidth = 700
                worldHeight = 700
                world.width([550])
                world.height([550])
            } else {
                world.width([1000])
                world.height([700])
            }    
        })
    // }).catch((err) => console.log('err', err));

   const slider = document.querySelector('.Process__Wrapper');
//    const sections = gsap.utils.toArray(".Process__Wrapper section");

   gsap.registerPlugin(ScrollTrigger);

   let sections = gsap.utils.toArray(".Process");
   
   gsap.to(sections, {
     xPercent: -100 * (sections.length - 1),
     ease: "none",
     scrollTrigger: {
       trigger: ".container",
       pin: true,
       scrub: 1,
       snap: 1 / (sections.length - 1),
       // base vertical scrolling on how wide the container is so it feels more natural.
       end: "+=3700",
     }
   });

    window.addEventListener('scroll', () => {
        console.log('scrol')
        const g = document.getElementById('globe')
        if(window.scrollY < 780){
            // g.style.transform = `translateX(-${window.scrollY}px)`
            g.style.transform = `translate(-${window.scrollY}px, ${window.scrollY}px)`
        }
    })

    
    // window.addEventListener('scroll', (e) => {
    //     console.log('ee', e.target.scrollTop)
    //     document.getElementById('Process__Container').style.transform =  `translate3d(-${e.target.scrollTop}px, ${e.target.scrollTop}px, 0)`  
    // })
})