"use client"

import React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Leaf, Droplet, Box, GitPullRequest, Bug } from "lucide-react"

export default function Page() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-3xl font-bold text-green-700">Hacienda Esmeralda</h1>
      <p className="text-gray-700 max-w-3xl"> Exploitation durable à Popayán (Cauca, Colombie) sur 2 000 m², pensée en économie circulaire et avec une approche zéro déchet. Notre serre de 200 m² accueille des cultures de légumes en bacs ou en pleine terre, ainsi qu’un système d’aquaponie. Les micropousses, les champignons et les larves de BSF sont produits dans des bâtiments dédiés, pour une qualité constante et une meilleure maîtrise sanitaire. Sur le site, 500 poules pondeuses sont élevées sans parcours plein air, selon un protocole d’alimentation et de suivi rigoureux. Enfin, 3 ruches assurent la pollinisation et une production de miel, renforçant notre autonomie et l’accès à une alimentation de qualité à prix bas. </p>

      <Separator />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex items-center space-x-2">
            <Leaf className="w-5 h-5 text-green-600" />
            <CardTitle>Cultures en serre</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Serre de 200 m² pour cultures en **bacs ou au sol** et **aquaponie**. Optimisation de la lumière et température pour production maximale.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex items-center space-x-2">
            <Droplet className="w-5 h-5 text-blue-500" />
            <CardTitle>Aquaponie</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Système intégré avec **tilapia**, utilisant les nutriments des poissons pour la culture hydroponique dans la serre.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex items-center space-x-2">
            <Box className="w-5 h-5 text-yellow-500" />
            <CardTitle>Élevage de Poules</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              500 poules pondeuses élevées sur le terrain, production d'œufs, alimentation partiellement à base de BSF. Pas de parcours plein air.
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex items-center space-x-2">
            <GitPullRequest className="w-5 h-5 text-purple-500" />
            <CardTitle>Micropousses, Champignons & BSF</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Ces productions sont dans **bâtiments dédiés**, séparés de la serre, pour un contrôle optimal des conditions (humidité, température, hygiène).
            </CardDescription>
          </CardContent>
        </Card>

        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader className="flex items-center space-x-2">
            <Bug className="w-5 h-5 text-orange-400" />
            <CardTitle>Ruches</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              3 ruches intégrées pour pollinisation et production de miel, soutenant la biodiversité et l’autonomie alimentaire.
            </CardDescription>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
