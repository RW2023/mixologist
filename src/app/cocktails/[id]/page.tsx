//src/
'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

// Define the interface for a Cocktail object
interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  // Include other properties as needed
}

export default function CocktailDetailsPage({ params }: { params: { id: string } }) {
  const [cocktailDetails, setCocktailDetails] = useState<Cocktail | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchCocktailDetails() {
      setIsLoading(true);
      try {
        const response = await axios.get(`/api/lookupCocktail?id=${params.id}`);
        setCocktailDetails(response.data.drinks[0]);
      } catch (err) {
        setError('Failed to fetch cocktail details');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    }

    if (params.id) {
      fetchCocktailDetails();
    }
  }, [params.id]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!cocktailDetails) return <div>No cocktail details available</div>;

  return (
    <div>
      <h1>{cocktailDetails.strDrink}</h1>
      <Image
        src={cocktailDetails.strDrinkThumb}
        alt={cocktailDetails.strDrink}
        width={500} // Specify the width
        height={500} // Specify the height
        layout="responsive"
      />

      <p>{cocktailDetails.strInstructions}</p>
      {/* Display other details as needed */}
    </div>
  );
}
