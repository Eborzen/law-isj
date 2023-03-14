const mysql = require('mysql');

// Création d'une connexion à la base de données
const con = mysql.createConnection({
  host: "localhost",
  user: "username",
  password: "password"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connecté à la base de données");

  // Insertion de données
  const sql = "INSERT INTO customers (name, address) VALUES ('John', 'Highway 71')";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("1 enregistrement inséré");
  });

  // Mise à jour des données
  const sql = "UPDATE customers SET address = 'Canyon 123' WHERE address = 'Highway 71'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " enregistrement mis à jour");
  });

  // Suppression de données
  const sql = "DELETE FROM customers WHERE address = 'Canyon 123'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Enregistrement supprimé");
  });
});