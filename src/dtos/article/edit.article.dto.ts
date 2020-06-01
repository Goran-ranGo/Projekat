export class EditArticleDto {
    name: string;
    categoryId: number;
    excert: string;
    description: string;
    status: 'available' | 'visible' | 'hidden';
    isPromoted: 0 | 1;
    price: number;
    features: {   // niz objekata
        featureId: number;
        value: string;
    }[] | null;
}