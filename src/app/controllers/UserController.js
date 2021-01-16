import bcrypt from 'bcryptjs';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
      birth_date: req.body.birth_date,
      rg: req.body.rg,
      cpf: req.body.cpf,
    });

    newUser.save((err) => {
      if (err) {
        res.status(500).send({ message: err });
      }
      res.json({ message: 'Cliente cadastrado com sucesso!' });
    });
  }

  async list(req, res) {
    try {
      const users = await User.find();
      return res.status(200).send({ users });
    } catch (error) {
      return res.status(404).send({ error: 'Cliente nao encontrado!' });
    }
  }
}

export default UserController;
