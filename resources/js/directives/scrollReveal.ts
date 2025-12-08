// Simple scroll reveal directive using IntersectionObserver
import type { DirectiveBinding } from 'vue'

interface ScrollRevealOptions {
    delay?: number
}

export default {
    mounted(el: HTMLElement, binding: DirectiveBinding<ScrollRevealOptions>) {
        const delay = binding.value?.delay ?? 0

        el.style.opacity = '0'
        el.style.transform = 'translateY(24px)'
        el.style.transition = `opacity 600ms ease-out ${delay}ms, transform 600ms ease-out ${delay}ms`

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        el.style.opacity = '1'
                        el.style.transform = 'translateY(0)'
                        observer.unobserve(el)
                    }
                })
            },
            {
                threshold: 0.2,
            },
        )

        observer.observe(el)
    },
}
