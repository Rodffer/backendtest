import mongoose from '../../database';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: [true, "can't be blank"],
    },
    email: {
      type: String,
      require: [true, "can't be blank"],
      lowercase: true,
      unique: true,
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      index: true,
    },
    password: {
      type: String,
      require: [true, "can't be blank"],
      select: false,
    },
    birth_date: {
      type: Date,
      require: [true, "can't be blank"],
    },
    rg: {
      type: String,
      require: [true, "can't be blank"],
      unique: true,
    },
    cpf: {
      type: String,
      require: [true, "can't be blank"],
      unique: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model('User', UserSchema);

export default User;
