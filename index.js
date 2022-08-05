const express = require ('express');
const exphbs  = require ('express-handlebars');
// const session = require ('express-session');
// const credentials = require('./credentials');
// const owm = require('./owm');
const app = express();

app.set('port', 3204);

app.engine('hbs', exphbs({extname: 'hbs'}));
app.set('view engine', 'hbs');
app.use('/static', express.static('static'));
app.use('/glide', express.static('node_modules/@glidejs/glide/dist/'));

// app.use(session({secret: 'mysecret'}));

// app.use(express.json());
// app.use(express.urlencoded({extended: false}));

// const getWeather = (obj) =>{
//     return owm.makeRequest(`/weather?q=${obj.city}&appid=${credentials.apikey}&units=imperial`)
//         .then((response)=>{
//             obj.currTemp = response.data.main.temp;
//             //console.log(response.data.main.temp);
//     });
// };

app.get('/', (req, res)=>{
    res.render ('home', {});
});

app.get('/project', (req, res)=>{
    res.render ('project', {
        section_title: "Projects"
    });
});

app.get('/about', (req, res)=>{
    res.render ('about', {});
});

app.get('/contact', (req, res)=>{
    res.render ('contact', {});
});

// app.post('/', (req, res)=>{
//     if (req.session.todo) req.session.todo.push(req.body);
//     else req.session.todo = [req.body];
//     var promises = [];
//     req.session.todo.forEach((todoItem)=>{
//         promises.push(getWeather(todoItem));
//     });
//     //console.log('===================================');
//     //console.log(req.sessionStore);
//     //console.log('=================================== session');
//     Promise.all(promises).then((value)=>{res.render('home', req.session)});
//     //res.render('home', req.session);
// });
//

app.listen(app.get('port'), ()=>{
    console.log(`Express started on http://localhost:${app.get('port')}; Ctrl+c to terminate`)
});