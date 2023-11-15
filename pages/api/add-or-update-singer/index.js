import singersList from "./../database.json"
import { uuid } from 'uuidv4';

export default function addSinger(req, res) {
  if (req.method === 'POST') {

    const newSinger = req.body;

    if (!newSinger || !newSinger.name) {
      return res.status(400).json({ error: 'Nombre del cantante es obligatorio' });
    }

    newSinger.id = uuid();
    singersList.push(newSinger);

    res.status(201).json({ message: 'Cantante agregado con éxito', singer: newSinger });
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
