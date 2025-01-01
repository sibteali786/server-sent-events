const app = require("express")();
app.get("/", (req, res) => res.send("hello"));
app.get("/stream", (req, res) => {
  res.setHeader("Content-Type", "text/event-stream");
  send(res);
});
app.listen(8080, () => console.log("Server is running on port 3000"));
let i = 0;
function send(res) {
  res.write(`data: hello ${i}\n\n`);
  setTimeout(() => {
    i++;
    send(res);
  }, 1000);
}
