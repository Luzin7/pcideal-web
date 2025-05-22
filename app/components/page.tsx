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
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Cpu, HardDrive, MemoryStick, MonitorPlay } from 'lucide-react';
import { useState } from 'react';

export default function ComponentsPage() {
  const [priceRange, setPriceRange] = useState([0, 1000]);

  return (
    <div className="container py-8">
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
        <div className="md:w-1/4 space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label>Component Type</Label>
                <div className="space-y-1">
                  {[
                    'Processors',
                    'Graphics Cards',
                    'Memory',
                    'Storage',
                    'Power Supplies',
                    'Motherboards',
                    'Cases',
                    'Cooling',
                  ].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id={type}
                        className="rounded border-primary text-primary focus:ring-primary"
                      />
                      <label htmlFor={type} className="text-sm">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Price Range</Label>
                <div className="pt-4">
                  <Slider
                    value={priceRange}
                    min={0}
                    max={2000}
                    step={10}
                    onValueChange={setPriceRange}
                  />
                  <div className="flex items-center justify-between mt-2">
                    <span className="text-sm">${priceRange[0]}</span>
                    <span className="text-sm">${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              <Separator />

              <div className="space-y-2">
                <Label>Brand</Label>
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
                      <input
                        type="checkbox"
                        id={brand}
                        className="rounded border-primary text-primary focus:ring-primary"
                      />
                      <label htmlFor={brand} className="text-sm">
                        {brand}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90">
                Apply Filters
              </Button>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-3/4 space-y-4">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <div>
                  <CardTitle>Components</CardTitle>
                  <CardDescription>
                    Browse and compare PC components
                  </CardDescription>
                </div>
                <div className="flex items-center space-x-2">
                  <Input placeholder="Search components..." className="w-60" />
                  <select className="rounded-md border border-input bg-background px-3 py-2 text-sm">
                    <option>Sort by: Popularity</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="processors">
                <TabsList className="grid grid-cols-4 mb-4">
                  <TabsTrigger value="processors">Processors</TabsTrigger>
                  <TabsTrigger value="graphics">Graphics Cards</TabsTrigger>
                  <TabsTrigger value="memory">Memory</TabsTrigger>
                  <TabsTrigger value="storage">Storage</TabsTrigger>
                </TabsList>

                <TabsContent value="processors" className="space-y-4">
                  {[
                    {
                      icon: <Cpu />,
                      name: 'AMD Ryzen 7 7800X3D',
                      specs: '8 cores, 16 threads, 5.0GHz',
                      price: 449.99,
                      rating: 4.9,
                      reviews: 256,
                      badge: 'Best for Gaming',
                    },
                    {
                      icon: <Cpu />,
                      name: 'Intel Core i7-13700K',
                      specs: '16 cores (8P+8E), 24 threads, 5.4GHz',
                      price: 409.99,
                      rating: 4.7,
                      reviews: 189,
                      badge: 'Great Value',
                    },
                    {
                      icon: <Cpu />,
                      name: 'AMD Ryzen 9 7950X',
                      specs: '16 cores, 32 threads, 5.7GHz',
                      price: 599.99,
                      rating: 4.8,
                      reviews: 142,
                      badge: 'High Performance',
                    },
                  ].map((component, index) => (
                    <ComponentCard key={index} component={component} />
                  ))}
                </TabsContent>

                <TabsContent value="graphics" className="space-y-4">
                  {[
                    {
                      icon: <MonitorPlay />,
                      name: 'NVIDIA RTX 4070',
                      specs: '12GB GDDR6X, 2475MHz',
                      price: 599.99,
                      rating: 4.8,
                      reviews: 203,
                      badge: 'Best Value',
                    },
                    {
                      icon: <MonitorPlay />,
                      name: 'AMD Radeon RX 7800 XT',
                      specs: '16GB GDDR6, 2430MHz',
                      price: 549.99,
                      rating: 4.6,
                      reviews: 167,
                      badge: null,
                    },
                    {
                      icon: <MonitorPlay />,
                      name: 'NVIDIA RTX 4080',
                      specs: '16GB GDDR6X, 2505MHz',
                      price: 1199.99,
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
                      specs: 'DDR5-6000, CL36, 2x16GB',
                      price: 149.99,
                      rating: 4.7,
                      reviews: 189,
                      badge: 'Popular',
                    },
                    {
                      icon: <MemoryStick />,
                      name: 'G.Skill Trident Z5 RGB 32GB',
                      specs: 'DDR5-6400, CL32, 2x16GB',
                      price: 179.99,
                      rating: 4.8,
                      reviews: 142,
                      badge: 'High Performance',
                    },
                    {
                      icon: <MemoryStick />,
                      name: 'Kingston FURY Beast 32GB',
                      specs: 'DDR5-5600, CL40, 2x16GB',
                      price: 129.99,
                      rating: 4.6,
                      reviews: 156,
                      badge: 'Great Value',
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
                      price: 179.99,
                      rating: 4.9,
                      reviews: 231,
                      badge: 'Best Performance',
                    },
                    {
                      icon: <HardDrive />,
                      name: 'WD Black SN850X 1TB',
                      specs: 'NVMe PCIe 4.0, 7300/6600 MB/s',
                      price: 129.99,
                      rating: 4.8,
                      reviews: 187,
                      badge: null,
                    },
                    {
                      icon: <HardDrive />,
                      name: 'Crucial P3 Plus 2TB',
                      specs: 'NVMe PCIe 4.0, 5000/4200 MB/s',
                      price: 114.99,
                      rating: 4.6,
                      reviews: 142,
                      badge: 'Budget Pick',
                    },
                  ].map((component, index) => (
                    <ComponentCard key={index} component={component} />
                  ))}
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
              <div className="text-sm text-muted-foreground">
                Showing 3 of 156 components
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" disabled>
                  Previous
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
                  Next
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
                <div className="text-lg font-bold">${component.price}</div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <span className="text-yellow-500">★</span>
                  <span className="ml-1">
                    {component.rating} ({component.reviews} reviews)
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
                  Compare
                </Button>
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
