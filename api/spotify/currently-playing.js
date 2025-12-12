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

        const nowRes = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
            headers: { Authorization: `Bearer ${accessToken}` },
        });

        // 204 = niks speelt
        if (nowRes.status === 204) return res.json({ playing: false });

        const nowData = await nowRes.json();
        if (!nowRes.ok) return res.status(500).json({ error: nowData });

        const item = nowData.item;
        if (!item) return res.json({ playing: false });

        return res.json({
            playing: true,
            track: {
                name: item.name,
                artists: item.artists?.map(a => a.name).join(", "),
                album: item.album?.name,
                image: item.album?.images?.[0]?.url,
                url: item.external_urls?.spotify,
            },
        });
    } catch (e) {
        return res.status(500).json({ error: String(e) });
    }
}
