export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const formBody = new URLSearchParams();

        for (const key in req.body) {
            formBody.append(key, req.body[key]);
        }

        const response = await fetch(
            // "https://script.google.com/macros/s/AKfycby8l6vy2_tZs57IJmXIek1X6sr2QipFs4TL_O25-53Ofn_aveUDV_nv61OownuLDcvf/exec",
            "https://script.google.com/macros/s/AKfycbzQ6jb-yG6X1EsKNwpjhMAS5QtrwwAdJMbslJ3lQqoWO6OEMtSaaZ35RR7AhPjf1NUh/exec",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: formBody.toString(),
            }
        );

        const text = await response.text();

        return res.status(200).json({
            success: response.ok,
            googleResponse: text,
        });
    } catch (error) {
        console.error("Proxy error:", error);
        return res.status(500).json({ success: false });
    }
}
