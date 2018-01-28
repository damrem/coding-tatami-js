'use strict';

console.log('LOADED app.js');

var exports = (function(){
	return{

		add: function(a, b){
			return a + b;
		}
	};
})();