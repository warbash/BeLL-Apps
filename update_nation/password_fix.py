from pbkdf2 import *
import pycouchdb
import sys
import md5
import time
import json

address = sys.argv[1]

if __name__ == "__main__":
    server = pycouchdb.Server(address)
    config = server.database('configurations')
    members = server.database('members')

    config = dict(list(config.all())[0]['doc'])
    print config
    time.sleep(3)
    for count,mm in enumerate(members.all()):
        doc = mm.get('doc')
        hash = {'login': doc.get('login','towntown'),
                'password': doc.get('password','towntown'),
                'community': doc.get('community','towntown')}

        if hash['community'] == config.get('code'):

            print hash
            credentials = {}
            credentials['type'] = 'pbkdf21'
            credentials['salt'] = md5.md5(hash['login']).hexdigest()
            credentials['value'] = pbkdf2_hex(md5.md5(hash['login']).hexdigest(), hash['password'], 10, keylen=20)
            credentials['login'] = hash['login']

            doc['credentials'] = credentials
            doc['password'] = ''
            members.save(doc)
            print "saved"
            print json.dumps(doc, indent=2)
