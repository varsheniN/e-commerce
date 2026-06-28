import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-fashion',
  templateUrl: './fashion.component.html',
  styleUrls: ['./fashion.component.css'],
})
export class FashionComponent {
  productList: Product[] = [
    {
      productShortName: 'Urban Parka',
      longName: "Men's Weather-Resistant Urban Expedition Parka",
      categoryName: "Men's Clothing",
      description:
        'Insulated with synthetic down and finished with a water-repellent shell for extreme winter conditions.',
      sku: 'MEN-JKT-101',
      price: 945.0,
      thumbnailImage:
        'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=400&q=80',
    },
    {
      productShortName: 'Oxford Shirt',
      longName: "Men's Slim-Fit Button-Down Oxford Shirt",
      categoryName: "Men's Clothing",
      description:
        'A timeless classic made from breathable cotton mesh. Features a button-down collar and chest pocket.',
      sku: 'MEN-SHT-202',
      price: 625,
      thumbnailImage:
        'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ_O2eTI_rr8rQgtW_vM7AwRweXEzuntwB5pxCHlWVUtPksCBS4jfSwUzMPG1VEHIAgB-cqEaWAcyqd3U7qXsB73bTTDMGIoS5gWqHWWLvzazWGtyLrI4so0Q',
    },
    {
      productShortName: 'Tech Joggers',
      longName: "Men's Lightweight Performance Tech Joggers",
      categoryName: "Men's Clothing",
      description:
        'Moisture-wicking fabric with four-way stretch, ideal for both high-intensity training and lounging.',
      sku: 'MEN-PNT-303',
      price: 450,
      thumbnailImage:
        'data:image/jpeg;base64,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',
    },
    {
      productShortName: 'Graphic Tee',
      longName: "Men's Vintage Inspired Graphic Cotton Tee",
      categoryName: "Men's Clothing",
      description:
        'Pre-shrunk organic cotton featuring a retro mountain landscape print on the chest.',
      sku: 'MEN-TEE-404',
      price: 528,
      thumbnailImage:
        'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80',
    },

    // --- WOMEN'S CLOTHING ---
    {
      productShortName: 'Midi Wrap Dress',
      longName: "Women's Floral Silk-Blend Midi Wrap Dress",
      categoryName: "Women's Clothing",
      description:
        'An elegant wrap silhouette with fluttering sleeves and a delicate floral pattern for spring events.',
      sku: 'WOM-DRS-505',
      price: 595,
      thumbnailImage:
        'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=400&q=80',
    },
    {
      productShortName: 'High-Rise Leggings',
      longName: "Women's Sculpting High-Rise Yoga Leggings",
      categoryName: "Women's Clothing",
      description:
        'Buttery-soft fabric with a high waistband that stays in place during deep stretches and squats.',
      sku: 'WOM-LEG-606',
      price: 862,
      thumbnailImage:
        'https://assets-jiocdn.ajio.com/medias/sys_master/root/20211019/gIzq/616dd0edaeb26901109a384e/-473Wx593H-460918031-black-MODEL.jpg',
    },
    {
      productShortName: 'Wool Cardigan',
      longName: "Women's Chunky Knit Merino Wool Cardigan",
      categoryName: "Women's Clothing",
      description:
        'Hand-finished knit with tortoiseshell buttons and a relaxed, oversized fit for cozy layering.',
      sku: 'WOM-SWT-707',
      price: 1010,
      thumbnailImage:
        'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=400&q=80',
    },
    {
      productShortName: 'Straight Denim',
      longName: "Women's Classic Straight-Leg Distressed Jeans",
      categoryName: "Women's Clothing",
      description:
        'Rigid vintage-wash denim with subtle distressing at the knees and a raw hem finish.',
      sku: 'WOM-JNS-808',
      price: 778,
      thumbnailImage:
        'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=400&q=80',
    },

    // --- KIDS' CLOTHING ---
    {
      productShortName: 'Striped PJs',
      longName: "Kids' Two-Piece Organic Cotton Pajama Set",
      categoryName: "Kids' Clothing",
      description:
        "Snug-fit pajamas featuring classic stripes and ribbed cuffs for a comfortable night's sleep.",
      sku: 'KID-PJS-909',
      price: 524,
      thumbnailImage:
        'https://www.houseofcomfort.in/cdn/shop/files/image2.jpg?v=1769780143&width=1100',
    },
    {
      productShortName: 'Tutu Skirt',
      longName: "Girls' Layered Tulle Sparkle Tutu Skirt",
      categoryName: "Kids' Clothing",
      description:
        'Three layers of soft tulle with an elasticated glitter waistband. Perfect for play and parties.',
      sku: 'KID-SKR-010',
      price: 340,
      thumbnailImage:
        'https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=400&q=80',
    },
    {
      productShortName: 'Rain Boots',
      longName: "Kids' Waterproof Rubber Puddle Rain Boots",
      categoryName: "Kids' Clothing",
      description:
        'Easy-on handles and a non-slip sole to keep little feet dry during outdoor adventures.',
      sku: 'KID-FOT-011',
      price: 434,
      thumbnailImage:
        'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ-0pS-j3oe8LGjztlPdMaORKDBf7EApXjpxbnUii11u2OSyRG9izthqFXtj8UcNrB-6UxRyY4710dq_FVpoIJKp0V5Fbdzrlq9cxlUO9IqlHmSOuYszBrd1vw',
    },
    {
      productShortName: 'Hooded Windbreaker',
      longName: "Kids' Lightweight Colorblock Windbreaker",
      categoryName: "Kids' Clothing",
      description:
        'A mesh-lined outer layer designed to block the wind. Folds down into its own pocket for easy storage.',
      sku: 'KID-JKT-012',
      price: 742,
      thumbnailImage:
        'https://www.chicco.in/cdn/shop/files/chicco-boys-pink-hooded-open-front-jacket-1.webp?v=1761809727&width=1100',
    },
  ];
  onSortChange(event: any) {
    const value = event.target.value;

    if (value === 'low') {
      this.productList.sort((a, b) => a.price - b.price);
    } else if (value === 'high') {
      this.productList.sort((a, b) => b.price - a.price);
    } else if (value === 'name') {
      this.productList.sort((a, b) =>
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
  sku: string;
  price: number;
  thumbnailImage: string;
  isAdded?: boolean;
}
