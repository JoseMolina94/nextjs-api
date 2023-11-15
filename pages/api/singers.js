// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import singersList from "./database.json"

export default async function singers(req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  res.status(200).json({
    data: singersList,
    status: 200,
    success: true
  })
}

