'use client';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Cpu, HardDrive, MemoryStick, MonitorPlay } from 'lucide-react';
import { useState } from 'react';

export default function ComponentesPage() {
  const [priceRange, setPriceRange] = useState([0, 5000]);

  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <div className="md:w-1/4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Filtros</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Tipo de Componente</Label>
                <div className="space-y-1">
                  {[
                    'Processadores',
                    'Placas de Vídeo',
                    'Memórias',
                    'Armazenamento',
                    'Fontes',
                    'Placas-mãe',
                    'Gabinetes',
                    'Refrigeração',
                  ].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={type} />
                      <label htmlFor={type} className="text-sm">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Faixa de Preço</Label>
                <div className="pt-4">
                  <Slider
                    value={priceRange}
                    min={0}
                    max={10000}
                    step={100}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm">R$ {priceRange[0]}</span>
                    <span className="text-sm">R$ {priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Marca</Label>
                <div className="space-y-1">
                  {[
                    'AMD',
                    'Intel',
                    'NVIDIA',
                    'Corsair',
                    'ASUS',
                    'MSI',
                    'Gigabyte',
                    'EVGA',
                  ].map((brand) => (
                    <div key={brand} className="flex items-center space-x-2">
                      <Checkbox id={brand} />
                      <label htmlFor={brand} className="text-sm">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90">
                Aplicar Filtros
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-3/4 space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Componentes</CardTitle>
                  <CardDescription>
                    Navegue e compare componentes de PC
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Input placeholder="Buscar componentes..." className="w-60" />
                  <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option>Ordenar por: Popularidade</option>
                    <option>Preço: Menor para Maior</option>
                    <option>Preço: Maior para Menor</option>
                    <option>Mais Recentes</option>
                  </select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="processors">
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="processors">Processadores</TabsTrigger>
                  <TabsTrigger value="graphics">Placas de Vídeo</TabsTrigger>
                  <TabsTrigger value="memory">Memórias</TabsTrigger>
                  <TabsTrigger value="storage">Armazenamento</TabsTrigger>
                </TabsList>

                <TabsContent value="processors" className="space-y-4">
                  {[
                    {
                      icon: <Cpu />,
                      name: 'AMD Ryzen 7 5800X',
                      specs: '8 núcleos, 16 threads, 3.8GHz (4.7GHz Turbo)',
                      price: 1499.99,
                      rating: 4.9,
                      reviews: 256,
                      badge: 'Melhor para Jogos',
                    },
                    {
                      icon: <Cpu />,
                      name: 'Intel Core i7-13700K',
                      specs: '16 núcleos (8P+8E), 24 threads, 5.4GHz',
                      price: 2099.99,
                      rating: 4.7,
                      reviews: 189,
                      badge: 'Ótimo Custo-benefício',
                    },
                    {
                      icon: <Cpu />,
                      name: 'AMD Ryzen 9 7950X',
                      specs: '16 núcleos, 32 threads, 5.7GHz',
                      price: 3599.99,
                      rating: 4.8,
                      reviews: 142,
                      badge: 'Alto Desempenho',
                    },
                  ].map((component, index) => (
                    <ComponentCard key={index} component={component} />
                  ))}
                </TabsContent>

                <TabsContent value="graphics" className="space-y-4">
                  {[
                    {
                      icon: <MonitorPlay />,
                      name: 'NVIDIA RTX 4060',
                      specs: '8GB GDDR6, 2460MHz',
                      price: 2199.99,
                      rating: 4.8,
                      reviews: 203,
                      badge: 'Melhor Custo-benefício',
                    },
                    {
                      icon: <MonitorPlay />,
                      name: 'AMD Radeon RX 7600',
                      specs: '8GB GDDR6, 2250MHz',
                      price: 1899.99,
                      rating: 4.6,
                      reviews: 167,
                      badge: null,
                    },
                    {
                      icon: <MonitorPlay />,
                      name: 'NVIDIA RTX 4070',
                      specs: '12GB GDDR6X, 2610MHz',
                      price: 3999.99,
                      rating: 4.9,
                      reviews: 118,
                      badge: 'Premium',
                    },
                  ].map((component, index) => (
                    <ComponentCard key={index} component={component} />
                  ))}
                </TabsContent>

                <TabsContent value="memory" className="space-y-4">
                  {[
                    {
                      icon: <MemoryStick />,
                      name: 'Corsair Vengeance RGB 32GB',
                      specs: 'DDR4-3600, CL18, 2x16GB',
                      price: 649.99,
                      rating: 4.7,
                      reviews: 189,
                      badge: 'Popular',
                    },
                    {
                      icon: <MemoryStick />,
                      name: 'G.Skill Trident Z5 RGB 32GB',
                      specs: 'DDR5-6000, CL36, 2x16GB',
                      price: 1099.99,
                      rating: 4.8,
                      reviews: 142,
                      badge: 'Alto Desempenho',
                    },
                    {
                      icon: <MemoryStick />,
                      name: 'Kingston FURY Beast 32GB',
                      specs: 'DDR4-3200, CL16, 2x16GB',
                      price: 549.99,
                      rating: 4.6,
                      reviews: 156,
                      badge: 'Ótimo Custo-benefício',
                    },
                  ].map((component, index) => (
                    <ComponentCard key={index} component={component} />
                  ))}
                </TabsContent>

                <TabsContent value="storage" className="space-y-4">
                  {[
                    {
                      icon: <HardDrive />,
                      name: 'Samsung 990 PRO 2TB',
                      specs: 'NVMe PCIe 4.0, 7450/6900 MB/s',
                      price: 1299.99,
                      rating: 4.9,
                      reviews: 231,
                      badge: 'Melhor Desempenho',
                    },
                    {
                      icon: <HardDrive />,
                      name: 'WD Black SN850X 1TB',
                      specs: 'NVMe PCIe 4.0, 7300/6600 MB/s',
                      price: 799.99,
                      rating: 4.8,
                      reviews: 187,
                      badge: null,
                    },
                    {
                      icon: <HardDrive />,
                      name: 'Kingston NV2 2TB',
                      specs: 'NVMe PCIe 4.0, 3500/2800 MB/s',
                      price: 599.99,
                      rating: 4.6,
                      reviews: 142,
                      badge: 'Econômico',
                    },
                  ].map((component, index) => (
                    <ComponentCard key={index} component={component} />
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Mostrando 3 de 156 componentes
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Anterior
                </Button>
                <Button variant="outline" size="sm" className="px-3">
                  1
                </Button>
                <Button variant="outline" size="sm" className="px-3">
                  2
                </Button>
                <Button variant="outline" size="sm" className="px-3">
                  3
                </Button>
                <Button variant="outline" size="sm">
                  Próximo
                </Button>
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}

function ComponentCard({ component }) {
  return (
    <Card className="overflow-hidden transition-all hover-card">
      <CardContent className="p-0">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center justify-center p-6 bg-muted/20 md:w-1/5">
            <div className="rounded-full p-4 bg-primary/10 text-primary">
              {component.icon}
            </div>
          </div>
          <div className="p-6 flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-bold text-lg">{component.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {component.specs}
                </p>
              </div>
              <div className="text-right">
                <div className="text-lg font-bold">
                  R$ {component.price.toLocaleString('pt-BR')}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1">
                    {component.rating} ({component.reviews} avaliações)
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <div>
                {component.badge && (
                  <Badge className="bg-primary text-primary-foreground">
                    {component.badge}
                  </Badge>
                )}
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  Comparar
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  Ver Detalhes
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
