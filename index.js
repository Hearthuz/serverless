// Import the PostgreSQL library
// import 'dotenv/config'
import pg from 'pg'

const client = new pg.Client({
    host: process.env.RDS_HOSTNAME,
    port: process.env.RDS_PORT,
    database: process.env.RDS_DATABASE,
    user: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
})

const getData = async (tableName) => {
    return await client.query(`SELECT * FROM ${tableName}`)
}

const postData = async (tableName, data) => {
    const query = `
      INSERT INTO ${tableName} (name, userInfo)
      VALUES ($1, $2)
    `
    const values = [data.name, JSON.stringify(data.userInfo)]
    await client.query(query, values)
    console.log('Post successfully')
}

// Lambda handler function
export const handler = async (event) => {
    try {
        await client.connect()
        const tableName = process.env.RDS_TABLE
        await postData(tableName, event)
        const result = await getData(tableName)
        console.log('Process successfully')
        await client.end()
        return {
            statusCode: 200,
            body: result.rows
        }
    } catch (error) {
        console.error(error);
        return {
            statusCode: 500,
        }
    }
}