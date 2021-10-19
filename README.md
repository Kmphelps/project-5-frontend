# Test Resource Manager for QA Engineers and SDETs

## Pitch

Quality Assurance Engineers and Software Development Engineers in Test have a lot of resources to keep track of for each feature/project that they are working on. There are project management tools available, but most are geared toward project managers. This app will allow the QA or SDET to gather all of the resources needed to test (and automate tests for) a project or feature. 


## Backend
https://github.com/Kmphelps/project-5-backend 


## MVP User Stories

* As a user, I want to be able to create an account with username and password, so that I can log in 
* As a user, I want to be able to view all of my features/projects on a dashboard, so that I can see what I need to be working on
* As a user, I want to be able to share a feature/project with another user, so that they can collaborate on the resources with me
* As a user, I want to be able to add a new feature/project, so that I can add resources to it
* As a user, I want to be able to modify a feature/project, so that I can add resources to it as I gather them
* As a user, I want to be able to log out of the app, so that no one can access my work if I'm away from my computer
* As a user, I want to be able to unfollow a feature/project that I'm no longer working on, so that I can keep my dashboard clean


## Stretch Goal User Stories

* As a user, I want to be able to type a question and post it, so that another user can see my question and hopefully answer it.
* As a user, I want to be able to type notes and save them, so that I can see them later and so that other users can see them
* As a user, I want to be able to see a preview of Jira user stories that are part of the feature/project (requires integration with Jira)


## Entity Relationship Diagram

![Screen Shot 2021-10-12 at 1 47 46 PM](https://user-images.githubusercontent.com/81663925/137029708-c355072b-f5e6-487c-ae5a-a652061c7a7d.png)

* A user has many signups
* A feature has many signups
* A user has many features through signups
* A feature has many users through signups


## API Documentation / Routes

* User create/update
* GET/api/users/:id
 { id: 1 username: “TesterPerson” password: “supersecret” }
 
* Feature index/show/update/destroy
* GET/api/features/:id
 { id: 1 name: “Dashboard Widget” mockup: “https://www.researchgate.net/Example-of-a-mockup.png” mockup_link: “https://www.researchgate.net/Example-of-a-mockup.png” test_cases: "testrail.com" access_resources: "VPN, dev database"  }
 
* Signup create


## Mockup

![QAMgrDash](https://user-images.githubusercontent.com/81663925/137033317-66be7324-8731-47c2-9588-7afebd5cbaa5.png)


![QAMgrEditPg](https://user-images.githubusercontent.com/81663925/137029945-6989281e-b131-48cc-8e76-6238a53eb77e.png)






