# Improvements

My goal in this project was to show I could successfully make components from scratch and that I could duplicate the mock design. I tried to make some components as generic components so that the styling could be over written. At a certain point I stopped this because I felt I needed to finish in a reasonable time.

## Overall design

I would like to see more colors and maybe a dark theme.

## Accessible

Make the website accessible for people with disabilities. And add styling for on focus and on active for all the elements.

## DateSearchBar

- On focus show the date select underneath the input with two calenders next to each other similar to the https://www.airbnb.com/ website when you focus the _check in / check out_ field.
- Also on Enter I would make it search. Of course I would add error checking in manual input.
- Test if className props are added they overwrite the default className's

## e-mail table

- Have a loading state where similar to the how I styled the body text I would show a list of emails with no info until the info is loaded then show the actual emails
- Make the table actually responsive and not so that text would cut off similar to the design mock
- Make sure all columns are actually sorted on click
- Add different views similar to g-mail's display density
- Add a select colum in web view and a hold/swipe to select in mobile
- On hover show more information that is hidden
- Add show all and hide all button to show and hide the body text
- Use Redux to store the mails and store the show state in there as well.

## Testing
Add testing for the logic and the rendering of all the components.
