import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:"Balancing serenity upside down: Eagle Pose meets Headstand.",
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
       votes:{
        upvotedBy:[],
        downvotedBy: []
       },
       createdAt: new Date("January 02 2023 09:09:09")
      }
    ],
    username: "AmeliaT",
    firstName: "Amelia",
    lastName:  "Thompson",
    createdAt:  new Date("January 01 2023 09:09:09"),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
