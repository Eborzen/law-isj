const express = require('express');
const app = express();

  // Start Server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

  // connect
// Code Pénal Routes
app.get('/api/codepenal', (req, res) => {
  // Code to return JSON object
});

app.get('/api/codepenal/title/:id', (req, res) => {
  // Code to return JSON object
});

app.get('/api/codepenal/title/:id/chap/:id', (req, res) => {
  // Code to return JSON object
});

app.get('/api/codepenal/title/:id/chap/:id/article/:id', (req, res) => {
  // Code to return JSON object
});

app.get('/api/codepenal/articles', (req, res) => {
  // Code to return JSON object
});

// Code de Procédure Pénale Routes
app.get('/api/procedurepenale', (req, res) => {
  // Code to return JSON object
});

app.get('/api/procedurepenale/title/:id', (req, res) => {
  // Code to return JSON object
});

app.get('/api/procedurepenale/title/:id/chap/:id', (req, res) => {
  // Code to return JSON object
});

app.get('/api/procedurepenale/title/:id/chap/:id/article/:id', (req, res) => {
  // Code to return JSON object
});

app.get('/api/procedurepenale/articles', (req, res) => {
  // Code to return JSON object
});

// Constitution Routes
app.get('/api/constitution', (req, res) => {
  // Code to return JSON object
});

app.get('/api/constitution/title/:id', (req, res) => {
  // Code to return JSON object
});

app.get('/api/constitution/title/:id/chap/:id', (req, res) => {
  // Code to return JSON object
});

app.get('/api/constitution/title/:id/chap/:id/article/:id', (req, res) => {
  // Code to return JSON object
});

app.get('/api/constitution/articles', (req, res) => {
    // Code to return JSON object
  });
  
  // Loi Routes
  app.get('/api/lois', (req, res) => {
    // Code to return JSON object
  });
  
  app.get('/api/lois/title/:id', (req, res) => {
    // Code to return JSON object
  });
  
  app.get('/api/lois/title/:id/chap/:id', (req, res) => {
    // Code to return JSON object
  });
  
  app.get('/api/lois/title/:id/chap/:id/article/:id', (req, res) => {
    // Code to return JSON object
  });
  
  app.get('/api/lois/articles', (req, res) => {
    // Code to return JSON object
  });
  
  // Default 404 Route
  app.use((req, res) => {
    res.status(404).json({ 
      success: false,
      message: 'Route not found'
    });
  });
  
