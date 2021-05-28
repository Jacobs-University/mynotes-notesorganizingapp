import jwt from 'jsonwebtoken';

const generateToken = (id) => {
  return jwt.sign({ id }, 'shramishKafle', {
    expiresIn: '30d',
  });
};

export default generateToken;
