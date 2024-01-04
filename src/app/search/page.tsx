//src/app/ingredients/page.tsx
'use client';
import { useState, FormEvent } from 'react';
import axios from 'axios';
import Image from 'next/image';

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  // Include other properties as needed
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
      <form onSubmit={handleSearch} className="mb-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Enter an ingredient:</span>
          </label>
          <input
            type="text"
            placeholder="e.g., Vodka"
            className="input input-bordered w-full max-w-xs"
            value={ingredient}
            onChange={(e) => setIngredient(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className={`btn btn-primary mt-2 ${isLoading ? 'loading' : ''}`}
        >
          Search
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {drinks.map((drink) => (
          <div key={drink.idDrink} className="card card-bordered">
            <figure>
              <Image
                src={drink.strDrinkThumb}
                alt={drink.strDrink}
                layout="responsive"
                width={500}
                height={500}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{drink.strDrink}</h2>
              <p>{drink.strInstructions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
