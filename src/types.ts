export type GetReviewsParams = {
  country: string;
  appId: string;
  appName: string;
  numberOfReviews?: number;
  sleep?: number;
};

export interface Reviews {
  next?: string;
  data?: DataEntity[];
}

export interface DataEntity {
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
