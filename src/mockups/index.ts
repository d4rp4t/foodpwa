export const categories = [
    { id: "popular", name: "Popular" },
    { id: "burgers", name: "Burgers" },
    { id: "sides", name: "Sides" },
    { id: "drinks", name: "Drinks" },
    { id: "desserts", name: "Desserts" },
]

export const menuItems = [
    {
        id: 1,
        name: "Classic Cheeseburger",
        price: 8.99,
        image: "/dishes/cheeseburger.png?height=200&width=200&text=Cheeseburger",
        category: "burgers",
        popular: true,
        rating: 4.8,
        description: "Juicy beef patty with cheese, lettuce, tomato, and special sauce",
    },
    {
        id: 2,
        name: "Double Bacon Burger",
        price: 12.99,
        image: "/dishes/double_bacon_burger.png?height=200&width=200&text=Bacon+Burger",
        category: "burgers",
        popular: true,
        rating: 4.9,
        description: "Double beef patty with crispy bacon, cheese, and BBQ sauce",
    },
    {
        id: 3,
        name: "Veggie Burger",
        price: 9.99,
        image: "/dishes/veggie_burger.png?height=200&width=200&text=Veggie+Burger",
        category: "burgers",
        popular: false,
        rating: 4.6,
        description: "Plant-based patty with fresh vegetables and vegan mayo",
    },
    {
        id: 4,
        name: "French Fries",
        price: 3.99,
        image: "/dishes/french_fries.png?height=200&width=200&text=Fries",
        category: "sides",
        popular: true,
        rating: 4.7,
        description: "Crispy golden fries with sea salt",
    },
    {
        id: 5,
        name: "Onion Rings",
        price: 4.99,
        image: "/dishes/onion_rings.png?height=200&width=200&text=Onion+Rings",
        category: "sides",
        popular: false,
        rating: 4.5,
        description: "Crispy battered onion rings",
    },
    {
        id: 6,
        name: "Chocolate Shake",
        price: 5.99,
        image: "/dishes/chocolate_shake.png?height=200&width=200&text=Chocolate+Shake",
        category: "drinks",
        popular: true,
        rating: 4.8,
        description: "Rich and creamy chocolate milkshake",
    },
]

export const restaurants = [
    {
        id: 1,
        name: "Burger Palace",
        image: "/places/burger_palace.png?height=200&width=400&text=Burger+Palace",
        rating: 4.8,
        deliveryTime: "15-25",
        tags: ["Burgers", "American"],
        promoText: "Free Delivery",
    },
    {
        id: 2,
        name: "Pizza Heaven",
        image: "/places/pizza_heaven.png?height=200&width=400&text=Pizza+Heaven",
        rating: 4.6,
        deliveryTime: "20-30",
        tags: ["Pizza", "Italian"],
        promoText: "20% OFF",
    },
    {
        id: 3,
        name: "Sushi World",
        image: "/places/sushi_world.png?height=200&width=400&text=Sushi+World",
        rating: 4.9,
        deliveryTime: "25-35",
        tags: ["Sushi", "Japanese"],
        promoText: "Free Delivery",
    },
    {
        id: 4,
        name: "Taco Fiesta",
        image: "/places/taco_fiesta.png?height=200&width=400&text=Taco+Fiesta",
        rating: 4.7,
        deliveryTime: "15-25",
        tags: ["Mexican", "Tacos"],
        promoText: "Buy 1 Get 1",
    },
]

export const foodCategories: { name: string; image: string }[] =
[
    {
        name: "Pizza",
        image: `/categories/pizza.png?height=64&width=64&text=Pizza}`
    },{
        name: "Burgers",
        image: `/categories/burgers.png?height=64&width=64&text=Burgers}`
    },{
        name: "Sushi",
        image: `/categories/sushi.png?height=64&width=64&text=Sushi}`
    },{
        name: "Salads",
        image: `/categories/salads.png?height=64&width=64&text=Salads}`
    },{
        name: "Mexican",
        image: `/categories/mexican.png?height=64&width=64&text=Mexican}`
    },
    {
        name: "Desserts",
        image: `/categories/desserts.png?height=64&width=64&text=Desserts}`
    },{
        name: "Indian",
        image: `/categories/indian.png?height=64&width=64&text=Indian}`
    }]