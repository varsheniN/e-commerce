import { Component } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css'],
})
export class BeautyComponent {
  beautyProducts: Product[] = [
    // --- WOMEN'S BEAUTY & SKINCARE ---
    {
      productShortName: 'Hydra Serum',
      longName: 'Dewy Glow Hyaluronic Acid Facial Serum',
      categoryName: "Women's Beauty",
      description:
        'Deeply hydrates and plumps skin, reducing fine lines and boosting radiance.',
      price: 1499,
      thumbnailImage:
        'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80',
      isAdded: false,
    },
    {
      productShortName: 'Velvet Lipstick',
      longName: 'Matte Finish Long-Lasting Velvet Lipstick - Ruby Red',
      categoryName: "Women's Beauty",
      description:
        'Highly pigmented, transfer-proof formula with a comfortable, non-drying finish.',
      price: 899,
      thumbnailImage:
        'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500&q=80',
      isAdded: false,
    },
    {
      productShortName: 'Botanical Cleanser',
      longName: 'Gentle Botanical Foaming Cleanser for Sensitive Skin',
      categoryName: "Women's Beauty",
      description:
        'Removes impurities without stripping moisture, enriched with green tea.',
      price: 750,
      thumbnailImage:
        'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80',
      isAdded: false,
    },
    {
      productShortName: 'Clay Mask',
      longName: 'Pore Detox Detoxifying Clay Mask with Activated Charcoal',
      categoryName: "Women's Beauty",
      description:
        'Draws out toxins and minimizes pores for a smoother, clearer complexion.',
      price: 1250,
      thumbnailImage:
        'https://images-static.nykaa.com/media/catalog/product/3/c/3c644b7NATHA00000305_4.jpg?tr=w-500',
      isAdded: false,
    },

    // --- MEN'S GROOMING & SKINCARE ---
    {
      productShortName: 'Beard Oil',
      longName: 'Sandalwood & Cedarwood Conditioning Beard Oil',
      categoryName: "Men's Grooming",
      description:
        'Softens coarse beard hair and hydrates the underlying skin, promoting healthy growth.',
      price: 999,
      thumbnailImage:
        'https://m.media-amazon.com/images/I/71SrXD1yG5L._AC_UF1000,1000_QL80_.jpg',
      isAdded: false,
    },
    {
      productShortName: 'Charcoal Face Wash',
      longName: 'Deep Clean Activated Charcoal Daily Face Wash',
      categoryName: "Men's Grooming",
      description:
        'Fights oil and removes dirt and pollution, leaving skin refreshed.',
      price: 499,
      thumbnailImage:
        'https://freshmills.in/cdn/shop/files/charcoal-face-wash-deyga-freshmills-127763.png?v=1725260082&width=1214',
      isAdded: false,
    },
    {
      productShortName: 'Style Pomade',
      longName: 'High Hold, Matte Finish Water-Based Styling Pomade',
      categoryName: "Men's Grooming",
      description:
        'Provides all-day hold for modern styles with a natural, non-greasy look.',
      price: 799,
      thumbnailImage:
        'https://www.jiomart.com/images/product/original/491437329/gatsby-styling-pompadour-style-supreme-hold-hair-pomade-75-g-product-images-o491437329-p590113671-3-202203152037.jpg?im=Resize=(420,420)',
      isAdded: false,
    },
    {
      productShortName: 'Post-Shave Balm',
      longName: 'Cooling Aloe & Menthol Post-Shave Recovery Balm',
      categoryName: "Men's Grooming",
      description:
        'Soothes razor burn and hydrates sensitive skin after shaving.',
      price: 650,
      thumbnailImage:
        'https://cdn.shopify.com/s/files/1/0883/9528/4786/files/US_website_post_shave_balm_01.jpg?v=1752166913',
      isAdded: false,
    },

    // --- KIDS' GENTLE CARE ---
    {
      productShortName: 'No-Tears Shampoo',
      longName: 'Gentle No-Tears Baby Shampoo & Wash with Lavender',
      categoryName: "Kids' Care",
      description:
        'Cleanses delicate hair and skin without irritation, promoting calm before bedtime.',
      price: 599,
      thumbnailImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaJn7uP2P8lcDbNkPaUWTMSzWXoDrEFEviog&s',
      isAdded: false,
    },
    {
      productShortName: 'Soothing Lotion',
      longName: 'Oatmeal Complex Daily Soothing Lotion for Kids',
      categoryName: "Kids' Care",
      description:
        'Locks in moisture for 24 hours, soothing dry, itchy, or eczema-prone skin.',
      price: 750,
      thumbnailImage:
        'https://simplykids.in/cdn/shop/files/Hero_image_copy.webp?v=1770008631',
      isAdded: false,
    },
    {
      productShortName: 'Kids Sunscreen',
      longName: 'Mineral-Based, Water-Resistant SPF 50 Kids Sunscreen',
      categoryName: "Kids' Care",
      description:
        'Broad-spectrum protection for active play, gentle on sensitive skin.',
      price: 899,
      thumbnailImage:
        'https://www.clickoncare.com/cdn/shop/files/1_27f014e4-3521-4e31-95bd-98a7494377a3.jpg?v=1719222773&width=1946',
      isAdded: false,
    },
    {
      productShortName: 'Fruity Bubble Bath',
      longName: 'Organic Berry Blast Fun Fruity Bubble Bath for Kids',
      categoryName: "Kids' Care",
      description:
        'Creates gentle bubbles with natural extracts, transforming bath time into playtime.',
      price: 450,
      thumbnailImage:
        'https://www.bubblesandbubs.com.au/cdn/shop/files/Ultimate-Set.gif?v=1732141098&width=1500',
      isAdded: false,
    },
  ];
  bSortChange(event: any) {
    const value = event.target.value;

    if (value === 'low') {
      this.beautyProducts.sort((a, b) => a.price - b.price);
    } else if (value === 'high') {
      this.beautyProducts.sort((a, b) => b.price - a.price);
    } else if (value === 'name') {
      this.beautyProducts.sort((a, b) =>
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
