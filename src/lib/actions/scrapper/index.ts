export async function scrapeAmazonProduct(url:string) {
    if(!url) return

    //brightdata proxy configuration
    const username = String(process.env.BRIGHT_DATA_USERNAME)
    const password = String(process.env.BRIGHT_DATA_PASSWORD)
    const port = 22225
    const session_id = (1000000 * Math.random()) | 0
    const option = {
        auth: {
            username: `${username}-session-${session_id}`,
            password
        },
        
    }
}