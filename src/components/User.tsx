export async function User(){
    await new Promise ((resolve) => setTimeout(resolve, 5000) )


    const response = await fetch('https://api.github.com/users/LucasDCoelho', {
        cache: 'no-store'
    })

    const repos = await response.json()

    return (
        <div>
            <h1>User</h1>
            <pre>{JSON.stringify(repos, null, 2)}</pre>
        </div>
    )
}
// Deduplicação Automática (Evitar duplicação de requisições)