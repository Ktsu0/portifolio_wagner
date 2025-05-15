export function footerIcons() {
    const github = document.getElementById('btnGithub');
    const whatsapp = document.getElementById('btnWhatsapp');
    const instagram = document.getElementById('btnInstagram');

    github.addEventListener('click', function () {
        window.open('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWA95xyqlA7IbQCxAHEgWODhG3ufcsf_RmLw&s', '_blank');
    });

    whatsapp.addEventListener('click', function () {
        window.open('https://i.gifer.com/origin/6b/6bd435618b6c7e8c3faa24527442fe89_w200.webp', '_blank');
    });

    instagram.addEventListener('click', function () {
        window.open('https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmpkb2Y3aXFnYnQ4dWQ4OTE3d3MxamFrNmV0Z2ZjZmtzcTE2Zms4NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/WXB88TeARFVvi/200w.webp', '_blank');
    });
}
document.addEventListener('DOMContentLoaded', footerIcons);
