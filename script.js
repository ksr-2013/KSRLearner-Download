// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add fade-in animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(10px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Download Functionality
const downloadButtons = document.querySelectorAll('.btn-download-large');
const downloadModal = document.getElementById('downloadModal');
const closeModal = document.querySelector('.close');
const cancelDownload = document.getElementById('cancelDownload');
let downloadInterval = null;

function clearDownloadInterval() {
    if (downloadInterval) {
        clearInterval(downloadInterval);
        downloadInterval = null;
    }
}

downloadButtons.forEach(button => {
    // Skip App Store link (has href and no data-file)
    if (button.getAttribute('href') && !button.getAttribute('data-file')) {
        return;
    }

    button.addEventListener('click', (e) => {
        e.preventDefault();
        const fileName = button.getAttribute('data-file');
        const os = button.getAttribute('data-os');
        
        // Clear any existing interval
        clearDownloadInterval();
        
        // Show modal
        if (downloadModal) {
            downloadModal.style.display = 'block';
            
            // Animate progress bar
            const progressBar = document.querySelector('.progress-bar');
            if (progressBar) {
                progressBar.style.width = '0%';
                
                // Simulate download progress
                let progress = 0;
                downloadInterval = setInterval(() => {
                    progress += Math.random() * 15;
                    if (progress > 100) progress = 100;
                    progressBar.style.width = progress + '%';
                    
                    if (progress >= 100) {
                        clearDownloadInterval();
                        // After progress completes, trigger download
                        setTimeout(() => {
                            triggerDownload(fileName, os);
                        }, 500);
                    }
                }, 200);
            }
        } else {
            // If modal doesn't exist, trigger download directly
            triggerDownload(fileName, os);
        }
    });
});

// Close modal functions
if (closeModal) {
    closeModal.addEventListener('click', () => {
        downloadModal.style.display = 'none';
        clearDownloadInterval();
    });
}

if (cancelDownload) {
    cancelDownload.addEventListener('click', () => {
        downloadModal.style.display = 'none';
        clearDownloadInterval();
        const progressBar = document.querySelector('.progress-bar');
        progressBar.style.width = '0%';
    });
}

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === downloadModal) {
        downloadModal.style.display = 'none';
        clearDownloadInterval();
    }
});

// Trigger Download Function
function triggerDownload(fileName, os) {
    // File path - update this if your files are hosted elsewhere
    // Option 1: Local files (same directory as website)
    const fileUrl = `files/${fileName}`;
    
    // Option 2: If files are on a CDN or different server, use:
    // const fileUrl = `https://your-cdn.com/files/${fileName}`;
    // const fileUrl = `https://your-server.com/downloads/${fileName}`;
    
    // Create a temporary anchor element for download
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.style.display = 'none';
    document.body.appendChild(link);
    
    // Trigger the download
    link.click();
    
    // Clean up and close modal
    setTimeout(() => {
        if (downloadModal) {
            downloadModal.style.display = 'none';
        }
        document.body.removeChild(link);
    }, 1000);
}

// Add scroll effect to navbar
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Intersection Observer for fade-in animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe OS download sections
document.querySelectorAll('.os-download-section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Add loading animation for sections
window.addEventListener('load', () => {
    const sections = document.querySelectorAll('.os-download-section');
    sections.forEach((section, index) => {
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Add click effect to download buttons
downloadButtons.forEach(button => {
    if (button.getAttribute('href')) return; // Skip iOS App Store link
    
    button.addEventListener('mousedown', () => {
        button.style.transform = 'translateY(0) scale(0.98)';
    });
    
    button.addEventListener('mouseup', () => {
        button.style.transform = 'translateY(-2px) scale(1)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0) scale(1)';
    });
});

// Search functionality (optional enhancement)
function addSearchFunctionality() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search downloads...';
    searchInput.className = 'search-input';
    searchInput.style.cssText = `
        padding: 0.75rem 1rem;
        border: 2px solid var(--border-color);
        border-radius: 0.5rem;
        width: 100%;
        max-width: 400px;
        margin: 0 auto 2rem;
        display: block;
        font-size: 1rem;
    `;

    const downloadsSection = document.querySelector('.downloads-section .container');
    if (downloadsSection) {
        const sectionTitle = downloadsSection.querySelector('.section-title');
        sectionTitle.insertAdjacentElement('afterend', searchInput);

        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            downloadCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    }
}

// Uncomment to enable search functionality
// addSearchFunctionality();

// Add to top button (optional enhancement)
function addScrollToTopButton() {
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollTopBtn.className = 'scroll-to-top';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        width: 50px;
        height: 50px;
        background: var(--primary-color);
        color: white;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
        box-shadow: var(--shadow-lg);
        z-index: 999;
        transition: all 0.3s ease;
    `;

    document.body.appendChild(scrollTopBtn);

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    scrollTopBtn.addEventListener('mouseenter', () => {
        scrollTopBtn.style.transform = 'translateY(-5px)';
        scrollTopBtn.style.boxShadow = '0 15px 25px -5px rgba(37, 99, 235, 0.3)';
    });

    scrollTopBtn.addEventListener('mouseleave', () => {
        scrollTopBtn.style.transform = 'translateY(0)';
        scrollTopBtn.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
    });
}

// Uncomment to enable scroll to top button
// addScrollToTopButton();

console.log('KSR Learner App Download Website initialized!');

