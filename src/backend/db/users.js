import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Bhavana",
    lastName: "S",
    username: "bhavana",
    email: "bhavanas@gmail.com",
    password: "bhavanaS123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-4_tfbgyg.jpg",
    following: [
      {
        _id: uuid(),
        firstName: "Afreen",
        lastName: "Almaz",
        username: "Afreen",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-20_k20z1j.jpg"
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
    followers: [
      {
        _id: uuid(),
        firstName: "Amelia",
        lastName: "Thompson",
        username: "AmeliaT",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-3_luauyf.jpg"
      },
      {
        _id: uuid(),
        firstName: "Lucas",
        lastName: "Parker",
        username: "LParker22",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-8_coy7oo.jpg"
      }
    ],
    bookmarks: [],
    bio: "Software Developer",
    website: "https://bhavanas-portfolio.netlify.app/"
  },
  /**************2nd user************* */
  {
    _id: uuid(),
    firstName: "Afreen",
    lastName: "Almaz",
    username: "Afreen",
    password: "Afreen",
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-20_k20z1j.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Bhavana",
        lastName: "S",
        username: "bhavana",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-4_tfbgyg.jpg"
      },
      {
        _id: uuid(),
        firstName: "Ethan",
        lastName: "Anderson",
        username: "EthanA94",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-15_mtm2pp.jpg"
      }
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Bhavana",
        lastName: "S",
        username: "bhavana",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-4_tfbgyg.jpg"
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
        firstName: "Wyatt",
        lastName: "Sullivan",
        username: "WyattSully",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-11_e1e5rl.jpg"
      }
    ],
    bookmarks: [],
    bio: "Traveller",
    website: "https://bhavanas-portfolio.netlify.app/"
  },
  /*********3rd user ***********/
  {
    _id: uuid(),
    firstName: "Amelia",
    lastName: "Thompson",
    username: "AmeliaT",
    password: "AmeliaT",
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-3_luauyf.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Ethan",
        lastName: "Anderson",
        username: "EthanA94",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-15_mtm2pp.jpg"
      }
      , {
        _id: uuid(),
        firstName: "Sophia",
        lastName: "Anderson",
        username: "SophiaA",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg"
      }, {
        _id: uuid(),
        firstName: "Afreen",
        lastName: "Almaz",
        username: "Afreen",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-20_k20z1j.jpg"
      }
    ],
    followers: [
      {
        _id: uuid(),
        firstName: "Lucas",
        lastName: "Parker",
        username: "LParker22",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-8_coy7oo.jpg"
      }
    ],
    bookmarks: [],
    bio: "Yoga Teacher",
    website: "https://bhavanas-portfolio.netlify.app/"
  },
  /*******4th user **************/
  {
    _id: uuid(),
    firstName: "Sophia",
    lastName: "Anderson",
    username: "SophiaA",
    password: "SophiaA",
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
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
    followers: [
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
      },
      {
        _id: uuid(),
        firstName: "Afreen",
        lastName: "Almaz",
        username: "Afreen",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-20_k20z1j.jpg"
      }
    ],
    bookmarks: [],
    bio: "MakeUp Artist",
    website: "https://bhavanas-portfolio.netlify.app/"
  },
  /*******5th user **************/
  {
    _id: uuid(),
    firstName: "Ethan",
    lastName: "Anderson",
    username: "EthanA94",
    password: "EthanA94",
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-15_mtm2pp.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Amelia",
        lastName: "Thompson",
        username: "AmeliaT",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-3_luauyf.jpg"
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
        firstName: "Sophia",
        lastName: "Anderson",
        username: "SophiaA",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg"
      }
    ],
    followers: [
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
    bookmarks: [],
    bio: "Web Designer",
    website: "https://bhavanas-portfolio.netlify.app/"
  },
  /*******6th user **************/
  {
    _id: uuid(),
    firstName: "Lucas",
    lastName: "Parker",
    username: "LParker22",
    password: "LParker22",
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-8_coy7oo.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
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
    followers: [
      {
        _id: uuid(),
        firstName: "Ethan",
        lastName: "Anderson",
        username: "EthanA94",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544619/socioSphere/profile-15_mtm2pp.jpg"
      }
      , {
        _id: uuid(),
        firstName: "Sophia",
        lastName: "Anderson",
        username: "SophiaA",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg"
      }, {
        _id: uuid(),
        firstName: "Amelia",
        lastName: "Thompson",
        username: "AmeliaT",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-3_luauyf.jpg"
      }
    ],
    bookmarks: [],
    bio: "Software Developer",
    website: "https://bhavanas-portfolio.netlify.app/"
  },
  /*******7th user **************/
  {
    _id: uuid(),
    firstName: "Wyatt",
    lastName: "Sullivan",
    username: "WyattSully",
    password: "WyattSully",
    avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-11_e1e5rl.jpg",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: uuid(),
        firstName: "Sophia",
        lastName: "Anderson",
        username: "SophiaA",
        avatarURL: "https://res.cloudinary.com/drjisfpis/image/upload/v1686544474/socioSphere/profile-12_ge7xeq.jpg"
      }, {
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
      }
    ],
    followers: [
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
    bookmarks: [],
    bio: "Photographer",
    website: "https://bhavanas-portfolio.netlify.app/"
  }
];
