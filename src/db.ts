import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('YOUR_MONGODB_CONNECTION_STRING');
    console.log('MongoDB connected...');
  } catch (err) {
    if (err instanceof Error) {
      console.error(err.message);
    } else {
      console.error('Unexpected error', err);
    }
    process.exit(1);
  }
};

export default connectDB;
