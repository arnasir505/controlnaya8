export interface Quote {
  author: string;
  category: string;
  text: string;
}

export interface ApiQuote extends Quote {
  id: string;
}
