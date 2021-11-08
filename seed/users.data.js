import db from '../db/connection.js'
import User from '../models/user.js'

const insertData = async () => {
  await db.dropDatabase()

  const users = [
    {
      username: "ticklishkoala937",
      name: "Davi Ummels",
      imgURL: "https://randomuser.me/api/portraits/med/men/64.jpg",
      password: "bertie"
    },
    {
      username: "biglion305",
      name: "Livio Leclercq",
      imgURL: "https://randomuser.me/api/portraits/med/men/57.jpg",
      password: "yoda"
    },
    {
      username: "yellowduck960",
      name: "Alexander Ruiz",
      imgURL: "https://randomuser.me/api/portraits/med/men/38.jpg",
      password: "spoons"
    },
    {
      username: "purplebear178",
      name: "Ricky Murphy",
      imgURL: "https://randomuser.me/api/portraits/med/men/88.jpg",
      password: "smelly"
    },
  ]

  await User.insertMany(users)
  console.log('Created users!')

  db.close()
}

insertData()