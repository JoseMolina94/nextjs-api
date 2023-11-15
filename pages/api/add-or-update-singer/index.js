import singersList from "./../database.js"
import { uuid } from 'uuidv4';

export default async function createOrUpdateSinger(req, res) {
  if (req.body.id) {
    return await updateSinger(req, res)
  } else {
    return await addSinger(req, res)
  }
}

async function updateSinger(req, res) {
  // Configura las cabeceras CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // Preflight request, responde con un código 200 sin procesar la solicitud
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    const singerToChange = req.body;

    const indexToChange = singersList.findIndex((ele) => ele.id === singerToChange.id)

    singersList[indexToChange] = singerToChange
    res.status(201).json({ message: 'Cantante actualizado con éxito', singer: singerToChange, index: indexToChange });
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}


async function addSinger(req, res) {

  // Configura las cabeceras CORS
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    // Preflight request, responde con un código 200 sin procesar la solicitud
    return res.status(200).end();
  }

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
