import db from '../db/connection.js'
import Post from '../models/post.js'
import User from '../models/user.js'

const insertData = async () => {
  await db.dropDatabase()

  const posts = [
    {
      username: "ticklishkoala937",
      title: "First Blog Post",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel maximus felis. In sed eros sit amet odio auctor pulvinar. Duis interdum egestas diam, eget sodales augue porta at. Etiam ultrices, ipsum nec luctus rutrum, quam tortor volutpat enim, a mollis nulla augue consectetur ligula. Morbi euismod sed sapien vel molestie. Nam a diam hendrerit, dictum purus sed, tempor dui. Fusce sapien mi, laoreet nec dignissim eu, accumsan eu tellus. Sed lobortis ullamcorper dui id luctus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.Phasellus convallis lobortis facilisis.In nisi nibh, dignissim ac est vel, ultrices molestie risus.Integer porta, lectus sit amet pretium ultrices, nulla nulla efficitur quam, eu tincidunt neque tellus sit amet nunc.Maecenas porta aliquam pretium.Praesent ut imperdiet lorem.Quisque eleifend, felis id fringilla mattis, turpis lacus ullamcorper eros, nec scelerisque eros diam non nisi.Ut ac tellus sapien.Phasellus accumsan lectus vitae diam ultricies porta.Etiam gravida molestie dapibus.Phasellus eu accumsan felis, vitae molestie diam.Nunc lobortis ipsum fermentum, blandit mauris vitae, lacinia lorem.In gravida ligula ut ornare sagittis",
      hashtags: ["#FirstPost", "#NewBlogger"],
      comments: [
        {
          user: "purplebear178",
          userImgURL: "https://randomuser.me/api/portraits/med/men/88.jpg",
          comment: "Great blog!",
        },
        {
          user: "yellowduck960",
          userImgURL: "https://randomuser.me/api/portraits/med/men/38.jpg",
          comment: "I hate this.",
        }
      ]
    },
    {
      username: "biglion305",
      title: "Why I Hate Cilantro",
      imgURL: "https://pbs.twimg.com/profile_images/378800000794158940/a7d3224086e149857a9ba79031175fc6_400x400.png",
      content: "In hac habitasse platea dictumst. In hendrerit erat sed lectus blandit, quis finibus velit luctus. Mauris vitae erat non elit scelerisque eleifend. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Etiam elit ex, auctor at pellentesque eleifend, tincidunt ac enim. Vestibulum tincidunt ultricies fermentum. Integer scelerisque ac lectus at iaculis. Sed fermentum faucibus tempus. Quisque fermentum lorem quis sapien rhoncus, eget pharetra libero auctor. Sed sed augue suscipit, convallis ipsum lacinia, venenatis orci. Mauris at lacus iaculis, varius nisi eu, tincidunt nunc. Phasellus et dictum arcu, eget tempor metus. Nam ultricies commodo vehicula. Nam volutpat rutrum lorem. Nullam consequat mi id ullamcorper malesuada. Maecenas tincidunt risus ornare quam tincidunt laoreet. Nam laoreet nec nibh et pretium. Duis egestas diam augue. Cras ut dolor eu risus blandit pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi varius, orci a porttitor lobortis, elit augue vestibulum velit, at pretium leo ipsum quis neque. Fusce at ex id ipsum sagittis eleifend vel vel odio. Sed fringilla tempus lectus, non bibendum elit dignissim id. Curabitur eleifend ac erat eget eleifend. Nulla mattis eros elit, sit amet faucibus sem varius a. Nunc sollicitudin nisi enim, vel condimentum nunc interdum nec. In malesuada pulvinar odio, sagittis dictum mauris euismod vel. Nam quis enim sit amet elit rutrum varius. Maecenas volutpat lacus egestas dui laoreet cursus. Praesent euismod, nisi ac pulvinar sollicitudin, orci turpis posuere magna, eu feugiat turpis arcu ac libero. Etiam et arcu eget tortor pulvinar porta non sed ipsum. Duis in massa a felis feugiat consectetur vel eu odio. Proin sed purus in massa sagittis rutrum at vel ex. Curabitur laoreet placerat elit nec ultrices. Etiam a hendrerit ligula. Morbi in sapien ullamcorper, convallis ligula et, hendrerit urna. In hac habitasse platea dictumst. Ut volutpat nisi risus, in cursus nisl dignissim sed.",
      hashtags: ["#CilantroSucks", "#WhyEatSoap"],
      comments: [
        {
          user: "purplebear178",
          userImgURL: "https://randomuser.me/api/portraits/med/men/88.jpg",
          comment: "This is the truest thing ever said.",
        }
      ]
    }
  ]

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

  await Post.insertMany(posts)
  await User.insertMany(users)
  console.log('Created posts!')

  db.close()
}

insertData()