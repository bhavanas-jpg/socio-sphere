import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  /***1st post */
  {
    _id:uuid(),
    content: "Finding strength and serenity in the beauty of yoga",
    mediaURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686566235/socioSphere/yoga-2_jikwre.jpg",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Sophia",
          lastName: "Anderson",
          username: "SophiaA",
          avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg"
        },
        {
          _id: uuid(),
          firstName: "Bhavana",
          lastName: "S",
          username: "bhavana",
          avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-4_tfbgyg.jpg"
        }
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Afreen",
        lastName: "Almaz",
        username: "Afreen",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-20_k20z1j.jpg",
        text: "Yoga is life.",
        createdAt: new Date("January 02 2023 09:09:09")
      },
      {
        _id: uuid(),
          firstName: "Sophia",
          lastName: "Anderson",
          username: "SophiaA",
          avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg",
          text: "Graceful flow, strength, and balance in yoga pose." ,
          createdAt: new Date("February 18 2023 09:09:09")
      }
    ],
    username: "AmeliaT",
    firstName: "Amelia",
    lastName: "Thompson",
    createdAt: new Date("January 01 2023 09:09:09"),
    updatedAt: formatDate(),
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-3_luauyf.jpg",
    hashtags:"#Yoga#Yogalove#Yogajourney#Yogapractice#Yogapose#Yogalifestyle#Yogafit"
  },
  /***2nd post */
  {
    _id: uuid(),
    content: "Expressing emotions through the intricacy of Bharatanatyam",
    mediaURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686760133/socioSphere/dancer-4_ixtwz5.jpg",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Amelia",
          lastName: "Thompson",
          username: "AmeliaT",
          avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-3_luauyf.jpg"
        },
        {
          _id: uuid(),
          firstName: "Sophia",
          lastName: "Anderson",
          username: "SophiaA",
          avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg"
        },
        {
          _id: uuid(),
          firstName: "Ethan",
          lastName: "Anderson",
          username: "EthanA94",
          avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-15_mtm2pp.jpg"
        }
      ],
      dislikedBy: [],
    },
    hashtags: "#Dance #Dancer #DanceLife #DanceCommunity  ",
    username: "bhavana",
    firstName: "Bhavana",
    lastName: "S",
    createdAt: new Date("Apr 06 2022 12:31:25"),
    updatedAt: formatDate(),
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-4_tfbgyg.jpg"
  },
  /**3rd post */
  {
    _id: uuid(),
    content: "Mountains mesmerize, nature's majesty captured in a single gaze.",
    mediaURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686565475/socioSphere/traveler-4_srz0sb.jpg",
    videoURL:"https://res.cloudinary.com/drjisfpis/video/upload/v1687792905/pizza_bcjq9h.mp4",
    likes:{
    likeCount: 2,
    likedBy :[
      {
        _id: uuid(),
        firstName: "Amelia",
        lastName: "Thompson",
        username: "AmeliaT",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-3_luauyf.jpg"
      },
      {
        _id: uuid(),
        firstName: "Ethan",
        lastName: "Anderson",
        username: "EthanA94",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-15_mtm2pp.jpg"
      }
    ],
    dislikedBy: []
    },
    firstName: "Afreen",
    lastName: "Almaz",
    username: "Afreen",
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-20_k20z1j.jpg",
    createdAt: new Date("Jan 20 2021 2:00:06"),
    updatedAt: formatDate(),
    hashtags: "#TravelGram#Wanderlust#ExploreMore"
  },
  /**4th post */
  {
    _id: uuid(),
    content: "In the stillness of a pose, the magic of Bharatanatyam comes alive",
    mediaURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686760131/socioSphere/dancer-3_wgmjq1.jpg",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Amelia",
          lastName: "Thompson",
          username: "AmeliaT",
          avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-3_luauyf.jpg"
        },
        {
          _id: uuid(),
          firstName: "Sophia",
          lastName: "Anderson",
          username: "SophiaA",
          avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg"
        },
        {
          _id: uuid(),
          firstName: "Ethan",
          lastName: "Anderson",
          username: "EthanA94",
          avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-15_mtm2pp.jpg"
        },
        {
          _id: uuid(),
          firstName: "Afreen",
          lastName: "Almaz",
          username: "Afreen",
          avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-20_k20z1j.jpg"
        }
      ],
      dislikedBy: [],
    },
    hashtags: "#Dance #Dancer #DanceLife #DanceCommunity",
    username: "bhavana",
    firstName: "Bhavana",
    lastName: "S",
    createdAt: new Date("May 24 2022 2:31:25"),
    updatedAt: formatDate(),
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-4_tfbgyg.jpg"
  },
  /***5th post */
  {
    _id: uuid(),
    content: "Balancing serenity upside down: Eagle Pose meets Headstand.",
    mediaURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686566234/socioSphere/yoga-4_mhaqcb.jpg",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Lucas",
          lastName: "Parker",
          username: "LParker22",
          avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-8_coy7oo.jpg"
        },
        {
          _id: uuid(),
          firstName: "Bhavana",
          lastName: "S",
          username: "bhavana",
          avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-4_tfbgyg.jpg"
        }
      ],
      dislikedBy: [],
    },
    comments: [
      {
        _id: uuid(),
        firstName: "Bhavana",
        lastName: "S",
        username: "bhavana",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-4_tfbgyg.jpg",
        text: "Yoga is life.",
        votes: {
          upvotedBy: [],
          downvotedBy: []
        },
        createdAt: new Date("January 02 2023 09:09:09")
      }
    ],
    username: "AmeliaT",
    firstName: "Amelia",
    lastName: "Thompson",
    createdAt: new Date("January 01 2023 09:09:09"),
    updatedAt: formatDate(),
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-3_luauyf.jpg",
    hashtags:"#Yoga#Yogalove#Yogajourney"
  },
  /***10th post */
  {
    _id: uuid(),
    content: "Soldier's sweet kindness lights up children's spirits✨.",
    mediaURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686566233/socioSphere/help-1_cfegka.jpg",
    likes:{
      likeCount: 3,
      likedBy: [
        {
          _id: uuid(),
          firstName: "Amelia",
          lastName: "Thompson",
          username: "AmeliaT",
          avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-3_luauyf.jpg"
        },
        {
          _id: uuid(),
          firstName: "Sophia",
          lastName: "Anderson",
          username: "SophiaA",
          avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg"
        },
        {
          _id: uuid(),
          firstName: "Bhavana",
          lastName: "S",
          username: "bhavana",
          avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-4_tfbgyg.jpg"
        }
      ],
      dislikedBy: []
    },
    firstName: "Ethan",
    lastName: "Anderson",
    username: "EthanA94",
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-15_mtm2pp.jpg",
    createdAt: new Date("Dec 24 2021 6:30:08"),
    updatedAt: formatDate(),
    hashtags: "#HelpingHand#ActsOfKindness#SpreadLove"
  },
  /***6th post */
  {
    _id: uuid(),
    content: "Stay safe, protect others: Take COVID precautions sincerely.",
    mediaURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686566237/socioSphere/covid-1_oc8lzn.jpg",
    likes:{
    likeCount: 4,
    likedBy:[
      {
        _id: uuid(),
        firstName: "Afreen",
        lastName: "Almaz",
        username: "Afreen",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-20_k20z1j.jpg"
      },
      {
        _id: uuid(),
        firstName: "Lucas",
        lastName: "Parker",
        username: "LParker22",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-8_coy7oo.jpg"
      },
	    {
        _id: uuid(),
        firstName: "Bhavana",
        lastName: "S",
        username: "bhavana",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-4_tfbgyg.jpg"
      },
      {
        _id: uuid(),
        firstName: "Wyatt",
        lastName: "Sullivan",
        username: "WyattSully",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-11_e1e5rl.jpg"
      }
    ],
    dislikedBy:[]
    },
    firstName: "Sophia",
    lastName: "Anderson",
    username: "SophiaA",
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg",
    createdAt: new Date("Mar 18 2021 12:09:23"),
    updatedAt: formatDate(),
    hashtags: "#StaySafe#MaskUp#SocialDistance#HandHygiene#StayHealthy"
  },
  {
    _id: uuid(),
    content:"Spicy indulgence, pav bhaji satisfies cravings with flavorful delight.",
    mediaURL:"https://res.cloudinary.com/drjisfpis/image/upload/v1686812767/socioSphere/food-3_xqz9ej.jpg",
    likes:{
   likeCount: 3,
   likedBy: [
    {
      _id: uuid(),
      firstName: "Sophia",
      lastName: "Anderson",
      username: "SophiaA",
      avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg"
    },
   {
      _id: uuid(),
      firstName: "Ethan",
      lastName: "Anderson",
      username: "EthanA94",
      avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-15_mtm2pp.jpg"
    },
   {
      _id: uuid(),
      firstName: "Afreen",
      lastName: "Almaz",
      username: "Afreen",
      avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-20_k20z1j.jpg"
    }
   ],
   dislikedBy: []
    },
    firstName: "Lucas",
    lastName: "Parker",
    username: "LParker22",
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-8_coy7oo.jpg",
    createdAt: new Date("Feb 21 2022 7:30:09"),
    updatedAt: formatDate(),
    hashtags:"#Foodgasm#Foodstagram#FoodLover#FoodieLife"
  },
  {
    _id: uuid(),
    content: "Paneer biryani: A symphony of flavors, vegetarian delight unveiled.",
    mediaURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686812767/socioSphere/food-2_iqnah0.jpg",
    likes:{
   likeCount: 4,
   likedBy:[
    {
      _id: uuid(),
      firstName: "Bhavana",
      lastName: "S",
      username: "bhavana",
      avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-4_tfbgyg.jpg"
    },
    {
      _id: uuid(),
      firstName: "Wyatt",
      lastName: "Sullivan",
      username: "WyattSully",
      avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-11_e1e5rl.jpg"
    },
    {
      _id: uuid(),
      firstName: "Amelia",
      lastName: "Thompson",
      username: "AmeliaT",
      avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-3_luauyf.jpg"
    },
    {
      _id: uuid(),
      firstName: "Sophia",
      lastName: "Anderson",
      username: "SophiaA",
      avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg"
    }
   ],
   dislikedBy:[]
    },
    firstName: "Lucas",
    lastName: "Parker",
    username: "LParker22",
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-8_coy7oo.jpg",
    createdAt: new Date("Mar 12 2022 9:30:09"),
    updatedAt: formatDate(),
    hashtags:"#Foodgasm#Foodstagram#FoodLover#FoodieLife"  
  },
  /***7th post */
  {
    _id:uuid(),
    content:"Saint's sweet grace brings joy to children's hearts❤️.",
    mediaURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686566235/socioSphere/help-2_gar5id.jpg",
    likes:{
      likeCount: 4,
      likedBy:[
        {
          _id: uuid(),
          firstName: "Afreen",
          lastName: "Almaz",
          username: "Afreen",
          avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-20_k20z1j.jpg"
        },
        {
          _id: uuid(),
          firstName: "Lucas",
          lastName: "Parker",
          username: "LParker22",
          avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-8_coy7oo.jpg"
        },
        {
          _id: uuid(),
          firstName: "Bhavana",
          lastName: "S",
          username: "bhavana",
          avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-4_tfbgyg.jpg"
        },
        {
          _id: uuid(),
          firstName: "Wyatt",
          lastName: "Sullivan",
          username: "WyattSully",
          avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-11_e1e5rl.jpg"
        }
      ],
      dislikedBy:[]
    },
    firstName: "Ethan",
    lastName: "Anderson",
    username: "EthanA94",
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-15_mtm2pp.jpg",
    createdAt: new Date("May 05 2021 4:30:08"),
    updatedAt: formatDate(),
    hashtags: "#HelpingHand#ActsOfKindness#SpreadLove"
  },
  /***9th post */
  {
    _id: uuid(),
    content: "Discovering hidden gems in every corner of the world",
    mediaURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686565636/socioSphere/traveler-1_pdfbop.jpg",
    likes:{
      likeCount: 3,
      likedBy :[
        {
          _id: uuid(),
          firstName: "Sophia",
          lastName: "Anderson",
          username: "SophiaA",
          avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg"
        },
        {
          _id: uuid(),
          firstName: "Lucas",
          lastName: "Parker",
          username: "LParker22",
          avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-8_coy7oo.jpg"
        },
        {
          _id: uuid(),
          firstName: "Wyatt",
          lastName: "Sullivan",
          username: "WyattSully",
          avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-11_e1e5rl.jpg"
        }
      ],
      dislikedBy: []
      },
    firstName: "Afreen",
    lastName: "Almaz",
    username: "Afreen",
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-20_k20z1j.jpg",
    createdAt: new Date("Apr 01 2023 3:00:06"),
    updatedAt: formatDate(),
    hashtags: "#TravelGram#Wanderlust#ExploreMore"
  },
  {
    _id: uuid(),
    content: "Farm ladies radiate joy, nature's beauty shines through their smiles.",
    mediaURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686813962/socioSphere/photographer-2_xgzy4n.jpg",
    likes:{
    likeCount: 3,
    likedBy: [
      {
        _id: uuid(),
        firstName: "Afreen",
        lastName: "Almaz",
        username: "Afreen",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-20_k20z1j.jpg"
      },
      {
        _id: uuid(),
        firstName: "Lucas",
        lastName: "Parker",
        username: "LParker22",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-8_coy7oo.jpg"
      },
	    {
        _id: uuid(),
        firstName: "Bhavana",
        lastName: "S",
        username: "bhavana",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-4_tfbgyg.jpg"
      }
    ],
    dislikedBy: []
    },
    firstName: "Wyatt",
    lastName: "Sullivan",
    username: "WyattSully",
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-11_e1e5rl.jpg",
    createdAt: new Date("Nov 12 2022 1:02:36"),
    updatedAt: formatDate(),
    hashtags:"#FarmLife#FarmWork#SustainableFarming"
  },
  {
   _id: uuid(),
   content: "Simple joys, ice cream brings smiles to underprivileged children.",
   mediaURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686813962/socioSphere/photographer-1_ukgrmv.jpg",
   likes:{
    likeCount: 3,
    likedBy:[
      {
        _id: uuid(),
        firstName: "Amelia",
        lastName: "Thompson",
        username: "AmeliaT",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-3_luauyf.jpg"
      },
      {
        _id: uuid(),
        firstName: "Sophia",
        lastName: "Anderson",
        username: "SophiaA",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg"
      },
	   {
        _id: uuid(),
        firstName: "Ethan",
        lastName: "Anderson",
        username: "EthanA94",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-15_mtm2pp.jpg"
      } 
    ],
    dislikedBy: []
   },
   firstName: "Wyatt",
    lastName: "Sullivan",
    username: "WyattSully",
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-11_e1e5rl.jpg",
    createdAt: new Date("Mar 12 2023 1:02:36"),
    updatedAt: formatDate(),
   hashtags: "#JoyfulMoments#IceCreamLove#SmilesForAll#HelpingHands"
  },
  {
  _id: uuid(),
  content:"My First React project: E-Commerce app",
  mediaURL:"https://res.cloudinary.com/drjisfpis/image/upload/v1686565219/socioSphere/post-1_oy5guf.png",
  likes:{
    likeCount: 3,
    likedBy:[
      {
        _id: uuid(),
        firstName: "Bhavana",
        lastName: "S",
        username: "bhavana",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-4_tfbgyg.jpg"
      },
      {
        _id: uuid(),
        firstName: "Wyatt",
        lastName: "Sullivan",
        username: "WyattSully",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-11_e1e5rl.jpg"
      },
      {
        _id: uuid(),
        firstName: "Ethan",
        lastName: "Anderson",
        username: "EthanA94",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-15_mtm2pp.jpg"
      }
    ],
    dislikedBy:[]
  },
  firstName: "Sophia",
  lastName: "Anderson",
  username: "SophiaA",
  avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg",
  createdAt: new Date("May 28 2023 12:09:23"),
  updatedAt: formatDate(),
  hashtags:"#ReactJS#ReactProject#WebDevelopment#CodeLife"
  }
];
