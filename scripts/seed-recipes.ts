import 'dotenv/config'
import { createClient } from '@sanity/client'

const client = createClient({
    projectId: 't27ykr9u',
    dataset: 'production',
    apiVersion: '2024-01-01',
    // Generate a token at https://www.sanity.io/manage → project → API → Tokens
    token: process.env.SANITY_TOKEN,
    useCdn: false,
})

const recipes = [
    {
        _type: 'recipe',
        title: 'Classic Spaghetti Carbonara',
        slug: { _type: 'slug', current: 'classic-spaghetti-carbonara' },
        description: 'A creamy Roman pasta dish made with eggs, cheese, pancetta, and pepper.',
        prepTime: 10,
        cookTime: 20,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Spaghetti', quantity: 14, unit: 'oz' },
            { _type: 'ingredient', _key: '2', name: 'Pancetta', quantity: 7, unit: 'oz' },
            { _type: 'ingredient', _key: '3', name: 'Egg yolks', quantity: 4, unit: '' },
            { _type: 'ingredient', _key: '4', name: 'Pecorino Romano', quantity: 3.5, unit: 'oz' },
            { _type: 'ingredient', _key: '5', name: 'Black pepper', quantity: 1, unit: 'tsp' },
        ],
        tags: ['pasta', 'italian', 'quick'],
    },
    {
        _type: 'recipe',
        title: 'Chicken Tikka Masala',
        slug: { _type: 'slug', current: 'chicken-tikka-masala' },
        description: 'Tender chicken in a rich, spiced tomato-cream sauce.',
        prepTime: 20,
        cookTime: 40,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Chicken breast', quantity: 1.5, unit: 'lbs' },
            { _type: 'ingredient', _key: '2', name: 'Yogurt', quantity: 0.75, unit: 'cup' },
            { _type: 'ingredient', _key: '3', name: 'Crushed tomatoes', quantity: 14, unit: 'oz' },
            { _type: 'ingredient', _key: '4', name: 'Heavy cream', quantity: 0.5, unit: 'cup' },
            { _type: 'ingredient', _key: '5', name: 'Garam masala', quantity: 2, unit: 'tsp' },
            { _type: 'ingredient', _key: '6', name: 'Ground cumin', quantity: 1, unit: 'tsp' },
        ],
        tags: ['indian', 'chicken', 'curry'],
    },
    {
        _type: 'recipe',
        title: 'Avocado Toast',
        slug: { _type: 'slug', current: 'avocado-toast' },
        description: 'Simple, nutritious toast topped with smashed avocado and seasoning.',
        prepTime: 5,
        cookTime: 5,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Sourdough bread', quantity: 2, unit: 'slices' },
            { _type: 'ingredient', _key: '2', name: 'Ripe avocado', quantity: 1, unit: '' },
            { _type: 'ingredient', _key: '3', name: 'Lemon juice', quantity: 1, unit: 'tbsp' },
            { _type: 'ingredient', _key: '4', name: 'Red pepper flakes', quantity: 0.5, unit: 'tsp' },
            { _type: 'ingredient', _key: '5', name: 'Salt', quantity: 1, unit: 'pinch' },
        ],
        tags: ['breakfast', 'vegetarian', 'quick'],
    },
    {
        _type: 'recipe',
        title: 'Beef Tacos',
        slug: { _type: 'slug', current: 'beef-tacos' },
        description: 'Seasoned ground beef in soft tortillas with classic toppings.',
        prepTime: 10,
        cookTime: 15,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Ground beef', quantity: 1, unit: 'lb' },
            { _type: 'ingredient', _key: '2', name: 'Small flour tortillas', quantity: 8, unit: '' },
            { _type: 'ingredient', _key: '3', name: 'Taco seasoning', quantity: 2, unit: 'tbsp' },
            { _type: 'ingredient', _key: '4', name: 'Cheddar cheese', quantity: 3.5, unit: 'oz' },
            { _type: 'ingredient', _key: '5', name: 'Sour cream', quantity: 0.5, unit: 'cup' },
            { _type: 'ingredient', _key: '6', name: 'Salsa', quantity: 0.5, unit: 'cup' },
        ],
        tags: ['mexican', 'beef', 'dinner'],
    },
    {
        _type: 'recipe',
        title: 'Banana Smoothie',
        slug: { _type: 'slug', current: 'banana-smoothie' },
        description: 'A quick and filling smoothie with banana, milk, and honey.',
        prepTime: 5,
        cookTime: 0,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Banana', quantity: 2, unit: '' },
            { _type: 'ingredient', _key: '2', name: 'Milk', quantity: 1, unit: 'cup' },
            { _type: 'ingredient', _key: '3', name: 'Honey', quantity: 1, unit: 'tbsp' },
            { _type: 'ingredient', _key: '4', name: 'Ice cubes', quantity: 4, unit: '' },
        ],
        tags: ['breakfast', 'drinks', 'quick', 'vegetarian'],
    },
    {
        _type: 'recipe',
        title: 'Margherita Pizza',
        slug: { _type: 'slug', current: 'margherita-pizza' },
        description: 'Classic Neapolitan pizza with tomato, fresh mozzarella, and basil.',
        prepTime: 20,
        cookTime: 15,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Pizza dough', quantity: 10.5, unit: 'oz' },
            { _type: 'ingredient', _key: '2', name: 'San Marzano tomatoes', quantity: 7, unit: 'oz' },
            { _type: 'ingredient', _key: '3', name: 'Fresh mozzarella', quantity: 5, unit: 'oz' },
            { _type: 'ingredient', _key: '4', name: 'Fresh basil leaves', quantity: 10, unit: '' },
            { _type: 'ingredient', _key: '5', name: 'Olive oil', quantity: 2, unit: 'tbsp' },
        ],
        tags: ['italian', 'vegetarian', 'pizza'],
    },
    {
        _type: 'recipe',
        title: 'French Onion Soup',
        slug: { _type: 'slug', current: 'french-onion-soup' },
        description: 'Rich, caramelized onion soup topped with a crusty crouton and melted Gruyère.',
        prepTime: 15,
        cookTime: 60,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Yellow onions', quantity: 4, unit: '' },
            { _type: 'ingredient', _key: '2', name: 'Beef broth', quantity: 4, unit: 'cups' },
            { _type: 'ingredient', _key: '3', name: 'Dry white wine', quantity: 0.5, unit: 'cup' },
            { _type: 'ingredient', _key: '4', name: 'Gruyère cheese', quantity: 5, unit: 'oz' },
            { _type: 'ingredient', _key: '5', name: 'Baguette slices', quantity: 4, unit: '' },
            { _type: 'ingredient', _key: '6', name: 'Butter', quantity: 2, unit: 'tbsp' },
        ],
        tags: ['french', 'soup', 'comfort food'],
    },
    {
        _type: 'recipe',
        title: 'Pad Thai',
        slug: { _type: 'slug', current: 'pad-thai' },
        description: 'Stir-fried rice noodles with shrimp, tofu, peanuts, and tangy tamarind sauce.',
        prepTime: 15,
        cookTime: 15,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Rice noodles', quantity: 7, unit: 'oz' },
            { _type: 'ingredient', _key: '2', name: 'Shrimp', quantity: 7, unit: 'oz' },
            { _type: 'ingredient', _key: '3', name: 'Firm tofu', quantity: 3.5, unit: 'oz' },
            { _type: 'ingredient', _key: '4', name: 'Tamarind paste', quantity: 3, unit: 'tbsp' },
            { _type: 'ingredient', _key: '5', name: 'Fish sauce', quantity: 2, unit: 'tbsp' },
            { _type: 'ingredient', _key: '6', name: 'Crushed peanuts', quantity: 0.33, unit: 'cup' },
            { _type: 'ingredient', _key: '7', name: 'Eggs', quantity: 2, unit: '' },
        ],
        tags: ['thai', 'noodles', 'seafood'],
    },
    {
        _type: 'recipe',
        title: 'Greek Salad',
        slug: { _type: 'slug', current: 'greek-salad' },
        description: 'Crisp vegetables, olives, and feta tossed in a simple oregano dressing.',
        prepTime: 10,
        cookTime: 0,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Cucumber', quantity: 1, unit: '' },
            { _type: 'ingredient', _key: '2', name: 'Cherry tomatoes', quantity: 7, unit: 'oz' },
            { _type: 'ingredient', _key: '3', name: 'Red onion', quantity: 0.5, unit: '' },
            { _type: 'ingredient', _key: '4', name: 'Kalamata olives', quantity: 3, unit: 'oz' },
            { _type: 'ingredient', _key: '5', name: 'Feta cheese', quantity: 5, unit: 'oz' },
            { _type: 'ingredient', _key: '6', name: 'Olive oil', quantity: 3, unit: 'tbsp' },
            { _type: 'ingredient', _key: '7', name: 'Dried oregano', quantity: 1, unit: 'tsp' },
        ],
        tags: ['greek', 'salad', 'vegetarian', 'quick'],
    },
    {
        _type: 'recipe',
        title: 'Beef Stir Fry',
        slug: { _type: 'slug', current: 'beef-stir-fry' },
        description: 'Tender strips of beef and crisp vegetables in a savory soy-ginger sauce.',
        prepTime: 15,
        cookTime: 10,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Sirloin steak', quantity: 14, unit: 'oz' },
            { _type: 'ingredient', _key: '2', name: 'Broccoli florets', quantity: 7, unit: 'oz' },
            { _type: 'ingredient', _key: '3', name: 'Bell pepper', quantity: 1, unit: '' },
            { _type: 'ingredient', _key: '4', name: 'Soy sauce', quantity: 3, unit: 'tbsp' },
            { _type: 'ingredient', _key: '5', name: 'Fresh ginger', quantity: 1, unit: 'tbsp' },
            { _type: 'ingredient', _key: '6', name: 'Garlic cloves', quantity: 3, unit: '' },
            { _type: 'ingredient', _key: '7', name: 'Sesame oil', quantity: 1, unit: 'tbsp' },
        ],
        tags: ['chinese', 'beef', 'quick', 'dinner'],
    },
    {
        _type: 'recipe',
        title: 'Pancakes',
        slug: { _type: 'slug', current: 'pancakes' },
        description: 'Fluffy American-style pancakes perfect for a weekend breakfast.',
        prepTime: 10,
        cookTime: 20,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'All-purpose flour', quantity: 1.5, unit: 'cups' },
            { _type: 'ingredient', _key: '2', name: 'Milk', quantity: 1.25, unit: 'cups' },
            { _type: 'ingredient', _key: '3', name: 'Eggs', quantity: 2, unit: '' },
            { _type: 'ingredient', _key: '4', name: 'Baking powder', quantity: 2, unit: 'tsp' },
            { _type: 'ingredient', _key: '5', name: 'Sugar', quantity: 2, unit: 'tbsp' },
            { _type: 'ingredient', _key: '6', name: 'Butter', quantity: 2, unit: 'tbsp' },
        ],
        tags: ['breakfast', 'vegetarian', 'american'],
    },
    {
        _type: 'recipe',
        title: 'Lentil Soup',
        slug: { _type: 'slug', current: 'lentil-soup' },
        description: 'Hearty and warming red lentil soup with cumin and lemon.',
        prepTime: 10,
        cookTime: 35,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Red lentils', quantity: 1.25, unit: 'cups' },
            { _type: 'ingredient', _key: '2', name: 'Vegetable broth', quantity: 4, unit: 'cups' },
            { _type: 'ingredient', _key: '3', name: 'Carrots', quantity: 2, unit: '' },
            { _type: 'ingredient', _key: '4', name: 'Onion', quantity: 1, unit: '' },
            { _type: 'ingredient', _key: '5', name: 'Ground cumin', quantity: 2, unit: 'tsp' },
            { _type: 'ingredient', _key: '6', name: 'Lemon juice', quantity: 2, unit: 'tbsp' },
        ],
        tags: ['soup', 'vegan', 'vegetarian', 'healthy'],
    },
    {
        _type: 'recipe',
        title: 'Salmon Teriyaki',
        slug: { _type: 'slug', current: 'salmon-teriyaki' },
        description: 'Glazed salmon fillets with a sweet and savory homemade teriyaki sauce.',
        prepTime: 10,
        cookTime: 15,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Salmon fillets', quantity: 4, unit: '' },
            { _type: 'ingredient', _key: '2', name: 'Soy sauce', quantity: 4, unit: 'tbsp' },
            { _type: 'ingredient', _key: '3', name: 'Mirin', quantity: 2, unit: 'tbsp' },
            { _type: 'ingredient', _key: '4', name: 'Sake', quantity: 2, unit: 'tbsp' },
            { _type: 'ingredient', _key: '5', name: 'Sugar', quantity: 1, unit: 'tbsp' },
            { _type: 'ingredient', _key: '6', name: 'Sesame seeds', quantity: 1, unit: 'tbsp' },
        ],
        tags: ['japanese', 'seafood', 'fish', 'dinner'],
    },
    {
        _type: 'recipe',
        title: 'Mushroom Risotto',
        slug: { _type: 'slug', current: 'mushroom-risotto' },
        description: 'Creamy Arborio rice with earthy mushrooms, white wine, and Parmesan.',
        prepTime: 10,
        cookTime: 35,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Arborio rice', quantity: 1.5, unit: 'cups' },
            { _type: 'ingredient', _key: '2', name: 'Mixed mushrooms', quantity: 10.5, unit: 'oz' },
            { _type: 'ingredient', _key: '3', name: 'Dry white wine', quantity: 0.5, unit: 'cup' },
            { _type: 'ingredient', _key: '4', name: 'Vegetable broth', quantity: 4, unit: 'cups' },
            { _type: 'ingredient', _key: '5', name: 'Parmesan cheese', quantity: 3, unit: 'oz' },
            { _type: 'ingredient', _key: '6', name: 'Shallots', quantity: 2, unit: '' },
            { _type: 'ingredient', _key: '7', name: 'Butter', quantity: 2, unit: 'tbsp' },
        ],
        tags: ['italian', 'vegetarian', 'rice'],
    },
    {
        _type: 'recipe',
        title: 'Chocolate Chip Cookies',
        slug: { _type: 'slug', current: 'chocolate-chip-cookies' },
        description: 'Soft and chewy cookies loaded with chocolate chips.',
        prepTime: 15,
        cookTime: 12,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'All-purpose flour', quantity: 2.25, unit: 'cups' },
            { _type: 'ingredient', _key: '2', name: 'Butter', quantity: 1, unit: 'cup' },
            { _type: 'ingredient', _key: '3', name: 'Brown sugar', quantity: 1, unit: 'cup' },
            { _type: 'ingredient', _key: '4', name: 'White sugar', quantity: 0.5, unit: 'cup' },
            { _type: 'ingredient', _key: '5', name: 'Eggs', quantity: 2, unit: '' },
            { _type: 'ingredient', _key: '6', name: 'Vanilla extract', quantity: 2, unit: 'tsp' },
            { _type: 'ingredient', _key: '7', name: 'Chocolate chips', quantity: 12, unit: 'oz' },
        ],
        tags: ['baking', 'dessert', 'vegetarian'],
    },
    {
        _type: 'recipe',
        title: 'Caesar Salad',
        slug: { _type: 'slug', current: 'caesar-salad' },
        description: 'Crisp romaine lettuce with homemade Caesar dressing, croutons, and Parmesan.',
        prepTime: 15,
        cookTime: 10,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Romaine lettuce', quantity: 1, unit: 'head' },
            { _type: 'ingredient', _key: '2', name: 'Parmesan cheese', quantity: 2, unit: 'oz' },
            { _type: 'ingredient', _key: '3', name: 'Croutons', quantity: 3, unit: 'oz' },
            { _type: 'ingredient', _key: '4', name: 'Anchovy fillets', quantity: 4, unit: '' },
            { _type: 'ingredient', _key: '5', name: 'Garlic cloves', quantity: 2, unit: '' },
            { _type: 'ingredient', _key: '6', name: 'Lemon juice', quantity: 2, unit: 'tbsp' },
            { _type: 'ingredient', _key: '7', name: 'Dijon mustard', quantity: 1, unit: 'tsp' },
        ],
        tags: ['salad', 'american', 'classic'],
    },
    {
        _type: 'recipe',
        title: 'Vegetable Curry',
        slug: { _type: 'slug', current: 'vegetable-curry' },
        description: 'A fragrant coconut milk curry packed with chickpeas and seasonal vegetables.',
        prepTime: 15,
        cookTime: 30,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Chickpeas', quantity: 14, unit: 'oz' },
            { _type: 'ingredient', _key: '2', name: 'Coconut milk', quantity: 1.75, unit: 'cups' },
            { _type: 'ingredient', _key: '3', name: 'Sweet potato', quantity: 10.5, unit: 'oz' },
            { _type: 'ingredient', _key: '4', name: 'Spinach', quantity: 3.5, unit: 'oz' },
            { _type: 'ingredient', _key: '5', name: 'Curry powder', quantity: 2, unit: 'tbsp' },
            { _type: 'ingredient', _key: '6', name: 'Onion', quantity: 1, unit: '' },
            { _type: 'ingredient', _key: '7', name: 'Garlic cloves', quantity: 3, unit: '' },
        ],
        tags: ['indian', 'vegan', 'vegetarian', 'curry'],
    },
    {
        _type: 'recipe',
        title: 'Pulled Pork Sandwich',
        slug: { _type: 'slug', current: 'pulled-pork-sandwich' },
        description: 'Slow-cooked smoky pulled pork piled high on a brioche bun with coleslaw.',
        prepTime: 20,
        cookTime: 480,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Pork shoulder', quantity: 3, unit: 'lbs' },
            { _type: 'ingredient', _key: '2', name: 'BBQ sauce', quantity: 1, unit: 'cup' },
            { _type: 'ingredient', _key: '3', name: 'Smoked paprika', quantity: 2, unit: 'tbsp' },
            { _type: 'ingredient', _key: '4', name: 'Brown sugar', quantity: 2, unit: 'tbsp' },
            { _type: 'ingredient', _key: '5', name: 'Brioche buns', quantity: 6, unit: '' },
            { _type: 'ingredient', _key: '6', name: 'Coleslaw mix', quantity: 7, unit: 'oz' },
        ],
        tags: ['american', 'pork', 'bbq', 'dinner'],
    },
    {
        _type: 'recipe',
        title: 'Shakshuka',
        slug: { _type: 'slug', current: 'shakshuka' },
        description: 'Eggs poached in a spiced tomato and pepper sauce — a Middle Eastern classic.',
        prepTime: 10,
        cookTime: 25,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Eggs', quantity: 4, unit: '' },
            { _type: 'ingredient', _key: '2', name: 'Crushed tomatoes', quantity: 14, unit: 'oz' },
            { _type: 'ingredient', _key: '3', name: 'Red bell pepper', quantity: 1, unit: '' },
            { _type: 'ingredient', _key: '4', name: 'Onion', quantity: 1, unit: '' },
            { _type: 'ingredient', _key: '5', name: 'Ground cumin', quantity: 1, unit: 'tsp' },
            { _type: 'ingredient', _key: '6', name: 'Smoked paprika', quantity: 1, unit: 'tsp' },
            { _type: 'ingredient', _key: '7', name: 'Feta cheese', quantity: 2, unit: 'oz' },
        ],
        tags: ['middle eastern', 'breakfast', 'vegetarian'],
    },
    {
        _type: 'recipe',
        title: 'Lobster Bisque',
        slug: { _type: 'slug', current: 'lobster-bisque' },
        description: 'Velvety, luxurious soup made with lobster, cream, and a hint of brandy.',
        prepTime: 20,
        cookTime: 45,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Lobster tails', quantity: 2, unit: '' },
            { _type: 'ingredient', _key: '2', name: 'Heavy cream', quantity: 1.25, unit: 'cups' },
            { _type: 'ingredient', _key: '3', name: 'Fish stock', quantity: 2, unit: 'cups' },
            { _type: 'ingredient', _key: '4', name: 'Brandy', quantity: 0.25, unit: 'cup' },
            { _type: 'ingredient', _key: '5', name: 'Tomato paste', quantity: 2, unit: 'tbsp' },
            { _type: 'ingredient', _key: '6', name: 'Shallots', quantity: 3, unit: '' },
            { _type: 'ingredient', _key: '7', name: 'Butter', quantity: 2, unit: 'tbsp' },
        ],
        tags: ['seafood', 'soup', 'french', 'special occasion'],
    },
    {
        _type: 'recipe',
        title: 'Beef Bourguignon',
        slug: { _type: 'slug', current: 'beef-bourguignon' },
        description: 'Classic French beef stew braised in red wine with mushrooms and pearl onions.',
        prepTime: 30,
        cookTime: 180,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Beef chuck', quantity: 2, unit: 'lbs' },
            { _type: 'ingredient', _key: '2', name: 'Red wine', quantity: 3, unit: 'cups' },
            { _type: 'ingredient', _key: '3', name: 'Pearl onions', quantity: 7, unit: 'oz' },
            { _type: 'ingredient', _key: '4', name: 'Mushrooms', quantity: 9, unit: 'oz' },
            { _type: 'ingredient', _key: '5', name: 'Bacon lardons', quantity: 5, unit: 'oz' },
            { _type: 'ingredient', _key: '6', name: 'Beef broth', quantity: 2, unit: 'cups' },
            { _type: 'ingredient', _key: '7', name: 'Thyme', quantity: 3, unit: 'sprigs' },
        ],
        tags: ['french', 'beef', 'stew', 'special occasion'],
    },
    {
        _type: 'recipe',
        title: 'Mango Salsa',
        slug: { _type: 'slug', current: 'mango-salsa' },
        description: 'Fresh and vibrant salsa with mango, jalapeño, and cilantro.',
        prepTime: 10,
        cookTime: 0,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Mango', quantity: 2, unit: '' },
            { _type: 'ingredient', _key: '2', name: 'Red onion', quantity: 0.5, unit: '' },
            { _type: 'ingredient', _key: '3', name: 'Jalapeño', quantity: 1, unit: '' },
            { _type: 'ingredient', _key: '4', name: 'Fresh cilantro', quantity: 0.75, unit: 'oz' },
            { _type: 'ingredient', _key: '5', name: 'Lime juice', quantity: 2, unit: 'tbsp' },
            { _type: 'ingredient', _key: '6', name: 'Salt', quantity: 1, unit: 'pinch' },
        ],
        tags: ['mexican', 'vegan', 'quick', 'side dish'],
    },
    {
        _type: 'recipe',
        title: 'Eggs Benedict',
        slug: { _type: 'slug', current: 'eggs-benedict' },
        description: 'Poached eggs and Canadian bacon on an English muffin with hollandaise sauce.',
        prepTime: 15,
        cookTime: 20,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Eggs', quantity: 4, unit: '' },
            { _type: 'ingredient', _key: '2', name: 'Canadian bacon', quantity: 4, unit: 'slices' },
            { _type: 'ingredient', _key: '3', name: 'English muffins', quantity: 2, unit: '' },
            { _type: 'ingredient', _key: '4', name: 'Egg yolks', quantity: 3, unit: '' },
            { _type: 'ingredient', _key: '5', name: 'Butter', quantity: 0.5, unit: 'cup' },
            { _type: 'ingredient', _key: '6', name: 'Lemon juice', quantity: 1, unit: 'tbsp' },
        ],
        tags: ['breakfast', 'brunch', 'american'],
    },
    {
        _type: 'recipe',
        title: 'Tom Yum Soup',
        slug: { _type: 'slug', current: 'tom-yum-soup' },
        description: 'Spicy and sour Thai soup with shrimp, lemongrass, kaffir lime, and galangal.',
        prepTime: 15,
        cookTime: 20,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Shrimp', quantity: 10.5, unit: 'oz' },
            { _type: 'ingredient', _key: '2', name: 'Chicken broth', quantity: 3.5, unit: 'cups' },
            { _type: 'ingredient', _key: '3', name: 'Lemongrass stalks', quantity: 2, unit: '' },
            { _type: 'ingredient', _key: '4', name: 'Kaffir lime leaves', quantity: 4, unit: '' },
            { _type: 'ingredient', _key: '5', name: 'Fish sauce', quantity: 3, unit: 'tbsp' },
            { _type: 'ingredient', _key: '6', name: 'Thai chilies', quantity: 3, unit: '' },
            { _type: 'ingredient', _key: '7', name: 'Lime juice', quantity: 2, unit: 'tbsp' },
        ],
        tags: ['thai', 'soup', 'seafood', 'spicy'],
    },
    {
        _type: 'recipe',
        title: 'Classic Hummus',
        slug: { _type: 'slug', current: 'classic-hummus' },
        description: 'Smooth and creamy homemade hummus with tahini, lemon, and olive oil.',
        prepTime: 10,
        cookTime: 0,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'Canned chickpeas', quantity: 14, unit: 'oz' },
            { _type: 'ingredient', _key: '2', name: 'Tahini', quantity: 0.25, unit: 'cup' },
            { _type: 'ingredient', _key: '3', name: 'Lemon juice', quantity: 3, unit: 'tbsp' },
            { _type: 'ingredient', _key: '4', name: 'Garlic cloves', quantity: 2, unit: '' },
            { _type: 'ingredient', _key: '5', name: 'Olive oil', quantity: 2, unit: 'tbsp' },
            { _type: 'ingredient', _key: '6', name: 'Ground cumin', quantity: 0.5, unit: 'tsp' },
        ],
        tags: ['middle eastern', 'vegan', 'dip', 'quick'],
    },
    {
        _type: 'recipe',
        title: 'Blueberry Muffins',
        slug: { _type: 'slug', current: 'blueberry-muffins' },
        description: 'Tender, bakery-style muffins bursting with fresh blueberries.',
        prepTime: 15,
        cookTime: 25,
        ingredients: [
            { _type: 'ingredient', _key: '1', name: 'All-purpose flour', quantity: 2, unit: 'cups' },
            { _type: 'ingredient', _key: '2', name: 'Fresh blueberries', quantity: 1.5, unit: 'cups' },
            { _type: 'ingredient', _key: '3', name: 'Sugar', quantity: 0.75, unit: 'cup' },
            { _type: 'ingredient', _key: '4', name: 'Milk', quantity: 0.5, unit: 'cup' },
            { _type: 'ingredient', _key: '5', name: 'Eggs', quantity: 2, unit: '' },
            { _type: 'ingredient', _key: '6', name: 'Butter', quantity: 6, unit: 'tbsp' },
            { _type: 'ingredient', _key: '7', name: 'Baking powder', quantity: 2, unit: 'tsp' },
        ],
        tags: ['baking', 'breakfast', 'vegetarian'],
    },
]

async function deleteAll() {
    // Delete both published and draft versions
    const ids: string[] = await client.fetch(`*[_type == "recipe"]._id`)
    if (ids.length === 0) {
        console.log('No existing recipes found.')
        return
    }
    console.log(`Deleting ${ids.length} existing recipe documents...`)
    const transaction = client.transaction()
    for (const id of ids) {
        transaction.delete(id)
        // Also delete the draft version if it exists
        transaction.delete(`drafts.${id}`)
    }
    await transaction.commit()
    console.log('Deleted.')
}

async function seed() {
    console.log(`Importing ${recipes.length} recipes into dataset "production"...`)
    const transaction = client.transaction()
    for (const recipe of recipes) {
        const id = `recipe-${recipe.slug.current}`
        transaction.createOrReplace({ ...recipe, _id: id })
    }
    await transaction.commit()
    console.log('Done! All recipes imported (existing records updated, no duplicates).')
}

async function reset() {
    await deleteAll()
    await seed()
}

const command = process.argv[2]
const run = command === 'reset' ? reset : seed
run().catch((err) => {
    console.error(err)
    process.exit(1)
})
