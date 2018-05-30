import fs from 'fs'
// const fs = require('fs')
const { resolve } = require('path')
const md = {}

md.fetchProducts = () => {
  const data = JSON.parse(
    fs.readFileSync(resolve(__dirname, './dumps/products.json'), {
      encoding: 'utf8',
    }),
  )
  return data
}
md.fetchFaqs = product_id => {
  const data = JSON.parse(
    fs.readFileSync(resolve(__dirname, './dumps/faqs.json'), {
      encoding: 'utf8',
    }),
  )
  return data.filter(x => x.faq_product_id == product_id)
}
md.fetchOffers = product_id => {
  const data = JSON.parse(
    fs.readFileSync(resolve(__dirname, './dumps/offers.json'), {
      encoding: 'utf8',
    }),
  )
  return data.filter(x => x.offer_product_id == product_id)
}
md.fetchPromos = product_id => {
  const data = JSON.parse(
    fs.readFileSync(resolve(__dirname, './dumps/promos.json'), {
      encoding: 'utf8',
    }),
  )
  return data.filter(x => x.promo_product_id == product_id)
}

module.exports = md
