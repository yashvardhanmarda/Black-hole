let myDiv4 = createDiv('Which are the 3  phases of an average stars life cycle?');
myDiv4 .style('font-size', '18px');
myDiv4 .style('color', '#ff0000');
myDiv4 .style('background-color', 'white');
myDiv4 .position(displayWidth-500,470);

radio4 = createRadio();
 radio4.option('white dwarf,red dwarf,yellow dwarf');
 radio4.option('yellow dwarf,red giant,white dwarf');
 radio4.option('yellow dwarf,red giant,red supergiant');

 radio4.style('color', '#ff0000');
 radio4.position(displayWidth-500,500)
 textAlign(RIGHT);

 let myDiv = createDiv('What is the mass of a massive star');
myDiv.style('font-size', '18px');
myDiv.style('color', '#ff0000');
myDiv.style('background-color', 'white');
myDiv.position(displayWidth-500,200);

radio = createRadio();
 radio.option('More than 10 solar masses');
 radio.option('1-2 solar masses');
 radio.option('Equal to  mass of the sun');

 radio.style('color', '#ff0000');
 radio.position(displayWidth-500,230)
 textAlign(RIGHT);