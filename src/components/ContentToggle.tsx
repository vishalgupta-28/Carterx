import React from 'react';
import { Link2, StickyNote } from 'lucide-react';
import { ContentType } from '../types';

interface ContentToggleProps {
  activeType: ContentType;
  onToggle: (type: ContentType) => void;
}

export function ContentToggle({ activeType, onToggle }: ContentToggleProps) {
  return (
    <div className="inline-flex rounded-lg p-1 bg-gray-100">
      <button
        onClick={() => onToggle('links')}
        className={`flex items-center gap-2 px-4 py-2 rounded-md ${
          activeType === 'links'
            ? 'bg-white text-blue-600 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <Link2 size={20} />
        Links
      </button>
      <button
        onClick={() => onToggle('notes')}
        className={`flex items-center gap-2 px-4 py-2 rounded-md ${
          activeType === 'notes'
            ? 'bg-white text-blue-600 shadow-sm'
            : 'text-gray-600 hover:text-gray-900'
        }`}
      >
        <StickyNote size={20} />
        Notes
      </button>
    </div>
  );
}