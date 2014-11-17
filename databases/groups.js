
var couchapp = require('couchapp')
  , path = require('path')
  ;

ddoc =  { _id:'_design/bell' }

ddoc.views = {
  GetCourses: {
    map: function (doc) {
      if (doc.members) {
        for(var x=0;x<doc.members.length;x++){     
          emit(doc.members[x], true)
        }
      }
    } 
  },
  count: {
    map: function(doc) {
      emit(doc._id, 1);
    }
  },
  courseSearch: {
    map: function(doc) {
      // permutation func by Jonas Raoni Soares Silva
      var permute = function( v, m ){
        for( var j, l = v.length, i = ( 1 << l ) - 1, r = new Array( i ); i; )
          for( r[--i] = [], j = l; j; i + 1 & 1 << --j && ( r[i].push( m ? j : v[j] ) ) );
        return r;
      };
      var txt = doc.CourseTitle;
      txt.replace(/[!.,;]+/g, "");
      var raw_words = txt.split(" ");
      var words = {};
      for (var i in raw_words) {
        var word = raw_words[i];
        if (word == "") continue;
        if (!words[word]) { words[word] = 1; }
        else { words[word]++; }
      }
      var word_set = [];
      for (var word in words) {
        word_set.push(word);
      }
      var permutations = permute(word_set,0);
      for (var i in permutations) {
        emit(permutations[i],doc._id);
      }
    }
  }
}

module.exports = ddoc;