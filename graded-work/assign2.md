---
title: Assignment 2
layout: default
---

## BTI425 Assignment 2

The purpose or objective of the assignment is to create a substantial Angular app.

Read/skim all of this document before you begin work.

While you are doing the work, if a *specific task* is not clear, or it seems to require an unreasonable amount of time to complete, or it seems to require knowledge way beyond the content we've covered in the course, please don't hesistate to contact your professor. 

> You should NOT have to search for or locate resources "out there" in an effort to complete this work.  
> The resources provided in this course - notes, linked content, code examples - provide sufficient coverage. Review them frequently.  
> If you think that you will find "the answer" to this assignment somewhere "out there", you're wrong. Use the course resources as your shortcut. 

<br>

### Due Date

Thursday, March 28, 2019, at 11:00pm ET

> It is likely that there will be interim due dates, to encourage weekly work, and ensure that you are making progress. 

Grade value: 25% of your final course grade

*If you wish to submit the assignment before the due date and time, you can do that.*

<br>

### Overview and purpose

As noted above, the purpose of objective of the assignment is to create a substantial Angular app that has good coverage of the topics since we started working with this app dev platform. 

The theme of the app is to perform a task that's similar to the *new academic term course enrolment* process. Current students use the student center app to do this task. The professor team thought it would be interesting to implement some of this here. 

> <mark>&nbsp;Important notice&nbsp;</mark>  
> As discussed in class recently, this document will be updated during the next week or so.  
> This is a new assignment, and the professors must build the infrastructure and an example solution from scratch. That work takes time, and will be completed as soon as we can.  
> However, don't delay starting this app, as there will be lots to do.

The app will be deployed to a public host (a Heroku endpoint), so that you can deliver it to other devices (including, for example, your smartphone).  

Notably, the app will use a *new* web service, also posted to Heroku and Atlas. The web service should be your first work task and completion goal. 

Looking to the future, it is possible that the final Assignment 3 will build upon the work done in this Assignment 2, by adding security-aware capabilities and safe-coding techniques. 

<br>

### Getting started

Getting started includes generating a new project, and configuring your development environment. 

Use `ng new...` to generate a new project, probably named `assign2`. 

Set up the rest of your dev environment (terminal windows, editor, browsers and tools). 

<br>

### Doing the work, initial 

During Week 8, your goal should be to start getting comfortable with the assignment's data model. We will have multiple entity collections, with some related data. As a result, it will be more substantial than the single-entity web service that you built in Assignment 1. 

To support this learning, get the `assign-2-data-student-v1.json` data file from the Week 8 folder of the code repository. Study its structure. Notice the following:
* It is a collection of "student" objects 
* Each "student" object has a number of data properties 
* One of its properties is "credits", which is a collection of courses a student has passed (this is a "course history")

Then, edit your new app to display the data in a simple table, as shown below. The contents of the JSON data file can be the value of a new class-level property - that's the easiest way to materialize the data without yet having to create a database or a web service. 

![Example](media/a2-display-data-students.png)

<br>

> As suggested above, read/skim all of this document before you begin work. 

<br>

#### Consistent layout 

We must have a consistent and functional visual layout. Therefore, the first task is to create a layout, or a structure. You can use the guidance in the [Angular component interaction](https://github.com/sictweb/bti425/tree/master/Week_07) code example (in the repo). Customize the "template" so that your name appears in the header area of the viewport. Make sure that there is a navigation scheme. 

<br>

#### Components to support the app's purpose

In the near future, this part of the document will be updated with guidance about the components needed by the app. More to come. 

<br>

#### Routing

As suggested by the guidance and topic coverage, configure and test the routing feature. 

Remember to configure a "home" component and route, and a "not found" component and route. 

The "home page" component, as a landing page for the app, will simply state the app's purpose. *More importantly*, it will include two standard HTML hyperlinks:
1. One is the URL to your Heroku-hosted (Angular) app 
2. The other is the URL to your Heroku-hosted <u>M</u>ongoDB + <u>E</u>xpress.js + <u>N</u>ode.js (MEN) web service 

> Your professor needs the URL to your hosted Angular app so that it can be tested on a standard computer browser and on a smartphone or tablet.  
> The URL to your hosted web service is needed too, so that your professor can interact with it using Postman.

<br>

### Doing the work, detail

In the near future, this part of the document will be updated.

<br>

### Testing your work

For this assignment, there is no required external testing capability. Therefore, rely on your browser tools for this step. 

<br>

### Deploy the Angular app to Heroku

> Note - Above, you will deploy the web service to Heroku and Atlas.

[Follow the guidance in the course notes](/notes/react-heroku-deploy), and deploy the Angular app to a new Heroku app. 

> Remember to do as noted above...  
> Update your home page component to include two standard HTML hyperlinks:  
> 1. One is the URL to your Heroku-hosted (Angular) app  
> 2. The other is the URL to your Heroku-hosted (MEN) web service 

<br>

### Grading procedure

Your professor will use a checklist during the grading process. The checklist will include items based on the assignment specifications. No, we will not distribute the checklist before the due date. 

Here's some more comments on the grading procedure:
* Part marks can be earned (it's not an all-or-nothing scheme)  
* Some marks will be earned for the presence of the web service 
* Some marks will be earned for a deployed/hosted Angular app
* Each of the five interaction tasks will earn marks
  * Some tasks could be "worth" more than others

Please review (again) the [information about grades](https://bti425.ca/policies#information-about-grades). To repeat one of its points, you will not earn an "A" simply for meeting a set of specifications. High grades are earned with work that is clearly better than expected (by meeting the specs). Better work includes a range of "qualitative" measures, including code quality, app and/or UI appearance, organization, content formatting, building upon foundations, and so on. 

<br>

### Reminder about academic honesty

You must comply with the College's academic honesty policy. Although you may interact and collaborate with others, you must submit your own work.

When you are ready to submit your work, you will copy some of the code in your project to plain text files, so that the My.Seneca/Blackboard "SafeAssign" tool can do its job. The next section will tell you which files to copy.

SafeAssign compares your work with that of other current and past students, and with existing works on the web. It uses techniques that are difficult to defeat. The overall goal is to identify copied work. 

<br> 

### Submitting your work

We need both the Node+Express web service and the Angular web app.  

Here's how to submit your work, before the due date and time:

#### Node+Express web service

1. Locate the folder that holds your project files. 

2. Make a copy of the folder. (You will be uploading a zipped version of the copy.)

3. Inside that folder, remove (delete) the `node_modules` folder. Your professor does NOT need that folder. Also, if it has a `.git` folder, remove that too.

4. Still in that folder, add a new folder named "MyCode". Copy these source code files to the "MyCode" folder:  
**The JavaScript (JS) file that holds the "server" code**  
**The JS file that holds the "manager" code**  
**The JS files (multiple) that hold the "schema" code**  
For each of these files, change the file name extension to "txt".

4. Compress/zip the copied folder. Maybe the name should be something like "assign2webservice.zip". The zip file SHOULD be about 1MB in size. If it isn't, you haven't followed the instructions properly.

#### Angular web app 

1. Locate the folder that holds your project files. 

2. Make a copy of the folder. (You will be uploading a zipped version of the copy.)

3. Inside that folder, remove (delete) the `node_modules` folder. Your professor does NOT need that folder. Also, if it has a `.git` folder, remove that too.

4. Still in that folder, add a new folder named "MyCode". Copy these source code files to the "MyCode" folder:  
**App.js**  
**The JS file that holds the (to be determined) component**  
**( more to come )**  
For each of these files, change the file name extension to "txt".

4. Compress/zip the copied folder. Maybe the name should be something like "assign2app.zip". The zip file SHOULD be about 1MB in size. If it isn't, you haven't followed the instructions properly.

#### Bundle both of them together

Ideally, bundle both of the zip files from above into a single zip file, maybe named something like "assignment2.zip". Then...

Login to My.Seneca.  
Open the course area.  
Click the "Assignments" link on the left-side navigator.  
Follow the link for this assignment.  
Submit/upload your zip file. The page will accept three submissions, so if you upload, then decide to fix something and upload again, you can do so.

<br>