const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');
const session = require('express-session');

const app = express();
const port = 3001;
app.use(cors());
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
  key:'email',
  secret: 'thisisramdom',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
}));

mongoose.connect('mongodb://localhost:27017/examcell', { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const Student1 = mongoose.model('admins', {
  email: String,
  password: String,
});

app.use(bodyParser.json());

app.post('/adminlogin', async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);
  const data = await Student1.findOne({ email, password });

  if (data != null) {
    req.session.user = { email: data.email, name: data.name };
    res.json({ status: true, name: data.name, email: data.email });
  } else {
    res.json({ status: false });
  }
});

app.get('/checklogin', (req, res) => {
  if (req.session.user) {
    res.json({ status: true });
  } else {
    res.json({ status: false });
  }
});


// app.post('/adminlogin', async (req, res) => {
//   const { email, password } = req.body;
//   console.log(email);
//   console.log(password);
//   const data = await Student1.findOne({ email, password });

//   if (data != null) {
//     res.json({ status: true, name: data.name, email: data.email });
//   } else {
//     res.json({ status: false });
//   }
// });

const multer  = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const pdfSchema1= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const CseSchema1= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const cse1 = mongoose.model('csey1pdf', CseSchema1);
app.post('/cseyear1upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new cse1({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const CseSchema2= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const cse2 = mongoose.model('csey2pdf', CseSchema2);
app.post('/cseyear2upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new cse2({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const CseSchema3= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const cse3 = mongoose.model('csey3pdf', CseSchema3);
app.post('/cseyear3upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new cse3({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const CseSchema4= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const cse4 = mongoose.model('csey4pdf', CseSchema4);
app.post('/cseyear4upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new cse4({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const ItSchema1= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const It1 = mongoose.model('Ity1pdf', ItSchema1);
app.post('/ityear1upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new It1({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const ItSchema2= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const It2 = mongoose.model('Ity2pdf', ItSchema2);
app.post('/ityear2upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new It2({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const ItSchema3= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const It3 = mongoose.model('Ity3pdf', ItSchema3);
app.post('/ityear3upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new It3({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const ItSchema4= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const It4 = mongoose.model('Ity4pdf', ItSchema4);
app.post('/ityear4upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new It4({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const AimlSchema1= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const Aiml1 = mongoose.model('Aimly1pdf', AimlSchema1);
app.post('/aimlyear1upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new Aiml1({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const AimlSchema2= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const Aiml2 = mongoose.model('Aimly2pdf', AimlSchema2);
app.post('/aimlyear2upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new Aiml2({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const AimlSchema3= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const Aiml3 = mongoose.model('Aimly3pdf', AimlSchema3);
app.post('/aimlyear3upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new Aiml3({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const AimlSchema4= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const Aiml4 = mongoose.model('Aimly4pdf', AimlSchema4);
app.post('/aimlyear4upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new Aiml4({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const AidsSchema1= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const Aids1 = mongoose.model('Aidsy1pdf', AidsSchema1);
app.post('/aidsyear1upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new Aids1({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const AidsSchema2= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const Aids2 = mongoose.model('Aidsy2pdf', AidsSchema2);
app.post('/aidsyear2upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new Aids2({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const AidsSchema3= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const Aids3 = mongoose.model('Aidsy3pdf', AidsSchema3);
app.post('/aidsyear3upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new Aids3({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const AidsSchema4= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const Aids4 = mongoose.model('Aidsy4pdf', AidsSchema4);
app.post('/aidsyear4upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new Aids4({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const MechSchema1= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const M1 = mongoose.model('mechy1pdf', MechSchema1);
app.post('/mechyear1upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new M1({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const MechSchema2= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const M2 = mongoose.model('mechy2pdf', MechSchema2);
app.post('/mechyear2upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new M2({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const MechSchema3= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const M3 = mongoose.model('mechy3pdf', MechSchema3);
app.post('/mechyear3upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new M3({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const MechSchema4= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const M4 = mongoose.model('mechy4pdf', MechSchema4);
app.post('/mechyear4upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new M4({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const CyberSchema1= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const cyber1= mongoose.model('cybery1pdf', CyberSchema1);
app.post('/cyberyear1upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new cyber1({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const CyberSchema2= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const cyber2= mongoose.model('cybery2pdf', CyberSchema2);
app.post('/cyberyear2upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new cyber2({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const CyberSchema3= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const cyber3= mongoose.model('cybery3pdf', CyberSchema3);
app.post('/cyberyear3upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new cyber3({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const CyberSchema4= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const cyber4= mongoose.model('cybery4pdf', CyberSchema4);
app.post('/cyberyear4upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new cyber4({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const BmeSchema1= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const bme1= mongoose.model('bmey1pdf', BmeSchema1);
app.post('/bmeyear1upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new bme1({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const BmeSchema2= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const bme2= mongoose.model('bmey2pdf', BmeSchema2);
app.post('/bmeyear2upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new bme2({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const BmeSchema3= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const bme3= mongoose.model('bmey3pdf', BmeSchema3);
app.post('/bmeyear3upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new bme3({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const BmeSchema4= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const bme4= mongoose.model('bmey4pdf', BmeSchema4);
app.post('/bmeyear4upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new bme4({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const BtSchema1= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const bt1= mongoose.model('bty1pdf', BtSchema1);
app.post('/btyear1upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new bt1({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const BtSchema2= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const bt2= mongoose.model('bty2pdf', BtSchema2);
app.post('/btyear2upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new bt2({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const BtSchema3= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const bt3= mongoose.model('bty3pdf', BtSchema3);
app.post('/btyear3upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new bt3({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


const BtSchema4= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const bt4= mongoose.model('bty4pdf', BtSchema4);
app.post('/btyear4upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new bt4({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const CivilSchema1= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const civil1= mongoose.model('civily1pdf', CivilSchema1);
app.post('/civilyear1upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new civil1({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const CivilSchema2= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const civil2= mongoose.model('civily2pdf', CivilSchema2);
app.post('/civilyear2upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new civil2({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const CivilSchema3= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const civil3= mongoose.model('civily3pdf', CivilSchema3);
app.post('/civilyear3upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new civil3({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


const CivilSchema4= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const civil4= mongoose.model('civily4pdf', CivilSchema4);
app.post('/civilyear4upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new civil4({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const AgriSchema1= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const agri1= mongoose.model('agriy1pdf',AgriSchema1);
app.post('/agriyear1upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new agri1({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const AgriSchema2= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const agri2= mongoose.model('agriy2pdf',AgriSchema2);
app.post('/agriyear2upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new agri2({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const AgriSchema3= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const agri3= mongoose.model('agriy3pdf',AgriSchema3);
app.post('/agriyear3upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new agri3({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const AgriSchema4= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const agri4= mongoose.model('agriy4pdf',AgriSchema4);
app.post('/agriyear4upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new agri4({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const FtSchema1= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const ft1= mongoose.model('fty1pdf',FtSchema1);
app.post('/ftyear1upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new ft1({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const FtSchema2= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const ft2= mongoose.model('fty2pdf',FtSchema2);
app.post('/ftyear2upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new ft2({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const FtSchema3= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const ft3= mongoose.model('fty3pdf',FtSchema3);
app.post('/ftyear3upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new ft3({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const FtSchema4= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const ft4= mongoose.model('fty4pdf',FtSchema4);
app.post('/ftyear4upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new ft4({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


const EeeSchema1= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const eee1= mongoose.model('eeey1pdf',EeeSchema1);
app.post('/eeeyear1upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new eee1({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const EeeSchema2= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const eee2= mongoose.model('eeey2pdf',EeeSchema2);
app.post('/eeeyear2upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new eee2({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const EeeSchema3= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const eee3= mongoose.model('eeey3pdf',EeeSchema3);
app.post('/eeeyear3upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new eee3({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


const EeeSchema4= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const eee4= mongoose.model('eeey4pdf',EeeSchema4);
app.post('/eeeyear4upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new eee4({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const EceSchema1= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const ece1= mongoose.model('ecey1pdf',EceSchema1);
app.post('/eceyear1upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new ece1({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const EceSchema2= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const ece2= mongoose.model('ecey2pdf',EceSchema2);
app.post('/eceyear2upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new ece2({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const EceSchema3= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const ece3= mongoose.model('ecey3pdf',EceSchema3);
app.post('/eceyear3upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new ece3({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const EceSchema4= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const ece4= mongoose.model('ecey4pdf',EceSchema4);
app.post('/eceyear4upload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new ece4({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const circularschema= new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const circ= mongoose.model('circular',circularschema);
app.post('/circularpdfupload', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new circ({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const pdfSchema2 = new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const Pdf2 = mongoose.model('Pdf2', pdfSchema2);
app.post('/uploady2', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new Pdf2({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

const pdfSchema3 = new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const Pdf3 = mongoose.model('Pdf3', pdfSchema3);

app.post('/uploady3', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new Pdf3({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });
    
    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
const pdfSchema4 = new mongoose.Schema({
  title: String,
  name: String,
  data: Buffer,
},{ versionKey: false });

const Pdf4 = mongoose.model('Pdf4', pdfSchema4);
app.post('/uploady4', upload.single('pdf'), async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(400).send('Title is required.');
    }

    const newPdf = new Pdf4({
      title,
      name: req.file.originalname,
      data: req.file.buffer,
    });

    await newPdf.save();
    res.status(201).send('PDF uploaded successfully!');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

app.get('/getagriPdfs1', async (req, res) => {
  try {
    const pdfs = await agri1.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getagriPdfs2', async (req, res) => {
  try {
    const pdfs = await agri2.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getagriPdfs3', async (req, res) => {
  try {
    const pdfs = await agri3.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getagriPdfs4', async (req, res) => {
  try {
    const pdfs = await agri4.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/getaidsPdfs1', async (req, res) => {
  try {
    const pdfs = await Aids1.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getaidsPdfs2', async (req, res) => {
  try {
    const pdfs = await Aids2.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getaidsPdfs3', async (req, res) => {
  try {
    const pdfs = await Aids3.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getaidsPdfs4', async (req, res) => {
  try {
    const pdfs = await Aids4.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/getaimlPdfs1', async (req, res) => {
  try {
    const pdfs = await Aiml1.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getaimlPdfs2', async (req, res) => {
  try {
    const pdfs = await Aiml2.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getaimlPdfs3', async (req, res) => {
  try {
    const pdfs = await Aiml3.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getaimlPdfs4', async (req, res) => {
  try {
    const pdfs = await Aiml4.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/getbmePdfs1', async (req, res) => {
  try {
    const pdfs = await bme1.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getbmePdfs2', async (req, res) => {
  try {
    const pdfs = await bme2.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getbmePdfs3', async (req, res) => {
  try {
    const pdfs = await bme3.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getbmePdfs4', async (req, res) => {
  try {
    const pdfs = await bme4.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/getbtPdfs1', async (req, res) => {
  try {
    const pdfs = await bt1.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getbtPdfs2', async (req, res) => {
  try {
    const pdfs = await bt2.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getbtPdfs3', async (req, res) => {
  try {
    const pdfs = await bt3.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getbtPdfs4', async (req, res) => {
  try {
    const pdfs = await bt4.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/getcivilPdfs1', async (req, res) => {
  try {
    const pdfs = await civil1.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getcivilPdfs2', async (req, res) => {
  try {
    const pdfs = await civil2.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getcivilPdfs3', async (req, res) => {
  try {
    const pdfs = await civil3.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getcivilPdfs4', async (req, res) => {
  try {
    const pdfs = await civil4.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/getcsePdfs1', async (req, res) => {
  try {
    const pdfs = await cse1.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getcsePdfs2', async (req, res) => {
  try {
    const pdfs = await cse2.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getcsePdfs3', async (req, res) => {
  try {
    const pdfs = await cse3.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getcsePdfs4', async (req, res) => {
  try {
    const pdfs = await cse4.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/getcyberPdfs1', async (req, res) => {
  try {
    const pdfs = await cyber1.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getcyberPdfs2', async (req, res) => {
  try {
    const pdfs = await cyber2.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getcyberPdfs3', async (req, res) => {
  try {
    const pdfs = await cyber3.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getcyberPdfs4', async (req, res) => {
  try {
    const pdfs = await cyber4.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/getecePdfs1', async (req, res) => {
  try {
    const pdfs = await ece1.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getecePdfs2', async (req, res) => {
  try {
    const pdfs = await ece2.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getecePdfs3', async (req, res) => {
  try {
    const pdfs = await ece3.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getecePdfs4', async (req, res) => {
  try {
    const pdfs = await ece4.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/geteeePdfs1', async (req, res) => {
  try {
    const pdfs = await eee1.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/geteeePdfs2', async (req, res) => {
  try {
    const pdfs = await eee2.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/geteeePdfs3', async (req, res) => {
  try {
    const pdfs = await eee3.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/geteeePdfs4', async (req, res) => {
  try {
    const pdfs = await eee4.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/getftPdfs1', async (req, res) => {
  try {
    const pdfs = await ft1.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getftPdfs2', async (req, res) => {
  try {
    const pdfs = await ft2.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getftPdfs3', async (req, res) => {
  try {
    const pdfs = await ft3.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getftPdfs4', async (req, res) => {
  try {
    const pdfs = await ft4.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/getitPdfs1', async (req, res) => {
  try {
    const pdfs = await It1.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getitPdfs2', async (req, res) => {
  try {
    const pdfs = await It2.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getitPdfs3', async (req, res) => {
  try {
    const pdfs = await It3.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getitPdfs4', async (req, res) => {
  try {
    const pdfs = await It4.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});


app.get('/getmechPdfs1', async (req, res) => {
  try {
    const pdfs = await M1.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getmechPdfs2', async (req, res) => {
  try {
    const pdfs = await M2.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getmechPdfs3', async (req, res) => {
  try {
    const pdfs = await M3.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getmechPdfs4', async (req, res) => {
  try {
    const pdfs = await M4.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});
app.get('/getcircularpdf', async (req, res) => {
  try {
    const pdfs = await circ.find({}, 'title name data');
    res.json(pdfs);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// app.post("/upload-files",async(req,res)=>{
//   console.log(req.file);
//   res.send("Hii");
// })

app.get("/",async(req,res)=>{
  res.send("Success!!")
})
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
