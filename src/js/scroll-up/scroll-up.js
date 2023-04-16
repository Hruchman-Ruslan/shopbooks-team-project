export const btnUp = {
    el: document.querySelector('.btn__up'),
    scrolling: false,
    show() {
        if (this.el.classList.contains('btn__uphide') && !this.el.classList.contains('btn__uphiding')) {
            this.el.classList.remove('btn__uphide');
            this.el.classList.add('btn__uphiding');
            window.setTimeout(() => {
                this.el.classList.remove('btn__uphiding');
            }, 300);
        }
    },
    hide() {
        if (!this.el.classList.contains('btn__uphide') && !this.el.classList.contains('btn__uphiding')) {
            this.el.classList.add('btn__uphiding');
            window.setTimeout(() => {
                this.el.classList.add('btn__uphide');
                this.el.classList.remove('btn__uphiding');
            }, 300);
        }
    },
    addEventListener() {
        // При прокрутці вікна (window)
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            if (this.scrolling && scrollY > 0) {
                return;
            }
            this.scrolling = false;
            // якщо користувачи прокрутив сторінку більше ніж на 400px
            if (scrollY > 400) {
                // робимо кнопку .btn-up видимою
                this.show();
            } else {
                // інакше приховуємо кнопку .btn-up
                this.hide();
            }
        });
        // при натиску на кнопку .btn-up
        document.querySelector('.btn__up').onclick = () => {
            this.scrolling = true;
            this.hide();
            // перемістимось в верхню частину сторніки
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();