import { cookies } from 'next/headers';

export default function Main() {
    console.log('cookie: ', cookies().getAll());
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="">main</div>
        </main>
    );
}
