/* eslint-disable @next/next/no-img-element */
'use client';
import { useState, useEffect, FormEvent } from 'react';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import Loading from '@/Components/ui/Loading';

interface Drink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions: string;
  strCategory: string;
  strAlcoholic: string;
  strGlass: string;
  // Additional properties
}

export default function SearchDrinks() {
  const [ingredient, setIngredient] = useState('');
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [noResultsMessage, setNoResultsMessage] = useState('');

     
   useEffect(() => {
     const savedDrinks = localStorage.getItem('drinks');
     if (savedDrinks) {
       setDrinks(JSON.parse(savedDrinks));
     }
   }, []);

  const handleSearch = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);
    setError('');
    setNoResultsMessage('');

    try {
      const response = await axios.get(
        `/api/searchCocktails?ingredient=${ingredient}`,
      );
      if (response.data.drinks && Array.isArray(response.data.drinks)) {
        setDrinks(response.data.drinks);
        localStorage.setItem('drinks', JSON.stringify(response.data.drinks));
      } else {
        setDrinks([]);
        setNoResultsMessage('No results found for the specified ingredient.');
      }
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
          className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
        >
          {isLoading ? <Loading /> : 'Search'}
        </button>
      </form>

      {error && <p className="text-red-500 text-center">{error}</p>}
      {!isLoading && noResultsMessage && (
        <p className="text-red-500 text-center">{noResultsMessage}</p>
      )}

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-6 min-h-screen rounded-2xl"
        data-theme="dark"
        style={{
          backgroundImage: `url('/images/barBackground.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        {drinks.map((drink) => (
          <Link
            key={drink.idDrink}
            href={`/cocktails/${drink.idDrink}`}
            passHref
          >
            <div className="card-compact card-bordered cursor-pointer bg-base-300 rounded-lg m-2 border border-headline drop-shadow-2xl">
              <figure className="p-4">
                <img
                  src={drink.strDrinkThumb}
                  alt={drink.strDrink}
                  className="w-full h-auto rounded-xl border border-gray-300 bg-gray-200 p-1"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{drink.strDrink}</h2>
                {/* Add components to display ingredients and measures */}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
