<br />
<p align="center">
Sopow.fr
</p>

<p align="center">
<a href="https://developer.mozilla.org/fr/docs/Web/JavaScript"><img src="https://i.sopow.fr/backend-in-javascript.png"></a>
<a href="https://www.sopow.fr/"><img src="https://i.sopow.fr/powered-by-sopow.png"></a>
<a href="https://fr.wikipedia.org/wiki/Portfolio"><img src="https://i.sopow.fr/website-portfolio.png"></a>
</p>

<br />

# Preview : 
<p align="center"><img src="https://i.sopow.fr/sopowfr.png"></p>

# Tools :

My site was builded with these tools, languages ​​or libraries :
* Visual Studio Code
* Express.js
* Node.js
* CSS3
* HTML5
* Pug

# Advantages : 

* Responsive
* Can add some page with "/" 

# Installation :

* Install node.js <a href="https://nodejs.org/en/download/">here</a>
* Install git <a href="https://git-scm.com/downloads">here</a>

**after :**

```console
npm i 
npm start
```

create a file ".env" in the folder config and put this like ".env.example" :
```
PORT=[choose your port]
```

You will have in your shell :

```console
[WEB] Website is ready on port, http://localhost:[PORT]
```

# Edit : 

For add page like createyourwebsite.com/page :<br/>

add in app.js :

```JS
var pageRouter = require('./routes/page');
app.use('/page', pageRouter)
```

<br/>create page.js in /routes and add : <br/><br/>


**for redirect to link :**

```JS
var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
    res.redirect('mailto:contact@sopow.fr');
});
```

**for display a page :**

```JS
var express = require('express');
var router = express.Router();
const path = require('path');

router.get('/', function(req, res, next) {
res.sendFile(path.join( __dirname, "./public/yourpage.html"))
});

module.exports = router;
```

# Contributing :

* Report bug <a href="https://www.github.com/sopow/sopow.fr/issues">here</a>
* Request feature <a href="https://www.github.com/sopow/sopow.fr/issues">here</a>

# Help :

Give a ⭐ if you like the website

Please, It's very important for me...😕
