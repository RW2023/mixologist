'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Loading from '@/Components/ui/Loading';
import Pending from '@/Components/ui/Pending';
import Heading from '@/Components/ui/Heading';


// Define the interface for a Cocktail object
interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
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
  if (!cocktailDetails) return <Pending />;

  return (
    <div className="container mx-auto p-4 md:w-3/4 lg:w-4/5 min-h-screen">
      <div className="text-3xl flex flex-col justify-center items-center">
        <h2>{cocktailDetails.strDrink}</h2>
      </div>
      <div className="card-compact bg-base-100 shadow-xl">
        <figure className="p-4">
          <Image
            src={cocktailDetails.strDrinkThumb}
            alt={cocktailDetails.strDrink}
            width={500}
            height={500}
            layout="responsive"
            className="rounded-xl border border-base-300 bg-base-100 p-1"
          />
        </figure>
        <div className="card-body bg-base-300 border rounded-md">
          <h2 className="card-title text-2xl font-bold">
            {cocktailDetails.strDrink}
          </h2>
          <p>
            <strong>Category:</strong> {cocktailDetails.strCategory}
          </p>
          <p>
            <strong>Type:</strong> {cocktailDetails.strAlcoholic}
          </p>
          <p>
            <strong>Glass:</strong> {cocktailDetails.strGlass}
          </p>
          <p>
            <strong>Instructions:</strong> {cocktailDetails.strInstructions}
          </p>
          {/* Display other details as needed */}
        </div>
      </div>
    </div>
  );
}
