import React from "react";
import AlimentationGuide from "./Alimentation";
import { LucideDollarSign, LucideTarget } from "lucide-react";

export default function page() {
  return (
    <div>
      <div>
        <AlimentationGuide />
      </div>
      <div className="space-y-6">
        {/* RECOMMANDATIONS */}
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <LucideTarget className="w-6 h-6 text-blue-500" /> RECOMMANDATIONS
          </h1>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
            <li>
              Transition alimentaire : Toujours progressive sur 7-10 jours
            </li>
            <li>Calcium : Passer à 3-4% à 2 semaines avant la ponte</li>
            <li>
              Éclairage : Stabiliser avant le pic de ponte, jamais de diminution
            </li>
            <li>
              Température : Maintenir stable, éviter les variations &gt;3°C/jour
            </li>
            <li>Eau : Toujours propre et fraîche (2x plus que nourriture)</li>
            <li>Ventilation : Essentielle pour évacuer humidité et ammoniac</li>
            <li>
              Stress : Éviter tout changement brutal (lumière, température,
              aliment)
            </li>
          </ul>
        </div>

        {/* IMPACT ÉCONOMIQUE */}
        <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-200">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <LucideDollarSign className="w-6 h-6 text-green-500" /> IMPACT
            ÉCONOMIQUE
          </h1>
          <div className="mt-4 text-gray-700 space-y-2">
            <p>
              L'alimentation représente{" "}
              <strong>70% des coûts de production</strong>. Un suivi rigoureux
              des paramètres permet :
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <strong>72 semaines :</strong> Rentabilité optimale, viande de
                reforme de qualité
              </li>
              <li>
                <strong>80 semaines :</strong> Production maximale mais risque
                accru de problèmes de coquilles et de santé
              </li>
            </ul>
            <p className="text-sm text-gray-500">
              Source des données : ITAVI, Lohmann France, H&N International,
              ONCE, UFA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
