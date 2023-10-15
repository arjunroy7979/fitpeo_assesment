import {
    HiOutlineViewGrid,
    HiOutlineCube,
    HiOutlineUserGroup,
    HiBadgeCheck,
    HiOutlineQuestionMarkCircle,
    HiCurrencyDollar
} from 'react-icons/hi'
export const DASHBOARD_SIDEBAR_LINKS = [
    {
        key: 'dashboard',
        label: 'Dashboard',
        path: '/',
        icon: <HiOutlineViewGrid />
    },
    {
        key: 'products',
        label: 'Products',
        path: '/products',
        icon: <HiOutlineCube />
    },
    {
        key: 'customers',
        label: 'Customers',
        path: '/customers',
        icon: <HiOutlineUserGroup />
    },
    {
        key: 'income',
        label: 'Income',
        path: '/income',
        icon: <HiCurrencyDollar />
    },
    {
        key: 'promote',
        label: 'Promote',
        path: '/promote',
        icon: <HiBadgeCheck />
    },
    {
        key: 'support',
        label: 'Help',
        path: '/support',
        icon: <HiOutlineQuestionMarkCircle />
    }
]

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
    {
        key: 'avatar',
        label: 'Arjun Kumar',
        degination:"Project Mangaer",
        path: '/profile',
        img:'https://play-lh.googleusercontent.com/7Ak4Ye7wNUtheIvSKnVgGL_OIZWjGPZNV6TP_3XLxHC-sDHLSE45aDg41dFNmL5COA'
       
    },

]