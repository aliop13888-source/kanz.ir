// منوی موبایل
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
}

// رندر اخبار از JSON
async function renderNews() {
  const list = document.getElementById('news-list');
  if (!list) return;
  try {
    const res = await fetch('data/news.json');
    const news = await res.json();
    list.innerHTML = '';
    news.slice(0, 6).forEach(item => {
      const li = document.createElement('li');
      li.className = 'news-item';
      li.innerHTML = 
        <h4>${item.title}</h4>
        <p>${item.summary}</p>
        <time>${item.date}</time>
      ;
      list.appendChild(li);
    });
  } catch (e) {
    list.innerHTML = '<li class="news-item"><p>خطا در بارگذاری اخبار.</p></li>';
  }
}
renderNews();