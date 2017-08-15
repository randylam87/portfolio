Portfolio
======================================

Goals:
======================================
Single page app
Mobile responsive
Full viewport height on each section
Each component should be independent of each other with the exception of skills and projects since they are closely related.


Technologies used:
======================================
React using create-react-app
Bootstrap 4.0 via reactstrap

Deployed via gh-pages

Plans:
=======================================
Add Snap scrolling
```
when a user scrolls, it will start to automatically scroll and stop at the exact point where the next component will show with its full vh
```

on the About component, mimic typeit by making a custom recursive function
```
typeit function will take in 2 parameters (string, wpm)
it will generate a new string and use charAt() to select the letter character it is currently on
it will use substring to select the next letter
it will convert the wpm paramter into miliseconds
it will loop through the string parameter and use set timeout with wpm as the interval and will end once we reach the end of the string

i can add a second recursive function that will use settimeout and indefinately add and remove a | character to mimic a flashing text indicator
```

Add filter functionality on the skills page
```
on click, it will add the id of the skill to a skills array
if the skills array's length > 0, then it will conditionally remove (unrender?) the skills component and generate a new child skills component in the Projects component.
the selected skills will have some css added to show that it has been selected (border? or maybe moved to a different component that only shows selected skills)
the skills array will conditionally render projects that have a property of the skill selected.

the reverse will be possible when a project is clicked (or a button on the project is clicked) it will contionally render a child component that shows all skills used
```

Googlemaps on the Contact page
```
Draw a google maps canvas using zipcode to deterime the size of the circle/center
Disable scrolling
```