const { Schema, model } = require("mongoose");

const likeSchema = new Schema(
  {
    comment: {
      type: Schema.Types.ObjectId,
      ref: "Comment",
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    likedBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    communityPost: {
      type: Schema.Types.ObjectId,
      ref: "CommunityPost",
    },
  },
  { timestamps: true }
);

export const Like = model("Like", likeSchema);
