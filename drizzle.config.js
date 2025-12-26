import { ENV } from './src/config/env.js'

export default {
  schema: './src/db/schema.js',
  out: './src/db/migrations',
  dialect: 'postgresql',
  dbCredentials: { url: ENV.DATABASE_URL },
}


//    After this is done, exit the program if needed and enter into the terminal:
//        npx drizzle-kit generate
//        npx drizzle-kit migrate