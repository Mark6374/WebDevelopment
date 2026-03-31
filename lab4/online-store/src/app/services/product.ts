import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
      description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
      price: 847029,
      rating: 5.0,
      category: 'Смартфоны',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pdf/p95/64168415.png?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },
    {
      id: 2,
      name: 'Ноутбук Apple MacBook Air 13 M1 256Gb',
      description: 'Представляем Apple MacBook Air 13 2020 — ультрабук, который сочетает в себе высокую производительность, изящный дизайн и долговечность.',
      price: 398031,
      rating: 5.0,
      category: 'Ноутбуки',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h73/h87/63947822596126.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h27/hec/63947824496670.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h16/h90/63947827478558.jpg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hc3/h83/63947832557598.jpg?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-m1-256gb-100797845/'
    },
    {
      id: 3,
      name: 'Наушники Apple AirPods 4 белый',
      description: 'Обновленные беспроводные наушники Apple AirPods 4 с персонализированным пространственным аудио.',
      price: 60344,
      rating: 4.7,
      category: 'Наушники',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcb/h97/87309386809374.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/pec/pd7/97865769.jpeg?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/h9f/had/87309385662494.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-4-belyi-124333372/?c=750000000'
    },
    {
      id: 4,
      name: 'Планшет Apple iPad A16 11 2025 Wi-Fi 11 дюйм 6 Гб/128 Гб серебристый',
      description: 'Представляем iPad A16 2025 — ваш идеальный спутник для работы и развлечений!',
      price: 399990,
      rating: 4.7,
      category: 'Планшеты',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/pe8/37011887.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p85/pe5/37011897.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p69/pe5/37011898.png?format=gallery-large',
      ],
      link: 'https://kaspi.kz/shop/p/apple-ipad-a16-11-2025-wi-fi-11-djuim-6-gb-128-gb-serebristyi-138199634/?c=750000000'
    },
    {
      id: 5,
      name: 'Смартфон Redmi A5 4 ГБ/128 ГБ черный',
      description: 'Смартфон Redmi A5 4 ГБ/128 ГБ — это мощное устройство с впечатляющим экраном и долговечным аккумулятором, которое идеально подходит для повседневного использования и развлечений.',
      price: 49990,
      rating: 4.8,
      category: 'Смартфоны',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p27/p8f/67214824.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p27/p8f/67214824.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7e/p58/49873129.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p06/p5b/49873131.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/paf/p5b/49873137.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/redmi-a5-4-gb-128-gb-chernyi-137034687/?c=750000000'
    },
    {
      id: 6,
      name: 'Смарт-часы Apple Watch SE GPS Gen.2 2024 S/M 40 мм бежевый',
      description: 'Корпус в трёх стильных цветах. Мощные датчики для информации о вашем здоровье и активности. Инновационные функции безопасности',
      price: 139990,
      rating: 4.7,
      category: 'Смарт-часы',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p55/p9b/5542335.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe4/p9a/5542339.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p78/p98/5542340.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-se-gps-gen-2-2024-s-m-40-mm-bezhevyi-129172890/?c=750000000'
    },
    {
      id: 7,
      name: 'Видеокарта Palit GeForce RTX 5070 Infinity 3 (NE75070019K9-GB2050S) 12 Гб',
      description: 'Видеокарты Palit GeForce RTX™ 5070 серии Infinity 3 разработаны с учётом этой цели — обеспечить мощь высокопроизводительного графического процессора в форм-факторе',
      price: 413000,
      rating: 4.5,
      category: 'Видеокарты',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pb0/peb/58359329.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb0/peb/58359329.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd3/pe8/58359334.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7f/pe8/58359337.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p46/pe8/58359339.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/palit-geforce-rtx-5070-infinity-3-ne75070019k9-gb2050s-12-gb-144023378/?c=750000000'
    },
    {
      id: 8,
      name: 'Оперативная память Kingston KF556C36BBEAK2-32 32 Гб',
      description: 'Оперативная память Kingston Fury Beast — высокопроизводительное решение для геймеров и профессионалов, обеспечивающее максимальную скорость и надежность в любых задачах.',
      price: 242890,
      rating: 4.3,
      category: 'Оперативная память',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2b/h27/67728027811870.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h2b/h27/67728027811870.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h94/hc4/67728028336158.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/kingston-kf556c36bbeak2-32-32-gb-108374348/?c=750000000'
    },
    {
      id: 9,
      name: 'Игровая приставка Sony PlayStation 5 Slim',
      description: 'Игровая консоль нового поколения с SSD на 1 ТБ, поддержкой 8K и технологией трассировки лучей для реалистичной графики.',
      price: 302818,
      rating: 4.8,
      category: 'Игровые приставки',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p27/p2a/78474504.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p43/p2a/78474505.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000'
    },
    {
      id: 10,
      name: 'Клавиатура Ajazz AK820 Pro белый',
      description: 'Ajazz AK820 Pro- это не просто клавиатура, это совершенный инструмент для геймеров и профессионалов.',
      price: 25980,
      rating: 4.5,
      category: 'Клавиатуры',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pbb/p20/24789953.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pbb/p20/24789953.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hb1/h74/85447302807582.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h06/h6d/85447302873118.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/ajazz-ak820-pro-belyi-115277471/?c=750000000'
    },
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getCategories(): string[] {
    return [...new Set(this.products.map(p => p.category))];
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(p => p.category === category);
  }
}