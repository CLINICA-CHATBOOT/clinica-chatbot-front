async function sendMessage(text) {
    const res = await fetch("/api/chat/respond", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ text })
  });
    const data = await res.json();
    console.log(data.reply);
}