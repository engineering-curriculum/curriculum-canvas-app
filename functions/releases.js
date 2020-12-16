'use strict';

const github = require('./lib/github.js');

exports.handler = async (event, context) => {

  try {

    const request = JSON.parse(event.body);
    const repo = request.repo.replace(/^\//, '');

    console.log(repo);
    const releases = await github.getReleases(repo);
    console.log(releases);

    return {
      statusCode: 200,
      body: JSON.stringify(releases),
    };

  }
  catch (e) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: e.message }),
    };
  }

};
