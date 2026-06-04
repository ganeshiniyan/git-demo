const express = require('express');
const { Pool } = require('pg');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    next();
  });

const pool = new Pool({
  host: 'postgres-service',
  user: 'postgres',
  password: 'password',
  database: 'mydb',
  port: 5432
});

app.get('/message', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');

    res.json({
      message: 'Hello from Backend',
      dbTime: result.rows[0].now
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(3000, () => {
  console.log('Backend running on port 3000');
});