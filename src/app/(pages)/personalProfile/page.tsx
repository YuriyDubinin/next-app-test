// SSR | SSG | ISR
const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        // cache: 'force-cache'         // cahse
        // next: { revalidate: 10 }     // revalidate data every 10 sec
    });
    return await response.json();
};

export default async function PersonalProfile() {
    const data = await fetchData();

    return (
        <div>
            <h1>Personal Profile</h1>
            <div>===</div>
            <div>id: {data.id}</div>
            <div>title: {data.title}</div>
        </div>
    );
}
