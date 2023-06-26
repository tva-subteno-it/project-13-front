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

export const TRANSACTIONS = [
    {
        title: 'Bank savings',
        number_of_transactions: 7253,
        balance: 10904.52,
        currency: 'USD',
        description: 'Available balance'
    },
    {
        title: 'Credit card',
        number_of_transactions: 158,
        balance: -750.28,
        currency: 'USD',
        description: 'Outstanding balance'
    },
    {
        title: 'Investment portfolio',
        number_of_transactions: 342,
        balance: 250000,
        currency: 'USD',
        description: 'Total value'
    },
    {
        title: 'Checking account',
        number_of_transactions: 1235,
        balance: 5089.67,
        currency: 'USD',
        description: 'Current balance'
    }
]

export const SYMBOLS: {
    [key: string]: string
} = {
    USD: '$',
    EUR: '€',
}