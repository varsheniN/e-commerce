import { Component } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-electronics',
  templateUrl: './electronics.component.html',
  styleUrls: ['./electronics.component.css'],
})
export class ElectronicsComponent {
  electronicProducts: Product[] = [
    // --- GADGETS & MOBILE ---
    {
      productShortName: 'Samsung Galaxy S23 Ultra',
      longName: 'NextGen Ultra 5G Smartphone - 256GB Platinum',
      categoryName: 'Mobiles',
      description:
        'Features a 6.7-inch AMOLED display and a triple-lens 108MP camera system for professional photography.',
      price: 74999,
      thumbnailImage:
        'https://static0.pocketnowimages.com/wordpress/wp-content/uploads/2023/02/li-samsung-galaxy-s23-ultra-14.jpg',
      isAdded: false,
    },
    {
      productShortName: 'Noise-Cancelling Headphones',
      longName: 'SonicWave Wireless Over-Ear Headphones with ANC',
      categoryName: 'Audio',
      description:
        'Industry-leading active noise cancellation with 40 hours of battery life and hi-res audio support.',
      price: 18500,
      thumbnailImage:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80',
      isAdded: false,
    },
    {
      productShortName: 'Smart Watch',
      longName: 'Vitals Pro Health & Fitness Smartwatch',
      categoryName: 'Wearables',
      description:
        'Track your heart rate, sleep cycles, and blood oxygen levels with built-in GPS and water resistance.',
      price: 12999,
      thumbnailImage:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80',
      isAdded: false,
    },
    {
      productShortName: 'Bluetooth Earbuds',
      longName: 'BoomBox Portable Waterproof Bluetooth earbuds',
      categoryName: 'Audio',
      description:
        'Rugged design with 360-degree sound and a built-in power bank to charge your devices on the go.',
      price: 4999,
      thumbnailImage:
        'https://5.imimg.com/data5/SELLER/Default/2022/12/IL/PX/SY/158186738/1-500x500.jpg',
      isAdded: false,
    },

    // --- COMPUTING ---
    {
      productShortName: 'Lenovo Yoga Slim Laptop',
      longName: 'Zenith X1 Carbon Laptop - M3 Chip, 16GB RAM',
      categoryName: 'Laptops',
      description:
        'Ultra-slim aluminum chassis with a stunning 4K Retina display and all-day battery performance.',
      price: 124900,
      thumbnailImage:
        'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&q=80',
      isAdded: false,
    },
    {
      productShortName: 'Mechanical Keyboard',
      longName: 'ClickPro RGB Backlit Mechanical Gaming Keyboard',
      categoryName: 'Accessories',
      description:
        'Hot-swappable tactile switches with customizable RGB lighting and a detachable USB-C cable.',
      price: 6499,
      thumbnailImage:
        'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&q=80',
      isAdded: false,
    },
    {
      productShortName: 'Wireless Mouse',
      longName: 'ErgoGlide Silent Wireless Optical Mouse',
      categoryName: 'Accessories',
      description:
        'Ergonomic design to reduce wrist strain with silent click buttons and 2.4GHz wireless connectivity.',
      price: 1299,
      thumbnailImage:
        'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
      isAdded: false,
    },
    {
      productShortName: 'UltraWide Monitor',
      longName: 'Visionary 34-inch Curved UltraWide Gaming Monitor',
      categoryName: 'Monitors',
      description:
        '144Hz refresh rate with 1ms response time and HDR10 support for an immersive viewing experience.',
      price: 32500,
      thumbnailImage:
        'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80',
      isAdded: false,
    },

    // --- SMART HOME & PHOTOGRAPHY ---
    {
      productShortName: 'Mirrorless Camera',
      longName: 'FocusPro Z5 Mirrorless Camera with 24-70mm Lens',
      categoryName: 'Camera',
      description:
        'Full-frame sensor with high-speed autofocus and 4K video recording capabilities.',
      price: 155000,
      thumbnailImage:
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80',
      isAdded: false,
    },
    {
      productShortName: 'Smart Speaker',
      longName: 'HomeLink Mini Smart Assistant with Voice Control',
      categoryName: 'Speakers',
      description:
        'Control your entire smart home, set reminders, and play music with just your voice.',
      price: 3499,
      thumbnailImage:
        'https://images-cdn.ubuy.co.in/633ff88e9819e57f1c1134e0-oshion-ka1-smart-speaker-voice-player.jpg',
      isAdded: false,
    },
    {
      productShortName: 'E-Reader',
      longName: 'PaperView 6-inch E-Reader with Adjustable Warm Light',
      categoryName: 'Electronics',
      description:
        'Glare-free display that reads like real paper, even in direct sunlight. Stores thousands of books.',
      price: 9999,
      thumbnailImage:
        'https://upload.wikimedia.org/wikipedia/commons/4/45/Reading_on_the_bus_train_or_transit.jpg',
      isAdded: false,
    },
    {
      productShortName: 'Action Camera',
      longName: 'AdventureCam 4K Waterproof Action Camera',
      categoryName: 'Camera',
      description:
        'Hyper-smooth stabilization and rugged waterproofing up to 10 meters without a case.',
      price: 24500,
      thumbnailImage:
        'https://cdn.thewirecutter.com/wp-content/media/2025/06/BEST-ACTION-CAMERAS-2374-2x1-1.jpg?width=2048&quality=75&crop=2:1&auto=webp',
      isAdded: false,
    },
  ];
  eSortChange(event: any) {
    const value = event.target.value;

    if (value === 'low') {
      this.electronicProducts.sort((a, b) => a.price - b.price);
    } else if (value === 'high') {
      this.electronicProducts.sort((a, b) => b.price - a.price);
    } else if (value === 'name') {
      this.electronicProducts.sort((a, b) =>
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
