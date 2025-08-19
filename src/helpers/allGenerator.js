const generateOTP = ()=>{
  return Math.floor(100000 + Math.random() * 900000).toString();
}

const getTwoMinutesLater = () => {
  const now = new Date();
  return new Date(now.getTime() + 2 * 60 * 1000);
};

module.exports = {generateOTP ,getTwoMinutesLater}