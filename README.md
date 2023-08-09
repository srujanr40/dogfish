# dogFish

## High level Description

Dogfish is a place to meet with others for all sports activities. Do you lack the equipment or people to play your favourite sport? Dogfish can match you with what you need to have fun!

## Project Description

This application is for people trying to find others to play a sport with (especially groups that aren’t formal). It will provide a platform for people to find casual sporting groups, share equipment, and organize locations and dates to play together. Users will be able to create sessions manually, and others can either join those sessions manually or through an automatic matching algorithm based on user preferences and session history. The application will store data on users, equipment, and sessions to fuel a comprehensive recommendation algorithm. With this data, users will be able to access their accounts, view and join available sessions, create new sessions, chat with their groups, and update their profile information and preferences. We have also added Google map integrations for locations, public forums to discuss popular sports, and a few more interesting features!

## Project Task Requirements

### Minimal

1. Users should be able to access their accounts and account information (COMPLETE)
2. Users should be able to modify information about themselves — their location, sports they’d prefer to play, sports equipment they have on hand (COMPLETE)
3. Users should be able to manually create a sports session (COMPLETE)
    - Allow users to select what days/times they are available
    - Enter text for what sport the session is for, what equipment the organizer already has
    - Create a button to cancel created sessions
    - Display this session to users looking to join a sports session
4. Users should be able to view sessions scheduled in cities of their choice (COMPLETE)
5. Users should be able to manually join a sports session (COMPLETE)
    - A button beside the available session that lets users join if there is space available in the group 
    - Display that shows all users in the group, along with the equipment that they all collectively have on hand
    - Button that lets users leave groups

### Standard

1. Google Maps integration for user and sports facilities locations (COMPLETE)
2. Users looking to join a session get automatically assigned to groups with matching preferences (location, equipment, etc.) (COMPLETE)
3. Add animations to improve User Experience (COMPLETE)
4. Users should be able to chat with users in user groups (COMPLETE)
5. If users want to manually join a group, they should be able to filter/sort from available sessions. (COMPLETE)

### Stretch

1. Use mobile phone numbers and SMS messages for userID logins or email with verification link instead of unique plaintext ID (maybe also a Remember Me?) (COMPLETE: email with verification code)
2. Different front-end pages that take specific inputs for equipment available for some popular sports (reverting to text-box for sports that aren’t as common) (NOT COMPLETE)
3. Forums for some popular sports that users can access regardless of what user groups they are in (COMPLETE)

## How Tech from Class was Used 
1. HTML/CSS: Although our application uses MaterialUI for most styling, a lot of extra custom styling throughout our application was implemented via custom properties present in CSS files throughout our components. Usability is of utmost importance in a consumer app such as our one, so we tried our best to utilize HTML/CSS to provide the user with an experience that is easy to use, navigate, and understand.
2. React/Redux: Our front end is built using React, and structured atomically as components that further use MaterialUI components for functionality and styling. The state of the overall application is also stored in a Redux store, and updated on user interactions as necessary. This keeps the data consistently represented across the entire app, and allows for a smooth experience for the user.
3. Express & Node.js: Our front-end interfaces with a robust API powered by Express, a Node.js web application framework. This API, hosted on Render, allows us to easily abstract the intricate backend processes into various submodules that can more easily be consumed. Leveraging Node.js, the Express server efficiently handles complex application logic and our algorithms and interacts with our MongoDB database.
4. MongoDB: All of the data that our application uses is stored in MongoDB, and is then accessed or modified through Mongoose. This includes data for sessions, profiles, session chats, forums, etc. While redux handles our immediate updates to the user when data is modified, MongoDB ensures that these changes in data are persisted in the database so that it remains consistent across all user accounts and in between sessions.
5. Hosting: Our back-end and front-end are both hosted on Render. We abstracted various environment variables so that the application can continue to be run both locally as well as on Render. The Render front-end can easily communicate with the Render back-end, allowing for a very simple experience for the user.

## ‘Above and Beyond’ functionality

We believe that we went above and beyond in various ways. For starters, we worked very hard on refining the UX. We researched various designs that have been used in the past for other apps with similarities to ours and held multiple meetings to discuss our ideas. This led to the creation of an app that leverages the mental model of Netflix and feels very pleasant to use, and emphasizes the user experience.

Next, we also utilized both the google maps external API as well as location services. We did this so that we could include useful functionality in our app such as a map depicting where sessions are being held, session recommendations based on location, and a 'sessions near me' section on our dashboard. We believe that the integration of these services made a lot of sense for our app, and greatly added to our goals.

Moreover, we prioritized the utmost reliability when it came to user registrations within our application. Upon user signup, we harness the power of SendGrid API to bolster security through a streamlined process. A verification code is seamlessly generated and dispatched to users via email, ensuring authenticity and reinforcing account protection. By integrating SendGrid's reliable email delivery and authentication features, we establish a robust mechanism to verify new user accounts, enhancing the overall security posture of our platform.

Lastly, the feature that goes the most above and beyond in our app is our recommendation algorithm. This algorithm is based on all of the data collected throughout our app and even improves as the user uses the application more. The algorithm is based on the user's profile data, as well as the user's session history. It aggregates information such as the user's location, interests, and equipment on hand, the number of players that a session is missing to be complete, and the location, sport, and members of sessions that the user has previously attended. All of this data combines to make the algorithm quite effective, always seeming to recommend sessions that fit the user's preferences perfectly. The algorithm was set up in such a way that the exact weightings of each of these categories have been abstracted into an easily editable file, such that as more market research is conducted, the algorithm can easily be rebalanced to provide even better results. We feel that this algorithm represents something truly above and beyond what was required of us, and really helps differentiate our application from anything else. The algorithm shows up in the application in the featured sessions section, as well as the auto-join button, which automatically adds the user into the session that scores the highest based on the algorithm.

## Next Steps
We think that there are a few possible next steps for our application:

We would want to get actual feedback on the algorithm that we created in order to fine-tune the weights of each category. This could be done by obtaining market feedback or perhaps even exploring ML optimization strategies.

We would also want to further explore our 2nd stretch goal: customizing our front end based on certain popular sports. We think that giving session creators the option to have features such as equipment drop-downs with all relevant equipment to their selected sport, recommended nearby fields and courts for their desired sport, and other sport-specific functionality could greatly improve the user experience of our app!

We are sending an email verification code which never expires and also cannot be resent. This can be improved in future.

Lastly, making the application more mobile-friendly by either introducing a companion mobile app or optimizing the website for mobile would help with the user experience. People may not always have a laptop on hand when they are out and about being active. This could include the ability to provide mobile notifications for messages or recent activity on joined sessions, a weekly digest on trends or exciting new sessions that a user might be interested in based on the recommendation algorithm we've built, and the ability to integrate our application with other services a user might use such as messaging services or calendars.

## Member Contributions

Rory: My primary contributions were revamping our redux setup to make it more clean, effective, and easy to use, setting up our database, creating basic CRUD DB queries for all of our standard workflows, and refactoring our endpoints to utilize the new queries, and setting up our application's deployment/hosting. Additionally, I also fully developed the recommendation algorithm and used it in both the auto-join button and featured sessions section. Lastly, I also jumped around and helped out on a ton of different features such as creating the update/delete sessions feature for session owners, reworking the sports section filters to be much more efficient and based on the user's interests, and was one of the primary people that took charge of bug fixing across the application.

Srujan: I built and maintained the Create Session workflow, and worked on the initial setup for our backend -- including the addition of necessary endpoints, moving data server-side, and ensuring front-end functionality was preserved when calls were made with said endpoints. I also contributed with bugfixes, and general code and design optimization throughout.

Taqdeer: My major contributions were implementing features related to external APIs. I set up google maps API, used it in the front end for showing the map where the sessions are held and used it on the backend to show the activities happening within 10 kilometres of the user's location. I also set up SendGrid API to use for sending verification emails with codes upon signing up before allowing users to use the application. Other than this, my contributions involved implementing the main carousel component, implementing the profile update page, implementing the search feature, redesigning more info component and importantly, pitching the idea of using a mental model of Netflix. I also contributed to setting up the server side and implementing filtering based on sports sessions which were later optimized by my other team members.

Krish: I was responsible for developing the initial design of the dashboard, card design and functionality, authentication pages, and their corresponding endpoint setup. Throughout the project, I also consistently iterated on various design aspects such as logos, themes, card designs, layouts, custom components, and more, for all frontend elements. I also suggested and implemented design ideas aimed at enhancing user-friendliness and the overall aesthetic appeal of the application, all while maintaining its functionality.

Edvin: Throughout the project, I was primarily responsible for two large features in our project: the joined session page, and the forum page. The joined session page involved working with many different aspects of our application to allow the user to join and leave sessions from various different pages, get routed to the joined sessions page, have all of the relevant data updated and persisted according, and then be met with a joined page that contains a chat feature, information about the session, and more. Additionally, the forum page involved creating public forums for each of the most popular sports that is persisted in the database, and allows users to interact in real time.

### Lo-fi Prototypes

Create "Session"
![image](https://github.com/srujanr40/dogfish/assets/54603297/5f81141c-f6e8-4f4a-b893-e009d0f8f6d5)

Possible Dashboards
![image](https://github.com/srujanr40/dogfish/assets/54603297/7e5a90c6-00cd-47e0-bdad-1996e6627f34)

![dasboard](https://github.com/srujanr40/dogfish/assets/13267569/8fb99365-71ff-4136-b61b-adb430ba0d69)




