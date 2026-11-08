// ---- Your projects: edit this list. Add "url" when an app is live. ----
const projects = [
  {
    title: "App one",
    description: "One line on what this app does and who it is for.",
    tags: ["JavaScript", "Node.js"],
    url: "" // paste the live link here later, e.g. "https://yourusername.github.io/app-one"
  },
  {
    title: "App two",
    description: "A second project slot, ready for the next build.",
    tags: ["React", "API"],
    url: ""
  },
  {
    title: "App three",
    description: "Another slot. Delete any you don’t need.",
    tags: ["HTML", "CSS"],
    url: ""
  }
];

// ---- Render projects ----
const list = document.getElementById("projects");
projects.forEach((p) => {
  const li = document.createElement("li");
  const live = Boolean(p.url);
  const el = document.createElement(live ? "a" : "div");
  el.className = "proj" + (live ? "" : " soon");
  if (live) { el.href = p.url; el.target = "_blank"; el.rel = "noopener"; }

  const h = document.createElement("h3");
  h.textContent = p.title;
  const d = document.createElement("p");
  d.textContent = p.description;
  const tags = document.createElement("div");
  tags.className = "tags";
  p.tags.forEach((t) => {
    const s = document.createElement("span");
    s.textContent = t;
    tags.appendChild(s);
  });
  const state = document.createElement("div");
  state.className = "state";
  state.innerHTML = live
    ? '<span class="label">Open live</span><span class="arrow" aria-hidden="true">↗</span>'
    : '<span class="label">Coming soon</span>';

  el.append(h, d, tags, state);
  li.appendChild(el);
  list.appendChild(li);
});

// ---- Footer year ----
document.getElementById("year").textContent = new Date().getFullYear();

// ---- Theme toggle (remembers choice) ----
const root = document.documentElement;
try {
  const saved = localStorage.getItem("theme");
  if (saved) root.dataset.theme = saved;
} catch (e) {}
document.getElementById("theme").addEventListener("click", () => {
  const dark = getComputedStyle(root).getPropertyValue("--bg").trim() === "#0c1f21";
  const next = dark ? "light" : "dark";
  root.dataset.theme = next;
  try { localStorage.setItem("theme", next); } catch (e) {}
});