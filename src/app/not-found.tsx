//src/app/not-found.tsx
import Link from 'next/link';

function Custom404() {
  return (
    <div
      className="min-h-screen flex items-center justify-center text-center bg-secondary"
      data-theme="retro"
    >
      <div className="card bordered p-10 shadow-2xl bg-base-100">
        <h1 className="text-4xl font-bold mb-4">
          Oh No! That page is not here🥹
        </h1>
        <p className="mb-4 text-xl">
          The page you are looking for does not exist or an other error
          occurred.
        </p>
        <Link
          href="/"
          className="underline-offset-1 bg-background text-headline btn hover:text-button hover:bg-buttonText"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}

export default Custom404;
