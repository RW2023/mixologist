import HomeContent from '@/Components/HomeContent';


export default function Home() {
const cocktail = '/images/cocktail.png';
const cocktailAlt = 'Cocktail';
const imageWidth = 500;
const imageHight = 500;

  return (
    <HomeContent 
    imageWidth={imageWidth}
    imageHight={imageHight}
    img={cocktail}
    alt={cocktailAlt}
    />
  );
}
