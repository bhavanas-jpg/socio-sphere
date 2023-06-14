import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
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
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-3_luauyf.jpg"
  },
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
    hashtags: "#Dance #Dancer #DanceLife #DanceCommunity #Choreography #DanceInspiration #DanceMoves#DanceStyle",
    username: "bhavana",
    firstName: "Bhavana",
    lastName: "S",
    createdAt: new Date("Apr 06 2022 12:31:25"),
    updatedAt: formatDate(),
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-4_tfbgyg.jpg"
  },
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
    hashtags: "#Dance #Dancer #DanceLife #DanceCommunity #Choreography #DanceInspiration #DanceMoves#DanceStyle",
    username: "bhavana",
    firstName: "Bhavana",
    lastName: "S",
    createdAt: new Date("May 24 2022 2:31:25"),
    updatedAt: formatDate(),
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-4_tfbgyg.jpg"
  },
  /***4th post */
  {
    mediaURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686566235/socioSphere/makeup-1_kat2hh.jpg"
  },
  {
    mediaURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686566237/socioSphere/covid-1_oc8lzn.jpg"
  },
  {
    mediaURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686566235/socioSphere/help-2_gar5id.jpg"
  },
  {
    mediaURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686566235/socioSphere/yoga-2_jikwre.jpg"
  },
  {
    mediaURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686566233/socioSphere/makeup-2_hqxtew.jpg"
  },
  {
    mediaURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686565475/socioSphere/traveler-4_srz0sb.jpg"
  },
  {
    mediaURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686565636/socioSphere/traveler-1_pdfbop.jpg"
  },
  {
    mediaURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686566233/socioSphere/help-1_cfegka.jpg"
  }, {
    mediaURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686565262/socioSphere/feed-4_qoadjn.jpg"
  },

];
