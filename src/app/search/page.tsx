//src/app/ingredients/page.tsx
'use client';
import { useState, FormEvent } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Loading from '@/Components/ui/Loading';

// Define the interface for a Drink object
interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  // Add properties for ingredients and measures
}

export default function SearchDrinks() {
  const [ingredient, setIngredient] = useState('');
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await axios.get(
        `/api/searchCocktails?ingredient=${ingredient}`,
      );
      setDrinks(response.data.drinks || []);
    } catch (error) {
      setError('Failed to fetch drinks. Please try again.');
      console.error('Error fetching drinks:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-8 flex justify-center">
        <input
          type="text"
          placeholder="e.g., Vodka"
          className="input input-bordered input-primary w-full max-w-xs mr-2"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
        />
        <button
          type="submit"
          className={`btn btn-primary ${isLoading ? <Loading /> : ''}`}
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-screen" data-theme="business">
        {drinks.map((drink) => (
          <div key={drink.idDrink} className="card card-bordered">
            <figure className="p-4">
              <Image
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                layout="responsive"
                width={500}
                height={500}
                className="rounded-xl"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{drink.strDrink}</h2>
              <p>
                <strong>Category:</strong> {drink.strCategory}
              </p>
              <p>
                <strong>Type:</strong> {drink.strAlcoholic}
              </p>
              <p>
                <strong>Glass:</strong> {drink.strGlass}
              </p>
              <p>
                <strong>Instructions:</strong> {drink.strInstructions}
              </p>
              {/* Add components to display ingredients and measures */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
