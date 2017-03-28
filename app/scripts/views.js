/**
 * Project views
 */
var $ = require('jquery');
var template = require('../templates/post.hbs');
var postForm = require('../templates/application.hbs');

function PostView(){
  $('body')
  .append('<ul class="posts">');
  .append(postForm());

$('#blog-post').submit(function(event){
    event.preventDefault();
    $(document).trigger('create:post', [{title: "Cool", body: "Cool"}])
}

}
PostView.prototype.showPosts = function(posts){
  console.log(posts);
  posts.forEach(function(post){
    console.log($('.posts').length);
    $('.posts').append(template(post));
  });
};

module.exports = {
 'PostView': PostView
};
