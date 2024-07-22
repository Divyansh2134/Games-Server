import mongoose, { Document, Schema } from 'mongoose';

interface IMatch extends Document {
    player1: mongoose.Schema.Types.ObjectId;
    player2: mongoose.Schema.Types.ObjectId;
    winner: mongoose.Schema.Types.ObjectId;
    duration: number;
    time: Date;
}
  

const MatchSchema: Schema = new Schema({
  player1: {
    type: String,
    required: true
  },
  player2: {
    type: String,
    required: true
  },
  winner: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  startTime: {
    type: Date,
    default: Date.now
  }

});

const Match = mongoose.model<IMatch>('Match', MatchSchema);

export default Match;
