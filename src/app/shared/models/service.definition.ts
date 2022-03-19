export type TgyService = {
    title: string;
    description?: string;
    price: number;
    category: TgyServiceCategory;
};

export type TgyServiceCategory = "hair" | "beard" | "hairAndBeard";

export const services: TgyService[] = [
    {
        title: "Kids Cut (2-4 Jahre)",
        description: "schneiden, stylen",
        price: 27,
        category: "hair"
    },
    {
        title: "Tugay's hair- & beardcut",
        price: 55,
        category: "hairAndBeard"
    }
];
