# Report

My basic strategy was to start from the top and work to the bottom of the supplied result.pdf

## Mission 1

- Added SASS so that styling that I already had from my own website so I would have some breakpoints.
- Added Prettier for ease of use

### SearchBar

- Added a searchBar and made the component in a way that it could receive className's via props so that it can overwrite
- Used the default input type='date' for ease of use.

### Assets

- Changed the SVG files so that the component can give the fill color to it instead of hard code it

### Add the search button

- Made a simple button component similar to the SearchBar

### Created the mail table

- The results div was created first
- added the logo image for the empty state
- Make a HTML table
- Created the mock > mails function so that you can always see the different dates in the different formats
- Added the mails to the table
- Styled the table to make it look like the mock for desktop
- Checked the responsiveness when making the browser smaller and adjusted the font size
- Scaled the browser to mobile view and removed the default styling
- Added clickable headers with sort arrow and different decent and ascent state
- Composed a grid and added the elements to the grid
- Added specific elements only for mobile view
- Test and adjust

## Mission 2

- The body text was added with placeholder styling
- Added styling to hide it
- State was added in an Array for each mail with the show state.
- I make the state in the `useEffect` hook since in the real case the mails might not be there in load. There are some issues with is so I added the load switch
- Tested the state changes
- Changed the sass to add an animation
- Resized to mobile view and fixed all the styling issus
