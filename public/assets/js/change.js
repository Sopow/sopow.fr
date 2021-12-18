let i = 0;
let navbar = document.getElementById('navbar'); 
function change(){
if(i > 0 ){
i = 0;
      navbar.style.height = "80px"
      navbar.style.paddingBottom = "0px"
      navbar.style.transition = 'all ease-in-out 0.7s';
} else{
      navbar.style.height = "450px"
      navbar.style.paddingBottom = "365px"
      navbar.style.transition = 'all ease-in-out 0.7s';
      let test = document.getElementById('test');
      test.style.display = "block";

i++;
}
}