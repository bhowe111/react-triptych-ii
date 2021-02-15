const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://dbUser:dbUserPassword@cluster0.ibodv.mongodb.net/react-triptych?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    }
  )

  .then(() => {
    console.log('MongoDB rootin n tootin on Atlas');
  })
  .catch((err) => console.log(err));
