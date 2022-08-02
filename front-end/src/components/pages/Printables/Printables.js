import React from 'react';
import './printable.css';
//import {componetToPrint} from './compnetToPrint}'
//import { useRef } from "react";
//import { ActionButton } from "./ActionButton";
//import React from 'react';
//<button onClick = "printcontent('print')">print Content</button>

 const buttons = document.querySelectorAll("button");

function buttonHandler() {
  const imgId = this.querySelector("number").getAttribute("id");

  document.querySelector('style').textContent =
    `@media print {
        img { display: none; }
        #${imgId} { display: block; }
     }`;

  if (window.print) {
    window.print();
  }
}

buttons.forEach(button => {
  button.addEventListener("onClick", buttonHandler);
});

function ImagetoPrint(source){
    return "<html><head><scri"+"pt>function step1(){\n" +
    "setTimeout('step2()', 10);}\n" +
    "function step2(){window.print();window.close()}\n" +
    "</scri" + "pt></head><body onload='step1()'>\n" +
    "<img src='" + source + "' /></body></html>";
}

function PrintImage(source)
    {
        var Pagelink = "about:blank";
        var pwa = window.open(Pagelink, "_new");
        pwa.document.open();
        pwa.document.write(ImagetoPrint(source));
        pwa.document.close();
    }



function Printables() {

function apple()
{
   
    alert(window.print ())
}


    
    
    return (

     
     


        <div>
<center>

    <h1>Welcome to PrimeEdu's printable Page</h1>

   
   
    <h2 className='header__title'>Please select an Image to print</h2>
    


    <h3>English</h3>

    <div class ='english-print'>
  
    <img id="lightbulb" classname='print' src='printable/pritnable 1/alphabet.jpg' alt= 'alphabet' onClick = {PrintImage}/>
        <img id="blue" classname='print' src='printable/pritnable 1/blue.jpg' alt='blue' onClick = {PrintImage }id="blue"/>
        <img classname='print' src='printable/pritnable 1/brown.jpg' alt='brown' onClick = {PrintImage}/>
        <img classname='print' src='printable/pritnable 1/green.jpg' alt='green' onClick = {PrintImage}/>
        <img classname='print' src='printable/pritnable 1/orange.jpg' alt='orange' onClick = {PrintImage}/>
        <img classname='print' src='printable/pritnable 1/purple.jpg' alt='purple'onClick = {PrintImage}/>
        <img classname='print' src='printable/pritnable 1/pink.jpg' alt='pink'onClick = {PrintImage}/>
        <img classname='print' src='printable/pritnable 1/yellow.jpg' alt='yellow'onClick = {PrintImage}/>


</div>


      
        
        <h3>Maths</h3>
    <div class ='math-print'>
    
        <img classname='print' src='printable/pritnable 1/three.jpeg' alt='colour'onClick = {PrintImage}/>
        <img classname='print' src='printable/pritnable 1/five.jpeg' alt='colour'onClick = {PrintImage}/>
        <img classname='print' src='printable/pritnable 1/eight.jpeg' alt='colour'onClick = {PrintImage}/>
        <img classname='print' src='printable/pritnable 1/two.jpeg' alt='colour'onClick = {PrintImage}/>
        <img classname='print' src='printable/pritnable 1/rabbitmath.jpeg' alt='colour'onClick = {PrintImage}/>
        <img classname='print' src='printable/pritnable 1/snowmath.jpeg' alt='colour'onClick = {PrintImage}/>
    
    </div>
        

      <h3>Science</h3>
    <div class ='science-print'>

    <img classname='print' src='printable/pritnable 1/mercury.jpeg' alt='planet'onClick = {PrintImage}/>
    <img classname='print' src='printable/pritnable 1/jupiter.jpeg' alt='planet'onClick = {PrintImage}/>
    <img classname='print' src='printable/pritnable 1/earth.jpeg' alt='planet'onClick = {PrintImage}/>
    <img classname='print' src='printable/pritnable 1/venus.jpeg' alt='planet'onClick = {PrintImage}/>
    <img classname='print' src='printable/pritnable 1/rocket.jpeg' alt='planet'onClick = {PrintImage}/>
    <img classname='print' src='printable/pritnable 1/sc1.jpeg' alt='planet'onClick = {PrintImage}/>
    </div>


    <h3>Art</h3>
    <div class ='art-print'>
    <img classname='print' src='printable/pritnable 1/art1.jpeg' alt='art'onClick = {PrintImage}/>
    <img classname='print' src='printable/pritnable 1/art2.jpeg' alt='art'onClick = {PrintImage}/>
    <img classname='print' src='printable/pritnable 1/art3.jpeg' alt='art'onClick = {PrintImage}/>
    <img classname='print' src='printable/pritnable 1/art4.jpeg' alt='art'onClick = {PrintImage}/>
    <img classname='print' src='printable/pritnable 1/art5.jpeg' alt='art'onClick = {PrintImage}/>
    <img classname='print' src='printable/pritnable 1/sea.jpeg' alt='art'onClick = {PrintImage}/>
   
    </div>

    <h3>Geography</h3>
    <div class ='geo-print'>
    <img classname='print' src='printable/pritnable 1/geo1.jpeg' alt='geo'onClick = {PrintImage}/>
    <img classname='print' src='printable/pritnable 1/geo2.jpeg' alt='geo'onClick = {PrintImage}/>
    <img classname='print' src='printable/pritnable 1/geo3.jpeg' alt='geo'onClick = {PrintImage}/>
    <img classname='print' src='printable/pritnable 1/geo5.jpeg' alt='geo'onClick = {PrintImage}/>
    <img classname='print' src='printable/pritnable 1/geo6.jpeg' alt='geo'onClick = {PrintImage}/>
    <img classname='print' src='printable/pritnable 1/geo7.jpeg' alt='geo'onClick = {PrintImage}/>
        </div>


  

    
    <h3>Physical Education</h3>
    <div class = 'pe-print'>

    <img classname='print' src='printable/pritnable 1/pe1.jpeg' alt='pe'onClick = {PrintImage}/>
    <img classname='print' src='printable/pritnable 1/pe2.jpeg' alt='pe'onClick = {PrintImage}/>
    <img classname='print' src='printable/pritnable 1/pe3.jpeg' alt='pe'onClick = {PrintImage}/>
    <img classname='print' src='printable/pritnable 1/pe4.jpeg' alt='pe'onClick = {PrintImage}/>
    <img classname='print' src='printable/pritnable 1/pe5.jpeg' alt='pe'onClick = {PrintImage}/>
    <img classname='print' src='printable/pritnable 1/pe7.jpeg' alt='pe'onClick = {PrintImage}/>
    </div>

   
  



</center>






        </div>
        
        
    )
   
    
}

export default Printables;
