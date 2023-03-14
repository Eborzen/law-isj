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
  app.use((req, res) => {
    res.status(404).json({ 
      success: false,
      message: 'Route not found'
    });
  });