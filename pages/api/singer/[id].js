import singersList from "./../database.js"

export default async function getSinger(req, res) {
  const { id } = req.query
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  const singer = singersList.find((ele) => ele.id === id);

  if (!singer) {
    return res.status(404).json({ error: 'Singer not found' });
  }

  res.status(200).json({
    data: singer,
    status: 200,
    success: true
  })
}
