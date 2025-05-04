"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Search, MapPin, Star, Clock, Filter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {foodCategories, restaurants} from "@/mockups";

export default function HomeScreen() {
    const [deliveryMethod, setDeliveryMethod] = useState("delivery")

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <header className="sticky top-0 z-10 bg-background border-b">
                <div className="container px-4 py-3 max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-3">
                        <h1 className="text-xl font-bold md:text-2xl">FoodPwa</h1>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <MapPin className="h-5 w-5" />
                                <span className="sr-only">Location</span>
                            </Button>
                        </div>
                    </div>

                    <div className="relative mb-3 max-w-2xl mx-auto w-full">
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input placeholder="Search for restaurants or dishes" className="pl-9 rounded-full bg-muted" />
                    </div>

                    <Tabs defaultValue="delivery" className="w-full max-w-xs mx-auto" onValueChange={setDeliveryMethod}>
                        <TabsList className="grid w-full grid-cols-2">
                            <TabsTrigger value="delivery">Delivery</TabsTrigger>
                            <TabsTrigger value="pickup">Pickup</TabsTrigger>
                        </TabsList>
                    </Tabs>
                </div>
            </header>

            <main className="flex-1 container px-4 py-4">
                <section className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-lg font-semibold">Categories</h2>
                        <Button variant="ghost" size="sm">
                            See All
                        </Button>
                    </div>
                    <div className="flex gap-3 overflow-x-auto pb-2 -mx-1 px-1 md:grid md:grid-cols-7 md:overflow-visible">
                        {foodCategories.map((category) => (
                            <div key={category.name} className="flex flex-col items-center min-w-[70px]">
                                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-1 relative overflow-hidden">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        width={64}
                                        height={64}
                                        className="object-cover"
                                    />
                                </div>
                                <span className="text-xs text-center">{category.name}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-6">
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-lg font-semibold">Featured Restaurants</h2>
                        <Button variant="outline" size="sm" className="gap-1">
                            <Filter className="h-4 w-4" />
                            Filters
                        </Button>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {restaurants.map((restaurant) => (
                            <Link href={`/menu/${restaurant.id}`} key={restaurant.id}>
                                <Card className="overflow-hidden h-full">
                                    <div className="relative h-40 w-full">
                                        <Image
                                            src={restaurant.image || "/placeholder.svg"}
                                            alt={restaurant.name}
                                            fill
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover"
                                            priority={restaurant.id === 1}
                                        />
                                        <Badge className="absolute top-2 right-2 bg-primary">{restaurant.promoText}</Badge>
                                    </div>
                                    <CardContent className="p-3">
                                        <div className="flex justify-between items-start mb-1">
                                            <h3 className="font-semibold">{restaurant.name}</h3>
                                            <div className="flex items-center gap-1 bg-primary/10 px-1.5 py-0.5 rounded text-primary">
                                                <Star className="h-3 w-3 fill-primary" />
                                                <span className="text-xs font-medium">{restaurant.rating}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <div className="flex gap-1.5">

                                                {restaurant.tags
                                                    .map((tag) => <span key={tag}>{tag}</span>)
                                                    .reduce(
                                                        (prev, curr) =>
                                                            [
                                                                prev,
                                                                <span key="dot" className="text-muted-foreground">
                                  •
                                </span>,
                                                                curr,
                                                            ] as never,
                                                    )}
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1 mt-1 text-sm">
                                            <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                                            <span>
                        {restaurant.deliveryTime} min • {deliveryMethod === "delivery" ? "0.8 mi" : "Pickup"}
                      </span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}

