import { config } from 'dotenv';
import mongoose from 'mongoose';
import ms from 'ms';
import { commandHandler } from './config/handlers/commands';
import { eventHandler } from './config/handlers/events';
import { client } from './config/instaceClient';
import { t003, t004 } from './utils/texts';

config();

// Config mongoose
mongoose.connect(process.env.MONGO_URI!, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
  .then(
    () => console.log(t003()), 
    error => console.error(t004(error))
  );

eventHandler(client);
/* commandHandler(client); */

client.login(process.env.TOKEN);