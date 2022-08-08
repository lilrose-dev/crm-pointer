const PORT = process.env.PORT || 4000


const SECRET_KEY = "HELLO"

const connection = {
  connectionString: 'stgres://postgres:0000@localhost:5432/crm',
  elephantConnectionString: 'postgres://hoovzkvq:tFfpKZEAZWFYfM2W8DkAN9rGrcpy27tQ@arjuna.db.elephantsql.com/hoovzkvq'
}

module.exports = {
  PORT,
  connection,
  SECRET_KEY
  // havjxhb
} 