const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
    host: 'your_db_host',
    user: 'your_db_user',
    password: 'your_db_password',
    database: 'your_db_name'
});

// Connect to the database
connection.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Fetch laws based on keywords
const keywords = 'your_keywords';
connection.query('SELECT * FROM laws WHERE text LIKE ?', [`%${keywords}%`], (err, results) => {
    if (err) {
        console.error('Error fetching laws:', err);
        return;
    }

    console.log('Fetched laws:', results);

    // Close the database connection
    connection.end(err => {
        if (err) {
            console.error('Error closing the database connection:', err);
            return;
        }
        console.log('Closed the database connection');
    });
});
