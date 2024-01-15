'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Loading from '@/Components/ui/Loading';
import Pending from '@/Components/ui/Pending';
import Heading from '@/Components/ui/Heading';
import SubHeading from '@/Components/ui/SubHeading';

// Define the interface for a Cocktail object
interface Cocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  [key: `strIngredient${number}`]: string | null; // Dynamic ingredient properties
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

  const renderIngredients = (cocktail: Cocktail) => {
    let ingredients = [];
    for (let i = 1; i <= 15; i++) {
      const ingredient = cocktail[`strIngredient${i}`];
      if (ingredient) {
        ingredients.push(
          <p key={i}>
            <i className="fas fa-check mr-2"></i>
            {ingredient}
          </p>,
        );
      }
    }
    return ingredients;
  }; 

  if (isLoading) return <Loading />;
  if (error) return <div>Error: {error}</div>;
  if (!cocktailDetails) return <Pending />;

  return (
    <div className="container mx-auto p-4 md:w-3/4 lg:w-4/5 min-h-screen">
      <Heading title={cocktailDetails?.strDrink} iconClass="fas fa-cocktail" />
      <div className="card bg-base-300 shadow-xl">
        <figure className="p-4">
          <Image
            src={cocktailDetails?.strDrinkThumb}
            alt={cocktailDetails?.strDrink}
            width={500}
            height={500}
            layout="responsive"
            className="rounded-xl border border-1 bg-black p-1"
          />
        </figure>
        <div className="card-body bg-base-300 border rounded-md drop-shadow-2xl">
          <SubHeading
            title={cocktailDetails?.strDrink}
            iconClass="fas fa-cocktail"
          />
          <p>
            <i className="fas fa-list mr-2"></i>
            <strong>Category:</strong> {cocktailDetails?.strCategory}
          </p>
          <p>
            <i className="fas fa-wine-glass-alt mr-2"></i>
            <strong>Type:</strong> {cocktailDetails?.strAlcoholic}
          </p>
          <p>
            <i className="fas fa-glass-martini-alt mr-2"></i>
            <strong>Glass:</strong> {cocktailDetails?.strGlass}
          </p>
          <p>
            <i className="fas fa-book mr-2"></i>
            <strong>Instructions:</strong> {cocktailDetails?.strInstructions}
          </p>
          <div>
            <h3 className="text-lg font-bold mb-2">
              <i className="fas fa-utensils mr-2"></i>Ingredients
            </h3>
            {cocktailDetails && renderIngredients(cocktailDetails)}
          </div>
        </div>
      </div>
    </div>
  );
}
