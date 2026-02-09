// app/glossary/components/GlossaryCard.jsx
import Link from 'next/link';
import { ArrowRight, BookOpen } from 'lucide-react';

export default function GlossaryCard({ term }) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-amber-100">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-semibold mb-2">
              {term.category}
            </span>
            <h3 className="text-xl font-bold text-gray-800 group-hover:text-amber-600 transition-colors">
              {term.term}
            </h3>
          </div>
          <BookOpen className="w-6 h-6 text-amber-400" />
        </div>
        
        <p className="text-gray-600 mb-6 line-clamp-3">
          {term.definition}
        </p>
        
        <div className="flex justify-between items-center">
          <Link 
            href={`/glossary/${term.slug}`}
            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-semibold group/link"
          >
            En savoir plus
            <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
          </Link>
          <span className="text-xs text-gray-400">
            {term.term.length > 10 ? 'Terme long' : 'Terme court'}
          </span>
        </div>
      </div>
      
      <div className="bg-amber-50 px-6 py-3 border-t border-amber-100">
        <div className="flex items-center text-sm text-amber-700">
          <span className="font-medium">Définition complète disponible</span>
        </div>
      </div>
    </div>
  );
}