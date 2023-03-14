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
  
  app.use((req, res) => {
    res.status(404).json({ 
      success: false,
      message: 'Route not found'
    });
  });