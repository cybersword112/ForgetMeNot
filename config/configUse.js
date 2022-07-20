exports.creds = {
    identityMetadata: 'https://login.microsoftonline.com/common/v2.0/.well-known/openid-configuration', 
    //your client application's client id 
    clientID: '<your ID>',
  // your client application's client secret
    clientSecret: '<your Secret>', 
  
    responseType: 'code id_token', 
  
    responseMode: 'form_post', 
  
    redirectUrl: '<your URL i.e:http://localhost:7000/auth/openid/return>', 
  
    allowHttpForRedirectUrl: true,
  
    validateIssuer: false,
  
    issuer: null,
  
    passReqToCallback: false,
  
    useCookieInsteadOfSession: false,
  
    cookieEncryptionKeys: [ 
      { 'key': '12345678901234567890123456789012', 'iv': '123456789012' },
      { 'key': 'abcdefghijklmnopqrstuvwxyzabcdef', 'iv': 'abcdefghijkl' }
    ],
  
    scope: ['profile', 'offline_access', 'https://graph.microsoft.com/mail.read'],
  
    loggingLevel: false,
  
    nonceLifetime: null,
  
    nonceMaxAmount: 5,
  
    clockSkew: null,
  };
  // your url below
  exports.destroySessionUrl = 'http://localhost:7000';
  
  exports.useMongoDBSessionStore = false;
  // your url
  exports.databaseUri = 'mongodb://localhost/OIDCStrategy';
  
  exports.mongoDBSessionMaxAge = 24 * 60 * 60;  