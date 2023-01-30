import 'module-alias/register'
import DbConnection from '@infrastructure/db/mongodb/helpers/db-connection'
import env from '@main/config/env'
import setupApp from '@main/config/app'

DbConnection.connect(env.mongoUrl).then(() => {
    console.log('MongoDb connected')
    const app = setupApp()

    app.listen(env.port, () => console.log(`Server running on port ${env.port}`))
}).catch(console.error)
