// $('.navs >li > a ').on('click', function (e) {

//     let divs = $('.about ,.contact').toArray()
//      divs.forEach(div => {
//          div.classList.add("scroll")
//          console.log(div.classList)
//      });
//     if (this.hash !== "") {
//         e.preventDefault();
//         const hash = this.hash;
//         $('html ,body').animate({
//             scrollTop: $(hash).offset().top
//         }, 800)
//     }
// })
let links = document.querySelectorAll('.navs > li > a')
links = Array.from(links);
links.forEach(element => {
    element.addEventListener('click',function(e){
      let element= document.getElementById(e.target.hash.slice(1));
       element.classList.add("scroll");
       console.log(element)
    })
    
});