import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(...inputs))
}

export function capitalize(input: string) {
    return input
        .split(' ')
        .map(str => str.at(0)?.toUpperCase() + str.slice(1))
        .join(' ')
}