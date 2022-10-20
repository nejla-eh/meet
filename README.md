# Meet App

## Intro
This is a serverless, progressive web application (PWA) with React, which uses a test-driven development (TDD) technique. 

The application uses the Google Calendar API to fetch upcoming events

A demo can be previewed here: [Meet App](https://nejla-eh.github.io/meet/).

## Features

```
Feature 1: Filter Events by City

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities.

Scenario 2: User should see a list of suggestions when they search for a city.

Scenario 3: User can select a city from the suggested list.
```
   
 *As a user I should be able to “filter events by city”, so that I can see the list of events that take place in that city.*

 

**Scenario 1:**

Given user hasn’t searched for any city

When the user opens the app

Then the user should see a list of all upcoming events

**Scenario 2:**

Given the main page is open

 When user starts typing in the city textbox

Then the user should see a list of cities (suggestions) that match what they’ve typed

**Scenario 3:** 

 Given the user was typing “Berlin” in the city textbox and the list of suggested cities is showing

When the user selects a city (e.g., “Berlin, Germany”) from the list

Then their city should be changed to that city (i.e., “Berlin, Germany”) and the user should receive a list of upcoming events in that city

```
Feature 2: Show/hide an event's details

Scenario 1: An event element is collapsed by default

Scenario 2: User can expand an event to see its details

Scenario 3: User can collapse an event to hide its details
```
*As a user I should be able to show/hide event details, so that I can see more/less information about an event.*

**Scenario 1:**

Given the event’s page was open

When the user checks the page

Then event element would be collapsed

**Scenario 2:**

Given user wanted to see event’s details

When the user clicks on an event

Then the user should see expanded event element

**Scenario 3:**

Given user hasn’t searched for event’s details

When the user clicks again on an event

Then the event element should collapse

```
Feature 3: Specify number of events

Scenario 1: When user hasn’t specified a number, 32 is the default number

Scenario 2: User can change the number of events they want to see
```
*As a user I should be able to specify number of events, so that I can see the exact number of events I want.*

**Scenario 1:**

Given user hasn’t specified the number of events

When the user opens the events page for given city

Then the user should see 32 events

**Scenario 2:**

Given the events page is open

When the user change the number of events

Then the user should see exact number of events they required

```
Feature 4: Use the app when offline

Scenario 1: Show cached data when there’s no internet connection

Scenario 2: Show error when user changes the settings (city, time range)
```
*As a user I should be able to use the app when offline, so that I can get the information I 	searched for when I was online.*

**Scenario 1:**

Given user wanted to check some info on the app

When the user has no internet connection

Then the user should be able to see cached data

**Scenario 2:**

Given user wanted to change the settings

When the user changes the settings 

Then the user should get an error

```
Feature 5: Data visualization

Scenario 1: Show a chart with the number of upcoming events in each city
```
*As a user I should be able to see a chart with the upcoming events in each city, so that I am 	familiar with the events and maybe find something that interests me.*

**Scenario 1:**

Given a main page is open 

When the user hasn’t searched for a specific city

Then the chart with the number of upcoming events should be displayed
