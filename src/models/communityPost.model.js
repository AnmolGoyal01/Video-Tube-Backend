const { Schema, model } = require("mongoose");

const communityPostSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    content: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
    },
  },
  { timestamps: true }
);

export const CommunityPost = model("CommunityPost", communityPostSchema);
