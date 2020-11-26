import { product } from 'react-storefront-connector'

export default async function pdp(req, res) {
  const { productId, size, color } = req.query
  return res.json(await product({ id: productId, size, color }, req, res))
}
