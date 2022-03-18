const app = require("./index");
const connect = require("./config/db");

app.listen(7200, async function () {
  try {
    await connect();
    console.log("listening on port 7200");
  } catch (err) {
    console.error(err.message);
  }
 
});