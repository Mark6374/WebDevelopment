import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
  @Output() share = new EventEmitter<{platform: string, url: string}>();
  
  currentImageIndex = 0;
  showGallery = false;
  showShareOptions = false;
  galleryOpening = false;

  getStars(): number[] {
    return Array(Math.floor(this.product.rating)).fill(0);
  }

  hasHalfStar(): boolean {
    return this.product.rating % 1 >= 0.5;
  }

  getEmptyStars(): number[] {
    const fullStars = Math.floor(this.product.rating);
    const hasHalf = this.hasHalfStar();
    return Array(5 - fullStars - (hasHalf ? 1 : 0)).fill(0);
  }

  nextImage(event: Event) {
    event.stopPropagation();
    this.currentImageIndex = (this.currentImageIndex + 1) % this.product.images.length;
  }

  prevImage(event: Event) {
    event.stopPropagation();
    this.currentImageIndex = this.currentImageIndex === 0 
      ? this.product.images.length - 1 
      : this.currentImageIndex - 1;
  }

  setImage(index: number, event: Event) {
    event.stopPropagation();
    this.currentImageIndex = index;
  }

  openGallery(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    if (this.galleryOpening) return;
    
    this.galleryOpening = true;
    this.showGallery = true;
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => {
      this.galleryOpening = false;
    }, 300);
  }

  closeGallery(event?: Event) {
    if (event) {
      event.stopPropagation();
    }
    this.showGallery = false;
    document.body.style.overflow = 'auto';
  }

  onOverlayClick(event: Event) {
    if ((event.target as HTMLElement).classList.contains('gallery-modal')) {
      this.closeGallery(event);
    }
  }

  toggleShareOptions(event: Event) {
    event.stopPropagation();
    this.showShareOptions = !this.showShareOptions;
  }

  shareOnWhatsApp() {
    const text = `Посмотрите этот товар: ${this.product.name} за ${this.formatPrice(this.product.price)} ₸`;
    const url = `https://wa.me/?text=${encodeURIComponent(text + ' - ' + this.product.link)}`;
    this.share.emit({platform: 'whatsapp', url});
    window.open(url, '_blank');
    this.showShareOptions = false;
  }

  shareOnTelegram() {
    const text = `🛍️ ${this.product.name}\n💰 Цена: ${this.formatPrice(this.product.price)} ₸\n⭐ Рейтинг: ${this.product.rating}`;
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(text)}`;
    this.share.emit({platform: 'telegram', url});
    window.open(url, '_blank');
    this.showShareOptions = false;
  }

  formatPrice(price: number): string {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  // Исправленный HostListener - убираем параметр, так как он нам не нужен
  @HostListener('document:keydown.escape')
  onEscapePress() {
    if (this.showGallery) {
      this.closeGallery();
    }
  }
}