import { Component } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-appliances',
  templateUrl: './appliances.component.html',
  styleUrls: ['./appliances.component.css'],
})
export class AppliancesComponent {
  homeAppliances: Product[] = [
    // --- KITCHEN APPLIANCES ---
    {
      productShortName: 'Air Fryer',
      longName: 'CrispTech Digital Air Fryer - 5.5L Family Size',
      categoryName: 'Kitchen Appliances',
      description:
        'Cook your favorite fried foods with 90% less oil. Features 8 preset programs and a touch control panel.',
      price: 8499,
      thumbnailImage: 'https://m.media-amazon.com/images/I/71QwoGmcfUL.jpg',
      isAdded: false,
    },
    {
      productShortName: 'Espresso Machine',
      longName: 'Barista Hub Semi-Automatic Espresso Maker',
      categoryName: 'Kitchen Appliances',
      description:
        '15-bar professional pressure with integrated milk frother for perfect lattes and cappuccinos at home.',
      price: 15999,
      thumbnailImage:
        'https://m.media-amazon.com/images/I/71duCIUwKML._AC_UF350,350_QL80_.jpg',
      isAdded: false,
    },
    {
      productShortName: 'Multi-Cooker',
      longName: 'SmartPot 9-in-1 Programmable Electric Pressure Cooker',
      categoryName: 'Kitchen Appliances',
      description:
        'Replaces 9 kitchen appliances. Pressure cooks, slow cooks, sautes, and even makes yogurt with one touch.',
      price: 6200,
      thumbnailImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ZIBVIQS2zw2aFZ1w9kfaFhHZFgRo-SRHUw&s',
      isAdded: false,
    },
    {
      productShortName: 'Stand Mixer',
      longName: 'BakeMaster 5-Quart Tilt-Head Stand Mixer',
      categoryName: 'Kitchen Appliances',
      description:
        'Professional grade motor with 10 speeds and high-quality stainless steel attachments for every baking need.',
      price: 12500,
      thumbnailImage:
        'https://www.advwin.com.au/cdn/shop/files/83ec2048ed0375bb_800x.jpg?v=1701754161',
      isAdded: false,
    },

    // --- HOME COMFORT & CLEANING ---
    {
      productShortName: 'Robot Vacuum',
      longName: 'CleanSweep G20 Robotic Vacuum & Mop Combo',
      categoryName: 'Home Appliances',
      description:
        'Smart mapping technology with 3000Pa suction power. Automatically recharges and resumes cleaning.',
      price: 22999,
      thumbnailImage:
        'https://images-cdn.ubuy.com.sa/66c0ec3298860d653a493344-inscrazy-robot-vacuum-cleaner-sweeping.jpg',
      isAdded: false,
    },
    {
      productShortName: 'Air Purifier',
      longName: 'PureAir HEPA H13 Filtration System',
      categoryName: 'Home Appliances',
      description:
        'Captures 99.97% of airborne particles, dust, and pet dander. Silent operation for bedroom use.',
      price: 9999,
      thumbnailImage:
        'https://images.apollo247.in/pd-cms/cms/2024-11/How-to-find-the-best-air-purifier-for-home-in-india.jpg?tr=q-80,f-webp,w-450,dpr-3,c-at_max%20450w',
      isAdded: false,
    },
    {
      productShortName: 'Steam Iron',
      longName: 'GlideSmooth 2400W Ceramic Steam Iron',
      categoryName: 'Home Appliances',
      description:
        'Anti-drip and self-cleaning technology with powerful steam burst for the toughest wrinkles.',
      price: 2800,
      thumbnailImage:
        'https://store.ops.blackbox.com.sa/media/webps/jpg/media/catalog/product/p/h/philips_hv_steam_iron_7000_series_2600w_45g.min_steamglide_soleplate_-_dst701276.2.webp',
      isAdded: false,
    },
    {
      productShortName: 'Tower Fan',
      longName: 'ArcticBreeze Oscillating Digital Tower Fan',
      categoryName: 'Home Appliances',
      description:
        'Sleek, space-saving design with 3 speed settings, sleep mode, and a convenient remote control.',
      price: 4500,
      thumbnailImage:
        'https://www.sathya.store/img/product/L3vETif66RK5tvhL.jpg',
      isAdded: false,
    },

    // --- LARGE APPLIANCES ---
    {
      productShortName: 'Microwave Oven',
      longName: 'WavePro 25L Convection Microwave Oven',
      categoryName: 'Kitchen Appliances',
      description:
        'Grill, bake, and defrost with ease. Features a stainless steel cavity for uniform heating.',
      price: 13500,
      thumbnailImage:
        'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500&q=80',
      isAdded: false,
    },
    {
      productShortName: 'Smart Toaster',
      longName: 'ToastIt 2-Slice Wide Slot Digital Toaster',
      categoryName: 'Kitchen Appliances',
      description:
        'Countdown timer with precise browning control and a specialized bagel setting.',
      price: 3200,
      thumbnailImage: 'https://m.media-amazon.com/images/I/71RJqDY7d6L.jpg',
      isAdded: false,
    },
    {
      productShortName: 'Electric Kettle',
      longName: 'RapidBoil 1.7L Glass Electric Kettle',
      categoryName: 'Kitchen Appliances',
      description:
        'Boils water in minutes with blue LED illumination and automatic shut-off safety features.',
      price: 1899,
      thumbnailImage:
        'https://m.media-amazon.com/images/I/71KS-plFc1L._AC_UF894,1000_QL80_.jpg',
      isAdded: false,
    },
    {
      productShortName: 'Juicer Extractor',
      longName: 'VitaPress Cold Press Slow Juicer',
      categoryName: 'Kitchen Appliances',
      description:
        'Maximizes nutrient extraction from fruits and vegetables with a quiet, high-torque motor.',
      price: 7999,
      thumbnailImage:
        'https://5.imimg.com/data5/SELLER/Default/2023/9/343279378/OR/RE/NW/110872888/juice-extractor-500x500.jpg',
      isAdded: false,
    },
  ];
  eSortChange(event: any) {
    const value = event.target.value;

    if (value === 'low') {
      this.homeAppliances.sort((a, b) => a.price - b.price);
    } else if (value === 'high') {
      this.homeAppliances.sort((a, b) => b.price - a.price);
    } else if (value === 'name') {
      this.homeAppliances.sort((a, b) =>
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
