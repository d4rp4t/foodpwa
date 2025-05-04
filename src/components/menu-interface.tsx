"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowLeft, Search, Filter, Plus, Star } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import {categories, menuItems} from "@/mockups";

export default function MenuInterface() {
    const [activeCategory, setActiveCategory] = useState("popular")

    const filteredItems =
        activeCategory === "popular"
            ? menuItems.filter((item) => item.popular)
            : menuItems.filter((item) => item.category === activeCategory)

    const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <header className="sticky top-0 z-10 bg-background border-b">
                <div className="container px-4 py-3 max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                            <Link href="/">
                                <Button variant="ghost" size="icon" className="rounded-full">
                                    <ArrowLeft className="h-5 w-5" />
                                    <span className="sr-only">Back</span>
                                </Button>
                            </Link>
                            <h1 className="text-xl font-bold md:text-2xl">Burger Palace</h1>
                        </div>
                        <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="rounded-full">
                                <Search className="h-5 w-5" />
                                <span className="sr-only">Search</span>
                            </Button>
                        </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-primary" />
                            <span className="font-medium">4.8</span>
                            <span className="text-muted-foreground">(200+)</span>
                            <span className="text-muted-foreground mx-1">•</span>
                            <span className="text-muted-foreground">0.8 mi</span>
                        </div>
                        <Badge variant="outline" className="gap-1">
                            <span className="bg-green-500 h-2 w-2 rounded-full"></span>
                            Open
                        </Badge>
                    </div>

                    <div className="flex justify-between items-center mb-2">
                        <Button variant="outline" size="sm" className="gap-1">
                            <Filter className="h-4 w-4" />
                            Filters
                        </Button>
                        <div className="flex gap-2">
                            <Button variant="outline" size="sm">
                                Price
                            </Button>
                            <Button variant="outline" size="sm">
                                Rating
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            <ScrollArea className="border-b">
                <div className="flex p-2 max-w-4xl mx-auto justify-center">
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            variant={activeCategory === category.id ? "default" : "ghost"}
                            className="rounded-full px-4 whitespace-nowrap mx-1"
                            onClick={() => setActiveCategory(category.id)}
                        >
                            {category.name}
                        </Button>
                    ))}
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>

            <div className="flex flex-col lg:flex-row flex-1">
                {isDesktop && (
                    <div className="w-64 border-r p-4 hidden lg:block">
                        <h2 className="font-semibold mb-4">Categories</h2>
                        <div className="space-y-1">
                            {categories.map((category) => (
                                <Button
                                    key={category.id}
                                    variant={activeCategory === category.id ? "default" : "ghost"}
                                    className="w-full justify-start"
                                    onClick={() => setActiveCategory(category.id)}
                                >
                                    {category.name}
                                </Button>
                            ))}
                        </div>
                    </div>
                )}

                <main className="flex-1 container px-4 py-4 max-w-7xl mx-auto">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
                        {filteredItems.map((item) => (
                            <Card key={item.id} className="overflow-hidden">
                                <div className="flex h-full">
                                    <div className="flex-1 p-3">
                                        <h3 className="font-semibold mb-1">{item.name}</h3>
                                        <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{item.description}</p>
                                        <div className="flex items-center justify-between mt-auto">
                                            <span className="font-semibold text-primary">${item.price.toFixed(2)}</span>
                                            <Button size="sm" className="rounded-full h-8 w-8 p-0">
                                                <Plus className="h-4 w-4" />
                                                <span className="sr-only">Add to cart</span>
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="relative h-24 w-24 my-2 mr-2 rounded-md overflow-hidden">
                                        <Image
                                            src={item.image || "/placeholder.svg"}
                                            alt={item.name}
                                            fill
                                            sizes="(max-width: 768px) 96px, 120px"
                                            className="object-cover"
                                        />
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </main>
            </div>

            <div className="sticky bottom-0 p-4 bg-background border-t">
                <Button className="w-full max-w-md mx-auto block">View Cart (3 items)</Button>
            </div>
        </div>
    )
}

