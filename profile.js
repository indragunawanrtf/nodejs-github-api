let https = require("https");

let get = username => {
  const options = {
    hostname: "api.github.com",
    port: 443,
    path: `/users/${username}`,
    method: "GET",
    headers: {
      "user-agent": "nodejs"
    }
  };

  // Read the Data
  let request = https.request(options, response => {
    let body = "";
    response.on("data", data => {
      body = body + data;
    });
    response.on("end", () => {
      let profile = JSON.parse(body);
      if (response.statusCode === 200) {
        console.log(`
        -----------------------------------------------
        |  Nama\t\t\t: ${profile.name}
        |  Company\t\t: ${profile.company}
        |  Location\t\t: ${profile.location}              
        |  Public Repo\t\t: ${profile.public_repos}
        |  Followers\t\t: ${profile.followers}
        -----------------------------------------------`
        );
      } else {
        console.log(`Profile with username '${username}' not found`);
      }
    });
  });

  request.end();

  request.on("error", e => {
    console.log(e);
  });
};

module.exports = {
  get
};
