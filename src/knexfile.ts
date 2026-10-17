import path from "node:path"

export default {
    client: "sqlite3",
    connection: {
        filename: path.resolve(__dirname, 'database', 'database.db')
    },

    pool: {
        afterCreate: (connection: any, done: any)=>{
            connection.run("PRAGMA foreign_keys = ON")
            done()
        }
    },
    useNullAsDefault: true,
    migrations:{
        extension: 'ts',
        directory: path.resolve(__dirname, 'database', 'migrations')
    },
    seeds: {
        extension: 'ts',
        directory: path.resolve(__dirname, 'database', 'seeds')
    }
}
