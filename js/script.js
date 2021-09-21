const navMob = () => {
    const a = document.querySelector('.nav_mob');
    const b = document.querySelector('.menu');
    const c = document.querySelectorAll('.menu li');

    a.addEventListener('click', () => {
        b.classList.toggle('nav_mob-active');

    c.forEach((link, index)=>{
        if(link.style.animation){
            link.style.animation='';
        }else{
        link.style.animation=link.style.animation = `nav_mob-fade 0.5s ease forwards ${index/7 }s`;
        }
    });

    a.classList.toggle('toggle');

    });
}

navMob();

$(document).ready(function(){
    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Student", "Developer", "Designer", "Leader"],
        typeSpeed: 120,
        backSpeed: 60,
        loop: true
    });
});

const spans = document.querySelectorAll('.word span');

spans.forEach((span, idx) => {
	span.addEventListener('mouseover', (e) => {
		e.target.classList.add('active');
	});
	span.addEventListener('animationend', (e) => {
		e.target.classList.remove('active');
	});
	
	//Initial animation
	setTimeout(() => {
		span.classList.add('active');
	}, 250 * (idx+1))
});



//inspect element blocker
//$(document).bind("contextmenu",function(e) {
 //   e.preventDefault();
 //  });
 //  
 //  $(document).keydown(function(e){
 //      if(e.which === 123){
  //        return false;
  //     }
 //  });


 const myTags = [
    'JavaScript', 'CSS', 'HTML',
    'C', 'C#', 'Adobe Photoshop',
    'Python', 'MatPlotlib', 'NumPy',
    'Pandas', 'VS Code', 'Canvas',
    'Adobe Acrobat', 'Hindi', 'Marathi',
];

var tagCloud = TagCloud('.content', myTags,{

  radius: 250,

  maxSpeed: 'medium',
  initSpeed: 'fast',

  direction: 0,
  
  keep: true
  
});

