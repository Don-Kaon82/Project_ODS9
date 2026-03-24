const cursos = [
    { nome: "HTML e CSS", categoria: "Front-end" },
    { nome: "JavaScript Básico", categoria: "Front-end" },
    { nome: "Python", categoria: "Back-end" }
  ];
  
  const ferramentas = [
    { nome: "Canva", descricao: "Criação de designs" },
    { nome: "Google Drive", descricao: "Armazenamento de arquivos" },
    { nome: "Trello", descricao: "Organização de tarefas" }
  ];
  
  // Mostrar cursos
  const listaCursos = document.getElementById("lista-cursos");
  if (listaCursos) {
    cursos.forEach(curso => {
      listaCursos.innerHTML += `
        <div class="card">
          <h3>${curso.nome}</h3>
          <p>${curso.categoria}</p>
        </div>
      `;
    });
  }
  
  // Buscar cursos
  const busca = document.getElementById("busca");
  if (busca) {
    busca.addEventListener("input", () => {
      const valor = busca.value.toLowerCase();
      listaCursos.innerHTML = "";
  
      cursos
        .filter(c => c.nome.toLowerCase().includes(valor))
        .forEach(curso => {
          listaCursos.innerHTML += `
            <div class="card">
              <h3>${curso.nome}</h3>
              <p>${curso.categoria}</p>
            </div>
          `;
        });
    });
  }
  
  // Mostrar ferramentas
  const listaFerramentas = document.getElementById("lista-ferramentas");
  if (listaFerramentas) {
    ferramentas.forEach(f => {
      listaFerramentas.innerHTML += `
        <div class="card">
          <h3>${f.nome}</h3>
          <p>${f.descricao}</p>
        </div>
      `;
    });
  }