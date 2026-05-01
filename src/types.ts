export interface MainCategoryItem {
  image: string;
  title: string;
  badge: string;
  badgeColor: string;
}

export interface CategoryItem {
  image: string;
  title: string;
  des: string;
  badge: string;
  badgeColor: string;
}

export interface FeatureItem {
  image: string;
  title: string;
  badge: string;
  badgeColor: string;
  des: string;
  date: string;
  width: string;
}

export interface AdsItem {
  ads: string;
  size: 'small' | 'big';
  id: number;
}

export interface IconItem {
  icon: string;
  alt: string;
}

export interface ContentItem {
  image: string;
  title: string;
}
