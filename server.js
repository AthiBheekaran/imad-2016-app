var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
        title : 'Article One | Gautham',
        heading : 'Article One',
        date : 'Sep 29, 2016',
        content : `
            <p>
                This is the content for Article One.This is the content for Article One.
            </p>
            <p>
                This is the content for Article One.This is the content for Article One.
            </p>
            <p>
                This is the content for Article One.This is the content for Article One.
            </p>`
    },
    'article-two' : {
        title : 'Article Two | Gautham',
        heading : 'Article Two',
        date : 'Sep 29, 2016',
        content : `
            <p>
                This is the content for Article Two.This is the content for Article Two.
            </p>
            <p>
                This is the content for Article Two.This is the content for Article Two.
            </p>
            <p>
                This is the content for Article Two.This is the content for Article Two.
            </p>`
    },
    'article-three' : {
        title : 'Article Three | Gautham',
        heading : 'Article Three',
        date : 'Sep 29, 2016',
        content : `
            <p>
                This is the content for Article Three.This is the content for Article Three.
            </p>
            <p>
                This is the content for Article Three.This is the content for Article Three.
            </p>
            <p>
                This is the content for Article Three.This is the content for Article Three.
            </p>`
}
};

function createTemplate (data) {
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    
    var htmlTemplate = `
        <html>
        <head>
            <title>
                 ${title}
            </title>
            <meta name="viewport" content="width-device-width,initial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class=container>
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
                </div>
                <div>
                    ${content}
                </div>
            </div>
        </body>
    </html>`
    ;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
