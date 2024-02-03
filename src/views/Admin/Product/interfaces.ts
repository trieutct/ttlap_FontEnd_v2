
export type IBodyUser = {
    email?: string;
    password?: string;
    name?: string;
    role?: string;
    avatar?: string;
    birthday?: string;
};

export type  IProductGetAll= {
    items: [];
    totalItems: number;
}