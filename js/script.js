const input = document.getElementById('passInput');
const charCount = document.getElementById('char-count');
const segments = [
    document.getElementById('seg-1'),
    document.getElementById('seg-2'),
    document.getElementById('seg-3'),
    document.getElementById('seg-4')
];

input.addEventListener('input', () => {
    const senha = input.value;
    charCount.innerText = senha.length;
    
    let forca = 0;

    
    if (senha.length > 0) {
        if (senha.length >= 2) forca = 1; 
        if (senha.length >= 5) forca = 2; 
        if (senha.length >= 7) forca = 3;
        if (senha.length >= 9) forca = 4; 
    }

   
    segments.forEach(seg => {
        seg.classList.remove('vermelho', 'amarelo', 'verde');
        seg.style.backgroundColor = "#e0e0e0"; 
    });

    let classeCor = "";
    if (forca === 1) classeCor = "vermelho";
    else if (forca === 2 || forca === 3) classeCor = "amarelo";
    else if (forca === 4) classeCor = "verde";

    
    for (let i = 0; i < forca; i++) {
        segments[i].classList.add(classeCor);
        segments[i].style.backgroundColor = ""; 
    }
});
