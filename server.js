const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const token = "";
// "EAADJcX8epGYBABYbUAvvIM1P92KSNQCRtxKXHKOdwp0OuZBSn9IniXsiyxdjFheSgwyHjoZAAW81KZCcoHhPfhKAZAUR6Psx2UPsZBKi6rr7WXF2h7FERLmb7xcgKyvJr9ladbsQqTNZBv5N8lwaZCu3ZBDdJ9qXKaL5shVYytPpC331G9eXWaqTh1tIG8NgYkkZD"

const app = express();

app.set("port", process.env.PORT || 5000);

//allow us to process the data
app.use(bodyParser.urlencoded({ textended: false }));
app.use(bodyParser.json());

//Routes
app.get("/", function (req, res) {
  res.send("Hi, Im Ahmed.. :)");
});

// Facebook
app.get("/webhook/", function (req, res) {
  if (req.query["hub.verify_token"] === "nabeelbot") {
    res.send(req.query["hub.challenge"]);
  }
  res.send("ERROR! Wrong Token");
});

app.post("/webhook/", function (req, res) {
  let messaging_events = req.body.entry[0].messaging;
  for (let i = 0; i < messaging_events.length; i++) {
    let event = messaging_events[i];
    let sender = event.sender.id;
    if (event.message && event.message.text) {
      let text = event.message.text;
      sendText(sender, "Text echo: " + text.substring(0, 100));
    }
  }
  res.sendStatus(200);
});

function sendText(sender, text) {
  let messageData = { text: text };
  request(
    {
      url: "https://graph.facebook.com/v6.0/me/messages",
      qs: { access_token: token },
      method: "POST",
      json: {
        recipient: { id: sender },
        message: messageData,
      },
    },
    function (error, res, body) {
      if (error) {
        console.log("sending error");
      } else if (res.body.error) {
        console.log("response body error");
      }
    }
  );
}

app.listen(app.get("port"), function () {
  console.log("running: port");
});
