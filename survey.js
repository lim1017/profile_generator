const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? Nicknames are also acceptable", (NAME) => {
  
  rl.question('What"s an activity you like doing?', (ACTIVITY) => {

    rl.question('What do you listen to while doing that?', (SONG) => {

  
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (TIME) => {
  
        rl.question('What"s your favourite thing to eat for that meal?', (MEAL) => {
  
          rl.question('Which sport is your absolute favourite?', (SPORT) => {
  
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (SUPERPOWER) => {
  
            console.log(`${NAME} loves ${ACTIVITY}. while listening to ${SONG}. ${NAME} loves eating ${MEAL} over ${TIME}. ${NAME} is a beast at ${SPORT}. Nobody knows this but ${NAME} has the superpower of ${SUPERPOWER}`)

            rl.close();
          });
        });
    
        });
    
      });
    
    });
    
  });
    
});

  
