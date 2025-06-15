const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8105020205:AAHsorW-X31chmz8a3qcD93Pwp9EDu4sVfY',
  id: isNaN(parsedId) ? 6256256850 : parsedId // replace 12345.. with your telegram chat id
};
