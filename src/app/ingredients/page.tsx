// pages/ingredients.tsx
'use client';
import Loading from '@/Components/ui/Loading';
import { useEffect, useState } from 'react';

interface Ingredient {
  name: string;
  description?: string;
  // Include other properties as per your API response
}

const Ingredients = () => {
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchIngredients = async () => {
      try {
        const response = await fetch('/api/ingredients'); // Assuming you have an API route for ingredients
        const data: Ingredient[] = await response.json();
        setIngredients(data);
      } catch (error) {
        console.error('Error fetching ingredients:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchIngredients();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-6">Ingredients</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 border rounded-lg"
          >
            <h2 className="text-xl font-medium mb-2">{ingredient.name}</h2>
            {/* Replace below with actual image if available */}
            <div className="w-24 h-24 bg-gray-200 rounded-full mb-3"></div>
            <p>{ingredient.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ingredients;
