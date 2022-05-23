var Airtable = require('airtable');

var base = new Airtable({apiKey: 'key3oGJSSKq3w6Hyt'}).base('appU1lYBtEqlYSvWL');

function uploadSet(set){

  console.log('hello')

    let date = new Date().toLocaleString()
    let obj =
    {
        "fields":
        {
          "date": date,
          "text": set,
        }
    }
    base('data').create([
        obj
      ], function(err, records) {
        if (err) {
          return;
        }
        records.forEach(function (record) {
        });
    })
}
