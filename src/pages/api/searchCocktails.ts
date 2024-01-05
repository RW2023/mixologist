// pages/api/searchCocktails.ts
import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const ingredient = req.query.ingredient;

  if (!ingredient || typeof ingredient !== 'string') {
    return res
      .status(400)
      .json({
        error: 'Ingredient query parameter is required and must be a string',
      });
  }

  try {
    const options = {
      method: 'GET',
      url: 'https://the-cocktail-db.p.rapidapi.com/filter.php',
      params: { i: ingredient },
      headers: {
        'X-RapidAPI-Key': process.env.RAPID_API_KEY,
        'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
      },
    };

    const response = await axios.request(options);
    res.status(200).json(response.data || []);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: 'Error fetching data from The Cocktail Database' });
  }
}
