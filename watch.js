var watch = require('node-watch');
const git = require('simple-git')();
 
watch('test.txt', { recursive: true }, function(evt, name) {
  console.log('%s changed.', name);
  //git().commit('commit message', function(){console.log('commited')});
  
  
  git
	.add('./*')
	.commit('committed as "Some One"', function(){console.log('commited')})
	.push(['-u', 'origin', 'master'], function (){console.log('pushed')});
  
});