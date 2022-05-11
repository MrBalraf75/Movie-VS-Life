import { Template } from 'meteor/template';
import { ReactiveVar } from "meteor/reactive-var";
import { HTTP } from 'meteor/http';

import './main.html';

Template.movies.onCreated(function homeOnCreated(){

  let ctrl = this;
  this.movies = new ReactiveVar();

  HTTP.call('GET', 'http://localhost:3000/api/discover/movie', {}, 
  function(error, response){
    ctrl.movies.set(JSON.parse(response.content).results)
  });
});


Template.movies.helpers({
  movies() {
    return Template.instance().movies.get();
}
});

Template.movies.events({
  'click button'(event, instance){
    const idMovie = event.currentTarget.dataset.id;
    console.log('event:', event.currentTarget.dataset);

    updateLikeMovie(idMovie, Template.instance().movies);
  }
});

function updateLikeMovie(idMovie, movies){
  HTTP.call('PUT', 'http://localhost:3000/api/like/' + idMovie, {}, 
  function(error, response){
    const index = movies.get().findIndex(function(item){
      return item.id === JSON.parse(response.content).id;
    });

    if(index > -1){
      let newMoviesList = movies.get();
      newMoviesList[index].like = JSON.parse(response.content).like;

      movies.set(newMoviesList);
    }
  });
}