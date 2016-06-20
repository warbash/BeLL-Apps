from pbkdf2 import *
import pycouchdb
import sys
import md5
import time
import json

try:
    address = sys.argv[1]
except:
    address = "http://localhost:5984"

if __name__ == "__main__":
    server = pycouchdb.Server(address)
    config = server.database('configurations')
    members = server.database('members')

    config = dict(list(config.all())[0]['doc'])
    print config
    time.sleep(3)
    for count,mm in enumerate(members.all()):
        doc = mm.get('doc')
        hash = {'login': str(doc.get('login','towntown')),
                'password': str(doc.get('password','towntown')),
                'community': str(doc.get('community','towntown'))}

        if hash['community'] == config.get('code'):

            print hash
            credentials = {}
            credentials['type'] = 'pbkdf21'
            credentials['salt'] = md5.md5(hash['login']).hexdigest()
            credentials['value'] = pbkdf2_hex(hash['password'], credentials['salt'], 10, keylen=20)
            credentials['login'] = hash['login']

            doc['credentials'] = credentials
            doc['password'] = ''
            members.save(doc)
            print "saved"
            print json.dumps(doc, indent=2)
