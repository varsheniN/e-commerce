import { Component } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent {
  bookProducts: Product[] = [
    // --- FICTION & CLASSICS ---
    {
      productShortName: 'The Great Gatsby',
      longName: 'The Great Gatsby by F. Scott Fitzgerald - Deluxe Hardcover',
      categoryName: 'Fiction',
      description:
        'A classic tale of ambition, love, and the American Dream set in the Roaring Twenties.',
      price: 599,
      thumbnailImage:
        'https://m.media-amazon.com/images/I/71V1cA2fiZL._AC_UF1000,1000_QL80_.jpg',
      isAdded: false,
    },
    {
      productShortName: 'Mystery of the Blue Room',
      longName: 'Classic Whodunnit: The Mystery of the Blue Room',
      categoryName: 'Mystery',
      description:
        'A gripping psychological thriller that keeps you guessing until the very last page.',
      price: 450,
      thumbnailImage:
        'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1537016474i/140590.jpg',
      isAdded: false,
    },
    {
      productShortName: 'Fantasy Quest',
      longName: 'Chronicles of the Ancient Realm: Book 1',
      categoryName: 'Fantasy',
      description:
        'An epic journey across magical lands with dragons, warriors, and ancient prophecies.',
      price: 799,
      thumbnailImage:
        'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1347594788i/785512.jpg',
      isAdded: false,
    },

    // --- SELF-HELP & NON-FICTION ---
    {
      productShortName: 'Mindful Living',
      longName: 'The Art of Mindful Living: A Practical Guide to Peace',
      categoryName: 'Self-Help',
      description:
        'Daily practices and meditations to help you find focus and tranquility in a busy world.',
      price: 350,
      thumbnailImage:
        'https://www.samadhi.org.uk/wp-content/uploads/2022/03/Untitled-1500-%C3%97-1000px.jpg',
      isAdded: false,
    },
    {
      productShortName: 'Success Habits',
      longName: 'Atomic Habits: Building Better Lives One Step at a Time',
      categoryName: 'Business',
      description:
        'Learn the science behind habit formation and how small changes lead to remarkable results.',
      price: 650,
      thumbnailImage:
        'https://images.unsplash.com/photo-1589998059171-988d887df646?w=500&q=80',
      isAdded: false,
    },
    {
      productShortName: 'Creative Spark',
      longName: 'Ignite the Creative Spark: Techniques for Artists',
      categoryName: 'Art & Design',
      description:
        'Overcome creative blocks with this beautifully illustrated guide to artistic expression.',
      price: 899,
      thumbnailImage:
        'https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1475528465i/31626670.jpg',
      isAdded: false,
    },

    // --- SCIENCE & TECHNOLOGY ---
    {
      productShortName: 'Coding for Beginners',
      longName: 'Python Programming: From Zero to Hero in 30 Days',
      categoryName: 'Education',
      description:
        'The ultimate guide to learning Python with hands-on projects and clear explanations.',
      price: 1200,
      thumbnailImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCCuI82Lb3ZqTA0tVsSuSsaBC0q0kv-dXmkA&s',
      isAdded: false,
    },
    {
      productShortName: 'Cosmos Explained',
      longName: 'Astrophysics for People in a Hurry',
      categoryName: 'Science',
      description:
        'A fascinating look at the origin and evolution of the universe in a simplified format.',
      price: 525,
      thumbnailImage:
        'https://press.uchicago.edu/dam/ucp/books/jacket/978/17/89/14/9781789140545.jpg',
      isAdded: false,
    },

    // --- TRAVEL & LIFESTYLE ---
    {
      productShortName: "Chef's Secrets",
      longName: 'Gourmet Home Cooking: Secrets from World-Class Chefs',
      categoryName: 'Cooking',
      description:
        'Master the art of cooking with over 100 recipes ranging from simple to complex.',
      price: 1100,
      thumbnailImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3rL_Zju28hC7P76-y1xeUfCSYqJq0JKV_rw&s',
      isAdded: false,
    },
    {
      productShortName: 'Wanderlust Asia',
      longName: 'Ultimate Guide to Traveling Across Southeast Asia',
      categoryName: 'Travel',
      description:
        'Hidden gems, local tips, and breathtaking photography from the heart of Asia.',
      price: 950,
      thumbnailImage:
        'https://m.media-amazon.com/images/I/A19csFk10lL._AC_UF350,350_QL50_.jpg',
      isAdded: false,
    },
    {
      productShortName: 'Garden Magic',
      longName: 'Urban Gardening: Growing Organic Food in Small Spaces',
      categoryName: 'Lifestyle',
      description:
        'Turn your balcony or windowsill into a thriving garden with this step-by-step guide.',
      price: 499,
      thumbnailImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh558R0rw5p8lsdWoW1efkkWmukcBNH2oZLA&s',
      isAdded: false,
    },
    {
      productShortName: 'Digital Photography',
      longName: 'Mastering the Lens: A Guide to Digital Photography',
      categoryName: 'Photography',
      description:
        'Understand lighting, composition, and post-processing to take stunning photos.',
      price: 1400,
      thumbnailImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtrfjJE-KfNbV-uZ2tjIC6PPbaUaaLq3it6A&s',
      isAdded: false,
    },
  ];
  SortChange(event: any) {
    const value = event.target.value;

    if (value === 'low') {
      this.bookProducts.sort((a, b) => a.price - b.price);
    } else if (value === 'high') {
      this.bookProducts.sort((a, b) => b.price - a.price);
    } else if (value === 'name') {
      this.bookProducts.sort((a, b) =>
        a.productShortName.localeCompare(b.productShortName),
      );
    }
  }
  constructor(private cartService: CartService) {}

  addToCart(event: Event, product: any) {
    event.preventDefault();
    event.stopPropagation();

    // Pass the product object to the service
    this.cartService.addToCart(product);

    product.isAdded = true;
    setTimeout(() => {
      product.isAdded = false;
    }, 2000);
  }
}
export interface Product {
  productShortName: string;
  longName: string;
  categoryName: string;
  description: string;
  price: number;
  thumbnailImage: string;
  isAdded?: boolean;
}
