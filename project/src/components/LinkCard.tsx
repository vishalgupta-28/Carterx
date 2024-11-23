import React from 'react';
import { ExternalLink, Share2, Trash2 } from 'lucide-react';
import { Link } from '../types';

interface LinkCardProps {
  link: Link;
  onDelete: (id: string) => void;
  onShare: (id: string) => void;
}

export function LinkCard({ link, onDelete, onShare }: LinkCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">{link.title}</h3>
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center gap-1"
          >
            <ExternalLink size={14} />
            {link.url}
          </a>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => onShare(link.id)}
            className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100"
          >
            <Share2 size={18} />
          </button>
          <button
            onClick={() => onDelete(link.id)}
            className="p-2 text-gray-600 hover:text-red-600 rounded-full hover:bg-gray-100"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      <p className="text-gray-600 mb-4">{link.description}</p>
      <div className="flex flex-wrap gap-2">
        {link.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="mt-4 text-sm text-gray-500">
        Saved on {new Date(link.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
}