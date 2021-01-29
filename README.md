## Overview
API-Q is an application for sending and receiving HTTP requests and notably, scheduling the sending of a request at a later time (hence the name, API-"queue"). This saves the developer time and hassle from having to setup their own server to receive a response. API-Q is sort of like a slimmed down and easier to use version of Postman, but with a scheduler.

## Getting Started
### Step 1: Sign Up
This is really just a demo account for you to play around and explore what we've built. You won't get any emails. You won't even get an initial confirmation email. Or, don't sign up at all and just use the dummy credentials by clicking the yellow button.


If you do sign up, be sure to choose a password that you can easily remember. Since this is a demonstration site we've chosen not to implement a basic settings page at this time and we have not implemented a way to reset your password should you forget it.

### Step 2: Send a Request!


Now you should be at the /app route. Feel free to make a request! The simplest thing to try would be a GET request to some domain (i.e. website) that you're familiar with, like https://www.google.com. Select GET, enter the URL where it is indicated, and give your request a name - this is just something to help you remember it by. Then just scroll to the bottom of the page and hit send. There is no need to include any parameters or headers unless your specific use case requires them.

### Sending Requests Now

If you sent a request and you did not use the scheduler, that means we sent the request right now on your behalf. You should see a summary of the request and the response we received on your behalf in the Past tab, located to left in the sidebar. The type of request you made is in blue, the status code of the response is in red or green (depending on whether it was successful or not), and the status text is in gray. You'll also see the date and time that the request was sent.

###Scheduling Future Requests

If you used the scheduler when sending a request, that means your summary will be populated in the sidebar's Future tab. Click it to reveal the summary.

Note that when scheduling a request the default time zone will be the one you chose when signing up. Feel free to change it when sending a request with the scheduler.

### Viewing a Request

Ok, so you've either sent or scheduled a request. Just click on the summary in the sidebar to pop up a modal with all the details. At the top you'll see two tabs: Request and Response.

The Request tab will show you what you sent including the request headers and the body, if applicable (for example, you don't include a body when sending a GET request).

The Response tab will show you what was sent back to us in response including the response headers and the body, if applicable. For example, if you made a GET request to Google's homepage you'll see a bunch of HTML in the Body.

You'll also notice that we've pre-populated the fields with the information your original request included. We do this to make life easier in case you want to scroll down and just send the same sort of request again. You can also choose to make some modifications and then send it, or even schedule a modified version for the future.

### Deleting a Request
Perhaps you've scheduled a request that you no longer want to send. Click on the summary, scroll to the bottom of the pop up, and you'll find a  button to satisfy your desire.

### Playing with an actual API endpoint
If you want to test API-Q with an actual API, try something like https://reqres.in/.

This is a sample API (no affiliation with us) that you can practice or test interacting with. For example, you could send a POST request to https://reqres.in/api/users. Be sure to select a Content-Type of JSON in the Body section and be sure to actually include valid JSON. Just follow the Reqres documentation.

### Implementation
We had a lot of decisions to make and many challenges along the way. At a high level, here's what we did and why.

### Stack
We're using the PERN stack: Postgres, Express, React, Node. There's not much to say about the Express/Node choice but we can talk a little about the data and React.

### Postgres and Data Wrangling


Why Postgres? We all had experience with it and it's a classic, powerful, relational database management system. In a way, our database isn't very complicated. We only have two tables, users and requests. So there really wasn't a need to make the database decision more complicated than it needed to be. We did however encounter some challenges "wrangling" the data into the forms we needed to work with. Different parts of our frontend expect data in various forms and HTTP requests and responses necessarily deal with a somewhat complicated and nested structure. If you send a request with say, Axios, what does that actual raw request look like? How do you view it? What does the actual raw response to an HTTP request look like? Hint: a bowl of spaghetti. Basically, we had to ensure that what our frontend expected to consume always matched up with the raw data we were storing in our database. This involved choices about type format, and just simply being careful enough to parse out the correct properties of these nested objects; it was surprisingly easy to forget to parse out a particular portion appropriately and sometimes storing data in particular data types versus others presented problems with the retrieval and consumption by the frontend.

## React
Why React? Each of us has the ability to build the frontend of this application from scratch with vanilla Javascript, AJAX requests, and various DOM manipulation techniques. Some of us had a little experience with React and others none. But we all agreed we wanted to get more/some experience with it so we decided to use the React abstraction. Although React is nice and makes some things easier it did cause us a lot of headaches. First, it has its own rules and one must learn those rules to work effectively. Why is this component re-rendering? Why won't this component re-render!?

In an attempt to stay DRY, we reused many components. For example, our "popup", the modal that appears when you click on a past or future request in the sidebar, is just the same form with the same combination of components as the main app page. These things have state living in various places, yet the form on the main app page needs to behave differently than the same form in the popup. Managing these state issues amongst identical components yet achieving different behavior dependent upon this state was probably the largest source of our headaches. Our app doesn't appear that complicated on the frontend but because of this twins-like nature of our components, it was a little tricky to deal with.

In terms of components we played around and employed a few different patterns. Sometimes we used plain old function components, sometimes class components, sometimes hooks, and we also implemented some higher order components in order to share some behavior amongst components.

We all gained valuable experience working with React and working through the challenges it can sometimes impose. There's a lot of ways to skin a cat in React and we tried our hands at several of them.

## Asynchroncity
Asynchronicity was an area that we encountered issues with initially and because of that, it was something we had to keep in mind while building out our application further. All API calls and DB queries made are I/O bounded operations. Part of I/O bounded work involves waiting for the operation to complete. To help us work with asynchronous code, we made use of Javascript async/await syntax. Async and await allowed us to code in a more predictable manner regardless of timing. An issue we initially encountered in this area was sending a response back to the client with the result of a DB query without waiting for the DB update transaction to complete first. This resulted in inconsistent data returned.

## Scheduling Requests
We could have chosen to work on anything but we just had to choose something involving dates and times 🤷‍♂️.

In concept, it's simple. In implementation, because, well...dates, it was a little tricky to figure out. But basically we're using a setInterval function which runs another function about every 30 seconds. What that function does is query our requests table to see if there are any user requests that have a raw response that is NULL. A user request is just all the data stored from them submitting our main form. We filter those requests to see if any have a scheduled time that is later then the time now. Then we use Axios and generate some details for each request that needs to go out; our users can specify their own headers and parameters if they so choose, and they may have given us a payload to send with their request as well.

With more traffic, we can possibly improve performance by refactoring this to use a cron job as a separate service.

## Future Features
API-Q in its current form is really just a demonstration of our capabilities. It was meant to be a fun project and one where we could explore and gain more experience with some particular technologies and perhaps also build something useful. It is a minimum viable product in terms of features. A user can send some requests now and schedule some requests for later. We think we've packaged that up in a relatively intuitive implementation. But there are many features we're capable of adding in the future should demand warrant them.

## Scheduling Recurring Requests
A user can currently only schedule a request for a single point in the future. It'd be nice to let them send one, say, every Tuesday at 6pm CST, or every three days, etc.

## More Timezones
We currently support five timezones in the U.S. We'd expand this to cover all timezones.

## User-Provided Scripts
A user can send a request now or schedule one for later, but it'd be nice to let them also upload a script of their writing that executes at the time we receive a response to their request. Perhaps their code could perform some processing and then hit another endpoint they control, or perhaps some other third party API.

## Cron Job Scheduling
Right now we're using a setInterval function on our main server to handle checking for and sending future scheduled requests. With more user traffic, it would make sense to break out this functionality with a cron job operating on a separate server.

## Testing Suite
We should have a testing suite. And if we go any further than this MVP it's one of the first things we should do.

## Settings
Right now a user can sign up and therefore sign in any time to see requests associated with their account. But we expect 99% of visitors to "skip sign up" and simply play with a demo account we generate and pre-populate with some requests for them to view. Later we'd implement a settings page where a user can at a minimum change their email and/or password.

## Email Sending
We would implement email sending for forgotten passwords and any notifications a user indicates they want to receive, perhaps when a request is sent on their behalf or if a response is received for one of their requests.

## Oauth Authentication
Some 3rd party API's may require authentication by including an additional HTTP header with some secret token. Right now our application supports basic authentication where a user can provide a custom header and its value where the value can be some API key. We currently do not have support for Oauth 1.0 where it requires signing a request with keys and tokens. A hashing algorithm is required to sign a request. This is an area we can definitely explore in the future.

## SEO
Our application is a single page with javascript loaded to insert content onto the web page. The front end is built using React and React router. For this reason, search engines will experience difficulty indexing any content on any of the pages.

