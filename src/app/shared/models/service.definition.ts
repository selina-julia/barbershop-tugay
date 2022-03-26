export type TgyService = {
    title: string;
    description?: string;
    price: number;
    category: TgyServiceCategory;
};

export type TgyServiceCategory = "hair" | "beard" | "hairAndBeard";

export type TgyServiceStructure = {
    name: string;
    category: TgyServiceCategory;
};

export const serviceStructure: TgyServiceStructure[] = [
    { name: "Hair only", category: "hair" },
    { name: "Beard only", category: "beard" },
    { name: "Hair and beard", category: "hairAndBeard" }
];

export const serviceData: TgyService[] = [
    {
        title: "Kids Cut (2-4 Jahre)",
        description: "schneiden, stylen",
        price: 27,
        category: "hair"
    },
    {
        title: "Alan Cut (2-4 Jahre)",
        description: "schneiden, stylen, waschen",
        price: 29,
        category: "hair"
    },
    {
        title: "Bubus Cut (2-4 Jahre)",
        description: "schneiden, stylen, massieren",
        price: 69,
        category: "hairAndBeard"
    },
    {
        title: "Tugay's hair- & beardcut",
        price: 55,
        category: "hairAndBeard"
    },
    {
        title: "Tuga's Special Cut",
        price: 69,
        description: "Typ hallo Cut",
        category: "beard"
    }
];
