const fs = require('fs');

var config;

config = {
  production: {
    url: 'http://GHOST_LOADBALANCER_IP',
    database: {
      client: 'mysql',
      connection: {
        host: 'mysql.default.svc.cluster.local',
        user: 'ghost',
        password: 'GhostPasswd',
        database: 'ghost',
        charset: 'utf8',
      }
    },
    server: {
      host: '127.0.0.1',
      port: '2368'
    },
    paths: {
      contentPath: '/var/lib/ghost'
    },
  }
}

module.exports = config;
