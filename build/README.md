# how to build a system

1. Download the [BeLL image](http://bell.ole.org/bell.zip) and flash it onto an SD Card for as many servers you want to set up.

2. Plug your SD Cards into their respective Pi's and modify their hostname using Avahi (ex. bell.local, messenger.local, zone.local)

3. Modify the Networking Maps in the maps directory to fit your replication needs. You can have more than one Network Map file.

4. Plug all the BeLL Servers you can into a router without having a BeLL Server with an overlapping host name.  

5. Run the install.js script using node (ex. node install.js)

6. Repeat steps 4 and 5 until the install script has been run for every single one of your BeLL Servers.


# About the Network Map files

The network map files are CSV formatted.  The first row is the list of hostnames you will have in your network.  The following rows describe what databases will be synced to what. The columns that between the hostname columns with databases indicate the direction of a replication and wether it's a push replication or a pull replication.  

<, > : Pull replication
<<, >> : Push replication
