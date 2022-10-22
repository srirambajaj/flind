
  var audio = new Audio('options.mp3');
  audio.play();
if (annyang) {
  // Let's define a command.

  const commands = {
    'one': () => { location.href = 'fashion.html'; }

 };
 
 const commands2 = {
    'two': () => { location.href = 'electro.html'; }

 };
  
 const commands3 = {
    'three': () => { location.href = 'home.html'; }

 };
 


  // Add our commands to annyang
  annyang.addCommands(commands);
  annyang.addCommands(commands2);
  annyang.addCommands(commands3);
  // Start listening.
  annyang.start();
}
