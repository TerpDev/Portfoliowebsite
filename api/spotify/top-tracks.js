export default async function handler(req, res) {
    try {
        const clientId = process.env.SPOTIFY_CLIENT_ID;
        const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
        const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN;

        if (!clientId || !clientSecret || !refreshToken) {
            return res.status(500).json({ error: "Missing Spotify env vars" });
        }

        const basic = Buffer.from(`${clientId}:${clientSecret}`).toString("base64");

        const tokenRes = await fetch("https://accounts.spotify.com/api/token", {
            method: "POST",
            headers: {
                Authorization: `Basic ${basic}`,
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                grant_type: "refresh_token",
                refresh_token: refreshToken,
            }),
        });

        const tokenData = await tokenRes.json();
        if (!tokenRes.ok) return res.status(500).json({ error: tokenData });

        const accessToken = tokenData.access_token;

        const topRes = await fetch(
            "https://api.spotify.com/v1/me/top/tracks?limit=5&time_range=short_term",
            { headers: { Authorization: `Bearer ${accessToken}` } }
        );

        const topData = await topRes.json();
        if (!topRes.ok) return res.status(500).json({ error: topData });

        const tracks = (topData.items ?? []).map((t) => ({
            name: t.name,
            artists: t.artists?.map(a => a.name).join(", "),
            album: t.album?.name,
            image: t.album?.images?.[0]?.url,
            url: t.external_urls?.spotify,
        }));

        return res.json({ tracks });
    } catch (e) {
        return res.status(500).json({ error: String(e) });
    }
}
