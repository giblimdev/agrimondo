// app/glossary/components/AlphabetFilter.jsx
import { Hash } from 'lucide-react';

export default function AlphabetFilter({ selectedLetter, onSelectLetter }) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <Hash className="w-5 h-5 text-amber-600" />
        <label className="text-sm font-semibold text-gray-700">Filtre alphabétique</label>
      </div>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => onSelectLetter(null)}
          className={`w-10 h-10 flex items-center justify-center rounded-lg transition-all ${
            !selectedLetter
              ? 'bg-amber-600 text-white'
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          Tout
        </button>
        {alphabet.map(letter => (
          <button
            key={letter}
            onClick={() => onSelectLetter(letter)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-all ${
              selectedLetter === letter
                ? 'bg-amber-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {letter}
          </button>
        ))}
      </div>
    </div>
  );
}