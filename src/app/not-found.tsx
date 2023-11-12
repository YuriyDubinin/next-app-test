import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Page not found',
    description: 'This page does not exist',
};

export default function NotFound() {
    return <div>Not found</div>;
}
