---
title: Google fonts not loaded in generated static Nuxt app
date: "2021-06-09"
description: ""
---

> Content below is from [crowncloud](https://wiki.crowncloud.net/?How_to_Install_MongoDB_on_Ubuntu_21_04), I am posting it here for my own reference.

MongoDB is an open-source document database used in many modern web applications. and MongoDB is a document-oriented NoSQL database used for high volume data storage. Instead of using tables and rows as in the traditional relational databases,

- [Install the dependencies](#install-the-dependencies)
- [Download and add the MongoDB GPG key with the following command](#download-and-add-the-mongodb-gpg-key-with-the-following-command)
- [Creating Administrative MongoDB User](#creating-administrative-mongodb-user)

## Install the dependencies
```
apt update
apt install dirmngr gnupg apt-transport-https ca-certificates software-properties-common
```

## Download and add the MongoDB GPG key with the following command
```
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
```

Output:
```
root@crowncloud:~# wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
OK
```

Adding the MongoDB repository with the following command.
```
add-apt-repository 'deb [arch=amd64] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse'
```

Output:
```
root@crowncloud:~# add-apt-repository 'deb [arch=amd64] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse'
Hit:1 http://gb.archive.ubuntu.com/ubuntu focal InRelease
Ign:2 https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 InRelease
Hit:3 http://gb.archive.ubuntu.com/ubuntu focal-updates InRelease
Get:4 https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 Release [5,389 B]
Hit:5 http://gb.archive.ubuntu.com/ubuntu focal-backports InRelease
Get:6 https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 Release.gpg [801 B]
Hit:7 http://gb.archive.ubuntu.com/ubuntu focal-security InRelease
Get:8 https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4/multiverse amd64 Packages [5,163 B]
Fetched 11.4 kB in 2s (7,533 B/s)
Reading package lists... Done
```

Install the MongoDB with the following command.
```
apt install mongodb-org
```

Start the MongoDB service and enable it to start automatically after rebooting the system.
```
systemctl start mongod
systemctl enable mongod
```

Output:
```
root@vps:~# systemctl start mongod
root@vps:~# systemctl enable mongod
Created symlink /etc/systemd/system/multi-user.target.wants/mongod.service → /lib/systemd/system/mongod.service.
```

Now, check the status of the MongoDB service.
```
systemctl status mongod
```

Output:
```
root@vps:~# systemctl status mongod
● mongod.service - MongoDB Database Server
     Loaded: loaded (/lib/systemd/system/mongod.service; enabled; vendor preset: enabled)
     Active: active (running) since Fri 2021-04-30 02:31:19 UTC; 58s ago
       Docs: https://docs.mongodb.org/manual
   Main PID: 2798 (mongod)
     Memory: 58.7M
     CGroup: /system.slice/mongod.service
             └─2798 /usr/bin/mongod --config /etc/mongod.conf

Apr 30 02:31:19 vps.server.com systemd[1]: Started MongoDB Database Server.
```

To verify whether the installation has completed successfully by running the following command.
```
mongo --eval 'db.runCommand({ connectionStatus: 1 })'
```

Output:
```
root@vps:~# mongo --eval 'db.runCommand({ connectionStatus: 1 })'
MongoDB shell version v4.4.5
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("8d3c4ed4-361b-40ac-8f38-dd0ce3cccf2f") }
MongoDB server version: 4.4.5
{
        "authInfo" : {
                "authenticatedUsers" : [ ],
                "authenticatedUserRoles" : [ ]
        },
        "ok" : 1
}
```

## Creating Administrative MongoDB User

First, access the MongoDB shell.
```
mongo
```

Output:
```
root@vps:~# mongo
MongoDB shell version v4.4.5
connecting to: mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb
Implicit session: session { "id" : UUID("f784c9cf-7b0a-4178-ba21-ceb1f52ff3d6") }
MongoDB server version: 4.4.5
Welcome to the MongoDB shell.
For interactive help, type "help".
For more comprehensive documentation, see
        https://docs.mongodb.com/
Questions? Try the MongoDB Developer Community Forums
        https://community.mongodb.com
---
```

Connect to the admin database.
```
use admin
```

Output:
```
> use admin
switched to db admin
>
```

Run the following command to create a new user and set the password for the user.
```
db.createUser(
    {
        user: "mongoAdmin",
        pwd: "KAb3747d",
        roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
    }
)
```

Output:
```
Successfully added user: {
                "user" : "mongoAdmin",
                "roles" : [
                                {
                                        "role" : "userAdminAnyDatabase",
                                        "db" : "admin"
                                }
                ]
}
>
```

Exit the mongo shell.
```
quit()
```

To test the changes, access the mongo shell using the created administrative user.
```
mongo -u mongoAdmin -p --authenticationDatabase admin
```

Output:
```
    >root@vps:~# mongo -u mongoAdmin -p --authenticationDatabase admin
MongoDB shell version v4.4.5
Enter password:
```

Switch to the admin database.
```
use admin
```

Output:
```
> use admin
switched to db admin
```

List the users and see if you can list the created user.
```
show users
```

Output:
```
> show users
{
        "_id" : "admin.mongoAdmin",
        "userId" : UUID("00b14d8c-9bbe-4b74-ab74-743571ed5193"),
        "user" : "mongoAdmin",
        "db" : "admin",
        "roles" : [
                {
                        "role" : "userAdminAnyDatabase",
                        "db" : "admin"
                }
        ],
        "mechanisms" : [
                "SCRAM-SHA-1",
                "SCRAM-SHA-256"
        ]
}
>
```