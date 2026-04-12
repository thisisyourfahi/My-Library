import React from 'react';

const ErrorPage = () => {
    return (
        <div className="min-h-screen  flex items-center justify-center p-6">
            <div className="text-center">
                <h1 className="text-9xl font-bold tracking-tighter mb-4">404</h1>
                <p className="text-3xl font-medium mb-8">Page not found</p>
                <p className="text-zinc-400 mb-10 max-w-md mx-auto">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <a href="/" className="inline-block bg-white text-black px-8 py-3 rounded-2xl font-semibold hover:bg-zinc-200 transition">
                    Go Home
                </a>
            </div>
        </div>
    );
};

export default ErrorPage;