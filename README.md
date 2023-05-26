# dogFish

## Project Description

This application is for people trying to find other people to play a sport with (especially groups that aren’t formal). It will provide a platform for people who want groups to play casual sports with to find each other, share equipment, organize locations and dates to play together. Users will be able to create sessions manually, and others can either join those sessions manually or through an automatic matching algorithm based on user preferences and equipment. The application will store data on usernames, emails, ages, sports equipment, locations, preferred sports and groups, user groups and teams, lists of sports, equipments, and available sessions, and chat histories. With this data, users will be able to access their account, view and join available games, create new sessions, chat with their groups, and update their profile information and preferences. Some additional functionality that can be added based on time constraints are google map integrations for locations, public forums to discuss popular sports, and mobile/email login authentication instead of plaintext ID.

## Project Task Requirements

### Minimal

1. Users should be able to access their accounts and account information
2. Users should be able to modify information about themselves — their location, sports they’d prefer to play, sports equipment they have on hand
3. Users should be able to manually create a sports session
    - Allow users to select what days/times they are available
    - Enter text for what sport the session is for, what equipment the organizer already has
    - Create a button to cancel created sessions
    - Display this session to users looking to join a sports session
4. Users should be able to view sessions scheduled in cities of their choice
5. Users should be able to manually join a sports session
    - A button beside available session that lets users join if there is space available in the group 
    - Display that shows all users in the group, along with the equipment that all collectively have on hand
    - Button that lets users leave groups

### Standard

1. Google Maps integration for user and sports facilities locations
2. If any costs were incurred as a result of a session, the users are notified of the split costs they owe to the session organizer
3. Users looking to join a session get automatically assigned to groups with matching preferences (location, equipment, etc.)
4. Add animations to improve User Experience
5. Users should be able to chat with users in user groups
6. If users want to manually join group, they should be able to filter/sort from available sessions.

### Stretch

1. Use mobile phone numbers and SMS messages for userID logins or email with verification link instead of unique plaintext ID (maybe also a Remember Me?)
2. Different front-end pages that take specific inputs for equipment available for some popular sports (reverting to text-box for sports that aren’t as common)
3. Forums for some popular sports that users can access regardless of what user groups they are in