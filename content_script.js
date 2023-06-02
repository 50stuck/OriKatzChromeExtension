const text = document.querySelectorAll('h1, h2, h3, h4, h5, p, li, td, caption, span, a')

for (let i=0; i < text.length; i++) {
    if (text[i].innerHTML.includes('אורי כץ')) {
        text[i].innerHTML = text[i].innerHTML.replace('אורי כץ', 'אורי כץ פורום קהלת')
    } else if (text[i].innerHTML.includes('Ori Katz')) {
        text[i].innerHTML = text[i].innerHTML.replace('Ori Katz', 'Ori Katz Kohelet Policy Forum')
    }
}
