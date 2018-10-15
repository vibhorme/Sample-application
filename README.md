Backend(node) consist of

   /register: 

    POST: Contains username, email, password, PostGre SQL insertion and checking if already exists. and displaying the client ID

   /login:

    GET call: Testing if the backend is LIVE
    
    POST call: Login using email and password and generating JWT Token with 24hour validity
  
   /profile: 

   POST: Displaying data of the user using the generating TOKEN FYI: Testing purpose to log in using JWT Token

   /wordsearch: 

   POST: using Token and wordsearch to search for the github Taking Github API to search the required keyword and displaying top 5 results sorted by         stars

   
 Frontend(Reactjs, redux and css3) consist of

  
   Home: this is the first page at which user is asked for registration or signin.

   Login: this is the second screen at which the user is required to login and access the application.

   Search:  this is the main screen at which user can access the details of every git page using the drop-down and search option and the required data       will be rendered.
