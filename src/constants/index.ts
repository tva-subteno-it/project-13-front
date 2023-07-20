import chat from '../assets/icon-chat.png'
import money from '../assets/icon-money.png'
import security from '../assets/icon-security.png'

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

export const CATEGORIES: { [key: string]: string } = {
    'GHNb2uVxC6':' Food',
    '7J5R5qIYIX': 'Transportation',
    'XTyQa9k5k7': 'Entertainment',
    'ko7ZFSIZbM': 'Shopping',
    'AyX3RYEfPN': 'Housing',
    'dlJc9ZNHPx': 'Utilities',
    'sQksEyaIvD': 'Insurance',
    'ENokPjnkU5': 'Healthcare',
    'mNHh3du8Oe': 'Investment',
    'Lyfa6jubhX': 'Miscellaneous'
}
