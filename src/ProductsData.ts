export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
}

export const mockData: Product[] = [
    {
        description: "A collection of navigational components that compose declaratiely with your app",
        id: 1,
        name: "React Router",
        price: 8
    },
    {
        description: "A library that helps manage state across your app",
        id: 2,
        name: "React Redux",
        price: 12
    },
    {
        description: "A library that helps you interact with a GraphQL backend",
        id: 3,
        name: "React Apollo",
        price: 12
    }
];
