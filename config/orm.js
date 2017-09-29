var connection = require("./connection")

var orm =
  selectAndOrder: function(columns, table, orderByColumn){
    connection.query('SELECT ?? FROM ?? ORDER BY ??',
        [ columns, table, orderByColumn],
        function (err, data) {
          if(err) {

          }
        }
      )
  }
