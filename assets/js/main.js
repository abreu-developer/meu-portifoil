const projects = [
  { name: 'JWD API — API Bancária', category: 'study', status: 'Concluído', description: 'API REST bancária para praticar desenvolvimento back-end e arquitetura em camadas, com autenticação JWT, proteção de senhas e gerenciamento de saldo.', tech: ['Python', 'Flask', 'SQLite', 'JWT', 'bcrypt', 'Pytest'], github: 'https://github.com/abreu-developer/API-Bancaria-com-JWT', initials: 'JB', tone: 'olive', features: ['Cadastro e login de usuários', 'Autenticação JWT', 'Senhas protegidas com bcrypt', 'Gerenciamento de saldo e persistência'] },
  { name: 'To Do List API', category: 'study', status: 'Concluído', description: 'API para gerenciamento de tarefas, desenvolvida durante meus estudos de desenvolvimento back-end.', tech: ['Python', 'Flask', 'SQL', 'REST API'], github: 'https://github.com/abreu-developer/to_do_list', initials: 'TD', tone: 'blue', features: ['Gerenciamento de tarefas', 'API REST', 'Persistência SQL'] },
  { name: 'API de Pagamentos', category: 'study', status: 'Concluído', description: 'API de pagamentos com Pix, com modelo de pagamentos e confirmação em tempo real via WebSocket.', tech: ['Python', 'Flask', 'WebSocket', 'SQLite'], github: 'https://github.com/abreu-developer/payment_API', initials: 'PX', tone: 'plum', features: ['Modelo de pagamentos Pix', 'Confirmação via WebSocket', 'Persistência SQLite'] },
  { name: 'API Django', category: 'development', status: 'Em desenvolvimento', description: 'API REST desenvolvida com Django e Django REST Framework, com autenticação, models e endpoints organizados.', tech: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL'], initials: 'DJ', tone: 'green', features: ['Autenticação', 'Models organizados', 'Endpoints REST'], noRepo: true },
  { name: 'Order Delivery API', category: 'study', status: 'Concluído', description: 'API REST para gerenciamento de pedidos de delivery, com arquitetura organizada, injeção de dependências e testes automatizados.', tech: ['Python', 'Flask', 'MongoDB', 'PyMongo', 'Pytest', 'Pylint'], github: 'https://github.com/abreu-developer/Order-Delivery-API', initials: 'OD', tone: 'orange', features: ['Criação, consulta e atualização de pedidos', 'Rotas e casos de uso organizados', 'Repository Pattern e injeção de dependências', 'Tratamento de erros e testes automatizados'] },
  { name: 'Pet Adoption API MVC', category: 'study', status: 'Concluído', description: 'API de adoção de animais desenvolvida em Python com padrão MVC, repositório SQLite, validação de dados e tratamento de erros.', tech: ['Python', 'Flask', 'MVC', 'SQLite'], github: 'https://github.com/abreu-developer/pet_adoption_API_mvc', initials: 'PA', tone: 'rose', features: ['Padrão MVC', 'Repositório SQLite', 'Validação de dados e tratamento de erros'] }
];

const stack = {
  'Linguagens': ['Python', 'Go (Golang)', 'SQL', 'HTML', 'CSS', 'JavaScript'],
  'Frameworks & bibliotecas': ['Flask', 'Django', 'Django REST Framework', 'FastAPI', 'Gin'],
  'Bancos de dados': ['PostgreSQL', 'MySQL', 'MongoDB', 'SQLite'],
  'Testes & qualidade': ['Pytest', 'Go Testing', 'Pylint'],
  'APIs & comunicação': ['REST API', 'HTTP', 'JSON', 'WebSocket'],
  'Mensageria & infraestrutura': ['RabbitMQ', 'Docker', 'Git', 'GitHub'],
  'Ferramentas de trabalho': ['VS Code', 'Postman', 'DBeaver', 'MySQL Workbench', 'MongoDB Compass'],
  'Organização & design': ['Trello', 'Notion', 'Excel', 'Figma']
};
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));

const grid = document.querySelector('#project-grid');
const search = document.querySelector('#project-search');
const category = document.querySelector('#category-filter');
const tech = document.querySelector('#tech-filter');
const status = document.querySelector('#status-filter');
const count = document.querySelector('#results-count');

if (grid) {
  [...new Set(projects.flatMap(project => project.tech))].sort((a,b) => a.localeCompare(b, 'pt-BR')).forEach(item => tech.add(new Option(item, item)));
  function renderProjects() {
    const query = search.value.trim().toLocaleLowerCase('pt-BR');
    const filtered = projects.filter(project => {
      const matchesQuery = `${project.name} ${project.description} ${project.tech.join(' ')}`.toLocaleLowerCase('pt-BR').includes(query);
      return matchesQuery && (category.value === 'all' || project.category === category.value) && (tech.value === 'all' || project.tech.includes(tech.value)) && (status.value === 'all' || project.status === status.value);
    });
    count.textContent = `${filtered.length} ${filtered.length === 1 ? 'projeto encontrado' : 'projetos encontrados'}`;
    grid.innerHTML = filtered.length ? filtered.map(project => `<article class="lab-card"><div class="lab-card-art ${project.tone}"><span class="card-index">${String(projects.indexOf(project) + 1).padStart(2,'0')} / 06</span><span class="card-monogram">${project.initials}</span><span class="card-art-label">${project.category === 'development' ? 'EM CONSTRUÇÃO' : 'LAB / BACK-END'}</span></div><div class="lab-card-body"><div class="project-meta"><span class="pill">${project.category === 'development' ? 'EM DESENVOLVIMENTO' : 'ESTUDO & PRÁTICA'}</span><span class="project-status ${project.status === 'Em desenvolvimento' ? 'status-progress' : ''}"><i></i>${escapeHTML(project.status)}</span></div><h3>${escapeHTML(project.name)}</h3><p>${escapeHTML(project.description)}</p><div class="tag-list">${project.tech.slice(0,4).map(item => `<span>${escapeHTML(item)}</span>`).join('')}${project.tech.length > 4 ? `<span>+${project.tech.length - 4}</span>` : ''}</div><details class="project-details"><summary>Funcionalidades <span>＋</span></summary><ul>${project.features.map(item => `<li>${escapeHTML(item)}</li>`).join('')}</ul></details><div class="card-links">${project.github ? `<a href="${project.github}" target="_blank" rel="noopener noreferrer">Acessar projeto no GitHub ↗</a>` : '<span class="no-link">Repositório não informado</span>'}</div></div></article>`).join('') : '<div class="empty-state"><span>⌕</span><h3>Nenhum projeto encontrado</h3><p>Tente ajustar sua busca ou os filtros.</p></div>';
  }
  [search, category, tech, status].forEach(control => control.addEventListener(control === search ? 'input' : 'change', renderProjects));
  renderProjects();
}

const stackGrid = document.querySelector('#stack-grid');
if (stackGrid) stackGrid.innerHTML = Object.entries(stack).map(([group, items], index) => `<section class="stack-group"><div class="stack-group-title"><span>${String(index + 1).padStart(2,'0')}</span><h3>${escapeHTML(group)}</h3></div><div class="stack-items">${items.map(item => `<span class="stack-item"><i aria-hidden="true">${escapeHTML(item.slice(0,1))}</i>${escapeHTML(item)}</span>`).join('')}</div></section>`).join('');

const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  nav.classList.toggle('is-open', open);
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Abrir menu');
  nav.classList.remove('is-open');
}));
