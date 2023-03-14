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

    app.use((req, res) => {
        res.status(404).json({ 
          success: false,
          message: 'Route not found'
        });
      });