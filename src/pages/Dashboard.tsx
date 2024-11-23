import React, { useState } from 'react';
import { Link2, BookmarkPlus, Search, StickyNote } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { Link as LinkType, Note, ContentType } from '../types';
import { LinkCard } from '../components/LinkCard';
import { NoteCard } from '../components/NoteCard';
import { AddLinkForm } from '../components/AddLinkForm';
import { AddNoteForm } from '../components/AddNoteForm';
import { ContentToggle } from '../components/ContentToggle';
import { useLocalStorage } from '../hooks/useLocalStorage';

export function Dashboard() {
  const [links, setLinks] = useLocalStorage<LinkType[]>('carter-links', []);
  const [notes, setNotes] = useLocalStorage<Note[]>('carter-notes', []);
  const [showAddForm, setShowAddForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [contentType, setContentType] = useState<ContentType>('links');

  const handleAddLink = (newLink: Omit<LinkType, 'id' | 'createdAt'>) => {
    const link: LinkType = {
      ...newLink,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    setLinks([link, ...links]);
    setShowAddForm(false);
    toast.success('Link saved successfully!');
  };

  const handleAddNote = (newNote: Omit<Note, 'id' | 'createdAt'>) => {
    const note: Note = {
      ...newNote,
      id: crypto.randomUUID(),
      createdAt: new Date(),
    };
    setNotes([note, ...notes]);
    setShowAddForm(false);
    toast.success('Note saved successfully!');
  };

  const handleDeleteLink = (id: string) => {
    setLinks(links.filter((link) => link.id !== id));
    toast.success('Link deleted successfully!');
  };

  const handleDeleteNote = (id: string) => {
    setNotes(notes.filter((note) => note.id !== id));
    toast.success('Note deleted successfully!');
  };

  const handleShareLink = (id: string) => {
    const link = links.find((l) => l.id === id);
    if (link) {
      navigator.clipboard.writeText(link.url);
      toast.success('Link copied to clipboard!');
    }
  };

  const handleShareNote = (id: string) => {
    const note = notes.find((n) => n.id === id);
    if (note) {
      navigator.clipboard.writeText(note.content);
      toast.success('Note content copied to clipboard!');
    }
  };

  const filteredLinks = links.filter(
    (link) =>
      link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const filteredNotes = notes.filter(
    (note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      note.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Link2 className="text-blue-600" size={24} />
              <h1 className="text-2xl font-bold text-gray-900">Carter</h1>
            </div>
            <button
              onClick={() => setShowAddForm(!showAddForm)}
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 gap-2"
            >
              {contentType === 'links' ? (
                <>
                  <BookmarkPlus size={20} />
                  Add Link
                </>
              ) : (
                <>
                  <StickyNote size={20} />
                  Add Note
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Content Type Toggle & Search Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <ContentToggle activeType={contentType} onToggle={setContentType} />
          <div className="relative flex-1 max-w-md w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder={`Search ${contentType}...`}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        {/* Add Form */}
        {showAddForm && (
          <div className="mb-8">
            {contentType === 'links' ? (
              <AddLinkForm onAdd={handleAddLink} />
            ) : (
              <AddNoteForm onAdd={handleAddNote} />
            )}
          </div>
        )}

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentType === 'links'
            ? filteredLinks.map((link) => (
                <LinkCard
                  key={link.id}
                  link={link}
                  onDelete={handleDeleteLink}
                  onShare={handleShareLink}
                />
              ))
            : filteredNotes.map((note) => (
                <NoteCard
                  key={note.id}
                  note={note}
                  onDelete={handleDeleteNote}
                  onShare={handleShareNote}
                />
              ))}
        </div>

        {/* Empty State */}
        {((contentType === 'links' && links.length === 0) ||
          (contentType === 'notes' && notes.length === 0)) && (
          <div className="text-center py-12">
            {contentType === 'links' ? (
              <BookmarkPlus size={48} className="mx-auto text-gray-400 mb-4" />
            ) : (
              <StickyNote size={48} className="mx-auto text-gray-400 mb-4" />
            )}
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No {contentType} saved yet
            </h3>
            <p className="text-gray-500">
              Start by clicking the "Add {contentType === 'links' ? 'Link' : 'Note'}" button
              to save your first {contentType === 'links' ? 'link' : 'note'}.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}