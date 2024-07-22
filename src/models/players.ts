import mongoose, { Document, Schema } from 'mongoose';

interface IPlayer extends Document {
  name: string;
  position: string;
  team: string;
  age: number;
  createdAt: Date;
}

const PlayerSchema: Schema = new Schema({
  userName: {
    type: String,
    required: true
  },
  trophies: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

});

const Players = mongoose.model<IPlayer>('Player', PlayerSchema);

export default Players;
