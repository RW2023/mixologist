// pages/api/lookupCocktail.ts
import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const idDrink = req.query.id;

  try {
    const response = await axios.get(
      'https://the-cocktail-db.p.rapidapi.com/lookup.php',
      {
        params: { i: idDrink },
        headers: {
          'X-RapidAPI-Key': process.env.RAPID_API_KEY,
          'X-RapidAPI-Host': 'the-cocktail-db.p.rapidapi.com',
        },
      },
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching cocktail details' });
  }
}
