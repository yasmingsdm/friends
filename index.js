const http = require('http')

const port = 3001

const friendsData = {
    "characters": [
        {id:1,
        name: 'Rachel Green',
        picture: 'https://media.vogue.fr/photos/5da46eeee189b20008ababeb/master/pass/GettyImages-908311.jpg'
        },
        {id:2,
        name: 'Ross Geller',
        picture: 'https://metro.co.uk/wp-content/uploads/2019/09/PRI_85461411.jpg?quality=90&strip=all&zoom=1&resize=480%2C580'
        },
        {id:3,
        name: 'Monica Geller',
        picture: 'https://cdn.cliqueinc.com/posts/286494/best-friends-outfits-286494-1585661261042-image.700x0c.jpg'
        },
        {id:4,
        name: 'Joey Tribbiani',
        picture: 'https://s2.r29static.com/bin/entry/6e3/x/1767399/image.png'
        },
        {id:5,
        name: 'Chandler Bing',
        picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRPORIAfV3LEtTg1POdaqEJTiuUSBkrIe0sg&usqp=CAU'
        },
        {id:6,
        name: 'Phoebe Buffay',
        picture: 'https://upload.wikimedia.org/wikipedia/en/f/f6/Friendsphoebe.jpg'
        },

    ]
}

const server = http.createServer((req, res) => {
    const headers = {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET",
      "Access-Control-Max-Age": 2592000,
    };
  
    // Redirect to /friendsData when the root URL is requested
    if (req.url === "/" && req.method === "GET") {
      res.writeHead(302, { Location: "/friendsData" });
      res.end();
      return;
    }
  
    // Handle requests to /friendsData
    if (req.url === "/friendsData" && req.method === "GET") {
      res.writeHead(200, { ...headers, "Content-Type": "application/json" });
      // Send the friendsData as a JSON string
      res.end(JSON.stringify(friendsData));
      return;
    }
  
    // Return a 404 error for all other requests
    res.writeHead(404);
    res.end();
  });
  
  server.listen(port, () => {
    console.log(`Check out the server at http://localhost:${port}`);
  });