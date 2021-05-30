# [Various API projects](https://various-api.netlify.app/ "Various API projects")

![](https://cdn0.iconfinder.com/data/icons/thin-line-icons-for-seo-and-development-1/64/Programming_Development_Api-256.png)

## PWA made in:

**Gridsome**   ![](https://ghost.org/docs/jamstack/img/gridsome-logo.svg)

------------
Progressive Web Application written in ssg Gridsome + tailwind CSS.
I used six different API's to fetch data and display them.
1) Users API - fetch random user data and display them. In this case I also used infinite-scroll trick, so when we scroll down the site, next user data is fetching and displaying.
2) Star Wars API - I'm displaying informations about Star Wars characters in a table, sorted alphabetically by name.
3) Pokemons API - at the start I'm fetching all the pokemons names. After that we can filter pokemon by name (if we want to), after clicking on a name, we are fetching the data about the specific one, and displaying image and info about'em.
4) Harry Potter API - displaying all characters from HP movies, with some infos and images. We can also select the specific house characters.
5) Jokes API - fetch random joke. I used VUEX in this one, to store the number of jokes fetched. It collaborates with another one:
6) Weather API - it is implemented inside Jokes page, becouse after fetching few jokes, the modal is showing up, and displays the weather informations in Poland.
