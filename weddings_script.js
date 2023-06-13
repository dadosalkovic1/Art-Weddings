let menuButton=document.querySelector('#menu-button');
var NavDisplay=document.querySelector('.responsive-nav');
menuButton.addEventListener('click',()=>{

  if(window.getComputedStyle(NavDisplay).display==='none'){
    document.querySelector('.responsive-nav').style.animation='menuLoad 1s ease-in-out'
    let loadFunction = ()=> {

      document.querySelector('.responsive-nav ul').style.animation='fadeIn 0.4s ease-in-out'
      document.querySelector('.responsive-nav ul').style.display='block'
  
    }
      setTimeout(loadFunction,1000);
   
    

  document.querySelector('.responsive-nav').style.display='block';
  }
  else{
    
    document.querySelector('.responsive-nav ul').style.display='none'
    

    document.querySelector('.responsive-nav').style.animation='menuDeload 1s ease-in-out';
    let deloadFunction = ()=> {

      document.querySelector('.responsive-nav').style.display='none'
    }
      setTimeout(deloadFunction,1000);
   


  }
})
const instaOpen=()=>{
    window.location.href="https://l.facebook.com/l.php?u=https%3A%2F%2Finstagram.com%2Fartweddings.ba%3Figshid%3DMzRlODBiNWFlZA%253D%253D%26fbclid%3DIwAR1pplBsjd1zqPTcReABA-Qd5bkryM8HgnwY7w_fqsOIoOUb9WtFg5ISDfo&h=AT2ICebER6oI7nqwH3q0dBCx9-tPymkoMf1OqLdDZhkNlkCG4swLEL1jhftD58dGPZEmWZ9Mo0RXoRyBv27zNEUEEZE_lAq2u9oaMG7iImD0aU37jGn24G-6gSBqpkH_1zR-BQ";
    }
    
    const fbOpen=()=>{
      window.location.href="https://www.facebook.com/profile.php?id=100089833177679";
    }
    
    const numberOpen=  ()=>{
      let popup=document.querySelector('.popuptext');
      let number='+387 60 3135 2371'
       navigator.clipboard.writeText(number);
      popup.classList.toggle("show");
      
    setTimeout(ClosePopUp,3000);
    }
    
    const ClosePopUp=()=>{
      let popup=document.querySelector('.popup .popuptext ');
      popup.classList.remove("show");
    
    }

    function footerScroll(){
        let footer=document.querySelector('footer');
        footer.scrollIntoView();
      }
    