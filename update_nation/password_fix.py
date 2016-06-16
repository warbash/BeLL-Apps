from pbkdf2 import *
import pycouchdb
import sys
import md5


server = pycouchdb.Server("http://localhost:5984/") #make dogi happy, include passwords...
config = server.database('configurations')
members = server.database('members')

config = dict(list(config.all())[0]['doc'])
print config
for count,mm in enumerate(members.all()):
    doc = mm.get('doc')
    hash = {'login': doc.get('login','towntown'),
            'password': doc.get('password','towntown'),
            'nation': doc.get('nation','towntown'),
            'community': doc.get('community','towntown')}



    print hash
    if hash['community'] != config.get('name'):

        credentials = {}
        credentials['type'] = 'pbkdf21'
        credentials['value'] = pbkdf2_hex('salt', hash['password'], 10, keylen=20)
        credentials['salt'] = md5.md5(hash['login']).hexdigest()
        credentials['login'] = hash['login']

        doc['credentials'] = credentials
        members.save(doc)
        print "saved doc"

