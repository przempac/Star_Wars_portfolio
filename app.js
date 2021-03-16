const burgerAnimation = () =>{
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  
  burger.addEventListener("click",()=>{
    
    nav.classList.toggle("nav-active");
    
    navLinks.forEach((link,index) =>{
      if(link.style.animation){
        link.style.animation=''
      }else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index/5 + 0.5}s`;
      }
    });
    
    burger.classList.toggle('toggle');
      });
  };
  
const navAnimation = () => {
  const sections = document.querySelectorAll('section');
  const bubble = document.querySelector('.bubble');
  const socialdivs = document.querySelector('.socialdivs');


  const options = {
    threshold:0.7
    };
    
    
  let observer = new IntersectionObserver(navCheck, options);
    
    
  function navCheck(entries){
    entries.forEach(entry =>{
      const className = entry.target.className;
      const activeAnchor = document.querySelector(`[data-page=${className}]`);
      const gradientIndex = entry.target.getAttribute('data-index');
      const coords = activeAnchor.getBoundingClientRect();
      const logo = document.querySelector(".logo");

      const yoda = document.querySelector(".image__yoda");
      const vader = document.querySelector(".image__vader");
      const award = document.querySelector(".award");
      const socials = document.querySelector(".socials");

      const directions = {
        height: coords.height,
        width: coords.width,
        top: coords.top,
        left: coords.left
      };
      if(entry.isIntersecting){
        bubble.style.setProperty("left", `${directions.left}px`);
        bubble.style.setProperty("top", `${directions.top}px`);
        bubble.style.setProperty("width", `${directions.width}px`);
        bubble.style.setProperty("height", `${directions.height}px`);
      }

      if(className == "home"){
        yoda.style.transform = "translateX(300px)";
        yoda.style.transition = "transform 2s ease";
        vader.style.transform = "translateX(-335px)";
        vader.style.transition = "transform 2s ease";
      }

      if(className == "project"){
        award.style.transform = "translate(-50%,-135px)";
        award.style.transition = "transform 2s ease .5s";
        }

      if(className !== "contact"){
        $(socialdivs).removeClass("socialdivs-active");
      }
      else{
        $(socialdivs).addClass("socialdivs-active");
        award.style.transform = "translate(-50%,-10%)";
        award.style.transition = "transform 1s ease 0s";
      }
      
      });
    }
    
    sections.forEach(section =>{
      observer.observe(section);
  })
  };

  
  const decisionPicker = () =>{
    const optionGood = document.querySelector('.button-good');
    const optionDark = document.querySelector('.button-dark');

    let root = document.documentElement;

      optionGood.addEventListener("click", () => {
        root.style.setProperty('--goodColor',"#2f8f3f");
      });

      optionDark.addEventListener("click", () => {
        root.style.setProperty('--goodColor',"#ad5c51");
      });

    }


  const miniGame = () =>{
    
    const spacecraft1 = document.querySelector('.spacecraft1');
    const spacecraft2 = document.querySelector('.spacecraft2');
    const spacecraft3 = document.querySelector('.spacecraft3');
    const spacecraft4 = document.querySelector('.spacecraft4');
    const spacecraft5 = document.querySelector('.spacecraft5');
    const star1 = document.querySelector('.star1');
    const star2 = document.querySelector('.star2');
    const star3 = document.querySelector('.star3');
    const star4 = document.querySelector('.star4');
    const star5 = document.querySelector('.star5');
    
    var stars = 0;

    spacecraft1.addEventListener("click", () => {
      star1.style.opacity = "1";
      spacecraft1.style.transform = "translate(100vw,45vh)";
      spacecraft1.style.transition = "transform 1.5s cubic-bezier(1,.29,.31,1) ";
      stars++;
      equipmentSlide()
    });

    spacecraft2.addEventListener("click", () => {
      star2.style.opacity = "1";
      spacecraft2.style.transform = "translate(-110vw,-100vh) scaleX(-1) rotate(90deg)";
      spacecraft2.style.transition = "transform 1.5s cubic-bezier(1,.29,.31,1) ";
      stars++;
      equipmentSlide()
    });

    spacecraft3.addEventListener("click", () => {
      star3.style.opacity = "1";
      spacecraft3.style.transform = "translate(-100vw,-100vh) scaleX(-1) rotate(90deg)";
      spacecraft3.style.transition = "transform 1.5s cubic-bezier(1,.29,.31,1) ";
      stars++;
      equipmentSlide()
    });

    spacecraft4.addEventListener("click", () => {
      star4.style.opacity = "1";
      spacecraft4.style.transform = "translate(100vw,100vh) scaleX(-1) rotate(90deg) ";
      spacecraft4.style.transition = "transform 1.5s cubic-bezier(1,.29,.31,1)  ";
      stars++;
      equipmentSlide()
    });

    
    spacecraft5.addEventListener("click", () => {
      star5.style.opacity = "1";
      spacecraft5.style.transform = "translate(-100vw,-100vh) scaleX(-1) rotate(-90deg)";
      spacecraft5.style.transition = "transform 1.5s cubic-bezier(1,.29,.31,1) ";
      stars++;
      equipmentSlide()
    });


    function equipmentSlide() {
      if (stars == 5){
        const equipment = document.querySelector(".equipment");
        equipment.className += "-complete";
      };
    }

  }

  miniGame();
  burgerAnimation();
  navAnimation();
  decisionPicker();