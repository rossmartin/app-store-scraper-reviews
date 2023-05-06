export type GetReviewsParams = {
  country: string;
  appId: string;
  appName: string;
  numberOfReviews?: number;
  sleep?: number;
};

export interface GetReviewsResponse {
  next?: string;
  data?: Review[];
}

export interface Review {
  id: string;
  type: string;
  attributes: Attributes;
}

export interface Attributes {
  date: string;
  review: string;
  rating: number;
  isEdited: boolean;
  title: string;
  userName: string;
}
