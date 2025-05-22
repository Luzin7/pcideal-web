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
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { Slider } from '@/components/ui/slider';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Cpu,
  HardDrive,
  Info,
  MemoryStick,
  MonitorPlay,
  Share2,
  ShoppingCart,
  Zap,
} from 'lucide-react';
import { useState } from 'react';

export default function BuilderPage() {
  const [step, setStep] = useState(1);
  const [budget, setBudget] = useState(1500);
  const [purpose, setPurpose] = useState('gaming');
  const [preference, setPreference] = useState('no-preference');
  const [loading, setLoading] = useState(false);
  const [buildComplete, setBuildComplete] = useState(false);

  const handleNextStep = () => {
    if (step === 2) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setBuildComplete(true);
        setStep(3);
      }, 2000);
    } else {
      setStep(step + 1);
    }
  };

  const handlePrevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] bg-muted/30">
      <div className="container py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between">
            <div className="flex items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  step >= 1 ? 'bg-primary' : 'bg-muted'
                } text-primary-foreground`}
              >
                1
              </div>
              <div
                className={`ml-2 text-sm font-medium ${step >= 1 ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Purpose
              </div>
            </div>
            <div className="flex-1 mx-4">
              <Progress
                value={step === 1 ? 33 : step === 2 ? 66 : 100}
                className="h-2"
              />
            </div>
            <div className="flex items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  step >= 2 ? 'bg-primary' : 'bg-muted'
                } text-primary-foreground`}
              >
                2
              </div>
              <div
                className={`ml-2 text-sm font-medium ${step >= 2 ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Budget
              </div>
            </div>
            <div className="flex-1 mx-4">
              <Progress
                value={step === 1 ? 0 : step === 2 ? 33 : 100}
                className="h-2"
              />
            </div>
            <div className="flex items-center">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full ${
                  step >= 3 ? 'bg-primary' : 'bg-muted'
                } text-primary-foreground`}
              >
                3
              </div>
              <div
                className={`ml-2 text-sm font-medium ${step >= 3 ? 'text-primary' : 'text-muted-foreground'}`}
              >
                Result
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    What will you use your PC for?
                  </CardTitle>
                  <CardDescription>
                    Choose the main purpose of your computer so we can optimize
                    the components.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <RadioGroup
                      value={purpose}
                      onValueChange={setPurpose}
                      className="grid grid-cols-1 md:grid-cols-3 gap-4"
                    >
                      <div className="relative">
                        <RadioGroupItem
                          value="gaming"
                          id="gaming"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="gaming"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-6 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <MonitorPlay className="mb-3 h-8 w-8 text-primary" />
                          <div className="text-center">
                            <h3 className="font-medium">Gaming</h3>
                            <p className="text-sm text-muted-foreground">
                              Optimized for modern games with high frame rates
                            </p>
                          </div>
                        </Label>
                      </div>
                      <div className="relative">
                        <RadioGroupItem
                          value="work"
                          id="work"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="work"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-6 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <Cpu className="mb-3 h-8 w-8 text-primary" />
                          <div className="text-center">
                            <h3 className="font-medium">Work</h3>
                            <p className="text-sm text-muted-foreground">
                              For productivity, multitasking, and office
                              applications
                            </p>
                          </div>
                        </Label>
                      </div>
                      <div className="relative">
                        <RadioGroupItem
                          value="creation"
                          id="creation"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="creation"
                          className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-6 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                        >
                          <HardDrive className="mb-3 h-8 w-8 text-primary" />
                          <div className="text-center">
                            <h3 className="font-medium">Content Creation</h3>
                            <p className="text-sm text-muted-foreground">
                              For video editing, graphic design, and 3D modeling
                            </p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>

                    <div className="space-y-2">
                      <Label htmlFor="preference">
                        Do you have any hardware preferences?
                      </Label>
                      <Select value={preference} onValueChange={setPreference}>
                        <SelectTrigger id="preference">
                          <SelectValue placeholder="Select a preference" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="no-preference">
                            No preference
                          </SelectItem>
                          <SelectItem value="amd">Prefer AMD</SelectItem>
                          <SelectItem value="intel">Prefer Intel</SelectItem>
                          <SelectItem value="nvidia">Prefer NVIDIA</SelectItem>
                        </SelectContent>
                      </Select>
                      <p className="text-xs text-muted-foreground">
                        This helps us tailor recommendations to your
                        preferences, but we'll always prioritize performance and
                        value.
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button
                    onClick={handleNextStep}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Next
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="shadow-sm">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    What's your budget?
                  </CardTitle>
                  <CardDescription>
                    Define how much you want to invest in your PC. We can
                    suggest small variations to optimize value.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <Label htmlFor="budget">Budget ($)</Label>
                      <span className="font-medium text-primary">
                        ${budget.toLocaleString()}
                      </span>
                    </div>
                    <Slider
                      id="budget"
                      min={500}
                      max={5000}
                      step={100}
                      value={[budget]}
                      onValueChange={(value) => setBudget(value[0])}
                      className="py-4"
                    />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>$500</span>
                      <span>$5,000</span>
                    </div>
                  </div>

                  <div className="rounded-lg border p-4 bg-muted/20">
                    <h3 className="font-medium mb-2 flex items-center">
                      <Info className="h-4 w-4 mr-2 text-primary" />
                      Budget Variation
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      We allow a variation of up to 10% in the budget to
                      optimize the cost-benefit of the parts. This means we can
                      suggest configurations between $
                      {Math.floor(budget * 0.9).toLocaleString()} and $
                      {Math.ceil(budget * 1.1).toLocaleString()}.
                    </p>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="allow-variation" defaultChecked />
                      <label
                        htmlFor="allow-variation"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Allow budget variation for better value
                      </label>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={handlePrevStep}>
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                  <Button
                    onClick={handleNextStep}
                    className="bg-primary hover:bg-primary/90"
                  >
                    Generate Ideal PC
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {loading ? (
                <Card className="shadow-sm">
                  <CardContent className="flex flex-col items-center justify-center py-12">
                    <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary mb-4"></div>
                    <h3 className="text-xl font-medium mb-2">
                      Building your ideal PC...
                    </h3>
                    <p className="text-muted-foreground">
                      We're analyzing thousands of combinations to find the best
                      configuration for you.
                    </p>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <Card className="shadow-sm">
                      <CardHeader>
                        <div className="flex justify-between items-center">
                          <div>
                            <CardTitle className="text-2xl">
                              Your Ideal PC
                            </CardTitle>
                            <CardDescription>
                              Optimized configuration for{' '}
                              {purpose === 'gaming'
                                ? 'gaming'
                                : purpose === 'work'
                                  ? 'work'
                                  : 'content creation'}
                            </CardDescription>
                          </div>
                          <Badge className="bg-primary hover:bg-primary/90">
                            Excellent value
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <Tabs defaultValue="components">
                          <TabsList className="grid w-full grid-cols-3">
                            <TabsTrigger value="components">
                              Components
                            </TabsTrigger>
                            <TabsTrigger value="performance">
                              Performance
                            </TabsTrigger>
                            <TabsTrigger value="prices">Prices</TabsTrigger>
                          </TabsList>
                          <TabsContent
                            value="components"
                            className="space-y-4 pt-4"
                          >
                            <div className="space-y-4">
                              <ComponentItem
                                icon={<Cpu className="h-6 w-6" />}
                                name="Processor"
                                value="AMD Ryzen 7 7800X3D"
                                description="8 cores, 16 threads, 5.0GHz"
                                price={449.99}
                                explanation="Excellent gaming performance with high single-core speeds and 3D V-Cache technology."
                              />
                              <ComponentItem
                                icon={<MonitorPlay className="h-6 w-6" />}
                                name="Graphics Card"
                                value="NVIDIA RTX 4070"
                                description="12GB GDDR6X, Ray Tracing"
                                price={599.99}
                                explanation="Great performance for 1440p gaming with DLSS 3 support and ray tracing capabilities."
                              />
                              <ComponentItem
                                icon={<MemoryStick className="h-6 w-6" />}
                                name="Memory"
                                value="32GB DDR5 6000MHz"
                                description="2x16GB, CL36"
                                price={149.99}
                                explanation="Fast DDR5 memory with plenty of capacity for gaming and multitasking."
                              />
                              <ComponentItem
                                icon={<HardDrive className="h-6 w-6" />}
                                name="Storage"
                                value="2TB NVMe SSD"
                                description="PCIe 4.0, 7000MB/s"
                                price={179.99}
                                explanation="High-speed storage with ample capacity for games, applications, and media."
                              />
                              <ComponentItem
                                icon={<Zap className="h-6 w-6" />}
                                name="Power Supply"
                                value="850W 80+ Gold"
                                description="Modular, certified"
                                price={119.99}
                                explanation="Reliable power supply with efficiency certification and headroom for future upgrades."
                              />
                            </div>
                          </TabsContent>
                          <TabsContent value="performance" className="pt-4">
                            <div className="space-y-6">
                              <div>
                                <h3 className="font-medium mb-2">
                                  Gaming Performance (1440p)
                                </h3>
                                <div className="space-y-3">
                                  <PerformanceBar
                                    game="Cyberpunk 2077"
                                    fps={85}
                                  />
                                  <PerformanceBar game="Fortnite" fps={240} />
                                  <PerformanceBar
                                    game="Call of Duty: Warzone"
                                    fps={120}
                                  />
                                  <PerformanceBar game="Valorant" fps={360} />
                                </div>
                              </div>
                              <div>
                                <h3 className="font-medium mb-2">
                                  Application Performance
                                </h3>
                                <div className="space-y-3">
                                  <PerformanceBar
                                    app="Adobe Premiere Pro"
                                    score={92}
                                  />
                                  <PerformanceBar app="Blender" score={88} />
                                  <PerformanceBar app="Photoshop" score={95} />
                                </div>
                              </div>
                            </div>
                          </TabsContent>
                          <TabsContent value="prices" className="pt-4">
                            <div className="space-y-4">
                              <div className="rounded-lg border p-4">
                                <h3 className="font-medium mb-2">
                                  Price Comparison
                                </h3>
                                <div className="space-y-3">
                                  <PriceItem
                                    store="Amazon"
                                    price={1499.95}
                                    bestPrice={true}
                                  />
                                  <PriceItem store="Newegg" price={1529.99} />
                                  <PriceItem store="Best Buy" price={1549.99} />
                                  <PriceItem
                                    store="Micro Center"
                                    price={1519.99}
                                  />
                                </div>
                              </div>
                              <div className="rounded-lg border p-4 bg-muted/20">
                                <h3 className="font-medium mb-2">Savings</h3>
                                <p className="text-sm text-muted-foreground">
                                  This configuration is{' '}
                                  <span className="text-green-500 font-medium">
                                    $0.05 below
                                  </span>{' '}
                                  your budget of ${budget.toLocaleString()}.
                                </p>
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" onClick={handlePrevStep}>
                          <ArrowLeft className="mr-2 h-4 w-4" />
                          Adjust Budget
                        </Button>
                        <div className="flex space-x-2">
                          <Button variant="outline">
                            <Share2 className="mr-2 h-4 w-4" />
                            Share
                          </Button>
                          <Button className="bg-primary hover:bg-primary/90">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Buy Components
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </div>
                  <div>
                    <Card className="shadow-sm">
                      <CardHeader>
                        <CardTitle>Summary</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Purpose
                            </span>
                            <span className="font-medium">
                              {purpose === 'gaming'
                                ? 'Gaming'
                                : purpose === 'work'
                                  ? 'Work'
                                  : 'Content Creation'}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Preference
                            </span>
                            <span className="font-medium">
                              {preference === 'no-preference'
                                ? 'No Preference'
                                : preference === 'amd'
                                  ? 'AMD'
                                  : preference === 'intel'
                                    ? 'Intel'
                                    : 'NVIDIA'}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Budget
                            </span>
                            <span className="font-medium">
                              ${budget.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Total</span>
                            <span className="font-medium">$1,499.95</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">
                              Savings
                            </span>
                            <span className="font-medium text-green-500">
                              $0.05
                            </span>
                          </div>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-medium mb-2">Compatibility</h3>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <Check className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-sm">
                                All components are compatible
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Check className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-sm">
                                Power supply has adequate wattage
                              </span>
                            </div>
                            <div className="flex items-center">
                              <Check className="h-4 w-4 text-green-500 mr-2" />
                              <span className="text-sm">
                                Sufficient cooling
                              </span>
                            </div>
                          </div>
                        </div>
                        <Separator />
                        <div>
                          <h3 className="font-medium mb-2">Alternatives</h3>
                          <div className="space-y-2">
                            <Button
                              variant="outline"
                              className="w-full justify-start"
                            >
                              <span className="mr-auto">Budget Version</span>
                              <span className="text-green-500">-$300</span>
                            </Button>
                            <Button
                              variant="outline"
                              className="w-full justify-start"
                            >
                              <span className="mr-auto">Premium Version</span>
                              <span className="text-red-500">+$500</span>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function ComponentItem({ icon, name, value, description, price, explanation }) {
  return (
    <div className="flex items-center space-x-4 rounded-lg border p-3 transition-all hover:border-primary hover:bg-primary/5">
      <div className="rounded-full p-2 bg-primary/10 text-primary">{icon}</div>
      <div className="flex-1">
        <div className="flex justify-between">
          <p className="font-medium">{name}</p>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 text-muted-foreground" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-xs max-w-[200px]">{explanation}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <p className="text-sm">{value}</p>
        <p className="text-xs text-muted-foreground">{description}</p>
      </div>
      <div className="text-right">
        <p className="font-medium">${price.toLocaleString()}</p>
        <a href="#" className="text-xs text-primary hover:underline">
          View details
        </a>
      </div>
    </div>
  );
}

function PerformanceBar({ game, fps, app, score }) {
  const value = fps || score;
  const label = game || app;
  const metric = fps ? 'FPS' : 'Score';

  let color = 'bg-red-500';
  if (value > 60 && fps) color = 'bg-yellow-500';
  if (value > 100 && fps) color = 'bg-green-500';
  if (value > 80 && !fps) color = 'bg-green-500';
  if (value > 60 && !fps) color = 'bg-yellow-500';

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span className="font-medium">
          {value} {metric}
        </span>
      </div>
      <div className="h-2 w-full rounded-full bg-muted">
        <div
          className={`h-2 rounded-full ${color}`}
          style={{ width: `${fps ? Math.min(value / 4, 100) : value}%` }}
        ></div>
      </div>
    </div>
  );
}

function PriceItem({ store, price, bestPrice = false }) {
  return (
    <div
      className={`flex justify-between items-center p-2 rounded ${bestPrice ? 'bg-primary/10' : ''}`}
    >
      <div className="flex items-center">
        {bestPrice && <Check className="h-4 w-4 text-primary mr-2" />}
        <span>{store}</span>
      </div>
      <div className="flex items-center">
        <span className={`font-medium ${bestPrice ? 'text-primary' : ''}`}>
          ${price.toLocaleString()}
        </span>
        {bestPrice && (
          <Badge
            variant="outline"
            className="ml-2 text-xs border-primary text-primary"
          >
            Best price
          </Badge>
        )}
      </div>
    </div>
  );
}
