import React from 'react'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <Helmet>
        <title>Page Not Found | QuickBite</title>
        <meta
        name="description"
        content="The page you are looking for could not be found."
        />
        </Helmet>
        <h1 className="text-6xl font-bold mb-4">404</h1>

        <h2 className="text-2xl font-semibold mb-2">
            Page Not Found
        </h2>

        <p className="text-gray-500 mb-6">
            The page you are looking for does not exist.
        </p>

        <Link
            to="/"
            className="px-6 py-3 rounded-xl bg-primary text-white"
        >
            Go Back Home
        </Link>
    </div>
  )
}

export default NotFound
