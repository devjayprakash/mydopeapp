let express = require("express");
let app = express();

app.use(express.static("public"));

let PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log("server started");
});
