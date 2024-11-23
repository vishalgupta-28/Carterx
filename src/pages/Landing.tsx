import React from 'react';
import { Link } from 'react-router-dom';
import { BookmarkPlus, Share2, Search, Tag, Link as LinkIcon } from 'lucide-react';

export function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <LinkIcon className="text-blue-600" size={24} />
            <span className="text-xl font-bold text-gray-900">Carter</span>
          </div>
          <Link
            to="/app"
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Save and Share Links,{' '}
              <span className="text-blue-600">Effortlessly</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Carter is your personal bookmark manager that helps you organize and share
              your favorite links with ease. Never lose an important URL again.
            </p>
            <Link
              to="/app"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium gap-2"
            >
              <BookmarkPlus size={24} />
              Start Saving Links
            </Link>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <BookmarkPlus className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Saving</h3>
              <p className="text-gray-600">
                Save links with just a few clicks. Add titles, descriptions, and tags to
                stay organized.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Tag className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Smart Organization</h3>
              <p className="text-gray-600">
                Use tags to categorize your links and find them quickly when you need
                them.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Search className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Quick Search</h3>
              <p className="text-gray-600">
                Find any saved link instantly with our powerful search functionality.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Share2 className="text-blue-600" size={24} />
              </div>
              <h3 className="text-lg font-semibold mb-2">Easy Sharing</h3>
              <p className="text-gray-600">
                Share your saved links with others in just one click.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-600 text-white py-20 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Start Organizing Your Links?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join Carter today and experience a better way to manage your bookmarks.
            </p>
            <Link
              to="/app"
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition-colors text-lg font-medium"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center border-t border-gray-200 pt-8">
          <div className="flex items-center gap-2">
            <LinkIcon className="text-blue-600" size={20} />
            <span className="font-medium">Carter</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Carter. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}