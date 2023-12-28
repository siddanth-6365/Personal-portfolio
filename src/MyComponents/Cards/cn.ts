import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// function (cn) provides a convenient way to combine and merge class names, leveraging both the clsx and tailwind-merge libraries