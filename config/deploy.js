/* jshint node: true */

module.exports = function (deployTarget) {
  var ENV = {
    build: {
      environment: 'production'
    },
    s3: {
      bucket: 'stiedaclassic.com',
      filePattern: '**/*.{js,css,png,gif,ico,jpg,map,xml,txt,svg,swf,eot,ttf,woff,woff2,otf,pdf,html}',
      profile: 'cybertooth',
      region: 'us-west-2'
    }
  };
  // if (deployTarget === '?') {
  //   ENV.build.environment = 'production';
  //   // configure other plugins for production deploy target here
  // }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
