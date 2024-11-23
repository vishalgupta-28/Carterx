import React from 'react';
import { Share2, Trash2 } from 'lucide-react';
import { Note } from '../types';

interface NoteCardProps {
  note: Note;
  onDelete: (id: string) => void;
  onShare: (id: string) => void;
}

export function NoteCard({ note, onDelete, onShare }: NoteCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-800">{note.title}</h3>
        <div className="flex gap-2">
          <button
            onClick={() => onShare(note.id)}
            className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100"
          >
            <Share2 size={18} />
          </button>
          <button
            onClick={() => onDelete(note.id)}
            className="p-2 text-gray-600 hover:text-red-600 rounded-full hover:bg-gray-100"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
      <p className="text-gray-600 mb-4 whitespace-pre-wrap">{note.content}</p>
      <div className="flex flex-wrap gap-2">
        {note.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="mt-4 text-sm text-gray-500">
        Created on {new Date(note.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
}