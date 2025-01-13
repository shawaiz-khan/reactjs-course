const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        description: "High-quality wireless headphones with noise cancellation and long battery life.",
        price: 99.99,
        category: "Electronics",
        stock: 50,
        rating: 4.5,
        images: "https://example.com/images/headphones2.jpg",
        tags: ["wireless", "audio", "headphones"],
        reviews: [
            { user: "Alice", comment: "Great sound quality!", rating: 5 },
            { user: "Bob", comment: "Comfortable and good battery life.", rating: 4 }
        ]
    },
    {
        id: 2,
        name: "Smartphone",
        description: "Latest generation smartphone with an advanced camera and fast performance.",
        price: 699.99,
        category: "Electronics",
        stock: 30,
        rating: 4.8,
        images: "https://example.com/images/smartphone2.jpg",
        tags: ["smartphone", "mobile", "tech"],
        reviews: [
            { user: "Charlie", comment: "Best phone I've ever owned!", rating: 5 },
            { user: "Dana", comment: "Camera quality is amazing.", rating: 5 }
        ]
    },
    {
        id: 3,
        name: "Running Shoes",
        description: "Lightweight and durable running shoes designed for comfort and performance.",
        price: 59.99,
        category: "Sports",
        stock: 100,
        rating: 4.2,
        images: "https://example.com/images/shoes2.jpg",
        tags: ["shoes", "running", "sports"],
        reviews: [
            { user: "Eve", comment: "Very comfortable for daily runs.", rating: 4 },
            { user: "Frank", comment: "Good value for the price.", rating: 4 }
        ]
    },
    {
        id: 4,
        name: "Office Chair",
        description: "Ergonomic office chair with adjustable height and lumbar support.",
        price: 129.99,
        category: "Furniture",
        stock: 20,
        rating: 4.3,
        images: "https://example.com/images/chair2.jpg",
        tags: ["office", "furniture", "chair"],
        reviews: [
            { user: "Grace", comment: "Really helps with my back pain!", rating: 5 },
            { user: "Hank", comment: "Assembly was a bit tricky.", rating: 3 }
        ]
    },
    {
        id: 5,
        name: "Coffee Maker",
        description: "Automatic coffee maker with multiple brewing options and a built-in grinder.",
        price: 89.99,
        category: "Kitchen",
        stock: 40,
        rating: 4.7,
        images: "https://example.com/images/coffee2.jpg",
        tags: ["coffee", "kitchen", "appliance"],
        reviews: [
            { user: "Ivy", comment: "Makes the perfect cup every time!", rating: 5 },
            { user: "Jack", comment: "Love the grinder feature.", rating: 4 }
        ]
    }
];

export default products;