const { PrismaClient, VoteType } = require("@prisma/client");

const db = new PrismaClient();

async function generateReviews() {
  try {
    await db.review.createMany({
      data: [
        {
          text: "Absolutely loved the ambiance and the flavorful dishes. A culinary delight in every bite!",
          restaurantId: "64dd3a257cb21420335fbdbf",
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Alice",
          rating: 5,
        },
        {
          text: "The service was impeccable, and the presentation of each dish was like a work of art.",
          restaurantId: "64dd3a257cb21420335fbdbf",
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Bob",
          rating: 4,
        },
        {
          text: "I was blown away by the unique fusion of flavors. A must-visit for food enthusiasts!",
          restaurantId: "64dd3a257cb21420335fbdbf",
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Claire",
          rating: 5,
        },
        {
          text: "The portions were generous, and the menu catered to a variety of tastes. Thumbs up!",
          restaurantId: "64dd3a257cb21420335fbdbf",
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "David",
          rating: 4,
        },
        {
          text: "Had a wonderful evening here. The staff's attention to detail made the experience memorable.",
          restaurantId: "64dd3a257cb21420335fbdbf",
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Eva",
          rating: 5,
        },
        {
          text: "The dessert selection alone is worth a visit. A sweet paradise for those with a sweet tooth!",
          restaurantId: "64dd3a257cb21420335fbdbf",
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Frank",
          rating: 4,
        },
        {
          text: "A hidden gem with a cozy atmosphere. The staff's passion for food truly shines through.",
          restaurantId: "64dd3a257cb21420335fbdbf",
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Grace",
          rating: 5,
        },
        {
          text: "Savoring the exquisite dishes felt like a culinary journey around the world. Remarkable!",
          restaurantId: "64dd3a257cb21420335fbdbf",
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Henry",
          rating: 5,
        },
        {
          text: "The menu had options for everyone - from vegetarians to meat lovers. A crowd-pleaser!",
          restaurantId: "64dd3a257cb21420335fbdbf",
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Ivy",
          rating: 4,
        },
        {
          text: "The restaurant oozes elegance, and the food is a testament to the chef's creativity.",
          restaurantId: "64dd3a257cb21420335fbdbf",
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Jack",
          rating: 4,
        },
        {
          text: "An explosion of flavors in every dish. This place takes taste buds on an adventure.",
          restaurantId: "64dd3a257cb21420335fbdbf",
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Karen",
          rating: 5,
        },
        {
          text: "From appetizers to main course, each dish had a distinct taste that left us wanting more.",
          restaurantId: "64dd3a257cb21420335fbdbf",
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Liam",
          rating: 4,
        },
        {
          text: "The cocktails were expertly crafted, perfectly complementing the delightful cuisine.",
          restaurantId: "64dd3a257cb21420335fbdbf",
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Mia",
          rating: 5,
        },
        {
          text: "Friendly staff, cozy setting, and a menu that surprises and delights. Highly recommended!",
          restaurantId: "64dd3a257cb21420335fbdbf",
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Noah",
          rating: 5,
        },
        {
          text: "Delicious food in a relaxed setting. A great spot to unwind with friends and family.",
          restaurantId: "64dd3a257cb21420335fbdbf",
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Olivia",
          rating: 4,
        },
        {
          text: "The attention to dietary preferences was impressive, ensuring everyone left satisfied.",
          restaurantId: "64dd3a257cb21420335fbdbf",
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Peter",
          rating: 4,
        },
        {
          text: "A gastronomic paradise where every bite tells a story of dedication and skill.",
          restaurantId: "64dd3a257cb21420335fbdbf",
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Quinn",
          rating: 5,
        },
        {
          text: "The balance of flavors in every dish showcased the chef's expertise in culinary arts.",
          restaurantId: "64dd3a257cb21420335fbdbf",
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Ryan",
          rating: 5,
        },
        {
          text: "An unforgettable dining experience. This place sets the bar high for food and service.",
          restaurantId: "64dd3a257cb21420335fbdbf",
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Sara",
          rating: 5,
        },
        {
          text: "Absolutely loved the food. The flavors were amazing, and the staff was friendly.",
          restaurantId: "64dd3a257cb21420335fbdbf",
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Tom",
          rating: 4,
        },
      ],
    });
  } catch (error) {
    console.error("Error seeding default categories:", error);
  } finally {
    await db.$disconnect();
  }
}

async function generateRestaurants() {
  try {
    await db.restaurant.createMany({
      data: [
        {
          name: "Taste of Tokyo",
          description:
            "Journey to Japan through flavors at Taste of Tokyo. Our menu showcases the art of sushi, ramen, and traditional dishes that transport you to the heart of Tokyo's bustling culinary scene.",
          location: "Los Angeles, CA",
          tags: ["Japanese Cuisine", "Sushi", "Ramen"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Alice",
        },
        {
          name: "Mama Mia's Pizzeria",
          description:
            "Indulge in authentic Italian pizza at Mama Mia's Pizzeria. Our menu boasts hand-tossed dough, rich tomato sauce, and a variety of toppings that pay homage to the soul of Italy.",
          location: "New York, NY",
          tags: ["Italian", "Pizza", "Family-Friendly"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Bob",
        },
        {
          name: "Thai Orchid",
          description:
            "Experience the vibrant flavors of Thailand at Thai Orchid. Our menu features aromatic curries, zesty stir-fries, and dishes that capture the essence of Thai street food.",
          location: "Houston, TX",
          tags: ["Thai Cuisine", "Spicy", "Street Food"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Claire",
        },
        {
          name: "Casa de Tapas",
          description:
            "Savor the lively spirit of Spain at Casa de Tapas. Our menu offers a tapestry of tapas, paellas, and Spanish wines that celebrate the art of sharing and camaraderie.",
          location: "Miami, FL",
          tags: ["Spanish", "Tapas", "Wine Bar"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "David",
        },
        {
          name: "Gourmet Garden",
          description:
            "Delight in the symphony of gourmet flavors at Gourmet Garden. Our menu embraces seasonal ingredients and culinary finesse to create dishes that elevate dining to an art form.",
          location: "San Francisco, CA",
          tags: ["Gourmet", "Seasonal", "Elegant Dining"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Eva",
        },
        {
          name: "Sushi Sensation",
          description:
            "Embark on a sushi journey at Sushi Sensation. Our menu showcases the freshest fish, innovative rolls, and sushi combinations that awaken your taste buds to the wonders of Japanese cuisine.",
          location: "Seattle, WA",
          tags: ["Sushi", "Japanese", "Fresh Seafood"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Frank",
        },
        {
          name: "Burger Bliss",
          description:
            "Indulge in burger paradise at Burger Bliss. Our menu features mouthwatering patties, creative toppings, and a range of options that redefine the classic American burger.",
          location: "Austin, TX",
          tags: ["Burgers", "American", "Casual Dining"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Grace",
        },
        {
          name: "Peking Palace",
          description:
            "Experience the rich flavors of China at Peking Palace. Our menu embraces the elegance of Peking duck, delicate dim sum, and dishes that honor the culinary heritage of China.",
          location: "New York, NY",
          tags: ["Chinese", "Peking Duck", "Dim Sum"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Henry",
        },
        {
          name: "Mango Tree",
          description:
            "Celebrate the mango's sweet embrace at Mango Tree. Our menu infuses dishes with the tropical essence of mangoes, offering a burst of flavor that transports you to paradise.",
          location: "Miami, FL",
          tags: ["Mango-Inspired", "Tropical", "Exotic Flavors"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Ivy",
        },
        {
          name: "SoulKitchen",
          description:
            "Experience soulful comfort at SoulKitchen. Our menu is a tribute to soul food traditions, offering dishes that warm your heart and nurture your spirit with every bite.",
          location: "Atlanta, GA",
          tags: ["Soul Food", "Comfort Cuisine", "Homestyle"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Jack",
        },
        {
          name: "Cafe Latte",
          description:
            "Indulge in coffee and conversation at Cafe Latte. Our menu features a variety of coffee delights, pastries, and cozy vibes that make every visit a moment to savor.",
          location: "Seattle, WA",
          tags: ["Coffee", "Café", "Pastries"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Karen",
        },
        {
          name: "BBQ Ranch",
          description:
            "Savor the flavors of the ranch at BBQ Ranch. Our menu highlights ranch-inspired barbecue, with meats that are smoked to perfection and flavors that harken back to the wild west.",
          location: "Dallas, TX",
          tags: ["Barbecue", "Ranch-Style", "Smoked Meats"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Liam",
        },
        {
          name: "Green Leaf Bistro",
          description:
            "Embrace the freshness of nature at Green Leaf Bistro. Our menu celebrates salads, wraps, and healthy dishes that showcase the beauty and vitality of organic ingredients.",
          location: "Los Angeles, CA",
          tags: ["Healthy", "Salads", "Organic"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Mia",
        },
        {
          name: "Harbor View",
          description:
            "Capture stunning views at Harbor View. Our menu pairs coastal cuisine with breathtaking sights, creating an experience that merges the culinary and visual senses.",
          location: "San Diego, CA",
          tags: ["Coastal Dining", "Seafood", "Scenic Views"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Noah",
        },
        {
          name: "Chopstick Delight",
          description:
            "Experience the art of Asian flavors at Chopstick Delight. Our menu spans the culinary tapestry of Asia, offering dishes that celebrate the rich diversity of Eastern cuisine.",
          location: "Chicago, IL",
          tags: ["Asian Cuisine", "Pan-Asian", "Diverse Flavors"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Olivia",
        },
        {
          name: "Cozy Corner Cafe",
          description:
            "Relax and unwind at Cozy Corner Cafe. Our menu features comfort food classics, cozy atmosphere, and a warm embrace that makes every visit feel like a comforting hug.",
          location: "Portland, OR",
          tags: ["Comfort Food", "Café", "Homestyle"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Peter",
        },
        {
          name: "Mystic Sushi",
          description:
            "Experience the enchantment of sushi at Mystic Sushi. Our menu fuses the art of sushi with a touch of mystery, creating dishes that engage your senses and spark your imagination.",
          location: "Seattle, WA",
          tags: ["Sushi", "Artistic Presentation", "Mystical Vibes"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Quinn",
        },
        {
          name: "French Riviera",
          description:
            "Escape to the elegance of the French Riviera at French Riviera. Our menu captures the essence of coastal France, offering a culinary journey through the Mediterranean's finest flavors.",
          location: "Miami, FL",
          tags: ["French Cuisine", "Mediterranean", "Coastal Elegance"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Ryan",
        },
        {
          name: "Golden Wok",
          description:
            "Journey through the vibrant world of Asian cuisine at Golden Wok. Our menu features Chinese, Thai, and Vietnamese dishes that showcase the kaleidoscope of flavors from the East.",
          location: "Los Angeles, CA",
          tags: ["Asian Fusion", "Chinese", "Thai"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Sara",
        },
        {
          name: "Mexican Fiesta",
          description:
            "Celebrate the zest of Mexico at Mexican Fiesta. Our menu captures the fiery spirit of Mexican cuisine, with dishes that pay tribute to the colorful culture and bold flavors.",
          location: "Houston, TX",
          tags: ["Mexican Cuisine", "Spicy", "Fiesta Vibes"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Tom",
        },
        {
          name: "Aloha Grill",
          description:
            "Experience the warmth of the Hawaiian spirit at Aloha Grill. Our menu features tropical-inspired dishes that embody the aloha lifestyle, infusing every bite with sun-kissed flavors.",
          location: "Honolulu, HI",
          tags: ["Hawaiian Cuisine", "Tropical Flavors", "Island Vibes"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Alice",
        },
        {
          name: "Sizzling Steakhouse",
          description:
            "Savor the sizzle at Sizzling Steakhouse. Our menu features premium cuts of steak, grilled to perfection and served with delectable sides that complement the richness of every bite.",
          location: "Chicago, IL",
          tags: ["Steakhouse", "Grilled Meats", "Fine Dining"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Bob",
        },
        {
          name: "Oceanfront Eats",
          description:
            "Dine by the sea at Oceanfront Eats. Our menu pairs coastal flavors with the rhythm of the waves, offering seafood delights and stunning views that celebrate the ocean's bounty.",
          location: "Miami Beach, FL",
          tags: ["Seafood", "Ocean Views", "Beachside Dining"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Claire",
        },
        {
          name: "Taste of Greece",
          description:
            "Journey to the cradle of civilization at Taste of Greece. Our menu features traditional Greek dishes that capture the essence of Mediterranean flavors and cultural heritage.",
          location: "New York, NY",
          tags: ["Greek Cuisine", "Mediterranean", "Olive Oil Infused"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "David",
        },
        {
          name: "Pan-Asian Bistro",
          description:
            "Embrace the diversity of Asia at Pan-Asian Bistro. Our menu celebrates the vibrant tapestry of Asian cuisines, offering a fusion of flavors that showcase the best of the East.",
          location: "San Francisco, CA",
          tags: ["Pan-Asian", "Fusion", "Diverse Flavors"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Eva",
        },
        {
          name: "Rustic Bakery",
          description:
            "Experience the charm of a rustic bakery at Rustic Bakery. Our menu features freshly baked bread, pastries, and treats that carry the warmth of handmade goodness.",
          location: "Portland, OR",
          tags: ["Bakery", "Artisanal Breads", "Homemade Treats"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Frank",
        },
        {
          name: "Chop 'n Wok",
          description:
            "Indulge in the perfect pairing of chopsticks and woks at Chop 'n Wok. Our menu showcases the culinary brilliance of Asian stir-fries, noodles, and dishes that awaken your taste buds.",
          location: "Seattle, WA",
          tags: ["Asian Stir-Fries", "Noodles", "Wok-tossed Delights"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Grace",
        },
        {
          name: "Mediterranean Breeze",
          description:
            "Feel the Mediterranean breeze at Mediterranean Breeze. Our menu offers a sensory journey through Mediterranean flavors, capturing the sun-soaked essence of the coastal region.",
          location: "Los Angeles, CA",
          tags: ["Mediterranean Cuisine", "Fresh Seafood", "Sunny Vibes"],
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Henry",
        },
      ],
    });
  } catch (error) {
    console.error("Error seeding default categories:", error);
  } finally {
    await db.$disconnect();
  }
}

async function generateVotes() {
  try {
    await db.vote.createMany({
      data: [
        {
          type: VoteType.UP,
          userId: "user_2TqKTms48RPYPbyaA08kxVbAMNP",
          userName: "Kash",
          reviewId: "64dfd703cac2810ead8685d8",
        },
        {
          type: VoteType.DOWN,
          userId: "user_2UPS8ihaWborSR4DcT3W9za4JSd",
          userName: "TestUser1",
          reviewId: "64dfd703cac2810ead8685d8",
        },
        {
          type: VoteType.UP,
          userId: "user_2UPSAdqTJipiKuriWUl5fYn4SEe",
          userName: "TestUser2",
          reviewId: "64dfd703cac2810ead8685d8",
        },
      ],
    });
  } catch (error) {
    console.error("Error seeding default categories:", error);
  } finally {
    await db.$disconnect();
  }
}

generateVotes();
