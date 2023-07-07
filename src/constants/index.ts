import chat from '../assets/icon-chat.png'
import money from '../assets/icon-money.png'
import security from '../assets/icon-security.png'
import { History } from '../@types'

export const FEATURES = [
    {
        icon: chat,
        title: 'You are our #1 priority',
        description: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
    },
    {
        icon: money,
        title: 'More savings means higher rates',
        description: 'The more you save with us, the higher your interest rate will be!'
    },
    {
        icon: security,
        title: 'Security you can trust',
        description: 'We use top of the line encryption to make sure your data and money is always safe.'
    }
]

export const ACCOUNTS = [
    {
        title: 'Bank savings',
        number_of_transactions: 7253,
        balance: 10904.52,
        currency: 'USD',
        description: 'Available balance',
        id: 1
    },
    {
        title: 'Credit card',
        number_of_transactions: 158,
        balance: -750.28,
        currency: 'USD',
        description: 'Outstanding balance',
        id: 2
    },
    {
        title: 'Investment portfolio',
        number_of_transactions: 342,
        balance: 250000,
        currency: 'USD',
        description: 'Total value',
        id: 3
    },
    {
        title: 'Checking account',
        number_of_transactions: 1235,
        balance: 5089.67,
        currency: 'USD',
        description: 'Current balance',
        id: 4
    }
]

export const SYMBOLS: {
    [key: string]: string
} = {
    USD: '$',
    EUR: '€',
}

export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    SIGNUP: '/signup',
    TRANSACTIONS: '/profile',
    TRANSACTIONS_ID: '/profile/:id',
}

export const CATEGORIES = [
    'Food',
    'Transportation',
    'Entertainment',
    'Shopping',
    'Housing',
    'Utilities',
    'Insurance',
    'Healthcare',
    'Investment',
    'Miscellaneous'
]

export const TRANSACTIONS: {parent_id: number, history: History[]}[] = [
    {
        parent_id: 1,
        history: [
            {
                date: '2020-07-01',
                description: 'Netflix',
                amount: 12.99,
                currency: 'USD',
                type: 'debit',
                balance: 10904.52,
                notes: "",
                category: "",
                transactionType: "Electronic"
            }
        ]
    },
    {
        parent_id: 2,
        history: [
            {
                date: '2021-02-15',
                description: 'Amazon',
                amount: 43.78,
                currency: 'USD',
                type: 'debit',
                balance: -750.28,
                notes: "",
                category: "",
                transactionType: "Electronic"
            },
            {
                date: '2021-02-22',
                description: 'Salary',
                amount: 2500,
                currency: 'USD',
                type: 'credit',
                balance: 1750.28,
                notes: "",
                category: "",
                transactionType: "Electronic"
            }
        ]
    },
    {
        parent_id: 3,
        history: [
            {
                date: '2022-09-10',
                description: 'Restaurant',
                amount: 75.25,
                currency: 'USD',
                type: 'debit',
                balance: 249924.75,
                notes: "",
                category: "",
                transactionType: "Electronic"
            },
            {
                date: '2022-09-15',
                description: 'Refund',
                amount: 50,
                currency: 'USD',
                type: 'credit',
                balance: 249974.75,
                notes: "",
                category: "",
                transactionType: "Electronic"
            },
            {
                date: '2022-09-30',
                description: 'Groceries',
                amount: 98.99,
                currency: 'USD',
                type: 'debit',
                balance: 249875.76,
                notes: "",
                category: "",
                transactionType: "Electronic"
            }
        ]
    }
]