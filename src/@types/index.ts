export interface History {
    date: string;
    description: string;
    amount: number;
    currency: string;
    type: "debit" | "credit";
    balance: number;
    notes: string;
    category_id: string;
    transactionType: string;
}

export interface Account {
    balance: number;
    number_of_transactions: number;
    description: string;
    currency: string;
    _id: string;
    title: string;
    userId: string
}