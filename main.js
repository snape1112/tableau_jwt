import jwt from 'jsonwebtoken';

const generateUuid = () => {
  return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/x/g, c => (Math.random() * 16 | 0).toString(16));
}

const generateJWT = (userid, clientID, secretID, secretValue, scopes) => {
  const issuer = clientID;
  const subject = userid;
  const audience = 'tableau';
  const keyId = secretID;
  const jwtId = generateUuid();

  const options = {
      keyid: keyId,
      jwtid: jwtId,
      notBefore: "0",
      issuer,
      subject,
      audience,
      expiresIn: "9m",
      algorithm: "HS256",
      header: {
        iss: clientID,
      }
  };

  return jwt.sign({ scope: scopes }, secretValue, options);
}

window.generateJWT = generateJWT;