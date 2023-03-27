export async function Repo(){
    await new Promise ((resolve) => setTimeout(resolve, 2000) )


    const response = await fetch('https://todoist.com/oauth/authorize?client_id=0123456789abcdef&scope=data:read,data:delete&state=secretstring', {
        cache: 'no-store'
    })

    const repos = await response.json()

    return (
        <div>
            <h1>Repos</h1>
            <pre>{JSON.stringify(repos, null, 2)}</pre>
        </div>
    )
}