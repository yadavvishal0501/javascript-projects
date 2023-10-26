const Express = require('express');
const app = Express();
const path = require('path');
const { v4: uuid } = require('uuid');//generate unique id for each call
const methodOverride = require('method-override');
// as html only have two method get and post this will help to use all other http method



app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'));
app.use(Express.urlencoded({
    extended: true
}));//for data to   be in urlencoded

app.use(methodOverride('_method'));

app.use(Express.static(path.join(__dirname, 'public')));
//this is an method to make a directory public iresppective of using app.get and directory use/





//make a virtual database with array
let comment = [
    {
        id: uuid(),
        username: 'islam',
        tweet:'no question who is the best this time'
    },
    {
        id: uuid(),
        username: 'volkanski',
        tweet:'from this loss i will compete in only feather weight divison only'
    },
    {
        id: uuid(),
        username: 'kumaru',
        tweet:'dup dup i have just defeated and slow down the wolf'
    },
    {
        id: uuid(),
        username: 'khamzhat',
        tweet:'ohh i can\'t  kill this owl but i had win '
    }
    
]
//showing all comments
app.get('/comments', function (req, res) {

    res.render("comments/index",{comment});
})

//generating new comment
app.get('/comments/new', (req, res) => {
    res.render('comments/new', { comment });
})

//posting the  data
app.post('/comments', (req, res) => {
    console.log(req.body);
    const { username, tweet } = req.body;
    comment.push({ username, tweet, id: uuid() });
    res.redirect('/comments');
})
// showing details
app.get('/comments/:id', (req, res) => {
    const { id } = req.params;
    const tweet = comment.find(e => e.id === id);
    res.render('comments/show', { tweet });
})
app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
 
    const newCommentText = req.body.tweet;
    const foundComment = comment.find(e => e.id == id);
    foundComment.tweet = newCommentText;
    res.redirect('/comments');
})

//update comment
app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comments = comment.find(e => e.id === id);
    res.render('comments/Edit', { comments});
})

//for deleting comment
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
     comment = comment.filter(e => e.id !== id);
    res.redirect('/comments');
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})