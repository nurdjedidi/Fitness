import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

// Modèle d'utilisateur avec Mongoose
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

const User = mongoose.model('User', userSchema);

export default defineEventHandler(async (event) => {
  const body = await readBody(event);

  if (!body.email || !body.password) {
    return { error: 'Email and password are required' };
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  // Connexion à MongoDB (avec Mongoose)
  try {
    // Connexion à la base de données MongoDB
    await mongoose.connect('mongodb://localhost:27017/mydb', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Création d'un nouvel utilisateur
    const user = new User({
      email: body.email,
      password: hashedPassword
    });

    // Sauvegarder l'utilisateur dans la base de données
    await user.save();

    return { success: true, message: 'User created successfully' };
  } catch (error) {
    return { error: error.message };
  } finally {
    // Fermer la connexion à MongoDB
    await mongoose.connection.close();
  }
});
