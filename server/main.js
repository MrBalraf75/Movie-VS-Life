import { Meteor } from 'meteor/meteor';
import { LinksCollection } from '/imports/api/links';
import { WebApp } from 'meteor/webapp';
import { Mongo } from 'meteor/mongo';
import { HTTP } from 'meteor/http';
import { SERVER_CONFIG } from './server.config';
import { utils } from './utils';

//constLikesCollection = new Mongo.Collection('likes');

Meteor.startup(() => {});

WebApp.connectHandlers.use('/api/like', (req, res, next) => {

  let toReturn;

  switch (req.method) {
    case 'GET':
      
    break;
  
    case 'PUT':

    const idMovie = utils.getIdMovieFromPathParams(req.url);

    toReturn = updateLikeMovie(parseInt(idMovie));

    res.writeHead(200);
    res.write(JSON.stringify(toReturn));

    break;

    default:
      break;
  }

  res.end();
});

WebApp.connectHandlers.use('/api/discover/movie', (req, res, next) => {


HTTP.call('GET', utils.themoviedbUrl('discover'), {},
function(error, response) {
  let newResponse = response.data;

  newResponse.results.forEach(function (movieRessource) {
    let dbRessource = LikesCollection.findOne({ id: movieRessource.id});

    if(dbRessource){
      movieRessource.like = dbRessource.like
    } else {
      movieRessource.like = 0;
    }
  });

  res.writeHead(200);
  res.write(JSON.stringify(newResponse));
  res.end();
});
});

function updateLikeMovie(idMovie){
  let dbRessource = LikesCollection.findOne({id: idMovie});
  if(dbRessource){
    LikesCollection.update({_id: dbRessource._id}, {$inc: {like: 1}});
  }else{
    LikesCollection.insert({id: idMovie, like: 1});
  }

  return LikesCollection.findOne
}

function insertLink({ title, url }) {
  LinksCollection.insert({title, url, createdAt: new Date()});
}

// Meteor.startup(() => {
//   // If the Links collection is empty, add some data.
//   if (LinksCollection.find().count() === 0) {
//     insertLink({
//       title: 'Do the Tutorial',
//       url: 'https://www.meteor.com/tutorials/react/creating-an-app'
//     });

//     insertLink({
//       title: 'Follow the Guide',
//       url: 'http://guide.meteor.com'
//     });

//     insertLink({
//       title: 'Read the Docs',
//       url: 'https://docs.meteor.com'
//     });

//     insertLink({
//       title: 'Discussions',
//       url: 'https://forums.meteor.com'
//     });
//   }
// });
