'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Loading from '@/Components/ui/Loading';

// Define the interface for a Cocktail object
interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  // Include other properties as needed
}

export default function CocktailDetailsPage({
  params,
}: {
  params: { id: string };
}) {
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

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error}</div>;
  if (!cocktailDetails) return <div className='min-h-screen'>Details Pending...</div>;

  return (
    <div className="container mx-auto p-4 md:w-3/4 lg:w-4/5 min-h-screen">
      <div className="card-compact bg-base-100 shadow-xl">
        <figure className="p-4">
          <Image
            src={cocktailDetails.strDrinkThumb}
            alt={cocktailDetails.strDrink}
            width={500}
            height={500}
            layout="responsive"
            className="rounded-lg"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold">
            {cocktailDetails.strDrink}
          </h2>
          <p className="text-lg">{cocktailDetails.strInstructions}</p>
          {/* Display other details as needed */}
        </div>
      </div>
    </div>
  );
}
