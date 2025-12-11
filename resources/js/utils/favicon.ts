/**
 * Dynamic Favicon and Page Title Handler
 * Makes your browser tab look next level with emoji reactions and dynamic titles
 */

let originalTitle = '';
let isTabVisible = true;

/**
 * Initialize dynamic favicon and title effects
 */
export function initFavicon() {
    originalTitle = document.title;

    // Track tab visibility
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Track dark/light mode changes
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeQuery.addEventListener('change', handleThemeChange);
}

/**
 * Handle when user switches tabs
 */
function handleVisibilityChange() {
    isTabVisible = !document.hidden;

    if (!isTabVisible) {
        // When user leaves the tab
        document.title = '👋 Come back! - TerpDev';
    } else {
        // When user returns to the tab
        document.title = '👀 Welcome back! - TerpDev';

        // Reset to original after 2 seconds
        setTimeout(() => {
            document.title = originalTitle;
        }, 2000);
    }
}

/**
 * Handle theme changes (dark/light mode)
 */
function handleThemeChange(e: MediaQueryListEvent) {
    const isDark = e.matches;
    updateThemeColor(isDark);
}

/**
 * Update theme color based on dark/light mode
 */
function updateThemeColor(isDark: boolean) {
    const themeColor = isDark ? '#09090b' : '#ffffff';

    let metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (!metaThemeColor) {
        metaThemeColor = document.createElement('meta');
        metaThemeColor.setAttribute('name', 'theme-color');
        document.head.appendChild(metaThemeColor);
    }
    metaThemeColor.setAttribute('content', themeColor);
}

/**
 * Add custom title when hovering over specific sections
 */
export function updateTitleOnScroll() {
    const sections = [
        { id: 'home', title: '🏠 Home - TerpDev' },
        { id: 'about', title: '👨‍💻 About - TerpDev' },
        { id: 'timeline', title: '📅 Timeline - TerpDev' },
        { id: 'projects', title: '🚀 Projects - TerpDev' },
        { id: 'skills', title: '⚡ Skills - TerpDev' },
    ];

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && isTabVisible) {
                    const section = sections.find((s) => s.id === entry.target.id);
                    if (section) {
                        document.title = section.title;
                    }
                }
            });
        },
        { threshold: 0.5 }
    );

    sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
            observer.observe(element);
        }
    });
}

/**
 * Cleanup event listeners
 */
export function cleanupFavicon() {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
}

