 var couchapp = require('couchapp')
  , path = require('path')
  ;

ddoc =  { _id:'_design/bell' }

ddoc.views = {
  
  NewsResources: {
    map: function(doc) {
      if (doc.kind == 'News') {
        emit(doc._id, true)
      }
    }
  },
  
}

module.exports = ddoc;
