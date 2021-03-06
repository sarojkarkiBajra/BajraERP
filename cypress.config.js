const { defineConfig } = require("cypress");
const tagify = require('cypress-tags')
module.exports = defineConfig({
  projectId: 'fx8u8f',
  chromeWebSecurity: false,

  env:{
    email:'saroj.karki@bajratechnologies.com',
    email1:"randommail@gmail.com",
    password:'Savechanges206206',
    name:'Saroj Karki',
    //CYPRESS_RECORD_KEY:'5ac5323d-3710-4d74-b41f-6ee4acdee9f1',
 
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
      on('file:preprocessor', tagify(config))
    },
    baseUrl:"https://bajratechnologies.com/web/login"
  },
  
});
