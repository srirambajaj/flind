

if (annyang) {
  // Let's define a command.

  const commands = {
    'one': () => { location.href = 'shirt.html'; }

 };
 
 const commands2 = {
    'hello': () => { location.href = 'jeans.html'; }

 };
  
 const commands3 = {
    'three': () => { location.href = 'shoes.html'; }

 };
 


  // Add our commands to annyang
  annyang.addCommands(commands);
  annyang.addCommands(commands2);
  annyang.addCommands(commands3);
  // Start listening.
  annyang.start();
}
