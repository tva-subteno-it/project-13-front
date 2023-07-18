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