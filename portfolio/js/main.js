// main.js

document.addEventListener('DOMContentLoaded', function() {
    // プロジェクトデータを取得して表示する関数
    fetch('assets/data/projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects');
            data.projects.forEach(project => {
                const projectElement = document.createElement('div');
                projectElement.classList.add('project');
                projectElement.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                `;
                projectsContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error('Error fetching project data:', error));
});