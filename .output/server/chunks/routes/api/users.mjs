import { c as defineEventHandler, r as readBody } from '../../_/nitro.mjs';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});
const User = mongoose.model("User", userSchema);
const users = defineEventHandler(async (event) => {
  const body = await readBody(event);
  if (!body.email || !body.password) {
    return { error: "Email and password are required" };
  }
  const hashedPassword = await bcrypt.hash(body.password, 10);
  try {
    await mongoose.connect("mongodb://localhost:27017/mydb", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    const user = new User({
      email: body.email,
      password: hashedPassword
    });
    await user.save();
    return { success: true, message: "User created successfully" };
  } catch (error) {
    return { error: error.message };
  } finally {
    await mongoose.connection.close();
  }
});

export { users as default };
//# sourceMappingURL=users.mjs.map
