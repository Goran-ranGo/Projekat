export class AddArticleDto {
    name: string;
    categoryId: number;
    excert: string;
    description: string;
    price: number;
    features: {   // niz objekata
        featureId: number;
        value: string;
    }[];
}