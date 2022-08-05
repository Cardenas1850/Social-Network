const { Schema, model, Types} = require("mongoose");
const moment = require("moment");

const reactionSchema = new Schema(
    {
        reactionText: {
            type: String,
            required: true,
            maxlength: 280,
        },

        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },

        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format("MM DD, YYY hh:mm a"),
        },
    },
    {
        toJSON: {
            type: String,
            getters: true,
        },
    }
);

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            minlength: 1,
            maxlength: 280,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: (createdAtVal) => moment(createdAtVal).format("MM DD, YYY hh:mm a"),
        },
        reactions: [reactionSchema],
    },
    {
            toJSON: {
                virtuals: true,
                getters: true,
            },
            id: false,
        }
);

thoughtSchema.virtual("reactionCount").get(function () {
    return this.reactions.length;
});
const Thought = model("Thought", thoughtSchema);

module.exports = Thought;