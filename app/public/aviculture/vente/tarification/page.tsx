import React from "react";

export default function TarificationPage() {
  const tarifs = [
    {
      categorie: "Jumbo (>78 g)",
      particulier: 650,
      revendeur: 600,
      grossiste: 550,
    },
    {
      categorie: "AAA (67–77.9 g)",
      particulier: 620,
      revendeur: 580,
      grossiste: 530,
    },
    {
      categorie: "AA (60–66.9 g)",
      particulier: 590,
      revendeur: 550,
      grossiste: 500,
    },
    {
      categorie: "A (53–59.9 g)",
      particulier: 560,
      revendeur: 520,
      grossiste: 470,
    },
    {
      categorie: "B (46–52.9 g)",
      particulier: 530,
      revendeur: 490,
      grossiste: 450,
    },
    {
      categorie: "C (<46 g)",
      particulier: 500,
      revendeur: 460,
      grossiste: 420,
    },
  ];

  const tarifsKilo = [
    { type: "Particulier", prix: 7200 },
    { type: "Revendeur", prix: 6700 },
    { type: "Grossiste", prix: 6300 },
  ];

  const prixVente = [
    { categorie: "Jumbo (>78 g)", prix: 760 },
    { categorie: "AAA (67–77.9 g)", prix: 740 },
    { categorie: "AA (60–66.9 g)", prix: 710 },
    { categorie: "A (53–59.9 g)", prix: 680 },
    { categorie: "B (46–52.9 g)", prix: 650 },
    { categorie: "C (<46 g)", prix: 620 },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8 space-y-12">
      <section className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Tarification des œufs selon la NTC 1240
        </h1>
        <p className="text-gray-600 mb-8">
          Cette tarification est conforme à la classification par poids définie
          dans la Norma Técnica Colombiana (NTC) 1240. Les prix varient selon la
          catégorie de poids et le type de client.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-xl">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 text-left text-gray-700 font-semibold border-b">
                  Catégorie (Poids)
                </th>
                <th className="px-4 py-3 text-left text-gray-700 font-semibold border-b">
                  Particulier (COP)
                </th>
                <th className="px-4 py-3 text-left text-gray-700 font-semibold border-b">
                  Revendeur (COP)
                </th>
                <th className="px-4 py-3 text-left text-gray-700 font-semibold border-b">
                  Grossiste (COP)
                </th>
              </tr>
            </thead>
            <tbody>
              {tarifs.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 border-b text-gray-800">
                    {item.categorie}
                  </td>
                  <td className="px-4 py-3 border-b text-gray-600">
                    {item.particulier.toLocaleString("fr-FR")}
                  </td>
                  <td className="px-4 py-3 border-b text-gray-600">
                    {item.revendeur.toLocaleString("fr-FR")}
                  </td>
                  <td className="px-4 py-3 border-b text-gray-600">
                    {item.grossiste.toLocaleString("fr-FR")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-sm text-gray-500 mt-6">
          * Les prix sont donnés à titre indicatif et peuvent varier selon la
          saison, la région et les coûts de production.
        </p>
      </section>

      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Tarifs au kilo (COP/kg)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {tarifsKilo.map((item, index) => (
            <div
              key={index}
              className="p-4 border rounded-xl text-center bg-gray-50 shadow-sm"
            >
              <h3 className="text-lg font-medium text-gray-800 mb-2">
                {item.type}
              </h3>
              <p className="text-xl font-bold text-green-700">
                {item.prix.toLocaleString("fr-FR")}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Prix de vente à Popayán par calibre
        </h2>
        <table className="min-w-full border border-gray-200 rounded-xl">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-3 text-left text-gray-700 font-semibold border-b">
                Catégorie (Calibre)
              </th>
              <th className="px-4 py-3 text-left text-gray-700 font-semibold border-b">
                Prix moyen (COP/unité)
              </th>
            </tr>
          </thead>
          <tbody>
            {prixVente.map((item, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 border-b text-gray-800">
                  {item.categorie}
                </td>
                <td className="px-4 py-3 border-b text-gray-600">
                  {item.prix.toLocaleString("fr-FR")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
