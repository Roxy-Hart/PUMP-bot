async function sendQuery() {
  const q = document.getElementById("query").value;
  const res = await fetch(`http://localhost:8000/query?q=${encodeURIComponent(q)}`);
  const data = await res.json();
  document.getElementById("response").innerText = data.response;
}
